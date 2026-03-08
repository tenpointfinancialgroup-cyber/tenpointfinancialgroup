import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    GHL_API_KEY_SET: !!process.env.GHL_API_KEY,
    GHL_API_KEY_LENGTH: process.env.GHL_API_KEY?.length ?? 0,
    GHL_LOCATION_ID_SET: !!process.env.GHL_LOCATION_ID,
    GHL_LOCATION_ID_LENGTH: process.env.GHL_LOCATION_ID?.length ?? 0,
  });
}
