# Claude Brief — Website Edukasi Astronomi Berbasis Data NASA

## 1. Tujuan Proyek

Buat sebuah website edukasi interaktif yang membantu pengguna mempelajari astronomi dengan cara yang modern, visual, mudah dipahami, dan menyenangkan.

Website harus menggunakan **data dan sumber resmi NASA** sebagai salah satu fondasi utama konten, terutama untuk informasi mengenai tata surya, planet, asteroid, komet, misi luar angkasa, gambar astronomi, dan fenomena antariksa.

Tujuan utama website:

- Mengenalkan konsep dasar hingga lanjutan dalam astronomi.
- Membantu pengguna memahami objek-objek di alam semesta.
- Menyajikan data NASA dalam bentuk yang lebih mudah dipahami.
- Mengubah data mentah menjadi pengalaman belajar interaktif.
- Membuat pengguna dapat mengeksplorasi astronomi tanpa merasa seperti sedang membaca ensiklopedia yang kaku.
- Menjadi fondasi yang mudah dikembangkan menjadi platform pembelajaran astronomi yang lebih lengkap.

---

## 2. Target Pengguna

Target utama:

1. Pelajar SMP/SMA yang tertarik dengan astronomi.
2. Pemula yang belum memiliki dasar astronomi.
3. Pengguna umum yang ingin belajar tentang luar angkasa.
4. Penggemar astronomi yang ingin mengeksplorasi data dan objek secara lebih mendalam.

Gunakan bahasa yang **ramah, jelas, dan tidak terlalu teknis** pada bagian pembelajaran dasar.

Jika istilah teknis diperlukan, tampilkan penjelasan singkat atau tooltip.

---

## 3. Prinsip Produk

Website harus terasa seperti:

> "Tempat untuk menjelajahi alam semesta sambil belajar."

Bukan sekadar:

> "Website yang menampilkan data NASA."

Data harus menjadi bahan untuk membangun pengalaman belajar.

Contoh:

- Jangan hanya menampilkan diameter Mars.
- Jelaskan bahwa diameter Mars sekitar setengah diameter Bumi, lalu berikan visual perbandingan.
- Jangan hanya menampilkan jarak planet dari Matahari.
- Buat visualisasi posisi relatif atau timeline perjalanan cahaya.
- Jangan hanya menampilkan nama misi NASA.
- Jelaskan tujuan misi, objek yang diteliti, dan penemuan pentingnya.

---

# 4. Konsep Utama Website

Nama proyek sementara:

**Cosmos Explorer**

Nama ini masih dapat diganti.

Konsep utama:

**Learn → Explore → Compare → Discover**

Pengguna dapat:

1. Belajar konsep astronomi.
2. Menjelajahi objek luar angkasa.
3. Membandingkan objek.
4. Menemukan fakta dan fenomena menarik.
5. Melihat data NASA yang relevan.
6. Mengikuti pembelajaran secara bertahap.

---

# 5. Struktur Halaman

## A. Home

Homepage harus menjadi pintu masuk utama ke dunia astronomi.

Bagian yang disarankan:

### Hero

Headline yang menarik, misalnya:

> "Explore the Universe. Understand Our Place in It."

Subheadline:

> "Pelajari tata surya, planet, bintang, galaksi, dan misi luar angkasa melalui data dan sumber NASA."

CTA:

- Mulai Belajar
- Jelajahi Tata Surya

Hero sebaiknya memiliki visual astronomi yang kuat.

---

### Featured Astronomy

Tampilkan beberapa topik populer:

- Tata Surya
- Planet
- Matahari
- Bulan
- Bintang
- Galaksi
- Black Hole
- Exoplanet
- Misi NASA

Gunakan card yang visual.

---

### Astronomy of the Day

Buat bagian yang dapat menampilkan konten harian, misalnya:

- Astronomy Picture of the Day (APOD)
- Fakta astronomi
- Objek astronomi pilihan
- Peristiwa langit

Jika menggunakan APOD atau API NASA, tampilkan atribusi dan informasi sumber dengan jelas.

---

### NASA Data Highlight

Tampilkan satu data menarik dari NASA dengan visualisasi sederhana.

Contoh:

> "Berapa lama cahaya Matahari sampai ke Bumi?"

atau

> "Seberapa besar Jupiter dibandingkan Bumi?"

---

# 6. Halaman Belajar

Buat halaman khusus untuk pembelajaran.

