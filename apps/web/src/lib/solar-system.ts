export type SolarSystemPlanet = {
  slug: string;
  name: string;
  color: string;
  diameterKm: number; // faktual, dipakai untuk menentukan ukuran relatif (bukan skala 1:1)
  orbitalPeriodDays: number; // faktual, dipakai untuk kecepatan animasi relatif
  oneLiner: string;
  hasDetailPage: boolean;
};

/**
 * PENTING: diagram ini TIDAK digambar dengan skala jarak/ukuran yang
 * sebenarnya — kalau digambar akurat, planet dalam akan terlalu kecil/rapat
 * untuk dilihat dan Neptunus akan berada jauh di luar layar. Ini adalah
 * pendekatan umum untuk diagram tata surya edukatif, TAPI harus dinyatakan
 * secara eksplisit ke pengguna (lihat disclaimer di SolarSystemVisual)
 * supaya tidak menyesatkan — sesuai prinsip data integrity di brief.
 *
 * Yang tetap akurat: urutan planet, dan urutan relatif kecepatan orbit
 * (planet dalam mengorbit lebih cepat daripada planet luar).
 */
export const SOLAR_SYSTEM_PLANETS: SolarSystemPlanet[] = [
  {
    slug: "mercury",
    name: "Merkurius",
    color: "#A9A6A0",
    diameterKm: 4879,
    orbitalPeriodDays: 88,
    oneLiner: "Planet terdekat dengan Matahari, permukaannya dipenuhi kawah seperti Bulan.",
    hasDetailPage: true,
  },
  {
    slug: "venus",
    name: "Venus",
    color: "#E0C089",
    diameterKm: 12104,
    orbitalPeriodDays: 225,
    oneLiner: "Planet terpanas di tata surya akibat efek rumah kaca ekstrem pada atmosfernya.",
    hasDetailPage: true,
  },
  {
    slug: "earth",
    name: "Bumi",
    color: "#6E8CFF",
    diameterKm: 12742,
    orbitalPeriodDays: 365,
    oneLiner: "Satu-satunya planet yang diketahui memiliki kehidupan.",
    hasDetailPage: true,
  },
  {
    slug: "mars",
    name: "Mars",
    color: "#C1440E",
    diameterKm: 6779,
    orbitalPeriodDays: 687,
    oneLiner: "Dikenal sebagai Planet Merah, memiliki gunung berapi tertinggi di tata surya.",
    hasDetailPage: true,
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    color: "#D9B38C",
    diameterKm: 139820,
    orbitalPeriodDays: 4333,
    oneLiner: "Planet terbesar di tata surya, raksasa gas dengan Bintik Merah Besar yang ikonik.",
    hasDetailPage: true,
  },
  {
    slug: "saturn",
    name: "Saturnus",
    color: "#E3D2A6",
    diameterKm: 116460,
    orbitalPeriodDays: 10759,
    oneLiner: "Terkenal dengan sistem cincinnya yang mencolok, tersusun dari es dan batu.",
    hasDetailPage: true,
  },
  {
    slug: "uranus",
    name: "Uranus",
    color: "#9FD4E0",
    diameterKm: 50724,
    orbitalPeriodDays: 30687,
    oneLiner: "Raksasa es yang berotasi hampir menyamping, berbeda dari planet lain.",
    hasDetailPage: true,
  },
  {
    slug: "neptune",
    name: "Neptunus",
    color: "#4C6FE0",
    diameterKm: 49244,
    orbitalPeriodDays: 60190,
    oneLiner: "Planet terjauh dari Matahari, dikenal dengan angin terkencang di tata surya.",
    hasDetailPage: true,
  },
  {
    slug: "pluto",
    name: "Pluto",
    color: "#B8A88A",
    diameterKm: 2377,
    orbitalPeriodDays: 90560,
    oneLiner: "Planet katai di sabuk Kuiper, sempat dianggap planet kesembilan sebelum 2006.",
    hasDetailPage: true,
  },
];
