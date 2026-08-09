import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Cosmos Explorer — Belajar Astronomi dari Data NASA",
    template: "%s · Cosmos Explorer",
  },
  description:
    "Jelajahi tata surya, planet, bintang, galaksi, dan misi luar angkasa melalui data dan sumber resmi NASA.",
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
