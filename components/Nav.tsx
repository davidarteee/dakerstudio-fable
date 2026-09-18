"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/dictionary";
import { site } from "@/content/site";
import { routes, otherLang, servicesAnchor, type Lang } from "@/lib/i18n";
import { alternatePath } from "@/lib/alternate";

/** Capçalera fixa: logo a l'esquerra, seccions centrades en majúscules, idioma a la dreta. */
export function Nav({ lang, t }: { lang: Lang; t: Dictionary }) {
  const pathname = usePathname();
  const other = otherLang(lang);
  const alt = alternatePath(pathname, other);
  const links = [
    { href: routes.home[lang], label: t.nav.home, exact: true },
    { href: routes.about[lang], label: t.nav.about },
    { href: routes.projects[lang], label: t.nav.projects },
    { href: `${routes.home[lang]}#${servicesAnchor[lang]}`, label: t.nav.services, anchor: true },
    { href: routes.contact[lang], label: t.nav.contact },
  ];
  const isCurrent = (l: (typeof links)[number]) => {
    if (l.anchor) return false;
    return l.exact ? pathname === l.href : pathname.startsWith(l.href);
  };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-violet focus:text-white focus:px-4 focus:py-2">
        {t.nav.skip}
      </a>
      <header className="nav">
        <Link href={routes.home[lang]} className="nav__brand" aria-label={site.name}>
          {/* eslint-disable-next-line @next/next/no-img-element -- exportació estàtica: PNG petit ja optimitzat */}
          <img src="/img/logo-96.png" alt="" width={28} height={28} decoding="async" />
        </Link>
        <nav className="nav__links" aria-label="Principal">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="nav__link" aria-current={isCurrent(l) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href={alt} hrefLang={other} lang={other} className="nav__lang" aria-label={t.nav.switchTo}>
          {other}
        </Link>
      </header>
    </>
  );
}
