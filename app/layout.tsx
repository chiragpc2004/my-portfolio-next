import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Chirag P C · SDET at Jar, aspiring product manager",
  description:
    "Chirag P C is an SDET at Jar and a NextLeap Top Fellow moving into product. Two product case studies, seven teardowns and PRDs, and the journey behind them.",
};

// Runs before paint: marks JS as available, so reveal animations only hide
// content when they can also show it again.
const bootScript = `document.documentElement.classList.add('js');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="bg-ground text-ink font-sans text-body antialiased">
        <div className="light" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
