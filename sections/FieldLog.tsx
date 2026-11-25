import { R } from "@/components/ui";

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
    award: "Rocketeer of the Month, for consistent work through the quarter.",
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
    role: "BTech, Data Science & Engineering, Manipal Institute of Technology",
    body: ["Where the habit started: state the question, look at the data, and measure the answer honestly."],
    note: { label: "Also", text: "Top 10 at the M# Hackathon." },
  },
];

const timeline = [
  { when: "2022", what: "BTech, Data Science & Engineering", where: "Manipal Institute of Technology" },
  { when: "Jun 2025", what: "AI intern", where: "Pinnacle Labs" },
  { when: "Jan 2026", what: "SDET intern", where: "Jar" },
  { when: "Jul 2026", what: "SDET-1, full time", where: "Jar" },
  { when: "Nov 2026", what: "Top Fellow", where: "NextLeap PM Fellowship" },
];

export default function FieldLog() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Pinned: the title and the portrait stay while the stops pass beside them. */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <h2 id="journey-title" data-reveal className="font-display text-display">
              Journey
            </h2>
            <p data-reveal style={R(1)} className="mt-6 max-w-[34ch] text-lead">
              Where I&apos;ve worked and studied, newest first, and what each stop was actually for.
            </p>
            <figure data-reveal style={R(2)} className="mt-10 w-[min(100%,22rem)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/chirag.jpg"
                width={460}
                height={460}
                loading="lazy"
                alt="Chirag P C, in a dark suit and white shirt"
                className="aspect-[4/5] w-full object-cover object-[50%_18%] grayscale"
              />
              <figcaption className="mt-3 text-small text-muted">Chirag P C, 2026</figcaption>
            </figure>
          </div>
        </div>

        <div className="lg:col-span-8 lg:pt-4">
          {/* The trajectory in one panel, ending in the role I'm moving towards. */}
          <ol data-reveal className="grid gap-x-6 gap-y-7 bg-surface p-6 sm:grid-cols-3 sm:p-8">
            {timeline.map((t) => (
              <li key={t.when}>
                <p className="text-small text-muted tabular-nums">{t.when}</p>
                <p className="mt-1 font-medium leading-snug">{t.what}</p>
                <p className="text-small text-muted leading-snug">{t.where}</p>
              </li>
            ))}
            <li>
              <p className="text-small font-medium">Next</p>
              <p className="mt-1 font-display text-lead leading-[1.1]">APM, Associate PM or AI PM</p>
            </li>
          </ol>

          <ol className="mt-6">
            {entries.map((e) => (
              <li key={e.dates + e.place} className="grid gap-5 py-12 sm:grid-cols-8 sm:gap-6">
                <div data-reveal className="sm:col-span-3">
                  <h3 className="font-display text-head">{e.short ?? e.place}</h3>
                  <p className="mt-3">{e.role}</p>
                  <p className="text-muted tabular-nums">{e.dates}</p>
                </div>

                <div data-reveal style={R(1)} className="grid content-start gap-4 sm:col-span-5 sm:pt-7">
                  {e.body.map((p) => (
                    <p key={p} className="max-w-[56ch]">
                      {p}
                    </p>
                  ))}
                  {e.tools ? <p className="text-small text-muted">{e.tools}</p> : null}
                  {e.note || e.award ? (
                    <dl className="mt-2 grid gap-3 bg-surface p-5">
                      {e.note ? (
                        <div>
                          <dt className="text-small text-muted">{e.note.label}</dt>
                          <dd className="mt-0.5 font-medium">{e.note.text}</dd>
                        </div>
                      ) : null}
                      {e.award ? (
                        <div>
                          <dt className="text-small text-muted">Award</dt>
                          <dd className="mt-0.5 font-medium">{e.award}</dd>
                        </div>
                      ) : null}
                    </dl>
                  ) : null}
                  {e.link ? (
                    <a
                      href={e.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-1 py-1 underline decoration-ink/30 underline-offset-[5px] hover:decoration-ink transition-[text-decoration-color]"
                    >
                      {e.link.label} &#8599;<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
