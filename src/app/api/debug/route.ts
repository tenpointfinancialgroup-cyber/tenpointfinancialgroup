import { NextResponse } from "next/server";

const GHL_API_KEY     = process.env.GHL_API_KEY     || "";
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "";

export async function GET() {
  const body = {
    firstName:  "Test",
    lastName:   "Contact",
    email:      "test2@tenpointfinancialgroup.com",
    locationId: GHL_LOCATION_ID,
    source:     "Website Contact Form",
    tags:       ["website-contact", "general"],
    phone:      "+15868991003",
  };

  const ghlRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
    method:  "POST",
    headers: {
      "Authorization": `Bearer ${GHL_API_KEY}`,
      "Version":       "2021-07-28",
      "Content-Type":  "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await ghlRes.json();

  return NextResponse.json({
    GHL_API_KEY_SET:     !!GHL_API_KEY,
    GHL_LOCATION_ID_SET: !!GHL_LOCATION_ID,
    ghl_status:          ghlRes.status,
    ghl_response:        data,
  });
}
