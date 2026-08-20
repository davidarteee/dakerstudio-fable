import { Hero } from "./components/Hero";
import { ServiciosTeaser } from "./components/ServiciosTeaser";
import { ExitosTeaser } from "./components/ExitosTeaser";
import { SobreNosotrosTeaser } from "./components/SobreNosotrosTeaser";
import { Testimonios } from "./components/Testimonios";
import { BlogTeaser } from "./components/BlogTeaser";
import { CTABanner } from "./components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiciosTeaser />
      <ExitosTeaser />
      <SobreNosotrosTeaser />
      <Testimonios />
      <BlogTeaser />
      <CTABanner />
    </>
  );
}
