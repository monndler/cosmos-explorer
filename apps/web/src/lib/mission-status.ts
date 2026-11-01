import type { Mission } from "@cosmos/types";

// Dipisah dari missions.ts supaya komponen client tidak ikut membundel JSON misi.
export const STATUS_LABEL: Record<Mission["status"], string> = {
  active: "Aktif",
  completed: "Selesai",
  planned: "Direncanakan",
};

export const STATUS_TONE: Record<Mission["status"], string> = {
  active: "text-aurora-glow",
  completed: "text-ink-muted",
  planned: "text-signal-warning",
};
