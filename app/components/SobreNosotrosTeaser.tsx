import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const FOUNDERS = [
  { name: "David Arté" },
  { name: "Iker Fuentes" },
];

export function SobreNosotrosTeaser() {
  return (
    <section className="bg-paper py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Sobre nosotros
            </p>
            <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Quiénes somos
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/60">
              Dos estudiantes universitarios con ganas de darlo todo en el
              mundo del emprendimiento, con ideas claras y ambición infinita.
            </p>
            <Link
              href="/sobre-nosotros"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-600"
            >
              Conócenos
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>

          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {FOUNDERS.map((f) => (
              <RevealItem key={f.name}>
                <div className="group relative overflow-hidden rounded-3xl bg-ink p-8 text-white">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-500/25 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 font-display text-lg font-bold text-violet-300">
                    {f.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="font-display relative mt-6 text-lg font-bold">
                    {f.name}
                  </h3>
                  <p className="relative mt-1 text-sm text-white/50">
                    Fundador
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
