import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { fetchReadme } from "@/app/lib/github";
import ProjectDetailContent from "./ProjectDetailContent";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.name} — Muhammad Wildan Hatami`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  // Fetch README from GitHub (returns null for private repos)
  const readme = project.githubRepo
    ? await fetchReadme(project.githubRepo)
    : null;

  return <ProjectDetailContent project={project} readme={readme} />;
}
