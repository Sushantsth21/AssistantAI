import { Pinecone } from '@pinecone-database/pinecone';
import OpenAI from 'openai';

// Ensure the environment variables are defined
const PineconeApiKey: string | undefined = process.env.PINECONE_API_KEY;
const OpenaiApiKey: string | undefined = process.env.OPENAI_API_KEY;

if (!PineconeApiKey) {
  throw new Error('PINECONE_API_KEY is not defined in the environment variables.');
}

if (!OpenaiApiKey) {
  throw new Error('OPENAI_API_KEY is not defined in the environment variables.');
}

export const pc = new Pinecone({
  apiKey: PineconeApiKey,
});

export const openai = new OpenAI({
  apiKey: OpenaiApiKey,
});
