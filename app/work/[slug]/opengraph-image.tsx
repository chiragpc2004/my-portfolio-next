import { getProject, getProjects } from "@/lib/work";
import { ogContentType, ogSize, projectCard } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Project preview";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = getProject(slug);
  return projectCard(found ? found.project : { title: "My work", summary: "", type: "Project" });
}
