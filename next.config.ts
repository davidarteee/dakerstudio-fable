import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportació 100% estàtica (carpeta out/) → es puja per FTP a Hostinger.
  output: "export",
  // /qui-som → out/qui-som/index.html, que Apache serveix sense regles extra.
  trailingSlash: true,
  // Les imatges es preoptimitzen amb scripts/images.mjs; no hi ha servidor d'imatges.
  images: { unoptimized: true },
  experimental: {
    // Necessari perquè hi ha dos root layouts (CA i ES) i cal un 404 global.
    globalNotFound: true,
  },
};

export default nextConfig;
