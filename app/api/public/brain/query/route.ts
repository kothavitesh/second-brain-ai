
import { prisma } from '@/lib/db'
import { openai } from '@/lib/openai'
import { NextResponse } from 'next/server'
export async function GET(req:Request){
  const {searchParams}=new URL(req.url)
  const q=searchParams.get('q')||''
  const notes=await prisma.knowledgeItem.findMany({take:5})
  const context=notes.map(n=>n.content).join("\n")
  const completion=await openai.chat.completions.create({
    model:"gpt-4o-mini",
    messages:[{role:"user",content:`Context:\n${context}\nQuestion:${q}`}]
  })
  return NextResponse.json({answer:completion.choices[0].message.content,sources:notes.map(n=>n.title)})
}
