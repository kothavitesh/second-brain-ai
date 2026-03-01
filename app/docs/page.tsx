
export default function Docs(){
  return (
    <div className="space-y-4">
      <h1 className="text-4xl">Architecture</h1>
      <h2>Portable Architecture</h2>
      <p>Separated UI, API, AI, and DB layers.</p>
      <h2>Principles-Based UX</h2>
      <ul className="list-disc ml-6">
        <li>Minimal cognitive load</li>
        <li>AI augments thinking</li>
        <li>Clear hierarchy</li>
      </ul>
      <h2>Infrastructure Mindset</h2>
      <p>Public endpoint: /api/public/brain/query?q=</p>
    </div>
  )
}
