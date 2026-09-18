"use client";

import { createElement, useEffect, useRef } from "react";
import { useFinePointer, useReducedMotion } from "@/lib/useFinePointer";

type Props = {
  text: string;
  /** Element de text (h1 al hero, p al peu). */
  tag?: "h1" | "p";
  /** Classes del contenidor: hi va la tipografia (el text i el canvas l'hereten). */
  className?: string;
  textClassName?: string;
  /** Radi de l'efecte en proporció a la mida de la font (0.45 ≈ mig caràcter gran). */
  radius?: number;
};

/**
 * Text que, amb ratolí, es dibuixa en un canvas: net a tot arreu i, al voltant
 * del cursor, descompost en petites partícules quadrades que es dispersen i
 * tornen al seu lloc. Sense ratolí (o amb reduced-motion) es mostra el text normal.
 */
export function ParticleText({ text, tag = "h1", className = "", textClassName = "", radius: radiusFactor = 0.45 }: Props) {
  const elRef = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const active = fine && !reduced;

  useEffect(() => {
    if (!active) return;
    const c = canvas.current;
    const el = elRef.current;
    if (!c || !el) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let home = new Float32Array(0);
    let off = new Float32Array(0);
    let seed = new Float32Array(0);
    let n = 0;
    let step = 4;
    let dpr = 1;
    let W = 0;
    let H = 0;
    let radius = 150;
    let font = "";
    let letterSpacing = "0px";
    let baseline = 0;
    let color = "#fff";
    let mx = -1e4;
    let my = -1e4;
    let raf = 0;
    let visible = true;
    let rect = el.getBoundingClientRect();
    let building = false;

    const applyFont = (x: CanvasRenderingContext2D) => {
      x.font = font;
      x.fillStyle = "#fff";
      x.textBaseline = "alphabetic";
      if ("letterSpacing" in x) (x as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = letterSpacing;
    };

    const build = async () => {
      if (building) return;
      building = true;
      const cs = getComputedStyle(el);
      font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      letterSpacing = cs.letterSpacing === "normal" ? "0px" : cs.letterSpacing;
      try {
        await document.fonts.load(font, text);
      } catch {
        /* la font de reserva també serveix */
      }
      rect = el.getBoundingClientRect();
      W = Math.ceil(rect.width);
      H = Math.ceil(rect.height);
      if (!W || !H) {
        building = false;
        return;
      }
      color = cs.color;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      c.width = W * dpr;
      c.height = H * dpr;
      c.style.width = `${W}px`;
      c.style.height = `${H}px`;

      const fontPx = parseFloat(cs.fontSize);
      step = Math.max(3, Math.round(fontPx / 42));
      radius = fontPx * radiusFactor;

      const o = document.createElement("canvas");
      o.width = W;
      o.height = H;
      const octx = o.getContext("2d");
      if (!octx) return;
      applyFont(octx);
      const m = octx.measureText(text);
      const asc = m.fontBoundingBoxAscent ?? m.actualBoundingBoxAscent;
      const desc = m.fontBoundingBoxDescent ?? m.actualBoundingBoxDescent;
      baseline = (H - (asc + desc)) / 2 + asc;
      octx.fillText(text, 0, baseline);

      const data = octx.getImageData(0, 0, W, H).data;
      const xs: number[] = [];
      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          const cx = Math.min(W - 1, x + (step >> 1));
          const cy = Math.min(H - 1, y + (step >> 1));
          if (data[(cy * W + cx) * 4 + 3] > 110) xs.push(x, y);
        }
      }
      n = xs.length / 2;
      home = Float32Array.from(xs);
      off = new Float32Array(n * 2);
      seed = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        seed[i * 3] = Math.random() * Math.PI * 2;
        seed[i * 3 + 1] = 0.35 + Math.random() * 0.65;
        seed[i * 3 + 2] = Math.random() * Math.PI * 2;
      }
      building = false;
      draw(-1e4, -1e4);
    };

    const draw = (lx: number, ly: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      applyFont(ctx);
      ctx.fillStyle = color;
      ctx.fillText(text, 0, baseline);
      const near = lx > -radius && lx < W + radius && ly > -radius && ly < H + radius;
      if (!near && !n) return;
      if (near) {
        ctx.globalCompositeOperation = "destination-out";
        const g = ctx.createRadialGradient(lx, ly, radius * 0.55, lx, ly, radius);
        g.addColorStop(0, "rgba(0,0,0,1)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(lx, ly, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      }
      ctx.fillStyle = color;
      const s = step * 0.9;
      for (let i = 0; i < n; i++) {
        const hx = home[i * 2];
        const hy = home[i * 2 + 1];
        const ox = off[i * 2];
        const oy = off[i * 2 + 1];
        if (Math.hypot(lx - hx, ly - hy) < radius || Math.abs(ox) + Math.abs(oy) > 0.2) {
          ctx.fillRect(hx + ox, hy + oy, s, s);
        }
      }
    };

    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      const lx = mx - rect.left;
      const ly = my - rect.top;
      const t = now / 1000;
      let maxD = 0;
      for (let i = 0; i < n; i++) {
        const hx = home[i * 2];
        const hy = home[i * 2 + 1];
        const d = Math.hypot(lx - hx, ly - hy);
        let tx = 0;
        let ty = 0;
        if (d < radius) {
          const k = 1 - d / radius;
          const e = k * k;
          const a = seed[i * 3] + Math.sin(t * 2.2 + seed[i * 3 + 2]) * 0.6;
          const mag = seed[i * 3 + 1] * e * radius * 0.8;
          tx = Math.cos(a) * mag;
          ty = Math.sin(a) * mag;
        }
        off[i * 2] += (tx - off[i * 2]) * 0.14;
        off[i * 2 + 1] += (ty - off[i * 2 + 1]) * 0.14;
        const dd = Math.abs(off[i * 2]) + Math.abs(off[i * 2 + 1]);
        if (dd > maxD) maxD = dd;
      }
      draw(lx, ly);
      const inside = lx > -radius && lx < W + radius && ly > -radius && ly < H + radius;
      if (inside || maxD > 0.2) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf && visible && n) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      kick();
    };
    const onLeave = () => {
      mx = -1e4;
      my = -1e4;
      kick();
    };
    const onScroll = () => {
      rect = el.getBoundingClientRect();
      kick();
    };
    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => void build(), 150);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        rect = el.getBoundingClientRect();
        kick();
      }
    });
    io.observe(el);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    void build();

    return () => {
      visible = false;
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [active, text, radiusFactor]);

  return (
    <div className={`ptext ${className}`}>
      {createElement(tag, { ref: elRef, className: `ptext__el ${textClassName}`, "data-canvas": active }, text)}
      {active && <canvas ref={canvas} className="ptext__canvas" aria-hidden="true" />}
    </div>
  );
}
