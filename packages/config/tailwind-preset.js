/**
 * Shared Tailwind preset — design tokens untuk seluruh Cosmos Explorer.
 *
 * Prinsip (lihat brief bagian 16 & 17):
 * - Dark, space-inspired, whitespace luas, subtle glow (bukan neon penuh).
 * - Kontras warna cukup untuk accessibility (AA minimum).
 * - Motion dibatasi; komponen wajib menghormati prefers-reduced-motion.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#05070D", // background utama, dalam & netral
          surface: "#0B0F1A", // card / panel
          raised: "#131828", // elemen yang "terangkat" (modal, dropdown)
          border: "#1E2436",
        },
        ink: {
          DEFAULT: "#E8ECF4", // teks utama
          muted: "#8B93A7", // teks sekunder / caption
          faint: "#4B5266", // teks tersier, disabled
        },
        aurora: {
          DEFAULT: "#6E8CFF", // accent utama — biru-violet redup
          soft: "#3A4B8F",
          glow: "#8FA5FF",
        },
        ember: {
          DEFAULT: "#FFB86B", // accent hangat, dipakai sangat sedikit
          soft: "#7A5A34",
        },
        signal: {
          success: "#5FD4A0",
          warning: "#F2C572",
          danger: "#F2726C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        data: ["var(--font-data)", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      boxShadow: {
        // "subtle glow", bukan neon penuh — dipakai hemat pada elemen fokus/hero
        glow: "0 0 0 1px rgba(110,140,255,0.25), 0 0 24px rgba(110,140,255,0.15)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};
