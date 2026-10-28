import { NextResponse } from "next/server";
import { fetchAPOD } from "@cosmos/nasa";

// Cache di level route juga, selaras dengan cache di fetchAPOD.
export const revalidate = 60 * 60 * 6;

/**
 * Endpoint ini terutama disiapkan untuk kebutuhan client-side di masa depan
 * (mis. widget APOD dengan date picker). Untuk homepage saat ini, komponen
 * AstronomyOfTheDay memanggil fetchAPOD() langsung sebagai Server Component,
 * lebih efisien, tanpa round-trip HTTP ke route ini sendiri.
 *
 * APOD sekarang bersumber dari science.nasa.gov dan tidak butuh API key.
 */
export async function GET() {
  try {
    const apod = await fetchAPOD();
    return NextResponse.json(apod);
  } catch (error) {
    console.error("[APOD]", error);
    console.error("[APOD]", error);
    const message =
      error instanceof Error && error.name === "NasaApodError" ? error.message : "Terjadi kesalahan tak terduga.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}