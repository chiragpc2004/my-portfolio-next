import { MarginNote, R, SectionHead, Stamp } from "@/components/notebook";

type Entry = {
  dates: string;
  place: string;
  role: string;
  body: string[];
  tools?: string;
  note?: { label: string; text: string };
  stamp?: { title: string; sub: string };
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
    stamp: { title: "Rocketeer of the Month", sub: "First quarter on the team" },
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
    role: "BTech, Data Science & Engineering",
    body: ["Where the habit started: state the question, look at the data, and measure the answer honestly."],
    note: { label: "Also", text: "Top 10 at the M# Hackathon." },
  },
];

export default function FieldLog() {
  return (
    <section id="field-log" aria-labelledby="field-log-title" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[76rem] px-5 sm:px-8">
        <SectionHead no="01" title="Field log" id="field-log-title">
          Where I&apos;ve worked and studied, newest first. The red notes are what I&apos;d point to if you asked what each
          stop was actually for.
        </SectionHead>

        <ol className="mt-14 border-t border-ink/15">
          {entries.map((e, i) => (
            <li
              key={e.dates + e.place}
              data-reveal
              style={R(i % 3)}
              className="grid gap-5 border-b border-ink/15 py-10 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-3">
                <p className="font-mono text-small text-muted">{e.dates}</p>
                <h3 className="mt-2 font-display text-lead font-medium">{e.place}</h3>
                <p className="text-muted">{e.role}</p>
              </div>

              <div className="lg:col-span-5 grid gap-4 content-start">
                {e.body.map((p) => (
                  <p key={p} className="max-w-[52ch]">
                    {p}
                  </p>
                ))}
                {e.tools ? <p className="font-mono text-small text-muted">{e.tools}</p> : null}
                {e.link ? (
                  <a
                    href={e.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 py-1 text-accent underline decoration-accent/30 underline-offset-[5px] hover:decoration-accent transition-[text-decoration-color]"
                  >
                    {e.link.label} &#8599;<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </div>

              <div className="lg:col-span-4 grid gap-5 content-start">
                {e.note ? <MarginNote label={e.note.label}>{e.note.text}</MarginNote> : null}
                {e.stamp ? (
                  <div>
                    <Stamp title={e.stamp.title} sub={e.stamp.sub} />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
