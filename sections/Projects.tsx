import { ExtButton, R, SectionHead } from "@/components/ui";

type Link = { href: string; label: string };

type CaseStudy = {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  stats: { value: string; label: string }[];
  steps: { label: string; text: string }[];
  links: Link[];
  image: { src: string; width: number; height: number; alt: string; caption: string; tall?: boolean };
  note: { label: string; text: string };
  disclaimer?: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "gr1",
    kicker: "Case study · NextLeap graduation project",
    title: "Keep SIP Active",
    summary:
      "Raising the share of first-time Groww investors who still have an active SIP 12 months after starting. Research, an AI discovery engine and a shipped AI MVP.",
    stats: [
      { value: "7,600", label: "public posts collected and filtered" },
      { value: "30 / 32", label: "eval cases passed on the latest run" },
      { value: "0", label: "unsafe answers across all 7 eval runs" },
    ],
    steps: [
      {
        label: "Problem",
        text: "Many SIPs stop by accident. A salary comes in late, a payment fails, and three misses in a row cancel the SIP. The lighter options exist, but people find them too late.",
      },
      {
        label: "Insight",
        text: "7,600 posts narrowed to 219 first-person stories of stopping, coded by AI and checked against 20 hand-labelled posts. Then 6 interviews.",
      },
      {
        label: "Built",
        text: "GR-1: an assistant that explains what happened and shows every option, best fit first. A rules engine computes every date, code gates handle distress and advice requests before any AI call, and 5 code checks plus an AI reviewer check every answer.",
      },
      {
        label: "Result",
        text: "A 32-question golden set covering everyday, Hinglish, adversarial and wellbeing cases, run live. 3 user tests on the deployed MVP.",
      },
    ],
    links: [
      { href: "https://nextleap-groww-mvp.vercel.app", label: "Open the MVP" },
      { href: "https://nextleap-groww-mvp.vercel.app/#quality", label: "Quality report" },
      { href: "https://nextleap-groww-sip-discovery-engine.vercel.app", label: "Discovery engine" },
      { href: "https://github.com/chiragpc2004/Groww-SIP-GR-1", label: "Code and deck" },
    ],
    image: {
      src: "/images/work/gr1-quality.webp",
      width: 1600,
      height: 1000,
      alt: "The GR-1 quality report page: 32 test questions, 7 checks per answer, 0 unsafe answers allowed, and a run showing 30 of 32 cases passed.",
      caption: "The live quality report. Anyone can rerun all 32 cases.",
    },
    note: { label: "Why it matters to me", text: "The eval is the product. Every answer is tested before anyone sees it." },
    disclaimer: "Independent student case study on public data. Not affiliated with or endorsed by Groww.",
  },
  {
    id: "pol",
    kicker: "Case study · ChatGPT voice in India",
    title: "Practice Out Loud",
    summary:
      "Increasing voice input on ChatGPT mobile in India, from market landscape to user research to a clickable prototype.",
    stats: [
      { value: "65%", label: "held back by people around them" },
      { value: "53%", label: "can't review a message before it sends" },
      { value: "68%", label: "would try voice for mock interviews" },
    ],
    steps: [
      {
        label: "Problem",
        text: "India already talks to its phone, and it's ChatGPT's largest market. Yet few Indian users speak to ChatGPT.",
      },
      {
        label: "Insight",
        text: "For job seekers, the barrier isn't awareness. It's context and control: shared rooms, no way to review before sending, and worry about Hinglish accuracy.",
      },
      {
        label: "Built",
        text: "A private, reviewable voice mock interview inside ChatGPT: English, Hinglish or Hindi, quiet mode with earphones, an editable transcript with unsure words flagged, then feedback.",
      },
      {
        label: "Metric",
        text: "North Star: weekly voice messages from India. The 4-week A/B target takes weekly active voice users among job seekers from 15% to 25%.",
      },
    ],
    links: [
      { href: "https://practice-out-loud.vercel.app", label: "Try the prototype" },
      { href: "https://github.com/chiragpc2004/Practice-Out-Loud", label: "Decks and 3-pager" },
    ],
    image: {
      src: "/images/work/pol-screens.webp",
      width: 1800,
      height: 680,
      alt: "Six annotated phone screens of the Practice Out Loud flow, from a practice nudge in chat to a session summary.",
      caption: "The six-screen flow, from the nudge in chat to the session summary.",
    },
    note: { label: "Design call", text: "Nothing is scored until you've checked your own transcript." },
    disclaimer: "The survey (N = 34) and interview quotes are simulated, with mentor approval. Market figures are from cited public sources.",
  },
];

