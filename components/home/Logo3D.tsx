"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useFinePointer";

const EDGE_LAYERS = 14;
const THICKNESS = 26; // px

/**
 * Logo en 3D: una "moneda" feta amb CSS 3D (cara davant, cara darrere i capes
 * de vora platejada). Flota i gira sola a poc a poc; en arrossegar-hi per sobre
 * (ratolí o dit) gira segons el moviment, amb inèrcia.
 */
export function Logo3D() {
  const coin = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = coin.current;
    const w = wrap.current;
    if (!el || !w) return;
    let rx = -8;
    let ry = 0;
    let vx = 0;
    let vy = reduced ? 0 : 0.25; // gir suau per defecte
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let raf = 0;
    let visible = true;

    const frame = () => {
      raf = 0;
      if (!visible) return;
      if (!dragging) {
        ry += vy;
        rx += vx;
        // La inèrcia s'esvaeix fins al gir suau de base
        vy += (0.25 - vy) * 0.02;
        vx *= 0.92;
        rx += (-8 - rx) * 0.02;
      }
      rx = Math.max(-70, Math.min(70, rx));
      el.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      if (!reduced || dragging || Math.abs(vx) > 0.01 || Math.abs(vy - (reduced ? 0 : 0.25)) > 0.01) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      w.setPointerCapture(e.pointerId);
      w.dataset.drag = "true";
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      ry += dx * 0.6;
      rx -= dy * 0.4;
      vy = dx * 0.6;
      vx = -dy * 0.4;
      kick();
    };
    const onUp = () => {
      dragging = false;
      w.dataset.drag = "false";
      kick();
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      kick();
    });
    io.observe(w);
    w.addEventListener("pointerdown", onDown);
    w.addEventListener("pointermove", onMove);
    w.addEventListener("pointerup", onUp);
    w.addEventListener("pointercancel", onUp);
    kick();
    return () => {
      visible = false;
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      w.removeEventListener("pointerdown", onDown);
      w.removeEventListener("pointermove", onMove);
      w.removeEventListener("pointerup", onUp);
      w.removeEventListener("pointercancel", onUp);
    };
  }, [reduced]);

  const stepZ = THICKNESS / EDGE_LAYERS;
  return (
    <div ref={wrap} className="coin-wrap" data-cursor="drag" data-cursor-label="↔" aria-hidden="true">
      <div ref={coin} className="coin">
        <div className="coin__face coin__face--front">
          {/* eslint-disable-next-line @next/next/no-img-element -- decoratiu, PNG ja optimitzat */}
          <img src="/img/logo-800.png" alt="" width={800} height={800} decoding="async" draggable={false} />
        </div>
        {Array.from({ length: EDGE_LAYERS }, (_, k) => (
          <div key={k} className="coin__edge" style={{ transform: `translateZ(${(-(k + 1) * stepZ).toFixed(2)}px)` }} />
        ))}
        <div className="coin__face coin__face--back" style={{ transform: `translateZ(${-THICKNESS - 1}px) rotateY(180deg)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- decoratiu, PNG ja optimitzat */}
          <img src="/img/logo-800.png" alt="" width={800} height={800} decoding="async" draggable={false} />
        </div>
      </div>
    </div>
  );
}
