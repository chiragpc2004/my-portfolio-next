import "./globals.css";
import type { Metadata } from "next";
import { Onest, Unbounded } from "next/font/google";

// Display: a wide, constructed face used only for the name and headings.
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-display",
  display: "swap",
});

// Text: a clean grotesk for everything people actually read.
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chirag P C · Machine learning engineer",
  description:
    "Chirag P C trains machine learning models and builds the products around them. Selected work, résumé and contact.",
};

// Runs before paint: marks JS as available (for reveal animations) and applies
// the saved or system theme so the page never flashes the wrong colours.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');var dark=true;try{var t=localStorage.getItem('theme');dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;}catch(e){}if(dark)d.classList.add('dark');})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${onest.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="bg-ground text-ink font-sans text-body antialiased">{children}</body>
    </html>
  );
}
