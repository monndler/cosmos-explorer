# COSMOS EXPLORER - Platform Belajar Astronomi Interaktif

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18.3+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9.0-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Turborepo](https://img.shields.io/badge/Turborepo-2.0+-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)

*Situs belajar astronomi berbahasa Indonesia yang berbasis data dan sumber resmi NASA. Baca pelajaran singkat, kerjakan kuis, jelajahi tata surya secara interaktif, buka detail planet, dan bandingkan dua objek langit secara langsung.*

[🚀 Live Demo](#) • [📖 Dokumentasi](#-api-documentation) • [🛠️ Panduan Setup](#-quick-start) • [🏗️ Arsitektur](#️-architecture)

> Cosmos Explorer bukan situs resmi NASA.

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Tech Stack](#️-tech-stack)
- [Architecture](#️-architecture)
- [Features](#-features)
- [API Documentation](#-api-documentation)
- [Data & Content](#-data--content)
- [Available Scripts](#-available-scripts)
- [Development Roadmap](#-development-roadmap)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)

---

## 🎯 About The Project

Cosmos Explorer adalah aplikasi web edukasi astronomi yang menggabungkan konten pembelajaran terstruktur dengan data NASA. Pengguna bisa belajar dari konsep dasar sampai sejarah eksplorasi luar angkasa, melihat tata surya bergerak di diagram interaktif, dan membandingkan planet satu sama lain dengan visual yang mudah dipahami.

Dibangun sebagai monorepo (pnpm + Turborepo) dengan Next.js App Router di sisi aplikasi, plus paket-paket kecil yang bisa dipakai ulang untuk tipe data, logika astronomi, klien NASA, dan komponen UI.

### 🌟 Key Highlights

- **📚 Belajar Terstruktur**: 4 kategori, 12 pelajaran, masing-masing dengan kuis dan penjelasan tiap jawaban
- **🪐 Tata Surya Interaktif**: Diagram SVG beranimasi, klik planet untuk info singkat
- **⚖️ Compare Tool**: Bandingkan dua objek lengkap dengan tabel dan visual ukuran
- **🛰️ Data NASA**: Astronomy Picture of the Day langsung dari NASA APOD API
- **🔐 API Key Aman**: Semua panggilan NASA lewat server, key tidak pernah sampai ke browser
- **🧪 Type Safety**: Full TypeScript dengan tipe domain bersama antar paket
- **✅ Data Jujur**: Tidak ada data karangan. Field yang tidak tersedia tidak ditampilkan

### 🎪 Core Modules

- **Home** — Hero, topik pilihan, Astronomy of the Day, fakta "Tahukah kamu?"
- **Learn** — Kategori pelajaran, isi pelajaran, kuis interaktif
- **Explore** — Diagram tata surya interaktif dan halaman detail planet
- **Compare** — Perbandingan dua objek secara langsung
- **NASA Integration** — Klien NASA API server-side dengan cache dan fallback

---

## 🔧 Prerequisites

Pastikan sudah terpasang:

### Required Software

| Software | Version | Download Link | Notes |
|----------|---------|---------------|-------|
| **Node.js** | 18.18+ | [Download](https://nodejs.org/) | LTS direkomendasikan |
| **pnpm** | 9.0+ | [Install](https://pnpm.io/installation) | Package manager (wajib, ini workspace pnpm) |
| **Git** | 2.30+ | [Download](https://git-scm.com/) | Version control |
| **NASA API Key** | — | [api.nasa.gov](https://api.nasa.gov) | Gratis, dipakai untuk APOD |

### Development Environment

- **Code Editor**: VS Code (direkomendasikan) dengan extension:
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <url-repo-kamu>
cd cosmos-explorer
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment

```bash
cp apps/web/.env.local.example apps/web/.env.local
```

Edit `apps/web/.env.local`:
```env
# Hanya dipakai di server. JANGAN diberi prefix NEXT_PUBLIC_
NASA_API_KEY=your_key_here
```

> Tanpa `NASA_API_KEY`, aplikasi tetap jalan. Section "Astronomy of the Day" hanya menampilkan pesan bahwa data belum tersedia.

### 4. Start Development Server

```bash
pnpm dev
```

### 5. Verify Installation

Buka `http://localhost:3000`. Seharusnya kamu melihat:

1. ✅ **Homepage** dengan hero, topik pilihan, dan Astronomy of the Day
2. ✅ **Learn** dengan 4 kategori pelajaran dan kuis
3. ✅ **Explore** dengan diagram tata surya beranimasi
4. ✅ **Detail Planet** (mis. `/explore/planets/mars`) dengan quick facts dan perbandingan dengan Bumi
5. ✅ **Compare** dengan tabel dan visual ukuran

---

## 🛠️ Tech Stack

### Web App

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js (App Router) | 14.2+ | Routing, SSR/SSG, Route Handlers |
| **UI Library** | React | 18.3+ | UI |
| **Language** | TypeScript | 5.5+ | Type safety |
| **Styling** | Tailwind CSS | 3.4+ | Utility-first CSS (preset bersama) |
| **Fonts** | Newsreader, Inter, IBM Plex Mono | — | Display, body, dan data |

### Tooling

| Tool | Purpose |
|------|---------|
| **pnpm workspaces** | Manajemen monorepo |
| **Turborepo** | Orkestrasi task (dev, build, lint, typecheck) |
| **Prettier** | Format kode |

---

## 🏗️ Architecture

### Project Structure

```
cosmos-explorer/
├── 📁 apps/
│   └── 📁 web/                       # Aplikasi Next.js
│       ├── 📁 src/
│       │   ├── 📁 app/               # Route (/, /learn, /explore, /compare, /api/apod)
│       │   ├── 📁 components/        # Dikelompokkan per halaman
│       │   │   ├── 📁 home/          # Hero, Featured, APOD, NasaDataHighlight
│       │   │   ├── 📁 learn/         # CategoryCard, Quiz
│       │   │   ├── 📁 explore/       # SolarSystemVisual
│       │   │   ├── 📁 compare/       # ComparisonTool, Table, SizeVisual
│       │   │   └── 📁 planet-detail/ # Header, QuickFacts, Overview, dll.
│       │   └── 📁 lib/               # Loader data planet, pelajaran, diagram tata surya
│       └── 📄 .env.local.example
│
├── 📁 packages/
│   ├── 📁 types/                     # Tipe domain bersama
│   ├── 📁 astronomy/                 # Fungsi murni: format satuan & rasio perbandingan
│   ├── 📁 nasa/                      # Klien NASA API (server-side saja)
│   ├── 📁 ui/                        # Button, Card, OrbitDivider
│   └── 📁 config/                    # tsconfig & Tailwind preset bersama
│
├── 📁 data/
│   ├── 📁 planets/                   # Satu JSON per planet / planet katai
│   ├── 📁 moons/                     # Data Bulan
│   └── 📁 lessons/                   # lessons.json (pelajaran + kuis)
│
├── 📄 turbo.json
├── 📄 pnpm-workspace.yaml
└── 📄 README.md
```

### Data Model

```
CelestialObject ──┬── PhysicalProperties
                  ├── OrbitalProperties
                  ├── RotationProperties
                  ├── missions[]  (ringkasan tampilan)
                  └── sources[]   (DataSource)

Lesson ── QuizQuestion ── QuizChoice

Mission        (tipe sudah ada, belum dipakai)
NearEarthObject (tipe sudah ada, belum dipakai)
APODEntry      (hasil normalisasi dari NASA APOD API)
```

### Request Flow

```
Browser
    ↓
Next.js (Server Components / Route Handlers)
    ├── data/*.json  →  lib/planets.ts, lib/lessons.ts   (data statis, tanpa fetch)
    └── @cosmos/nasa →  fetchAPOD(apiKey)                (cache 6 jam)
                            ↓
                        NASA APOD API
```

---

## ✨ Features

### 🏠 Homepage
- Hero dengan visual orbit SVG
- Sembilan topik pilihan untuk memulai belajar
- **Astronomy of the Day** dari NASA APOD (mendukung gambar dan video)
- Fakta "Tahukah kamu?" dengan visual timeline

### 📚 Learn
- 4 kategori: Dasar Astronomi, Tata Surya, Deep Space, Eksplorasi
- 12 pelajaran, masing-masing 4 paragraf dan 2 soal kuis
- Kuis memberi penjelasan setelah menjawab, jawaban tidak bisa diubah, ada skor akhir dan tombol coba lagi
- Pelajaran tanpa isi otomatis tampil sebagai "Segera"

### 🪐 Explore
- Diagram tata surya SVG beranimasi (play/pause)
- Klik atau arahkan kursor ke planet untuk info singkat
- Disclaimer eksplisit bahwa diagram tidak berskala

### 🔭 Detail Planet
- Quick facts (diameter, massa, gravitasi, jarak, panjang hari/tahun, satelit, suhu)
- Overview, perbandingan dengan Bumi, Did You Know, NASA Missions
- Catatan sumber data dan tanggal pembaruan
- Tersedia untuk 8 planet, Pluto, dan Bulan

### ⚖️ Compare
- Pilih dua objek, tukar posisi dengan satu klik
- Tabel perbandingan dan visual ukuran relatif

### 🔐 Keamanan & Integritas Data
- API key NASA hanya dibaca di server
- Fallback jujur kalau key kosong atau API gagal (bukan data kosong/palsu)
- Setiap objek mencantumkan sumber dan tanggal verifikasi

---

## 📚 API Documentation

### APOD

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/api/apod` | Astronomy Picture of the Day hari ini | Public |

Endpoint ini disiapkan untuk kebutuhan client-side di masa depan (mis. date picker). Homepage sendiri memanggil `fetchAPOD()` langsung dari Server Component.

**Response sukses (200)**
```json
{
  "date": "YYYY-MM-DD",
  "title": "string",
  "explanation": "string",
  "url": "https://apod.nasa.gov/...",
  "mediaType": "image",
  "copyright": "string (opsional)"
}
```

**Error**

| Status | Penyebab |
|--------|----------|
| `500` | `NASA_API_KEY` belum diset di server |
| `502` | NASA API gagal atau tidak bisa dihubungi |

Respons di-cache 6 jam (`revalidate = 21600`) karena APOD hanya berubah sekali sehari.

### Route Halaman

| Route | Fungsi |
|-------|--------|
| `/` | Homepage |
| `/learn` | Daftar kategori pelajaran |
| `/learn/[category]` | Daftar pelajaran per kategori |
| `/learn/[category]/[lesson]` | Isi pelajaran + kuis |
| `/explore` | Diagram tata surya interaktif |
| `/explore/planets/[slug]` | Detail planet / planet katai / Bulan |
| `/compare` | Perbandingan dua objek |

---

## 🗂️ Data & Content

### Prinsip Data

- **Tidak mengarang data.** Field yang tidak tersedia tidak ditampilkan.
- **Sumber wajib dicantumkan** lewat `sources` dan `dataUpdatedAt`.
- **Diagram tata surya tidak berskala**, dan ini dinyatakan jelas di UI.
- **Data statis disimpan lokal** di folder `data/`, bukan di-fetch per request.

### Menambah Planet / Objek Baru

1. Buat `data/planets/<slug>.json` mengikuti tipe `CelestialObject` (`packages/types/src/index.ts`)
2. Import dan daftarkan di `apps/web/src/lib/planets.ts`
3. Halaman detail dan Compare otomatis ikut

### Menambah Pelajaran Baru

1. Tambahkan entri di `data/lessons/lessons.json` dengan `category` yang valid
2. Isi `content` (array paragraf) dan `quiz`. Tiap soal wajib punya `explanation`

### Isi Konten Saat Ini

| Kategori | Pelajaran |
|----------|-----------|
| Dasar Astronomi | Apa itu astronomi, skala alam semesta, alat bantu teleskop |
| Tata Surya | Delapan planet, Matahari sebagai bintang, Bulan dan satelit alami |
| Deep Space | Siklus hidup bintang, galaksi Bimasakti, black hole |
| Eksplorasi | Sejarah peluncuran roket, pendaratan di Bulan, rover di Mars |

---

## 📜 Available Scripts

Jalankan dari root repo.

| Command | Description | Use Case |
|---------|-------------|----------|
| `pnpm dev` | Jalankan dev server | Development harian |
| `pnpm build` | Build produksi | Deployment |
| `pnpm typecheck` | Cek tipe TypeScript | Sebelum commit |
| `pnpm lint` | Jalankan lint | ⚠️ Belum bisa, ESLint belum dikonfigurasi |
| `pnpm test` | Jalankan test | ⚠️ Belum ada test |
| `pnpm format` | Format semua file dengan Prettier | Merapikan kode |

---

## 📦 Development Roadmap

- [x] Phase 1 — Foundation (monorepo, tipe bersama, config)
- [x] Phase 2 — Design System (Tailwind preset, tipografi, komponen UI bersama)
- [x] Phase 3 — Core Experience (Home, Learn, Explore, Detail Planet, Compare)
- [x] Phase 4 — NASA Integration (APOD)
- [ ] Phase 5 — Misi NASA (`/missions`) dan Near Earth Objects
- [ ] Phase 6 — Konten lanjutan (Matahari, lengkapi Bumi, objek Deep Space, gambar objek)
- [ ] Phase 7 — Quality (ESLint, test, halaman not-found/error, favicon & metadata OG)
- [ ] Phase 8 — Deployment

### Prioritas Berikutnya

- [ ] Buat halaman `/missions` memakai tipe `Mission`
- [ ] Tambah `data/planets/sun.json` dan daftarkan di `planets.ts`
- [ ] Lengkapi `earth.json` (overview, didYouKnow, missions)
- [ ] Integrasi NASA Near Earth Objects
- [ ] Tambah gambar objek dari sumber NASA yang lisensinya sudah diverifikasi
- [ ] Pasang ESLint dan mulai tulis test (mulai dari fungsi murni di `packages/astronomy`)

---

## 🤝 Contributing

### Development Setup

1. **Fork the repository**
2. **Create a feature branch**:
```bash
git checkout -b feature/amazing-feature
```
3. **Make your changes**
4. **Run quality checks**:
```bash
pnpm typecheck
pnpm build
pnpm format
```
5. **Commit your changes**:
```bash
git commit -m 'feat: add amazing feature'
```
6. **Push to your branch**:
```bash
git push origin feature/amazing-feature
```
7. **Open a Pull Request**

### Commit Convention

Mengikuti [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Description |
|--------|-------------|
| `feat:` | Fitur baru |
| `fix:` | Perbaikan bug |
| `docs:` | Perubahan dokumentasi |
| `style:` | Perubahan gaya kode |
| `refactor:` | Refactoring |
| `chore:` | Tugas maintenance |

---

## 📞 Support

### Known Issues

| # | Masalah | Dampak |
|---|---------|--------|
| 1 | Halaman `/missions` belum dibuat | Link di navbar dan homepage menghasilkan 404 |
| 2 | `/explore/planets/sun` belum ada datanya | Kartu "Matahari" di homepage menghasilkan 404 |
| 3 | `earth.json` belum punya overview, didYouKnow, missions | Halaman Bumi hanya menampilkan quick facts |
| 4 | Belum ada ESLint config | `pnpm lint` meminta setup interaktif |
| 5 | Belum ada test | `pnpm test` tidak menjalankan apa-apa |
| 6 | Jumlah satelit Jupiter (95) dan Saturnus (146) kemungkinan sudah usang | Verifikasi ulang ke NASA/JPL sebelum publish |
| 7 | Belum ada `not-found`, `error`, dan `loading` page | Tampilan default Next.js |

### Common Issues

#### APOD tidak muncul
Pastikan `apps/web/.env.local` ada dan `NASA_API_KEY` terisi, lalu restart dev server.

#### Gambar APOD gagal dimuat
Hanya domain `apod.nasa.gov` yang diizinkan di `next.config.js` (`images.remotePatterns`). Tambahkan domain lain di sana kalau memang perlu.

#### node_modules bermasalah
```bash
rm -rf node_modules apps/*/node_modules packages/*/node_modules
pnpm install
```

#### TypeScript error di editor
```
Ctrl+Shift+P > "TypeScript: Restart TS Server"
```

---

## 📄 License

Lisensi belum ditentukan. Tambahkan file `LICENSE` lalu perbarui bagian ini.

Data dan gambar bersumber dari NASA Open APIs dan NASA/JPL Solar System Exploration. Detail sumber per objek ada di halaman masing-masing.

---

<div align="center">

**Dibangun dengan ❤️ oleh Monndler**

*Cosmos Explorer — belajar astronomi dari data NASA.*

[⬆ Kembali ke Atas](#cosmos-explorer---platform-belajar-astronomi-interaktif)

</div>