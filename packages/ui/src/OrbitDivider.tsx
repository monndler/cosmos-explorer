type OrbitDividerProps = {
  className?: string;
  /** Label opsional di tengah garis, mis. nama section. */
  label?: string;
};

/**
 * Elemen signature Cosmos Explorer: garis elips tipis yang meniru jalur
 * orbit, dipakai konsisten sebagai pembatas antar-section (bukan garis
 * horizontal generik, dan bukan angka bernomor 01/02/03).
 *
 * Statis secara default — sengaja tidak dianimasikan di sini agar aman
 * dipakai berulang di seluruh halaman tanpa melanggar aturan "jangan
 * membuat semua bagian bercahaya/beranimasi" (brief bagian 16).
 * Versi beranimasi lambat dipakai khusus di hero (lihat Home, Step 3).
 */
export function OrbitDivider({ className = "", label }: OrbitDividerProps) {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={`relative flex items-center justify-center py-10 ${className}`}
    >
      <svg
        viewBox="0 0 400 40"
        className="w-full max-w-3xl text-void-border"
        aria-hidden="true"
      >
        <ellipse
          cx="200"
          cy="20"
          rx="196"
          ry="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="200" cy="20" r="2.5" fill="currentColor" className="text-aurora" />
      </svg>
      {label ? (
        <span className="absolute bg-void px-4 font-data text-xs uppercase tracking-widest text-ink-muted">
          {label}
        </span>
      ) : null}
    </div>
  );
}
