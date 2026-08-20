"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/25 blur-[130px]"
        />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Es hora de dar un paso hacia delante.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
          >
            Hablemos de tu proyecto
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
