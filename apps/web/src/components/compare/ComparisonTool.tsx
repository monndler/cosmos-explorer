"use client";

import { useState } from "react";
import type { CelestialObject } from "@cosmos/types";
import { Card, Button } from "@cosmos/ui";
import { ComparisonTable } from "./ComparisonTable";
import { SizeComparisonVisual } from "./SizeComparisonVisual";

type ComparisonToolProps = {
  planets: CelestialObject[];
};

export function ComparisonTool({ planets }: ComparisonToolProps) {
  const [slugA, setSlugA] = useState(planets[0]?.slug ?? "");
  const [slugB, setSlugB] = useState(planets[1]?.slug ?? planets[0]?.slug ?? "");

  const planetA = planets.find((p) => p.slug === slugA);
  const planetB = planets.find((p) => p.slug === slugB);

  const canCompareMore = planets.length < 2;

  if (canCompareMore) {
    return (
      <Card className="border-dashed">
        <p className="text-ink-muted">
          Comparison tool butuh minimal 2 objek dengan data lengkap. Saat
          ini baru {planets.length} objek yang tersedia — tambahkan planet
          lain terlebih dahulu.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <PlanetSelect
          label="Objek pertama"
          value={slugA}
          onChange={setSlugA}
          planets={planets}
        />

        <Button
          variant="ghost"
          className="mx-auto"
          onClick={() => {
            setSlugA(slugB);
            setSlugB(slugA);
          }}
          aria-label="Tukar posisi objek"
        >
          ⇄
        </Button>

        <PlanetSelect
          label="Objek kedua"
          value={slugB}
          onChange={setSlugB}
          planets={planets}
        />
      </div>

      {planetA && planetB ? (
        <>
          <Card>
            <SizeComparisonVisual planetA={planetA} planetB={planetB} />
          </Card>
          <ComparisonTable planetA={planetA} planetB={planetB} />
        </>
      ) : null}
    </div>
  );
}

function PlanetSelect({
  label,
  value,
  onChange,
  planets,
}: {
  label: string;
  value: string;
  onChange: (slug: string) => void;
  planets: CelestialObject[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-data text-xs uppercase tracking-widest text-ink-muted">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-md border border-void-border bg-void-surface px-3 py-2.5 font-body text-sm text-ink focus-visible:outline-none focus-visible:shadow-glow"
      >
        {planets.map((planet) => (
          <option key={planet.slug} value={planet.slug}>
            {planet.name}
          </option>
        ))}
      </select>
    </label>
  );
}
