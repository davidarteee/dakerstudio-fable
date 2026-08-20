import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const POSTS = [
  {
    title: "5 consejos para diferenciar tu empresa de la competencia",
    minutes: "2 min",
  },
  {
    title: "Cómo mejorar tu marca personal en cinco pasos en Instagram",
    minutes: "2 min",
  },
];

export function BlogTeaser() {
  return (
    <section className="bg-paper py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
                Blog
              </p>
              <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Artículos destacados
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-violet-600"
            >
              Ver todo el blog
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
          {POSTS.map((post) => (
            <RevealItem key={post.title}>
              <Link
                href="/blog"
                className="group flex h-full flex-col justify-between rounded-2xl border border-ink/8 bg-white p-7 transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_40px_-20px_rgba(111,43,240,0.25)]"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-violet-500">
                    {post.minutes} de lectura
                  </span>
                  <h3 className="font-display mt-3 text-lg font-semibold leading-snug text-ink">
                    {post.title}
                  </h3>
                </div>
                <span className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink/70 transition-colors group-hover:text-violet-600">
                  Leer artículo
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
