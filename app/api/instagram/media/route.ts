import { NextResponse } from "next/server";

const INSTAGRAM_API_URL = "https://graph.instagram.com/me/media";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Missing INSTAGRAM_ACCESS_TOKEN", items: [] },
      { status: 200 },
    );
  }

  const params = new URLSearchParams({
    fields: "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
    access_token: token,
    limit: "12",
  });

  try {
    const response = await fetch(`${INSTAGRAM_API_URL}?${params.toString()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Instagram API error: ${errorText}`, items: [] },
        { status: 200 },
      );
    }

    const data = await response.json();
    const items = Array.isArray(data?.data) ? data.data : [];

    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: String(error), items: [] },
      { status: 200 },
    );
  }
}
