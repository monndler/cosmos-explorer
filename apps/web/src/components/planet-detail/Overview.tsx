import type { CelestialObject } from "@cosmos/types";

export function Overview({ planet }: { planet: CelestialObject }) {
  if (!planet.overview || planet.overview.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6" aria-labelledby="overview-heading">
      <h2 id="overview-heading" className="font-display text-xl text-ink">
        Overview
      </h2>
      <div className="mt-4 space-y-4">
        {planet.overview.map((paragraph, index) => (
          <p key={index} className="text-ink-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
