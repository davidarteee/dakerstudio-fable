import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta("es", "contact");

export default function Page() {
  return <ContactPage lang="es" />;
}
