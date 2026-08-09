import type { Metadata } from "next";
import { LEARN_CATEGORIES, getLessonCountByCategory } from "@/lib/lessons";
import { CategoryCard } from "@/components/learn/CategoryCard";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Belajar astronomi dari dasar hingga eksplorasi luar angkasa, dibagi dalam empat kategori.",
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <span className="font-data text-xs uppercase tracking-widest text-aurora">
        Learn
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
        Belajar astronomi, selangkah demi selangkah
      </h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Mulai dari konsep paling dasar, lalu berlanjut ke tata surya, ruang
        angkasa yang lebih jauh, hingga sejarah eksplorasi manusia.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {LEARN_CATEGORIES.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            lessonCount={getLessonCountByCategory(category.slug)}
          />
        ))}
      </div>
    </div>
  );
}
