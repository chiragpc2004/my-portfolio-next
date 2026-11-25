import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Chirag P C · SDET at Jar, aspiring product manager",
  description:
    "Chirag P C is an SDET at Jar and a NextLeap Top Fellow moving into product. Two product case studies, seven teardowns and PRDs, and the journey behind them.",
};

// Runs before paint: marks JS as available (for reveal animations) and applies
// the saved or system theme so the page never flashes the wrong colours.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');var dark=false;try{var t=localStorage.getItem('theme');dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;}catch(e){}if(dark)d.classList.add('dark');})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="bg-ground text-ink font-sans text-body antialiased">{children}</body>
    </html>
  );
}
