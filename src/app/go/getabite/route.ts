import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://getabite.app/en?utm_source=52n34s&utm_medium=referral&utm_campaign=countdown",
    302,
  );
}
