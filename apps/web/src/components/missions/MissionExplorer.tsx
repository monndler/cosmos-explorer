"use client";

import Link from "next/link";
import { useState } from "react";
import { Card } from "@cosmos/ui";
import { STATUS_LABEL, STATUS_TONE } from "@/lib/mission-status";

type Status = "active" | "completed" | "planned";

export type MissionCardData = {
  slug: string;
  name: string;
  agency: string;
  launchYear?: number;
  status: Status;
  summary: string;
};

const STATUSES: Status[] = ["active", "planned", "completed"];

export function MissionExplorer({ missions }: { missions: MissionCardData[] }) {
  const [filter, setFilter] = useState<Status | "all">("all");

  const available = STATUSES.filter((s) => missions.some((m) => m.status === s));
  const shown = filter === "all" ? missions : missions.filter((m) => m.status === filter);
  const countOf = (s: Status) => missions.filter((m) => m.status === s).length;

  const chip = (selected: boolean) =>
    `rounded-full border px-4 py-1.5 font-data text-xs uppercase tracking-widest transition-colors ${
      selected
        ? "border-aurora bg-void-raised text-aurora-glow"
        : "border-void-border text-ink-muted hover:text-ink"
    }`;

  return (
    <>
      <div role="group" aria-label="Filter status misi" className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
          className={chip(filter === "all")}
        >
          Semua ({missions.length})
        </button>
        {available.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={filter === s}
            onClick={() => setFilter(s)}
            className={chip(filter === s)}
          >
            {STATUS_LABEL[s]} ({countOf(s)})
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((m) => (
          <li key={m.slug}>
            <Link href={`/missions/${m.slug}`} className="block h-full">
              <Card className="h-full transition-colors hover:border-aurora">
                <span
                  className={`rounded-sm bg-void-raised px-2.5 py-1 font-data text-xs uppercase tracking-widest ${STATUS_TONE[m.status]}`}
                >
                  {STATUS_LABEL[m.status]}
                </span>
                <h2 className="mt-4 font-display text-xl text-ink">{m.name}</h2>
                <p className="mt-1 font-data text-xs text-ink-faint">
                  {m.agency}
                  {m.launchYear ? ` · ${m.launchYear}` : ""}
                </p>
                <p className="mt-3 line-clamp-4 text-sm text-ink-muted">{m.summary}</p>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
