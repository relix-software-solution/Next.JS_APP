import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // If invalid, return 400
  // Else, return
  if (!body.name) return NextResponse.json({ error: "Name is required" });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