Kategori:

### Dasar Astronomi

- Apa itu astronomi?
- Apa itu alam semesta?
- Tata Surya
- Orbit
- Gravitasi
- Rotasi dan revolusi
- Tahun cahaya
- Skala alam semesta

### Tata Surya

- Matahari
- Merkurius
- Venus
- Bumi
- Mars
- Jupiter
- Saturnus
- Uranus
- Neptunus
- Planet katai
- Asteroid
- Komet

### Deep Space

- Bintang
- Nebula
- Galaksi
- Black hole
- Supernova
- Exoplanet
- Dark matter
- Dark energy

### Eksplorasi Luar Angkasa

- Apollo
- Hubble
- James Webb Space Telescope
- Mars rovers
- Voyager
- Artemis
- Misi NASA lainnya

---

# 7. Halaman Detail Objek

Setiap objek astronomi harus memiliki halaman detail.

Contoh:

`/explore/planets/mars`

Struktur:

## Header

- Nama objek
- Kategori
- Gambar utama
- Deskripsi singkat

## Quick Facts

Contoh untuk Mars:

- Diameter
- Massa
- Gravitasi
- Jarak dari Matahari
- Panjang hari
- Panjang tahun
- Jumlah satelit
- Suhu rata-rata

## Overview

Penjelasan populer mengenai objek tersebut.

## Compare

Bandingkan dengan Bumi atau objek lain.

## Did You Know?

Fakta menarik.

## NASA Missions

Tampilkan misi NASA yang berhubungan dengan objek tersebut.

## Data Source

Tampilkan sumber data dengan transparan.

---

# 8. Interactive Solar System

Ini merupakan salah satu fitur utama.

Buat visualisasi tata surya interaktif.

Pengguna dapat:

- Zoom.
- Pan.
- Memilih planet.
- Melihat orbit.
- Membuka informasi planet.
- Membandingkan ukuran planet.
- Melihat jarak relatif.
- Melihat informasi orbit.

Penting:

Jangan menggunakan skala ukuran dan jarak yang menyesatkan tanpa penjelasan.

Jika visualisasi menggunakan skala non-realistic untuk alasan UX, beri label seperti:

> "Visualisasi tidak menggunakan skala sebenarnya."

---

# 9. Comparison Tool

Buat fitur untuk membandingkan dua atau lebih objek.

Contoh:

**Earth vs Mars**

Tampilkan:

| Property | Earth | Mars |
|---|---:|---:|
| Diameter | ... | ... |
| Mass | ... | ... |
| Gravity | ... | ... |
| Day Length | ... | ... |
| Year Length | ... | ... |

Tambahkan visualisasi agar perbedaan mudah dipahami.

Contoh:

- Diameter dalam bentuk lingkaran.
- Massa menggunakan bar.
- Gravitasi menggunakan indikator.
- Durasi tahun menggunakan timeline.

---

# 10. Learning System

Website sebaiknya memiliki pengalaman belajar bertahap.

Contoh:

### Lesson

**Apa itu Tata Surya?**

Kemudian:

1. Penjelasan singkat.
2. Visual.
3. Contoh.
4. Interactive element.
5. Pertanyaan singkat.

Contoh quiz:

> Planet manakah yang memiliki hari paling panjang?

Setelah pengguna menjawab:

- Tampilkan jawaban benar/salah.
- Jelaskan alasannya.

Jangan hanya mengatakan "Benar" atau "Salah".

---

# 11. Progress Tracking

Jika memungkinkan, tambahkan sistem progress sederhana.

Contoh:

- Lesson selesai: 7/20
- Quiz score
- Topik yang sudah dipelajari
- Achievement

Contoh achievement:

- Solar System Beginner
- Planet Explorer
- Deep Space Curious
- NASA Mission Explorer

Untuk versi awal, progress dapat disimpan menggunakan `localStorage`.

Tidak perlu authentication pada MVP kecuali benar-benar diperlukan.

---

# 12. NASA Data Integration

Gunakan sumber resmi NASA sejauh memungkinkan.

Prioritaskan sumber seperti:

- NASA APIs
- NASA Open Data
- NASA Science
- NASA Solar System Exploration
- NASA/JPL
- NASA Image and Video Library

Contoh API yang dapat dipertimbangkan:

### NASA APOD API

Untuk Astronomy Picture of the Day.

### NASA Image and Video Library

