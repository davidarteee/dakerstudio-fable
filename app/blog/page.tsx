import type { Metadata } from "next";
import { Blog } from "../components/Blog";
import { CTABanner } from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Blog — Daker Studio",
  description:
    "Consejos de marketing digital y estrategia online para negocios locales.",
};

export default function BlogPage() {
  return (
    <>
      <Blog />
      <CTABanner />
    </>
  );
}
