/**
 * Featured project case studies (media lives in `public/projects/<slug>/`).
 */

export const projects = [
  {
    slug: "devreps",
    title: "DevReps",
    subtitle: "Technical interview practice, live JS execution tracing & interactive CS labs",
    year: "Jul – Nov 2026",
    role: "Mobile & Full-Stack Developer",
    description:
      "React Native mobile app for practicing scored technical interviews, tracing JavaScript execution line by line, and exploring interactive data-structure labs.",
    tags: ["React Native", "Expo SDK 58", "TypeScript", "AI Mentor"],
    tone: "mint",
    coverImage: "/projects/devreps/cover-phone-home.png",
    secondaryImage: "/projects/devreps/cover-phone-trace.png",
    coverFit: "mobile-pair",
    links: [
      { label: "Mobile Repo", href: "https://github.com/zeyadkhaled2/devreps-mobile" },
      { label: "Backend API", href: "https://github.com/zeyadkhaled2/devreps-api" },
    ],
    video: {
      src: "/projects/devreps/devreps-linkedin.mp4",
      poster: "/projects/devreps/03-meet-devreps-home.png",
      portrait: true,
      caption:
        "DevReps showcase reel — JS puzzles, live execution tracing, CS labs, and interview practice.",
    },
    screenshots: [
      {
        src: "/projects/devreps/03-meet-devreps-home.png",
        title: "Home Hub",
        caption:
          "Main navigation across JS challenges, interview practice, CS labs, AI Mentor, and progress.",
      },
      {
        src: "/projects/devreps/01-js-challenge-puzzle.png",
        title: "JS Output Puzzle",
        caption:
          "Nine curated JavaScript puzzles across three difficulty levels running 100% locally.",
      },
      {
        src: "/projects/devreps/02-js-trace-live.png",
        title: "Live Execution Trace",
        caption:
          "Step-by-step code execution inspector showing console output and variable state.",
      },
      {
        src: "/projects/devreps/04-stacks-lifo-lab.png",
        title: "Stacks (LIFO) Lab",
        caption: "Interactive stack operations lab — push, pop, and peek with live visual feedback.",
      },
      {
        src: "/projects/devreps/05-linked-lists-lab.png",
        title: "Linked Lists Lab",
        caption: "Insert and traverse pointer nodes step by step inside a visual linked list.",
      },
      {
        src: "/projects/devreps/06-recursion-unwind-lab.png",
        title: "Recursion Unwind Lab",
        caption: "Watch recursive frames push onto the call stack and unwind back to the caller.",
      },
      {
        src: "/projects/devreps/07-six-labs-overview.png",
        title: "Dynamic Programming & Labs",
        caption:
          "Solve DP problems like climbing stairs and exact change by filling the table step by step.",
      },
    ],
    overview:
      "DevReps is a React Native mobile application and Express/PostgreSQL API built for daily technical interview reps and hands-on computer science intuition. Instead of passive flashcards, learners predict JavaScript output and step through execution line by line, manipulate data structures directly across interactive labs, and submit interview answers for scored Gemini-powered feedback.",
    challenge: {
      problem:
        "Running every coding drill through a remote LLM adds latency, exhausts API quota, and breaks offline practice on mobile.",
      decision:
        "Embedded all 9 curated JavaScript trace puzzles and interactive CS labs on-device with Expo SecureStore, while isolating Gemini interview scoring and Mentor chat in a separate Express + Prisma API with draft recovery on HTTP 429 or network failure.",
      result:
        "Instant offline tracing and lab feedback paired with persistent account history, streaks, and CI-verified test suites across both mobile and backend repositories.",
    },
    features: [
      {
        title: "Scored Interview Practice",
        detail:
          "Pick React, Node, JavaScript, SQL, or HR at your chosen difficulty, submit an answer, and review your score, rubric feedback, and attempt history.",
      },
      {
        title: "JavaScript Output & Live Trace",
        detail:
          "Work through nine curated JavaScript puzzles across three difficulty tiers and step line by line through execution without spending AI requests.",
      },
      {
        title: "Interactive CS Labs",
        detail:
          "Lift plates in Stacks (LIFO), run a Printer Queue, insert nodes into Linked Lists, watch Recursion frames unwind, traverse Trees, and fill Dynamic Programming tables.",
      },
      {
        title: "AI Mentor & Draft Safety",
        detail:
          "Ask coding questions, resume saved conversations, track streaks and personal bests, and retain drafts automatically if a network call fails.",
      },
    ],
    architecture: [
      "Mobile App (devreps-mobile): Expo SDK 58, React Native 0.88.1, React 19.3, TypeScript, TanStack Query, Zustand, and React Hook Form + Zod.",
      "Feature-sliced layout under src/features/, React Navigation stack/tab flows under src/app/navigation/, and Expo SecureStore token persistence.",
      "Backend API (devreps-api): Express + TypeScript with PostgreSQL, Prisma ORM, JWT auth, and modular routes under src/modules/ (auth, practice, attempts, streak, chat).",
      "Gemini integration with HTTP 429 rate-limit handling plus mocked Prisma/Gemini tests and GitHub Actions CI on both repos.",
    ],
    techStack: [
      "React Native",
      "Expo SDK 58",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "TanStack Query",
      "Zustand",
      "Zod",
      "Gemini API",
    ],
    readmeCommands: [
      { label: "Mobile — Install & start", code: "npm ci && npm start" },
      { label: "Mobile — Checks & tests", code: "npm run check" },
      { label: "API — Migrate & run", code: "npm run db:migrate && npm run dev" },
    ],
  },
  {
    slug: "yefhamak",
    title: "Yefhamak (يفهمك)",
    subtitle: "24/7 Egyptian Arabic WhatsApp AI sales assistant & merchant order workspace",
    year: "Oct – Nov 2026",
    role: "Product & Full-Stack Developer",
    description:
      "Bilingual AI sales assistant that chats with shoppers in Egyptian Arabic and Franco-Arabic, reserves live inventory in PostgreSQL, and creates structured merchant orders.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "AI Agents"],
    tone: "peach",
    coverImage: "/projects/yefhamak/01-hero-desktop.png",
    secondaryImage: "/projects/yefhamak/05-seller-orders.png",
    coverFit: "cover-top",
    links: [
      { label: "Live Website", href: "https://yefhamak.vercel.app" },
      { label: "Interactive Demo", href: "https://yefhamak.vercel.app/demo" },
      { label: "Watch Demo", href: "https://www.youtube.com/watch?v=gR0TXw6iMhM" },
      { label: "Frontend Repo", href: "https://github.com/zeyadkhaled2/yefhamak" },
      { label: "Backend Repo", href: "https://github.com/zeyadkhaled2/yefhamak-backend" },
    ],
    video: {
      src: "/projects/yefhamak/demo.mp4",
      poster: "/projects/yefhamak/01-hero-desktop.png",
      caption:
        "Yefhamak v2 full demo — live backend chat in Egyptian Arabic, variant lookup, human escalation, and order creation.",
    },
    screenshots: [
      {
        src: "/projects/yefhamak/01-hero-desktop.png",
        title: "Landing Hero & WhatsApp Preview",
        caption: "Bilingual Arabic/English landing page showcasing 24/7 Egyptian Arabic WhatsApp replies.",
      },
      {
        src: "/projects/yefhamak/02-demo-frame-1.png",
        title: "Live Assistant Workspace",
        caption: "Interactive /demo workspace supporting both browser-only mock mode and live backend mode.",
      },
      {
        src: "/projects/yefhamak/04-demo-frame-3.png",
        title: "Egyptian Arabic Catalog Lookup",
        caption: "Understands colloquial product queries, checks live variants/stock, and asks clarifying questions.",
      },
      {
        src: "/projects/yefhamak/05-seller-orders.png",
        title: "Seller Orders Dashboard",
        caption: "Real-time merchant view displaying structured orders, totals in EGP, and review statuses.",
      },
      {
        src: "/projects/yefhamak/06-order-created.png",
        title: "Core Platform Capabilities",
        caption: "RAG document answers, tool-powered reservations, live inventory lookup, and human handoff.",
      },
    ],
    overview:
      "Yefhamak (يفهمك) solves missed late-night WhatsApp messages and lost chat orders for Egyptian e-commerce merchants. A bilingual Next.js storefront and workspace pairs with a FastAPI + PostgreSQL backend where the LLM interprets Egyptian Arabic and Franco-Arabic requests via tool calls while deterministic Python services enforce stock reservations, store-document RAG, and transactional orders.",
    challenge: {
      problem:
        "Free-form LLM chatbots risk inventing prices, double-booking low inventory, or confirming orders without enforcing stock rules.",
      decision:
        "Restricted the OpenRouter model to validated tool calls while Python/SQLAlchemy services enforce short-lived concurrent reservations, idempotent order creation, and seller-scoped lexical RAG with source citations and human-handoff fallbacks.",
      result:
        "Verified across 45 unit tests, 29 isolated PostgreSQL integration tests (covering concurrent reservations, expiry, and seller isolation), and 36 evaluation scenarios.",
    },
    features: [
      {
        title: "Egyptian Dialect & Franco-Arabic",
        detail:
          "Normalizes Arabic, English, and Franco-Arabic catalog queries so conversations match natural Egyptian shopper phrasing.",
      },
      {
        title: "Concurrent Stock Reservations",
        detail:
          "FastAPI + PostgreSQL services enforce short-lived inventory reservations, expiry/release, and transactional order stock updates.",
      },
      {
        title: "Store-Document RAG & Citations",
        detail:
          "Seller-scoped lexical retrieval selects up to three 1,000-character passages with Arabic/English synonyms and appends document references.",
      },
      {
        title: "Mock & Live Dual Workspace",
        detail:
          "Try the scripted browser-only demo at /demo instantly or connect to the local Docker FastAPI backend and review orders in /seller/orders.",
      },
    ],
    architecture: [
      "Frontend (yefhamak): Next.js bilingual Arabic/English landing page (/), interactive chat simulator (/demo), seller orders console (/seller/orders), and /contact.",
      "Backend (yefhamak-backend): Python 3.12, FastAPI, SQLAlchemy 2.x, Alembic migrations, PostgreSQL, Pydantic, and OpenRouter tool-calling loop.",
      "Docker Compose + GitHub Actions CI running 45 unit tests and 29 PostgreSQL integration tests without calling external models.",
      "Evaluation harness with 36 conversation scenarios covering catalog disambiguation, checkout, RAG policy lookup, and human handoff.",
    ],
    techStack: [
      "Next.js",
      "Python / FastAPI",
      "PostgreSQL",
      "SQLAlchemy & Alembic",
      "Docker",
      "AI Tool Calling",
      "RAG",
      "GitHub Actions",
    ],
    readmeCommands: [
      { label: "Start backend DB & API", code: "docker compose up -d --build --wait" },
      { label: "Seed demo store", code: "docker compose exec api python -m app.demo.seed" },
      { label: "Run unit tests", code: "python -m unittest discover -s tests/unit -v" },
    ],
  },
  {
    slug: "crowd-anomaly-detection",
    title: "Crowd Anomaly Detection",
    subtitle:
      "Multi-stage deep learning pipeline for crowd violence, abnormal behavior & density estimation",
    year: "Jul 2024 – Nov 2025",
    role: "Computer Vision & ML Engineer · Remote (Saudi Arabia)",
    description:
      "Built remotely with a team in Saudi Arabia — an end-to-end vision system progressing from Conv3D + LSTM (5-Fold CV) to a Hybrid YOLOv8n + 3D CNN + Motion Channel + Focal Loss architecture (0.948 Val / 0.865 Test F1 Macro).",
    tags: ["PyTorch", "YOLOv8n", "3D CNN", "Computer Vision"],
    tone: "mint",
    coverImage: "/projects/crowd-anomaly/yolo_sample_detection.jpg",
    coverFit: "cover-top",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/zeyadkhaled2/crowd-anomaly-detection",
      },
    ],
    video: null,
    screenshots: [
      {
        src: "/projects/crowd-anomaly/yolo_sample_detection.jpg",
        title: "YOLOv8n Behavior Detection",
        caption:
          "Crowd behavior localization on HAJJv2 frames (0.955 mAP@0.5 / 0.713 mAP@0.5:0.95 validation).",
      },
      {
        src: "/projects/crowd-anomaly/sample_pred_4c_test.png",
        title: "16-Frame Sequence Prediction",
        caption:
          "4-class grouped multi-label behavior & crowd density prediction on an unseen 16-frame test clip.",
      },
      {
        src: "/projects/crowd-anomaly/hybrid_4c_training_curves.png",
        title: "4-Class Hybrid Training Curves",
        caption:
          "Classification, density, and Hamming loss alongside Jaccard IoU, F1 Macro, and Subset Accuracy over 50 epochs.",
      },
      {
        src: "/projects/crowd-anomaly/hybrid_4c_val_metrics.png",
        title: "4-Class Validation Metrics",
        caption:
          "Per-class precision, recall, F1, and accuracy achieving 0.948 Val F1 Macro and 0.956 Jaccard.",
      },
      {
        src: "/projects/crowd-anomaly/hybrid_4c_test_metrics.png",
        title: "4-Class Test Metrics",
        caption:
          "Held-out test generalization reaching 0.865 Test F1 Macro and 0.865 Jaccard across 4 macro behaviors.",
      },
      {
        src: "/projects/crowd-anomaly/yolo_train3_confusion_matrix.png",
        title: "7-Class Confusion Matrix",
        caption:
          "Normalized YOLOv8n confusion matrix across sitting, standing, moving opposite, running, and non-human objects.",
      },
      {
        src: "/projects/crowd-anomaly/yolo_train3_results.png",
        title: "YOLOv8n Training Progression",
        caption:
          "40-epoch box/class/DFL losses, precision, recall, mAP50, and mAP50-95 curves on HAJJv2.",
      },
    ],
    overview:
      "Developed in remote collaboration with a team in Saudi Arabia, this end-to-end Computer Vision pipeline targets real-time abnormal behavior detection and crowd density estimation across two benchmarks: Crowd Violence Detection (binary sequence classification) and HAJJv2 (7-class object detection and 4-class grouped multi-label spatiotemporal behavior recognition).",
    challenge: {
      problem:
        "Standard per-frame YOLOv8n achieved 0.955 mAP@0.5 on validation (train3) yet dropped to 0.417 mAP@0.5 on unseen test video (val4) because motion behaviors like running and opposite-direction movement lack temporal context and suffer severe class imbalance.",
      decision:
        "Extracted 10 pretrained YOLOv8n spatial feature layers (256 ch), stacked a cv2.absdiff grayscale motion channel (257 ch) into a Conv3d temporal head with FocalLoss(alpha=0.25, gamma=2.0) and log1p density regression, then consolidated 7 imbalanced labels into 4 macro classes.",
      result:
        "Boosted multi-label generalization from 0.725 to 0.865 Test F1 Macro (0.948 Val F1 Macro, 0.956 Val Jaccard, and 0.865 Test Jaccard).",
    },
    features: [
      {
        title: "Binary Violence (Conv3D + LSTM)",
        detail:
          "Progressed from 2D and 3D CNN baselines to Conv3D + LSTM with 5-Fold Stratified CV (sequence=90, Masking, L2), reaching 83.93% ± 6.83% CV accuracy, 82.35% test accuracy, and 0.88 ± 0.08 AUC.",
      },
      {
        title: "YOLOv8n Crowd Localization",
        detail:
          "Trained YOLOv8n (640×640, mosaic augmentation, Soft-NMS) on HAJJv2 frames, achieving 0.955 mAP@0.5 on validation and exposing domain-shift limitations on rare motion classes.",
      },
      {
        title: "Hybrid YOLO3DCNN + Motion",
        detail:
          "Combined 10 pretrained YOLOv8n spatial layers (256 ch) with a grayscale frame-difference motion channel (cv2.absdiff, 257 ch total) and a Conv3d temporal head + log-density regression.",
      },
      {
        title: "Focal Loss & 4-Class Grouping",
        detail:
          "Tackled severe class imbalance with FocalLoss(alpha=0.25, gamma=2.0) and consolidated 7 behaviors into 4 macro classes, lifting Test F1 Macro from 0.725 to 0.865 (0.948 Val F1 Macro).",
      },
    ],
    architecture: [
      "Phase 1 (src/violence_detection/): TensorFlow/Keras 2D CNN, Volumetric 3D CNN, Conv3D + LSTM 5-Fold CV, and 5-attention ablation study (self, multihead, Bahdanau, Luong).",
      "Phase 2 (src/hajjv2_detection/): PyTorch YOLO3DCNN and YOLO3DCNN_MultiLabel pipelines with 16-frame clip sampling and log1p crowd density regression.",
      "Dataset & Configs: Relative YOLOv8 config (configs/hajjv2.yaml) and CSV-to-YOLO frame converter (prepare_yolo_dataset.py).",
      "Standalone CLI inference (infer_4c.py) and reproducible evaluation reports saved under reports/ (JSON, CSV, TXT).",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "Ultralytics YOLOv8",
      "TensorFlow / Keras",
      "OpenCV",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Matplotlib / Seaborn",
    ],
    readmeCommands: [
      { label: "Install dependencies", code: "pip install -r requirements.txt" },
      {
        label: "Train 4-class hybrid model",
        code: "python src/hajjv2_detection/train_yolo_3dcnn_4c.py",
      },
      {
        label: "Run sequence inference",
        code: "python src/hajjv2_detection/infer_4c.py --source <video_or_frames> --checkpoint best_model_4classes.pt",
      },
    ],
  },
  {
    slug: "egyptbnbn-travel",
    title: "Egypt bnbn Travel",
    subtitle:
      "Production travel & tour booking platform across Cairo, Giza, Luxor, Aswan & the Red Sea",
    year: "Aug 2025 – Jun 2026",
    role: "Full-Stack Web Developer · Remote",
    description:
      "Delivered remotely — a live Next.js 15 tourism platform featuring 19 tours across 5 categories, dynamic itinerary & Formik booking pages, SEO Schema.org markup, and Google Sheets-backed reviews.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Google Sheets API"],
    tone: "lavender",
    coverImage: "/projects/egyptbnbn-travel/01-hero-desktop.png",
    coverFit: "cover-top",
    links: [
      { label: "Live Website", href: "https://egyptbnbntravel.com" },
      { label: "GitHub Repo", href: "https://github.com/zeyadkhaled2/tours" },
    ],
    video: null,
    screenshots: [
      {
        src: "/projects/egyptbnbn-travel/01-hero-desktop.png",
        title: "Landing Hero & Navigation",
        caption:
          "Atmospheric Giza Pyramids hero with direct WhatsApp contact, category navigation, and dual CTAs.",
      },
      {
        src: "/projects/egyptbnbn-travel/02-popular-tours.png",
        title: "Popular Tours Catalog",
        caption:
          "Curated Cairo, Alexandria, and Fayoum tour cards showing duration, max group size, ratings, and pricing.",
      },
      {
        src: "/projects/egyptbnbn-travel/03-tour-booking.png",
        title: "Tour Itinerary & Booking Form",
        caption:
          "Dynamic /tour/[slug] page pairing inclusions, exclusions, and step-by-step plans with a live Formik booking form.",
      },
      {
        src: "/projects/egyptbnbn-travel/04-perfect-destinations.png",
        title: "Destinations Carousel",
        caption:
          "Interactive Embla carousel highlighting Dahab, Hurghada, Luxor, and top Egyptian travel regions.",
      },
    ],
    overview:
      "Built remotely for Egypt bnbn Travel (egyptbnbntravel.com), this production travel and excursion booking website runs on Next.js 15 and TypeScript. Travelers can browse 19 curated tours across Day Tours, Overday Tours, Multi-Day Packages, Nile Cruises, and Activities, inspect full day-by-day itineraries, submit booking inquiries, and read verified guest reviews fetched dynamically from Google Sheets.",
    challenge: {
      problem:
        "The travel agency needed a fast SEO-ready catalog with non-technical team updates for traveler reviews without maintaining an admin dashboard or heavy CMS database.",
      decision:
        "Built a typed TypeScript tour catalog across 5 Next.js category routes with Formik + Radix UI booking inquiries, Organization/WebSite JSON-LD structured data, and a serverless /api/reviews endpoint authenticating to Google Sheets.",
      result:
        "Live production platform serving 19 excursions across Egypt with instant spreadsheet-managed testimonials, WhatsApp conversion links, and Vercel Analytics.",
    },
    features: [
      {
        title: "Multi-Category Tour Catalog",
        detail:
          "Dedicated Next.js routes for Day Tours, Overday Tours, Package Tours, Nile Cruise Tours, and Activities covering 19 excursions across Egypt.",
      },
      {
        title: "Dynamic Booking & Itineraries",
        detail:
          "Each /tour/[slug] page presents highlights, inclusions/exclusions, numbered tour plans, and a Formik + Yup booking form with Radix UI selectors and toast feedback.",
      },
      {
        title: "Google Sheets Reviews API",
        detail:
          "Serverless /api/reviews route authenticates via a Google Service Account (googleapis) to fetch live traveler testimonials directly from a managed spreadsheet.",
      },
      {
        title: "Production SEO & Analytics",
        detail:
          "Configured canonical metadata, OpenGraph/Twitter tags, Organization & WebSite JSON-LD structured data, WhatsApp quick actions, and Vercel Analytics.",
      },
    ],
    architecture: [
      "Built on Next.js 15.4 App Router, React 19, TypeScript, and Tailwind CSS v4 with Playfair Display and DM Sans typography.",
      "Accessible UI primitives powered by Radix UI (@radix-ui/react-select, @radix-ui/react-slot), Lucide icons, and Embla Carousel.",
      "Booking pipeline handles Formik state, validation, FormData submission, and react-hot-toast status notifications.",
      "Live testimonials endpoint (/api/reviews) reads Google Sheets via base64 service-account credentials in environment variables.",
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Formik & Yup",
      "Embla Carousel",
      "Google Sheets API",
      "Vercel Analytics",
    ],
    readmeCommands: [
      { label: "Start dev server", code: "npm run dev" },
      { label: "Build for production", code: "npm run build" },
      { label: "Run ESLint", code: "npm run lint" },
    ],
  },
];
