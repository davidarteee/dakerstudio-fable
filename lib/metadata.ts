import type { Metadata, Viewport } from "next";
import { fill, getDict } from "@/content/dictionary";
import { projectName, type Project } from "@/content/projects";
import { site } from "@/content/site";
import { LANGS, SITE_URL, localeCode, projectPath, routes, type Lang, type RouteKey } from "./i18n";

function alternates(paths: Record<Lang, string>) {
  return {
    canonical: paths.ca, // es reescriu per pàgina
    languages: Object.fromEntries([...LANGS.map((l) => [l, `${SITE_URL}${paths[l]}`]), ["x-default", `${SITE_URL}${paths.ca}`]]),
  };
}

export function pageMeta(lang: Lang, key: RouteKey): Metadata {
  const t = getDict(lang).meta[key];
  const paths = routes[key];
  return {
    title: t.title,
    description: t.description,
    alternates: { ...alternates(paths), canonical: `${SITE_URL}${paths[lang]}` },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${SITE_URL}${paths[lang]}`,
      siteName: site.name,
      locale: localeCode[lang],
      type: "website",
    },
  };
}

export function projectMeta(lang: Lang, p: Project): Metadata {
  const tpl = getDict(lang).meta.project;
  const name = projectName(p, lang);
  const t = { title: fill(tpl.title, { name }), description: fill(tpl.description, { name }) };
  const paths = { ca: projectPath("ca", p.slug.ca), es: projectPath("es", p.slug.es) };
  return {
    title: t.title,
    description: t.description,
    alternates: { ...alternates(paths), canonical: `${SITE_URL}${paths[lang]}` },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${SITE_URL}${paths[lang]}`,
      siteName: site.name,
      locale: localeCode[lang],
      type: "article",
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: site.name,
  robots: { index: true, follow: true },
};

export const baseViewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};
