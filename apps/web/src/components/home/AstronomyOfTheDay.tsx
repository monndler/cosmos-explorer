import { Suspense } from "react";
import Image from "next/image";
import { Card } from "@cosmos/ui";
import { fetchAPOD } from "@cosmos/nasa";

/**
 * "Astronomy of the Day" (brief bagian 5.A) — sekarang terhubung ke NASA
 * APOD API sungguhan (Step 4: NASA Integration).
 *
 * Server Component async: fetch terjadi di server. Sumber data: NASA Science
 * APOD API (tanpa API key). Kalau API gagal atau tidak ada foto valid,
 * tampilkan fallback yang jujur (brief bagian 20), bukan data kosong/palsu.
 */
export function AstronomyOfTheDay() {
  // Suspense: bagian lain homepage langsung tampil, kartu ini menyusul saat
  // data NASA siap (tanpa menahan seluruh halaman).
  return (
    <Suspense fallback={<ApodSkeleton />}>
      <ApodContent />
    </Suspense>
  );
}

async function ApodContent() {
  try {
    const apod = await fetchAPOD();

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
                alt={apod.alt ?? apod.title}
                fill
                sizes="(max-width: 1152px) 100vw, 1104px"
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
            <p className="mt-3 whitespace-pre-line text-sm text-ink-muted">
              {apod.explanation}
            </p>
            {apod.isFallback && (
              <p className="mt-4 text-xs text-ink-muted">
                Entri APOD terbaru bukan foto, jadi yang ditampilkan adalah foto
                APOD terakhir sebelumnya.
              </p>
            )}
            <p className="mt-4 font-data text-xs text-ink-faint">
              Source:{" "}
              {apod.permalink ? (
                <a
                  href={apod.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  NASA APOD
                </a>
              ) : (
                "NASA APOD"
              )}{" "}
              · {apod.date}
            </p>
            {apod.credit && (
              <p className="mt-1 whitespace-pre-line font-data text-xs text-ink-faint">
                {apod.credit}
              </p>
            )}
          </div>
        </Card>
      </section>
    );
  } catch (error) {
    // Selalu catat error aslinya di terminal server supaya bisa didiagnosis.
    console.error("[APOD]", error);

    const nasaError =
      error instanceof Error && error.name === "NasaApodError" ? error : null;
    const message = nasaError
      ? nasaError.message
      : "Terjadi kesalahan tak terduga saat memuat data NASA APOD.";
    // Detail teknis hanya tampil saat development, tidak di produksi.
    const detail =
      !nasaError && process.env.NODE_ENV !== "production" && error instanceof Error
        ? `${error.name}: ${error.message}`
        : undefined;
    return <Fallback message={message} detail={detail} />;
  }
}

function Fallback({ message, detail }: { message: string; detail?: string }) {
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
        {detail && <p className="mt-2 font-data text-xs text-ink-faint">{detail}</p>}
      </Card>
    </section>
  );
}

function ApodSkeleton() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      aria-labelledby="apod-heading"
      aria-busy="true"
    >
      <h2 id="apod-heading" className="font-display text-2xl text-ink sm:text-3xl">
        Astronomy of the Day
      </h2>
      <p className="mt-2 max-w-2xl text-ink-muted">Memuat foto dari NASA…</p>
      <Card className="mt-8 overflow-hidden p-0">
        <div className="aspect-video w-full animate-pulse bg-void-raised" />
        <div className="space-y-3 p-6">
          <div className="h-5 w-1/3 animate-pulse rounded bg-void-raised" />
          <div className="h-3 w-full animate-pulse rounded bg-void-raised" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-void-raised" />
        </div>
      </Card>
    </section>
  );
}
