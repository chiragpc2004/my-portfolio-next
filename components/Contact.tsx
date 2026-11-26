import { site } from "@/content/site";
import CopyEmail from "./CopyEmail";
import RollText from "./RollText";
import { Reveal, SplitText } from "./motion";

export default function Contact() {
  return (
    <footer id="contact" className="contact cols dark" data-theme="dark">
      <div className="contact-top">
        <div>
          <SplitText text="Let's talk." className="display contact-h" />
          <Reveal delay={0.2}>
            <p className="contact-lead">A role, a project or a question about my work. I answer every message.</p>
            <div className="contact-actions">
              <a className="btn yellow" href={`mailto:${site.email}`}>
                <RollText>Email me</RollText>
              </a>
              <CopyEmail email={site.email} />
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <ul className="socials">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  <RollText>{`${s.label} ↗`}</RollText>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <div className="foot-row">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Designed and built by me · {site.location}</span>
      </div>
      <SplitText text={site.name} as="p" className="display big-name" stagger={0.04} />
    </footer>
  );
}
