import type { Mission } from "@cosmos/types";
import missionsData from "../../../../data/missions/missions.json";

// Data statis lokal (brief bagian 13). Tipe Mission ada di @cosmos/types.
const MISSIONS = missionsData as Mission[];

const STATUS_ORDER: Record<Mission["status"], number> = {
  active: 0,
  planned: 1,
  completed: 2,
};

// Urutan: aktif dulu, lalu direncanakan, lalu selesai; di dalamnya yang terbaru dulu.
export function getAllMissions(): Mission[] {
  return [...MISSIONS].sort(
    (a, b) =>
      STATUS_ORDER[a.status] - STATUS_ORDER[b.status] ||
      (b.launchYear ?? 0) - (a.launchYear ?? 0),
  );
}

export function getMissionBySlug(slug: string): Mission | null {
  return MISSIONS.find((m) => m.slug === slug) ?? null;
}

export function getAllMissionSlugs(): string[] {
  return MISSIONS.map((m) => m.slug);
}
