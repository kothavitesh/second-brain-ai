# 🧠 Second Brain  
### AI-Powered Knowledge Infrastructure

---

## 🔗 Live Application

🚀 Production URL:  
https://second-brain-ai-oqty.vercel.app  

💻 GitHub Repository:  
https://github.com/kothavitesh/second-brain-ai  

📘 Architecture Documentation:  
https://second-brain-ai-oqty.vercel.app/docs  

---

# 📌 Overview

Second Brain is a full-stack AI-powered knowledge system designed as infrastructure for thought.

It enables users to:

- Capture structured knowledge entries
- Organize and retrieve information intelligently
- Automatically summarize stored content
- Query their knowledge base conversationally
- Expose intelligence through a public API endpoint

This project demonstrates:

- Production-ready full-stack architecture
- Server-side AI integration
- Clean separation of concerns
- Infrastructure mindset
- Thoughtful UX principles
- Scalable deployment

---

# 🚀 Core Features

## 📝 Knowledge Capture

Users can create structured knowledge items with:

- Title (required)
- Content (required)
- Type (Note / Link / Insight)
- Tags (optional)
- Source URL (optional)
- Automatic timestamping

Data is stored using Prisma ORM with a clean PostgreSQL schema.

---

## 📊 Smart Dashboard

- Search functionality
- Structured grid-based layout
- Click-through detailed views
- Clean visual hierarchy
- Responsive design

The dashboard enables fast knowledge retrieval while maintaining clarity.

---

## 🤖 AI Intelligence (Server-Side Only)

All AI processing happens securely on the server.

Features include:

- AI-generated summaries
- Persistent storage of summaries
- Conversational querying of stored notes
- Context aggregation from database records

Example flow:

1. Retrieve relevant notes
2. Aggregate context
3. Generate AI response
4. Return structured JSON response

---

## 🌐 Public Infrastructure Endpoint

GET /api/public/brain/query?q=your-question

Example Response:

{
  "answer": "AI generated answer...",
  "sources": ["Note Title 1", "Note Title 2"]
}

This makes the knowledge system usable beyond the UI.

---

# 🏗 Architecture Principles

## 🔹 Portable Architecture

The system is divided into clearly separated layers:

- UI Layer – Next.js App Router
- API Layer – Server routes handling business logic
- AI Layer – Lazy-initialized OpenAI integration
- Database Layer – Prisma ORM + PostgreSQL
- Infrastructure Layer – Vercel + Neon

Each layer can be replaced independently.

For example:
- AI provider can be swapped without touching UI.
- Database can migrate without changing API structure.
- UI can evolve without breaking infrastructure contracts.

---

## 🔹 Principles-Based UX

The UI follows structured design principles:

1. Minimal cognitive load  
2. Clear visual hierarchy  
3. Predictable interaction patterns  
4. AI augments thinking, not replaces it  
5. Intentional spacing and layout  

The interface prioritizes clarity over complexity.

---

## 🔹 Agent Thinking

The system improves stored knowledge over time by:

- Persisting AI-generated summaries
- Structuring contextual retrieval
- Enabling conversational querying
- Enhancing stored content with intelligence

This architecture enables future extensions like:

- Vector semantic search
- Risk scoring
- Knowledge graph visualization
- Automated tagging

---

## 🔹 Infrastructure Mindset

This project is built as infrastructure, not just an interface.

It includes:

- Public API endpoint
- Structured JSON contracts
- Environment-based configuration
- Serverless scalable deployment
- Runtime-safe AI initialization

The system can serve as a backend knowledge engine for other platforms.

---

# 🛠 Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS
- Prisma ORM
- PostgreSQL (Neon)
- OpenAI (server-side only)
- Vercel Deployment

---

# ⚙️ Local Setup

1️⃣ Clone repository:

git clone https://github.com/kothavitesh/second-brain-ai.git  
cd second-brain-ai

2️⃣ Install dependencies:

npm install

3️⃣ Create `.env` file:

DATABASE_URL="your_postgresql_url"  
OPENAI_API_KEY="your_openai_key"

4️⃣ Generate Prisma client:

npx prisma generate

5️⃣ Run development server:

npm run dev

---

# 🧪 API Testing Example

Local:

http://localhost:3000/api/public/brain/query?q=What is React?

Production:

https://second-brain-ai-oqty.vercel.app/api/public/brain/query?q=What is React?

---

# 📸 Screenshots

(Add before submission)

Recommended:

- Landing Page
- Capture Form
- Dashboard
- Detail View
- Public API JSON Response

---

# 🔮 Future Enhancements

- Vector-based semantic search
- Multi-user authentication
- Knowledge graph visualization
- File upload with metadata extraction
- Command palette for power users
- AI-powered tagging
- Analytics dashboard

---

# 🎯 Assignment Alignment

This project satisfies:

✓ Knowledge Capture  
✓ Smart Dashboard  
✓ AI Processing (Server-side)  
✓ Public Infrastructure  
✓ Portable Architecture  
✓ Principles-Based UX  
✓ Agent Thinking  
✓ Infrastructure Mindset  

---

# 👤 Author

Kotha Vitesh  
Full Stack Developer  