const builds: { title: string; text: string; stack: string; link: Link }[] = [
  {
    title: "Teachable Machine",
    text: "Train an image classifier from your own photos, in the browser, in under a minute. Built during my Pinnacle Labs internship.",
    stack: "TensorFlow.js · React · Supabase",
    link: { href: "https://github.com/chiragpc2004/Teachable_Machine", label: "Code" },
  },
  {
    title: "Iris Classifier",
    text: "A full stack ML app: a scikit-learn model on Fisher's 150 flowers, served by FastAPI, with a React front end.",
    stack: "scikit-learn · FastAPI · React",
    link: { href: "https://iris-classifier-one.vercel.app/", label: "Live app" },
  },
  {
    title: "AI Chatbot",
    text: "A conversational assistant on transformer models that holds context across turns, deployed on Streamlit.",
    stack: "Python · Transformers · Streamlit",
    link: { href: "https://chiragchatbot.streamlit.app/", label: "Live app" },
  },
  {
    title: "Image to Story",
    text: "A vision model captions a picture, then a language model turns the caption into a short audio story.",
    stack: "Python · Hugging Face",
    link: { href: "https://github.com/chiragpc2004/Image-to-story", label: "Code" },
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-16 sm:py-24">
      <div className="wrap">
        <SectionHead title="Projects" id="projects-title">
          Two product case studies from end to end, then the AI and ML builds that came before them.
        </SectionHead>

        <div className="mt-12 grid gap-6 sm:gap-8">
          {caseStudies.map((c) => (
            <article key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="card overflow-hidden">
              <div data-reveal className="grid gap-6 p-6 sm:p-10 lg:grid-cols-[1fr_20rem] lg:gap-12">
                <div>
                  <p className="text-small text-muted">{c.kicker}</p>
                  <h3 id={`${c.id}-title`} className="mt-2 text-head font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-[38rem] text-lead text-muted">{c.summary}</p>
                </div>
                <div className="flex flex-wrap content-start gap-2 lg:justify-end lg:pt-7">
                  {c.links.map((l) => (
                    <ExtButton key={l.href} href={l.href}>
                      {l.label}
                    </ExtButton>
                  ))}
                </div>
              </div>

              <figure data-reveal style={R(1)} className="px-3 sm:px-4">
                <div className="overflow-hidden rounded-[10px] bg-ink/[0.04] p-[clamp(0.5rem,2.5vw,2.5rem)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image.src}
                    width={c.image.width}
                    height={c.image.height}
                    loading="lazy"
                    alt={c.image.alt}
                    className="w-full h-auto rounded-md shadow-[0_0_0_1px_rgb(var(--line)/0.08),0_12px_32px_-12px_rgb(0_0_0/0.18)]"
                  />
                </div>
                <figcaption className="px-2 pt-3 text-small text-muted">{c.image.caption}</figcaption>
              </figure>

              <dl data-reveal style={R(1)} className="mx-6 sm:mx-10 mt-8 grid gap-6 sm:grid-cols-3">
                {c.stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse">
                    <dt className="mt-1 text-small text-muted max-w-[22ch]">{s.label}</dt>
                    <dd className="text-head font-semibold tabular-nums">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <dl data-reveal style={R(2)} className="grid gap-x-10 gap-y-6 p-6 sm:p-10 sm:grid-cols-2">
                {c.steps.map((s) => (
                  <div key={s.label}>
                    <dt className="font-medium">{s.label}</dt>
                    <dd className="mt-1 text-muted">{s.text}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col gap-2 border-t border-line/[0.07] px-6 py-5 sm:px-10 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <p className="text-small">
                  <span className="text-muted">{c.note.label}: </span>
                  {c.note.text}
                </p>
                {c.disclaimer ? <p className="text-small text-muted sm:max-w-[26rem] sm:text-right">{c.disclaimer}</p> : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <h3 data-reveal className="text-lead font-semibold">Earlier AI and ML builds</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {builds.map((b, i) => (
              <li key={b.title} data-reveal style={R(i % 2)} className="card flex flex-col gap-2 p-6">
                <h4 className="font-semibold">{b.title}</h4>
                <p className="text-muted">{b.text}</p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
                  <p className="text-small text-muted">{b.stack}</p>
                  <ExtButton href={b.link.href}>{b.link.label}</ExtButton>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
