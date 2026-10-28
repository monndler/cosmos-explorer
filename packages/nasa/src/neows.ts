import type { NearEarthObject } from "@cosmos/types";

const NEOWS_FEED_ENDPOINT = "https://api.nasa.gov/neo/rest/v1/feed";

export class NasaNeoWsError extends Error {}

function todayISODate(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Fetch asteroid (Near Earth Object) yang melintas dekat Bumi pada tanggal
 * tertentu (default: hari ini). NeoWs feed API membatasi rentang maksimal
 * 7 hari per request — untuk MVP kita hanya ambil satu hari supaya
 * sederhana dan tidak boros kuota rate limit.
 *
 * PENTING: hanya dipanggil dari server-side (brief bagian 21).
 */
export async function fetchNearEarthObjects(
  apiKey: string,
  date: string = todayISODate(),
): Promise<NearEarthObject[]> {
  if (!apiKey) {
    throw new NasaNeoWsError("NASA_API_KEY belum diset di environment server.");
  }

  const url = `${NEOWS_FEED_ENDPOINT}?start_date=${date}&end_date=${date}&api_key=${encodeURIComponent(apiKey)}`;

  let response: Response;
  try {
    response = await fetch(url, {
      // NeoWs data untuk tanggal tertentu tidak berubah setelah dipublikasi
      // — cache beberapa jam cukup aman dan melindungi dari rate limit.
      next: { revalidate: 60 * 60 * 6 },
    });
  } catch {
    throw new NasaNeoWsError("Gagal menghubungi NASA NeoWs API (kemungkinan masalah jaringan).");
  }

  if (!response.ok) {
    throw new NasaNeoWsError(`NASA NeoWs API merespons dengan status ${response.status}.`);
  }

  const data = await response.json();
  const objectsForDate = data?.near_earth_objects?.[date] ?? [];

  // Normalisasi bentuk respons mentah NASA API ke tipe NearEarthObject kita
  // sendiri — UI tidak boleh bergantung langsung pada nama field NASA API
  // (brief bagian 21).
  const objects: NearEarthObject[] = objectsForDate.map((raw: any) => {
    const closeApproach = raw.close_approach_data?.[0];
    const missDistanceKm = closeApproach?.miss_distance?.kilometers
      ? parseFloat(closeApproach.miss_distance.kilometers)
      : undefined;
    const relativeVelocityKmH = closeApproach?.relative_velocity?.kilometers_per_hour
      ? parseFloat(closeApproach.relative_velocity.kilometers_per_hour)
      : undefined;

    return {
      id: raw.id,
      name: raw.name,
      estimatedDiameterKmMin: raw.estimated_diameter?.kilometers?.estimated_diameter_min,
      estimatedDiameterKmMax: raw.estimated_diameter?.kilometers?.estimated_diameter_max,
      isPotentiallyHazardous: Boolean(raw.is_potentially_hazardous_asteroid),
      closeApproachDate: closeApproach?.close_approach_date,
      missDistanceKm,
      relativeVelocityKmH,
    };
  });

  // Urutkan dari yang paling dekat dulu — paling relevan untuk dilihat.
  objects.sort((a, b) => (a.missDistanceKm ?? Infinity) - (b.missDistanceKm ?? Infinity));

  return objects;
}
