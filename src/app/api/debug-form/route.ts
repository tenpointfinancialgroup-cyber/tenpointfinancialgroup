import { NextResponse } from "next/server";

const GHL_FORM_ID  = "YSbC0cpJYL7no01HHMkS";
const GHL_LOCATION = "xqRUIfw0CZW1k6qVGmT0";

export async function GET() {
  const params = new URLSearchParams();
  params.append("formId",                  GHL_FORM_ID);
  params.append("locationId",              GHL_LOCATION);
  params.append("first_name",              "Test");
  params.append("last_name",               "User");
  params.append("email",                   "test@tenpointfinancialgroup.com");
  params.append("phone",                   "+15868991003");
  params.append("JanGdL7LRihnCwpkFlcM",   "General Inquiry");
  params.append("3hkyE6OfgXwW2nGeBQdG",   "This is a test submission.");

  const ghlRes = await fetch("https://backend.leadconnectorhq.com/forms/submit", {
    method:  "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:    params.toString(),
  });

  const text = await ghlRes.text();

  return NextResponse.json({
    status:     ghlRes.status,
    statusText: ghlRes.statusText,
    body:       text,
  });
}
