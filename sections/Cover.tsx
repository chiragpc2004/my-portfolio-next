import { R } from "@/components/ui";
import { next, now, studied } from "@/content/journey";

export default function Cover() {
  // All three lines read from content/journey.ts, so a new job updates the hero too.
  const facts = [
    now ? { label: "Now", value: `${now.title ?? now.role} at ${now.place}`, live: true } : null,
    { label: "Next", value: next },
    { label: "Studied", value: `${studied.role.split(",")[0]}, ${studied.short ?? studied.place}` },
  ].filter(Boolean) as { label: string; value: string; live?: boolean }[];

  return (
    <header id="home" className="wrap grid items-center gap-12 pt-28 pb-12 sm:pt-36 sm:pb-16 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
      <div>
        <h1 data-reveal className="max-w-[16ch] text-display font-semibold tracking-[-0.04em] leading-[1.04] text-balance">
          Hi, I&apos;m Chirag. I like finding out why products break, and building ones that don&apos;t.
        </h1>
        <p data-reveal style={R(1)} className="mt-5 max-w-[34rem] text-lead text-muted">
          I test software for a living and spend the rest of my time on product: research, specs, and small AI products
          that I ship and measure. Next stop, product management.
        </p>
        <div data-reveal style={R(2)} className="mt-8 flex flex-wrap gap-2.5">
          <a href="#projects" className="btn btn-dark">
            See my work
          </a>
          <a href="#contact" className="btn btn-light">
            Say hello
          </a>
        </div>
      </div>

      <div data-reveal style={R(2)} className="glass w-full max-w-[26rem] rounded-[32px] p-3.5 lg:ml-auto">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[22px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/chirag.jpg"
            width={460}
            height={460}
            alt="Chirag P C"
            className="h-full w-full object-cover object-[50%_25%] brightness-[0.86] saturate-[0.95]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--signal)/0.1),transparent_35%,rgb(var(--ground)/0.55))]"
          />
        </div>
        <dl className="grid gap-2.5 px-2.5 pt-3.5 pb-1.5">
          {facts.map((f, i) => (
            <div key={f.label} className={`grid grid-cols-[5.5rem_1fr] gap-3 text-[0.92rem] ${i ? "border-t border-line/[0.12] pt-2.5" : ""}`}>
              <dt className="flex items-center gap-2 text-muted">
                {f.live ? <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-signal shadow-[0_0_10px_rgb(var(--signal))]" /> : null}
                {f.label}
              </dt>
              <dd className="font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
