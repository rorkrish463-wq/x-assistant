# HumanWrite AI (Grow Cloud Compatible)

AI academic writing SaaS built with Next.js, OpenAI-compatible APIs, and Supabase.

## Features
- Assignment generator
- Text humanizer
- AI detection estimator
- APA 7th references with links
- Word export (.docx)
- Supabase-ready authentication
- Deploy to Vercel

## Environment Variables

```env
OPENAI_API_KEY=your_grow_cloud_api_key
OPENAI_BASE_URL=https://api.growcloud.ai/v1
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deploy
Push to GitHub and import into Vercel.

## Notes
- Replace `OPENAI_BASE_URL` with the exact endpoint provided by Grow Cloud.
- If a model name is not supported, update the model in `app/api/generate/route.ts`.


## Updated Dependencies
This package uses Next.js 15.5.2, which includes security patches.
