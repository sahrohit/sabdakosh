import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const getPostsFromQuery = (query: string) => {
  return prisma.post.findMany({
    where: {
      nepali: {
        search: `${query}*`,
      },
      roman: {
        search: `${query}*`,
      },
      meaning: {
        search: `${query}*`,
      },
    },
    take: 4,
  });
};

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("query") ?? "a";

  const posts = await getPostsFromQuery(query);

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { query } = await request.json();

  const posts = await getPostsFromQuery(query);

  return NextResponse.json(posts);
}
