"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SOLAR_SYSTEM_PLANETS } from "@/lib/solar-system";

/**
 * Scene orbit interaktif untuk hero homepage.
 *
 * - Planet mengorbit di SVG. Posisi diperbarui lewat ref di requestAnimationFrame
 *   (tanpa re-render React per frame).
 * - Kursor di atas planet memperlambat gerak + menampilkan keterangan.
 *   Klik membuka halaman detail. Gerak kursor naik/turun memiringkan orbit.
 * - Seperti /explore, diagram ini TIDAK berskala. Hanya urutan planet dan
 *   urutan relatif kecepatan orbit yang mengikuti data asli.
 */

const W = 1000;
const H = 400;
const CX = W / 2;
const CY = H / 2;
const SUN_R = 26;
const RATIO = 0.3; // seberapa "pipih" orbit (sudut pandang miring)
const RX_INNER = 135;
const RX_OUTER = 470;

const r2 = (n: number) => Math.round(n * 100) / 100;
const maxDiameter = Math.max(...SOLAR_SYSTEM_PLANETS.map((p) => p.diameterKm));

const PLANETS = SOLAR_SYSTEM_PLANETS.map((p, i, all) => ({
  ...p,
  rx: r2(RX_INNER + (i * (RX_OUTER - RX_INNER)) / Math.max(all.length - 1, 1)),
  radius: r2(2.6 + 6.5 * Math.sqrt(p.diameterKm / maxDiameter)),
  // detik per putaran: skala terkompresi, urutan kecepatan tetap benar
  secondsPerLap: 14 * Math.sqrt(p.orbitalPeriodDays / 88),
  startAngle: i * 0.83 + 0.5,
}));

function place(rx: number, angle: number, f: number) {
  const s = Math.sin(angle);
  return {
    x: CX + rx * Math.cos(angle),
    y: CY + rx * RATIO * f * s,
    scale: 1 + 0.18 * s, // planet di sisi depan sedikit lebih besar
  };
}

// Sudut putar supaya sisi terang planet menghadap Matahari
function lightDeg(x: number, y: number) {
  return (Math.atan2(CY - y, CX - x) * 180) / Math.PI - 180;
}

const RAYS = Array.from({ length: 18 }, (_, i) => {
  const a = (i / 18) * Math.PI * 2;
  const len = 30 + ((i * 7) % 5) * 10;
  const hw = 0.07;
  const p = (r: number, ang: number) =>
    `${r2(CX + r * Math.cos(ang))},${r2(CY + r * Math.sin(ang))}`;
  return `${p(SUN_R - 2, a - hw)} ${p(SUN_R + len, a)} ${p(SUN_R - 2, a + hw)}`;
});

