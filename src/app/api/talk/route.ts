import { NextRequest, NextResponse } from 'next/server';
import { openai, pc } from '../config';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

// Update the Message type to match ChatCompletionMessageParam
type Message = ChatCompletionMessageParam;

// Initialize chat history with the system message
let chatHistory: Message[] = [
  {
    role: 'system',
    content: "You are a helpdesk assistant at a gym. Provide helpful responses to questions using the given context."
  }
];

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ reply: null }, { status: 400 });
  }

  try {
    const [embeddingResponse, index] = await Promise.all([
      openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: message,
      }),
      pc.index("assistant"),
    ]);

    const embedding = embeddingResponse.data[0].embedding;

    const queryResponse = await index.namespace('example-namespace').query({
      vector: embedding,
      topK: 3,
      includeMetadata: true,
    });

    const metadataResults = queryResponse.matches.map(match => match.metadata);

    // Add the user's message to the chat history
    chatHistory.push({ role: 'user', content: message });

    // Prepare the messages for the OpenAI API
    const messagesForAPI: ChatCompletionMessageParam[] = [
      ...chatHistory,
      { 
        role: 'user', 
        content: `Context: ${JSON.stringify(metadataResults)} 
                  Please use this context to inform your response to the user's latest message.` 
      }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messagesForAPI,
      temperature: 0.7,
      max_tokens: 150,
    });

    if (response.choices && response.choices.length > 0) {
      const reply = response.choices[0].message.content;
      
      if (reply) {
        // Add the bot's reply to the chat history
        chatHistory.push({ role: 'assistant', content: reply });

        // Limit the chat history to the last 10 messages to prevent it from growing too large
        if (chatHistory.length > 11) {
          chatHistory = [
            chatHistory[0], // Keep the system message
            ...chatHistory.slice(-10) // Keep the last 10 messages
          ];
        }

        return NextResponse.json({ reply, history: chatHistory });
      } else {
        throw new Error("Empty reply from OpenAI");
      }
    } else {
      throw new Error("Unexpected response structure from OpenAI");
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ reply: null, history: chatHistory }, { status: 500 });
  }
}