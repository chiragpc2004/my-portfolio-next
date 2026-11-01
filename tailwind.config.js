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
      screens: {
        // Viewports where full-page snapping (fixed 100vh sections) is enabled.
        // Must match the media query in app/globals.css.
        snap: { raw: "(min-width: 1024px) and (min-height: 700px)" },
        // Tall enough for the larger exhibit type inside a snapped section.
        tall: { raw: "(min-height: 860px)" },
      },
      // Colour roles. Values live in app/globals.css so light, dark and the
      // inverted contact field can each redefine them.
      colors: {
        ground: token("ground"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        ink: token("ink"),
        muted: token("muted"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        setosa: token("setosa"),
        versicolor: token("versicolor"),
        virginica: token("virginica"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      // The page's five type steps. Nothing else is used.
      fontSize: {
        small: ["var(--step-small)", { lineHeight: "1.5" }],
        body: ["var(--step-body)", { lineHeight: "1.6" }],
        lead: ["var(--step-lead)", { lineHeight: "1.4" }],
        head: ["var(--step-head)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        display: ["var(--step-display)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
