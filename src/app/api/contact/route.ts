import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY     = process.env.GHL_API_KEY     || "";
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, topic, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const parts     = name.trim().split(/\s+/);
    const firstName = parts[0] || name;
    const lastName  = parts.slice(1).join(" ") || "";

    const body: Record<string, unknown> = {
      firstName,
      lastName,
      email,
      locationId: GHL_LOCATION_ID,
      source:     "Website Contact Form",
      tags:       ["website-contact", (topic || "general").toLowerCase().replace(/\s+/g, "-")],
    };

    if (phone) body.phone = phone;

    const ghlRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method:  "POST",
      headers: {
        "Authorization": `Bearer ${GHL_API_KEY}`,
        "Version":       "2021-07-28",
        "Content-Type":  "application/json",
      },
      body: JSON.stringify(body),
    });

    const ghlData = await ghlRes.json();

    if (!ghlRes.ok && ghlRes.status !== 400) {
      console.error("GHL error:", ghlRes.status, JSON.stringify(ghlData));
      return NextResponse.json({ error: "Submission failed." }, { status: 500 });
    }
    const contactId = ghlData?.contact?.id || ghlData?.meta?.contactId;

    if (contactId && message) {
      await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
        method:  "POST",
        headers: {
          "Authorization": `Bearer ${GHL_API_KEY}`,
          "Version":       "2021-07-28",
          "Content-Type":  "application/json",
        },
        body: JSON.stringify({ body: `Topic: ${topic || "General"}\n\n${message}` }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
