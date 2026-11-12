/**
 * Single source of truth for all portfolio content.
 * Edit this file to update personal info, navigation, projects, experience, and skills.
 */

export const site = {
  name: "Z!ad Khaled",
  shortName: "Z!ad",
  role: "Software Developer",
  tagline: "I build thoughtful software that feels calm to use.",
  description:
    "Developer focused on clean interfaces, reliable systems, and the small details that make products feel human.",
  location: "Cairo, Egypt",
  email: "kziad834@gmail.com",
  cvUrl: "#",
  year: 2026,
  socials: [
    { label: "GitHub", href: "https://github.com/zeyadkhaled2" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:kziad834@gmail.com" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

export const projects = [
  {
    title: "Project One",
    description: "Short one-line summary of what it does and the impact it had.",
    tags: ["Next.js", "Tailwind"],
    href: "#",
    tone: "clay",
  },
  {
    title: "Project Two",
    description: "Short one-line summary of what it does and the impact it had.",
    tags: ["Node.js", "PostgreSQL"],
    href: "#",
    tone: "sage",
  },
  {
    title: "Project Three",
    description: "Short one-line summary of what it does and the impact it had.",
    tags: ["React", "API"],
    href: "#",
    tone: "blue",
  },
];

export const experience = [
  {
    period: "2025 — Now",
    role: "Role Title",
    company: "Company Name",
    summary: "What you worked on and what you achieved there.",
  },
  {
    period: "2023 — 2025",
    role: "Role Title",
    company: "Company Name",
    summary: "What you worked on and what you achieved there.",
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL"] },
  { group: "Tools", items: ["Git", "GitHub", "Vercel"] },
];
