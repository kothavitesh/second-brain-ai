
"use client"
import Link from "next/link"
export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold">🧠 Second Brain</h1>
      <div className="space-x-4">
        <Link href="/dashboard" className="bg-white text-black px-6 py-3 rounded-xl">Dashboard</Link>
        <Link href="/capture" className="border px-6 py-3 rounded-xl">Capture</Link>
      </div>
    </div>
  )
}
