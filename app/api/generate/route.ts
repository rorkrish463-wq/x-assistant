import { NextResponse } from 'next/server';
import { getOpenAI } from '@/lib/openai';
import { assignmentPrompt } from '@/lib/prompts';
import { analyzeText } from '@/lib/detector';

export async function POST(req: Request) {
  try {
    const { question } = await req.json();
    const openai = getOpenAI();

    const response = await openai.responses.create({
      model: 'gpt-4.1-mini',
      input: assignmentPrompt(question),
    });

    const answer = response.output_text;
    const report = analyzeText(answer);

    return NextResponse.json({ answer, report });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to generate answer.' },
      { status: 500 }
    );
  }
}
