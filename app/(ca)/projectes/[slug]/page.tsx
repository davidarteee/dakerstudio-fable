import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/pages/ProjectPage";
import { findProject, projects } from "@/content/projects";
import { projectMeta } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug.ca }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = findProject("ca", slug);
  return p ? projectMeta("ca", p) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = findProject("ca", slug);
  if (!p) notFound();
  return <ProjectPage lang="ca" project={p} />;
}
