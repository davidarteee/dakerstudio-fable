"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useFinePointer";
import { ArrowLeft, ArrowRight } from "../Icons";

const MS = 4200;

type Item = { label: string; text: string };

/** Caixa translúcida amb línia de progrés a dalt, fletxes i un servei que canvia sol cada 4,2 s. */
export function ServiceRotator({ items, prevLabel, nextLabel }: { items: Item[]; prevLabel: string; nextLabel: string }) {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const startedAt = useRef(0);
  const remaining = useRef(MS);
  const n = items.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    remaining.current = MS;
    startedAt.current = performance.now();
  }, [i]);

  useEffect(() => {
    if (paused || !inView || reduced) {
      remaining.current = Math.max(0, remaining.current - (performance.now() - startedAt.current));
      return;
    }
    startedAt.current = performance.now();
    const id = setTimeout(() => setI((v) => (v + 1) % n), remaining.current);
    return () => clearTimeout(id);
  }, [i, paused, inView, reduced, n]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting && document.visibilityState === "visible"));
    io.observe(el);
    const onVis = () => setInView(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div
      ref={root}
      className="rot"
      data-paused={paused}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="rot__track" aria-hidden="true">
        <i key={i} className="rot__fill" style={{ "--rot-ms": `${MS}ms` } as React.CSSProperties} />
      </div>
      <div className="rot__nav">
        <button type="button" onClick={() => go(-1)} aria-label={prevLabel} style={{ "--dir": "-3px" } as React.CSSProperties}>
          <ArrowLeft size={16} />
        </button>
        <button type="button" onClick={() => go(1)} aria-label={nextLabel} style={{ "--dir": "3px" } as React.CSSProperties}>
          <ArrowRight size={16} />
        </button>
      </div>
      <div aria-live="polite" aria-atomic="true">
        <p key={`t${i}`} className="rot__title">
          {items[i].label}
        </p>
        <p key={`d${i}`} className="rot__text">
          {items[i].text}
        </p>
      </div>
    </div>
  );
}
