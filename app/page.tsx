import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Servicios } from "./components/Servicios";
import { Exitos } from "./components/Exitos";
import { SobreNosotros } from "./components/SobreNosotros";
import { Testimonios } from "./components/Testimonios";
import { Blog } from "./components/Blog";
import { CTAFinal } from "./components/CTAFinal";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Servicios />
        <Exitos />
        <SobreNosotros />
        <Testimonios />
        <Blog />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
