export type Lang = "ca" | "es";
export const LANGS: readonly Lang[] = ["ca", "es"] as const;
export const SITE_URL = "https://dakerstudio.com";

/** Rutes localitzades. Les URL acaben en barra (trailingSlash: true). */
export const routes = {
  home: { ca: "/", es: "/es/" },
  about: { ca: "/qui-som/", es: "/es/quienes-somos/" },
  projects: { ca: "/projectes/", es: "/es/proyectos/" },
  contact: { ca: "/contacte/", es: "/es/contacto/" },
} as const;
export type RouteKey = keyof typeof routes;

export const projectBase = { ca: "/projectes/", es: "/es/proyectos/" } as const;

/** Àncora de la secció de serveis a la Home (enllaç "Serveis" del menú). */
export const servicesAnchor = { ca: "serveis", es: "servicios" } as const;

export function projectPath(lang: Lang, slug: string) {
  return `${projectBase[lang]}${slug}/`;
}

export const otherLang = (lang: Lang): Lang => (lang === "ca" ? "es" : "ca");

export const langName: Record<Lang, string> = { ca: "Català", es: "Castellano" };

export const localeCode: Record<Lang, string> = { ca: "ca_ES", es: "es_ES" };
