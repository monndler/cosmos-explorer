import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, IBM_Plex_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Pairing tipografi (lihat design plan Step 2):
// - display: Newsreader (serif) — kesan atlas bintang / naskah astronomi klasik
// - body: Inter — netral, mudah dibaca untuk konten pembelajaran panjang
// - data: IBM Plex Mono — angka & quick facts terasa seperti readout instrumen
const displayFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  adjustFontFallback: false,
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const dataFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-data",
  weight: ["400", "500"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const SITE_TITLE = "Cosmos Explorer — Belajar Astronomi dari Data NASA";
const SITE_DESCRIPTION =
  "Jelajahi tata surya, planet, bintang, galaksi, dan misi luar angkasa melalui data dan sumber resmi NASA.";

export const metadata: Metadata = {
  // Hanya diset kalau NEXT_PUBLIC_SITE_URL ada. Di Vercel, Next memakai domain
  // deployment otomatis kalau ini kosong.
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: {
    default: SITE_TITLE,
    template: "%s · Cosmos Explorer",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Cosmos Explorer",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${displayFont.variable} ${bodyFont.variable} ${dataFont.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
