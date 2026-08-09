import type { CelestialObject } from "@cosmos/types";
import { ratioTo, formatRatioAsPercent } from "@cosmos/astronomy";

const MAX_RADIUS = 70;
const MIN_RADIUS = 14;

export function SizeComparisonVisual({ planetA, planetB }: { planetA: CelestialObject; planetB: CelestialObject }) {
  const diameterA = planetA.physical.diameterKm;
  const diameterB = planetB.physical.diameterKm;

  if (diameterA == null || diameterB == null) return null;

  const largerDiameter = Math.max(diameterA, diameterB);
  const radiusA = MIN_RADIUS + (diameterA / largerDiameter) * (MAX_RADIUS - MIN_RADIUS);
  const radiusB = MIN_RADIUS + (diameterB / largerDiameter) * (MAX_RADIUS - MIN_RADIUS);
  const viewSize = MAX_RADIUS * 2 + 20;

  const ratio = ratioTo(diameterA, diameterB);
  const comparisonText =
    ratio >= 1
      ? `Diameter ${planetA.name} sekitar ${formatRatioAsPercent(ratio)} dari diameter ${planetB.name}.`
      : `Diameter ${planetA.name} sekitar ${formatRatioAsPercent(ratio)} dari diameter ${planetB.name}.`;

  return (
    <div>
      <div
        className="flex items-end justify-center gap-10 py-4"
        role="img"
        aria-label={comparisonText}
      >
        <div className="flex flex-col items-center gap-2">
          <svg width={viewSize} height={viewSize} aria-hidden="true">
            <circle
              cx={viewSize / 2}
              cy={viewSize / 2}
              r={radiusA}
              fill="none"
              stroke="#6E8CFF"
              strokeWidth="1.5"
            />
          </svg>
          <span className="font-data text-xs text-ink-muted">{planetA.name}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <svg width={viewSize} height={viewSize} aria-hidden="true">
            <circle
              cx={viewSize / 2}
              cy={viewSize / 2}
              r={radiusB}
              fill="none"
              stroke="#FFB86B"
              strokeWidth="1.5"
            />
          </svg>
          <span className="font-data text-xs text-ink-muted">{planetB.name}</span>
        </div>
      </div>
      <p className="text-center text-sm text-ink-muted">{comparisonText}</p>
    </div>
  );
}
