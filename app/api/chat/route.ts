import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const runtime = 'edge'

const systemPrompt = `You are the AI assistant for [Your Name], a B.Tech AI/ML student. 

Skills: Full-Stack (Next.js, Node.js), AI (Python, TensorFlow, RAG).

Projects: "CodeSync" (AI code generator), "MindFlow" (AI OS), and "Project Neo" (this portfolio).

Tone: Professional but enthusiastic, technical but accessible.

If asked about topics unrelated to software, engineering, or hiring [Your Name], politely steer the conversation back to the portfolio.`


export async function POST(req: Request): Promise<Response> {
  try {
    const { messages } = await req.json()

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ]
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)

  } catch (error: any) {
    console.error("Error during OpenAI request:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
