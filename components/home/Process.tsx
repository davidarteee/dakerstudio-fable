"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import { useFinePointer } from "@/lib/useFinePointer";
import { accentLast } from "@/lib/accent";

/** Fons negre, títol en Inter bold, números petits a l'esquerra; el pas actiu (hover o scroll) s'obre. */
export function Process({ t }: { t: Dictionary }) {
  const fine = useFinePointer();
  const [active, setActive] = useState(0);
  const list = useRef<HTMLOListElement>(null);
  const hovering = useRef(false);

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const steps = Array.from(el.querySelectorAll<HTMLElement>(".step"));
    const io = new IntersectionObserver(
      (entries) => {
        if (hovering.current) return;
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );
    steps.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="section wrap" data-theme="dark">
      <div className="grid-12 gap-y-14">
        <div className="col-span-12 md:col-start-3 md:col-span-8">
          <h2 className="t-h2 max-w-[16ch]" data-reveal>
            {accentLast(t.process.title)}
          </h2>
          <p className="t-lead mt-5 max-w-[40ch] text-[color:var(--fg-2)]" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {t.process.intro}
          </p>
        </div>
        <ol
          ref={list}
          className="col-span-12"
          data-reveal
          onMouseEnter={fine ? () => (hovering.current = true) : undefined}
          onMouseLeave={fine ? () => (hovering.current = false) : undefined}
        >
          {t.process.steps.map((s, i) => (
            <li key={s.title} className="step" data-i={i} data-active={active === i} onMouseEnter={fine ? () => setActive(i) : undefined} onClick={() => setActive(i)}>
              <span className="step__num" aria-hidden="true">
                00{i + 1}
              </span>
              <div>
                <h3 className="step__title">
                  <span className="sr-only">{i + 1}. </span>
                  {s.title}
                </h3>
                <div className="step__panel">
                  <div>
                    <p className="step__desc t-body">{s.desc}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
