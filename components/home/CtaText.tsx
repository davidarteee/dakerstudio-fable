"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useFinePointer";

/** Frase serif en dues meitats que comencen separades i s'ajunten al centre a mesura que la secció entra amb l'scroll. */
export function CtaText({ left, right }: { left: string; right: string }) {
  const root = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const l = el.querySelector<HTMLElement>(".cta__half--l");
    const r = el.querySelector<HTMLElement>(".cta__half--r");
    if (!l || !r) return;
    if (reduced) {
      l.style.transform = r.style.transform = "none";
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 quan la frase entra per baix, 1 quan ja és a mitja pantalla (ara va sota el logo)
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.5)));
      const e = 1 - Math.pow(1 - p, 3);
      const gap = (1 - e) * Math.min(window.innerWidth * 0.14, 260);
      l.style.transform = `translateX(${(-gap).toFixed(1)}px)`;
      r.style.transform = `translateX(${gap.toFixed(1)}px)`;
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
    <p ref={root} className="cta__text">
      <span className="cta__half cta__half--l">{left}</span>
      <span className="cta__half cta__half--r">{right}</span>
    </p>
  );
}
