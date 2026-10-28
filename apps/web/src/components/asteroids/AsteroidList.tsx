import { Card } from "@cosmos/ui";
import { fetchNearEarthObjects, NasaNeoWsError } from "@cosmos/nasa";
import { formatMissDistanceInLunarDistances, formatVelocityKmH } from "@cosmos/astronomy";

/** Asteroid biasanya berukuran ratusan meter — lebih terbaca dalam meter
 * daripada kilometer dengan banyak angka desimal. */
function formatAsteroidDiameter(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000).toLocaleString("id-ID")} m`;
  }
  return `${km.toLocaleString("id-ID", { maximumFractionDigits: 2 })} km`;
}

/**
 * Server Component async — fetch terjadi di server, API key tidak pernah
 * sampai ke browser (sama seperti pola AstronomyOfTheDay di Step 4).
 */
export async function AsteroidList() {
  const apiKey = process.env.NASA_API_KEY;

  if (!apiKey) {
    return (
      <Fallback message="NASA_API_KEY belum diset. Salin apps/web/.env.local.example jadi .env.local dan isi API key dari api.nasa.gov (gratis)." />
    );
  }

  try {
    const asteroids = await fetchNearEarthObjects(apiKey);

    if (asteroids.length === 0) {
      return (
        <Fallback message="Tidak ada asteroid yang tercatat melintas dekat Bumi hari ini menurut data NASA." />
      );
    }

    return (
      <div className="space-y-3">
        {asteroids.map((asteroid) => (
          <Card key={asteroid.id} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-base text-ink">{asteroid.name}</h3>
                {asteroid.isPotentiallyHazardous ? (
                  <span className="rounded-sm bg-signal-danger/10 px-2 py-0.5 font-data text-[11px] uppercase tracking-widest text-signal-danger">
                    Potentially Hazardous
                  </span>
                ) : null}
              </div>

              {asteroid.estimatedDiameterKmMin != null && asteroid.estimatedDiameterKmMax != null ? (
                <p className="mt-1.5 text-sm text-ink-muted">
                  Estimasi diameter: {formatAsteroidDiameter(asteroid.estimatedDiameterKmMin)}
                  {" – "}
                  {formatAsteroidDiameter(asteroid.estimatedDiameterKmMax)}
                </p>
              ) : null}
            </div>

            <div className="shrink-0 text-left sm:text-right">
              {asteroid.missDistanceKm != null ? (
                <p className="font-data text-sm text-aurora-glow">
                  {formatMissDistanceInLunarDistances(asteroid.missDistanceKm)}
                </p>
              ) : null}
              {asteroid.relativeVelocityKmH != null ? (
                <p className="mt-1 font-data text-xs text-ink-faint">
                  {formatVelocityKmH(asteroid.relativeVelocityKmH)}
                </p>
              ) : null}
            </div>
          </Card>
        ))}

        <p className="pt-2 font-data text-xs text-ink-faint">
          Source: NASA NeoWs (Near Earth Object Web Service) · data hari ini
        </p>
      </div>
    );
  } catch (error) {
    const message =
      error instanceof NasaNeoWsError
        ? error.message
        : "Terjadi kesalahan tak terduga saat memuat data NASA NeoWs.";
    return <Fallback message={message} />;
  }
}

function Fallback({ message }: { message: string }) {
  return (
    <Card className="border-dashed">
      <span className="rounded-sm bg-void-raised px-2.5 py-1 font-data text-xs uppercase tracking-widest text-signal-warning">
        Tidak tersedia saat ini
      </span>
      <p className="mt-3 text-sm text-ink-muted">{message}</p>
    </Card>
  );
}
