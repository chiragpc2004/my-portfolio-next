import { R, SectionHead } from "@/components/notebook";

const REPO = "https://github.com/chiragpc2004/Product-Work/blob/main/";
const pdf = (name: string) => REPO + encodeURIComponent(name);

type Piece = {
  kind: string;
  title: string;
  line: string;
  thumb: string;
  file: string;
  extra?: { label: string; file: string };
};

const pieces: Piece[] = [
  {
    kind: "Teardown",
    title: "CRED: from a monthly ritual to a weekly habit",
    line: "CRED is a membership club with payments as the door. My bet: reward everyday UPI payments on credit cards and restore trust in rewards.",
    thumb: "teardown-cred",
    file: "Teardown - CRED.pdf",
  },
  {
    kind: "Teardown",
    title: "Rapido: won the captains, next win the riders",
    line: "A driver-first subscription model beat Uber and Ola. Rivals have copied it, so Rapido now has to win on reliability.",
    thumb: "teardown-rapido",
    file: "Teardown - Rapido.pdf",
  },
  {
    kind: "PRD",
    title: "Instamart Flatmate Cart",
    line: "One shared grocery cart per flat, with each flatmate paying their own share at checkout. One delivery, one fee, nothing to chase.",
    thumb: "prd-instamart-flatmate-cart",
    file: "PRD - Instamart Flatmate Cart.pdf",
    extra: { label: "Wireframes", file: "Wireframes - Instamart Flatmate Cart.pdf" },
  },
  {
    kind: "PRD",
    title: "Tata 1mg Family Care",
    line: "Manage your parents' medicines from another city: see what they take, get warned before supplies run out, approve refills. No app needed on their side.",
    thumb: "prd-tata-1mg-family-care",
    file: "PRD - Tata 1mg Family Care.pdf",
  },
  {
    kind: "Data analysis",
    title: "Zomato: Delhi NCR's missing restaurants",
    line: "7,947 listings: 53% of restaurants rated 4.0 or higher don't deliver. About 70 top-rated restaurants in five localities are the highest-value targets.",
    thumb: "data-analysis-zomato-delhi-ncr-delivery-gap",
    file: "Data Analysis - Zomato Delhi NCR Delivery Gap.pdf",
  },
  {
    kind: "Market case",
    title: "Who wins India's quick commerce race?",
    line: "Quick commerce is a business of filling each store with enough orders. A challenger should go deeper in fewer cities.",
    thumb: "market-case-study-india-quick-commerce",
    file: "Market Case Study - India Quick Commerce.pdf",
  },
  {
    kind: "Market case",
    title: "Can anyone break India's UPI duopoly?",
    line: "The duopoly is loosening, not breaking. Challengers win by attaching UPI to something people already want: credit, rewards, chat.",
    thumb: "market-case-study-upi-apps",
    file: "Market Case Study - UPI Apps.pdf",
  },
];

export default function ProductWork() {
  return (
    <section id="product-work" aria-labelledby="product-work-title" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[76rem] px-5 sm:px-8">
        <SectionHead no="03" title="Product work" id="product-work-title">
          Teardowns, PRDs, market cases and a data analysis. Each one starts with a question and ends with a recommendation.
        </SectionHead>

        <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((p, i) => (
            <li key={p.file} data-reveal style={R(i % 3)} className="flex flex-col">
              <a
                href={pdf(p.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-md border border-ink/15 bg-white shadow-[0_14px_30px_-22px_rgb(0_0_0/0.4)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/work/${p.thumb}.jpg`}
                  width={413}
                  height={584}
                  loading="lazy"
                  alt=""
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="sr-only">Open the {p.kind} PDF: {p.title} (opens in a new tab)</span>
              </a>
              <p className="mt-4 font-mono text-small uppercase tracking-[0.12em] text-muted">{p.kind}</p>
              <h3 className="mt-1 font-display text-lead font-medium leading-snug">{p.title}</h3>
              <p className="mt-2 text-muted">{p.line}</p>
              <p className="mt-auto flex gap-6 pt-3">
                <a
                  href={pdf(p.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 text-accent underline decoration-accent/30 underline-offset-[5px] hover:decoration-accent transition-[text-decoration-color]"
                >
                  Read the PDF &#8599;<span className="sr-only"> (opens in a new tab)</span>
                </a>
                {p.extra ? (
                  <a
                    href={pdf(p.extra.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 text-accent underline decoration-accent/30 underline-offset-[5px] hover:decoration-accent transition-[text-decoration-color]"
                  >
                    {p.extra.label} &#8599;<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
