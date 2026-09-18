"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import { routes, type Lang } from "@/lib/i18n";
import { Picture } from "../Picture";

/** Fons blanc: títol gran + acordió a l'esquerra; imatge, text i botó de contacte a la dreta. */
export function Faq({ lang, t }: { lang: Lang; t: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section wrap" data-theme="white">
      <div className="grid-12 gap-y-12">
        <div className="col-span-12 md:col-span-8">
          <h2 className="t-h1 max-w-[12ch]" data-reveal>
            {t.faq.title} <span className="accent">{t.faq.titleAccent}</span>
          </h2>
          <p className="t-lead mt-6 text-[color:var(--fg-2)]" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
            {t.faq.intro}
          </p>
          <div className="mt-14" data-reveal style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
            {t.faq.items.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="faq" data-open={isOpen}>
                  <h3>
                    <button type="button" className="faq__q" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                      <span>{f.q}</span>
                      <span className="faq__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={`faq-${i}`} className="faq__panel" role="region" aria-label={f.q}>
                    <div>
                      <p className="faq__a t-body">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <aside className="col-span-12 md:col-start-10 md:col-span-3 md:pt-40" data-reveal style={{ "--reveal-delay": "240ms" } as React.CSSProperties}>
          <div className="photo aspect-square">
            <Picture image="nfc-cards" alt={t.faq.sideAlt} sizes="(min-width: 768px) 24vw, 100vw" />
          </div>
          <p className="t-body mt-6">{t.faq.sideText}</p>
          <Link href={routes.contact[lang]} className="btn btn--solid mt-6">
            {t.faq.sideCta}
          </Link>
        </aside>
      </div>
    </section>
  );
}
