import type { Lesson } from "@cosmos/types";
import lessonsData from "../../../../data/lessons/lessons.json";

const LESSONS = lessonsData as Lesson[];

export type LearnCategoryMeta = {
  slug: Lesson["category"];
  label: string;
  description: string;
};

// Urutan sesuai brief bagian 6: Dasar Astronomi -> Tata Surya -> Deep Space -> Eksplorasi
// (dari konsep paling mendasar ke paling kompleks).
export const LEARN_CATEGORIES: LearnCategoryMeta[] = [
  {
    slug: "dasar-astronomi",
    label: "Dasar Astronomi",
    description: "Konsep fundamental untuk mulai memahami langit malam.",
  },
  {
    slug: "tata-surya",
    label: "Tata Surya",
    description: "Matahari, planet, dan benda-benda yang mengorbitnya.",
  },
  {
    slug: "deep-space",
    label: "Deep Space",
    description: "Bintang, galaksi, dan fenomena di luar tata surya kita.",
  },
  {
    slug: "eksplorasi",
    label: "Eksplorasi",
    description: "Sejarah dan misi manusia menjelajah luar angkasa.",
  },
];

export function getCategoryMeta(slug: string): LearnCategoryMeta | null {
  return LEARN_CATEGORIES.find((category) => category.slug === slug) ?? null;
}

export function getLessonsByCategory(categorySlug: string): Lesson[] {
  return LESSONS.filter((lesson) => lesson.category === categorySlug);
}

export function getLessonCountByCategory(categorySlug: string): number {
  return getLessonsByCategory(categorySlug).length;
}
