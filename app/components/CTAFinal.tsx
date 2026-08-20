"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-ink py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/25 blur-[130px]"
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            ¿Cómo empiezo a trabajar con vosotros?
          </p>
          <h2 className="font-display mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Es hora de dar un paso hacia delante.
          </h2>
          <p className="mt-5 text-base text-white/60">
            Si aún tienes dudas sobre nuestro servicio o quieres empezar ya a
            trabajar con nosotros, escríbenos. Sin compromiso.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:dakerstudio.team@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
            >
              <Mail size={16} />
              dakerstudio.team@gmail.com
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="tel:691463221"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              <Phone size={16} />
              691 463 221
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
