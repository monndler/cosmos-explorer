import type { CelestialObject } from "@cosmos/types";
import { Card } from "@cosmos/ui";

export function DidYouKnow({ planet }: { planet: CelestialObject }) {
  if (!planet.didYouKnow || planet.didYouKnow.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6" aria-labelledby="dyk-heading">
      <h2 id="dyk-heading" className="font-display text-xl text-ink">
        Did You Know?
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {planet.didYouKnow.map((fact, index) => (
          <Card key={index}>
            <p className="text-sm text-ink-muted">{fact}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
