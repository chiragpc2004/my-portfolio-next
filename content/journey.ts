// My journey, oldest first. To change jobs: add an entry and move `current: true` to it.
// The hero role line and the "Now" fact both read from the current entry.
export type JourneyEntry = {
  when: string;
  title: string;
  org: string;
  blurb: string;
  /** Short role line shown in the hero, e.g. "SDET at Jar" */
  heroRole?: string;
  /** Short fact shown under "Now" in the hero */
  now?: string;
  current?: boolean;
};

export const journey: JourneyEntry[] = [
  {
    when: "2022 – 2026",
    title: "Data Science & Engineering",
    org: "Manipal Institute of Technology, BTech",
    blurb: "Four years of statistics, machine learning and systems. Top 10 at the M# Hackathon.",
  },
  {
    when: "Jun – Jul 2025",
    title: "AI Intern",
    org: "Pinnacle Labs",
    blurb:
      "Built Teachable Machine, an image classifier that trains on the device, so nothing has to be uploaded.",
  },
  {
    when: "2026 – now",
    title: "SDET, intern to full time",
    org: "Jar, platform pod",
    blurb:
      "Joined as an SDET intern and converted to SDET-1 in Jul 2026. Backend API testing with Java, TestNG and Rest Assured. Rocketeer of the Month in my first quarter, and built an internal AI agent with Claude Code that automates API test work.",
    heroRole: "SDET at Jar",
    now: "SDET-1, Jar (platform pod)",
    current: true,
  },
  {
    when: "Jul – Nov 2026",
    title: "PM Fellowship, Top Fellow",
    org: "NextLeap",
    blurb:
      "Five months of product practice. Graduation project: Groww, Keep SIP Active, from user research to a tested AI MVP.",
  },
];

export const currentRole = journey.find((j) => j.current) ?? journey[journey.length - 1];
