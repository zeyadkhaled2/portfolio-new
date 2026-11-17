/**
 * Experience timeline and technical stack groups.
 */

export const experience = [
  {
    period: "JUL — NOV 2026",
    role: "Full-Stack & AI Product Developer",
    company: "Independent Builds",
    caseStudies: [
      { label: "DevReps", href: "/work/devreps" },
      { label: "Yefhamak", href: "/work/yefhamak" },
    ],
    summary:
      "Built and shipped DevReps (Expo SDK 58 / React Native + Express/Prisma API) and Yefhamak (bilingual Next.js frontend + FastAPI/PostgreSQL/Docker AI sales agent with RAG & 74 automated tests).",
  },
  {
    period: "AUG 2025 — JUN 2026 · REMOTE",
    role: "Full-Stack Web Developer",
    company: "Egypt bnbn Travel (Remote)",
    caseStudies: [{ label: "Egypt bnbn Travel", href: "/work/egyptbnbn-travel" }],
    summary:
      "Built and shipped the production Next.js 15 & TypeScript travel booking platform (egyptbnbntravel.com) covering 19 tours across 5 categories, dynamic itineraries, Formik booking flows, Schema.org SEO, and a Google Sheets reviews API.",
  },
  {
    period: "JUL 2024 — NOV 2025 · REMOTE",
    role: "Computer Vision & ML Engineer",
    company: "Remote Team (Saudi Arabia)",
    caseStudies: [
      { label: "Crowd Anomaly Detection", href: "/work/crowd-anomaly-detection" },
    ],
    summary:
      "Worked remotely with a team in Saudi Arabia on Crowd Anomaly Detection — progressing from Conv3D + LSTM (5-Fold CV) to a Hybrid YOLOv8n + 3D CNN + Motion Channel + Focal Loss pipeline (0.948 Val / 0.865 Test F1 Macro).",
  },
  {
    period: "2023 — 2025",
    role: "Frontend & Full-Stack Developer",
    company: "Projects & Freelance",
    caseStudies: [],
    summary:
      "Built responsive React and Next.js interfaces, REST APIs, and PostgreSQL-backed workflows focused on clarity, performance, and reliability.",
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
