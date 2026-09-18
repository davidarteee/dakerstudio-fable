"use client";

import { useRef, useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import type { ImageKey } from "@/lib/images.generated";
import { servicesAnchor, type Lang } from "@/lib/i18n";
import { accentLast } from "@/lib/accent";
import { Picture } from "../Picture";
import { ArrowLeft, ArrowRight } from "../Icons";

/**
 * Carrusel de targetes blanques amb perspectiva: la targeta activa al centre i
 * les veïnes inclinades als costats. Text a l'esquerra, imatge a la dreta
 * (fons desenfocat + imatge nítida que s'amplia en passar-hi el cursor).
 */
export function Services({ lang, t }: { lang: Lang; t: Dictionary }) {
  const items = t.services.items;
  const n = items.length;
  const [i, setI] = useState(0);
  const startX = useRef<number | null>(null);
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const pos = (k: number) => {
    const d = (k - i + n) % n;
    if (d === 0) return "0";
    if (d === 1) return "1";
    if (d === n - 1) return "-1";
    return "hidden";
  };
  const pad = (v: number) => String(v).padStart(2, "0");

  return (
    <section id={servicesAnchor[lang]} className="section wrap overflow-hidden" data-theme="light">
      <div className="grid-12 gap-y-6 mb-12 md:mb-16">
        <h2 className="t-h2 col-span-12 md:col-span-7 max-w-[14ch]" data-reveal>
          {accentLast(t.services.title)}
        </h2>
        <p className="t-lead col-span-12 md:col-span-4 md:col-start-9 max-w-[30ch] text-[color:var(--fg-2)]" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          {t.services.intro}
        </p>
      </div>

      <div
        className="scar"
        data-reveal
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
        onPointerCancel={() => (startX.current = null)}
      >
        {items.map((s, k) => (
          <article key={s.name} className="scard" data-pos={pos(k)} aria-hidden={pos(k) !== "0"}>
            <div className="scard__body">
              <div>
                <p className="t-label">{t.services.label}</p>
                <h3 className="scard__title">{s.name}</h3>
                <p className="scard__desc">{s.desc}</p>
              </div>
              <div>
                <p className="t-label mb-2">{t.services.includes}</p>
                <p className="scard__inc">{s.includes.join(" · ")}</p>
              </div>
            </div>
            <div className="scard__media">
              <Picture image={s.image as ImageKey} alt="" sizes="1px" className="bg" />
              <Picture image={s.image as ImageKey} alt={s.alt} sizes="(min-width: 861px) 42vw, 86vw" className="fg" />
              <span className="tag">
                {t.services.serviceN} {pad(k + 1)}
              </span>
            </div>
          </article>
        ))}
        <button type="button" className="round-btn scar__arrow scar__arrow--prev" onClick={() => go(-1)} aria-label={t.projects.prev}>
          <ArrowLeft size={18} />
        </button>
        <button type="button" className="round-btn scar__arrow scar__arrow--next" onClick={() => go(1)} aria-label={t.projects.next}>
          <ArrowRight size={18} />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {pad(i + 1)} / {pad(n)} — {items[i].name}
      </p>
    </section>
  );
}
