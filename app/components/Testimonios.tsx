import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

export function Testimonios() {
  return (
    <section className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <div className="flex justify-center gap-1 text-violet-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="font-display mt-6 text-2xl font-medium leading-snug text-white sm:text-3xl">
            &ldquo;Han sabido captar perfectamente la esencia de nuestro
            restaurante, creando una web elegante, funcional y acorde a
            nuestra identidad. Un resultado impecable que recomendamos sin
            dudarlo.&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
            Cal Franc · Restaurante
          </p>
        </Reveal>
      </div>
    </section>
  );
}
