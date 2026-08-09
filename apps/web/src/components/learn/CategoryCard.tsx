import Link from "next/link";
import { Card } from "@cosmos/ui";
import type { LearnCategoryMeta } from "@/lib/lessons";

export function CategoryCard({
  category,
  lessonCount,
}: {
  category: LearnCategoryMeta;
  lessonCount: number;
}) {
  return (
    <Link href={`/learn/${category.slug}`} className="block h-full">
      <Card className="h-full transition-colors duration-200 hover:border-aurora">
        <h3 className="font-display text-xl text-ink">{category.label}</h3>
        <p className="mt-2 text-sm text-ink-muted">{category.description}</p>
        <p className="mt-4 font-data text-xs uppercase tracking-widest text-aurora">
          {lessonCount} pelajaran
        </p>
      </Card>
    </Link>
  );
}
