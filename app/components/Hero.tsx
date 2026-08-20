"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { InstagramIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink pt-28 pb-20 text-white"
    >
      {/* signature background element */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-violet-500/30 blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[110px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 md:px-10">
        <Reveal>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            Páginas web · Estrategias personalizadas · Soluciones digitales
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Webs que hacen crecer tu negocio,{" "}
            <span className="text-violet-400">no solo se ven bien.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Diseñamos y desarrollamos páginas web a medida para negocios
            locales, con estrategias pensadas para diferenciarte de la
            competencia y ahorrarte los mayores costes.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
            >
              Trabajemos juntos
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="https://www.instagram.com/daker.studio/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              <InstagramIcon width={16} height={16} />
              @dakerstudio
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-20 flex items-center gap-4 border-t border-white/10 pt-6 text-sm text-white/50">
            <span className="font-display font-semibold text-white/80">
              David Arté &amp; Iker Fuentes
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Fundadores de Daker Studio</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
