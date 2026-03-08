import { NextResponse } from "next/server";

const GHL_FORM_ID = "YSbC0cpJYL7no01HHMkS";

export async function GET() {
  const payload = {
    location_id: "",
    first_name:  "Test",
    last_name:   "User",
    email:       "test@tenpointfinancialgroup.com",
    phone:       "5868991003",
    message:     "Topic: General\n\nThis is a test submission.",
  };

  const ghlRes = await fetch(`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(payload),
  });

  const text = await ghlRes.text();

  return NextResponse.json({
    status: ghlRes.status,
    statusText: ghlRes.statusText,
    body: text,
    payload_sent: payload,
  });
}
