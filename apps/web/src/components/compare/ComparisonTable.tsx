import { buildQuickFacts } from "@/lib/planet-facts";
import type { CelestialObject } from "@cosmos/types";

export function ComparisonTable({ planetA, planetB }: { planetA: CelestialObject; planetB: CelestialObject }) {
  const factsA = buildQuickFacts(planetA);
  const factsB = buildQuickFacts(planetB);

  // Gabungkan berdasarkan key supaya baris tetap sejajar meski salah satu
  // planet tidak punya data untuk field tertentu (brief bagian 23: jangan
  // memaksa isi field yang datanya tidak ada).
  const allKeys = Array.from(new Set([...factsA.map((f) => f.key), ...factsB.map((f) => f.key)]));

  return (
    <div className="overflow-x-auto rounded-lg border border-void-border">
      <table className="w-full min-w-[480px] border-collapse text-left">
        <thead>
          <tr className="border-b border-void-border">
            <th className="px-4 py-3 font-body text-xs uppercase tracking-widest text-ink-faint">
              &nbsp;
            </th>
            <th className="px-4 py-3 font-display text-base text-ink">{planetA.name}</th>
            <th className="px-4 py-3 font-display text-base text-ink">{planetB.name}</th>
          </tr>
        </thead>
        <tbody>
          {allKeys.map((key) => {
            const factA = factsA.find((f) => f.key === key);
            const factB = factsB.find((f) => f.key === key);
            const label = factA?.label ?? factB?.label ?? key;

            return (
              <tr key={key} className="border-b border-void-border last:border-0">
                <td className="px-4 py-3 text-sm text-ink-muted">{label}</td>
                <td className="px-4 py-3 font-data text-sm text-ink">{factA?.value ?? "—"}</td>
                <td className="px-4 py-3 font-data text-sm text-ink">{factB?.value ?? "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
