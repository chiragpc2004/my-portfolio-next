const R = (i: number) => ({ "--i": i }) as React.CSSProperties;

const stack = [
  { title: "Languages", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
  { title: "Machine learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Matplotlib"] },
  { title: "Web", items: ["React", "Tailwind CSS", "FastAPI", "Node.js"] },
  { title: "Shipping", items: ["Git", "Docker", "Supabase", "Render", "Vercel"] },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="min-h-svh snap:h-screen bg-ground text-ink pt-[calc(var(--nav-h)+0.5rem)] pb-5 sm:pb-8"
    >
      <div className="mx-auto max-w-[88rem] h-full px-5 sm:px-8">
        {/* Inset panel: one tone step up from the ground */}
        <div className="h-full bg-surface overflow-hidden grid lg:grid-cols-12 lg:gap-8">
          {/* Left: the statement and the person */}
          <div className="lg:col-span-5 flex flex-col px-6 pt-12 sm:px-12 sm:pt-12 lg:pl-14 lg:pr-0 lg:pt-14">
            <h2 id="about-title" data-reveal className="font-display font-semibold uppercase text-head">
              Notebook to product
            </h2>
            {/* Shaped portrait: an arch, cropped by the panel's bottom edge */}
            <div
              data-reveal
              style={R(2)}
              className="order-last lg:order-none mt-12 lg:mt-auto w-[72%] max-w-[22rem] lg:w-[78%] aspect-[4/5] lg:aspect-auto lg:h-[min(58%,26rem)] overflow-hidden rounded-t-full bg-surface-2 self-start"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/chirag.jpg"
                width={460}
                height={460}
                loading="lazy"
                alt="Chirag P C, in a dark suit and white shirt"
                className="h-full w-full object-cover object-[50%_20%] grayscale brightness-[0.82] contrast-[1.05]"
              />
            </div>
          </div>

          {/* Right: what and how, then the toolbox */}
          <div className="lg:col-span-6 lg:col-start-7 px-6 py-12 sm:px-12 lg:pl-0 lg:pr-14 lg:py-14 flex flex-col gap-12 lg:justify-between">
            <div className="grid gap-8 max-w-[44ch]">
              <div data-reveal style={R(1)}>
                <h3 className="text-lead text-ink">What I do</h3>
                <p className="mt-3 text-muted">
                  I&apos;m Chirag, a machine learning engineer and full stack developer. I take a model from training data to
                  an interface someone can use, and I care about both halves equally.
                </p>
              </div>
              <div data-reveal style={R(2)}>
                <h3 className="text-lead text-ink">How I work</h3>
                <p className="mt-3 text-muted">
                  Start with the simplest model that answers the question and measure it honestly. Then build the API and
                  the React front end around it, so anyone can try it in a browser.
                </p>
              </div>
            </div>

            <div data-reveal style={R(3)}>
              <h3 className="text-lead text-ink">Tools I use</h3>
              <dl className="mt-5 grid grid-cols-2 gap-x-8 gap-y-6">
                {stack.map((group) => (
                  <div key={group.title}>
                    <dt className="text-small font-medium text-ink">{group.title}</dt>
                    <dd className="mt-1 text-small text-muted leading-relaxed">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
