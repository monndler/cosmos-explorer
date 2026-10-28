import type { Metadata } from "next";
import Link from "next/link";
import { SolarSystemVisual } from "@/components/explore/SolarSystemVisual";
import { Card } from "@cosmos/ui";

export const metadata: Metadata = {
  title: "Explore",
  description: "Jelajahi tata surya secara interaktif — klik planet untuk melihat info singkatnya.",
};

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <span className="font-data text-xs uppercase tracking-widest text-aurora">
        Explore
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
        Tata Surya Interaktif
      </h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Klik atau arahkan kursor ke sebuah planet untuk melihat info singkatnya.
      </p>

      <div className="mt-12">
        <SolarSystemVisual />
      </div>

      <Link href="/explore/asteroids" className="mt-14 block">
        <Card className="flex items-center justify-between gap-4 transition-colors duration-200 hover:border-aurora">
          <div>
            <h2 className="font-display text-lg text-ink">Asteroid Tracker</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Lihat asteroid yang melintas dekat Bumi hari ini, langsung dari data NASA.
            </p>
          </div>
          <span className="shrink-0 font-data text-sm text-aurora-glow">→</span>
        </Card>
      </Link>
    </div>
  );
}
