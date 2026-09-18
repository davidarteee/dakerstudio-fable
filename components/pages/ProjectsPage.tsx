import Link from "next/link";
import { getDict } from "@/content/dictionary";
import { projects, projectName } from "@/content/projects";
import { projectPath, type Lang } from "@/lib/i18n";
import { Picture } from "../Picture";
import { ArrowRight, ArrowUpRight } from "../Icons";

export function ProjectsPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <>
      <section className="wrap pt-[calc(var(--nav-h)+8vh)] pb-16 md:pb-24" data-theme="dark">
        <div className="grid-12 gap-y-8 items-end">
          <h1 className="t-h1 col-span-12 md:col-span-7" data-reveal>
            {t.projectsPage.title}
          </h1>
          <p className="t-lead col-span-12 md:col-span-4 md:col-start-9 max-w-[30ch] text-[color:var(--fg-2)]" data-reveal>
            {t.projectsPage.intro}
          </p>
        </div>
      </section>

      <section className="wrap pb-24 md:pb-32" data-theme="dark">
        <ol className="grid gap-y-20 md:gap-y-32">
          {projects.map((p, i) => {
            const c = p.copy[lang];
            const href = projectPath(lang, p.slug[lang]);
            const flip = i % 2 === 1;
            return (
              <li key={p.id} className="grid-12 gap-y-6 items-end">
                <div className={`col-span-12 md:col-span-8 ${flip ? "md:col-start-5 md:order-2" : ""}`} data-reveal>
                  <Link href={href} className="show__frame block" data-cursor="view" data-cursor-label={t.cursor.project} aria-label={`${t.projects.view}: ${projectName(p, lang)}`}>
                    <span className="show__slide" data-active="true">
                      <Picture image={p.images.cover} alt="" sizes="(min-width: 768px) 66vw, 100vw" priority={i === 0} />
                      <Picture image={p.images.hover} alt="" sizes="(min-width: 768px) 66vw, 100vw" className="alt" />
                    </span>
                  </Link>
                </div>
                <div className={`col-span-12 md:col-span-4 grid gap-4 ${flip ? "md:order-1" : ""}`} data-reveal>
                  <p className="t-label">
                    0{i + 1} · {c.sector}
                  </p>
                  <h2 className="t-h3">{projectName(p, lang)}</h2>
                  <p className="t-body max-w-[30ch]">{c.tagline}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link href={href} className="btn btn--solid">
                      {t.projects.view} <ArrowRight size={16} />
                    </Link>
                    <a href={p.url} target="_blank" rel="noopener" className="btn">
                      {t.projects.visit} <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
