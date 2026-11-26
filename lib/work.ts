import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

/**
 * Every project is one file: content/work/<slug>.mdx, with images in public/work/<slug>/.
 * The frontmatter is checked against this schema at build time, so a typo fails the build
 * instead of shipping a broken page.
 */
const image = z.object({ src: z.string(), alt: z.string() });

const cover = z.discriminatedUnion("kind", [
  // One to three phone screenshots, fanned out on a coloured stage.
  z.object({ kind: z.literal("phones"), stage: z.string(), images: z.array(image).min(1).max(3) }),
  // A single wide image (a browser screenshot, a diagram, a photo).
  z.object({ kind: z.literal("image"), stage: z.string(), image }),
  // A drawn visual from components/covers (for work with no screens to show).
  z.object({ kind: z.literal("custom"), stage: z.string(), name: z.enum(["agent", "teachable"]) }),
]);

const frontmatter = z.object({
  title: z.string(),
  summary: z.string(),
  year: z.number().int(),
  role: z.string(),
  type: z.string(),
  context: z.string().optional(),
  featured: z.boolean().default(false),
  order: z.number().default(99),
  tools: z.array(z.string()).default([]),
  confidential: z.boolean().default(false),
  cover,
  links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
  stats: z.array(z.object({ value: z.string(), label: z.string() })).max(3).default([]),
});

export type Cover = z.infer<typeof cover>;
export type Project = z.infer<typeof frontmatter> & { slug: string; body: string };

const DIR = path.join(process.cwd(), "content/work");

let cache: Project[] | null = null;

export function getProjects(): Project[] {
  if (cache) return cache;
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
    const parsed = frontmatter.safeParse(data);
    if (!parsed.success) {
      throw new Error(`content/work/${file} has invalid frontmatter:\n${parsed.error.message}`);
    }
    return { ...parsed.data, slug, body: content };
  });
  cache = projects.sort((a, b) => a.order - b.order || b.year - a.year);
  return cache;
}

export const getFeatured = () => getProjects().filter((p) => p.featured);

export function getProject(slug: string) {
  const all = getProjects();
  const i = all.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return { project: all[i], next: all[(i + 1) % all.length] };
}
