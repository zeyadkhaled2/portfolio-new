/**
 * Featured project case studies (media lives in `public/projects/<slug>/`).
 */

export const projects = [
  {
    slug: "devreps",
    title: "DevReps",
    subtitle: "Interview practice, live JavaScript tracing, and interactive CS labs on mobile",
    year: "Jul – Nov 2026",
    role: "Mobile & Full-Stack Developer",
    description:
      "A React Native app for practicing technical interviews with scored feedback, stepping through JavaScript line by line, and playing with data structures.",
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
        "Quick walkthrough of DevReps: JS output puzzles, live tracing, CS labs, and interview practice.",
    },
    screenshots: [
      {
        src: "/projects/devreps/03-meet-devreps-home.png",
        title: "Home Hub",
        caption:
          "Main home screen linking to JS puzzles, interview practice, CS labs, and the AI Mentor.",
      },
      {
        src: "/projects/devreps/01-js-challenge-puzzle.png",
        title: "JS Output Puzzle",
        caption:
          "Nine JavaScript puzzles across three difficulty levels, all running locally on your phone.",
      },
      {
        src: "/projects/devreps/02-js-trace-live.png",
        title: "Live Execution Trace",
        caption:
          "Step through code line by line and watch console output and variable values update.",
      },
      {
        src: "/projects/devreps/04-stacks-lifo-lab.png",
        title: "Stacks (LIFO) Lab",
        caption: "Push, pop, and peek items in an interactive stack with visual state updates.",
      },
      {
        src: "/projects/devreps/05-linked-lists-lab.png",
        title: "Linked Lists Lab",
        caption: "Insert nodes and walk through pointers step by step inside a visual linked list.",
      },
      {
        src: "/projects/devreps/06-recursion-unwind-lab.png",
        title: "Recursion Unwind Lab",
        caption: "See recursive calls pile onto the stack and unwind back to the base case.",
      },
      {
        src: "/projects/devreps/07-six-labs-overview.png",
        title: "Dynamic Programming & Labs",
        caption:
          "Fill DP tables cell by cell for problems like climbing stairs and exact change.",
      },
    ],
    overview:
      "DevReps is a React Native app paired with an Express and PostgreSQL API, built to make daily technical interview prep feel active instead of passive. You can predict what tricky JavaScript snippets output, step through execution line by line, test how data structures behave in interactive labs, and get scored Gemini feedback on practice interview answers.",
    challenge: {
      problem:
        "Sending every small coding drill to an external LLM slows things down, burns through API quota, and stops working the moment you go offline.",
      decision:
        "I kept all 9 JavaScript puzzles and the interactive CS labs offline inside the mobile app with Expo SecureStore, and put Gemini interview scoring and Mentor chat behind a separate Express + Prisma API that saves drafts if a request fails or hits a 429 rate limit.",
      result:
        "Tracing and CS labs respond instantly with zero network calls, while interview attempts, streaks, and chat history stay synced in Postgres and covered by automated tests on both repos.",
    },
    features: [
      {
        title: "Scored Interview Practice",
        detail:
          "Choose React, Node, JavaScript, SQL, or HR at your target difficulty, type an answer, and get a score with rubric notes and past attempt history.",
      },
      {
        title: "JavaScript Output & Live Trace",
        detail:
          "Solve nine JavaScript output puzzles across three difficulty tiers and step through how each line runs without using any AI calls.",
      },
      {
        title: "Interactive CS Labs",
        detail:
          "Lift plates in Stacks (LIFO), run a Printer Queue, insert nodes into Linked Lists, watch Recursion frames unwind, traverse Trees, and fill Dynamic Programming tables.",
      },
      {
        title: "AI Mentor & Saved Drafts",
        detail:
          "Ask follow-up coding questions, pick up old Mentor threads, track streaks, and keep your typed answers safe if your connection drops.",
      },
    ],
    architecture: [
      "Mobile app (devreps-mobile): Expo SDK 58, React Native 0.88.1, React 19.3, TypeScript, TanStack Query, Zustand, and React Hook Form + Zod.",
      "Code organized by feature under src/features/, navigation stacks and tabs in src/app/navigation/, and auth tokens stored in Expo SecureStore.",
      "Backend API (devreps-api): Express + TypeScript with PostgreSQL, Prisma, JWT auth, and route modules under src/modules/ (auth, practice, attempts, streak, chat).",
      "Gemini handles answer grading and chat with HTTP 429 rate-limit handling, backed by mocked Prisma/Gemini tests and GitHub Actions CI.",
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
      { label: "Install & start mobile", code: "npm ci && npm start" },
      { label: "Run mobile checks", code: "npm run check" },
      { label: "Migrate & start API", code: "npm run db:migrate && npm run dev" },
    ],
  },
  {
    slug: "yefhamak",
    title: "Yefhamak (يفهمك)",
    subtitle: "24/7 Egyptian Arabic WhatsApp sales bot and order dashboard for online stores",
    year: "Oct – Nov 2026",
    role: "Product & Full-Stack Developer",
    description:
      "Bilingual AI shopping assistant that replies in Egyptian Arabic and Franco-Arabic, reserves live stock in PostgreSQL, and logs clean orders for merchants.",
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
        "Yefhamak v2 walkthrough: live Egyptian Arabic chat, variant lookup, human handoff, and order creation.",
    },
    screenshots: [
      {
        src: "/projects/yefhamak/01-hero-desktop.png",
        title: "Landing Hero & WhatsApp Preview",
        caption: "Bilingual Arabic and English landing page showing how the WhatsApp bot handles late-night shopper chats.",
      },
      {
        src: "/projects/yefhamak/02-demo-frame-1.png",
        title: "Live Assistant Workspace",
        caption: "The /demo workspace lets you test either browser mock mode or a live local backend.",
      },
      {
        src: "/projects/yefhamak/04-demo-frame-3.png",
        title: "Egyptian Arabic Catalog Lookup",
        caption: "Picks up colloquial product questions, checks live variants and stock, and asks before assuming.",
      },
      {
        src: "/projects/yefhamak/05-seller-orders.png",
        title: "Seller Orders Dashboard",
        caption: "Merchant view showing confirmed orders, EGP totals, and items flagged for review.",
      },
      {
        src: "/projects/yefhamak/06-order-created.png",
        title: "Core Platform Capabilities",
        caption: "Policy Q&A via RAG, stock reservations, live inventory checks, and escalation to a human.",
      },
    ],
    overview:
      "Online shops in Egypt lose sales every night when WhatsApp messages go unanswered until morning or chat orders get typed wrong. Yefhamak pairs a bilingual Next.js site and seller dashboard with a FastAPI and PostgreSQL backend. The AI reads Egyptian Arabic and Franco-Arabic messages and calls strict backend tools, while deterministic Python services handle stock holds, store policy lookup, and final order creation.",
    challenge: {
      problem:
        "Letting an LLM talk freely without guardrails leads to made-up prices, oversold stock when two buyers chat at once, and unverified orders.",
      decision:
        "I locked the OpenRouter model to validated tool calls only. SQLAlchemy services handle short-lived inventory holds, idempotent checkout, per-seller lexical RAG with source links, and handoff to a human when confidence drops.",
      result:
        "All core flows are verified by 45 unit tests, 29 real PostgreSQL integration tests covering concurrent holds and seller isolation, and 36 conversation eval cases.",
    },
    features: [
      {
        title: "Egyptian Dialect & Franco-Arabic",
        detail:
          "Normalizes Arabic, English, and Franco-Arabic queries so shoppers can text the way they normally type on WhatsApp.",
      },
      {
        title: "Concurrent Stock Holds",
        detail:
          "FastAPI and PostgreSQL enforce timed inventory holds, release expired carts, and update stock inside a single transaction.",
      },
      {
        title: "Store Policy RAG",
        detail:
          "Pulls up to three 1,000-character passages from each seller's own docs using Arabic and English synonyms and cites the source.",
      },
      {
        title: "Mock & Live Demo Modes",
        detail:
          "Try the scripted demo right in the browser at /demo, or hook it up to the Docker backend and watch orders land in /seller/orders.",
      },
    ],
    architecture: [
      "Frontend (yefhamak): Bilingual Arabic/English Next.js landing page (/), interactive chat simulator (/demo), seller orders page (/seller/orders), and /contact.",
      "Backend (yefhamak-backend): Python 3.12, FastAPI, SQLAlchemy 2.x, Alembic migrations, PostgreSQL, Pydantic, and an OpenRouter tool-calling loop.",
      "Docker Compose setup plus GitHub Actions CI running 45 unit tests and 29 PostgreSQL integration tests offline.",
      "36-scenario eval suite testing product disambiguation, checkout, RAG answers, and human escalation.",
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
      "Deep learning pipeline for detecting crowd violence, unusual behavior, and density in video",
    year: "Jul 2024 – Nov 2025",
    role: "Computer Vision & ML Engineer (Remote, Saudi Arabia)",
    description:
      "Built with a remote team in Saudi Arabia. Evolved from a Conv3D + LSTM baseline to a hybrid YOLOv8n + 3D CNN + motion channel pipeline hitting 0.865 test F1 macro.",
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
          "Behavior bounding boxes on HAJJv2 validation frames (0.955 mAP@0.5, 0.713 mAP@0.5:0.95).",
      },
      {
        src: "/projects/crowd-anomaly/sample_pred_4c_test.png",
        title: "16-Frame Sequence Prediction",
        caption:
          "4-class multi-label behavior and crowd density predictions on an unseen 16-frame test clip.",
      },
      {
        src: "/projects/crowd-anomaly/hybrid_4c_training_curves.png",
        title: "4-Class Hybrid Training Curves",
        caption:
          "Loss, Jaccard IoU, F1 macro, and subset accuracy tracked across 50 training epochs.",
      },
      {
        src: "/projects/crowd-anomaly/hybrid_4c_val_metrics.png",
        title: "4-Class Validation Metrics",
        caption:
          "Per-class precision, recall, F1, and accuracy hitting 0.948 Val F1 macro and 0.956 Jaccard.",
      },
      {
        src: "/projects/crowd-anomaly/hybrid_4c_test_metrics.png",
        title: "4-Class Test Metrics",
        caption:
          "Held-out test results across 4 grouped behaviors reaching 0.865 F1 macro and 0.865 Jaccard.",
      },
      {
        src: "/projects/crowd-anomaly/yolo_train3_confusion_matrix.png",
        title: "7-Class Confusion Matrix",
        caption:
          "YOLOv8n normalized confusion matrix across sitting, standing, moving opposite, running, and non-human objects.",
      },
      {
        src: "/projects/crowd-anomaly/yolo_train3_results.png",
        title: "YOLOv8n Training Progression",
        caption:
          "40 epochs of box, class, and DFL losses alongside precision, recall, mAP50, and mAP50-95 on HAJJv2.",
      },
    ],
    overview:
      "I worked on this remotely with a team in Saudi Arabia to detect abnormal crowd behavior and estimate crowd density from surveillance video. We trained and evaluated across two benchmarks: binary Crowd Violence Detection and HAJJv2 (both 7-class frame detection and 4-class multi-label clip classification).",
    challenge: {
      problem:
        "Frame-by-frame YOLOv8n looked great on validation (0.955 mAP@0.5 on train3) but fell to 0.417 mAP@0.5 on unseen test footage (val4). Still frames miss motion clues like running or walking against the crowd, and rare classes were heavily outnumbered.",
      decision:
        "We took 10 pretrained YOLOv8n spatial feature layers (256 channels), stacked a cv2.absdiff grayscale motion channel (257 channels total) into a Conv3d temporal head with FocalLoss(alpha=0.25, gamma=2.0) and log1p density prediction, and grouped the 7 uneven labels into 4 macro classes.",
      result:
        "Held-out test generalization jumped from 0.725 to 0.865 F1 macro, with 0.948 F1 macro and 0.956 Jaccard on validation.",
    },
    features: [
      {
        title: "Binary Violence (Conv3D + LSTM)",
        detail:
          "Moved from 2D and 3D CNN baselines to Conv3D + LSTM with 5-Fold Stratified CV (90-frame sequences, Masking, L2), hitting 83.93% ± 6.83% CV accuracy, 82.35% test accuracy, and 0.88 ± 0.08 AUC.",
      },
      {
        title: "YOLOv8n Crowd Detection",
        detail:
          "Trained YOLOv8n (640x640, mosaic augmentation, Soft-NMS) on HAJJv2, getting 0.955 validation mAP@0.5 and showing why single-frame models struggle on motion classes.",
      },
      {
        title: "Hybrid YOLO3DCNN + Motion",
        detail:
          "Fused 10 pretrained YOLOv8n layers (256 ch) with a frame-difference motion channel (cv2.absdiff, 257 ch) into a 3D CNN head plus log-density regression.",
      },
      {
        title: "Focal Loss & 4-Class Grouping",
        detail:
          "Balanced rare behaviors using FocalLoss(alpha=0.25, gamma=2.0) and merged 7 classes into 4 macro groups, raising test F1 macro from 0.725 to 0.865.",
      },
    ],
    architecture: [
      "Phase 1 (src/violence_detection/): TensorFlow/Keras 2D CNN, 3D CNN, Conv3D + LSTM with 5-Fold CV, and an ablation across 5 attention mechanisms.",
      "Phase 2 (src/hajjv2_detection/): PyTorch YOLO3DCNN and YOLO3DCNN_MultiLabel models sampling 16-frame clips with log1p crowd density regression.",
      "Dataset scripts: Portable YOLOv8 config (configs/hajjv2.yaml) and CSV-to-YOLO converter (prepare_yolo_dataset.py).",
      "CLI inference script (infer_4c.py) and repeatable JSON, CSV, and TXT evaluation outputs in reports/.",
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
      "Live tour and travel booking site covering Cairo, Giza, Luxor, Aswan, and the Red Sea",
    year: "Aug 2025 – Jun 2026",
    role: "Full-Stack Web Developer (Remote)",
    description:
      "Built remotely for Egypt bnbn Travel. A Next.js 15 & TypeScript booking platform with 19 tours, dynamic itineraries, booking forms, and Google Sheets reviews.",
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
          "Hero section overlooking Giza with quick category navigation, booking CTAs, and direct WhatsApp links.",
      },
      {
        src: "/projects/egyptbnbn-travel/02-popular-tours.png",
        title: "Popular Tours Catalog",
        caption:
          "Tour cards across Cairo, Alexandria, and Fayoum showing duration, group limit, rating, and starting price.",
      },
      {
        src: "/projects/egyptbnbn-travel/03-tour-booking.png",
        title: "Tour Itinerary & Booking Form",
        caption:
          "Dynamic /tour/[slug] view combining day-by-day plans and inclusions with a live Formik booking form.",
      },
      {
        src: "/projects/egyptbnbn-travel/04-perfect-destinations.png",
        title: "Destinations Carousel",
        caption:
          "Horizontal Embla carousel highlighting Dahab, Hurghada, Luxor, and other travel spots across Egypt.",
      },
    ],
    overview:
      "Built remotely for Egypt bnbn Travel (egyptbnbntravel.com) using Next.js 15 and TypeScript. Visitors can browse 19 tours across five categories (Day Tours, Overday Tours, Multi-Day Packages, Nile Cruises, and Activities), read full itineraries, send booking inquiries, and check recent reviews pulled straight from Google Sheets.",
    challenge: {
      problem:
        "The team wanted a fast, search-friendly website where staff could update guest testimonials easily without maintaining a custom admin panel or database.",
      decision:
        "I structured all 19 tours in typed TypeScript data across five Next.js category routes, built Formik + Radix UI inquiry forms, added JSON-LD SEO markup, and wired an /api/reviews endpoint to Google Sheets.",
      result:
        "Launched the live site at egyptbnbntravel.com with WhatsApp booking links, Vercel Analytics, and spreadsheet-backed reviews the team can update in seconds.",
    },
    features: [
      {
        title: "5-Category Tour Catalog",
        detail:
          "Separate routes for Day Tours, Overday Tours, Package Tours, Nile Cruises, and Activities covering 19 excursions around Egypt.",
      },
      {
        title: "Itineraries & Booking Forms",
        detail:
          "Each /tour/[slug] page lays out highlights, what is included, numbered schedules, and a Formik + Yup form with Radix selects and toast alerts.",
      },
      {
        title: "Google Sheets Reviews API",
        detail:
          "The /api/reviews route reads live guest feedback straight from a Google Sheet using a service account (googleapis).",
      },
      {
        title: "SEO & Analytics",
        detail:
          "Includes canonical URLs, OpenGraph and Twitter cards, Organization and WebSite JSON-LD, WhatsApp shortcuts, and Vercel Analytics.",
      },
    ],
    architecture: [
      "Built with Next.js 15.4 App Router, React 19, TypeScript, Tailwind CSS v4, Playfair Display, and DM Sans.",
      "UI components use Radix UI primitives (@radix-ui/react-select, @radix-ui/react-slot), Lucide icons, and Embla Carousel.",
      "Booking forms run on Formik, validation schemas, FormData posts, and react-hot-toast notifications.",
      "Testimonials are fetched via /api/reviews using base64 Google service-account credentials in environment variables.",
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
