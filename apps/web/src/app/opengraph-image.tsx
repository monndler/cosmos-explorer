import { ImageResponse } from "next/og";

export const alt = "Cosmos Explorer — Belajar astronomi dari data NASA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Gambar pratinjau saat tautan dibagikan (WhatsApp, X, Discord, dll.).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background: "#05070D",
          color: "#E8ECF4",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            Cosmos Explorer
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#8B93A7", lineHeight: 1.35 }}>
            Belajar astronomi dari data NASA
          </div>
        </div>

        <svg width="420" height="420" viewBox="0 0 420 420">
          <ellipse cx="210" cy="210" rx="190" ry="190" fill="none" stroke="#1E2436" strokeWidth="2" />
          <ellipse cx="210" cy="210" rx="130" ry="130" fill="none" stroke="#1E2436" strokeWidth="2" />
          <ellipse cx="210" cy="210" rx="72" ry="72" fill="none" stroke="#3A4B8F" strokeWidth="2" />
          <circle cx="210" cy="210" r="34" fill="#FFB86B" />
          <circle cx="282" cy="210" r="11" fill="#6E8CFF" />
          <circle cx="118" cy="118" r="16" fill="#8FA5FF" />
          <circle cx="360" cy="300" r="12" fill="#E8ECF4" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
