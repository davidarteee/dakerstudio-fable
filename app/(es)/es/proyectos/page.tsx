import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta("es", "projects");

export default function Page() {
  return <ProjectsPage lang="es" />;
}
