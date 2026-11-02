import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Card } from "@cosmos/ui";
import { AsteroidList } from "@/components/asteroids/AsteroidList";

export const metadata: Metadata = {
  title: "Asteroid Tracker",
  description: "Asteroid yang melintas dekat Bumi hari ini, langsung dari data NASA NeoWs.",
};

export default function AsteroidsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/explore" className="font-data text-xs text-ink-muted hover:text-ink">
        ← Explore
      </Link>

      <span className="mt-4 block font-data text-xs uppercase tracking-widest text-aurora">
        Asteroid Tracker
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
        Asteroid di Dekat Bumi Hari Ini
      </h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Diurutkan dari yang paling dekat. "Potentially Hazardous" adalah
        klasifikasi resmi NASA untuk asteroid berukuran cukup besar dan
        berjarak cukup dekat untuk terus dipantau — bukan berarti sedang
        mengancam Bumi.
      </p>

      <div className="mt-10">
        <Suspense fallback={<AsteroidListSkeleton />}>
          <AsteroidList />
        </Suspense>
      </div>
    </div>
  );
}

function AsteroidListSkeleton() {
  return (
    <div className="space-y-3" aria-busy="true" aria-label="Memuat data asteroid dari NASA">
      {[0, 1, 2].map((i) => (
        <Card key={i} className="space-y-3">
          <div className="h-4 w-1/3 animate-pulse rounded bg-void-raised" />
          <div className="h-3 w-1/2 animate-pulse rounded bg-void-raised" />
        </Card>
      ))}
    </div>
  );
}
