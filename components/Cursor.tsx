"use client";

import { useEffect, useRef, useState } from "react";

/** A yellow "View" disc that follows the pointer over anything marked data-cursor="view". */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      id = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as Element | null;
      setOn(!!t?.closest?.('[data-cursor="view"]'));
    };
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (ref.current) ref.current.style.translate = `${cx}px ${cy}px`;
      id = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    id = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" data-on={on} aria-hidden="true">
      View
    </div>
  );
}
