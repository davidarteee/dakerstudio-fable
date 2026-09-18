import Link from "next/link";
import { getDict } from "@/content/dictionary";
import { site, formatPhone, whatsappUrl } from "@/content/site";
import { routes, type Lang } from "@/lib/i18n";
import { Picture } from "../Picture";
import { ArrowRight, WhatsApp } from "../Icons";

export function AboutPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const a = t.aboutPage;
  return (
    <>
      <section className="wrap pt-[calc(var(--nav-h)+8vh)] pb-16 md:pb-24" data-theme="dark">
        <p className="t-label mb-8" data-reveal>
          {t.nav.about}
        </p>
        <h1 className="t-h1 max-w-[12ch]" data-reveal>
          {a.title} <span className="accent">{a.titleAccent}</span>
        </h1>
      </section>

      <section className="wrap pb-24 md:pb-32" data-theme="dark">
        <div className="grid-12 gap-y-12">
          <div className="col-span-10 md:col-span-5">
            <div className="photo aspect-[4/5]" data-reveal="clip">
              <Picture image="team" alt={t.about.photoAlt} sizes="(min-width: 768px) 40vw, 85vw" priority />
            </div>
          </div>
          <div className="col-span-12 md:col-start-7 md:col-span-6 flex flex-col justify-between gap-12">
            <p className="t-h3 max-w-[26ch]" data-reveal>
              {a.lead}
            </p>
            <div data-reveal>
              <p className="t-label mb-5">{a.who}</p>
              <ul className="grid gap-4">
                {site.people.map((p) => (
                  <li key={p.id} className="hairline pt-4 flex flex-wrap items-baseline justify-between gap-3">
                    <span>
                      <span className="t-h3 block">{p.fullName}</span>
                      <span className="t-label">{a.founder}</span>
                    </span>
                    <a href={whatsappUrl(p)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 link-u">
                      <WhatsApp size={16} className="text-[#25D366]" />
                      {formatPhone(p.phone)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap" data-theme="light">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <p className="t-label mb-6" data-reveal>
              {a.valuesLabel}
            </p>
          </div>
          <ol className="col-span-12 md:col-start-5 md:col-span-8 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {a.values.map((v, i) => (
              <li key={v.title} className="hairline pt-5" data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}>
                <span className="t-label block mb-6">0{i + 1}</span>
                <h2 className="t-h3 mb-4">{v.title}</h2>
                <p className="t-body max-w-[36ch]">{v.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section wrap" data-theme="dark">
        <div className="grid-12 gap-y-10 items-end">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <p className="t-label mb-6" data-reveal>
              {a.toolsLabel}
            </p>
            <h2 className="t-h2 mb-6 max-w-[12ch]" data-reveal>
              {a.toolsTitle}
            </h2>
            <p className="t-body max-w-[42ch] mb-10" data-reveal>
              {a.toolsText}
            </p>
            <Link href={routes.contact[lang]} className="btn btn--primary" data-reveal>
              {a.cta} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="col-span-12 md:col-start-7 md:col-span-6 order-1 md:order-2">
            <div className="photo aspect-[6/5]" data-reveal="clip">
              <Picture image="nfc-cards" alt={a.nfcAlt} sizes="(min-width: 768px) 48vw, 100vw" className="!filter-none" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
