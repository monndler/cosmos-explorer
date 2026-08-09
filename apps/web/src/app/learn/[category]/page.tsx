import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LEARN_CATEGORIES,
  getCategoryMeta,
  getLessonsByCategory,
} from "@/lib/lessons";
import { Card } from "@cosmos/ui";

type CategoryPageParams = { category: string };

export function generateStaticParams(): CategoryPageParams[] {
  return LEARN_CATEGORIES.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: CategoryPageParams }): Metadata {
  const category = getCategoryMeta(params.category);
  if (!category) return {};
  return {
    title: category.label,
    description: category.description,
  };
}

export default function LearnCategoryPage({ params }: { params: CategoryPageParams }) {
  const category = getCategoryMeta(params.category);
  if (!category) {
    notFound();
  }

  const lessons = getLessonsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/learn" className="font-data text-xs text-ink-muted hover:text-ink">
        ← Learn
      </Link>
      <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
        {category.label}
      </h1>
      <p className="mt-3 max-w-xl text-ink-muted">{category.description}</p>

      <div className="mt-10 space-y-3">
        {lessons.map((lesson) => {
          const hasFullContent = Boolean(lesson.content && lesson.content.length > 0);

          if (!hasFullContent) {
            return (
              <Card key={lesson.id} className="flex items-start justify-between gap-4 border-dashed">
                <div>
                  <h2 className="font-display text-base text-ink">{lesson.title}</h2>
                  <p className="mt-1.5 text-sm text-ink-muted">{lesson.summary}</p>
                </div>
                <span className="shrink-0 rounded-sm bg-void-raised px-2.5 py-1 font-data text-[11px] uppercase tracking-widest text-ink-faint">
                  Segera
                </span>
              </Card>
            );
          }

          return (
            <Link key={lesson.id} href={`/learn/${category.slug}/${lesson.slug}`} className="block">
              <Card className="flex items-start justify-between gap-4 transition-colors duration-200 hover:border-aurora">
                <div>
                  <h2 className="font-display text-base text-ink">{lesson.title}</h2>
                  <p className="mt-1.5 text-sm text-ink-muted">{lesson.summary}</p>
                </div>
                {lesson.quiz && lesson.quiz.length > 0 ? (
                  <span className="shrink-0 rounded-sm bg-void-raised px-2.5 py-1 font-data text-[11px] uppercase tracking-widest text-aurora">
                    + Kuis
                  </span>
                ) : null}
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
