import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-aurora text-void hover:bg-aurora-glow focus-visible:shadow-glow",
  secondary:
    "bg-transparent text-ink border border-void-border hover:border-aurora focus-visible:shadow-glow",
  ghost:
    "bg-transparent text-ink-muted hover:text-ink focus-visible:shadow-glow",
};

/**
 * Button dasar. Semua state (hover/focus) memakai transisi singkat (200ms,
 * dari token `transitionDuration.DEFAULT`) dan tidak bergantung warna saja —
 * variant "primary" & "secondary" juga berbeda dari sisi border/weight,
 * sesuai aturan accessibility di brief bagian 17.
 */
export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 font-body text-sm font-medium transition-colors duration-200 focus-visible:outline-none disabled:opacity-40 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
