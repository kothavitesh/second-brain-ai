
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'
export async function GET(){
  return NextResponse.json(await prisma.knowledgeItem.findMany({orderBy:{createdAt:'desc'}}))
}
export async function POST(req:Request){
  const body=await req.json()
  return NextResponse.json(await prisma.knowledgeItem.create({data:body}))
}
