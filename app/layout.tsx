import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { site } from "@/content/site";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import MotionRoot from "@/components/MotionRoot";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-text", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://chiragpc-portfolio.vercel.app"),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: site.title, description: site.description, type: "website" },
};

export const viewport: Viewport = { themeColor: "#0A1430" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`} suppressHydrationWarning>
      <head>
        {/* Play the intro once per session, before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!sessionStorage.getItem('intro')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('is-intro');sessionStorage.setItem('intro','1')}}catch(e){}",
          }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Loader />
        <SmoothScroll />
        <Cursor />
        <Nav />
        <main id="main">
          <MotionRoot>{children}</MotionRoot>
        </main>
      </body>
    </html>
  );
}
