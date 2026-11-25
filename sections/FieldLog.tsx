import { R, SectionHead } from "@/components/ui";

type Entry = {
  dates: string;
  place: string;
  short?: string;
  role: string;
  body: string[];
  tools?: string;
  note?: { label: string; text: string };
  award?: string;
  link?: { href: string; label: string };
};

// Facts only. Each line here was confirmed by Chirag; keep it that way.
const entries: Entry[] = [
  {
    dates: "Jul 2026 – now",
    place: "Jar",
    role: "SDET-1, platform pod",
    body: [
      "Full time since July, after converting from my internship. I do manual and automation testing for the platform pod, working in the team's Agile sprints.",
      "Most of my automation is backend API coverage, written in Java with TestNG and Rest Assured.",
    ],
    tools: "Java · TestNG · Rest Assured · Agile",
    note: {
      label: "Beyond the ticket",
      text: "Built an internal AI agent with Claude Code that automates API test work.",
    },
    award: "Rocketeer of the Month",
  },
  {
    dates: "Jan – Jul 2026",
    place: "Jar",
    role: "SDET intern",
    body: [
      "Six months of manual and automation testing with the team, which turned into a full-time offer.",
    ],
    note: { label: "Outcome", text: "Converted to full time in July 2026." },
  },
  {
    dates: "Jul – Nov 2026",
    place: "NextLeap",
    role: "PM Fellowship",
    body: [
      "Five months of product work alongside the job: teardowns, market case studies, PRDs, user research and a shipped AI MVP.",
      "The graduation project took 7,600 public posts about Groww SIPs down to 219 first-person stories, then tested a fix with users.",
    ],
    note: { label: "Outcome", text: "Graduated as a Top Fellow." },
    link: { href: "https://nextleap-groww-mvp.vercel.app", label: "See the graduation MVP" },
  },
  {
    dates: "Jun – Jul 2025",
    place: "Pinnacle Labs",
    role: "AI intern",
    body: [
      "Built Teachable Machine: train an image classifier from your own photos, in the browser, in under a minute.",
    ],
    tools: "TensorFlow.js · React · Supabase",
    note: { label: "Design call", text: "Training runs on the device, so no photo ever has to be uploaded." },
    link: { href: "https://github.com/chiragpc2004/Teachable_Machine", label: "Read the code" },
  },
  {
    dates: "2022 – 2026",
    place: "Manipal Institute of Technology",
    short: "MIT Manipal",
    role: "BTech, Data Science & Engineering",
    body: ["Where the habit started: state the question, look at the data, and measure the answer honestly."],
    note: { label: "Also", text: "Top 10 at the M# Hackathon." },
  },
];

const facts = [
  { label: "Now", value: "SDET-1 at Jar, platform pod" },
  { label: "Studied", value: "BTech, Data Science & Engineering, MIT Manipal" },
  { label: "Recognition", value: "NextLeap Top Fellow · Rocketeer of the Month · M# Hackathon top 10" },
  { label: "Looking for", value: "APM, Associate PM or AI PM roles" },
];

export default function FieldLog() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="py-16 sm:py-24">
      <div className="wrap">
        <SectionHead title="Journey" id="journey-title">
          From data science, to testing products at Jar, to building them. Newest first.
        </SectionHead>

        <div className="mt-12 grid gap-5 lg:grid-cols-[20rem_1fr] lg:gap-6 lg:items-start">
          {/* Who I am, at a glance. Stays in view beside the timeline. */}
          <aside data-reveal className="card p-3 lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/chirag.jpg"
              width={460}
              height={460}
              loading="lazy"
              alt="Chirag P C, in a dark suit and white shirt"
              className="h-28 w-28 rounded-[10px] object-cover object-[50%_20%] sm:h-36 sm:w-36 lg:aspect-square lg:h-auto lg:w-full"
            />
            <div className="px-2 pt-5 pb-3">
              <p className="font-medium">Chirag P C</p>
              <p className="mt-2 text-small text-muted">
                I spend my days on the paths users take and the ones they shouldn&apos;t be able to. I bring that habit to
                product problems: a hypothesis, the evidence, a build, and an honest check.
              </p>
              <dl className="mt-5 grid gap-3.5">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-small text-muted">{f.label}</dt>
                    <dd className="text-small font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <ol className="card relative px-5 py-6 sm:px-8 sm:py-8">
            {/* The line the stops hang from. */}
            <span aria-hidden="true" className="absolute left-[calc(1.25rem+5px)] sm:left-[calc(2rem+5px)] top-10 bottom-10 w-px bg-line/10" />

            <li data-reveal className="relative pl-8 pb-10">
              <span aria-hidden="true" className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-ink/30 bg-card" />
              <p className="text-small text-muted">Next</p>
              <p className="mt-1 text-lead font-medium">APM, Associate PM or AI PM</p>
            </li>

            {entries.map((e, i) => (
              <li key={e.dates + e.place} data-reveal style={R(i % 3)} className="relative pl-8 pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full ${i === 0 ? "bg-signal shadow-[0_0_0_4px_rgb(var(--signal)/0.18)]" : "bg-ink/70"}`}
                />
                <p className="text-small text-muted tabular-nums">{e.dates}</p>
                <h3 className="mt-1 text-lead font-semibold tracking-[-0.015em]">
                  {e.role} <span className="font-normal text-muted">at {e.place}</span>
                </h3>
                <div className="mt-3 grid gap-3 max-w-[40rem]">
                  {e.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {e.tools || e.note || e.award || e.link ? (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {e.note ? (
                      <span className="block rounded-lg bg-ink/[0.05] px-3 py-1.5 text-small">
                        <span className="text-muted">{e.note.label}:&nbsp;</span>
                        {e.note.text}
                      </span>
                    ) : null}
                    {e.award ? (
                      <span className="block rounded-lg bg-ink/[0.05] px-3 py-1.5 text-small">
                        <span className="text-muted">Award:&nbsp;</span>
                        {e.award}
                      </span>
                    ) : null}
                    {e.tools ? <span className="px-1 text-small text-muted">{e.tools}</span> : null}
                    {e.link ? (
                      <a
                        href={e.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-1 text-small font-medium underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                      >
                        {e.link.label} &#8599;<span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
