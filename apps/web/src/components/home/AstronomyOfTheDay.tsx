import { Card } from "@cosmos/ui";

/**
 * "Astronomy of the Day" (brief bagian 5.A).
 *
 * PENTING: NASA APOD API belum diintegrasikan (itu Step 4 — NASA
 * Integration). Section ini sengaja TIDAK menampilkan judul/gambar APOD
 * palsu yang seolah-olah data asli — itu akan melanggar prinsip data
 * provenance (brief bagian 15) begitu terpasang.
 *
 * Begini rencana penyambungannya nanti (Step 4):
 * 1. Route Handler server-side di apps/web/src/app/api/apod/route.ts
 *    memanggil @cosmos/nasa (APODClient) dengan NASA_API_KEY dari env.
 * 2. Hasilnya di-cache (mis. revalidate harian) agar tidak boros rate limit.
 * 3. Komponen ini diubah jadi Server Component yang fetch dari route itu,
 *    lalu menampilkan title, image, explanation, dan atribusi sumber asli.
 * 4. Kalau API gagal, fallback ke state error yang ramah (brief bagian 20).
 */
export function AstronomyOfTheDay() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="apod-heading">
      <h2 id="apod-heading" className="font-display text-2xl text-ink sm:text-3xl">
        Astronomy of the Day
      </h2>
      <p className="mt-2 max-w-2xl text-ink-muted">
        Gambar dan cerita astronomi harian, langsung dari NASA Astronomy
        Picture of the Day.
      </p>

      <Card className="mt-8 flex flex-col items-start gap-3 border-dashed">
        <span className="rounded-sm bg-void-raised px-2.5 py-1 font-data text-xs uppercase tracking-widest text-ink-muted">
          Segera terhubung
        </span>
        <p className="text-sm text-ink-muted">
          Bagian ini akan menampilkan APOD (Astronomy Picture of the Day)
          resmi dari NASA setelah integrasi API selesai, lengkap dengan
          atribusi sumber dan tanggal pengambilan data.
        </p>
      </Card>
    </section>
  );
}
