import type { CelestialObject } from "@cosmos/types";

export function DataSourceNote({ planet }: { planet: CelestialObject }) {
  if (!planet.sources || planet.sources.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6" aria-labelledby="source-heading">
      <h2 id="source-heading" className="font-data text-xs uppercase tracking-widest text-ink-muted">
        Data Source
      </h2>
      <ul className="mt-3 space-y-1">
        {planet.sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-data text-xs text-aurora-glow underline decoration-void-border hover:decoration-aurora"
            >
              {source.name}
            </a>
          </li>
        ))}
      </ul>
      {planet.dataUpdatedAt ? (
        <p className="mt-2 font-data text-xs text-ink-faint">
          Updated: {planet.dataUpdatedAt}
        </p>
      ) : null}
    </section>
  );
}
