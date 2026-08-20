import type { Metadata } from "next";
import { Servicios } from "../components/Servicios";
import { CTABanner } from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Nuestro servicio — Daker Studio",
  description:
    "Diseñamos páginas web a medida para negocios locales: estrategia, diseño y desarrollo pensados para diferenciarte de la competencia.",
};

export default function NuestroServicioPage() {
  return (
    <>
      <Servicios />
      <CTABanner />
    </>
  );
}
