import { NextResponse } from "next/server";
import { fetchNearEarthObjects } from "@cosmos/nasa";

export const revalidate = 60 * 60 * 6;

export async function GET() {
  const apiKey = process.env.NASA_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "NASA_API_KEY belum dikonfigurasi di server." },
      { status: 500 },
    );
  }

  try {
    const asteroids = await fetchNearEarthObjects(apiKey);
    return NextResponse.json(asteroids);
  } catch (error) {
    const message =
      error instanceof Error && error.name === "NasaNeoWsError" ? error.message : "Terjadi kesalahan tak terduga.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
