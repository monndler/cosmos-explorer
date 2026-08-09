import Link from "next/link";
import { Card } from "@cosmos/ui";

type FeaturedTopic = {
  title: string;
  description: string;
  href: string;
};

// Deskripsi singkat & faktual per topik — bukan data numerik (aman tanpa
// sumber API), hanya pengantar konsep. Data spesifik (diameter, dsb) baru
// muncul di halaman detail objek (Step berikutnya) dengan sumbernya masing-masing.
const FEATURED_TOPICS: FeaturedTopic[] = [
  {
    title: "Tata Surya",
    description: "Matahari, delapan planet, dan benda-benda yang mengorbitnya.",
    href: "/explore",
  },
  {
    title: "Planet",
    description: "Dari Merkurius yang membara hingga Neptunus yang membeku.",
    href: "/learn/tata-surya",
  },
  {
    title: "Matahari",
    description: "Bintang yang menjadi pusat gravitasi seluruh tata surya kita.",
    href: "/explore/planets/sun",
  },
  {
    title: "Bulan",
    description: "Satelit alami Bumi, tujuan pertama manusia keluar dari planetnya.",
    href: "/learn/tata-surya",
  },
  {
    title: "Bintang",
    description: "Bola plasma raksasa yang menjadi asal-usul hampir semua unsur di alam semesta.",
    href: "/learn/deep-space",
  },
  {
    title: "Galaksi",
    description: "Kumpulan miliaran bintang, gas, dan debu yang terikat gravitasi.",
    href: "/learn/deep-space",
  },
  {
    title: "Black Hole",
    description: "Wilayah ruang-waktu dengan gravitasi yang begitu kuat sehingga cahaya pun tak bisa lolos.",
    href: "/learn/deep-space",
  },
  {
    title: "Exoplanet",
    description: "Planet yang mengorbit bintang di luar tata surya kita.",
    href: "/learn/deep-space",
  },
  {
    title: "Misi NASA",
    description: "Wahana dan program yang memperluas pemahaman kita tentang alam semesta.",
    href: "/missions",
  },
];

export function FeaturedAstronomy() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="font-display text-2xl text-ink sm:text-3xl">
        Mulai dari sini
      </h2>
      <p className="mt-2 max-w-2xl text-ink-muted">
        Sembilan topik yang paling banyak dicari orang saat pertama kali belajar astronomi.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_TOPICS.map((topic) => (
          <Link key={topic.title} href={topic.href} className="block h-full">
            <Card className="h-full transition-colors duration-200 hover:border-aurora">
              <h3 className="font-display text-lg text-ink">{topic.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{topic.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
