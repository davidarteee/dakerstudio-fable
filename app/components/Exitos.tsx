"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const CASES = [
  {
    name: "Cal Franc",
    tag: "Restaurante",
    title: "Una web que cuenta la historia del restaurante",
    text: "Transformamos la marca Cal Franc en una experiencia digital que convierte visitas en clientes: diseño a medida, funcional y con el que hemos logrado la plena satisfacción del cliente.",
    link: "restaurantcalfranc.com",
    href: "https://restaurantcalfranc.com",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=916,fit=crop/A1a54w70XruoLx92/captura-de-pantalla-2026-02-05-173515-WSq1ZvKM2tzsdrQt.png",
    hasImage: true,
  },
  {
    name: "BVS",
    tag: "Servicio de limpieza",
    title: "Presencia digital profesional para captar más clientes",
    text: "Una web pensada para transmitir confianza desde el primer segundo: servicios claros, zona de cobertura y contacto directo para pedir presupuesto en un par de clics.",
    link: "Próximamente",
    href: "#contacto",
    image: null,
    hasImage: false,
  },
];

export function Exitos() {
  return (
    <section id="exitos" className="bg-mist py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            Éxitos
          </p>
          <h2 className="font-display mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Clientes que ya confiaron en nosotros
          </h2>
          <p className="mt-5 max-w-lg text-base text-ink/60">
            Descubre cómo hemos ayudado a otros negocios a crecer online
            gracias a nuestras estrategias. Tu empresa puede ser el próximo
            caso de éxito.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-[0_1px_2px_rgba(10,10,10,0.04)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                  {c.hasImage && c.image ? (
                    <img
                      src={c.image}
                      alt={`Vista previa de la web de ${c.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-violet-900 via-ink to-ink text-white/70">
                      <Sparkles size={22} className="text-violet-400" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        Imagen próximamente
                      </span>
                    </div>
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    {c.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-bold text-ink">
                    Caso de éxito: {c.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-violet-600">
                    {c.title}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                    {c.text}
                  </p>
                  <a
                    href={c.href}
                    target={c.hasImage ? "_blank" : undefined}
                    rel={c.hasImage ? "noreferrer" : undefined}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-violet-600"
                  >
                    {c.hasImage ? c.link : "Escríbenos para verla"}
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
