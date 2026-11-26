import type { ReactNode } from "react";
import { Reveal } from "./motion";

type Img = { src: string; alt: string; caption?: string };

/** Images inside a case study. `phones` lays phone screenshots out in a row. */
export function Gallery({ images, phones }: { images: Img[]; phones?: boolean }) {
  return (
    <div className={`gallery${phones ? " phones-row" : ""}`}>
      {images.map((img, i) => (
        <Reveal as="figure" key={img.src} delay={phones ? i * 0.06 : 0}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
          {img.caption ? <figcaption>{img.caption}</figcaption> : null}
        </Reveal>
      ))}
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <aside className="note">{children}</aside>;
}

export const mdxComponents = { Gallery, Note };
