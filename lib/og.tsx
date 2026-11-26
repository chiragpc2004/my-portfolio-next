import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { currentRole } from "@/content/journey";

/** Link-preview cards (WhatsApp, LinkedIn, Slack, X...). 1200x630 is what they all expect. */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const NAVY = "#0A1430";
const PAPER = "#F4F1EA";
const YELLOW = "#FFCF3A";
const MUTED = "#A3ACC2";

async function fonts() {
  const dir = path.join(process.cwd(), "assets/og");
  const [display, displayBold, text] = await Promise.all([
    readFile(path.join(dir, "inter-tight-latin-600-normal.woff")),
    readFile(path.join(dir, "inter-tight-latin-700-normal.woff")),
    readFile(path.join(dir, "inter-latin-400-normal.woff")),
  ]);
  return [
    { name: "Display", data: display, weight: 600 as const, style: "normal" as const },
    { name: "Display", data: displayBold, weight: 700 as const, style: "normal" as const },
    { name: "Text", data: text, weight: 400 as const, style: "normal" as const },
  ];
}

/** Shared frame: navy ground with the hero's aurora light, PC mark, and a footer line. */
function Frame({ children, footer }: { children: React.ReactNode; footer: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 72px",
        background: NAVY,
        backgroundImage: [
          "radial-gradient(55% 80% at 78% 0%, rgba(255,207,58,0.30), rgba(255,207,58,0) 70%)",
          "radial-gradient(45% 90% at 95% 10%, rgba(90,140,255,0.35), rgba(90,140,255,0) 70%)",
          "radial-gradient(40% 70% at 55% 0%, rgba(140,200,255,0.22), rgba(140,200,255,0) 70%)",
        ].join(", "),
        color: PAPER,
        fontFamily: "Text",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{ fontFamily: "Display", fontWeight: 700, fontSize: 40, letterSpacing: -1.5 }}>{site.monogram}</div>
        <div style={{ width: 52, height: 5, background: YELLOW, marginTop: 2 }} />
      </div>
      {children}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(244,241,234,0.18)",
          paddingTop: 24,
          fontSize: 24,
          color: MUTED,
        }}
      >
        <span>{footer}</span>
        <span>chiragpc-portfolio.vercel.app</span>
      </div>
    </div>
  );
}

export async function homeCard() {
  return new ImageResponse(
    (
      <Frame footer={`${currentRole.heroRole ?? currentRole.title} · ${site.location}`}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Display", fontWeight: 600, fontSize: 150, letterSpacing: -7, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", fontSize: 34, lineHeight: 1.35, marginTop: 28, maxWidth: 900, color: PAPER }}>{site.pitch}</div>
        </div>
      </Frame>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}

export async function projectCard(p: { title: string; summary: string; type: string; context?: string }) {
  const long = p.title.length > 18;
  return new ImageResponse(
    (
      <Frame footer={`${site.name} · ${site.tabTitle}`}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, color: YELLOW, marginBottom: 18 }}>
            {p.context && p.context !== p.type ? `${p.type} · ${p.context}` : p.type}
          </div>
          <div
            style={{
              fontFamily: "Display",
              fontWeight: 600,
              fontSize: long ? 104 : 132,
              letterSpacing: long ? -4.5 : -6,
              lineHeight: 1,
              maxWidth: 1050,
              display: "flex",
            }}
          >
            {p.title}
          </div>
          <div
            style={{ fontSize: 30, lineHeight: 1.35, marginTop: 26, maxWidth: 980, color: MUTED, display: "flex" }}
          >
            {p.summary.length > 140 ? `${p.summary.slice(0, 140).replace(/\s+\S*$/, "")}…` : p.summary}
          </div>
        </div>
      </Frame>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}
