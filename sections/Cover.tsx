import { R, btn } from "@/components/ui";

const featured = [
  {
    href: "#gr1",
    title: "Keep SIP Active",
    line: "AI MVP with a live quality report",
    status: "30 / 32 eval cases passed",
    src: "/images/work/gr1-quality.webp",
    alt: "The GR-1 quality report: 32 test questions, 7 checks per answer and a run with 30 of 32 cases passed.",
    pos: "object-top",
  },
  {
    href: "#pol",
    title: "Practice Out Loud",
    line: "Voice prototype for ChatGPT",
    status: "Clickable prototype",
    src: "/images/work/pol-screens.webp",
    alt: "Annotated phone screens of the Practice Out Loud flow.",
    pos: "object-[0%_50%]",
  },
];

export default function Cover() {
  return (
    <section id="home" aria-labelledby="cover-title" className="pt-[calc(var(--nav-h)+3rem)] sm:pt-[calc(var(--nav-h)+4.5rem)] pb-4 sm:pb-8">
      <div className="wrap">
        <div className="max-w-[52rem]">
          <p data-reveal className="inline-flex items-center gap-2 text-small text-muted">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal" />
            Open to APM, Associate PM and AI PM roles
          </p>
          <h1 id="cover-title" data-reveal style={R(1)} className="mt-5 max-w-[22ch] text-display font-semibold text-balance">
            SDET at Jar, on my way to product management.
          </h1>
          <p data-reveal style={R(2)} className="mt-5 max-w-[40rem] text-lead text-muted">
            I&apos;m Chirag. By day I test Jar&apos;s app and the APIs behind it. For the last five months I&apos;ve also been
            researching, designing and shipping products in the NextLeap PM Fellowship, where I graduated as a Top Fellow.
          </p>
          <div data-reveal style={R(3)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={btn.primary}>
              See the projects
            </a>
            <a href="#journey" className={btn.secondary}>
              Read my journey
            </a>
          </div>
          <p data-reveal style={R(4)} className="mt-10 text-small text-muted">
            Jar <span aria-hidden="true" className="mx-2 text-muted/50">/</span> NextLeap
            <span aria-hidden="true" className="mx-2 text-muted/50">/</span> Pinnacle Labs
            <span aria-hidden="true" className="mx-2 text-muted/50">/</span> MIT Manipal
          </p>
        </div>

        <ul className="mt-14 sm:mt-20 grid gap-4 sm:gap-5 md:grid-cols-[1.35fr_1fr]">
          {featured.map((f, i) => (
            <li key={f.href} data-reveal style={R(i + 3)}>
              <a href={f.href} className="card group flex h-full flex-col p-3 transition-transform duration-300 ease-out hover:-translate-y-0.5">
                <div className="relative overflow-hidden rounded-[10px] bg-ink/[0.04] aspect-[16/10] md:aspect-auto md:h-[clamp(16rem,26vw,22rem)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.src}
                    alt={f.alt}
                    className={`h-full w-full object-cover ${f.pos} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
                  />
                  <span className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-card/95 px-2.5 py-1 text-small shadow-[0_0_0_1px_rgb(var(--line)/0.08)]">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
                    {f.status}
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-2 pt-4 pb-2">
                  <p>
                    <span className="font-medium">{f.title}</span>{" "}
                    <span className="text-muted">{f.line}</span>
                  </p>
                  <span aria-hidden="true" className="text-muted transition-transform duration-300 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