Untuk gambar dan media astronomi.

### NASA NeoWs

Untuk data Near Earth Objects.

### NASA Exoplanet Archive

Untuk data exoplanet, jika sesuai dengan kebutuhan proyek dan aturan aksesnya.

### NASA/JPL Solar System data

Untuk informasi objek Tata Surya, jika tersedia dan sesuai kebutuhan.

---

# 13. Data Architecture

Jangan membuat frontend bergantung langsung pada API eksternal untuk setiap request jika hal tersebut dapat menyebabkan:

- Rate limit.
- Loading lambat.
- API key terekspos.
- Website rusak ketika API tidak tersedia.

Gunakan arsitektur:

```text
Frontend
   ↓
Application / API Layer
   ↓
NASA APIs
```

Jika diperlukan:

```text
NASA API
   ↓
Server / Data Fetcher
   ↓
Cache / Database
   ↓
Frontend
```

Untuk data statis yang jarang berubah, boleh disimpan secara lokal dalam JSON atau database.

---

# 14. API Key Security

API key **tidak boleh diletakkan langsung di frontend**.

Jangan melakukan:

```js
const API_KEY = "MY_SECRET_KEY";
```

di kode client.

Gunakan environment variables di server.

Contoh:

```env
NASA_API_KEY=your_key_here
```

Frontend hanya berkomunikasi dengan backend/API layer.

Jika sebuah endpoint NASA tidak membutuhkan API key, tetap pertimbangkan caching dan error handling.

---

# 15. Data Provenance

Setiap data penting harus memiliki sumber.

Contoh:

```text
Source
NASA / JPL
Updated: 2026-08-09
```

Jika data berasal dari API, simpan informasi seperti:

- Source
- Endpoint
- Retrieval date
- Data version jika tersedia

Tujuannya agar pengguna dapat memahami dari mana informasi berasal.

---

# 16. Visual Design

Desain harus terasa seperti:

- Modern
- Futuristic
- Scientific
- Elegant
- Educational
- Immersive

Hindari desain yang terlalu ramai.

Gunakan:

- Dark space-inspired interface.
- Banyak whitespace.
- Typography yang mudah dibaca.
- Subtle glow.
- Gradient secukupnya.
- Starfield hanya sebagai elemen dekoratif, jangan sampai mengganggu readability.

Jangan membuat semua bagian bercahaya atau penuh animasi.

---

# 17. Accessibility

Website harus tetap mudah digunakan.

Perhatikan:

- Kontras warna.
- Keyboard navigation.
- Alt text.
- Focus states.
- Ukuran font.
- Reduced motion.
- Screen reader support.
- Jangan mengandalkan warna saja untuk menyampaikan informasi.

Jika menggunakan animasi:

Hormati:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 18. Responsive Design

Website harus bekerja dengan baik pada:

- Desktop
- Laptop
- Tablet
- Mobile

Jangan membuat fitur interaktif hanya nyaman digunakan dengan mouse.

Untuk mobile:

- Gunakan bottom sheet atau modal yang sesuai.
- Pastikan chart dapat di-scroll atau di-resize.
- Jangan membuat tabel terlalu lebar.

---

# 19. Performance

Prioritaskan performa.

Perhatikan:

- Image optimization.
- Lazy loading.
- Code splitting.
- Caching.
- Minimalkan API requests.
- Hindari animasi berat.
- Gunakan responsive images.

Untuk gambar NASA yang besar, jangan selalu mengirim resolusi penuh jika tidak diperlukan.

---

# 20. Error & Empty States

Semua integrasi API harus memiliki fallback.

Jika NASA API gagal:

Tampilkan pesan seperti:

> "Data NASA sedang tidak tersedia. Kami menampilkan informasi terakhir yang tersimpan."

Jangan menampilkan error teknis seperti:

```text
500 Internal Server Error
```

kepada pengguna umum.

Untuk loading:

Gunakan skeleton atau loading state yang sesuai.

---

# 21. Tech Stack & Monorepo

Gunakan **monorepo** sebagai struktur utama project agar frontend, backend/API layer, shared UI, shared types, konfigurasi, dan package lain dapat dikembangkan dalam satu repository.

Jika tidak ada constraint lain, gunakan stack modern yang sederhana dan maintainable.

### Core Stack

