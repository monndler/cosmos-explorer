import { NextResponse } from "next/server";
import { fetchAPOD, NasaApodError } from "@cosmos/nasa";

// Cache di level route juga, selaras dengan cache di fetchAPOD.
export const revalidate = 60 * 60 * 6;

/**
 * Endpoint ini terutama disiapkan untuk kebutuhan client-side di masa depan
 * (mis. widget APOD dengan date picker). Untuk homepage saat ini, komponen
 * AstronomyOfTheDay memanggil fetchAPOD() langsung sebagai Server Component
 * — lebih efisien, tanpa round-trip HTTP ke route ini sendiri.
 */
export async function GET() {
  const apiKey = process.env.NASA_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "NASA_API_KEY belum dikonfigurasi di server." },
      { status: 500 },
    );
  }

  try {
    const apod = await fetchAPOD(apiKey);
    return NextResponse.json(apod);
  } catch (error) {
    const message =
      error instanceof NasaApodError ? error.message : "Terjadi kesalahan tak terduga.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
