import type { Metadata } from "next";
import { SolarSystemVisual } from "@/components/explore/SolarSystemVisual";

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
    </div>
  );
}
