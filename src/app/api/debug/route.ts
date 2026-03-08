import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.GHL_API_KEY || "";
  const loc = process.env.GHL_LOCATION_ID || "";

  const body = {
    firstName: "Test",
    lastName: "Contact",
    email: "test@tenpointfinancialgroup.com",
    source: "Website Contact Form",
    tags: ["website-contact"],
  };

  const res = await fetch("https://services.leadconnectorhq.com/contacts/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Version":       "2021-07-28",
      "Content-Type":  "application/json",
    },
    body: JSON.stringify({ ...body, locationId: loc }),
  });

  const data = await res.json();

  return NextResponse.json({
    GHL_API_KEY_SET: !!key,
    GHL_LOCATION_ID_SET: !!loc,
    ghl_status: res.status,
    ghl_response: data,
  });
}
