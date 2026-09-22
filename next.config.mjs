// Fitxer .mjs (no .ts) a proposit: Next compila next.config.ts amb SWC i al servidor
// de Hostinger (glibc antiga) aquesta compilacio falla. Un .mjs es carrega tal qual.
// App Next.js normal (com antonella-web): Hostinger la construeix a .next i la serveix.
// NO fem output:"export" perque trenca el desplegament per defecte de Hostinger.
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // Hi ha dos root layouts (CA i ES) i cal un 404 global.
    globalNotFound: true,
  },
};

export default nextConfig;
