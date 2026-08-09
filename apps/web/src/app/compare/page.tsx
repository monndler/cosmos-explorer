import type { Metadata } from "next";
import { getAllPlanets } from "@/lib/planets";
import { ComparisonTool } from "@/components/compare/ComparisonTool";

export const metadata: Metadata = {
  title: "Compare",
  description: "Bandingkan dua objek tata surya secara langsung, lengkap dengan visual ukuran.",
};

export default function ComparePage() {
  const planets = getAllPlanets();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <span className="font-data text-xs uppercase tracking-widest text-aurora">
        Compare
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
        Bandingkan Dua Objek
      </h1>
      <p className="mt-4 max-w-xl text-ink-muted">
        Pilih dua objek untuk melihat perbandingan langsung — ukuran,
        gravitasi, jarak dari Matahari, dan lainnya.
      </p>

      <div className="mt-10">
        <ComparisonTool planets={planets} />
      </div>
    </div>
  );
}
