import Image from "next/image";
import { site } from "@/content/site";
import { journey } from "@/content/journey";
import { DrawRule, Reveal, ScrollRevealText, SplitText } from "./motion";

export default function Journey() {
  return (
    <section id="journey" data-theme="light" aria-label="About me">
      <div className="intro cols">
        <Reveal className="intro-photo">
          <Image src="/portrait.jpg" alt={`Portrait of ${site.name}`} width={460} height={460} priority={false} />
        </Reveal>
        <ScrollRevealText className="intro-text" text={site.intro} muted={site.introMuted} />
      </div>

      <div className="journey cols">
        <SplitText text="Journey" className="display section-head" />
        <ol>
          {journey.map((j, i) => (
            <li key={j.title} className="j-row">
              <DrawRule delay={i * 0.08} />
              <Reveal as="p" className="j-when" delay={0.1}>
                {j.when}
              </Reveal>
              <Reveal delay={0.15}>
                <h3 className="j-title">
                  {i + 1}. {j.title}
                  {j.current ? <> <span className="now-tag">Now</span></> : null}
                </h3>
                <p className="j-org">{j.org}</p>
              </Reveal>
              <Reveal as="p" className="j-blurb" delay={0.22}>
                {j.blurb}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
