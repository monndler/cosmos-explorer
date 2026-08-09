import Image from "next/image";
import { Card } from "@cosmos/ui";
import { fetchAPOD, NasaApodError } from "@cosmos/nasa";

/**
 * "Astronomy of the Day" (brief bagian 5.A) — sekarang terhubung ke NASA
 * APOD API sungguhan (Step 4: NASA Integration).
 *
 * Server Component async: fetch terjadi di server, API key tidak pernah
 * sampai ke browser. Kalau key belum diset atau API gagal, tampilkan
 * fallback yang jujur (brief bagian 20) — bukan data kosong/palsu.
 */
export async function AstronomyOfTheDay() {
  const apiKey = process.env.NASA_API_KEY;

  if (!apiKey) {
    return (
      <Fallback message="NASA_API_KEY belum diset. Salin apps/web/.env.local.example jadi .env.local dan isi API key dari api.nasa.gov (gratis)." />
    );
  }

  try {
    const apod = await fetchAPOD(apiKey);

    return (
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="apod-heading">
        <h2 id="apod-heading" className="font-display text-2xl text-ink sm:text-3xl">
          Astronomy of the Day
        </h2>
        <p className="mt-2 max-w-2xl text-ink-muted">
          Gambar dan cerita astronomi harian, langsung dari NASA Astronomy Picture of the Day.
        </p>

        <Card className="mt-8 overflow-hidden p-0">
          {apod.mediaType === "image" ? (
            <div className="relative aspect-video w-full bg-void-raised">
              <Image
                src={apod.url}
                alt={apod.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-void-raised">
              <a
                href={apod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-data text-sm text-aurora-glow underline"
              >
                Tonton video hari ini ↗
              </a>
            </div>
          )}

          <div className="p-6">
            <h3 className="font-display text-lg text-ink">{apod.title}</h3>
            <p className="mt-3 text-sm text-ink-muted">{apod.explanation}</p>
            <p className="mt-4 font-data text-xs text-ink-faint">
              Source: NASA APOD · {apod.date}
              {apod.copyright ? ` · © ${apod.copyright}` : ""}
            </p>
          </div>
        </Card>
      </section>
    );
  } catch (error) {
    const message =
      error instanceof NasaApodError
        ? error.message
        : "Terjadi kesalahan tak terduga saat memuat data NASA APOD.";
    return <Fallback message={message} />;
  }
}

function Fallback({ message }: { message: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="apod-heading">
      <h2 id="apod-heading" className="font-display text-2xl text-ink sm:text-3xl">
        Astronomy of the Day
      </h2>
      <Card className="mt-8 border-dashed">
        <span className="rounded-sm bg-void-raised px-2.5 py-1 font-data text-xs uppercase tracking-widest text-signal-warning">
          Tidak tersedia saat ini
        </span>
        <p className="mt-3 text-sm text-ink-muted">{message}</p>
      </Card>
    </section>
  );
}
