import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("https://getabite.app/en", 302);
}
