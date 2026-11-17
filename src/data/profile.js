/**
 * Experience timeline and technical stack groups.
 */

export const experience = [
  {
    period: "JUL – NOV 2026",
    role: "Full-Stack & AI Developer",
    company: "Independent Projects",
    caseStudies: [
      { label: "DevReps", href: "/work/devreps" },
      { label: "Yefhamak", href: "/work/yefhamak" },
    ],
    summary:
      "Built two full products end to end: DevReps, a React Native interview prep app backed by an Express and Prisma API, and Yefhamak, a bilingual Egyptian Arabic WhatsApp sales bot running on Next.js, FastAPI, PostgreSQL, and RAG.",
  },
  {
    period: "AUG 2025 – JUN 2026 · REMOTE",
    role: "Full-Stack Web Developer",
    company: "Egypt bnbn Travel",
    caseStudies: [{ label: "Egypt bnbn Travel", href: "/work/egyptbnbn-travel" }],
    summary:
      "Built the live booking site at egyptbnbntravel.com with Next.js 15 and TypeScript. It covers 19 tours across 5 categories, day-by-day itineraries, booking forms, SEO structured data, and guest reviews pulled straight from Google Sheets.",
  },
  {
    period: "JUL 2024 – NOV 2025 · REMOTE",
    role: "Computer Vision & ML Engineer",
    company: "Remote Team, Saudi Arabia",
    caseStudies: [
      { label: "Crowd Anomaly Detection", href: "/work/crowd-anomaly-detection" },
    ],
    summary:
      "Collaborated remotely with a team in Saudi Arabia on crowd anomaly detection. Moved the pipeline from a Conv3D + LSTM baseline to a hybrid YOLOv8n + 3D CNN model with motion differencing and Focal Loss, hitting 0.865 test F1 macro.",
  },
  {
    period: "2023 – 2025",
    role: "Frontend & Full-Stack Developer",
    company: "Freelance & Client Work",
    caseStudies: [],
    summary:
      "Built responsive React and Next.js frontends, REST APIs, and PostgreSQL workflows for client sites and early product prototypes.",
  },
];

export const skills = [
  {
    group: "Languages",
    accent: "accent",
    items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    group: "Frontend & Mobile",
    accent: "pink",
    items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    group: "Backend & AI / ML",
    accent: "mint",
    items: ["FastAPI", "Node.js / Express", "PostgreSQL / Prisma", "PyTorch / YOLOv8", "AI Agents & RAG"],
  },
  {
    group: "Tools & DevOps",
    accent: "yellow",
    items: ["Docker", "GitHub Actions", "Git", "Vercel", "Figma"],
  },
];
