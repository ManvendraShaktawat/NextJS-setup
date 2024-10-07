import { NextResponse } from "next/server";

// This handles a GET request to /api/hello
export async function GET() {
  return NextResponse.json({ message: "Hello World!" });
}
