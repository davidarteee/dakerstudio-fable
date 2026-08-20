import type { Metadata } from "next";
import { SobreNosotros } from "../components/SobreNosotros";
import { CTABanner } from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Sobre nosotros — Daker Studio",
  description:
    "Conoce a David Arté e Iker Fuentes, fundadores de Daker Studio, agencia de marketing digital.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      <SobreNosotros />
      <CTABanner />
    </>
  );
}
