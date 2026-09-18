import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontClass } from "@/lib/fonts";
import { baseMetadata, baseViewport, pageMeta } from "@/lib/metadata";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { ...baseMetadata, ...pageMeta("es", "home") };
export const viewport: Viewport = baseViewport;

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontClass}>
      <body>
        <SiteShell lang="es">{children}</SiteShell>
      </body>
    </html>
  );
}
