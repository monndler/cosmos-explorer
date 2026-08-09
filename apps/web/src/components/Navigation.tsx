"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/learn", label: "Learn" },
  { href: "/explore", label: "Explore" },
  { href: "/compare", label: "Compare" },
  { href: "/missions", label: "Missions" },
];

/**
 * Navigasi utama. Foundation-level: struktur + interaksi keyboard/mobile
 * sudah lengkap, styling detail per-halaman menyusul di Step 3.
 *
 * - Desktop: horizontal nav bar.
 * - Mobile (<768px): tombol toggle membuka panel menu penuh, bukan dropdown
 *   sempit — sesuai brief bagian 18 (interaktif harus nyaman tanpa mouse).
 */
export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-void-border bg-void/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Cosmos Explorer
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-ink md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="block h-5 w-5">
            {isMobileMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      {isMobileMenuOpen ? (
        <nav
          id="mobile-nav-panel"
          aria-label="Navigasi mobile"
          className="border-t border-void-border bg-void px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-sm px-2 py-3 font-body text-base text-ink-muted transition-colors duration-200 hover:text-ink"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
