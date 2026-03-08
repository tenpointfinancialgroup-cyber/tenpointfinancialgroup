import { NextResponse } from "next/server";

const GHL_FORM_ID    = "YSbC0cpJYL7no01HHMkS";
const GHL_LOCATION   = "xqRUIfw0CZW1k6qVGmT0";

export async function GET() {
  const payload = {
    formId:                   GHL_FORM_ID,
    locationId:               GHL_LOCATION,
    first_name:               "Test",
    last_name:                "User",
    email:                    "test@tenpointfinancialgroup.com",
    phone:                    "5868991003",
    JanGdL7LRihnCwpkFlcM:   "General Inquiry",
    "3hkyE6OfgXwW2nGeBQdG":  "This is a test submission.",
  };

  const ghlRes = await fetch("https://backend.leadconnectorhq.com/forms/submit", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(payload),
  });

  const text = await ghlRes.text();

  return NextResponse.json({
    status:       ghlRes.status,
    statusText:   ghlRes.statusText,
    body:         text,
    payload_sent: payload,
  });
}
