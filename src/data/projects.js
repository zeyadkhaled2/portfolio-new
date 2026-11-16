/**
 * Featured project case studies (media lives in `public/projects/<slug>/`).
 */

export const projects = [
  {
    slug: "devreps",
    title: "DevReps",
    subtitle: "Technical interview practice, live JS execution tracing & interactive CS labs",
    year: "2026",
    role: "Mobile & Full-Stack Developer",
    description:
      "React Native mobile app for practicing scored technical interviews, tracing JavaScript execution line by line, and exploring six interactive data-structure labs.",
    tags: ["React Native", "Expo SDK 58", "TypeScript", "AI Mentor"],
    tone: "obsidian",
    coverImage: "/projects/devreps/03-meet-devreps-home.png",
    secondaryImage: "/projects/devreps/02-js-trace-live.png",
    coverFit: "contain",
    links: [
      { label: "GitHub Repo", href: "https://github.com/zeyadkhaled2/devreps-mobile" },
      { label: "Backend API", href: "https://github.com/zeyadkhaled2/devreps-api" },
    ],
    video: {
      src: "/projects/devreps/devreps-linkedin.mp4",
      poster: "/projects/devreps/03-meet-devreps-home.png",
      portrait: true,
      caption: "DevReps showcase reel — JS puzzles, live execution tracing, CS labs, and interview practice.",
    },
    screenshots: [
      {
        src: "/projects/devreps/03-meet-devreps-home.png",
        title: "Home Hub",
        caption: "Main navigation across JS challenges, interview practice, CS labs, AI Mentor, and progress.",
      },
      {
        src: "/projects/devreps/01-js-challenge-puzzle.png",
        title: "JS Output Puzzle",
        caption: "Nine curated JavaScript puzzles across three difficulty levels running 100% locally.",
      },
      {
        src: "/projects/devreps/02-js-trace-live.png",
        title: "Live Execution Trace",
        caption: "Step-by-step code execution inspector showing console output and variable state.",
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
        caption: "Solve DP problems like climbing stairs and exact change by filling the table step by step.",
      },
    ],
    overview:
      "DevReps is a React Native mobile application built for daily technical interview reps and hands-on computer science intuition. Instead of passive flashcards, learners predict JavaScript output and step through execution line by line, manipulate data structures directly across six interactive labs, and submit interview answers for scored Gemini-powered feedback.",
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
        title: "Six Interactive CS Labs",
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
      "Built with Expo SDK 58, React Native 0.88.1, React 19.3, and TypeScript.",
      "Organized into feature modules (src/features/), stack/tab navigation (src/app/navigation/), and shared UI/API clients (src/shared/).",
      "Offline-first JS puzzles and CS labs ship embedded in the app and store results locally with Expo SecureStore.",
      "Interview evaluation and Mentor chat connect to the companion DevReps API backed by PostgreSQL and Gemini.",
      "Verified with Prettier formatting checks, TypeScript (tsc --noEmit), Node regression tests, and GitHub Actions CI.",
    ],
    techStack: [
      "React Native",
      "Expo SDK 58",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "React Navigation",
      "React Hook Form",
      "Zod",
      "PostgreSQL",
      "Gemini API",
    ],
    readmeCommands: [
      { label: "Install dependencies", code: "npm ci" },
      { label: "Start Expo dev server", code: "npm start" },
      { label: "Run format, typecheck & tests", code: "npm run check" },
    ],
  },
  {
    slug: "yefhamak",
    title: "Yefhamak (يفهمك)",
    subtitle: "24/7 Egyptian Arabic WhatsApp AI sales assistant & merchant order workspace",
    year: "2026",
    role: "Product & Full-Stack Developer",
    description:
      "Bilingual AI sales assistant that chats with shoppers on WhatsApp in Egyptian Arabic and Franco-Arabic, checks live catalog stock, and creates structured merchant orders.",
    tags: ["Next.js", "AI Agents", "WhatsApp", "Egyptian Arabic"],
    tone: "peach",
    coverImage: "/projects/yefhamak/01-hero-desktop.png",
    secondaryImage: "/projects/yefhamak/05-seller-orders.png",
    coverFit: "cover",
    links: [
      { label: "Live Website", href: "https://yefhamak.vercel.app" },
      { label: "Interactive Demo", href: "https://yefhamak.vercel.app/demo" },
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
      "Yefhamak (يفهمك) solves missed late-night WhatsApp messages and lost chat orders for Egyptian e-commerce merchants. Instead of rigid keyword bots, it converses naturally in Egyptian dialect and Franco-Arabic, looks up live product prices, sizes, and stock, answers policy questions via RAG, collects delivery details, and forwards confirmed orders directly to the seller dashboard.",
    features: [
      {
        title: "Egyptian Dialect & Franco-Arabic",
        detail:
          "Handles authentic Egyptian shopper phrasing naturally so conversations feel human rather than scripted.",
      },
      {
        title: "Live Catalog & RAG Knowledge",
        detail:
          "Checks real-time prices, variants, sizes, and inventory availability while answering store policy questions from merchant documents.",
      },
      {
        title: "Tool-Powered Order Capture",
        detail:
          "Guides shoppers step by step through variant selection, name, Egyptian phone number, street address, and city, then logs structured orders.",
      },
      {
        title: "Smart Human Handoff",
        detail:
          "Refuses to guess on out-of-scope or low-confidence questions and immediately escalates the thread to the store owner.",
      },
    ],
    architecture: [
      "Bilingual Next.js storefront and interactive workspace supporting Arabic (RTL) and English (LTR).",
      "Dual-mode /demo workspace: instant browser-only Mock mode plus Live Backend mode connected to a real agent server and database.",
      "Tool-calling assistant pipeline for catalog search, stock verification, order reservation, and merchant escalation.",
      "Merchant Seller Orders console tracking order IDs, customer details, EGP totals, shipping breakdown, and review state.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "AI Tool Calling",
      "RAG",
      "WhatsApp Business",
      "REST API",
      "Vercel",
    ],
    readmeCommands: [
      { label: "Step 01 — Connect", code: "Link WhatsApp Business number" },
      { label: "Step 02 — Upload", code: "Import product & stock sheet" },
      { label: "Step 03 — Receive", code: "Track orders in Seller Dashboard" },
    ],
  },
  {
    slug: "crowd-anomaly-detection",
    title: "Crowd Anomaly Detection",
    subtitle:
      "Multi-stage deep learning pipeline for crowd violence, abnormal behavior & density estimation",
    year: "2026",
    role: "Computer Vision & ML Engineer",
    description:
      "End-to-end vision system progressing from Conv3D + LSTM (5-Fold CV) to a Hybrid YOLOv8n + 3D CNN + Motion Channel + Focal Loss architecture (0.948 Val / 0.865 Test F1 Macro).",
    tags: ["PyTorch", "YOLOv8n", "3D CNN", "TensorFlow", "Computer Vision"],
    tone: "mint",
    coverImage: "/projects/crowd-anomaly/yolo_sample_detection.jpg",
    coverFit: "cover",
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
      "An end-to-end Computer Vision pipeline built for real-time abnormal behavior detection and crowd density estimation across two benchmarks: Crowd Violence Detection (binary sequence classification) and HAJJv2 (7-class object detection and 4-class grouped multi-label spatiotemporal behavior recognition).",
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
];
