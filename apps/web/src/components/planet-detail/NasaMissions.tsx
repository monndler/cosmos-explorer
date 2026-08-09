import type { CelestialObject } from "@cosmos/types";
import { Card } from "@cosmos/ui";

const STATUS_LABEL: Record<string, string> = {
  active: "Aktif",
  completed: "Selesai",
  planned: "Direncanakan",
};

export function NasaMissions({ planet }: { planet: CelestialObject }) {
  if (!planet.missions || planet.missions.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6" aria-labelledby="missions-heading">
      <h2 id="missions-heading" className="font-display text-xl text-ink">
        NASA Missions
      </h2>
      <div className="mt-6 space-y-4">
        {planet.missions.map((mission) => (
          <Card key={mission.name} className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="font-display text-base text-ink">{mission.name}</p>
              <p className="mt-1 text-sm text-ink-muted">{mission.summary}</p>
            </div>
            <div className="shrink-0 text-right">
              <span className="font-data text-xs uppercase tracking-widest text-aurora">
                {STATUS_LABEL[mission.status] ?? mission.status}
              </span>
              {mission.launchYear ? (
                <p className="mt-1 font-data text-xs text-ink-faint">{mission.launchYear}</p>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
