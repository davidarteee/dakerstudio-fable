import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { LANGS, SITE_URL, projectPath, routes } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const r of Object.values(routes)) {
    for (const lang of LANGS) {
      entries.push({
        url: `${SITE_URL}${r[lang]}`,
        lastModified: now,
        alternates: { languages: { ca: `${SITE_URL}${r.ca}`, es: `${SITE_URL}${r.es}` } },
      });
    }
  }
  for (const p of projects) {
    for (const lang of LANGS) {
      entries.push({
        url: `${SITE_URL}${projectPath(lang, p.slug[lang])}`,
        lastModified: now,
        alternates: {
          languages: { ca: `${SITE_URL}${projectPath("ca", p.slug.ca)}`, es: `${SITE_URL}${projectPath("es", p.slug.es)}` },
        },
      });
    }
  }
  return entries;
}
