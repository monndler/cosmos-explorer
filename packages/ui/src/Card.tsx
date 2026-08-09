import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

/** Panel surface dasar — dipakai untuk featured cards, quick facts, dsb. */
export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-void-border bg-void-surface p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
