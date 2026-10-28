/**
 * Shared domain types untuk Cosmos Explorer.
 *
 * Aturan (brief bagian 23 & 24):
 * - Jangan membuat data fiktif.
 * - Field yang datanya belum tersedia bersifat opsional / `null`, bukan diisi angka karangan.
 */

export type DataSource = {
  name: string;
  url: string;
  retrievedAt?: string; // ISO date, kapan data ini terakhir diambil dari sumber
};

export type CelestialObjectCategory =
  | "star"
  | "planet"
  | "dwarf-planet"
  | "moon"
  | "asteroid"
  | "comet"
  | "galaxy"
  | "nebula"
  | "black-hole"
  | "exoplanet";

export type PhysicalProperties = {
  diameterKm?: number;
  massKg?: number;
  gravityMs2?: number;
  meanTemperatureC?: number;
};

export type OrbitalProperties = {
  distanceFromSunKm?: number;
  orbitalPeriodDays?: number;
};

export type RotationProperties = {
  dayLengthHours?: number;
};

export type CelestialObject = {
  id: string;
  slug: string;
  name: string;
  category: CelestialObjectCategory;
  shortDescription: string;
  imageUrl?: string;

  physical: PhysicalProperties;
  orbital?: OrbitalProperties;
  rotation?: RotationProperties;
  moons?: number;

  /** Paragraf penjelasan populer (brief bagian 7 — section "Overview"). */
  overview?: string[];
  didYouKnow?: string[];

  /**
   * Ringkasan misi NASA terkait objek ini, ditampilkan langsung di halaman
   * detail (brief bagian 7 — section "NASA Missions"). Ini BUKAN pengganti
   * tipe `Mission` penuh — hanya ringkasan tampilan. Data misi lengkap
   * (untuk halaman /missions) tetap memakai tipe `Mission`.
   */
  missions?: {
    name: string;
    launchYear?: number;
    status: Mission["status"];
    summary: string;
  }[];

  /** Tanggal data ini terakhir diverifikasi/diperbarui (ISO date). */
  dataUpdatedAt?: string;

  sources: DataSource[];
};

export type Planet = CelestialObject & {
  category: "planet" | "dwarf-planet";
};

export type Mission = {
  id: string;
  slug: string;
  name: string;
  agency: string;
  launchYear?: number;
  status: "planned" | "active" | "completed";
  summary: string;
  relatedObjectSlugs?: string[];
  sources: DataSource[];
};

export type APODEntry = {
  date: string; // YYYY-MM-DD
  title: string;
  explanation: string;
  url: string;
  mediaType: "image" | "video";
  copyright?: string;
};

export type NearEarthObject = {
  id: string;
  name: string;
  estimatedDiameterKmMin?: number;
  estimatedDiameterKmMax?: number;
  isPotentiallyHazardous: boolean;
  closeApproachDate?: string;
  missDistanceKm?: number;
  relativeVelocityKmH?: number;
};

export type QuizChoice = {
  id: string;
  label: string;
  isCorrect: boolean;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  choices: QuizChoice[];
  explanation: string; // wajib diisi — brief bagian 10: jangan hanya "benar/salah"
};

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  category: "dasar-astronomi" | "tata-surya" | "deep-space" | "eksplorasi";
  summary: string;
  content?: string[];
  quiz?: QuizQuestion[];
};
