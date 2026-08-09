/**
 * Footer global. Menyediakan tempat atribusi sumber data NASA yang konsisten
 * di setiap halaman, sesuai prinsip transparansi di brief bagian 15.
 * Detail atribusi per-halaman (source, endpoint, retrieval date) tetap
 * ditampilkan di masing-masing komponen data, footer ini hanya pernyataan umum.
 */
export function Footer() {
  return (
    <footer className="border-t border-void-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-ink-muted">
        <p>
          Cosmos Explorer menggunakan data dan gambar dari sumber resmi NASA,
          termasuk NASA Open APIs dan NASA/JPL Solar System Exploration.
        </p>
        <p className="font-data text-xs text-ink-faint">
          Cosmos Explorer bukan situs resmi NASA.
        </p>
      </div>
    </footer>
  );
}
