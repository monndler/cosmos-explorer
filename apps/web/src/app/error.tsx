"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@cosmos/ui";

/**
 * Error boundary untuk seluruh route. Pesan teknis tidak ditampilkan ke
 * pengunjung; hanya kode `digest` (kalau ada) supaya bisa dicocokkan dengan
 * log server.
 */
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">
        Halaman gagal ditampilkan
      </h1>
      <p className="mt-3 text-ink-muted">
        Terjadi kesalahan saat memuat halaman ini. Coba lagi. Kalau masalahnya
        berulang, kembali ke beranda dan buka halamannya dari sana.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary" onClick={reset}>
          Coba lagi
        </Button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-void-border px-5 py-2.5 font-body text-sm font-medium text-ink transition-colors duration-200 hover:border-aurora focus-visible:outline-none focus-visible:shadow-glow"
        >
          Kembali ke beranda
        </Link>
      </div>

      {error.digest ? (
        <p className="mt-8 font-data text-xs text-ink-faint">
          Kode kesalahan: {error.digest}
        </p>
      ) : null}
    </section>
  );
}
