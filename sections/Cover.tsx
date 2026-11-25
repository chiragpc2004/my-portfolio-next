import { Monument, R } from "@/components/ui";

const corner = "text-small text-muted hover:text-ink transition-colors duration-200 inline-flex items-center h-11";

export default function Cover() {
  return (
    <section id="home" aria-labelledby="cover-title" className="relative">
      <div className="wrap relative flex min-h-[100svh] flex-col pt-[calc(var(--nav-h)+0.5rem)] pb-0 md:pb-6">
        {/* Top-left: who this is and the one action. The nav holds the top-right corner. */}
        <div className="order-2 mt-6 md:order-1 md:mt-0">
          <p data-reveal style={R(1)} className="max-w-[30ch] text-lead">
            SDET at Jar and aspiring product manager. Two product case studies, seven teardowns and PRDs, and the builds
            behind them.
          </p>
          <a
            data-reveal
            style={R(2)}
            href="#projects"
            className="mt-5 flex h-12 w-full items-center justify-center bg-ink px-6 text-ground transition-[background-color,transform] duration-200 hover:bg-accent active:scale-[0.98] md:inline-flex md:w-auto"
          >
            See the projects
          </a>
        </div>

        {/* The name, across the middle, margin to margin. */}
        <div className="order-1 mt-[6svh] md:order-2 md:my-auto md:py-10">
          <div className="monument-leave">
            <Monument as="h1" id="cover-title" label="Chirag P C" rise />
          </div>
        </div>

        {/* Phone only: the first screen ends in the work, not empty paper. */}
        <div className="order-3 mt-8 -mx-[var(--gutter)] md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work/gr1-app.webp"
            width={600}
            height={1296}
            alt="GR-1, the Keep SIP Active assistant, open on a phone and explaining a missed SIP payment."
            className="aspect-[4/5] w-full object-cover object-top bg-surface"
          />
        </div>

        {/* Bottom corners: what the work is, and where to find more. */}
        <div className="order-4 hidden items-end justify-between gap-6 md:flex">
          <p data-reveal style={R(3)} className="text-body">
            SDET at Jar &middot; NextLeap PM Fellowship, Top Fellow
          </p>
          <ul data-reveal style={R(4)} className="flex gap-5">
            <li>
              <a className={corner} href="https://github.com/chiragpc2004" target="_blank" rel="noopener noreferrer">
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className={corner} href="https://www.linkedin.com/in/chiragpc2004" target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className={corner} href="#contact">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
