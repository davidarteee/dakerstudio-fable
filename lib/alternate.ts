import { projects } from "@/content/projects";
import { projectBase, routes, type Lang } from "./i18n";

/** Donada la ruta actual, retorna l'equivalent en l'altre idioma. */
export function alternatePath(pathname: string, target: Lang): string {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  for (const r of Object.values(routes)) {
    if (r.ca === path) return r[target];
    if (r.es === path) return r[target];
  }
  for (const p of projects) {
    if (path === `${projectBase.ca}${p.slug.ca}/` || path === `${projectBase.es}${p.slug.es}/`) {
      return `${projectBase[target]}${p.slug[target]}/`;
    }
  }
  return routes.home[target];
}
