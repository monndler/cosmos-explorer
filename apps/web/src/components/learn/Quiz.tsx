"use client";

import { useState } from "react";
import type { QuizQuestion } from "@cosmos/types";
import { Card, Button } from "@cosmos/ui";

type QuizProps = {
  questions: QuizQuestion[];
};

export function Quiz({ questions }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.filter((question) => {
    const selectedChoiceId = answers[question.id];
    const selectedChoice = question.choices.find((c) => c.id === selectedChoiceId);
    return selectedChoice?.isCorrect;
  }).length;

  const isComplete = answeredCount === questions.length;

  function handleSelect(questionId: string, choiceId: string) {
    // Sekali dijawab, tidak bisa diubah lagi — supaya feedback ("benar/salah +
    // penjelasan") terasa sebagai konsekuensi nyata, bukan coba-coba sampai benar.
    if (answers[questionId]) return;
    setAnswers((prev) => ({ ...prev, [questionId]: choiceId }));
  }

  function handleRetry() {
    setAnswers({});
  }

  return (
    <div className="space-y-6">
      {questions.map((question, index) => {
        const selectedChoiceId = answers[question.id];
        const hasAnswered = Boolean(selectedChoiceId);
        const selectedChoice = question.choices.find((c) => c.id === selectedChoiceId);

        return (
          <Card key={question.id}>
            <p className="font-data text-xs uppercase tracking-widest text-ink-muted">
              Soal {index + 1} dari {questions.length}
            </p>
            <p className="mt-2 font-display text-base text-ink">{question.prompt}</p>

            <div className="mt-4 space-y-2">
              {question.choices.map((choice) => {
                const isSelected = choice.id === selectedChoiceId;
                const showAsCorrect = hasAnswered && choice.isCorrect;
                const showAsWrong = hasAnswered && isSelected && !choice.isCorrect;

                return (
                  <button
                    key={choice.id}
                    type="button"
                    disabled={hasAnswered}
                    onClick={() => handleSelect(question.id, choice.id)}
                    className={[
                      "block w-full rounded-md border px-4 py-2.5 text-left text-sm transition-colors duration-200",
                      showAsCorrect
                        ? "border-signal-success bg-signal-success/10 text-ink"
                        : showAsWrong
                          ? "border-signal-danger bg-signal-danger/10 text-ink"
                          : "border-void-border text-ink-muted hover:border-aurora disabled:cursor-default disabled:hover:border-void-border",
                    ].join(" ")}
                  >
                    {choice.label}
                  </button>
                );
              })}
            </div>

            {hasAnswered ? (
              <div className="mt-4 border-t border-void-border pt-4">
                <p
                  className={`font-data text-xs uppercase tracking-widest ${
                    selectedChoice?.isCorrect ? "text-signal-success" : "text-signal-danger"
                  }`}
                >
                  {selectedChoice?.isCorrect ? "Benar" : "Kurang tepat"}
                </p>
                <p className="mt-1.5 text-sm text-ink-muted">{question.explanation}</p>
              </div>
            ) : null}
          </Card>
        );
      })}

      {isComplete ? (
        <Card className="border-aurora text-center">
          <p className="font-display text-lg text-ink">
            Skor kamu: {correctCount} dari {questions.length}
          </p>
          <Button variant="secondary" className="mt-4" onClick={handleRetry}>
            Ulangi kuis
          </Button>
        </Card>
      ) : null}
    </div>
  );
}
