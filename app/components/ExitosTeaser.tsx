"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ExitosTeaser() {
  return (
    <section className="bg-mist py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Caso de éxito
            </p>
            <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Restaurante Cal Franc
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/60">
              Transformamos la marca Cal Franc en una experiencia digital que
              convierte visitas en clientes: diseño a medida, funcional y con
              el que hemos logrado la plena satisfacción del cliente.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              Tu empresa puede ser nuestro próximo caso de éxito.
            </p>
            <Link
              href="/exitos"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-600"
            >
              Ver todos los casos de éxito
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-3xl border border-ink/8 shadow-[0_1px_2px_rgba(10,10,10,0.04)]"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-ink">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=916,fit=crop/A1a54w70XruoLx92/captura-de-pantalla-2026-02-05-173515-WSq1ZvKM2tzsdrQt.png"
                  alt="Vista previa de la web de Cal Franc"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                  Restaurante
                </span>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
