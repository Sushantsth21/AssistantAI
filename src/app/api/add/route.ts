import { NextResponse } from 'next/server';
import {pc,openai } from "../config"


export async function POST(request: Request) {
    const { message } = await request.json();
  
    // Create embedding for the message
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: message,
    });
  
    const embedding = embeddingResponse.data[0].embedding 

    const date = new Date();
    const uniqueId = `vector-${date.toISOString()}`;
  
    // Initialize Pinecone client
    const index = pc.index("assistant")
  
    // Upsert the vector with the embedding to Pinecone
    await index.namespace('example-namespace').upsert([
        {
            id: uniqueId,
            values: embedding,
            metadata: { message }, // Store the message as metadata
          }
      ])
  
    return NextResponse.json({ success: true });
 }