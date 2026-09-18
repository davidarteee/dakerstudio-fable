import Link from "next/link";
import { fill, getDict } from "@/content/dictionary";
import { projects, projectName, type Project } from "@/content/projects";
import { testimonials } from "@/content/testimonials";
import { projectPath, routes, type Lang } from "@/lib/i18n";
import { Picture } from "../Picture";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "../Icons";

export function ProjectPage({ lang, project: p }: { lang: Lang; project: Project }) {
  const t = getDict(lang);
  const pp = t.projectPage;
  const c = p.copy[lang];
  const name = projectName(p, lang);
  const quotes = testimonials.filter((q) => q.projectId === p.id);
  const idx = projects.findIndex((x) => x.id === p.id);
  const next = projects[(idx + 1) % projects.length];
  const host = new URL(p.url).host.replace(/^www\./, "");
  const coverAlt = fill(pp.coverAlt, { name });
  const mobileAlt = fill(pp.mobileAlt, { name });

  return (
    <>
      <section className="wrap pt-[calc(var(--nav-h)+8vh)] pb-12 md:pb-16" data-theme="dark">
        <Link href={routes.projects[lang]} className="t-label inline-flex items-center gap-2 mb-10 hover:text-violet-soft transition-colors" data-reveal>
          <ArrowLeft size={14} /> {pp.back}
        </Link>
        <div className="grid-12 gap-y-8 items-end">
          <h1 className="t-h1 col-span-12 md:col-span-8 max-w-[10ch]" data-reveal>
            {name}
          </h1>
          <p className="t-lead col-span-12 md:col-span-4 max-w-[28ch] text-[color:var(--fg-2)]" data-reveal>
            {c.tagline}
          </p>
        </div>
        <dl className="hairline mt-12 pt-6 grid grid-cols-2 md:grid-cols-5 gap-6" data-reveal>
          {[
            [pp.client, name],
            [pp.sector, c.sector],
            [pp.service, c.service],
            [pp.location, p.location],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="t-label mb-2">{k}</dt>
              <dd className="text-[0.95rem]">{v}</dd>
            </div>
          ))}
          <div>
            <dt className="t-label mb-2">{pp.website}</dt>
            <dd>
              <a href={p.url} target="_blank" rel="noopener" className="link-u inline-flex items-center gap-1 text-[0.95rem] whitespace-nowrap">
                {host} <ArrowUpRight size={14} />
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="wrap pb-20 md:pb-28" data-theme="dark">
        <div className="show__frame" data-reveal="clip">
          <span className="show__slide" data-active="true">
            <Picture image={p.images.cover} alt={coverAlt} sizes="100vw" priority />
          </span>
        </div>
      </section>

      <section className="section wrap" data-theme="light">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 md:col-span-6">
            <p className="t-h3 max-w-[28ch]" data-reveal>
              {c.description}
            </p>
          </div>
          <div className="col-span-12 md:col-start-8 md:col-span-5" data-reveal>
            <p className="t-label mb-5">{pp.did}</p>
            <ul className="grid">
              {c.did.map((d, i) => (
                <li key={d} className="hairline py-3 flex gap-4 text-[0.98rem]">
                  <span className="t-label pt-1 shrink-0">0{i + 1}</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section wrap" data-theme="dark">
        <div className="grid-12 gap-y-6 items-end">
          <div className="col-span-12 md:col-span-7" data-reveal="clip">
            <div className="show__frame">
              <span className="show__slide" data-active="true">
                <Picture image={p.images.hover} alt={coverAlt} sizes="(min-width: 768px) 58vw, 100vw" />
              </span>
            </div>
          </div>
          {p.images.mobile.map((m, i) => (
            <div key={m} className={`col-span-6 md:col-span-2 ${i === 0 ? "md:col-start-9" : ""}`} data-reveal="clip">
              <div className="photo aspect-[430/932]">
                <Picture image={m} alt={mobileAlt} sizes="(min-width: 768px) 16vw, 45vw" className="!filter-none" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {quotes.length > 0 && (
        <section className="section wrap" data-theme="light">
          <div className="grid-12 gap-y-10">
            <p className="t-label col-span-12 md:col-span-3" data-reveal>
              {pp.theySay}
            </p>
            <div className="col-span-12 md:col-start-4 md:col-span-8 grid gap-12">
              {quotes.map((q) => (
                <figure key={q.id} lang="es" data-reveal>
                  <blockquote className="t-quote max-w-[36ch]">«{q.quote}»</blockquote>
                  <figcaption className="t-label mt-5 flex items-center gap-2">
                    <span className="w-[7px] h-[7px] rounded-full bg-violet inline-block" /> {q.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="wrap py-20 md:py-28" data-theme="dark">
        <p className="t-label mb-6" data-reveal>
          {pp.next}
        </p>
        <Link href={projectPath(lang, next.slug[lang])} className="group inline-flex items-center gap-6 t-h2 hover:text-violet-soft transition-colors" data-reveal data-cursor="view" data-cursor-label={t.cursor.project}>
          {projectName(next, lang)}
          <ArrowRight size={40} className="transition-transform group-hover:translate-x-2" />
        </Link>
      </section>
    </>
  );
}
