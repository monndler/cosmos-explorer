import { Hero } from "@/components/home/Hero";
import { FeaturedAstronomy } from "@/components/home/FeaturedAstronomy";
import { AstronomyOfTheDay } from "@/components/home/AstronomyOfTheDay";
import { NasaDataHighlight } from "@/components/home/NasaDataHighlight";
import { OrbitDivider } from "@cosmos/ui";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OrbitDivider />
      <FeaturedAstronomy />
      <OrbitDivider />
      <AstronomyOfTheDay />
      <OrbitDivider />
      <NasaDataHighlight />
    </>
  );
}
