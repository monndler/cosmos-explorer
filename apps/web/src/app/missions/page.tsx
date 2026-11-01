import type { Metadata } from "next";
import { getAllMissions } from "@/lib/missions";
import { MissionExplorer } from "@/components/missions/MissionExplorer";

export const metadata: Metadata = {
  title: "Misi Luar Angkasa",
  description:
    "Misi-misi penjelajahan tata surya, dari pendaratan di Bulan sampai rover di Mars, dengan sumber resmi dari NASA dan ESA.",
};

export default function MissionsPage() {
  const missions = getAllMissions().map(
    ({ slug, name, agency, launchYear, status, summary }) => ({
      slug,
      name,
      agency,
      launchYear,
      status,
      summary,
    }),
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="missions-heading">
      <h1 id="missions-heading" className="font-display text-3xl text-ink sm:text-4xl">
        Misi Luar Angkasa
      </h1>
      <p className="mt-3 max-w-2xl text-ink-muted">
        Wahana dan misi yang menjelajahi tata surya kita. Pilih satu untuk melihat ringkasan,
        objek yang dipelajarinya, dan sumber resminya.
      </p>

      <MissionExplorer missions={missions} />

      <p className="mt-10 max-w-2xl font-data text-xs text-ink-faint">
        Status misi dapat berubah seiring waktu. Periksa halaman sumber di tiap misi untuk
        informasi terbaru.
      </p>
    </section>
  );
}
