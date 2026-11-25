const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colour roles. Values live in app/globals.css so light, dark and the
      // inverted contact field can each redefine them.
      colors: {
        ground: token("ground"),
        surface: token("surface"),
        ink: token("ink"),
        muted: token("muted"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      // The page's five type steps. Nothing else is used.
      fontSize: {
        small: ["var(--step-small)", { lineHeight: "1.45" }],
        body: ["var(--step-body)", { lineHeight: "1.55" }],
        lead: ["var(--step-lead)", { lineHeight: "1.35" }],
        head: ["var(--step-head)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        display: ["var(--step-display)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
