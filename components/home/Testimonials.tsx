"use client";

import { useEffect, useRef } from "react";
import { testimonials } from "@/content/testimonials";
import { useReducedMotion } from "@/lib/useFinePointer";

const TILT = [-2.2, 1.8, -1.6];

/** Targetes blanques amb cometes, lleugerament inclinades, que pugen i s'apilen amb l'scroll. Sense títol. */
export function Testimonials() {
  const stack = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = stack.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>(".tcard"));
    let raf = 0;
    const update = () => {
      raf = 0;
      for (let i = 0; i < cards.length - 1; i++) {
        const cr = cards[i].getBoundingClientRect();
        const nr = cards[i + 1].getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (cr.bottom - nr.top) / cr.height));
        // La inclinació només apareix mentre la següent targeta puja per sobre (p: 0 → 1 → torna a 0 al final)
        const tilt = Math.sin(p * Math.PI) * TILT[i % TILT.length];
        cards[i].style.transform = `rotate(${tilt.toFixed(3)}deg) scale(${(1 - p * 0.06).toFixed(4)})`;
        cards[i].style.setProperty("--dim", (p * 0.55).toFixed(3));
      }
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
    <section id="testimonials" className="section wrap" data-theme="dark">
      <div ref={stack} className="stack md:grid-cols-12">
        {testimonials.map((q, i) => {
          const [name, role] = q.author.split(" · ");
          return (
            <figure key={q.id} className="tcard md:col-start-2 md:col-span-10" style={{ top: `calc(var(--nav-h) + 1.5rem + ${i * 14}px)` }} lang="es">
              <div>
                <span className="tcard__mark block" aria-hidden="true">
                  “
                </span>
                <blockquote className="tcard__q t-quote">{q.quote}</blockquote>
              </div>
              <figcaption className="tcard__by">
                <span className="tcard__name">{name}</span>
                {role && <span className="tcard__role">{role}</span>}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
