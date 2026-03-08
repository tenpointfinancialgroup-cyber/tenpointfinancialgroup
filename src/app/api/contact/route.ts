import { NextRequest, NextResponse } from "next/server";

const GHL_FORM_ID  = "YSbC0cpJYL7no01HHMkS";
const GHL_LOCATION = "xqRUIfw0CZW1k6qVGmT0";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, topic, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const parts     = name.trim().split(/\s+/);
    const firstName = parts[0] || name;
    const lastName  = parts.slice(1).join(" ") || "";

    const payload: Record<string, string> = {
      formId:                  GHL_FORM_ID,
      locationId:              GHL_LOCATION,
      first_name:              firstName,
      last_name:               lastName,
      email,
      phone:                   phone || "",
      JanGdL7LRihnCwpkFlcM:  topic || "General Inquiry",
      "3hkyE6OfgXwW2nGeBQdG": message || "",
    };

    const ghlRes = await fetch("https://backend.leadconnectorhq.com/forms/submit", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    if (!ghlRes.ok) {
      const text = await ghlRes.text();
      console.error("GHL form error:", ghlRes.status, text);
      return NextResponse.json({ error: "Submission failed." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
