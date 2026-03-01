
import { prisma } from '@/lib/db'
export default async function Page({ params }: any){
  const note=await prisma.knowledgeItem.findUnique({where:{id:params.id}})
  if(!note) return <div>Not found</div>
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{note.title}</h1>
      <p>{note.content}</p>
      {note.summary && <div className="bg-zinc-900 p-4 rounded">Summary: {note.summary}</div>}
    </div>
  )
}
