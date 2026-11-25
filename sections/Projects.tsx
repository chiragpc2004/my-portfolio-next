import Carousel from "@/components/Carousel";

type Link = { href: string; label: string };

type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  stats: { value: string; label: string }[];
  steps: { label: string; text: string }[];
  links: Link[];
  /** Phone screens are shown side by side; a wide image fills the panel's media side. */
  media:
    | { kind: "phones"; screens: { src: string; alt: string }[] }
    | { kind: "wide"; src: string; width: number; height: number; alt: string };
  note: { label: string; text: string };
  disclaimer?: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "gr1",
    title: "Keep SIP Active",
    summary:
      "My NextLeap graduation project: raising the share of first-time Groww investors who still have an active SIP 12 months after starting. Research, an AI discovery engine and a shipped AI MVP.",
    stats: [
      { value: "219", label: "stories of stopping, from 7,600 posts" },
      { value: "0", label: "unsafe answers across 7 eval runs" },
      { value: "3", label: "user tests on the live MVP" },
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
    media: {
      kind: "phones",
      screens: [
        { src: "/images/work/gr1-alert.webp", alt: "GR-1 alert on the phone: your SIP is still active, 1,000 rupees didn't go through, pay by 27 Nov." },
        { src: "/images/work/gr1-card.webp", alt: "The GR-1 card: what's happening from Groww's rules, and missed 2 of 3 in a row." },
      ],
    },
    note: { label: "Why it matters to me", text: "The eval is the product. Every answer is tested before anyone sees it." },
    disclaimer: "Independent student case study on public data. Not affiliated with or endorsed by Groww.",
  },
  {
    id: "pol",
    title: "Practice Out Loud",
    summary:
      "A product case study on increasing voice input on ChatGPT mobile in India, from market landscape to user research to a clickable prototype.",
    stats: [
      { value: "65%", label: "held back by people around them" },
      { value: "68%", label: "would try voice for mock interviews" },
      { value: "15→25%", label: "A/B target, weekly voice users" },
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
    media: {
      kind: "wide",
      src: "/images/work/pol-screens.webp",
      width: 1800,
      height: 680,
      alt: "Six annotated phone screens of the Practice Out Loud flow, from a practice nudge in chat to a session summary.",
    },
    note: { label: "Design call", text: "Nothing is scored until you've checked your own transcript." },
    disclaimer: "The survey (N = 34) and interview quotes are simulated, with mentor approval. Market figures are from cited public sources.",
  },
];

const builds: { title: string; text: string; stack: string; link: Link }[] = [
  {
    title: "Teachable Machine",
    text: "Train an image classifier from your own photos, in the browser, in under a minute. Built during my Pinnacle Labs internship.",
    stack: "TensorFlow.js, React, Supabase",
    link: { href: "https://github.com/chiragpc2004/Teachable_Machine", label: "Code" },
  },
  {
    title: "Iris Classifier",
    text: "A full stack ML app: a scikit-learn model on Fisher's 150 flowers, served by FastAPI, with a React front end.",
    stack: "scikit-learn, FastAPI, React",
    link: { href: "https://iris-classifier-one.vercel.app/", label: "Live app" },
  },
  {
    title: "AI Chatbot",
    text: "A conversational assistant on transformer models that holds context across turns, deployed on Streamlit.",
    stack: "Python, Transformers, Streamlit",
    link: { href: "https://chiragchatbot.streamlit.app/", label: "Live app" },
  },
  {
    title: "Image to Story",
    text: "A vision model captions a picture, then a language model turns the caption into a short audio story.",
    stack: "Python, Hugging Face",
    link: { href: "https://github.com/chiragpc2004/Image-to-story", label: "Code" },
  },
];

const out = { target: "_blank", rel: "noopener noreferrer" } as const;

function Slide({ c }: { c: CaseStudy }) {
  return (
    <article id={c.id} aria-labelledby={`${c.id}-title`} className="glass grid content-start gap-7 rounded-[22px] p-5 sm:rounded-[28px] sm:p-8 md:grid-cols-[1fr_1.1fr] md:items-center md:p-9">
      <div className="min-w-0">
        <h3 id={`${c.id}-title`} className="text-[clamp(1.6rem,1.2rem+1.4vw,2.3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          {c.title}
        </h3>
        <p className="mt-3 text-muted">{c.summary}</p>
        <dl className="mt-6 flex flex-wrap gap-x-7 gap-y-4">
          {c.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 max-w-[16ch] text-small text-muted">{s.label}</dt>
              <dd className="text-head font-semibold tabular-nums tracking-[-0.03em]">{s.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-wrap gap-2">
          {c.links.map((l, i) => (
            <a key={l.href} href={l.href} {...out} className={`btn ${i ? "btn-light" : "btn-dark"} !h-9 !px-4 !text-small`}>
              {l.label}
              <span aria-hidden="true" className="opacity-60">&#8599;</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
        <details className="group mt-6 rounded-2xl bg-white/[0.05] px-4 py-3">
          <summary className="cursor-pointer list-none font-medium text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2">
              How I got there
              <span aria-hidden="true" className="text-muted transition-transform duration-200 group-open:rotate-45">+</span>
            </span>
          </summary>
          <dl className="mt-4 grid gap-4">
            {c.steps.map((s) => (
              <div key={s.label}>
                <dt className="font-medium">{s.label}</dt>
                <dd className="mt-0.5 text-muted">{s.text}</dd>
              </div>
            ))}
            <div>
              <dt className="font-medium">{c.note.label}</dt>
              <dd className="mt-0.5 text-muted">{c.note.text}</dd>
            </div>
          </dl>
        </details>
        {c.disclaimer ? <p className="mt-4 text-small text-muted">{c.disclaimer}</p> : null}
      </div>

      {c.media.kind === "phones" ? (
        <div className="order-first flex items-start justify-center gap-3.5 md:order-none">
          {c.media.screens.map((m, i) => (
            <div key={m.src} className={`phone w-[min(46%,13rem)] ${i ? "mt-8" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.src} width={600} height={1205} loading="lazy" alt={m.alt} />
            </div>
          ))}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={c.media.src}
          width={c.media.width}
          height={c.media.height}
          loading="lazy"
          alt={c.media.alt}
          className="order-first block h-auto w-full rounded-2xl bg-white shadow-[0_0_0_1px_rgb(255_255_255/0.15)] md:order-none"
        />
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="pt-10 pb-6 sm:pt-14">
      <Carousel
        title="Projects"
        note="Swipe through. Case studies first, then earlier builds."
        labels={[...caseStudies.map((c) => c.title), "Earlier builds"]}
      >
        {caseStudies.map((c) => (
          <Slide key={c.id} c={c} />
        ))}
        <article id="builds" aria-labelledby="builds-title" className="glass grid content-start gap-7 rounded-[22px] p-5 sm:rounded-[28px] sm:p-8 md:grid-cols-2 md:p-9">
          <div>
            <h3 id="builds-title" className="text-[clamp(1.6rem,1.2rem+1.4vw,2.3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Earlier builds
            </h3>
            <p className="mt-3 text-muted">Where it started: small things I built to learn how models behave once real people use them.</p>
          </div>
          <ul>
            {builds.map((b) => (
              <li key={b.title} className="grid gap-1 pb-6 last:pb-0">
                <p className="font-semibold">{b.title}</p>
                <p className="text-muted">{b.text}</p>
                <p className="text-small text-muted">{b.stack}</p>
                <a href={b.link.href} {...out} className="text-small font-medium text-signal hover:underline underline-offset-4">
                  {b.link.label} &#8599;<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      </Carousel>
    </section>
  );
}
