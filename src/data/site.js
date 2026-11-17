/**
 * Site-wide identity, navigation, contact, and social links.
 * To add your portrait inside the Contact CRT screen, place your image in
 * `public/images/portrait.jpg` and set `portraitUrl: "/images/portrait.jpg"`.
 */

export const site = {
  name: "Ziad Khaled",
  shortName: "ziad",
  role: "Software Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ziadkhaled.vercel.app",
  heroHeadline: {
    prefix: "I'm a",
    highlight: "Software Developer",
    suffix: "who makes complex systems feel simple.",
  },
  description:
    "Computer Science graduate based in Cairo, Egypt crafting clean interfaces, resilient full-stack products, and applied AI systems.",
  location: "Cairo / Giza, Egypt",
  locationBadge: "CAIRO BASED — WORLDWIDE DELIVERY",
  availability: "Open to full-time & remote freelance roles",
  education: {
    degree: "B.Sc. in Computer Science",
    school: "Faculty of Computer & Information Sciences (FCIS), Ain Shams University",
  },
  email: "kziad834@gmail.com",
  portraitUrl: "/images/portrait.jpg",
  year: 2026,
  socials: [
    { label: "GitHub", href: "https://github.com/zeyadkhaled2" },
    // Uncomment once you add your LinkedIn URL:
    // { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "Email", href: "mailto:kziad834@gmail.com" },
  ],
};

export const navLinks = [
  { label: "HOME", href: "/#top" },
  { label: "WORK", href: "/#work" },
  { label: "ABOUT", href: "/#about" },
  { label: "EXPERIENCE", href: "/#experience" },
  { label: "CONTACT", href: "/#contact" },
];
