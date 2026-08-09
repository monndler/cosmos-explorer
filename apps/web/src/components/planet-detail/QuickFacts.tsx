import type { Planet } from "@cosmos/types";
import { buildQuickFacts } from "@/lib/planet-facts";
import type { CelestialObject } from "@cosmos/types";
import {
  formatKm,
  formatMassKg,
  formatGravity,
  formatDistanceFromSun,
  formatDayLength,
  formatYearLength,
  formatTemperature,
} from "@cosmos/astronomy";

type Fact = { label: string; value: string };

function buildFacts(planet: Planet): Fact[] {
  const facts: Fact[] = [];

  if (planet.physical.diameterKm != null) {
    facts.push({ label: "Diameter", value: formatKm(planet.physical.diameterKm) });
  }
  if (planet.physical.massKg != null) {
    facts.push({ label: "Massa", value: formatMassKg(planet.physical.massKg) });
  }
  if (planet.physical.gravityMs2 != null) {
    facts.push({ label: "Gravitasi", value: formatGravity(planet.physical.gravityMs2) });
  }
  if (planet.orbital?.distanceFromSunKm != null) {
    facts.push({
      label: "Jarak dari Matahari",
      value: formatDistanceFromSun(planet.orbital.distanceFromSunKm),
    });
  }
  if (planet.rotation?.dayLengthHours != null) {
    facts.push({ label: "Panjang hari", value: formatDayLength(planet.rotation.dayLengthHours) });
  }
  if (planet.orbital?.orbitalPeriodDays != null) {
    facts.push({ label: "Panjang tahun", value: formatYearLength(planet.orbital.orbitalPeriodDays) });
  }
  if (planet.moons != null) {
    facts.push({ label: "Jumlah satelit", value: `${planet.moons}` });
  }
  if (planet.physical.meanTemperatureC != null) {
    facts.push({
      label: "Suhu rata-rata",
      value: formatTemperature(planet.physical.meanTemperatureC),
    });
  }

  return facts;
}

/**
 * Field yang datanya tidak tersedia otomatis tidak ditampilkan (bukan diisi
 * "N/A" atau angka karangan) — sesuai brief bagian 23.
 */
export function QuickFacts({ planet }: { planet: CelestialObject }) {
  const facts = buildQuickFacts(planet);
  if (facts.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6" aria-labelledby="quick-facts-heading">
      <h2 id="quick-facts-heading" className="font-display text-xl text-ink">
        Quick Facts
      </h2>
      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.key}>
            <dt className="text-xs text-ink-muted">{fact.label}</dt>
            <dd className="mt-1 font-data text-sm text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
