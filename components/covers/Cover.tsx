"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Cover as CoverT } from "@/lib/work";

const ease = [0.22, 1, 0.36, 1] as const;

function AgentCover() {
  const tests = ["GET /balance returns 200", "Rejects an expired token", "Handles an empty body", "Schema matches the contract"];
  return (
    <div className="agent" role="img" aria-label="Diagram: an API spec goes into the agent, which writes test cases">
      <div className="agent-box">
        <p className="agent-k">In</p>
        <p className="agent-v">API spec</p>
        <div className="agent-lines">
          <span style={{ width: "90%" }} />
          <span style={{ width: "70%" }} />
          <span style={{ width: "80%" }} />
        </div>
      </div>
      <div className="agent-wire" />
      <div className="agent-box mid">
        <p className="agent-k">Agent, built with Claude Code</p>
        <p className="agent-v">Reads, plans, writes</p>
        <div className="agent-lines">
          <span style={{ width: "85%" }} />
          <span style={{ width: "60%" }} />
        </div>
      </div>
      <div className="agent-wire b" />
      <div className="agent-box">
        <p className="agent-k">Out</p>
        <p className="agent-v">Test cases</p>
        <div className="agent-tests">
          {tests.map((t, i) => (
            <div className="agent-test" key={t}>
              <i style={{ ["--i" as string]: i }} />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeachableCover() {
  const rows = [
    { name: "Setosa", imgs: 14, pct: 8 },
    { name: "Versicolor", imgs: 11, pct: 87 },
    { name: "Virginica", imgs: 12, pct: 5 },
  ];
  return (
    <div className="tm" role="img" aria-label="Redrawn training screen: three classes trained in the browser, predicting live">
      <div className="tm-head">
        <span>Your model · 3 classes · trained in the browser</span>
        <span>Live</span>
      </div>
      {rows.map((r, i) => (
        <div className="tm-row" key={r.name}>
          <div className="tm-name">
            {r.name}
            <small>{r.imgs} images</small>
          </div>
          <div className={`tm-bar${r.pct > 50 ? " win" : ""}`}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: r.pct / 100 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 1.4, ease, delay: 0.2 + i * 0.12 }}
            />
          </div>
          <span className="tm-pct">{r.pct}%</span>
        </div>
      ))}
      <div className="tm-thumbs" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} style={{ opacity: 1 - i * 0.08 }} />
        ))}
      </div>
    </div>
  );
}

/** The visual for a project: shared by the carousel slide and the project page. */
export default function Cover({ cover, priority }: { cover: CoverT; priority?: boolean }) {
  return (
    <div className="slide-visual" style={{ background: cover.stage }}>
      {cover.kind === "phones" && (
        <div className="phones" data-n={cover.images.length}>
          {cover.images.map((img, i) => (
            <Image
              key={img.src}
              className="phone-shot"
              src={img.src}
              alt={img.alt}
              width={796}
              height={1720}
              sizes="(max-width: 900px) 40vw, 22vw"
              priority={priority && i === 1}
            />
          ))}
        </div>
      )}
      {cover.kind === "image" && (
        <Image className="cover-img" src={cover.image.src} alt={cover.image.alt} width={1600} height={1000} sizes="80vw" />
      )}
      {cover.kind === "custom" && cover.name === "agent" && <AgentCover />}
      {cover.kind === "custom" && cover.name === "teachable" && <TeachableCover />}
    </div>
  );
}
