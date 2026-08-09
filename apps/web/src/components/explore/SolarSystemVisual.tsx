"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@cosmos/ui";
import { SOLAR_SYSTEM_PLANETS, type SolarSystemPlanet } from "@/lib/solar-system";

const VIEW_SIZE = 700;
const CENTER = VIEW_SIZE / 2;
const BASE_RADIUS = 55;
const RADIUS_STEP = 34;

function planetSize(diameterKm: number): number {
  return 4 + Math.sqrt(diameterKm) * 0.05;
}

function orbitDurationSeconds(orbitalPeriodDays: number): number {
  return 4 + Math.log10(orbitalPeriodDays) * 6;
}

export function SolarSystemVisual() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedSlug, setSelectedSlug] = useState<string>(SOLAR_SYSTEM_PLANETS[2]!.slug); // default: Bumi

  const selectedPlanet = SOLAR_SYSTEM_PLANETS.find((p) => p.slug === selectedSlug) ?? null;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col items-center">
        <svg
          viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`}
          className="w-full max-w-2xl"
          role="img"
          aria-label="Diagram interaktif tata surya. Pilih planet untuk melihat info singkat."
        >
          {/* Orbit rings, statis */}
          {SOLAR_SYSTEM_PLANETS.map((planet, index) => (
            <circle
              key={`ring-${planet.slug}`}
              cx={CENTER}
              cy={CENTER}
              r={BASE_RADIUS + index * RADIUS_STEP}
              fill="none"
              stroke="#1E2436"
              strokeWidth="1"
            />
          ))}

          {/* Matahari */}
          <circle cx={CENTER} cy={CENTER} r={20} fill="#FFB86B" />

          {/* Planet, masing-masing dalam grup yang berotasi mengelilingi pusat */}
          {SOLAR_SYSTEM_PLANETS.map((planet, index) => {
            const orbitRadius = BASE_RADIUS + index * RADIUS_STEP;
            const size = planetSize(planet.diameterKm);
            const duration = orbitDurationSeconds(planet.orbitalPeriodDays);
            const isSelected = planet.slug === selectedSlug;

            return (
              <g
                key={planet.slug}
                className="animate-orbit-spin"
                style={{
                  transformOrigin: `${CENTER}px ${CENTER}px`,
                  animationDuration: `${duration}s`,
                  animationPlayState: isPlaying ? "running" : "paused",
                  // Sebar posisi awal supaya tidak semua planet berbaris lurus.
                  transform: `rotate(${index * 47}deg)`,
                }}
              >
                <circle
                  cx={CENTER + orbitRadius}
                  cy={CENTER}
                  r={size}
                  fill={planet.color}
                  stroke={isSelected ? "#E8ECF4" : "none"}
                  strokeWidth={isSelected ? 2 : 0}
                  className="cursor-pointer transition-[stroke] duration-200"
                  role="button"
                  tabIndex={0}
                  aria-label={`${planet.name}: ${planet.oneLiner}`}
                  onClick={() => setSelectedSlug(planet.slug)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setSelectedSlug(planet.slug);
                    }
                  }}
                  onMouseEnter={() => setSelectedSlug(planet.slug)}
                />
              </g>
            );
          })}
        </svg>

        <div className="mt-4 flex items-center gap-3">
          <Button variant="secondary" onClick={() => setIsPlaying((p) => !p)}>
            {isPlaying ? "Jeda animasi" : "Lanjutkan animasi"}
          </Button>
        </div>

        <p className="mt-4 max-w-md text-center font-data text-xs text-ink-faint">
          Ukuran & jarak planet pada diagram ini divisualisasikan agar mudah
          dilihat, bukan skala sebenarnya. Urutan planet dan kecepatan orbit
          relatif (planet dalam mengorbit lebih cepat) tetap akurat.
        </p>
      </div>

      <PlanetInfoPanel planet={selectedPlanet} />
    </div>
  );
}

function PlanetInfoPanel({ planet }: { planet: SolarSystemPlanet | null }) {
  if (!planet) return null;

  return (
    <aside className="rounded-lg border border-void-border bg-void-surface p-6" aria-live="polite">
      <h3 className="font-display text-xl text-ink">{planet.name}</h3>
      <p className="mt-3 text-sm text-ink-muted">{planet.oneLiner}</p>

      {planet.hasDetailPage ? (
        <Link href={`/explore/planets/${planet.slug}`} className="mt-5 inline-block">
          <Button variant="primary">Lihat detail lengkap</Button>
        </Link>
      ) : (
        <span className="mt-5 inline-block rounded-sm bg-void-raised px-2.5 py-1 font-data text-xs uppercase tracking-widest text-ink-faint">
          Halaman detail segera hadir
        </span>
      )}
    </aside>
  );
}
