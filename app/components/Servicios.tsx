import { Fingerprint, ShieldCheck, Eye, ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const BENEFITS = [
  {
    icon: Fingerprint,
    title: "Te diferencias de la competencia",
    text: "Destacas lo que hace único a tu negocio, con tu propio estilo y branding.",
  },
  {
    icon: ShieldCheck,
    title: "Transmites confianza y profesionalismo",
    text: "Una web bien hecha genera buena impresión desde el primer clic.",
  },
  {
    icon: Eye,
    title: "Ganas visibilidad online",
    text: "Tus clientes te pueden encontrar en Google, incluso cuando estás cerrado.",
  },
];

export function Servicios() {
  return (
    <section id="servicio" className="relative bg-paper py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Nuestro servicio
            </p>
            <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              ¿Cómo puede ayudarte una página web?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/60">
              Hoy en día tener una página web no es un lujo, es una
              necesidad. Es la carta de presentación digital de tu negocio:
              un lugar donde los clientes pueden encontrarte, conocer lo que
              ofreces y contactarte fácilmente.
            </p>
            <a
              href="/contacto"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-600"
            >
              Quiero mi página web
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>

          <RevealGroup className="flex flex-col gap-4">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <RevealItem key={title}>
                <div className="group flex gap-5 rounded-2xl border border-ink/8 bg-white p-6 transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_40px_-20px_rgba(111,43,240,0.25)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                      {text}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