- TypeScript
- React
- Next.js untuk web application
- Tailwind CSS
- Framer Motion untuk animasi ringan
- Recharts atau library visualisasi yang sesuai
- Three.js / React Three Fiber untuk visualisasi 3D jika memang diperlukan
- D3.js untuk visualisasi data yang membutuhkan kontrol lebih detail
- localStorage untuk progress MVP
- ESLint
- Prettier

### Monorepo Tooling

Gunakan **pnpm workspaces** sebagai package manager/workspace utama dan **Turborepo** untuk task orchestration, caching, dan menjalankan build/dev/lint/typecheck antar-package.

Struktur awal yang disarankan:

```text
.
├── apps/
│   ├── web/
│   │   └── Next.js application
│   │
│   └── api/
│       └── API / backend service jika diperlukan
│
├── packages/
│   ├── ui/
│   │   └── Shared UI components
│   │
│   ├── config/
│   │   └── Shared configuration
│   │
│   ├── types/
│   │   └── Shared TypeScript types
│   │
│   ├── astronomy/
│   │   └── Astronomy calculations and domain logic
│   │
│   └── nasa/
│       └── NASA API clients, schemas, normalization, and utilities
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.json
└── README.md
```

Struktur tersebut dapat disesuaikan jika kebutuhan project berubah.

### Monorepo Responsibilities

#### `apps/web`

Bertanggung jawab untuk:

- Homepage.
- Learning pages.
- Planet/object explorer.
- Comparison UI.
- Quiz.
- Progress UI.
- SEO.
- Responsive UI.
- Client-side interactions.

#### `apps/api`

Gunakan jika integrasi NASA membutuhkan backend terpisah.

Bertanggung jawab untuk:

- NASA API proxy.
- API key protection.
- Data fetching.
- Caching.
- Rate-limit handling.
- Data normalization.
- Server-side validation.
- API endpoints untuk frontend.

Jika Next.js server functions/API routes sudah cukup untuk MVP, tidak perlu memaksakan service API terpisah. Namun struktur monorepo harus tetap memungkinkan `apps/api` ditambahkan kemudian.

#### `packages/ui`

Berisi reusable components:

- Button.
- Card.
- Modal.
- Dialog.
- Tabs.
- Tooltip.
- Charts wrappers.
- Navigation.
- Loading states.
- Error states.
- Astronomy-specific visual components.

Komponen yang benar-benar reusable sebaiknya diletakkan di sini, bukan diduplikasi di `apps/web`.

#### `packages/types`

Berisi shared TypeScript types/interfaces.

Contoh:

```text
Planet
CelestialObject
Mission
NASAImage
APOD
NEO
Quiz
Lesson
```

Jangan menduplikasi type yang sama antara frontend dan backend.

#### `packages/astronomy`

Berisi domain logic yang tidak bergantung pada UI.

Contoh:

- Unit conversion.
- Planet comparison calculations.
- Distance calculations.
- Orbital calculations.
- Scale calculations.
- Astronomy constants.
- Formatting helpers untuk astronomical values.

#### `packages/nasa`

Berisi integrasi dengan NASA.

Contoh:

```text
NASAClient
APODClient
NeoWsClient
ImageLibraryClient
ExoplanetClient
```

Package ini harus bertanggung jawab terhadap:

- Request.
- Response parsing.
- Schema validation.
- Error normalization.
- Data mapping.

UI tidak boleh mengetahui detail endpoint NASA secara langsung.

---

### Dependency Rules

Pertahankan dependency flow yang jelas:

```text
apps/web
   ↓
packages/ui
packages/types
packages/astronomy
packages/nasa
```

Jika menggunakan backend:

```text
apps/web
   ↓
apps/api
   ↓
packages/nasa
packages/astronomy
packages/types
```

Hindari dependency circular seperti:

```text
packages/ui → apps/web
apps/web → packages/ui
```

Package reusable tidak boleh bergantung pada application tertentu.

---

### Workspace Commands

Sediakan command yang konsisten dari root repository.

