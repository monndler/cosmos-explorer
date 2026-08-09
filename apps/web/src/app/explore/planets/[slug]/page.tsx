import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPlanetBySlug, getAllPlanetSlugs } from "@/lib/planets";
import { PlanetHeader } from "@/components/planet-detail/PlanetHeader";
import { QuickFacts } from "@/components/planet-detail/QuickFacts";
import { Overview } from "@/components/planet-detail/Overview";
import { CompareToEarth } from "@/components/planet-detail/CompareToEarth";
import { DidYouKnow } from "@/components/planet-detail/DidYouKnow";
import { NasaMissions } from "@/components/planet-detail/NasaMissions";
import { DataSourceNote } from "@/components/planet-detail/DataSourceNote";
import { OrbitDivider } from "@cosmos/ui";

type PlanetPageParams = { slug: string };

export function generateStaticParams(): PlanetPageParams[] {
  return getAllPlanetSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: PlanetPageParams }): Metadata {
  const planet = getPlanetBySlug(params.slug);
  if (!planet) return {};

  return {
    title: planet.name,
    description: planet.shortDescription,
    openGraph: {
      title: `${planet.name} · Cosmos Explorer`,
      description: planet.shortDescription,
      type: "article",
    },
  };
}

export default function PlanetDetailPage({ params }: { params: PlanetPageParams }) {
  const planet = getPlanetBySlug(params.slug);
  const earth = getPlanetBySlug("earth");

  if (!planet) {
    notFound();
  }

  return (
    <>
      <PlanetHeader planet={planet} />
      <QuickFacts planet={planet} />
      <OrbitDivider />
      <Overview planet={planet} />
      {earth ? <CompareToEarth planet={planet} earth={earth} /> : null}
      <OrbitDivider />
      <DidYouKnow planet={planet} />
      <NasaMissions planet={planet} />
      <DataSourceNote planet={planet} />
    </>
  );
}
