"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Dictionary } from "@/content/dictionary";
import { routes, type Lang } from "@/lib/i18n";
import { useReducedMotion } from "@/lib/useFinePointer";
import { Picture } from "../Picture";

/** Foto petita en moviment lent amb "DakerStudio" en cursiva a sobre + text gran en Inter bold revelat amb l'scroll. */
export function About({ lang, t }: { lang: Lang; t: Dictionary }) {
  const para = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const words = t.about.text.split(" ");

  useEffect(() => {
    const el = para.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>(".w"));
    if (reduced) {
      spans.forEach((s) => (s.dataset.on = "true"));
      return;
    }
    let raf = 0;
    let last = -1;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.88;
      const end = vh * 0.38;
      const p = Math.min(1, Math.max(0, (start - r.top) / (r.height + (start - end))));
      const count = Math.round(p * spans.length);
      if (count === last) return;
      last = count;
      spans.forEach((s, i) => (s.dataset.on = i < count ? "true" : "false"));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section id="about" className="section wrap" data-theme="dark">
      <div className="grid-12 gap-y-10">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-8 items-start">
          <div className="about-photo" data-reveal>
            <Picture image="team-close" alt={t.about.photoAlt} sizes="(min-width: 768px) 300px, 80vw" />
            <span className="about-photo__label" aria-hidden="true">
              DakerStudio
            </span>
          </div>
          <Link href={routes.about[lang]} className="btn" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {t.about.cta}
          </Link>
        </div>
        <div className="col-span-12 md:col-start-6 md:col-span-7">
          <p ref={para} className="t-big words max-w-[30ch]">
            {words.map((w, i) => (
              <span key={i} className="w" data-accent={w.startsWith("DakerStudio") || undefined}>
                {w}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