export function HeroOrbitScene() {
  const [active, setActive] = useState<string | null>(null);
  const [reduced, setReduced] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const planetRefs = useRef<(SVGGElement | null)[]>([]);
  const shadeRefs = useRef<(SVGCircleElement | null)[]>([]);
  const orbitRefs = useRef<(SVGEllipseElement | null)[]>([]);
  const tilt = useRef(1);
  const slow = useRef(false);

  const focusOn = (slug: string | null) => {
    slow.current = slug !== null;
    setActive(slug);
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const angles = PLANETS.map((p) => p.startAngle);
    let f = 1;
    let speed = 1;
    let raf = 0;
    let last = 0;

    const apply = () => {
      PLANETS.forEach((p, i) => {
        const { x, y, scale } = place(p.rx, angles[i] ?? p.startAngle, f);
        planetRefs.current[i]?.setAttribute(
          "transform",
          `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${scale.toFixed(3)})`,
        );
        shadeRefs.current[i]?.setAttribute(
          "transform",
          `rotate(${lightDeg(x, y).toFixed(1)})`,
        );
        orbitRefs.current[i]?.setAttribute("ry", (p.rx * RATIO * f).toFixed(2));
      });
    };

    if (mq.matches) {
      apply();
      return;
    }

    const tick = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      speed += ((slow.current ? 0.12 : 1) - speed) * Math.min(1, dt * 6);
      f += (tilt.current - f) * Math.min(1, dt * 5);
      PLANETS.forEach((p, i) => {
        angles[i] =
          (angles[i] ?? p.startAngle) +
          ((Math.PI * 2) / p.secondsPerLap) * dt * speed;
      });
      apply();
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // Hanya animasi saat scene terlihat di layar
    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) start();
      else stop();
    });
    if (rootRef.current) io.observe(rootRef.current);
    return () => {
      stop();
      io.disconnect();
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ny = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
    tilt.current = 0.8 + 0.45 * ny; // 0.8 (datar) .. 1.25 (miring)
  };

  const activePlanet = PLANETS.find((p) => p.slug === active);
  const caption =
    active === "sun"
      ? {
          name: "Matahari",
          text: "Bintang di pusat tata surya. Semua planet mengorbit di sekelilingnya.",
        }
      : activePlanet
        ? { name: activePlanet.name, text: activePlanet.oneLiner }
        : null;

  return (
    <div className="relative mx-auto mt-12 max-w-5xl">
      <div
        ref={rootRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => {
          tilt.current = 1;
          focusOn(null);
        }}
        className="relative overflow-hidden"
      >
        {/* Di layar kecil scene dipotong di tepi, tetap berpusat di Matahari */}
        <div className="relative left-1/2 w-[760px] max-w-none -translate-x-1/2 sm:left-0 sm:w-full sm:translate-x-0">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            role="group"
            aria-label="Diagram tata surya interaktif"
            className="block h-auto w-full overflow-visible"
          >
            <defs>
              <radialGradient id="hs-corona">
                <stop offset="0%" stopColor="#FFC878" stopOpacity="0.55" />
                <stop offset="35%" stopColor="#FF9646" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FF7828" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hs-core" cx="0.42" cy="0.4" r="0.75">
                <stop offset="0%" stopColor="#FFF4CF" />
                <stop offset="30%" stopColor="#FFD98A" />
                <stop offset="62%" stopColor="#FFA24A" />
                <stop offset="100%" stopColor="#E8561F" />
              </radialGradient>
              <radialGradient id="hs-limb">
                <stop offset="62%" stopColor="#7A1E00" stopOpacity="0" />
                <stop offset="100%" stopColor="#7A1E00" stopOpacity="0.5" />
              </radialGradient>
              <radialGradient id="hs-shade" cx="0.28" cy="0.5" r="0.85">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="100%" stopColor="#000014" stopOpacity="0.6" />
              </radialGradient>
              <filter id="hs-granule" x="0" y="0" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.11"
                  numOctaves="2"
                  seed="7"
                  result="noise"
                >
                  {!reduced && (
                    <animate
                      attributeName="baseFrequency"
                      dur="24s"
                      values="0.11;0.14;0.11"
                      repeatCount="indefinite"
                    />
                  )}
                </feTurbulence>
                <feColorMatrix
                  in="noise"
                  type="matrix"
                  values="0 0 0 0 1  0 0 0 0 0.45  0 0 0 0 0.1  0 0 0 2.4 -0.95"
                  result="spots"
                />
                <feComposite in="spots" in2="SourceGraphic" operator="in" />
              </filter>
              <filter id="hs-soft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.8" />
              </filter>
            </defs>

            {/* Jalur orbit */}
            {PLANETS.map((p, i) => (
              <ellipse
                key={p.slug}
                ref={(el) => {
                  orbitRefs.current[i] = el;
                }}
                cx={CX}
                cy={CY}
                rx={p.rx}
                ry={r2(p.rx * RATIO)}
                fill="none"
                stroke={active === p.slug ? "#4A5580" : "#1E2436"}
                strokeWidth="1"
              />
            ))}

            {/* Matahari */}
            <g
              onPointerEnter={() => focusOn("sun")}
              onPointerLeave={() => focusOn(null)}
            >
              <circle
                className="hero-sun-pulse"
                cx={CX}
                cy={CY}
                r="150"
                fill="url(#hs-corona)"
                aria-hidden="true"
              />
              <g
                className="hero-rays-spin"
                filter="url(#hs-soft)"
                opacity="0.4"
                aria-hidden="true"
              >
                {RAYS.map((pts, i) => (
                  <polygon key={i} points={pts} fill="#FFB86B" />
                ))}
              </g>
              <circle cx={CX} cy={CY} r={SUN_R} fill="url(#hs-core)" />
              <circle
                cx={CX}
                cy={CY}
                r={SUN_R}
                fill="#FFFFFF"
                filter="url(#hs-granule)"
                opacity="0.7"
              />
              <circle cx={CX} cy={CY} r={SUN_R} fill="url(#hs-limb)" />
              {/* Area hover yang lebih lega dari bola Matahari */}
              <circle cx={CX} cy={CY} r="44" fill="transparent" />
            </g>

            {/* Planet */}
            {PLANETS.map((p, i) => {
              const init = place(p.rx, p.startAngle, 1);
              const body = (
                <>
                  <circle r="22" fill="transparent" />
                  {active === p.slug && (
                    <circle
                      r={p.radius + 5}
                      fill="none"
                      stroke="#E8ECF4"
                      strokeOpacity="0.7"
                      strokeWidth="1"
                    />
                  )}
                  <circle r={p.radius} fill={p.color} />
                  <circle
                    ref={(el) => {
                      shadeRefs.current[i] = el;
                    }}
                    r={p.radius}
                    fill="url(#hs-shade)"
                    transform={`rotate(${lightDeg(init.x, init.y).toFixed(1)})`}
                  />
                  {p.slug === "saturn" && (
                    <ellipse
                      rx={r2(p.radius * 1.9)}
                      ry={r2(p.radius * 0.5)}
                      fill="none"
                      stroke="#D9C28F"
                      strokeWidth="1.4"
                      opacity="0.9"
                      transform="rotate(-18)"
                    />
                  )}
                </>
              );
              const handlers = {
                onPointerEnter: () => focusOn(p.slug),
                onPointerLeave: () => focusOn(null),
                onFocus: () => focusOn(p.slug),
                onBlur: () => focusOn(null),
              };
              return (
                <g
                  key={p.slug}
                  ref={(el) => {
                    planetRefs.current[i] = el;
                  }}
                  transform={`translate(${r2(init.x)} ${r2(init.y)}) scale(${r2(init.scale)})`}
                >
                  {p.hasDetailPage ? (
                    <Link
                      href={`/explore/planets/${p.slug}`}
                      aria-label={`Buka halaman ${p.name}`}
                      className="cursor-pointer outline-none"
                      {...handlers}
                    >
                      {body}
                    </Link>
                  ) : (
                    <g {...handlers}>{body}</g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div
        className="mx-auto min-h-[5.5rem] max-w-xl px-4 text-center"
        aria-live="polite"
      >
        {caption ? (
          <>
            <p className="font-display text-lg text-ink">{caption.name}</p>
            <p className="mt-1 font-body text-sm text-ink-muted">
              {caption.text}
            </p>
          </>
        ) : (
          <p className="font-body text-sm text-ink-muted">
            Arahkan kursor ke sebuah planet, lalu klik untuk membuka halamannya.
          </p>
        )}
        <p className="mt-2 font-body text-xs text-ink-muted opacity-80">
          Ukuran dan jarak tidak berskala. Hanya urutan planet dan urutan
          kecepatan orbit yang akurat.
        </p>
      </div>
    </div>
  );
}