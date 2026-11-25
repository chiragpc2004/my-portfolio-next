import { R, Scribble } from "@/components/notebook";

const index = [
  { no: "01", label: "Field log", href: "#field-log", ready: true },
  { no: "02", label: "Experiments", href: "#projects", ready: true },
  { no: "03", label: "Product Lab", href: null, ready: false },
  { no: "04", label: "Scratch pages", href: null, ready: false },
  { no: "05", label: "Leave a note", href: "#contact", ready: true },
];

const timeline = [
  { when: "2022", what: "BTech, Data Science & Engineering", where: "Manipal Institute of Technology" },
  { when: "Jun 2025", what: "AI intern", where: "Pinnacle Labs" },
  { when: "Jan 2026", what: "SDET intern", where: "Jar" },
  { when: "Jul 2026", what: "SDET-1, full time", where: "Jar" },
  { when: "Nov 2026", what: "Top Fellow", where: "NextLeap PM Fellowship" },
];

export default function Cover() {
  return (
    <section id="home" aria-labelledby="cover-title" className="pt-[calc(var(--nav-h)+2.5rem)] pb-16 sm:pb-24">
      <div className="mx-auto max-w-[76rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Title page */}
          <div className="lg:col-span-7">
            <p data-reveal className="font-mono text-small text-muted tracking-wide">
              Notebook No. 1 &middot; 2022&ndash;2026
            </p>
            <h1 id="cover-title" data-reveal style={R(1)} className="mt-5 font-display text-display font-medium tracking-[-0.035em]">
              Chirag P C
            </h1>
            <div data-reveal style={R(2)} className="mt-4">
              <p className="text-lead">
                SDET at Jar. <span className="italic">Aspiring product manager.</span>
              </p>
              <Scribble className="mt-1 w-[min(19rem,80%)]" />
            </div>
            <p data-reveal style={R(3)} className="mt-8 max-w-[38ch] text-lead text-muted">
              I spend my days on the paths users take and the ones they shouldn&apos;t be able to. This notebook is where I
              bring that habit to product problems: a hypothesis, the evidence, a build, and an honest check.
            </p>
          </div>

          {/* Taped-in photo and the index */}
          <div className="lg:col-span-5 flex flex-col gap-10 sm:flex-row lg:flex-col lg:items-end">
            <div data-reveal style={R(2)} className="shrink-0">
            <figure className="relative w-[13.5rem] shrink-0 rotate-[2.5deg] bg-white p-3 pb-10 shadow-[0_1px_2px_rgb(0_0_0/0.12),0_8px_24px_-8px_rgb(0_0_0/0.25)] dark:bg-[#f1ede2]">
              <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-[#e9dfb8]/80" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/chirag.jpg"
                width={460}
                height={460}
                alt="Chirag P C, in a dark suit and white shirt"
                className="aspect-square w-full object-cover object-[50%_20%] sepia-[0.15]"
              />
              <figcaption className="absolute inset-x-3 bottom-2 font-hand text-[1.25rem] leading-none text-[#1a2132]">
                Chirag, 2026
              </figcaption>
            </figure>
            </div>

            <nav data-reveal style={R(3)} aria-label="Contents" className="w-full max-w-[20rem]">
              <p className="font-mono text-small uppercase tracking-[0.14em] text-muted">Contents</p>
              <ol className="mt-3 border-t border-ink/15">
                {index.map((item) => (
                  <li key={item.no} className="border-b border-ink/15">
                    {item.href ? (
                      <a href={item.href} className="group flex items-baseline gap-4 py-2.5 hover:text-accent transition-colors duration-200">
                        <span className="font-mono text-small text-muted">{item.no}</span>
                        <span className="flex-1">{item.label}</span>
                        <span aria-hidden="true" className="font-mono text-small text-muted group-hover:translate-x-0.5 transition-transform">
                          &rarr;
                        </span>
                      </a>
                    ) : (
                      <span className="flex items-baseline gap-4 py-2.5 text-muted">
                        <span className="font-mono text-small">{item.no}</span>
                        <span className="flex-1">{item.label}</span>
                        <span className="font-hand text-[1.125rem] text-pen">being written</span>
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>

        {/* Timeline: the trajectory in one line */}
        <div data-reveal style={R(4)} className="mt-16 sm:mt-20">
          <h2 className="sr-only">Timeline</h2>
          <ol className="relative grid gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            <span aria-hidden="true" className="absolute left-[5px] top-2 bottom-2 w-px bg-ink/25 lg:left-0 lg:right-0 lg:top-[5px] lg:bottom-auto lg:h-px lg:w-auto sm:hidden lg:block" />
            {timeline.map((t) => (
              <li key={t.when} className="relative pl-6 lg:pl-0 lg:pt-6">
                <span aria-hidden="true" className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-ink bg-ground lg:top-0" />
                <p className="font-mono text-small text-muted">{t.when}</p>
                <p className="mt-1 leading-snug">{t.what}</p>
                <p className="text-small text-muted leading-snug">{t.where}</p>
              </li>
            ))}
            <li className="relative pl-6 lg:pl-0 lg:pt-6">
              <span aria-hidden="true" className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-dashed border-pen bg-ground lg:top-0" />
              <p className="font-mono text-small text-pen">Next</p>
              <p className="mt-1 font-hand text-[1.5rem] leading-[1.05] text-pen">APM, Associate PM or AI PM</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
