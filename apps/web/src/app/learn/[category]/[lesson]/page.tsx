import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryMeta, getLessonBySlug, getAllLessons } from "@/lib/lessons";
import { Quiz } from "@/components/learn/Quiz";

type LessonPageParams = { category: string; lesson: string };

export function generateStaticParams(): LessonPageParams[] {
  return getAllLessons().map((lesson) => ({
    category: lesson.category,
    lesson: lesson.slug,
  }));
}

export function generateMetadata({ params }: { params: LessonPageParams }): Metadata {
  const lesson = getLessonBySlug(params.category, params.lesson);
  if (!lesson) return {};
  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

export default function LessonPage({ params }: { params: LessonPageParams }) {
  const category = getCategoryMeta(params.category);
  const lesson = getLessonBySlug(params.category, params.lesson);

  if (!category || !lesson) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href={`/learn/${category.slug}`}
        className="font-data text-xs text-ink-muted hover:text-ink"
      >
        ← {category.label}
      </Link>

      <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{lesson.title}</h1>
      <p className="mt-3 text-ink-muted">{lesson.summary}</p>

      {lesson.content && lesson.content.length > 0 ? (
        <div className="mt-10 space-y-4">
          {lesson.content.map((paragraph, index) => (
            <p key={index} className="text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {lesson.quiz && lesson.quiz.length > 0 ? (
        <div className="mt-14">
          <h2 className="font-display text-xl text-ink">Uji Pemahaman</h2>
          <p className="mt-1.5 text-sm text-ink-muted">
            Pilih jawaban untuk tiap soal — penjelasan langsung muncul setelah kamu menjawab.
          </p>
          <div className="mt-6">
            <Quiz questions={lesson.quiz} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
