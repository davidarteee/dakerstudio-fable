import type { Metadata } from "next";
import { Exitos } from "../components/Exitos";
import { Testimonios } from "../components/Testimonios";
import { CTABanner } from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Éxitos — Daker Studio",
  description:
    "Descubre los negocios que ya confiaron en Daker Studio para su presencia digital: Cal Franc y BVS.",
};

export default function ExitosPage() {
  return (
    <>
      <Exitos />
      <Testimonios />
      <CTABanner />
    </>
  );
}
