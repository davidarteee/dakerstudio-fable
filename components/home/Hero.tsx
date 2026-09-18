import type { Dictionary } from "@/content/dictionary";
import { accentLast } from "@/lib/accent";
import { ParticleText } from "../ParticleText";
import { ServiceRotator } from "./ServiceRotator";

/**
 * Hero: logo fix de fons (es queda quiet mentre la pàgina passa per sobre),
 * titular serif "Daker Studio" amb partícules, frase serif + tres línies a
 * baix a l'esquerra i la caixa rotadora de serveis a baix a la dreta.
 */
export function Hero({ t }: { t: Dictionary }) {
  return (
    <section className="hero wrap">
      <div className="hero__bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- fons decoratiu, PNG ja optimitzat */}
        <img src="/img/logo-800.png" alt="" width={800} height={800} decoding="async" fetchPriority="high" />
      </div>

      <ParticleText text="Daker Studio" tag="h1" className="hero__title-wrap t-serif" textClassName="hero__h1" radius={0.45} />

      <div className="hero__bottom">
        <div className="hero__left hero__enter">
          <p className="t-serif-md">{accentLast(t.hero.kicker)}</p>
          <ul className="hero__lines" aria-label={t.hero.kicker}>
            {t.hero.lines.map((l) => (
              <li key={l} className="t-label-strong">
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__right hero__enter">
          <ServiceRotator items={t.hero.services} prevLabel={t.hero.prev} nextLabel={t.hero.next} />
        </div>
      </div>
    </section>
  );
}
