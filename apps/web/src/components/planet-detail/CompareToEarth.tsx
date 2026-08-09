import type { CelestialObject } from "@cosmos/types";
import { ratioTo, formatRatioAsPercent, formatRatioAsMultiplier } from "@cosmos/astronomy";

type CompareToEarthProps = {
  planet: CelestialObject;
  earth: CelestialObject;
};

/**
 * Membandingkan planet dengan Bumi — mengikuti contoh persis di brief
 * bagian 3: "Jangan hanya menampilkan diameter Mars. Jelaskan bahwa
 * diameter Mars sekitar setengah diameter Bumi, lalu berikan visual
 * perbandingan."
 *
 * Tidak ditampilkan untuk halaman Bumi sendiri (tidak ada gunanya
 * membandingkan Bumi dengan Bumi).
 */
export function CompareToEarth({ planet, earth }: CompareToEarthProps) {
  if (planet.slug === earth.slug) return null;

  const diameterRatio =
    planet.physical.diameterKm != null && earth.physical.diameterKm != null
      ? ratioTo(planet.physical.diameterKm, earth.physical.diameterKm)
      : null;

  const gravityRatio =
    planet.physical.gravityMs2 != null && earth.physical.gravityMs2 != null
      ? ratioTo(planet.physical.gravityMs2, earth.physical.gravityMs2)
      : null;

  const yearRatio =
    planet.orbital?.orbitalPeriodDays != null && earth.orbital?.orbitalPeriodDays != null
      ? ratioTo(planet.orbital.orbitalPeriodDays, earth.orbital.orbitalPeriodDays)
      : null;

  if (diameterRatio == null && gravityRatio == null && yearRatio == null) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6" aria-labelledby="compare-heading">
      <h2 id="compare-heading" className="font-display text-xl text-ink">
        Dibandingkan dengan Bumi
      </h2>

      {diameterRatio != null ? (
        <div className="mt-6">
          <p className="text-ink-muted">
            Diameter {planet.name} sekitar{" "}
            <span className="font-data text-ink">{formatRatioAsPercent(diameterRatio)}</span>{" "}
            dari diameter Bumi.
          </p>
          <DiameterComparisonVisual planetName={planet.name} ratio={diameterRatio} />
        </div>
      ) : null}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {gravityRatio != null ? (
          <ComparisonBar
            label="Gravitasi"
            description={`${formatRatioAsPercent(gravityRatio)} dari gravitasi Bumi`}
            ratio={gravityRatio}
          />
        ) : null}
        {yearRatio != null ? (
          <ComparisonBar
            label="Panjang tahun"
            description={`${formatRatioAsMultiplier(yearRatio)} lebih lama dari satu tahun Bumi`}
            ratio={Math.min(yearRatio / 2, 1)}
          />
        ) : null}
      </div>
    </section>
  );
}

function DiameterComparisonVisual({
  planetName,
  ratio,
}: {
  planetName: string;
  ratio: number;
}) {
  const earthRadius = 60;
  const planetRadius = earthRadius * ratio;
  const viewSize = earthRadius * 2 + 40;

  return (
    <div
      className="mt-4 flex items-end justify-center gap-10"
      role="img"
      aria-label={`Perbandingan ukuran: diameter ${planetName} sekitar ${formatRatioAsPercent(ratio)} dari diameter Bumi`}
    >
      <div className="flex flex-col items-center gap-2">
        <svg width={viewSize} height={viewSize} aria-hidden="true">
          <circle
            cx={viewSize / 2}
            cy={viewSize / 2}
            r={earthRadius}
            fill="none"
            stroke="#6E8CFF"
            strokeWidth="1.5"
          />
        </svg>
        <span className="font-data text-xs text-ink-muted">Bumi</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <svg width={viewSize} height={viewSize} aria-hidden="true">
          <circle
            cx={viewSize / 2}
            cy={viewSize / 2}
            r={planetRadius}
            fill="none"
            stroke="#FFB86B"
            strokeWidth="1.5"
          />
        </svg>
        <span className="font-data text-xs text-ink-muted">{planetName}</span>
      </div>
    </div>
  );
}

function ComparisonBar({
  label,
  description,
  ratio,
}: {
  label: string;
  description: string;
  ratio: number;
}) {
  const widthPercent = Math.min(Math.max(ratio, 0), 1) * 100;

  return (
    <div>
      <p className="text-sm text-ink">{label}</p>
      <div className="mt-2 h-1.5 w-full rounded-full bg-void-raised">
        <div
          className="h-full rounded-full bg-ember"
          style={{ width: `${widthPercent}%` }}
        />
      </div>
      <p className="mt-1.5 font-data text-xs text-ink-muted">{description}</p>
    </div>
  );
}
