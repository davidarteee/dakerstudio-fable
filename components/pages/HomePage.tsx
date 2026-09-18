import { getDict } from "@/content/dictionary";
import { site } from "@/content/site";
import { SITE_URL, type Lang } from "@/lib/i18n";
import { Hero } from "../home/Hero";
import { About } from "../home/About";
import { Services } from "../home/Services";
import { ProjectsShowcase } from "../home/ProjectsShowcase";
import { Process } from "../home/Process";
import { Testimonials } from "../home/Testimonials";
import { Faq } from "../home/Faq";
import { Cta } from "../home/Cta";

export function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo-192.png`,
    email: site.email,
    sameAs: [site.instagram.url],
    founder: site.people.map((p) => ({ "@type": "Person", name: p.fullName })),
    areaServed: "ES",
    knowsLanguage: ["ca", "es"],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero t={t} />
      <About lang={lang} t={t} />
      <Services lang={lang} t={t} />
      <ProjectsShowcase lang={lang} t={t} />
      <Process t={t} />
      <Testimonials />
      <Faq lang={lang} t={t} />
      <Cta lang={lang} t={t} />
    </>
  );
}
