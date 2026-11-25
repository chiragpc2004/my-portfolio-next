import "./globals.css";
import type { Metadata } from "next";
import { Caveat, IBM_Plex_Mono, Newsreader } from "next/font/google";

// Writing: a bookish serif with optical sizes, for headings and body.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

// Data and labels: dates, numbers, page numbers, tools.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Margin notes only. Never body text.
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chirag P C · SDET at Jar, aspiring product manager",
  description:
    "Chirag P C is an SDET at Jar and a NextLeap Top Fellow moving into product. A field notebook of experiments, teardowns and the work behind them.",
};

// Runs before paint: marks JS as available (for reveal animations) and applies
// the saved or system theme so the page never flashes the wrong colours.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');var dark=false;try{var t=localStorage.getItem('theme');dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;}catch(e){}if(dark)d.classList.add('dark');})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexMono.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="bg-ground text-ink font-sans text-body antialiased">{children}</body>
    </html>
  );
}
