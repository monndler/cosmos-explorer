import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
};

const DESTINATIONS = [
  { href: "/learn", label: "Learn", hint: "Pelajaran dan kuis astronomi" },
  { href: "/explore", label: "Explore", hint: "Tata surya interaktif dan detail planet" },
  { href: "/missions", label: "Missions", hint: "Misi luar angkasa NASA dan ESA" },
  { href: "/compare", label: "Compare", hint: "Bandingkan dua objek langit" },
];

/**
 * Ilustrasi: sebuah planet yang lepas dari jalur orbitnya, dengan jejak putus-putus.
 * Statis (tanpa animasi) dan dekoratif.
 */
function LostOrbit() {
  return (
    <svg viewBox="0 0 240 120" className="h-auto w-56 sm:w-64" aria-hidden="true">
      <ellipse
        cx="120"
        cy="64"
        rx="100"
        ry="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-void-border"
      />
      <circle cx="120" cy="64" r="7" fill="#FFB86B" />
      <path
        d="M216 54 Q226 40 230 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 4"
        className="text-ink-faint"
      />
      <circle cx="230" cy="20" r="4" fill="currentColor" className="text-aurora" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
      <LostOrbit />

      <h1 className="mt-10 font-display text-3xl text-ink sm:text-4xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 max-w-md text-ink-muted">
        Alamat yang kamu buka tidak ada atau sudah dipindahkan. Periksa
        penulisan alamatnya, atau mulai dari salah satu bagian ini.
      </p>

      <ul className="mt-8 grid w-full max-w-xl gap-3 text-left sm:grid-cols-2">
        {DESTINATIONS.map((d) => (
          <li key={d.href}>
            <Link
              href={d.href}
              className="block rounded-md border border-void-border p-4 transition-colors hover:border-aurora focus-visible:outline-none focus-visible:shadow-glow"
            >
              <span className="font-display text-lg text-ink">{d.label}</span>
              <span className="mt-1 block text-sm text-ink-muted">{d.hint}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-aurora px-5 py-2.5 font-body text-sm font-medium text-void transition-colors duration-200 hover:bg-aurora-glow focus-visible:outline-none focus-visible:shadow-glow"
      >
        Kembali ke beranda
      </Link>
    </section>
  );
}
