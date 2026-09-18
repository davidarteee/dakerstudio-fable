import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontClass } from "@/lib/fonts";
import { baseMetadata, baseViewport, pageMeta } from "@/lib/metadata";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { ...baseMetadata, ...pageMeta("ca", "home") };
export const viewport: Viewport = baseViewport;

export default function CatalanLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca" className={fontClass}>
      <body>
        <SiteShell lang="ca">{children}</SiteShell>
      </body>
    </html>
  );
}
