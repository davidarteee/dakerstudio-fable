import type { Metadata } from "next";
import { CTAFinal } from "../components/CTAFinal";

export const metadata: Metadata = {
  title: "Contacto — Daker Studio",
  description:
    "Escríbenos y hablemos de tu proyecto: dakerstudio.team@gmail.com",
};

export default function ContactoPage() {
  return <CTAFinal />;
}
