
'use client'
import { useEffect,useState } from 'react'
import Link from 'next/link'
export default function Dashboard(){
  const [notes,setNotes]=useState([])
  const [search,setSearch]=useState('')
  useEffect(()=>{fetch('/api/notes').then(r=>r.json()).then(setNotes)},[])
  const filtered=notes.filter((n:any)=>n.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="space-y-4">
      <h2 className="text-3xl">Dashboard</h2>
      <input className="w-full p-2 bg-zinc-800" placeholder="Search" onChange={e=>setSearch(e.target.value)} />
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map((n:any)=>(
          <Link key={n.id} href={`/brain/${n.id}`} className="bg-zinc-800 p-4 rounded">
            <h3>{n.title}</h3>
            <p className="text-sm text-zinc-400">{n.type}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
