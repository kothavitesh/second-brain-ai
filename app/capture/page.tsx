
'use client'
import { useState } from 'react'
export default function Capture(){
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const [type,setType]=useState('note')
  const [tags,setTags]=useState('')
  const [sourceUrl,setSourceUrl]=useState('')

  const submit=async()=>{
    await fetch('/api/notes',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({title,content,type,tags:tags.split(','),sourceUrl})})
    alert('Saved')
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl">Capture</h2>
      <input className="w-full p-2 bg-zinc-800" placeholder="Title" onChange={e=>setTitle(e.target.value)} />
      <textarea className="w-full p-2 bg-zinc-800" placeholder="Content" onChange={e=>setContent(e.target.value)} />
      <select className="w-full p-2 bg-zinc-800" onChange={e=>setType(e.target.value)}>
        <option value="note">Note</option>
        <option value="link">Link</option>
        <option value="insight">Insight</option>
      </select>
      <input className="w-full p-2 bg-zinc-800" placeholder="Tags (comma separated)" onChange={e=>setTags(e.target.value)} />
      <input className="w-full p-2 bg-zinc-800" placeholder="Source URL" onChange={e=>setSourceUrl(e.target.value)} />
      <button onClick={submit} className="bg-white text-black px-4 py-2 rounded">Save</button>
    </div>
  )
}
