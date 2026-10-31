import type { APODEntry } from "@cosmos/types";

// NASA memindahkan APOD ke science.nasa.gov (September 2026). API baru ini
// tidak butuh API key. Endpoint lama api.nasa.gov/planetary/apod kini
// mengembalikan logo "NASA Science" untuk semua tanggal dan dijadwalkan
// diarsipkan pada 1 Desember 2026.
const APOD_ENDPOINT = "https://science.nasa.gov/wp-json/wp/v2/apod-basic";
const ENTRIES_TO_CHECK = 14;
const FETCH_TIMEOUT_MS = 8000; // jangan biarkan homepage menunggu NASA tanpa batas
const MAX_IMAGE_WIDTH = 1600; // asli bisa 6000+ px; kartu hanya ~1100 px lebar
const IMAGE_HOSTS = new Set(["assets.science.nasa.gov", "apod.nasa.gov"]);

export class NasaApodError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NasaApodError";
  }
}

type RawApod = Record<string, unknown>;

const str = (v: unknown): string => (typeof v === "string" ? v : "");

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  ndash: "–",
  mdash: "—",
  hellip: "…",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
};

// explanation, credit, dan title dari API baru berupa HTML. Ubah jadi teks biasa.
function htmlToText(html: string): string {
  return html
    .replace(/<\s*br\s*\/?>/gi, "\n")
    .replace(/<\/p\s*>/gi, "\n\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, code: string) => {
      if (code.startsWith("#")) {
        const n =
          code[1]?.toLowerCase() === "x"
            ? parseInt(code.slice(2), 16)
            : parseInt(code.slice(1), 10);
        return Number.isFinite(n) && n > 0 && n <= 0x10ffff
          ? String.fromCodePoint(n)
          : m;
      }
      return ENTITIES[code.toLowerCase()] ?? m;
    })
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Hanya terima file gambar dari host NASA yang diizinkan (selaras dengan
// next.config.js) dan tolak logo/placeholder.
function isApodImage(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try {
    const u = new URL(value);
    return (
      u.protocol === "https:" &&
      IMAGE_HOSTS.has(u.hostname) &&
      /\.(jpe?g|png|gif|webp)$/i.test(u.pathname) &&
      !/logo/i.test(u.pathname)
    );
  } catch {
    return false;
  }
}

// Host gambar NASA menerima parameter w/h untuk mengubah ukuran. Turunkan lebar
// ke MAX_IMAGE_WIDTH (tinggi diskalakan proporsional) supaya optimizer Next
// tidak mengunduh file asli yang bisa berukuran puluhan MB.
function limitWidth(src: string): string {
  try {
    const u = new URL(src);
    const w = Number(u.searchParams.get("w"));
    const h = Number(u.searchParams.get("h"));
    if (w > MAX_IMAGE_WIDTH && h > 0) {
      u.searchParams.set("w", String(MAX_IMAGE_WIDTH));
      u.searchParams.set("h", String(Math.round((h * MAX_IMAGE_WIDTH) / w)));
      return u.toString();
    }
  } catch {
    // URL sudah divalidasi di isApodImage; kalau gagal, pakai apa adanya.
  }
  return src;
}

// Normalisasi ke APODEntry. Mengembalikan null kalau entri bukan foto yang
// layak ditampilkan (video, logo, judul generik, penjelasan kosong).
function toEntry(raw: RawApod): APODEntry | null {
  if (raw.media_type !== "image") return null;
  // Di API baru, `url` adalah halaman artikel dan `hdurl` adalah file gambarnya.
  if (!isApodImage(raw.hdurl)) return null;

  const date = str(raw.date);
  const title = htmlToText(str(raw.title));
  const explanation = htmlToText(str(raw.explanation));
  if (!date || !title || title === "NASA Science") return null;
  if (explanation.length < 80 || /enable javascript/i.test(explanation)) return null;

  const credit = htmlToText(str(raw.credit));
  const alt = htmlToText(str(raw.alt));
  const permalink = str(raw.permalink);

  return {
    date,
    title,
    explanation,
    url: limitWidth(raw.hdurl),
    mediaType: "image",
    alt: alt || undefined,
    credit: credit || undefined,
    permalink: permalink.startsWith("https://science.nasa.gov/") ? permalink : undefined,
  };
}

/**
 * Fetch APOD (Astronomy Picture of the Day) dari NASA Science APOD API.
 *
 * Mengambil beberapa entri terbaru dalam satu request, lalu memilih yang
 * terbaru dan berupa foto valid. Kalau entri terbaru adalah video atau
 * placeholder, foto valid sebelumnya dipakai dan `isFallback` bernilai true
 * supaya UI bisa memberi tahu pengguna dengan jujur.
 *
 * Hanya dipanggil dari kode server-side. Cache 6 jam: APOD berubah sekali
 * sehari (brief bagian 20).
 */
export async function fetchAPOD(): Promise<APODEntry> {
  let response: Response;
  try {
    response = await fetch(`${APOD_ENDPOINT}?per_page=${ENTRIES_TO_CHECK}`, {
      next: { revalidate: 60 * 60 * 6 },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
  } catch {
    throw new NasaApodError("Gagal menghubungi NASA APOD API (kemungkinan masalah jaringan).");
  }

  if (!response.ok) {
    throw new NasaApodError(`NASA APOD API merespons dengan status ${response.status}.`);
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new NasaApodError("Respons NASA APOD API bukan JSON yang valid.");
  }

  const raws = (Array.isArray(data) ? data : [data]).filter(
    (x): x is RawApod => typeof x === "object" && x !== null,
  );
  const newestFirst = [...raws].sort((a, b) => str(b.date).localeCompare(str(a.date)));

  const latestDate = str(newestFirst[0]?.date);
  for (const raw of newestFirst) {
    const entry = toEntry(raw);
    if (entry) return { ...entry, isFallback: entry.date !== latestDate };
  }

  throw new NasaApodError(
    `Tidak ada foto APOD yang valid dalam ${newestFirst.length} entri terakhir.`,
  );
}
