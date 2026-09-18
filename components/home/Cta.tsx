import Link from "next/link";
import type { Dictionary } from "@/content/dictionary";
import { routes, type Lang } from "@/lib/i18n";
import { Logo3D } from "./Logo3D";
import { CtaText } from "./CtaText";

/** Logo 3D flotant (es pot fer girar arrossegant) darrere d'una frase serif que s'ajunta amb l'scroll, i botó de contacte. */
export function Cta({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <section id="cta" className="cta wrap" data-theme="dark">
      <div className="cta__inner">
        <div className="cta__stage">
          <div data-reveal>
            <Logo3D />
          </div>
          <CtaText left={t.cta.title} right={t.cta.titleAccent} />
        </div>
        <Link href={routes.contact[lang]} className="btn" data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
          {t.cta.button}
        </Link>
      </div>
      <p className="cta__tag t-label-strong">{t.cta.tag}</p>
    </section>
  );
}
