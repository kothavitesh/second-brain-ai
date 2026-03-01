export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

import { NextResponse } from 'next/server'
export async function POST(req:Request){
  const {id}=await req.json()
  const note=await prisma.knowledgeItem.findUnique({where:{id}})
  if(!note) return NextResponse.json({error:"Not found"})
  const completion=await openai.chat.completions.create({
    model:"gpt-4o-mini",
    messages:[{role:"user",content:`Summarize and generate tags:\n${note.content}`}]
  })
  const summary=completion.choices[0].message.content
  await prisma.knowledgeItem.update({where:{id},data:{summary}})
  return NextResponse.json({summary})
}
