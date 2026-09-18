import Link from "next/link";
import type { Dictionary } from "@/content/dictionary";
import { site, formatPhone, whatsappUrl } from "@/content/site";
import { routes, type Lang } from "@/lib/i18n";
import { WhatsApp } from "./Icons";
import { ParticleText } from "./ParticleText";

/** Peu clar: "Parlem." + botons de WhatsApp a l'esquerra, enllaços i correu gran a la dreta, marca gegant amb partícules a sota. */
export function Footer({ lang, t }: { lang: Lang; t: Dictionary }) {
  const year = new Date().getFullYear();
  const links = [
    { href: routes.home[lang], label: t.nav.home },
    { href: routes.about[lang], label: t.nav.about },
    { href: routes.projects[lang], label: t.nav.projects },
    { href: routes.contact[lang], label: t.nav.contact },
  ];
  const title = t.footer.title.replace(/\.$/, "");
  return (
    <footer data-theme="light" className="wrap pt-20 md:pt-28 overflow-hidden">
      <div className="grid-12 gap-y-14">
        <div className="col-span-12 md:col-span-5">
          <h2 className="t-h2">
            {title}
            <span className="accent">.</span>
          </h2>
          <p className="t-body mt-3 max-w-[38ch]">{t.footer.tagline}</p>
          <div className="mt-8 grid gap-3 max-w-[420px]">
            {site.people.map((p) => (
              <a key={p.id} href={whatsappUrl(p)} target="_blank" rel="noopener" className="btn btn--solid btn--block justify-between">
                <span className="inline-flex items-center gap-3">
                  <WhatsApp size={18} /> WhatsApp {p.name}
                </span>
                <span>{formatPhone(p.phone)}</span>
              </a>
            ))}
          </div>
          <p className="t-label mt-8">
            © {year} {site.name}. {t.footer.rights} {t.footer.made}
          </p>
        </div>

        <div className="col-span-6 md:col-start-8 md:col-span-2">
          <ul className="grid gap-2 text-[1.05rem]">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-u">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 md:col-span-3">
          <ul className="grid gap-2 text-[1.05rem]">
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener" className="link-u">
                Instagram
              </a>
            </li>
            <li>
              <a href={`https://wa.me/34${site.people[0].phone}`} target="_blank" rel="noopener" className="link-u">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-12 md:col-start-8 md:col-span-5">
          {site.people.map((p) => (
            <p key={p.id} className="t-lead text-[color:var(--fg-2)]">
              {p.name} · +34 {formatPhone(p.phone)}
            </p>
          ))}
          <a href={`mailto:${site.email}`} className="t-h3 link-u mt-3 break-all">
            {site.email}
          </a>
        </div>
      </div>

      <div className="mt-16 md:mt-24 wordmark-clip" aria-hidden="true">
        <ParticleText text="Daker Studio" tag="p" className="wordmark" radius={0.32} />
      </div>
    </footer>
  );
}
