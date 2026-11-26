import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProject, getProjects } from "@/lib/work";
import Cover from "@/components/covers/Cover";
import Contact from "@/components/Contact";
import { mdxComponents } from "@/components/mdx";
import { Reveal, SplitText } from "@/components/motion";
import CoverReveal from "@/components/CoverReveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = getProject(slug);
  if (!found) return {};
  return { title: found.project.title, description: found.project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const found = getProject(slug);
  if (!found) notFound();
  const { project: p, next } = found;

  return (
    <>
      <article data-theme="light" className="cols">
        <header className="p-hero">
          <Reveal as="p" className="p-kicker" y={12}>
            {p.type}
            {p.context ? ` · ${p.context}` : ""}
          </Reveal>
          <SplitText text={p.title} as="h1" className="display p-title" stagger={0.018} />
        </header>

        <CoverReveal>
          <Cover cover={p.cover} priority />
        </CoverReveal>

        {p.stats.length > 0 && (
          <div className="p-stats">
            {p.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <p className="display p-stat-v">{s.value}</p>
                <p className="p-stat-l">{s.label}</p>
              </Reveal>
            ))}
          </div>
        )}

        <div className="p-body">
          <div className="prose">
            <MDXRemote source={p.body} components={mdxComponents} options={{ blockJS: false }} />
          </div>
          <aside className="p-aside" aria-label="Project facts">
            <h2 className="display">The project</h2>
            <div>
              <p className="label">Year</p>
              <p>{p.year}</p>
            </div>
            <div>
              <p className="label">Role</p>
              <p>{p.role}</p>
            </div>
            <div>
              <p className="label">Type</p>
              <p>{p.type}</p>
            </div>
            {p.tools.length > 0 && (
              <div>
                <p className="label">Tools</p>
                <p>{p.tools.join(", ")}</p>
              </div>
            )}
            {!p.confidential && p.links.length > 0 && (
              <div>
                <p className="label">Links</p>
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    {l.label}{"\u00a0"}↗<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>

        <Link href={`/work/${next.slug}`} className="p-next" data-cursor="view">
          <span className="q">Next?</span>
          <span>
            {next.title} <span className="arrow-big" aria-hidden="true">→</span>
          </span>
        </Link>
        <div style={{ height: 96 }} />
      </article>
      <Contact />
    </>
  );
}
