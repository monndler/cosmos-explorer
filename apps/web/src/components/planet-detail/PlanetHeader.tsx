import type { CelestialObject } from "@cosmos/types";

const CATEGORY_LABEL: Record<string, string> = {
  planet: "Planet",
  "dwarf-planet": "Planet Katai",
  moon: "Satelit Alami",
  asteroid: "Asteroid",
  comet: "Komet",
  star: "Bintang",
};

export function PlanetHeader({ planet }: { planet: CelestialObject }) {
  return (
    <header className="border-b border-void-border px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <span className="font-data text-xs uppercase tracking-widest text-aurora">
          {CATEGORY_LABEL[planet.category] ?? planet.category}
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          {planet.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
          {planet.shortDescription}
        </p>
      </div>
    </header>
  );
}
