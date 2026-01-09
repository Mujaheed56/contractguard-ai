import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'no file provided' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'gemini api key not configured' },
        { status: 500 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileText = buffer.toString('utf-8');

    const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });

    const prompt = `You are a contract lawyer protecting freelancers from unfair contracts.

Analyze this freelance contract and provide a detailed JSON response with the following structure:

{
  "score": <number 0-100, where 0 is extremely unfair and 100 is very fair>,
  "redFlags": [
    {
      "issue": "<brief title of the problem>",
      "severity": <number 1-10>,
      "explanation": "<explain in simple, clear language what this means for the freelancer>",
      "alternative": "<provide a fair alternative clause>"
    }
  ],
  "warnings": [
    {
      "issue": "<title>",
      "severity": <number 1-10>,
      "explanation": "<simple explanation>",
      "suggestion": "<how to address this>"
    }
  ],
  "negotiationEmail": "<a professional but firm email template the freelancer can send to renegotiate unfair terms>"
}

Focus on these common issues:
- Unlimited liability clauses
- Unfair IP ownership (especially "everything you create")
- Payment terms (net-90 = bad, immediate/net-30 = good)
- One-sided termination rights
- Extreme non-compete clauses
- Lack of payment guarantees
- Unclear scope that allows unlimited revisions

Contract text:
${fileText.substring(0, 15000)}

Respond ONLY with valid JSON, no markdown or additional text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const analysisResults = JSON.parse(cleanText);

    return NextResponse.json(analysisResults);
  } catch (error) {
    console.error('error analyzing contract:', error);
    return NextResponse.json(
      { error: 'failed to analyze contract' },
      { status: 500 }
    );
  }
}
