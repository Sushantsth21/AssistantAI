import { NextResponse } from 'next/server';
import { pc, openai } from "../config";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
import { Index as PineconeIndex } from "@pinecone-database/pinecone";

// Function to split a document into smaller chunks
async function splitDocument(text: string): Promise<Document[]> {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 250,
    chunkOverlap: 35,
  });
  const output = await splitter.createDocuments([text]);
  return output;
}

export async function POST(request: Request) {
  const { message }: { message: string } = await request.json();

  // Step 1: Split the message into smaller chunks
  const chunkData = await splitDocument(message);

  // Step 2: Create and store embeddings for each chunk
  const date = new Date();
  const index: PineconeIndex = pc.index("assistant");
  
  await Promise.all(
    chunkData.map(async (chunk: Document, i: number) => {
      const embeddingResponse = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: chunk.pageContent,
      });
      
      const embedding: number[] = embeddingResponse.data[0].embedding;
      const uniqueId = `vector-${date.toISOString()}-${i}`;

      // Upsert the vector with the embedding to Pinecone
      await index.namespace('example-namespace').upsert([
        {
          id: uniqueId,
          values: embedding,
          metadata: { message: chunk.pageContent }, // Store the chunk content as metadata
        }
      ]);
    })
  );

  return NextResponse.json({ success: true });
}