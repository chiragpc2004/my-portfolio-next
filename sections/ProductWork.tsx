import { Row } from "@/components/ui";

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

export default function ProductWork() {
  return (
    <Row id="product-work" title="Product work" note="Teardowns, PRDs, market cases and a data analysis">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <p className="max-w-[40rem] text-muted">
          Each one starts with a question and ends with a recommendation. Open any of them to read the PDF.
        </p>
        <a
          href="https://github.com/chiragpc2004/Product-Work"
          target="_blank"
          rel="noopener noreferrer"
          className="text-small font-medium text-signal underline-offset-4 hover:underline"
        >
          All seven on GitHub &#8599;<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      {/* Phones: thumbnail beside the text. Wider screens: a grid of documents. */}
      <ul className="mt-8 grid gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
        {pieces.map((p) => (
          <li key={p.file} className="grid grid-cols-[6rem_1fr] items-start gap-4 sm:block">
            <a href={pdf(p.file)} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="doc block">
              <div className="doc-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/work/${p.thumb}.jpg`} width={413} height={584} loading="lazy" alt="" />
              </div>
            </a>
            <div>
              <p className="text-small text-signal sm:mt-4">{p.kind}</p>
              <a href={pdf(p.file)} target="_blank" rel="noopener noreferrer" className="mt-0.5 block font-medium leading-snug underline-offset-4 hover:underline">
                {p.title}
                <span className="sr-only"> PDF (opens in a new tab)</span>
              </a>
              <p className="mt-1.5 text-muted">{p.line}</p>
              {p.extra ? (
                <a
                  href={pdf(p.extra.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-small font-medium text-signal underline-offset-4 hover:underline"
                >
                  {p.extra.label} &#8599;<span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Row>
  );
}
