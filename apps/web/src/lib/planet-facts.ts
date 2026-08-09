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

export type PlanetFact = { key: string; label: string; value: string };

/**
 * Field yang datanya tidak tersedia otomatis tidak dimasukkan (bukan diisi
 * "N/A" atau angka karangan) — sesuai brief bagian 23.
 */
export function buildQuickFacts(planet: CelestialObject): PlanetFact[] {
  const facts: PlanetFact[] = [];

  if (planet.physical.diameterKm != null) {
    facts.push({ key: "diameter", label: "Diameter", value: formatKm(planet.physical.diameterKm) });
  }
  if (planet.physical.massKg != null) {
    facts.push({ key: "mass", label: "Massa", value: formatMassKg(planet.physical.massKg) });
  }
  if (planet.physical.gravityMs2 != null) {
    facts.push({ key: "gravity", label: "Gravitasi", value: formatGravity(planet.physical.gravityMs2) });
  }
  if (planet.orbital?.distanceFromSunKm != null) {
    facts.push({
      key: "distance",
      label: "Jarak dari Matahari",
      value: formatDistanceFromSun(planet.orbital.distanceFromSunKm),
    });
  }
  if (planet.rotation?.dayLengthHours != null) {
    facts.push({
      key: "dayLength",
      label: "Panjang hari",
      value: formatDayLength(planet.rotation.dayLengthHours),
    });
  }
  if (planet.orbital?.orbitalPeriodDays != null) {
    facts.push({
      key: "yearLength",
      label: "Panjang tahun",
      value: formatYearLength(planet.orbital.orbitalPeriodDays),
    });
  }
  if (planet.moons != null) {
    facts.push({ key: "moons", label: "Jumlah satelit", value: `${planet.moons}` });
  }
  if (planet.physical.meanTemperatureC != null) {
    facts.push({
      key: "temperature",
      label: "Suhu rata-rata",
      value: formatTemperature(planet.physical.meanTemperatureC),
    });
  }

  return facts;
}
