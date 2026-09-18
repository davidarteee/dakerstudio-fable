"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor circular lilà. Només s'activa amb punter fi (hover + pointer: fine).
 * Estats via atributs: data-cursor="link|view|drag" i data-cursor-label="text".
 * Enllaços i botons sense atribut → estat "link".
 */
export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    const el = ring.current;
    const lab = label.current;
    if (!el || !lab) return;

    document.documentElement.classList.add("has-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;
    let visible = false;

    const loop = () => {
      rx += (x - rx) * 0.22;
      ry += (y - ry) * 0.22;
      el.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (Math.abs(x - rx) > 0.05 || Math.abs(y - ry) > 0.05) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        rx = x;
        ry = y;
        el.dataset.state = el.dataset.state === "hidden" ? "" : el.dataset.state;
      }
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      const custom = t.closest<HTMLElement>("[data-cursor]");
      if (custom) {
        el.dataset.state = custom.dataset.cursor ?? "";
        lab.textContent = custom.dataset.cursorLabel ?? "";
        return;
      }
      const interactive = t.closest("a, button, [role='button'], input, textarea, select, label, summary");
      el.dataset.state = interactive ? "link" : "";
      lab.textContent = "";
    };

    const onLeave = () => {
      visible = false;
      el.dataset.state = "hidden";
    };
    const onEnter = () => {
      el.dataset.state = "";
    };
    const onDown = () => (el.dataset.press = "true");
    const onUp = () => (el.dataset.press = "false");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    el.dataset.state = "hidden";

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ring} className="cursor" data-state="hidden" aria-hidden="true">
      <span className="cursor__dot" />
      <span ref={label} className="cursor__label" />
    </div>
  );
}
