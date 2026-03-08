import { NextRequest, NextResponse } from "next/server";

const GHL_FORM_ID = "YSbC0cpJYL7no01HHMkS";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, topic, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const parts = name.trim().split(/\s+/);
    const firstName = parts[0] || name;
    const lastName  = parts.slice(1).join(" ") || "";

    const payload = {
      location_id: "",
      first_name:  firstName,
      last_name:   lastName,
      email,
      phone:       phone || "",
      message:     `Topic: ${topic || "General"}\n\n${message || ""}`,
    };

    const ghlRes = await fetch(`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`, {
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
