import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});

export async function POST(request: Request) {
    console.log('POST /api/chat');
    
    // Get user input from request body
    const { userMessage } = await request.json();
    
    try {
        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: "gpt-4o", 
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: userMessage } 
            ],
        });

        console.log(completion.choices[0].message.content); // Log the response content
        
        // Return response
        return NextResponse.json({ message: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        return NextResponse.json({ error: 'Error calling OpenAI API' }, { status: 500 });
    }
}
