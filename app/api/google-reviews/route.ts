import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { reviews: [], error: "Google Places API not configured" },
      { status: 200 },
    );
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const reviews =
      data.result?.reviews?.map((r: any) => ({
        author_name: r.author_name,
        rating: r.rating,
        text: r.text,
        relative_time_description: r.relative_time_description,
      })) ?? [];

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error("Error fetching Google reviews", error);
    return NextResponse.json(
      { reviews: [], error: "Failed to fetch reviews" },
      { status: 200 },
    );
  }
}

