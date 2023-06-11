import { getRandomPost } from "@/app/page";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await getRandomPost());
}
