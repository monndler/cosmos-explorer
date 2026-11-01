import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllMissionSlugs, getMissionBySlug } from "@/lib/missions";
import { getPlanetBySlug } from "@/lib/planets";
import { STATUS_LABEL, STATUS_TONE } from "@/lib/mission-status";

type MissionPageParams = { slug: string };

export function generateStaticParams(): MissionPageParams[] {
  return getAllMissionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: MissionPageParams }): Metadata {
  const mission = getMissionBySlug(params.slug);
  if (!mission) return {};
  return {
    title: mission.name,
    description: mission.summary,
    openGraph: {
      title: `${mission.name} · Cosmos Explorer`,
      description: mission.summary,
      type: "article",
    },
  };
}

export default function MissionDetailPage({ params }: { params: MissionPageParams }) {
  const mission = getMissionBySlug(params.slug);
  if (!mission) {
    notFound();
  }

  const related = (mission.relatedObjectSlugs ?? []).flatMap((slug) => {
    const object = getPlanetBySlug(slug);
    return object ? [{ slug, name: object.name }] : [];
  });

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/missions" className="font-data text-xs text-ink-muted hover:text-ink">
        ← Semua misi
      </Link>

      <header className="mt-6">
        <span
          className={`rounded-sm bg-void-raised px-2.5 py-1 font-data text-xs uppercase tracking-widest ${STATUS_TONE[mission.status]}`}
        >
          {STATUS_LABEL[mission.status]}
        </span>
        <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">{mission.name}</h1>
        <p className="mt-2 font-data text-sm text-ink-faint">
          {mission.agency}
          {mission.launchYear ? ` · Diluncurkan ${mission.launchYear}` : ""}
        </p>
      </header>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">{mission.summary}</p>

      {related.length > 0 && (
        <section className="mt-10" aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-data text-xs uppercase tracking-widest text-ink-muted">
            Objek yang dipelajari
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {related.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/explore/planets/${o.slug}`}
                  className="rounded-full border border-void-border px-4 py-1.5 text-sm text-ink hover:border-aurora"
                >
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10" aria-labelledby="mission-source-heading">
        <h2
          id="mission-source-heading"
          className="font-data text-xs uppercase tracking-widest text-ink-muted"
        >
          Data Source
        </h2>
        <ul className="mt-3 space-y-1">
          {mission.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-data text-xs text-aurora-glow underline decoration-void-border hover:decoration-aurora"
              >
                {source.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 font-data text-xs text-ink-faint">
          Status misi dapat berubah. Periksa halaman sumber untuk informasi terbaru.
        </p>
      </section>
    </article>
  );
}
