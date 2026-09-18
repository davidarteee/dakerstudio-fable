"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import { projects, projectName } from "@/content/projects";
import { projectPath, type Lang } from "@/lib/i18n";
import { Picture } from "../Picture";
import { ArrowLeft, ArrowRight } from "../Icons";

/**
 * Carrusel de projectes: nom fantasma serif de fons, portada tipogràfica (captura
 * desenfocada + nom del projecte) que s'amplia en hover, fletxes i swipe.
 */
export function ProjectsShowcase({ lang, t }: { lang: Lang; t: Dictionary }) {
  const [i, setI] = useState(0);
  const n = projects.length;
  const startX = useRef<number | null>(null);
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const p = projects[i];
  const c = p.copy[lang];
  const name = projectName(p, lang);
  const href = projectPath(lang, p.slug[lang]);

  return (
    <section id="projects" data-theme="dark">
      <div
        className="pshow"
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
        <div className="pshow__ghost" aria-hidden="true" key={`g${p.id}`}>
          <span>{name}</span>
          <span>{name}</span>
        </div>

        {/* Sense data-reveal aquí: el requadre es torna a crear a cada canvi i quedaria invisible */}
        <div className="pslide" key={p.id}>
          <Link href={href} className="pslide__frame" aria-label={`${t.projects.view}: ${name}`} draggable={false}>
            <Picture image={p.images.hover} alt="" sizes="(min-width: 861px) 80vw, 88vw" className="pslide__bg" />
            <span className="pslide__name" aria-hidden="true">
              {name}
            </span>
            <span className="pslide__more">{t.cursor.view}</span>
          </Link>
          <div className="pslide__meta">
            <div>
              <h3 className="t-h3">{name}</h3>
              <p className="t-body max-w-[34ch] mt-1">{c.tagline}</p>
            </div>
            <p className="t-label-strong text-right shrink-0">{p.location}</p>
          </div>
        </div>

        <button type="button" className="round-btn pshow__arrow pshow__arrow--prev" onClick={() => go(-1)} aria-label={t.projects.prev}>
          <ArrowLeft size={18} />
        </button>
        <button type="button" className="round-btn pshow__arrow pshow__arrow--next" onClick={() => go(1)} aria-label={t.projects.next}>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
