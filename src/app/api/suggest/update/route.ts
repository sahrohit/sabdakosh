import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { postId, nepali, roman, meaning } = await request.json();

  const data = await prisma.updatePostSuggestion.create({
    data: {
      nepali,
      roman,
      meaning,
      postId,
    },
  });

  return NextResponse.json(data);
}
