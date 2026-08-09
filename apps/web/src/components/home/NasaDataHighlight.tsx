import { Card } from "@cosmos/ui";

/**
 * NASA Data Highlight (brief bagian 5.A).
 *
 * Fakta yang dipakai: waktu tempuh cahaya Matahari ke Bumi (~8 menit 19
 * detik), dihitung dari jarak rata-rata Bumi-Matahari (1 AU ≈ 149.597.870 km)
 * dan kecepatan cahaya (≈299.792,458 km/detik) — bukan angka karangan.
 * Sumber: NASA/JPL Solar System Exploration & konstanta astronomi standar.
 *
 * Ini bukan hasil panggilan API (tidak butuh NASA API key), jadi aman
 * ditampilkan sebagai konten statis di Step 3 tanpa menyalahi aturan
 * "jangan mengarang data" (brief bagian 24).
 */
export function NasaDataHighlight() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="highlight-heading">
      <h2 id="highlight-heading" className="font-display text-2xl text-ink sm:text-3xl">
        Tahukah kamu?
      </h2>

      <Card className="mt-8">
        <p className="font-display text-xl text-ink sm:text-2xl">
          Berapa lama cahaya Matahari sampai ke Bumi?
        </p>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Cahaya bergerak sangat cepat — sekitar 299.792 km per detik — tapi
          jarak Bumi ke Matahari begitu jauh (rata-rata 149,6 juta km)
          sehingga cahaya tetap butuh waktu untuk sampai.
        </p>

        <LightTravelTimeline />

        <p className="mt-4 font-data text-sm text-aurora-glow">
          ≈ 8 menit 19 detik
        </p>

        <p className="mt-6 font-data text-xs text-ink-faint">
          Source: NASA/JPL Solar System Exploration · dihitung dari jarak
          rata-rata Bumi–Matahari (1 AU)
        </p>
      </Card>
    </section>
  );
}

/** Visualisasi timeline sederhana — bukan cuma angka mentah. */
function LightTravelTimeline() {
  return (
    <div
      className="mt-6"
      role="img"
      aria-label="Timeline waktu tempuh cahaya dari Matahari ke Bumi, sekitar 8 menit 19 detik"
    >
      <div className="flex items-center justify-between font-data text-xs text-ink-muted">
        <span>Matahari</span>
        <span>Bumi</span>
      </div>
      <div className="relative mt-2 h-1.5 w-full rounded-full bg-void-raised">
        <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-ember to-aurora" />
      </div>
      <div className="mt-2 flex justify-between font-data text-[11px] text-ink-faint">
        <span>0 menit</span>
        <span>8 menit 19 detik</span>
      </div>
    </div>
  );
}
