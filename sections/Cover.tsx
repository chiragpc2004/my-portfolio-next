import { R } from "@/components/ui";
import { now } from "@/content/journey";

export default function Cover() {
  return (
    <header id="home" className="relative overflow-hidden">
      {/* The colour the glass floats over. */}
      <div aria-hidden="true" className="absolute inset-0 -z-0">
        <span className="wash left-[50%] top-[18%] h-[26rem] w-[26rem] bg-[rgb(var(--wash-1))]" />
        <span className="wash left-[70%] top-[42%] h-[22rem] w-[22rem] bg-[rgb(var(--wash-2))]" />
        <span className="wash left-[38%] top-[55%] h-[18rem] w-[18rem] bg-[rgb(var(--wash-3))]" />
      </div>

      <div className="wrap relative grid items-center gap-14 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:grid-cols-2 lg:gap-10">
        <div>
          {now ? (
            <p data-reveal className="glass inline-flex items-center gap-2.5 rounded-full py-1 pl-1 pr-4 text-small text-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/chirag.jpg" alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover object-[50%_20%]" />
              <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-signal shadow-[0_0_0_3px_rgb(var(--signal)/0.2)]" />
              <span>
                Currently <span className="font-medium text-ink">{now.title ?? now.role} at {now.place}</span>
              </span>
            </p>
          ) : null}
          <h1 data-reveal style={R(1)} className="mt-6 max-w-[16ch] text-display font-semibold tracking-[-0.04em] leading-[1.05] text-balance">
            Hi, I&apos;m Chirag. I like finding out why products break, and building ones that don&apos;t.
          </h1>
          <p data-reveal style={R(2)} className="mt-5 max-w-[34rem] text-lead text-muted">
            I test software for a living and spend the rest of my time on product: research, specs, and small AI products
            that I ship and measure. Next stop, product management.
          </p>
          <div data-reveal style={R(3)} className="mt-8 flex flex-wrap gap-2.5">
            <a href="#projects" className="btn btn-dark">
              See my work
            </a>
            <a href="#contact" className="btn btn-light">
              Say hello
            </a>
          </div>
        </div>

        {/* The work, in the things it runs on. */}
        <a
          href="#gr1"
          data-reveal
          style={R(3)}
          aria-label="Keep SIP Active: jump to the case study"
          className="group relative block h-[20rem] sm:h-[26rem] lg:h-[28rem]"
        >
          <div className="browser absolute left-0 top-[8%] w-[86%] transition-transform duration-500 ease-out group-hover:-translate-y-1">
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <span>nextleap-groww-mvp.vercel.app/#quality</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/work/gr1-quality.webp" width={1600} height={1000} alt="The GR-1 quality report, showing 32 test questions and a run with 30 of 32 cases passed." className="block w-full" />
          </div>
          <div className="phone absolute right-0 top-0 w-[34%] transition-transform duration-500 ease-out group-hover:-translate-y-2">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/work/gr1-app.webp" width={600} height={1296} alt="The GR-1 assistant open on a phone." className="h-full w-full object-cover object-top" />
            </div>
          </div>
          <div className="glass absolute bottom-[4%] left-[5%] rounded-xl px-4 py-2.5">
            <p className="text-lead font-semibold leading-tight tracking-[-0.02em]">30 / 32</p>
            <p className="text-small text-muted">eval cases passed</p>
          </div>
        </a>
      </div>
    </header>
  );
}
