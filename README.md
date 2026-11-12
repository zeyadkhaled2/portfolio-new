# Z!ad Khaled — Developer Portfolio

Minimal, modern developer portfolio built with **Next.js (App Router)** and **Tailwind CSS**, styled after the warm editorial aesthetic of Anthropic's Claude (with light and dark themes).

## Folder Structure

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Theme color tokens (light/dark) + layout utilities
│   ├── layout.js            # Root HTML, Google Fonts, Navbar + <main> + Footer
│   └── page.js              # Home route composing the page sections
├── components/
│   ├── layout/              # Persistent site shell
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ThemeToggle.js   # Light/dark theme switcher (Client Component)
│   ├── sections/            # Self-contained page sections
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js      # Includes co-located ProjectCard
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   └── Contact.js
│   └── ui/                  # Shared UI primitives
│       └── Button.js
└── data/
    └── portfolio.js         # Single source of truth for all site copy & links
```

## Editing Content

All personal info, navigation links, projects, work history, and skills live in one file:
- `src/data/portfolio.js`

## Customizing Colors & Theme

All light and dark mode palette variables (`--canvas`, `--surface`, `--ink`, `--accent`, etc.) and layout utilities (`.container-page`, `.section-eyebrow`) are defined in:
- `src/app/globals.css`

## Local Development

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run lint    # Run ESLint
npm run build   # Build static production output
```
