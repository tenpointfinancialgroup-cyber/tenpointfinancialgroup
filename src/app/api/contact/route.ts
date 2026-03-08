import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY     = process.env.GHL_API_KEY     || "";
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "";

const TOPIC_LABELS: Record<string, string> = {
  debt:       "Debt Elimination",
  estate:     "Estate Planning & Trusts",
  retirement: "Retirement Planning",
  ltc:        "Long Term Care",
  life:       "Life Insurance",
  health:     "Health Insurance",
  medicare:   "Medicare",
  other:      "General Inquiry",
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, topic, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error("GHL credentials not configured");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    // Split name into first/last for GHL
    const parts = name.trim().split(/\s+/);
    const firstName = parts[0] || name;
    const lastName  = parts.slice(1).join(" ") || "";

    const topicLabel = TOPIC_LABELS[topic] || topic || "General Inquiry";

    const body: Record<string, unknown> = {
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      email,
      tags: ["website-contact", topicLabel.toLowerCase().replace(/\s+/g, "-")],
    };

    if (phone) body.phone = phone;

    // Append topic + message as a note via the source field
    if (message || topic) {
      body.source = "Website Contact Form";
      body.customFields = [
        { key: "contact_topic",   field_value: topicLabel },
        { key: "contact_message", field_value: message || "" },
      ];
    }

    const ghlRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GHL_API_KEY}`,
        "Version":        "2021-07-28",
        "Content-Type":   "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!ghlRes.ok) {
      const err = await ghlRes.text();
      console.error("GHL error:", ghlRes.status, err);
      return NextResponse.json({ error: "Failed to submit. Please call us directly." }, { status: 500 });
    }

    // If message exists, add it as a note on the contact
    const ghlData = await ghlRes.json();
    const contactId = ghlData?.contact?.id;

    if (contactId && message) {
      await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GHL_API_KEY}`,
          "Version":        "2021-07-28",
          "Content-Type":   "application/json",
        },
        body: JSON.stringify({
          userId: contactId,
          body:   `Topic: ${topicLabel}\n\n${message}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
