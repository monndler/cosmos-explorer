import Link from "next/link";
import { Button } from "@cosmos/ui";
import { HeroOrbitScene } from "./HeroOrbitScene";

/**
 * Hero homepage (brief bagian 5.A).
 *
 * Teks di atas, scene tata surya interaktif (HeroOrbitScene) di bawah tombol
 * supaya Matahari dan planet tidak menimpa teks. Visual SVG murni, tanpa
 * gambar eksternal, jadi tidak bergantung pada lisensi gambar NASA.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
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

      <HeroOrbitScene />
    </section>
  );
}