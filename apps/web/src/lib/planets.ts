import type { CelestialObject } from "@cosmos/types";
import mercuryData from "../../../../data/planets/mercury.json";
import venusData from "../../../../data/planets/venus.json";
import earthData from "../../../../data/planets/earth.json";
import marsData from "../../../../data/planets/mars.json";
import jupiterData from "../../../../data/planets/jupiter.json";
import saturnData from "../../../../data/planets/saturn.json";
import uranusData from "../../../../data/planets/uranus.json";
import neptuneData from "../../../../data/planets/neptune.json";
import plutoData from "../../../../data/planets/pluto.json";
import moonData from "../../../../data/moons/moon.json";

// Import langsung sebagai JSON — sesuai brief bagian 13: data statis yang
// jarang berubah boleh disimpan lokal, tanpa fetch API di setiap request.
// Urutan sesuai jarak dari Matahari, planet katai & satelit di akhir.
//
// Catatan: Pluto (dwarf-planet) dan Bulan (moon) sengaja tetap memakai route
// /explore/planets/[slug] yang sama, bukan route terpisah — sesuai fungsi
// generik loader ini (CelestialObject, bukan cuma "Planet") dan supaya tidak
// menambah kompleksitas routing untuk MVP. Nama folder "planets" jadi sedikit
// tidak presisi untuk kategori non-planet; ini trade-off yang disengaja,
// bisa dirapikan di tahap polish nanti kalau diperlukan.
const PLANETS: Record<string, CelestialObject> = {
  mercury: mercuryData as CelestialObject,
  venus: venusData as CelestialObject,
  earth: earthData as CelestialObject,
  mars: marsData as CelestialObject,
  jupiter: jupiterData as CelestialObject,
  saturn: saturnData as CelestialObject,
  uranus: uranusData as CelestialObject,
  neptune: neptuneData as CelestialObject,
  pluto: plutoData as CelestialObject,
  moon: moonData as CelestialObject,
};

export function getPlanetBySlug(slug: string): CelestialObject | null {
  return PLANETS[slug] ?? null;
}

export function getAllPlanetSlugs(): string[] {
  return Object.keys(PLANETS);
}

export function getAllPlanets(): CelestialObject[] {
  return Object.values(PLANETS);
}
