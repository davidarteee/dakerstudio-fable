import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const FOUNDERS = [
  { name: "David Arté", role: "Fundador" },
  { name: "Iker Fuentes", role: "Fundador" },
];

export function SobreNosotros() {
  return (
    <section id="nosotros" className="bg-paper py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
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
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              Nuestra metodología se basa en la comunicación y la
              transparencia con el cliente. Queremos conseguir tu confianza
              para, entre todos, mejorar y hacer único tu negocio.
            </p>
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
                    {f.role}
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
