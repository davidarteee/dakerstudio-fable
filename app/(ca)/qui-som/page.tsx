import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta("ca", "about");

export default function Page() {
  return <AboutPage lang="ca" />;
}
