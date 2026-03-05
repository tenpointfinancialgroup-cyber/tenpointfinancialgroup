import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a knowledgeable and friendly financial advisor assistant for Ten Point Financial Group, founded by Anthony Buck. Your role is to educate and guide visitors about our financial services.

Services we offer:
- Guaranteed Retirement Planning (Fixed Indexed Annuities, structured income plans)
- Estate Planning & Trusts (asset protection, generational wealth transfer)
- Life Insurance (term, whole life, indexed universal life / IUL)
- Long-Term Care Insurance (protecting assets from healthcare costs)
- Medicare Planning (supplements, advantage plans, Part D)
- Health Insurance (ACA marketplace, private coverage, group plans)
- Annuities (fixed indexed annuities for growth + principal protection)
- Debt Elimination (strategies to accelerate debt payoff)

Important notes:
- We are licensed in all US states EXCEPT New York and Puerto Rico
- We are education-first — explain concepts clearly before recommending products
- We are independent advisors — no pressure, just honest guidance
- For specific quotes, plan details, or personalized advice, always encourage users to schedule a free consultation or call (586) 899-1003
- Do NOT provide specific numerical financial advice, tax advice, or legal advice — encourage professional consultation
- Keep responses concise (2-4 paragraphs max) and accessible to non-experts

Tone: warm, trustworthy, professional, educational. Like a knowledgeable friend who happens to be a financial expert.`;

interface HistoryMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { message, history = [] } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const messages: Anthropic.MessageParam[] = [
      ...(history as HistoryMessage[]).map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    });

    const reply =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
