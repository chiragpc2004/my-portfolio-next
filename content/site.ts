// Facts about me that appear across the site. Edit here, not in components.
export const site = {
  name: "Chirag P C",
  firstName: "Chirag",
  /** What people call me; used for the intro mark. */
  monogram: "PC",
  /** Browser tab text on every page. */
  tabTitle: "Chirag's Portfolio",
  title: "Chirag P C · SDET, builder, aspiring product manager",
  description:
    "I test software for a living, build products on the side, and I'm working my way into product management.",
  pitch:
    "I test software for a living, build products on the side, and I'm working my way into product management.",
  intro: "I'm Chirag, an SDET at Jar who builds AI products after hours.",
  introMuted: "Testing shows me how products break. Building shows me how they ship.",
  lookingFor: "Moving toward product roles",
  location: "India",
  email: "chiragpc2004@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragpc2004" },
    { label: "GitHub", href: "https://github.com/chiragpc2004" },
    { label: "X", href: "https://x.com/chiragpc_2004" },
  ],
} as const;
