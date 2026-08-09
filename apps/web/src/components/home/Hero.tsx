import Link from "next/link";
import { Button } from "@cosmos/ui";

/**
 * Hero homepage (brief bagian 5.A).
 *
 * Visual dibuat sebagai SVG orbit murni (bukan foto/gambar eksternal),
 * konsisten dengan signature "orbit ring" dari design system Step 2 —
 * sekaligus menghindari ketergantungan pada gambar NASA yang belum
 * terverifikasi lisensinya untuk dipakai sebagai hero background.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <HeroOrbitVisual />

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-6xl">
          Explore the Universe.
          <br />
          Understand Our Place in It.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance font-body text-base text-ink-muted sm:text-lg">
          Pelajari tata surya, planet, bintang, galaksi, dan misi luar
          angkasa melalui data dan sumber NASA.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/learn">
            <Button variant="primary">Mulai Belajar</Button>
          </Link>
          <Link href="/explore">
            <Button variant="secondary">Jelajahi Tata Surya</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HeroOrbitVisual() {
  return (
    <svg
      viewBox="0 0 800 400"
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 opacity-70 sm:h-[480px] sm:w-[1000px]"
    >
      <ellipse
        cx="400"
        cy="200"
        rx="380"
        ry="150"
        fill="none"
        stroke="#1E2436"
        strokeWidth="1"
      />
      <ellipse
        cx="400"
        cy="200"
        rx="260"
        ry="100"
        fill="none"
        stroke="#1E2436"
        strokeWidth="1"
      />
      <ellipse
        cx="400"
        cy="200"
        rx="140"
        ry="52"
        fill="none"
        stroke="#1E2436"
        strokeWidth="1"
      />

      {/* "Matahari" di pusat */}
      <circle cx="400" cy="200" r="14" fill="#FFB86B" opacity="0.9" />

      {/* Titik-titik planet di jalur orbit, statis (bukan animasi berat) */}
      <circle cx="140" cy="150" r="5" fill="#6E8CFF" />
      <circle cx="660" cy="248" r="4" fill="#8FA5FF" />
      <circle cx="400" cy="100" r="3.5" fill="#8B93A7" />
    </svg>
  );
}
