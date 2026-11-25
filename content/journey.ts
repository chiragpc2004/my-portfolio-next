// Your journey, newest first. This is the one place to edit when something changes:
// add the new role at the top, move `current: true` onto it, and the hero updates too.

export type Entry = {
  /** Marks the role you hold now. The hero's "Currently" chip reads from it. */
  current?: boolean;
  /** Short job title for the chip, if the role line is long. */
  title?: string;
  dates: string;
  place: string;
  short?: string;
  role: string;
  body: string[];
  tools?: string;
  note?: { label: string; text: string };
  award?: string;
  link?: { href: string; label: string };
};

// Facts only. Each line here was confirmed by Chirag; keep it that way.
export const journey: Entry[] = [
  {
    current: true,
    title: "SDET",
    dates: "Jul 2026 – now",
    place: "Jar",
    role: "SDET-1, platform pod",
    body: [
      "Full time since July, after converting from my internship. I do manual and automation testing for the platform pod, working in the team's Agile sprints.",
      "Most of my automation is backend API coverage, written in Java with TestNG and Rest Assured.",
    ],
    tools: "Java, TestNG, Rest Assured, Agile",
    note: {
      label: "Beyond the ticket",
      text: "Built an internal AI agent with Claude Code that automates API test work.",
    },
    award: "Rocketeer of the Month",
  },
  {
    dates: "Jan – Jul 2026",
    place: "Jar",
    role: "SDET intern",
    body: [
      "Six months of manual and automation testing with the team, which turned into a full-time offer.",
    ],
    note: { label: "Outcome", text: "Converted to full time in July 2026." },
  },
  {
    dates: "Jul – Nov 2026",
    place: "NextLeap",
    role: "PM Fellowship",
    body: [
      "Five months of product work alongside the job: teardowns, market case studies, PRDs, user research and a shipped AI MVP.",
      "The graduation project took 7,600 public posts about Groww SIPs down to 219 first-person stories, then tested a fix with users.",
    ],
    note: { label: "Outcome", text: "Graduated as a Top Fellow." },
    link: { href: "https://nextleap-groww-mvp.vercel.app", label: "See the graduation MVP" },
  },
  {
    dates: "Jun – Jul 2025",
    place: "Pinnacle Labs",
    role: "AI intern",
    body: [
      "Built Teachable Machine: train an image classifier from your own photos, in the browser, in under a minute.",
    ],
    tools: "TensorFlow.js, React, Supabase",
    note: { label: "Design call", text: "Training runs on the device, so no photo ever has to be uploaded." },
    link: { href: "https://github.com/chiragpc2004/Teachable_Machine", label: "Read the code" },
  },
  {
    dates: "2022 – 2026",
    place: "Manipal Institute of Technology",
    short: "MIT Manipal",
    role: "BTech, Data Science & Engineering",
    body: ["Where the habit started: state the question, look at the data, and measure the answer honestly."],
    note: { label: "Also", text: "Top 10 at the M# Hackathon." },
  },
];

export const now = journey.find((e) => e.current);

/** Where you're heading. Shown in the hero and at the top of Journey. */
export const next = "APM, Associate PM or AI PM";

/** Your degree, for the hero. Reads the education entry, the last one in the list. */
export const studied = journey[journey.length - 1];
