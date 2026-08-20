"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { InstagramIcon } from "./icons";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const LINE_1 = "Webs que hacen crecer".split(" ");
const LINE_2 = "tu negocio.".split(" ");

function WordReveal({
  words,
  delayStart,
  className,
}: {
  words: string[];
  delayStart: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: delayStart },
    },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32, rotateX: prefersReducedMotion ? 0 : -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={container}
      className={`flex flex-wrap gap-x-[0.28em] ${className ?? ""}`}
      style={{ perspective: 600 }}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block">
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink pt-28 pb-16 text-white">
      {/* signature background element */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          className="absolute -top-40 right-[-12%] h-[620px] w-[620px] rounded-full bg-violet-500/30 blur-[130px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-12%] h-[460px] w-[460px] rounded-full bg-violet-600/25 blur-[120px]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-300"
        >
          <span className="flex h-2 w-2 rounded-full bg-violet-400" />
          Páginas web · Estrategias personalizadas · Soluciones digitales
        </motion.p>

        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-[5.2rem]">
          <WordReveal words={LINE_1} delayStart={0.15} />
          <WordReveal
            words={LINE_2}
            delayStart={0.15 + LINE_1.length * 0.09}
            className="text-violet-400"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
          className="mt-7 max-w-xl text-lg text-white/70"
        >
          Diseñamos y desarrollamos páginas web a medida para negocios
          locales, con estrategias pensadas para diferenciarte de la
          competencia y ahorrarte los mayores costes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="/contacto"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
          className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6"
        >
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span className="font-display font-semibold text-white/80">
              David Arté &amp; Iker Fuentes
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Fundadores de Daker Studio</span>
          </div>

          <motion.a
            href="#siguiente"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white/70"
          >
            Scroll
            <ArrowDown size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
