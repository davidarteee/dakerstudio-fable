import { getDict } from "@/content/dictionary";
import { site, formatPhone, whatsappUrl } from "@/content/site";
import type { Lang } from "@/lib/i18n";
import { ContactForm } from "../ContactForm";
import { Instagram, Mail, WhatsApp } from "../Icons";

export function ContactPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.contactPage;
  return (
    <>
      <section className="wrap pt-[calc(var(--nav-h)+8vh)] pb-16 md:pb-24" data-theme="dark">
        <h1 className="t-h1 max-w-[12ch]" data-reveal>
          {c.title} <span className="accent">{c.titleAccent}</span>
        </h1>
        <p className="t-lead mt-8 max-w-[40ch] text-[color:var(--fg-2)]" data-reveal>
          {c.intro}
        </p>
      </section>

      <section className="wrap pb-24 md:pb-32" data-theme="dark">
        <div className="grid-12 gap-y-16">
          <div className="col-span-12 md:col-span-5" data-reveal>
            <p className="t-label mb-6">{c.direct}</p>
            <div className="grid gap-3">
              {site.people.map((p) => (
                <a key={p.id} href={whatsappUrl(p)} target="_blank" rel="noopener" className="btn btn--primary btn--lg justify-between">
                  <span className="inline-flex items-center gap-3">
                    <WhatsApp size={20} /> {p.name}
                  </span>
                  <span className="text-[0.8rem] opacity-90">{formatPhone(p.phone)}</span>
                </a>
              ))}
            </div>
            <ul className="mt-8 grid gap-3">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 link-u break-all">
                  <Mail size={18} /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener" className="inline-flex items-center gap-3 link-u">
                  <Instagram size={18} /> @{site.instagram.handle}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-start-7 md:col-span-6" data-reveal>
            <p className="t-label mb-2">{c.formTitle}</p>
            <p className="t-body mb-8">{c.formIntro}</p>
            <ContactForm t={t} />
          </div>
        </div>
      </section>
    </>
  );
}
