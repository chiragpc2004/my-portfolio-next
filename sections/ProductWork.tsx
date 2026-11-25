import { R, SectionHead } from "@/components/ui";

const REPO = "https://github.com/chiragpc2004/Product-Work/blob/main/";
const pdf = (name: string) => REPO + encodeURIComponent(name);

type Piece = {
  word: string;
  kind: string;
  title: string;
  line: string;
  thumb: string;
  file: string;
  extra?: { label: string; file: string };
};

const pieces: Piece[] = [
  {
    word: "CRED",
    kind: "Teardown",
    title: "CRED: from a monthly ritual to a weekly habit",
    line: "CRED is a membership club with payments as the door. My bet: reward everyday UPI payments on credit cards and restore trust in rewards.",
    thumb: "teardown-cred",
    file: "Teardown - CRED.pdf",
  },
  {
    word: "Rapido",
    kind: "Teardown",
    title: "Rapido: won the captains, next win the riders",
    line: "A driver-first subscription model beat Uber and Ola. Rivals have copied it, so Rapido now has to win on reliability.",
    thumb: "teardown-rapido",
    file: "Teardown - Rapido.pdf",
  },
  {
    word: "Instamart",
    kind: "PRD",
    title: "Instamart Flatmate Cart",
    line: "One shared grocery cart per flat, with each flatmate paying their own share at checkout. One delivery, one fee, nothing to chase.",
    thumb: "prd-instamart-flatmate-cart",
    file: "PRD - Instamart Flatmate Cart.pdf",
    extra: { label: "Wireframes", file: "Wireframes - Instamart Flatmate Cart.pdf" },
  },
  {
    word: "Tata 1mg",
    kind: "PRD",
    title: "Tata 1mg Family Care",
    line: "Manage your parents' medicines from another city: see what they take, get warned before supplies run out, approve refills. No app needed on their side.",
    thumb: "prd-tata-1mg-family-care",
    file: "PRD - Tata 1mg Family Care.pdf",
  },
  {
    word: "Zomato",
    kind: "Data analysis",
    title: "Zomato: Delhi NCR's missing restaurants",
    line: "7,947 listings: 53% of restaurants rated 4.0 or higher don't deliver. About 70 top-rated restaurants in five localities are the highest-value targets.",
    thumb: "data-analysis-zomato-delhi-ncr-delivery-gap",
    file: "Data Analysis - Zomato Delhi NCR Delivery Gap.pdf",
  },
  {
    word: "Quick commerce",
    kind: "Market case",
    title: "Who wins India's quick commerce race?",
    line: "Quick commerce is a business of filling each store with enough orders. A challenger should go deeper in fewer cities.",
    thumb: "market-case-study-india-quick-commerce",
    file: "Market Case Study - India Quick Commerce.pdf",
  },
  {
    word: "UPI",
    kind: "Market case",
    title: "Can anyone break India's UPI duopoly?",
    line: "The duopoly is loosening, not breaking. Challengers win by attaching UPI to something people already want: credit, rewards, chat.",
    thumb: "market-case-study-upi-apps",
    file: "Market Case Study - UPI Apps.pdf",
  },
];

const link =
  "py-1 underline decoration-ink/30 underline-offset-[5px] hover:decoration-ink transition-[text-decoration-color]";

export default function ProductWork() {
  return (
    <section id="product-work" aria-labelledby="product-work-title" className="theme-invert bg-ground text-ink py-24 sm:py-32">
      <div className="wrap">
        <SectionHead title="Product work" id="product-work-title">
          Teardowns, PRDs, market cases and a data analysis. Each one starts with a question and ends with a recommendation.
        </SectionHead>

        <ol className="mt-20 grid gap-16 sm:gap-20">
          {pieces.map((p) => (
            <li key={p.file} className="grid gap-6 lg:grid-cols-12 lg:gap-8">
              <div data-reveal className="lg:col-span-8">
                <a
                  href={pdf(p.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6"
                >
                  <span className="font-display text-display transition-colors duration-200 group-hover:text-accent">{p.word}</span>
                  <span className="shrink-0 text-body text-muted">{p.kind}</span>
                  <span className="sr-only"> PDF (opens in a new tab)</span>
                </a>
                <div className="mt-5 grid gap-2 sm:grid-cols-8 sm:gap-6">
                  <h3 className="font-medium sm:col-span-3">{p.title}</h3>
                  <div className="sm:col-span-5">
                    <p className="text-muted max-w-[54ch]">{p.line}</p>
                    <p className="mt-3 flex gap-6">
                      <a href={pdf(p.file)} target="_blank" rel="noopener noreferrer" className={link}>
                        Read the PDF &#8599;<span className="sr-only"> (opens in a new tab)</span>
                      </a>
                      {p.extra ? (
                        <a href={pdf(p.extra.file)} target="_blank" rel="noopener noreferrer" className={link}>
                          {p.extra.label} &#8599;<span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
              <a
                data-reveal
                style={R(1)}
                href={pdf(p.file)}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="group block self-start overflow-hidden bg-surface lg:col-span-3 lg:col-start-10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/work/${p.thumb}.jpg`}
                  width={413}
                  height={584}
                  loading="lazy"
                  alt=""
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
