import type { APODEntry } from "@cosmos/types";

const APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod";

export class NasaApodError extends Error {}

/**
 * Fetch APOD (Astronomy Picture of the Day) dari NASA Open API.
 *
 * PENTING: fungsi ini hanya boleh dipanggil dari kode server-side (Server
 * Component atau Route Handler) — `apiKey` tidak boleh pernah sampai ke
 * client (brief bagian 21).
 *
 * Cache 6 jam: APOD cuma berubah 1x/hari, jadi tidak perlu fetch di setiap
 * request — melindungi dari rate limit NASA API (brief bagian 20).
 */
export async function fetchAPOD(apiKey: string): Promise<APODEntry> {
  if (!apiKey) {
    throw new NasaApodError("NASA_API_KEY belum diset di environment server.");
  }

  const url = `${APOD_ENDPOINT}?api_key=${encodeURIComponent(apiKey)}`;

  let response: Response;
  try {
    response = await fetch(url, {
      next: { revalidate: 60 * 60 * 6 },
    });
  } catch {
    throw new NasaApodError("Gagal menghubungi NASA APOD API (kemungkinan masalah jaringan).");
  }

  if (!response.ok) {
    throw new NasaApodError(`NASA APOD API merespons dengan status ${response.status}.`);
  }

  const data = await response.json();

  // Normalisasi bentuk respons mentah NASA API ke tipe APODEntry kita
  // sendiri — UI tidak boleh bergantung langsung pada nama field NASA API
  // (brief bagian 21: "UI tidak boleh tahu detail endpoint NASA").
  const entry: APODEntry = {
    date: data.date,
    title: data.title,
    explanation: data.explanation,
    url: data.media_type === "image" ? (data.hdurl ?? data.url) : data.url,
    mediaType: data.media_type === "video" ? "video" : "image",
    copyright: typeof data.copyright === "string" ? data.copyright : undefined,
  };

  return entry;
}
