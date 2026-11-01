"use client";

import { useId, useMemo, useState } from "react";
import { IRIS } from "./iris-data";
import { SPECIES, type SpeciesIndex } from "./species";

// The two-split decision tree that a depth-2 classifier learns on petal
// measurements of Fisher's Iris data. It classifies 144 of the 150 flowers correctly.
function classify(petalLength: number, petalWidth: number): SpeciesIndex {
  if (petalLength <= 2.45) return 0;
  return petalWidth <= 1.75 ? 1 : 2;
}

const L = { min: 1, max: 7, step: 0.1 };
const W = { min: 0.1, max: 2.5, step: 0.1 };

// Plot geometry (SVG user units)
const PW = 320;
const PH = 200;
const x = (len: number) => ((len - L.min) / (L.max - L.min)) * PW;
const y = (wid: number) => PH - ((wid - W.min) / (W.max - W.min)) * PH;

const fill = ["rgb(var(--setosa))", "rgb(var(--versicolor))", "rgb(var(--virginica))"];

export default function IrisLab() {
  const [len, setLen] = useState(4.4);
  const [wid, setWid] = useState(1.4);
  const id = useId();
  const predicted = classify(len, wid);

  // Distance to the nearest real flower of the predicted species, as a plain-language confidence hint.
  const nearest = useMemo(() => {
    let best = Infinity;
    for (const [l, w, s] of IRIS) {
      if (s !== predicted) continue;
      const d = Math.hypot(l - len, w - wid);
      if (d < best) best = d;
    }
    return best;
  }, [len, wid, predicted]);

  return (
    <div data-ui className="flex flex-col gap-6 snap:flex-1 snap:min-h-0 snap:justify-center">
      <div className="grid gap-4 sm:grid-cols-[1.15fr_1fr] snap:flex-1 snap:min-h-0 snap:max-h-[30rem]">
      {/* Photo of the predicted species: crossfades as the prediction changes */}
      <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[16rem] overflow-hidden bg-surface-2">
        {SPECIES.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.key}
            src={s.src}
            width={s.width}
            height={s.height}
            alt={i === predicted ? s.alt : ""}
            aria-hidden={i === predicted ? undefined : true}
            loading="lazy"
            style={{ objectPosition: s.focus }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
              i === predicted ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

        {/* The 150 real flowers, with the visitor's flower as a ring */}
        <figure className="bg-surface-2 p-4 grid gap-2 content-between">
          <svg
            viewBox={`-6 -6 ${PW + 12} ${PH + 12}`}
            className="w-full h-auto"
            role="img"
            aria-label={`Scatter plot of the 150 flowers in the Iris dataset by petal length and width. Your flower is at ${len.toFixed(1)} by ${wid.toFixed(1)} centimetres.`}
          >
            <line x1={x(2.45)} y1={0} x2={x(2.45)} y2={PH} stroke="rgb(var(--ink) / 0.25)" strokeDasharray="3 4" />
            <line x1={x(2.45)} y1={y(1.75)} x2={PW} y2={y(1.75)} stroke="rgb(var(--ink) / 0.25)" strokeDasharray="3 4" />
            {IRIS.map(([l, w, s], i) => (
              <circle key={i} cx={x(l)} cy={y(w)} r={3.2} fill={fill[s]} opacity={0.75} />
            ))}
            <circle cx={x(len)} cy={y(wid)} r={8} fill="none" stroke="rgb(var(--ink))" strokeWidth={2.5} />
          </svg>
          <figcaption className="flex flex-wrap gap-x-4 gap-y-1 text-small text-muted">
            {SPECIES.map((s, i) => (
              <span key={s.key} className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: fill[i] }} />
                <span className="italic">{s.name.replace("Iris ", "")}</span>
              </span>
            ))}
          </figcaption>
        </figure>
      </div>

      <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
        <div className="grid gap-1">
          <label htmlFor={`${id}-len`} className="flex justify-between text-small">
            <span>Petal length</span>
            <span className="tabular-nums text-muted">{len.toFixed(1)} cm</span>
          </label>
          <input
            id={`${id}-len`}
            type="range"
            className="range"
            min={L.min}
            max={L.max}
            step={L.step}
            value={len}
            onChange={(e) => setLen(+e.target.value)}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor={`${id}-wid`} className="flex justify-between text-small">
            <span>Petal width</span>
            <span className="tabular-nums text-muted">{wid.toFixed(1)} cm</span>
          </label>
          <input
            id={`${id}-wid`}
            type="range"
            className="range"
            min={W.min}
            max={W.max}
            step={W.step}
            value={wid}
            onChange={(e) => setWid(+e.target.value)}
          />
        </div>

      </div>

      <p className="text-lead" aria-live="polite">
        That&apos;s <span className="italic">{SPECIES[predicted].name}</span>
        <span className="text-muted">
          {nearest < 0.25 ? ", right among the real ones." : nearest < 0.8 ? ", near the edge of the cluster." : ", though no real flower looks quite like it."}
        </span>
      </p>
    </div>
  );
}
