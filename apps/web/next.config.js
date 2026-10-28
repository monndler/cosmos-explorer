/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@cosmos/ui", "@cosmos/types", "@cosmos/astronomy", "@cosmos/nasa"],
  images: {
    // Domain gambar NASA ditambahkan bertahap saat integrasi API (Step 4),
    // supaya tidak asal-buka domain yang belum diverifikasi.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.science.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
      },
    ],
  },
};

module.exports = nextConfig;