Contoh:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
pnpm test
```

Gunakan Turborepo agar command dapat dijalankan pada package yang relevan dan memanfaatkan caching jika memungkinkan.

Contoh:

```bash
pnpm turbo dev
pnpm turbo build
pnpm turbo lint
pnpm turbo typecheck
```

Jangan membuat developer harus masuk ke setiap folder secara manual hanya untuk menjalankan task umum.

---

### Environment Variables

Gunakan environment variables dan pisahkan berdasarkan application.

Contoh:

```text
apps/web/.env.local
apps/api/.env
```

NASA API key hanya boleh tersedia pada server-side environment.

Jangan expose secret ke browser.

Jika variable memang aman untuk client, gunakan naming convention yang sesuai dengan framework.

---

### Shared Configuration

Jika memungkinkan, buat shared configuration package untuk:

- ESLint.
- TypeScript.
- Prettier.
- Tailwind.
- Testing configuration.

Tujuannya agar semua application/package menggunakan aturan yang konsisten.

Jangan membuat konfigurasi yang terlalu kompleks pada tahap MVP.

---

### Monorepo Development Principles

- Gunakan package hanya jika memang memiliki tanggung jawab yang jelas.
- Jangan memecah kode menjadi terlalu banyak package hanya demi terlihat enterprise.
- Shared code harus benar-benar reusable.
- Domain logic harus dipisahkan dari UI.
- NASA integration harus dipisahkan dari frontend.
- Hindari circular dependencies.
- Gunakan TypeScript secara konsisten.
- Pastikan setiap package memiliki boundary yang jelas.
- Pastikan project tetap mudah dijalankan oleh developer baru dengan command dari root repository.

Untuk visualisasi astronomi yang kompleks, pertimbangkan:

- Three.js
- React Three Fiber
- D3.js

Namun jangan menambahkan library besar tanpa alasan.

---

# 22. Suggested Project Structure

Contoh:

```text
src/
├── app/
│   ├── page.tsx
│   ├── learn/
│   ├── explore/
│   ├── compare/
│   ├── missions/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── astronomy/
│   ├── planets/
│   ├── charts/
│   └── learning/
│
├── data/
│   ├── planets/
│   ├── lessons/
│   └── missions/
│
├── lib/
│   ├── nasa/
│   ├── astronomy/
│   └── utils/
│
└── types/
```

Struktur ini hanya contoh dan boleh disesuaikan.

---

# 23. Data Model

Contoh model planet:

```ts
type Planet = {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;

  physical: {
    diameterKm?: number;
    massKg?: number;
    gravityMs2?: number;
  };

  orbital: {
    distanceFromSunKm?: number;
    orbitalPeriodDays?: number;
  };

  rotation: {
    dayLengthHours?: number;
  };

  moons?: number;

  sources: {
    name: string;
    url: string;
  }[];
};
```

Jangan membuat data fiktif.

Jika sebuah data belum tersedia, gunakan `null` atau jangan tampilkan field tersebut.

---

# 24. Content Guidelines

Tulisan harus:

- Singkat.
- Informatif.
- Mudah dipahami.
- Tidak berlebihan dalam menggunakan istilah ilmiah.
- Tidak membuat klaim tanpa sumber.
- Tidak menyajikan ilustrasi sebagai data ilmiah sebenarnya.

Contoh gaya:

Kurang baik:

> "Mars adalah planet keempat dari Matahari dengan karakteristik geofisika yang kompleks."

Lebih baik:

> "Mars adalah planet keempat dari Matahari. Permukaannya dingin, berbatu, dan memiliki banyak bukti bahwa air pernah mengalir di masa lalu."

---

# 25. Scientific Accuracy

Akurasi ilmiah adalah prioritas.

Jika terdapat perbedaan data antara sumber:

1. Prioritaskan sumber resmi.
2. Periksa tanggal data.
3. Jelaskan jika angka merupakan perkiraan.
4. Jangan menyederhanakan sampai menghasilkan informasi yang salah.

Jangan menyatakan sesuatu sebagai fakta jika masih berupa hipotesis atau belum memiliki konsensus ilmiah.

Gunakan istilah seperti:

- "diperkirakan"
- "diduga"
- "berdasarkan data yang tersedia"
- "para ilmuwan menemukan bukti..."

jika memang diperlukan.

---

# 26. SEO

Setiap halaman objek harus memiliki:

- Unique title.
- Meta description.
- Semantic headings.
- Open Graph metadata.
- Descriptive URL.

Contoh:

```text
/explore/planets/mars
/explore/planets/jupiter
/learn/what-is-a-black-hole
/missions/james-webb
```

---

# 27. MVP

Jangan langsung membuat seluruh fitur.

Versi pertama harus fokus pada pengalaman inti.

### MVP Phase 1

Buat:

1. Homepage.
2. Navigation.
3. Learn page.
4. Solar System explorer sederhana.
5. Planet detail pages.
6. NASA API integration.
7. Comparison feature.
8. Basic quiz.
9. Responsive design.
10. Source attribution.

### Phase 2

Tambahkan:

- Progress tracking.
- NASA mission explorer.
- APOD.
- NEO explorer.
- More advanced visualizations.
- Search.
- Filters.

### Phase 3

Tambahkan:

- User accounts.
- Personalized learning.
- Advanced astronomy simulator.
- 3D solar system.
- Achievements.
- Community features jika memang diperlukan.

---

# 28. Important Development Rules

Saat mengembangkan proyek:

### Jangan

- Membuat semua halaman sekaligus.
- Membuat API call tanpa error handling.
- Mengekspos API key.
- Menggunakan data astronomi yang tidak jelas sumbernya.
- Menambahkan library hanya untuk efek visual.
- Membuat UI terlalu penuh.
- Menggunakan animasi yang mengganggu pembelajaran.
- Menganggap data API selalu tersedia.

### Lakukan

- Bangun MVP terlebih dahulu.
- Buat komponen reusable.
- Gunakan TypeScript dengan baik.
- Pisahkan data layer dan UI.
- Buat loading/error/empty states.
- Tulis kode yang mudah dikembangkan.
- Prioritaskan accessibility.
- Dokumentasikan integrasi API.
- Cantumkan sumber NASA.

---

# 29. Expected Claude Workflow

Kerjakan proyek secara bertahap.

## Step 1 — Planning

Sebelum coding:

- Analisis requirement.
- Tentukan arsitektur.
- Tentukan halaman MVP.
- Tentukan data yang dibutuhkan.
- Tentukan API NASA yang relevan.

## Step 2 — Foundation

Buat:

- Project structure.
- Design system.
- Global styles.
- Layout.
- Navigation.
- Responsive foundation.

## Step 3 — Core Experience

Implementasikan:

- Homepage.
- Learn.
- Explore.
- Planet detail.
- Comparison.

## Step 4 — NASA Integration

Implementasikan NASA API dengan:

- Server-side fetching jika diperlukan.
- Environment variables.
- Caching.
- Error handling.
- Data normalization.

## Step 5 — Learning

Implementasikan:

- Lessons.
- Quiz.
- Progress.

## Step 6 — Polish

Periksa:

- Mobile.
- Accessibility.
- Performance.
- SEO.
- Error states.
- Loading states.
- Scientific accuracy.

---

# 30. Definition of Done

MVP dianggap selesai jika:

- Website dapat dijalankan secara lokal.
- Homepage berfungsi.
- Pengguna dapat menemukan materi belajar.
- Pengguna dapat menjelajahi planet.
- Data utama memiliki sumber.
- Integrasi NASA bekerja atau memiliki fallback.
- API key aman.
- Comparison tool berfungsi.
- Quiz dapat digunakan.
- Website responsive.
- Tidak ada error kritis pada console.
- Loading dan error state tersedia.
- UI terlihat profesional.
- Informasi astronomi tidak dibuat-buat.

---

# 31. Final Product Direction

Prioritas utama proyek ini bukan jumlah fitur.

Prioritasnya adalah:

**Experience > Features**

dan:

**Scientific accuracy > Visual gimmicks**

serta:

**Learning value > Data quantity**

Website harus membuat pengguna merasa:

> "Aku baru saja belajar sesuatu tentang alam semesta."

bukan hanya:

> "Aku melihat website bertema luar angkasa."

---

# 32. Instruksi Untuk Claude

Gunakan dokumen ini sebagai product brief dan technical direction.

Saat ada keputusan teknis yang belum ditentukan:

1. Pilih solusi yang paling sederhana.
2. Utamakan maintainability.
3. Utamakan accessibility.
4. Utamakan performance.
5. Jangan membuat fitur yang belum dibutuhkan MVP.
6. Jangan mengarang data NASA.
7. Jelaskan asumsi penting sebelum melakukan perubahan arsitektur besar.

Jika requirement ambigu, gunakan pendekatan yang masuk akal dan jelaskan asumsi tersebut.

Jangan hanya menghasilkan kode yang "terlihat bagus". Pastikan kode benar-benar dapat dijalankan, terstruktur, dan siap dikembangkan.

## Prinsip akhir

**Build a beautiful astronomy learning experience powered by trustworthy NASA data.**
