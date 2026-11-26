"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The hero's moving light: a small WebGL shader of slow, smeared navy and blue streaks
 * with a warm yellow glow that follows the pointer a little. Pauses off-screen; draws one
 * still frame for reduced motion; falls back to a CSS gradient without WebGL.
 */
const FRAG = `
precision highp float;
uniform vec2 r;
uniform float t;
uniform vec2 m;

float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h(i), h(i + vec2(1,0)), u.x), mix(h(i + vec2(0,1)), h(i + vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++){ v += a * n(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / r;
  vec2 p = vec2(uv.x * r.x / r.y, uv.y);
  float tt = t * 0.045;

  // stretch vertically for the smeared-glass streaks
  vec2 q = vec2(fbm(vec2(p.x * 3.0, p.y * 0.5) + tt), fbm(vec2(p.x * 3.0 + 5.2, p.y * 0.5 - tt)));
  float f = fbm(vec2(p.x * 2.2, p.y * 0.35) + 2.2 * q + vec2(0.0, tt * 2.0));
  float streak = smoothstep(0.35, 0.95, fbm(vec2(p.x * 9.0 + q.x * 3.0, p.y * 0.6 + tt)));

  vec3 navy = vec3(0.039, 0.078, 0.188);
  vec3 deep = vec3(0.024, 0.047, 0.125);
  vec3 blue = vec3(0.16, 0.27, 0.62);
  vec3 sky  = vec3(0.45, 0.58, 0.92);
  vec3 gold = vec3(1.0, 0.81, 0.23);

  vec3 col = mix(deep, navy, f);
  col = mix(col, blue, smoothstep(0.45, 0.85, f) * 0.85);
  col = mix(col, sky, streak * smoothstep(0.55, 0.9, f) * 0.45);

  // warm glow, top right, nudged by the pointer
  vec2 g = vec2(0.82 + (m.x - 0.5) * 0.12, 0.88 + (m.y - 0.5) * 0.1);
  float d = distance(uv, g);
  float glow = exp(-d * d * 7.0) * (0.55 + 0.45 * q.y);
  col = mix(col, gold, glow * 0.55 * smoothstep(0.3, 0.8, f + streak * 0.3));

  // keep the bottom-left calm, where the name sits
  col = mix(col, navy, smoothstep(0.55, 0.0, uv.y) * 0.55);
  // film grain
  col += (h(gl_FragCoord.xy + t) - 0.5) * 0.025;
  gl_FragColor = vec4(col, 1.0);
}`;

const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) {
      setFailed(true);
      return;
    }
    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setFailed(true);
      return;
    }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(prog, "r");
    const uT = gl.getUniformLocation(prog, "t");
    const uM = gl.getUniformLocation(prog, "m");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(canvas.clientWidth * dpr * 0.75);
      canvas.height = Math.floor(canvas.clientHeight * dpr * 0.75);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = 1 - e.clientY / window.innerHeight;
    };

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    let id = 0;
    const start = performance.now() - 20000;
    const frame = (now: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.03;
      mouse.y += (mouse.ty - mouse.y) * 0.03;
      gl.uniform2f(uR, canvas.width, canvas.height);
      gl.uniform1f(uT, (now - start) / 1000);
      gl.uniform2f(uM, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = (now: number) => {
      if (visible && !document.hidden) frame(now);
      id = requestAnimationFrame(loop);
    };
    if (reduce) frame(performance.now());
    else id = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(id);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div className="hero-fallback" aria-hidden="true" />
      {!failed && <canvas ref={ref} className="hero-canvas" aria-hidden="true" />}
    </>
  );
}
