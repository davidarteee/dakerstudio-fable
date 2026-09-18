import type { Metadata } from "next";
import "./globals.css";
import { fontClass } from "@/lib/fonts";
import { getDict } from "@/content/dictionary";
import { SITE_URL, routes } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404 — DakerStudio",
  robots: { index: false },
};

// Sortida: out/404.html (Apache la serveix via .htaccess). Bilingüe perquè és global.
export default function GlobalNotFound() {
  const ca = getDict("ca").notFound;
  const es = getDict("es").notFound;
  return (
    <html lang="ca" className={fontClass}>
      <body>
        <main className="wrap min-h-svh flex flex-col justify-center gap-10 py-24">
          <p className="t-label">404</p>
          <div className="grid gap-12 md:grid-cols-2">
            <div lang="ca">
              <h1 className="t-h2 mb-4">{ca.title}</h1>
              <p className="t-body mb-6">{ca.text}</p>
              <a href={routes.home.ca} className="btn btn--solid">
                {ca.back}
              </a>
            </div>
            <div lang="es">
              <h2 className="t-h2 mb-4">{es.title}</h2>
              <p className="t-body mb-6">{es.text}</p>
              <a href={routes.home.es} className="btn">
                {es.back}
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
