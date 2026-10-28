import type { Metadata } from "next";
import Link from "next/link";
import { AsteroidList } from "@/components/asteroids/AsteroidList";

export const metadata: Metadata = {
  title: "Asteroid Tracker",
  description: "Asteroid yang melintas dekat Bumi hari ini, langsung dari data NASA NeoWs.",
};

export default function AsteroidsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/explore" className="font-data text-xs text-ink-muted hover:text-ink">
        ← Explore
      </Link>

      <span className="mt-4 block font-data text-xs uppercase tracking-widest text-aurora">
        Asteroid Tracker
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
        Asteroid di Dekat Bumi Hari Ini
      </h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Diurutkan dari yang paling dekat. "Potentially Hazardous" adalah
        klasifikasi resmi NASA untuk asteroid berukuran cukup besar dan
        berjarak cukup dekat untuk terus dipantau — bukan berarti sedang
        mengancam Bumi.
      </p>

      <div className="mt-10">
        <AsteroidList />
      </div>
    </div>
  );
}
