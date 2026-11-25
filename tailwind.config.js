const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: token("ground"),
        paper: token("paper"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        signal: token("signal"),
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        small: ["var(--step-small)", { lineHeight: "1.45" }],
        body: ["var(--step-body)", { lineHeight: "1.6" }],
        lead: ["var(--step-lead)", { lineHeight: "1.5" }],
        head: ["var(--step-head)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        display: ["var(--step-display)", { lineHeight: "1.04", letterSpacing: "-0.045em" }],
      },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
