import { NextResponse } from "next/server";
import { getNowPlaying } from "@/app/lib/spotify";

export async function GET() {
  const data = await getNowPlaying();
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
