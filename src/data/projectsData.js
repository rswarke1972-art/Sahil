import gameImage from "../images/Screenshot (592).png";
import calcImage from "../images/Screenshot (593).png";
import indieflowImage from "../images/Screenshot (599).png";
import unityscriptImage from "../images/Screenshot (600).png";
import fridge2foodImage from "../images/Screenshot (601).png";
import japaneseflowImage from "../images/Screenshot (602).png";
import codemasteryImage from "../images/Screenshot (603).png";
import arabicflowImage from "../images/Screenshot (604).png";
import strokeflowImage from "../images/Screenshot (605).png";
import koreanflowImage from "../images/Screenshot (606).png";
import lexiverseImage from "../images/Screenshot (607).png";
import budhbhushanamImage from "../images/Screenshot (608).png";
import anchortalkImage from "../images/Screenshot (609).png";
import ashtavakraImage from "../images/Screenshot (610).png";
import latinflowImage from "../images/Screenshot (611).png";
import reminderImage from "../images/Screenshot (612).png";
import kurdishflowImage from "../images/Screenshot (613).png";
import farsiflowImage from "../images/Screenshot (614).png";
import idiomverseImage from "../images/Screenshot (615).png";
import langosphereImage from "../images/Screenshot (616).png";
import bondlyImage from "../images/Screenshot (617).png";
import realmoraImage from "../images/Screenshot (618).png";
import fracturedselfImage from "../images/Screenshot (619).png";
import corezenImage from "../images/Screenshot (620).png";
import artysseyImage from "../images/Screenshot (621).png";
import geoclueImage from "../images/Screenshot (622).png";
import dateyumeiImage from "../images/Screenshot (623).png";
import mindhavenImage from "../images/Screenshot (624).png";
import botaniqImage from "../images/Screenshot (625).png";
import mathpeakImage from "../images/Screenshot (626).png";
import memaImage from "../images/Screenshot (627).png";
import goldenbaghdadImage from "../images/Screenshot (628).png";
import pawnovaImage from "../images/Screenshot (629).png";
import threadoraImage from "../images/Screenshot (630).png";
import gateforgeImage from "../images/Screenshot (631).png";
import linguawarImage from "../images/Screenshot (632).png";
import neuropsyImage from "../images/Screenshot (633).png";
import memoraIcon from "../images/memora-icon.png";
import prompticaImage from "../images/Screenshot (635).png";
import audioleafImage from "../images/Screenshot (636).png";
import conjecturaImage from "../images/conjectura.png";
import bookflowImage from "../images/bookflow.png";
import philosopheriaImage from "../images/philosopheria.png";
import tradelabIcon from "../images/tradelab-icon.png";

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "pwa", label: "Web Apps & PWAs" },
  { id: "language", label: "Language & Linguistics" },
  { id: "games", label: "Games & Simulations" },
  { id: "novels", label: "Interactive Visual Novels" },
  { id: "philosophy", label: "Philosophy & Culture" },
  { id: "tools", label: "AI & Productivity Tools" },
];

export const projectsData = [
  {
    id: "conjectura",
    title: "Conjectura",
    subtitle: "The Frontiers of Mathematics & Millennium Hub",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: conjecturaImage,
    liveUrl: "https://rswarke1972-art.github.io/Conjectura/",
    githubUrl: "https://github.com/rswarke1972-art/Conjectura",
    tags: ["PWA", "JavaScript", "KaTeX", "Math Simulation", "Canvas Labs", "Millennium Problems"],
    shortDescription: "An interactive encyclopedia, research command center, and 9-lab simulation PWA exploring the deepest unsolved problems in mathematics, from Millennium Prize Problems to KaTeX formulas.",
    details: {
      generalIdea: "Conjectura is an interactive mathematical encyclopedia, research command center, and simulation laboratory dedicated to the deepest unsolved problems in mathematics. Designed for mathematicians, computer scientists, students, and curious minds, it maps the frontiers of human knowledge, organizing the Millennium Prize Problems, Landau's problems, and classical conjectures into intuitive visual dashboards, multi-level pedagogical explanations, real-time mathematical typesetting, and structured academic roadmaps.",
      keyFeatures: [
        "Millennium Prize Hub: Interactive tracker for the 7 Clay Mathematics Institute Millennium Problems ($1M bounties each) including P vs NP, Riemann Hypothesis, Navier-Stokes, and Yang-Mills",
        "3-Tier Progressive Pedagogy: Every conjecture features progressive pedagogical levels: ELI10 (intuitive conceptual analogy), Undergraduate (formal CS/math rigor), and Advanced (research-level barrier theorems and LaTeX formulations)",
        "9 Real-Time Simulation Labs: Dedicated HTML5 Canvas visualizers for Navier-Stokes fluid dynamics, Collatz hailstone trajectories, Riemann Zeta non-trivial zeros, Mandelbrot & Julia fractals, Ulam prime spiral, Four-Color graph coloring, Monte Carlo probability, and Poincaré 3-manifold topology",
        "Interactive Concept Knowledge Graph: Interactive concept node graph mapping connections between conjectures, foundational models (Turing machines, SAT, Gödel Incompleteness), and modern applications (cryptography, quantum computing)",
        "KaTeX LaTeX Formula Typesetting: Fast client-side rendering of complex mathematical notations, formulas, and proofs in a sleek dark cosmic space aesthetic",
        "Historical Timeline & Mathematician Archive: Chronological evolution of mathematics from ancient Euclidean axioms to modern unproven theorems, cross-referenced with biographies of legendary thinkers (Euler, Gauss, Riemann, Turing, Perelman)",
        "Curated Academic Roadmaps: Structured learning pathways guiding learners from number theory and discrete math up to differential geometry, algebraic topology, and computational complexity",
        "Offline-First PWA Architecture: Full service worker caching with installable desktop/mobile experience and dynamic celestial starfield particle physics"
      ],
      working: "Conjectura is engineered with zero external framework overhead using modular ES JavaScript and KaTeX for real-time mathematical formula rendering. A lightweight client-side hash router delivers instant sub-page transitions without page reloads. Each simulation lab uses custom HTML5 Canvas rendering loops with real-time numeric integration, parametric curve calculations, complex-number coordinate transformations, and responsive resize observers. State management and user preferences persist seamlessly via LocalStorage, while a custom Service Worker provides full offline caching for all mathematical data and visualizers.",
      highlights: "Features 9 dedicated HTML5 Canvas math simulation laboratories, multi-tiered ELI10-to-Advanced progressive explanations, and full PWA installability with an interactive concept knowledge graph.",
      labs: [
        { name: "Collatz Simulator", desc: "Plots hailstone sequences, peak values, stopping times, and distribution histograms in real time." },
        { name: "Fluid Dynamics Lab", desc: "Solves 2D Navier-Stokes equations with adjustable viscosity, velocity vector fields, and vorticity advection." },
        { name: "Fractal Explorer", desc: "Smooth deep-zoom into Mandelbrot and Julia sets with dynamic iteration counts and palette mapping." },
        { name: "Riemann Zeta Lab", desc: "Visualizes the critical line Re(s) = 1/2, computes non-trivial zeros, and tracks Gram point intervals." },
        { name: "Prime Visualizer & Ulam Spiral", desc: "Reveals diagonal prime patterns, prime gaps, and the Prime Counting Function pi(x)." },
        { name: "Graph Coloring Lab", desc: "Four-Color Theorem interactive planar graph sandbox with Kempe chain reduction and chromatic verification." },
        { name: "Probability & Monte Carlo Lab", desc: "Simulates Buffon's needle pi approximations and 2D Brownian random walks." },
        { name: "Topology & Ricci Flow Lab", desc: "Demonstrates 3-manifold surgeries and topological transformations behind the Poincaré Conjecture." }
      ]
    }
  },
  {
    id: "tradelab",
    title: "TradeLab",
    subtitle: "Interactive Financial Markets & Trading Simulator",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: tradelabIcon,
    liveUrl: "https://rswarke1972-art.github.io/TradeLab/",
    githubUrl: "https://github.com/rswarke1972-art/TradeLab",
    tags: ["PWA", "Fintech", "Candlestick Engine", "Market Simulator", "Technical Analysis", "HTML5 Canvas"],
    shortDescription: "High-performance financial trading academy and real-time market simulator with HTML5 Canvas candlestick charting, 7 market regimes, leverage mechanics, and technical indicators.",
    details: {
      generalIdea: "TradeLab is a high-performance interactive trading academy, financial market simulator, and risk-training command center. Designed for aspiring traders, quantitative thinkers, and finance enthusiasts, it bridges the gap between financial theory and real market execution. It provides a zero-risk simulated liquidity environment to master price action reading, execute leveraged Long and Short orders, analyze indicator overlays, draw on-chart support/resistance levels, and build strict risk management discipline.",
      keyFeatures: [
        "Real-Time Canvas Candlestick Engine: Custom 60fps HTML5 Canvas chart renderer with multi-speed playback (1x, 2.5x, 5x, pause), dynamic tick generation, and real-time candle wick and body calculations",
        "7 Dynamic Market Regimes: Realistic algorithmic market simulation covering Bull Market, Bear Market, Range-Bound, High Volatility, Low Volatility, News Spike Events, and Flash Crashes",
        "Leverage & Margin Execution: Long (BUY) and Short (SELL) position execution with 1x to 50x leverage sliders, real-time margin collateral computation, and mark-to-market PnL updates",
        "Technical Indicators & Overlays: Real-time SMA 20, EMA 9, and a 14-period RSI (Relative Strength Index) oscillator sub-panel with overbought (70) and oversold (30) threshold tracking",
        "Interactive On-Chart Charting Tools: Built-in horizontal support and resistance line drawing tool directly on the canvas viewport",
        "Interactive Stop-Loss & Take-Profit Draggers: Dynamic SL/TP inputs and visual draggable price boundary lines on the canvas to simulate professional order management",
        "Gamified Pattern Recognition Quiz: 3D interactive flashcard game testing rapid recognition of Candlestick patterns (Hammer, Shooting Star, Bullish Engulfing, Doji, Morning Star, Harami) with streak scoring",
        "Trader Progression & Achievements: 10-tier XP leveling system, achievement badges (First Trade, Risk Master, Pattern Guru, Profit Streak), and simulated equity curve visualization",
        "Interactive Learning Academy: Five comprehensive modules with interactive sandboxes, concept tests, and a financial glossary"
      ],
      working: "TradeLab is engineered with vanilla modular JavaScript, utilizing requestAnimationFrame and high-frequency HTML5 Canvas rendering for 60fps candlestick drawing. The price engine models realistic stochastic price drift using Geometric Brownian Motion and market-regime drift parameters. State management tracks user portfolio equity, active margin requirements, open leveraged positions, and trade history in LocalStorage. Dynamic indicator calculations update iteratively on new price ticks, while a Service Worker ensures full offline capability.",
      highlights: "Features a custom 60fps Canvas charting engine, 7 distinct market regime simulations, interactive on-chart support/resistance drawing, and leveraged execution with dynamic SL/TP risk boundaries.",
      labs: [
        { name: "Live Candlestick Simulator", desc: "Interactive 60fps canvas engine simulating real-time market ticks, multi-speed playback, and custom timeframes." },
        { name: "7 Market Regimes Engine", desc: "Algorithmic price engines simulating Bull, Bear, Range, High Volatility, Low Volatility, News Spikes, and Flash Crashes." },
        { name: "Leveraged Order Desk", desc: "Execute Long and Short orders with 1x-50x leverage, margin collateral requirements, and dynamic SL/TP targets." },
        { name: "Technical Indicator Suite", desc: "Real-time mathematical overlays for SMA 20, EMA 9, and a dedicated 14-period RSI oscillator sub-panel." },
        { name: "Canvas Charting & Line Tool", desc: "Interactive on-chart drawing tool allowing traders to plot key horizontal support and resistance levels." },
        { name: "Candlestick Pattern Flashcard Lab", desc: "Interactive 3D flashcard quiz training pattern recognition for Hammers, Dojis, Engulfings, and Morning Stars." },
        { name: "Simulated Equity Curve & History", desc: "Live performance visualizer plotting cumulative portfolio growth, win rates, and trade logs in LocalStorage." }
      ]
    }
  },
  {
    id: "philosopheria",
    title: "Philosopheria",
    subtitle: "Digital Atlas of World Philosophy & Greatest Minds",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: true,
    featured: true,
    image: philosopheriaImage,
    liveUrl: "https://rswarke1972-art.github.io/Philosopheria/",
    githubUrl: "https://github.com/rswarke1972-art/Philosopheria",
    tags: ["PWA", "Philosophy", "Comparative Matrix", "Historical Timeline", "Quotes Engine", "Epistemology"],
    shortDescription: "Digital atlas and interactive encyclopedia of world philosophy featuring 16+ thinker profiles, 11 schools of thought, side-by-side comparative matrices, 500+ thematic quotes, and offline PWA installability.",
    details: {
      generalIdea: "Philosopheria serves as an interactive digital atlas, dialectic laboratory, and philosophical encyclopedia. It deconstructs over two millennia of Eastern and Western thought into structured conceptual nodes, comparative dialectic engines, thematic quote explorations, and historical timelines. Designed for students, thinkers, and curious minds, it makes complex metaphysical, epistemological, and ethical frameworks deeply accessible through structured interaction.",
      keyFeatures: [
        "16+ In-Depth Philosopher Profiles: Comprehensive monographs covering core metaphysics, epistemological theories, ethical stances, major published works, and historical legacies from Socrates, Plato, and Aristotle to Kant, Nietzsche, Confucius, and Laozi",
        "Side-by-Side Comparison Engine: Interactive comparative matrix allowing users to select any two thinkers (e.g. Plato vs Aristotle, Locke vs Rousseau, Descartes vs Hume, Marx vs Machiavelli) to examine contrasting viewpoints on human nature, governance, and truth",
        "11 Major Philosophical Schools: Detailed curricular guides for Stoicism, Epicureanism, Rationalism, Empiricism, Existentialism, Utilitarianism, Platonism, Aristotelianism, Pragmatism, Cynicism, and Eastern Traditions",
        "500+ Curated Quotes Engine: Instant search and thematic filtering across categories like Virtue, Freedom, Death, Knowledge, and Truth, complete with one-click copying and daily inspiration loops",
        "Chronological History Timeline: Interactive panoramic timeline traveling from ancient pre-Socratic cosmologies through the Hellenistic, Medieval, Enlightenment, Modern, and Contemporary eras",
        "Daily Exploration Hub: Rotating discovery dashboard highlighting the Philosopher of the Day, Quote of the Day, and School of the Day with immediate deep links",
        "Interactive Conceptual Atlas: Systematic breakdown of philosophy's primary branches: Metaphysics, Epistemology, Ethics, Aesthetics, Political Philosophy, and Logic",
        "PWA Install & Offline Cache: Full Service Worker asset caching, native install prompt integration, and responsive dual-canvas celestial particle backgrounds"
      ],
      working: "Philosopheria is architected using zero-framework vanilla JavaScript and modular CSS design tokens for ultra-fast rendering. Dynamic comparison calculations cross-reference multi-dimensional philosopher data structures on change events. An optimized client-side search engine delivers real-time filtering across profiles, schools, and quotes without network latency. The visual presentation features a custom dual-canvas particle and starfield animation system running at 60fps. Offline resilience is managed through a custom Service Worker pre-caching all HTML routes, stylesheets, and philosopher profile modules.",
      highlights: "Features an interactive side-by-side dialectic comparison engine, a 500+ searchable quotes repository, dual-canvas astronomical visuals, and native PWA installability.",
      labs: [
        { name: "Dialectic Comparison Matrix", desc: "Select any two philosophers to generate a side-by-side breakdown of epistemology, metaphysics, political philosophy, and ethics." },
        { name: "11 Schools of Thought Hub", desc: "Explore foundational tenets, historical founders, key texts, and core methodologies of major philosophical traditions." },
        { name: "500+ Quotes Discovery Engine", desc: "Filter and search classical wisdom by themes like Virtue, Knowledge, Freedom, Death, and Truth with quick copy actions." },
        { name: "Chronological Timeline Atlas", desc: "Interactive chronological map charting the evolution of philosophical thought from 600 BCE to the modern era." },
        { name: "Core Concepts Atlas", desc: "Structural exploration of major philosophical domains including Metaphysics, Epistemology, Ethics, and Logic." },
        { name: "Daily Inspiration & Discovery", desc: "Generates daily rotating philosopher profiles, thought-provoking quotes, and philosophical school recommendations." }
      ]
    }
  },
  {
    id: "memora",
    title: "Memora",
    subtitle: "Mindful PWA Diary & Emotional Memory Vault",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: memoraIcon,
    liveUrl: "https://rswarke1972-art.github.io/memora/",
    githubUrl: "https://github.com/rswarke1972-art/Memora",
    tags: ["PWA", "Mindfulness", "Mood Analytics", "Offline-First", "Sentiment Prompts", "Habit Tracker", "Local Storage"],
    shortDescription: "A peaceful late-night journaling PWA featuring a 10-mood emotional check-in, 12 sentiment feeling tags, dynamic contextual prompt generator, 28-day habit streak tracker, and encrypted local memory vault.",
    details: {
      generalIdea: "Memora is a mindful Progressive Web App diary and emotional memory vault designed for peaceful evening reflection and emotional self-awareness. Created to eliminate the intimidating friction of a blank page, Memora guides users through a calm two-step ritual: checking in with their core emotional state across 10 distinct moods and 12 nuanced feeling tags, and receiving intelligent, psychology-grounded reflection prompts tailored directly to their current sentiment. With local-first encrypted storage, zero telemetry tracking, and serene dark violet twilight aesthetics, Memora transforms daily journaling into a private sanctuary for healing, gratitude, self-discovery, and consistency.",
      keyFeatures: [
        "10-State Emotional Mood Spectrum: Intuitive single-choice mood selector spanning Happy (😊), Calm (😌), Sad (😔), Stressed (😰), Frustrated (😤), Tired (😴), Excited (😍), Confused (😕), Empty (😶), and Peaceful (🤍)",
        "12-Point Granular Feeling Matrix: Multi-select emotional tag cloud enabling users to articulate complex interior states including Gratitude, Anxiety, Hope, Reflection, Regret, Motivation, Loneliness, Love, Anger, Growth, and Stress",
        "Context-Aware Sentiment Prompt Engine: Intelligent heuristic mapping that cross-references chosen moods and feeling tags to dispatch tailored reflection prompts across 10 psychological categories from a 100+ prompt repository",
        "Dynamic Shuffling & Inspiration: Instant one-click prompt refresh ('New prompt ✨') allowing users to explore different angles of self-reflection without losing their emotional check-in context",
        "Real-Time Keystroke Autosave: Instant draft preservation to LocalStorage on every input event, preventing accidental data loss from browser closing, battery death, or tab switching",
        "Memory Vault & Multi-Dimensional Search: Private client-side searchable archive indexing all journal entries with real-time substring filtering across body content, prompts, mood labels, and date stamps",
        "28-Day Consistency Calendar & Streaks: Algorithmic streak computation tracking current consecutive journaling days, all-time record streaks, and a visual 28-day consistency strip with 'Did I write today?' status",
        "Customizable Notification Ritual: Timed reminder scheduler with Web Notification API integration, dispatching gentle evening prompts at user-configured hours with custom vibration patterns",
        "Full-Screen Modal Memory Reader: Distraction-free native HTML5 dialog reader displaying complete diary pages with mood emojis, prompt contexts, timestamps, and one-click entry management",
        "Zero-Telemetry Privacy & Offline PWA: Complete offline capability powered by a dedicated Service Worker caching app shell assets and zero external tracking for total personal privacy"
      ],
      working: "Memora is architected using zero-framework vanilla JavaScript with modular state management and an offline-first storage engine. User profiles, mood preferences, active drafts, and journal entries persist entirely on the client device inside LocalStorage using structured JSON schemas. The streak calculation engine implements a date-difference normalization algorithm that accurately handles midnight rollovers and leap years. Background reminders are scheduled via precision delay timers linked to the Service Worker Notification API with custom deep-linking payloads. The UI leverages modern CSS glassmorphism, soft ambient glow animations, and CSS Keyframe tactile feedback for invalid inputs, while the Service Worker pre-caches all HTML routes, stylesheets, and prompt datasets for seamless offline reliability.",
      highlights: "Features an intelligent 10-mood sentiment prompt generator, real-time keystroke draft autosaving, a 28-day consistency streak tracker, and an encrypted memory vault with full PWA offline capabilities.",
      labs: [
        { name: "10-State Mood Check-in", desc: "Interactive emotional check-in selector mapping 10 primary emotional states with tactile feedback." },
        { name: "12-Tag Feeling Cloud", desc: "Granular emotional tag matrix capturing nuanced feelings like Gratitude, Anxiety, Hope, and Growth." },
        { name: "Sentiment Prompt Engine", desc: "Contextual heuristic algorithm selecting psychology-grounded reflection questions from 10 thematic categories." },
        { name: "Autosave Journal Editor", desc: "Distraction-free writing canvas with live word counts, real-time keystroke draft saving, and date stamps." },
        { name: "Memory Vault & Search", desc: "Encrypted client-side archive with instant multi-field keyword search across memories, moods, and prompts." },
        { name: "28-Day Habit & Streak Matrix", desc: "Algorithmic consistency tracker computing active streaks, personal records, and a 28-day visual calendar." },
        { name: "Scheduled Evening Ritual", desc: "Background Web Notification scheduler dispatching gentle personalized evening reminders with deep links." }
      ]
    }
  },
  {
    id: "bondly",
    title: "Bondly",
    subtitle: "Global Social Network & Language Exchange Community",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: true,
    image: bondlyImage,
    liveUrl: "https://rswarke1972-art.github.io/Bondly/",
    githubUrl: "https://github.com/rswarke1972-art/Bondly",
    tags: ["Firebase", "Real-Time Chat", "Social Network", "Language Partners", "Media Sharing"],
    shortDescription: "A social networking platform to discover friends, language partners, and study peers worldwide featuring real-time messaging, voice notes, and media sharing.",
    details: {
      generalIdea: "Bondly enables meaningful international connections by pairing learners and conversationalists according to shared interests, native languages, and target languages. It fosters cultural exchange without the noise of commercial social media algorithms.",
      keyFeatures: [
        "Real-time one-on-one messaging with delivery receipts and typing indicators",
        "Audio voice message recording, photo uploads, and document sharing",
        "Interest-based discovery feed and mutual language partner matching",
        "User profiles with bio, language proficiency badges, and learning goals",
        "Friend request system and active status indicators"
      ],
      working: "Integrated with Firebase Realtime Database and Firestore for synchronized messaging. Media uploads are processed via cloud storage with client-side image compression for optimal mobile performance.",
      highlights: "Seamless live chat UX with instant optimistic UI updates and responsive mobile-first layout."
    }
  },
  {
    id: "realmora",
    title: "Realmora",
    subtitle: "Multiplayer Kingdom Strategy & Diplomatic Simulation",
    category: "games",
    categoryLabel: "Games & Simulations",
    isPwa: false,
    featured: true,
    image: realmoraImage,
    liveUrl: "https://rswarke1972-art.github.io/Realmora/",
    githubUrl: "https://github.com/rswarke1972-art/Realmora",
    tags: ["Strategy Game", "Multiplayer Simulation", "Diplomacy Engine", "Economy System"],
    shortDescription: "A deep kingdom strategy game where players manage economies, forge alliances, dispatch spies for sabotage, and wage military campaigns in a dynamic political world.",
    details: {
      generalIdea: "Realmora puts players at the helm of a burgeoning kingdom. Success requires balancing food, gold, military strength, diplomatic trust, and internal public morale while navigating unpredictable external political events, rival kingdom treaties, and clandestine espionage.",
      keyFeatures: [
        "Deep resource management system (Gold, Food, Iron, Population, Morale)",
        "Diplomatic treaty negotiations (Non-Aggression Pacts, Trade Routes, Vassalage)",
        "Covert espionage operations (Intelligence gathering, Sabotage, Infiltration)",
        "Turn-based and real-time tactical combat mechanics with army composition strategy",
        "Dynamic world event generator causing droughts, rebellions, economic booms, and plagues"
      ],
      working: "Powered by a state machine that calculates turn economics, diplomatic AI decision weights, probability-based spy outcomes, and combat casualty matrices.",
      highlights: "Features multi-kingdom AI personalities with varying traits such as militaristic, mercantile, pacifist, and deceitful."
    }
  },
  {
    id: "fractured-self",
    title: "Fractured Self",
    subtitle: "Interactive Psychological Visual Novel",
    category: "novels",
    categoryLabel: "Interactive Visual Novels",
    isPwa: false,
    featured: true,
    image: fracturedselfImage,
    liveUrl: "https://rswarke1972-art.github.io/FracturedSelf/",
    githubUrl: "https://github.com/rswarke1972-art/FracturedSelf",
    tags: ["Visual Novel", "Psychological Fiction", "Branching Narrative", "Cinematic Experience"],
    shortDescription: "An atmospheric visual novel where an emotional narrative unfolds scene by scene through cinematic imagery, introspective dialogue, and branching player choices.",
    details: {
      generalIdea: "Fractured Self is an interactive narrative exploring psychological vulnerability, fractured memories, and identity conflict. Players navigate dramatic encounters, uncovering layers of emotional truth through choice-driven dialogue that alters character relationships and narrative climaxes.",
      keyFeatures: [
        "Cinematic scene-by-scene visual progression with immersive audio cues",
        "Branching dialogue options influencing protagonist psychological state",
        "Character relationship meters and memory fragment collection",
        "Multiple story pathways leading to distinct emotional resolutions",
        "Auto-save checkpoint system and dialogue backlog log"
      ],
      working: "Engineered using a structured JSON narrative script engine. The game controller coordinates image transitions, text typewriter effects, soundtrack cues, and conditional flag triggers.",
      highlights: "Atmospheric visual pacing designed to evoke deep psychological introspection and cinematic tension."
    }
  },
  {
    id: "indieflow",
    title: "IndieFlow",
    subtitle: "Indian Language Learning Ecosystem",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: true,
    image: indieflowImage,
    liveUrl: "https://rswarke1972-art.github.io/IndieFlow/",
    githubUrl: "https://github.com/rswarke1972-art/IndieFlow",
    tags: ["Language Learning", "Indian Languages", "Interactive Quizzes", "Cultural Stories"],
    shortDescription: "An interactive Indian language learning platform supporting Hindi, Marathi, Gujarati, Tamil, Bengali, and Sanskrit through character drawing, stories, and quizzes.",
    details: {
      generalIdea: "IndieFlow celebrates the linguistic diversity of India by providing a single cohesive learning hub for major Indic languages. It guides learners from script identification and pronunciation to conversational fluency through culturally rich stories and sentence constructors.",
      keyFeatures: [
        "Support for 6 major Indic languages (Hindi, Marathi, Gujarati, Tamil, Bengali, Sanskrit)",
        "Interactive alphabet & conjunct character learning with pronunciation guides",
        "Story reading mode with clickable word meanings and grammatical notes",
        "Sentence-building drag-and-drop exercises and tense conjugations",
        "Gamified quiz system with accuracy metrics and daily practice goals"
      ],
      working: "Utilizes unicode-aware string manipulation and modular language data packs. Audio pronunciation is integrated with speech synthesis and sound libraries for authentic phonetics.",
      highlights: "Bridges multiple Indian scripts through shared phonetic roots and comparative vocabulary charts."
    }
  },
  {
    id: "japaneseflow",
    title: "JapaneseFlow",
    subtitle: "Comprehensive Japanese Mastery & Kanji Animation Suite",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: true,
    image: japaneseflowImage,
    liveUrl: "https://rswarke1972-art.github.io/JapaneseFlow/",
    githubUrl: "https://github.com/rswarke1972-art/JapaneseFlow",
    tags: ["Japanese Learning", "Kanji Animations", "Hiragana & Katakana", "Audio Stories"],
    shortDescription: "A multimedia Japanese learning platform featuring Hiragana, Katakana, and Kanji systems with stroke animations, audio pronunciation, quizzes, and JLPT tools.",
    details: {
      generalIdea: "JapaneseFlow offers an intuitive pathway to mastering Japanese. From Kana fundamentals to complex Kanji stroke orders, the platform provides interactive visual feedback, audio-integrated stories, and JLPT N5–N3 vocabulary roadmaps.",
      keyFeatures: [
        "Animated stroke order diagrams for Hiragana, Katakana, and essential Kanji",
        "Native audio pronunciation playback for individual syllables and words",
        "Clickable bilingual story reader with furigana toggle and grammar notes",
        "JLPT level-based vocabulary drills and spaced repetition practice",
        "Smart Kanji radical search and meaning lookup engine"
      ],
      working: "Features SVG vector path stroke animations rendered sequentially with CSS stroke-dashoffset transitions. Sound elements are handled through the Web Audio API for zero latency.",
      highlights: "Includes curated YouTube-integrated video lessons, background music playback, and interactive furigana toggles."
    }
  },
  {
    id: "corezen",
    title: "CoreZen",
    subtitle: "Complete Kinesiology, Workout Planning & Fitness Academy",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: corezenImage,
    liveUrl: "https://rswarke1972-art.github.io/CoreZen/",
    githubUrl: "https://github.com/rswarke1972-art/CoreZen",
    tags: ["Fitness Platform", "Exercise Library", "Anatomy Guide", "Workout Planner"],
    shortDescription: "A fitness and kinesiology platform featuring muscle-targeted exercise tutorials, gym machine guides, yoga flows, workout routines, and diet recommendations.",
    details: {
      generalIdea: "CoreZen eliminates workout guesswork by connecting human anatomy with proper exercise form. Users can explore muscle groups on an interactive body map, study step-by-step biomechanical execution, and build customized routines suited for home or gym training.",
      keyFeatures: [
        "Interactive anatomical muscle group explorer (Chest, Back, Legs, Core, Arms, Delts)",
        "Comprehensive exercise library with step-by-step form cues and safety precautions",
        "Gym machine breakdown detailing proper seat adjustments and biomechanics",
        "Guided yoga sequences, mobility drills, and post-workout stretching routines",
        "Nutritional calculator calculating BMR, TDEE, and macro splits for cutting/bulking"
      ],
      working: "Organized around structured JSON exercise datasets filtered by equipment (Barbell, Dumbbell, Cables, Bodyweight). Features responsive video embedding and workout timer state tracking.",
      highlights: "Provides visual muscle activation diagrams showing primary and secondary target zones for every movement."
    }
  },
  {
    id: "artyssey",
    title: "Artyssey",
    subtitle: "Masterpiece Art Analysis, Semiotics & Symbolism Decoder",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: false,
    featured: true,
    image: artysseyImage,
    liveUrl: "https://rswarke1972-art.github.io/Artyssey/",
    githubUrl: "https://github.com/rswarke1972-art/Artyssey",
    tags: ["Art Analysis", "Semiotics", "Visual Storytelling", "Cultural Education"],
    shortDescription: "Decode famous world masterpieces beyond their visual surface through in-depth analysis of hidden symbolism, lighting, color palettes, and historical context.",
    details: {
      generalIdea: "Artyssey is an interactive art museum and educational platform that teaches users how to read paintings like literature. It analyzes artistic masterpieces by decoding hidden symbols, facial expressions, chiaroscuro lighting, color harmony, and socio-political backdrops.",
      keyFeatures: [
        "Detailed artwork deconstruction (Composition, Color Palette, Lighting, Symbolism)",
        "Interactive hotspot annotations highlighting concealed details on famous canvases",
        "Curated art movements timeline (Renaissance, Baroque, Impressionism, Surrealism)",
        "Artist biographies detailing personal struggles, philosophy, and breakthrough techniques",
        "Searchable database by artist, movement, theme, emotion, and subject matter"
      ],
      working: "Utilizes interactive image mapping with zooming capabilities to inspect high-resolution canvas textures, accompanied by synchronized descriptive commentary layers.",
      highlights: "Transforms classical art history into an engaging visual mystery waiting to be unraveled."
    }
  },
  {
    id: "audioleaf",
    title: "AudioLeaf",
    subtitle: "AI Document-to-Audiobook Platform with OCR",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: true,
    image: audioleafImage,
    liveUrl: "https://rswarke1972-art.github.io/AudioLeaf/",
    githubUrl: "https://github.com/rswarke1972-art/AudioLeaf",
    tags: ["OCR", "Text-to-Speech", "AI Audio", "Accessibility", "Document Reader"],
    shortDescription: "An AI-powered document-to-speech studio that converts PDFs, scanned pages, and study notes into natural spoken audiobooks with optical character recognition.",
    details: {
      generalIdea: "AudioLeaf makes written knowledge effortlessly accessible for students, researchers, and visually impaired readers. It allows users to upload documents or book scans, extract clean text using OCR, and listen with natural speech synthesis and synchronized word highlighting.",
      keyFeatures: [
        "Optical Character Recognition (OCR) converting scanned book pages and images to text",
        "Multi-language Text-to-Speech engine with speed, pitch, and voice controls",
        "Real-time synchronized reading tracker highlighting spoken paragraphs",
        "Reading progress bookmarking and text export capabilities",
        "Distraction-free dark mode reader with customizable typography"
      ],
      working: "Integrates client-side OCR processing with the Web Speech API and PDF.js parsing engine to extract structured textual content without requiring heavy external server pipelines.",
      highlights: "Empowers multimodal learning by allowing simultaneous audio listening and text following."
    }
  },
  {
    id: "promptica",
    title: "Promptica",
    subtitle: "AI Prompt Engineering Repository & Workflow Optimizer",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: true,
    image: prompticaImage,
    liveUrl: "https://rswarke1972-art.github.io/Promptica/",
    githubUrl: "https://github.com/rswarke1972-art/Promptica",
    tags: ["Prompt Engineering", "AI Tools", "Productivity", "LLM Workflows"],
    shortDescription: "An AI prompt discovery and optimization platform organizing high-performance prompts for ChatGPT, Claude, and LLMs across coding, writing, research, and business.",
    details: {
      generalIdea: "Promptica helps users unlock the true potential of large language models. It provides a curated library of structured prompt frameworks, system prompts, few-shot templates, and domain-specific workflows that yield consistent, high-accuracy AI outputs.",
      keyFeatures: [
        "Curated prompt library categorized by skill (Coding, Writing, Marketing, Research)",
        "1-click prompt variable customization with instant preview",
        "Prompt effectiveness ratings and output quality guidelines",
        "Fast 1-click clipboard copying and favorite bookmarking",
        "Structured system prompt templates for roleplay and specialized agents"
      ],
      working: "Built with responsive client-side state management, variable injection parsing, and instantaneous keyword filtering across hundreds of verified prompt templates.",
      highlights: "Includes prompt engineering cheatsheets explaining chain-of-thought, tree-of-thought, and few-shot paradigms."
    }
  },
  {
    id: "gateforge",
    title: "GATEFORGE",
    subtitle: "Data-Driven Engineering Exam Preparation & Analytics Portal",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: gateforgeImage,
    liveUrl: "https://rswarke1972-art.github.io/GATEFORGE/",
    githubUrl: "https://github.com/rswarke1972-art/GATEFORGE",
    tags: ["PWA", "Exam Analytics", "GATE Prep", "Study Tracking", "AIR Predictor"],
    shortDescription: "A comprehensive GATE preparation platform featuring previous year question practice, subject-wise weak area analytics, error journals, and AIR rank prediction.",
    details: {
      generalIdea: "GATEFORGE transforms engineering exam preparation into an analytical, feedback-driven process. It highlights specific weak concepts, tracks revision cycles, and predicts probable all-India rankings based on test accuracy and speed.",
      keyFeatures: [
        "Subject-wise and topic-wise PYQ practice test engine with timer",
        "Weakness heatmaps identifying low-accuracy engineering subjects",
        "Automated Error Journal logging recurring conceptual mistakes",
        "Spaced repetition revision scheduler preventing forgotten formulas",
        "Data-driven AIR (All India Rank) predictor algorithm based on benchmark scores"
      ],
      working: "Calculates statistical percentiles and accuracy ratios using client-side analytics algorithms. Test sessions and error logs are stored locally for immediate performance retrospectives.",
      highlights: "Provides actionable diagnostic feedback after every mock test session."
    }
  },
  {
    id: "mathpeak",
    title: "MathPeak",
    subtitle: "Gamified Mathematics Learning & Problem-Solving Arena",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: mathpeakImage,
    liveUrl: "https://rswarke1972-art.github.io/MathPeak/",
    githubUrl: "https://github.com/rswarke1972-art/MathPeak",
    tags: ["PWA", "Math Learning", "Gamified Education", "Formula Library", "Streaks"],
    shortDescription: "A gamified mathematics platform guiding learners from foundational algebra to calculus through interactive challenges, formula references, and mastery streaks.",
    details: {
      generalIdea: "MathPeak makes mastering mathematics engaging and rewarding. It replaces tedious drills with gamified levels, visual equation balance models, real-time formula sheets, and continuous learning streaks that turn abstract math into an intuitive journey.",
      keyFeatures: [
        "Step-by-step mathematical learning paths (Arithmetic, Algebra, Geometry, Calculus)",
        "Interactive equation visualizers and formula reference index",
        "Gamified streak system, XP counters, and level progression badges",
        "Speed math arena testing mental arithmetic and shortcut calculations",
        "Daily math challenge mode with detailed step-by-step solutions"
      ],
      working: "Uses an interactive logic parser for verifying input equations and dynamic SVG graphs for displaying geometric coordinate systems and function slopes.",
      highlights: "Seamless PWA support allows uninterrupted offline math practice on any device."
    }
  },
  {
    id: "pawnova",
    title: "Pawnova",
    subtitle: "Modern Chess Academy, Tactical Puzzles & AI Sparring Engine",
    category: "games",
    categoryLabel: "Games & Simulations",
    isPwa: false,
    featured: true,
    image: pawnovaImage,
    liveUrl: "https://rswarke1972-art.github.io/Pawnova/",
    githubUrl: "https://github.com/rswarke1972-art/Pawnova",
    tags: ["Chess Platform", "Tactics Trainer", "AI Bot", "Opening Repertoire", "Strategy"],
    shortDescription: "A modern chess training suite featuring interactive tactical puzzles, opening repertoire explorers, AI sparring bots, and gamified progress tracking.",
    details: {
      generalIdea: "Pawnova delivers a sleek, distraction-free environment for chess enthusiasts to elevate their tactical vision, memorize opening variations, and test their skills against adaptive chess bots.",
      keyFeatures: [
        "Interactive chessboard with smooth drag-and-drop piece physics",
        "Tactical puzzle trainer with Elo ratings and thematic puzzle categories",
        "Opening explorer detailing Sicilian, French, Italian, and King's Gambit lines",
        "Built-in AI chess engine offering adjustable difficulty levels",
        "Move evaluation indicators, captured piece tracking, and game PGN export"
      ],
      working: "Powered by a lightweight JavaScript chess move validator and mini-max evaluation engine with alpha-beta pruning for bot decision making.",
      highlights: "Clean glassmorphic dark board aesthetic with instant move hint animations."
    }
  },
  {
    id: "neuropsy",
    title: "NeuroPsy",
    subtitle: "Neuropsychology, Brain Anatomy & Cognitive Science Guide",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: neuropsyImage,
    liveUrl: "https://rswarke1972-art.github.io/NeuroPsy/",
    githubUrl: "https://github.com/rswarke1972-art/NeuroPsy",
    tags: ["Neuroscience", "Cognitive Science", "Brain Anatomy", "Psychology Learning"],
    shortDescription: "An interactive neuropsychology guide exploring brain anatomy, neurotransmitters, cognitive disorders, memory systems, and neuroplasticity.",
    details: {
      generalIdea: "NeuroPsy makes complex neuroscience accessible and fascinating. It organizes the human brain's intricate biological systems into interactive anatomical diagrams, neurotransmitter pathway maps, and clinical disorder case studies.",
      keyFeatures: [
        "Interactive 2D anatomical brain map (Lobes, Limbic System, Brainstem)",
        "Neurotransmitter encyclopedia (Dopamine, Serotonin, GABA, Acetylcholine)",
        "Cognitive psychology modules covering memory encoding, perception, and bias",
        "Psychological and neurological disorder profiles (ADHD, Alzheimer's, PTSD)",
        "Knowledge evaluation quizzes with detailed diagnostic explanations"
      ],
      working: "Built with a responsive multi-tab layout and dynamic SVG hotspot elements that highlight specific cerebral cortex regions on hover and click.",
      highlights: "Integrates clinical psychology insights with biological neuroscience fundamentals."
    }
  },
  {
    id: "botaniq",
    title: "Botaniq",
    subtitle: "Interactive Botany Encyclopedia & Plant Care Ecosystem",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: false,
    image: botaniqImage,
    liveUrl: "https://rswarke1972-art.github.io/Botaniq/",
    githubUrl: "https://github.com/rswarke1972-art/Botaniq",
    tags: ["Botany", "Plant Care", "Encyclopedia", "Bonsai", "Nature Guide"],
    shortDescription: "A relaxing botanical learning platform and plant care companion featuring species encyclopedias, bonsai guides, medicinal herbs, and growth trackers.",
    details: {
      generalIdea: "Botaniq combines botanical education with practical horticulture. Users can explore plant kingdoms, learn ancient bonsai techniques, study medicinal botany, and manage indoor plant watering schedules.",
      keyFeatures: [
        "Comprehensive plant encyclopedia with botanical taxonomy and care metrics",
        "Bonsai styling and pruning guide with step-by-step techniques",
        "Medicinal herbs and traditional ethnobotany reference guide",
        "Personal plant care tracker with watering and fertilization reminders",
        "Calming nature-inspired aesthetic with soothing ambient themes"
      ],
      working: "Features a structured JSON botanical database and client-side care schedule reminder state stored in the browser.",
      highlights: "Infuses scientific botanical rigor with serene aesthetic design."
    }
  },
  {
    id: "mindhaven",
    title: "MindHaven",
    subtitle: "Mental Wellness, Guided Breathing & CBT Journaling Sanctuary",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: false,
    image: mindhavenImage,
    liveUrl: "https://rswarke1972-art.github.io/MindHaven/",
    githubUrl: "https://github.com/rswarke1972-art/MindHaven",
    tags: ["Mental Health", "Mindfulness", "Breathing Exercises", "CBT Tools"],
    shortDescription: "A mental wellness sanctuary providing calming exercises, box breathing timers, grounding techniques, CBT coping strategies, and crisis support resources.",
    details: {
      generalIdea: "MindHaven offers an immediate refuge during moments of acute stress, panic, loneliness, or emotional overwhelm. It provides evidence-based grounding tools to regulate the nervous system and re-center the mind.",
      keyFeatures: [
        "Animated 4-7-8 and Box Breathing visual pacing circles",
        "5-4-3-2-1 Sensory Grounding interactive walkthrough",
        "Cognitive Behavioral Therapy (CBT) thought re-framing worksheet",
        "Emergency crisis helpline directory with instant calling links",
        "Daily positive affirmation generator and mood check-in"
      ],
      working: "Employs CSS keyframe animations for smooth, soothing breathing guides and zero-latency client-side interaction.",
      highlights: "Designed with calming deep tones, soft animations, and zero telemetry for maximum peace of mind."
    }
  },
  {
    id: "golden-baghdad",
    title: "Golden Baghdad",
    subtitle: "Abbasid Golden Age Interactive Historical Chronicle",
    category: "novels",
    categoryLabel: "Interactive Visual Novels",
    isPwa: false,
    featured: false,
    image: goldenbaghdadImage,
    liveUrl: "https://rswarke1972-art.github.io/GoldenBaghdad/",
    githubUrl: "https://github.com/rswarke1972-art/GoldenBaghdad",
    tags: ["History", "Abbasid Era", "Interactive Story", "House of Wisdom"],
    shortDescription: "An interactive historical chronicle following Harun al-Rashid's reign, the House of Wisdom, scientific breakthroughs, and diplomatic relations during the Islamic Golden Age.",
    details: {
      generalIdea: "Golden Baghdad immerses readers in one of history's most vibrant intellectual epochs. Through chapter-based interactive storytelling, users experience the founding of the Bayt al-Hikma (House of Wisdom), astronomical discoveries, and global diplomatic exchanges.",
      keyFeatures: [
        "Chapter-by-chapter historical narrative with authentic illustrations",
        "Interactive House of Wisdom scholar index (Al-Khwarizmi, Al-Kindi, Hunayn)",
        "Diplomatic timeline of relations between Baghdad and Charlemagne",
        "Historical artifact and scientific invention gallery",
        "Reading milestone badges and historical comprehension trivia"
      ],
      working: "Organized as a modular multi-chapter reader with smooth progress tracking and contextual footnotes.",
      highlights: "Illuminates historical science, poetry, and philosophy through rich narrative immersion."
    }
  },
  {
    id: "mema",
    title: "MEMA",
    subtitle: "Choice-Driven Interactive Adaptation of Emma",
    category: "novels",
    categoryLabel: "Interactive Visual Novels",
    isPwa: false,
    featured: false,
    image: memaImage,
    liveUrl: "https://rswarke1972-art.github.io/Mema/",
    githubUrl: "https://github.com/rswarke1972-art/Mema",
    tags: ["Visual Novel", "Jane Austen", "Choice-Driven", "Multiple Endings"],
    shortDescription: "A choice-driven visual novel adaptation of Jane Austen's Emma exploring social nuances, matchmaking dilemmas, and personal growth across multiple branching endings.",
    details: {
      generalIdea: "MEMA reinterprets Jane Austen's timeless novel Emma into an interactive drama where player decisions dictate romantic outcomes, social harmony, and personal redemption.",
      keyFeatures: [
        "Branching dialogue choices with real-time reputation and empathy meters",
        "Multiple possible story conclusions ranging from tragedy to romance",
        "Authentic period-inspired character dialogue and art assets",
        "Character relationship codex tracking trust levels with key figures",
        "Scene replay and ending gallery unlocked upon completion"
      ],
      working: "A tree-structured story node graph executes choices, branches variables, and triggers condition-based ending states.",
      highlights: "Captures the wit, irony, and social commentary of classical romantic literature."
    }
  },
  {
    id: "dateyumei",
    title: "DateYumei",
    subtitle: "Personalized Interactive Romance Visual Novel",
    category: "novels",
    categoryLabel: "Interactive Visual Novels",
    isPwa: false,
    featured: false,
    image: dateyumeiImage,
    liveUrl: "https://rswarke1972-art.github.io/DateYumei/",
    githubUrl: "https://github.com/rswarke1972-art/DateYumei",
    tags: ["Visual Novel", "Romance Narrative", "Interactive Story", "Personalized"],
    shortDescription: "An interactive romance visual novel where players experience a heartfelt, personalized story with Yumei through emotional dialogue, artwork, and narrative choices.",
    details: {
      generalIdea: "DateYumei creates an intimate visual storytelling experience where player input, name personalization, and dialogue selections build trust, vulnerability, and romance.",
      keyFeatures: [
        "Dynamic player name injection throughout story dialogue",
        "Multi-scene visual progression with emotional music cues",
        "Affection and trust gauges that influence scene outcomes",
        "Interactive date scenarios with unique dialogue variations",
        "Multiple emotional resolutions and memory gallery"
      ],
      working: "Uses an interactive dialogue engine with character portrait expressions that update in real-time based on conversation sentiment.",
      highlights: "Heartwarming character-driven visual storytelling with personalized immersion."
    }
  },
  {
    id: "linguawar",
    title: "LinguaWar",
    subtitle: "Real-Time Multiplayer Linguistic Battle Arena",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: linguawarImage,
    liveUrl: "https://rswarke1972-art.github.io/LinguaWar/",
    githubUrl: "https://github.com/rswarke1972-art/LinguaWar",
    tags: ["Language Battle", "Multiplayer Game", "Gamified Learning", "Speed Translation"],
    shortDescription: "A multiplayer language learning battle platform where players duel in real-time speed translations, sentence construction, and cultural trivia.",
    details: {
      generalIdea: "LinguaWar gamifies language fluency into rapid-fire competitive battles. Players test their vocabulary reflexes, translation speed, and grammar precision against opponents to climb ranked leagues.",
      keyFeatures: [
        "Real-time speed translation duels against player bots and opponents",
        "Competitive rank tiers from Bronze to Grandmaster",
        "Streak multipliers, power-ups, and combo point boosts",
        "Multi-language challenge sets (Spanish, French, German, Japanese)",
        "Post-match error review and vocabulary drill flashcards"
      ],
      working: "Client-side timer state engine with rapid fuzzy string matching for instant answer validation and combat HP animations.",
      highlights: "Transforms language practice into an adrenaline-fueled competitive arena."
    }
  },
  {
    id: "threadora",
    title: "Threadora",
    subtitle: "Interactive Crochet, Knitting & Fiber Arts Academy",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: false,
    image: threadoraImage,
    liveUrl: "https://rswarke1972-art.github.io/Threadora/",
    githubUrl: "https://github.com/rswarke1972-art/Threadora",
    tags: ["Crochet Learning", "Knitting Guide", "Fiber Arts", "Pattern Library"],
    shortDescription: "A creative crafting platform featuring step-by-step stitch diagrams, guided pattern libraries, and project roadmaps from beginner to advanced fiber arts.",
    details: {
      generalIdea: "Threadora demystifies yarn arts. It provides structured visual tutorials for mastering single, double, and treble crochet stitches, reading complex pattern charts, and completing finished handmade garments.",
      keyFeatures: [
        "Interactive stitch library with animated hook movement diagrams",
        "Searchable pattern repository filtered by skill level, yarn weight, and hook size",
        "Interactive row and stitch counter with project progress saving",
        "Yarn substitution calculator and yardage estimator",
        "Community pattern gallery and project inspiration boards"
      ],
      working: "Features responsive SVG stitch schematics and local storage project counters to keep place during live crafting.",
      highlights: "Empowers makers with structured skill trees from first slip knot to complex amigurumi."
    }
  },
  {
    id: "budhbhushanam",
    title: "Budhbhushanam",
    subtitle: "Classical Leadership, Diplomacy & Statecraft Verse Decoder",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: false,
    featured: false,
    image: budhbhushanamImage,
    liveUrl: "https://rswarke1972-art.github.io/Budhbhushanam/",
    githubUrl: "https://github.com/rswarke1972-art/Budhbhushanam",
    tags: ["Sanskrit Treatise", "Leadership Wisdom", "Statecraft", "Verse Decoder"],
    shortDescription: "A verse interpretation platform exploring King Sambhaji's Sanskrit treatise on statecraft, ethics, leadership principles, and modern practical applications.",
    details: {
      generalIdea: "Budhbhushanam unlocks the ancient Sanskrit political and ethical treatise composed by Chhatrapati Sambhaji Maharaj. The platform decodes classical shlokas into clear modern insights on leadership, diplomacy, governance, and moral fortitude.",
      keyFeatures: [
        "Verse-by-verse Sanskrit text with Devanagari script and transliteration",
        "Word-by-word grammatical breakdown and multi-language translations",
        "Practical modern leadership and strategic decision-making takeaways",
        "Thematic categorization (Rajniti, Fortitude, Diplomacy, Justice)",
        "Search engine filtering verses by keyword, principle, and theme"
      ],
      working: "Organized as a structured digital corpus with interactive shloka cards and cross-referenced historical commentary.",
      highlights: "Preserves classical Indian statecraft wisdom with contemporary executive relevance."
    }
  },
  {
    id: "anchortalk",
    title: "AnchorTalk",
    subtitle: "Empathetic Dialogue & Supportive Crisis Communication Simulator",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: false,
    image: anchortalkImage,
    liveUrl: "https://rswarke1972-art.github.io/AnchorTalk/",
    githubUrl: "https://github.com/rswarke1972-art/AnchorTalk",
    tags: ["Communication Skills", "Empathy Training", "Crisis Scenarios", "Active Listening"],
    shortDescription: "An interactive communication training simulator practicing supportive, non-violent, and empathetic dialogue for individuals facing emotional crises.",
    details: {
      generalIdea: "AnchorTalk teaches people how to respond constructively when friends or colleagues undergo panic, grief, burnout, or emotional distress. It trains active listening, validation, and de-escalation while avoiding toxic positivity.",
      keyFeatures: [
        "Realistic conversation roleplay scenarios with emotionally distressed virtual personas",
        "Multiple choice response paths evaluating empathy, validation, and judgment",
        "Real-time feedback explaining why specific phrases comfort or alienate individuals",
        "Active listening guide and de-escalation communication handbook",
        "Scenario completion certificates and empathy score badges"
      ],
      working: "A multi-branch scenario engine grades dialogue choices based on psychological validation principles.",
      highlights: "Provides practical, real-world communication tools to prevent accidental emotional invalidation."
    }
  },
  {
    id: "ashtavakra",
    title: "Ashtavakra Gita Decoder",
    subtitle: "Non-Dual Advaita Philosophy & Self-Inquiry Platform",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: false,
    featured: false,
    image: ashtavakraImage,
    liveUrl: "https://rswarke1972-art.github.io/AstavakraGitaDecoder/",
    githubUrl: "https://github.com/rswarke1972-art/AstavakraGitaDecoder",
    tags: ["Philosophy", "Advaita Vedanta", "Self Inquiry", "Verse Decoder"],
    shortDescription: "A philosophical interpretation platform decoding the teachings of the Ashtavakra Gita through word-by-word meanings, logic, debates, and self-inquiry reflections.",
    details: {
      generalIdea: "The Ashtavakra Gita is one of the pinnacle texts of non-dualist (Advaita) philosophy. This platform decodes the radical dialogues between Sage Ashtavakra and King Janaka, guiding seekers toward direct realization of consciousness, freedom, and inner stillness.",
      keyFeatures: [
        "Comprehensive chapter-by-chapter Sanskrit verses with audio recitations",
        "Deep analytical commentary deconstructing ego, attachment, and awareness",
        "Socratic inquiry prompts encouraging personal meditation and introspection",
        "Searchable glossary of Vedantic terms (Brahman, Maya, Moksha, Sakshi)",
        "Daily contemplative shloka widget and bookmarking"
      ],
      working: "Features a clean contemplative reader interface with adjustable font sizes and collapsible commentary panes.",
      highlights: "Translates ancient non-dual philosophy into clear, profound self-inquiry for modern seekers."
    }
  },
  {
    id: "lexiverse",
    title: "LexiVerse",
    subtitle: "Contextual Literature & Interactive Etymology Explorer",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: lexiverseImage,
    liveUrl: "https://rswarke1972-art.github.io/LexiVerse/",
    githubUrl: "https://github.com/rswarke1972-art/LexiVerse",
    tags: ["Vocabulary", "Literature", "Etymology", "Interactive Stories"],
    shortDescription: "An immersive vocabulary learning platform where users explore interactive literature, clicking words to instantly discover meanings, origins, and etymology.",
    details: {
      generalIdea: "LexiVerse transforms reading into an effortless vocabulary expansion session. Instead of memorizing isolated word lists, users read engaging literary stories where every uncommon word is clickable, revealing its Latin/Greek roots, synonyms, antonyms, and historical evolution.",
      keyFeatures: [
        "Curated interactive short stories embedded with advanced vocabulary",
        "Instant popup word definitions, audio pronunciation, and etymological roots",
        "Personal vocabulary vault storing words learned during reading sessions",
        "Spaced repetition flashcard quizzes testing newly acquired words",
        "Contextual usage examples and connotation comparisons"
      ],
      working: "Constructed with inline semantic text tagging and a lightweight dictionary lookup indexing engine.",
      highlights: "Merges the joy of literature with systematic lexical acquisition."
    }
  },
  {
    id: "arabicflow",
    title: "ArabicFlow",
    subtitle: "Complete Arabic Script, 4-Position Forms & Dialect Suite",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: arabicflowImage,
    liveUrl: "https://rswarke1972-art.github.io/ArabicFlow/",
    githubUrl: "https://github.com/rswarke1972-art/ArabicFlow",
    tags: ["Arabic Learning", "Letter Forms", "Dialects", "Interactive Stories"],
    shortDescription: "A comprehensive Arabic platform featuring letter learning in all 4 positions (isolated, initial, medial, final), stories in 5 dialects, and quizzes.",
    details: {
      generalIdea: "ArabicFlow breaks down the complexities of the Arabic script. It systematically guides learners through all four contextual letter variations, root word derivations, and cultural dialogues across Levantine, Egyptian, Gulf, Maghrebi, and Modern Standard Arabic.",
      keyFeatures: [
        "Visual 4-position letter chart (Isolated, Initial, Medial, Final)",
        "Dialect comparison modules (MSA, Egyptian, Levantine, Gulf, Moroccan)",
        "Interactive Arabic short stories with audio and English translations",
        "Root letter (Jadr) exploration showing word family trees",
        "Arabic typing and spelling practice keyboard drills"
      ],
      working: "Features RTL layout styling, dynamic Arabic ligatures, and responsive audio pronunciation integration.",
      highlights: "Addresses both Modern Standard Arabic (Fusha) and living spoken dialects in one ecosystem."
    }
  },
  {
    id: "strokeflow",
    title: "StrokeFlow",
    subtitle: "Mandarin Chinese Character & HSK Stroke Order Suite",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: strokeflowImage,
    liveUrl: "https://rswarke1972-art.github.io/StrokeFlow/",
    githubUrl: "https://github.com/rswarke1972-art/StrokeFlow",
    tags: ["Chinese Learning", "HSK System", "Stroke Order", "Radicals"],
    shortDescription: "A Mandarin character platform structured around HSK 1–6 levels, featuring animated stroke orders, radical breakdowns, pinyin, and quizzes.",
    details: {
      generalIdea: "StrokeFlow provides a visual, systematic approach to memorizing Chinese Hanzi. Learners master correct stroke directions, understand radical compositions, and retain vocabulary through HSK level-based stories.",
      keyFeatures: [
        "Animated stroke-by-stroke character writing animations with speed control",
        "HSK 1 to HSK 6 structured vocabulary progression",
        "Interactive radical breakdown showing semantic and phonetic components",
        "Tone visualization with native pinyin pronunciation audio",
        "Character recognition and tone selection practice quizzes"
      ],
      working: "SVG stroke coordinates are rendered dynamically with timed animation delays to reflect authentic calligraphy pacing.",
      highlights: "Transforms daunting Chinese characters into logical, memorable building blocks."
    }
  },
  {
    id: "koreanflow",
    title: "KoreanFlow",
    subtitle: "Interactive Hangul Block Constructor & Audio Stories",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: koreanflowImage,
    liveUrl: "https://rswarke1972-art.github.io/KoreanFlow/",
    githubUrl: "https://github.com/rswarke1972-art/KoreanFlow",
    tags: ["Korean Learning", "Hangul", "Audio Stories", "Syllable Constructor"],
    shortDescription: "An interactive Korean learning platform featuring Hangul syllable construction, audio-assisted stories with instant translations, and quizzes.",
    details: {
      generalIdea: "KoreanFlow makes learning Hangul effortless. It guides users through combining consonants and vowels into syllable blocks, practicing batchim rules, and reading interactive K-drama inspired cultural stories.",
      keyFeatures: [
        "Interactive Hangul block builder combining initial, medial, and final consonants",
        "Batchim (final consonant) sound-change rule visualizer",
        "Clickable Korean story reader with instant romanization and English meanings",
        "Essential conversational phrases categorized by situations",
        "Hangul listening and vocabulary matching games"
      ],
      working: "Handles dynamic Korean unicode composition algorithms to synthesize correct syllable blocks from individual jamo inputs.",
      highlights: "Offers intuitive audio feedback and real-world conversational Korean phrases."
    }
  },
  {
    id: "latinflow",
    title: "LatinFlow",
    subtitle: "European & Romance Languages Mastery Platform",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: latinflowImage,
    liveUrl: "https://rswarke1972-art.github.io/LatinFlow/",
    githubUrl: "https://github.com/rswarke1972-art/LatinFlow",
    tags: ["Romance Languages", "Spanish", "French", "German", "Grammar Drills"],
    shortDescription: "A multilingual platform supporting Spanish, French, German, Italian, Portuguese, and Indonesian through quizzes, stories, and tense conjugations.",
    details: {
      generalIdea: "LatinFlow accelerates language acquisition across European tongues by leveraging shared Latin and Germanic linguistic roots, providing comparative verb conjugation tables and immersive stories.",
      keyFeatures: [
        "Support for 6 major languages (Spanish, French, German, Italian, Portuguese, Indonesian)",
        "Verb conjugation drills across Present, Past, Future, and Subjunctive tenses",
        "Interactive bilingual stories with audio and vocabulary highlights",
        "Sentence rearrangement and grammar puzzle challenges",
        "Daily practice streak tracking and progress analytics"
      ],
      working: "Modular language JSON structures allow cross-language comparison and rapid conjugation lookups.",
      highlights: "Enables comparative polyglot learning across cognate-rich European languages."
    }
  },
  {
    id: "kurdishflow",
    title: "KurdishFlow",
    subtitle: "Kurdish Language & Dialect Exploration Portal",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: kurdishflowImage,
    liveUrl: "https://rswarke1972-art.github.io/KurdishFlow/",
    githubUrl: "https://github.com/rswarke1972-art/KurdishFlow",
    tags: ["Kurdish Learning", "Kurmanji", "Sorani", "Cultural Language"],
    shortDescription: "An interactive Kurdish learning platform featuring Kurmanji (Latin script) and Sorani (Arabic script) alphabets, audio stories, and quizzes.",
    details: {
      generalIdea: "KurdishFlow preserves and promotes Kurdish linguistic heritage by teaching both Kurmanji and Sorani writing systems, cultural proverbs, and fundamental conversational vocabulary.",
      keyFeatures: [
        "Dual script support for Kurmanji (Latin) and Sorani (Perso-Arabic) alphabets",
        "Audio-assisted vocabulary pronunciation and phonetic guides",
        "Interactive Kurdish folklore stories with line-by-line translations",
        "Grammar structure guides covering noun cases and verb tenses",
        "Vocabulary retention quizzes with instant scoring"
      ],
      working: "Employs bi-directional text rendering (LTR & RTL) depending on the selected Kurdish dialect script.",
      highlights: "Provides one of the few interactive web resources for dual-dialect Kurdish language study."
    }
  },
  {
    id: "farsiflow",
    title: "FarsiFlow",
    subtitle: "Persian Language, Poetic Heritage & Script Studio",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: farsiflowImage,
    liveUrl: "https://rswarke1972-art.github.io/FarsiFlow/",
    githubUrl: "https://github.com/rswarke1972-art/FarsiFlow",
    tags: ["Persian Learning", "Farsi Script", "Poetry Analysis", "Conversational"],
    shortDescription: "A Persian language ecosystem featuring alphabet mastery, classical poetic literature breakdowns (Rumi, Hafez), and conversational practice.",
    details: {
      generalIdea: "FarsiFlow connects modern Persian conversation with classical Persian poetry. Learners study the Farsi alphabet, everyday dialogues, and explore poetic verses with line-by-line grammatical breakdowns.",
      keyFeatures: [
        "Farsi alphabet interactive chart with audio pronunciation",
        "Classical Persian poetry reader (Hafez, Rumi, Saadi) with word annotations",
        "Common conversational phrases for daily interactions and travel",
        "Interactive vocabulary flashcard drills with spaced repetition",
        "Persian calligraphy stroke appreciation module"
      ],
      working: "Optimized for Persian typography with Noto Nastaliq and Persian Nastaliq web fonts.",
      highlights: "Celebrates the rich poetic tradition of Iran alongside practical language fluency."
    }
  },
  {
    id: "idiomverse",
    title: "IdiomVerse",
    subtitle: "Interactive English Idioms & Figurative Language Mastery",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: idiomverseImage,
    liveUrl: "https://rswarke1972-art.github.io/IdiomVerse/",
    githubUrl: "https://github.com/rswarke1972-art/IdiomVerse",
    tags: ["Idioms", "English Learning", "Figurative Language", "Etymology"],
    shortDescription: "An interactive idioms learning platform exploring historical origins, real-life usage, and contextual nuances through stories and quizzes.",
    details: {
      generalIdea: "IdiomVerse helps non-native English speakers and writers master figurative expressions, idioms, and colloquial phrases by exploring their fascinating historical origins.",
      keyFeatures: [
        "Extensive idiom dictionary detailing literal vs figurative meanings",
        "Historical origins and etymology for famous English expressions",
        "Contextual interactive stories where idioms are highlighted and explained",
        "Multiple-choice idiom situation quizzes",
        "Idiom search engine categorized by emotion, theme, and difficulty"
      ],
      working: "Built with fast client-side filtering and responsive card layouts with copyable example sentences.",
      highlights: "Makes understanding tricky figurative idioms intuitive and memorable."
    }
  },
  {
    id: "langosphere",
    title: "LangoSphere",
    subtitle: "Multilingual Sentence Syntax Deconstructor & Grammar Parser",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: false,
    featured: false,
    image: langosphereImage,
    liveUrl: "https://rswarke1972-art.github.io/LangoSphere-/",
    githubUrl: "https://github.com/rswarke1972-art/LangoSphere",
    tags: ["Syntax Analyzer", "Sentence Breakdown", "Grammar Parsing", "Linguistics"],
    shortDescription: "A sentence-learning platform offering deep grammatical deconstruction, word-by-word translations, syntax analysis, and contextual alternatives.",
    details: {
      generalIdea: "LangoSphere breaks foreign sentences into their fundamental linguistic components. Instead of memorizing whole phrases blindly, users see how grammar, particles, and tenses interconnect.",
      keyFeatures: [
        "Word-by-word morphological breakdown of complex sentences",
        "Grammar part-of-speech color-coded tags (Subject, Verb, Object, Particle)",
        "Side-by-side alternative phrasing with nuances explained",
        "Interactive sentence constructor puzzles",
        "Multi-language sentence repository"
      ],
      working: "Visualizes syntactic trees and tokenized word nodes using responsive flexbox blocks.",
      highlights: "Provides unmatched structural clarity into foreign language sentence architecture."
    }
  },
  {
    id: "leadership-strategy-simulator",
    title: "Leadership Strategy Simulator",
    subtitle: "Moral Governance, Political Analytics & Strategic Game",
    category: "games",
    categoryLabel: "Games & Simulations",
    isPwa: false,
    featured: false,
    image: gameImage,
    liveUrl: "https://rswarke1972-art.github.io/",
    githubUrl: "https://github.com/rswarke1972-art",
    tags: ["Strategy Simulator", "Morality System", "Decision Matrix", "Analytics"],
    shortDescription: "A complex decision-making simulation featuring morality systems, leadership rankings, political analytics, and branching consequences.",
    details: {
      generalIdea: "This simulation challenges players to govern a state under crisis. Every executive decree impacts economic stability, public trust, military readiness, and moral legacy.",
      keyFeatures: [
        "Multi-variable decision engine (Economy, Morale, Power, Morality)",
        "Dynamic crisis scenario generator requiring ethical trade-offs",
        "Comprehensive post-game leadership archetype analysis",
        "Historical leader performance benchmarking",
        "Branching political consequence trees"
      ],
      working: "Calculates impact vectors across interdependent societal metrics on every player turn.",
      highlights: "Forces players to confront realistic moral dilemmas with no simple solutions."
    }
  },
  {
    id: "geoclue",
    title: "GeoClue",
    subtitle: "Deductive Geography & Cultural Clues Quiz Platform",
    category: "games",
    categoryLabel: "Games & Simulations",
    isPwa: false,
    featured: false,
    image: geoclueImage,
    liveUrl: "https://rswarke1972-art.github.io/GeoClue/",
    githubUrl: "https://github.com/rswarke1972-art/GeoClue",
    tags: ["Geography Game", "Deductive Quiz", "Country Trivia", "World Exploration"],
    shortDescription: "An educational geography quiz where players identify mystery countries using cultural, historical, geographical, and geopolitical clues.",
    details: {
      generalIdea: "GeoClue turns global geography into a detective game. Players uncover progressive clues from flag hints and currency to historical landmarks trying to identify the mystery nation with minimal clues.",
      keyFeatures: [
        "Deductive clue system with score multipliers for fast identification",
        "World trivia database covering over 190 recognized sovereign nations",
        "Timed speed round modes and continent-specific challenge filters",
        "Educational country profiles unlocked upon correct guesses",
        "Global high score leaderboards and streak tracking"
      ],
      working: "Randomizes nation data packs and tracks point deductions dynamically as additional clues are requested.",
      highlights: "Expands geographic, geopolitical, and cultural literacy in an addictive game format."
    }
  },
  {
    id: "unityscript",
    title: "UnityScript",
    subtitle: "Philosophical & Spiritual Scripture Exploration Hub",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: false,
    featured: false,
    image: unityscriptImage,
    liveUrl: "https://rswarke1972-art.github.io/UnityScript/",
    githubUrl: "https://github.com/rswarke1972-art/UnityScript",
    tags: ["Scripture Analysis", "Philosophy", "Comparative Religion", "Daily Wisdom"],
    shortDescription: "A structured scripture learning platform that explores spiritual and philosophical texts through verse analysis, real-life application, and insight systems.",
    details: {
      generalIdea: "UnityScript builds bridges across world spiritual and philosophical texts. It analyzes verses from diverse traditions side by side, highlighting universal ethical principles.",
      keyFeatures: [
        "Cross-tradition verse comparison engine",
        "Word-by-word commentary and philosophical reflection notes",
        "Daily meditative verse reader with contextual interpretations",
        "Thematic indexing (Compassion, Duty, Non-Violence, Transience)",
        "Searchable archive of classical aphorisms"
      ],
      working: "Engineered with modular JSON verse cross-links and responsive dark reading layouts.",
      highlights: "Fosters interfaith and inter-philosophical understanding through universal wisdom."
    }
  },
  {
    id: "fridge2food",
    title: "Fridge2Food",
    subtitle: "Smart Recipe Generator, Ingredient Matcher & Nutrition Suite",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: false,
    image: fridge2foodImage,
    liveUrl: "https://rswarke1972-art.github.io/Fridge2Food/",
    githubUrl: "https://github.com/rswarke1972-art/Fridge2Food",
    tags: ["Recipe Finder", "Pantry Matcher", "Nutrition Tracking", "Meal Prep"],
    shortDescription: "A smart cooking platform that generates recipes based on available pantry ingredients, complete with nutrition insights and step-by-step timers.",
    details: {
      generalIdea: "Fridge2Food reduces food waste and solves daily cooking fatigue. Users select what they currently have in their kitchen, and the platform suggests matching recipes with nutritional breakdown.",
      keyFeatures: [
        "Pantry ingredient checklist and smart recipe matching algorithm",
        "Nutritional macro breakdown (Calories, Protein, Carbs, Fats) per serving",
        "Interactive step-by-step cooking mode with built-in timers",
        "Dietary filter presets (Vegetarian, Vegan, Gluten-Free, High-Protein)",
        "Shopping list generator for missing ingredients"
      ],
      working: "Filters recipe collections by calculating overlapping ingredient availability scores.",
      highlights: "Empowers healthy home cooking while preventing food waste."
    }
  },
  {
    id: "codemastery",
    title: "CodeMastery",
    subtitle: "Interactive DSA & Algorithm Problem Solving Arena",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: false,
    image: codemasteryImage,
    liveUrl: "https://rswarke1972-art.github.io/CodeMastery/",
    githubUrl: "https://github.com/rswarke1972-art/CodeMastery",
    tags: ["Coding Platform", "Data Structures", "Algorithms", "DSA Practice"],
    shortDescription: "An interactive programming practice platform allowing users to solve coding problems, study structured DSA solutions, and practice algorithms.",
    details: {
      generalIdea: "CodeMastery guides computer science students through data structures and algorithms (Arrays, Linked Lists, Trees, Graphs, Dynamic Programming) with structured solution walkthroughs.",
      keyFeatures: [
        "Curated problem sets categorized by difficulty and topic",
        "Step-by-step solution breakdowns with time & space complexity analysis",
        "Interactive code visualizer illustrating pointer and recursion steps",
        "Interview preparation roadmaps (Blind 75 & NeetCode style)",
        "Syntax highlighted code viewer with 1-click copy"
      ],
      working: "Integrated with PrismJS code highlighting and client-side test case verification runners.",
      highlights: "Transforms complex DSA concepts into digestible, interview-ready problem frameworks."
    }
  },
  {
    id: "react-calculator",
    title: "React Scientific Calculator",
    subtitle: "Advanced Scientific Computation & Variable Memory Suite",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: false,
    image: calcImage,
    liveUrl: "https://rswarke1972-art.github.io/react-calculator/",
    githubUrl: "https://github.com/rswarke1972-art/react-calculator",
    tags: ["React", "Scientific Calculator", "Tailwind", "Math Parser"],
    shortDescription: "An advanced scientific calculator built with React, featuring variable memory registers, custom functions, format modes, and complex equations.",
    details: {
      generalIdea: "A feature-packed scientific calculation suite built in React, designed with tactile responsiveness, memory registers, trigonometric functions, logarithmic evaluations, and history tape.",
      keyFeatures: [
        "Full scientific operations (Trig, Hyperbolic, Logarithms, Exponentials, Radicals)",
        "Memory registers (M+, M-, MR, MC) and custom variable storage",
        "Interactive calculation history tape with previous answer recall",
        "Radian and Degree angle mode toggles",
        "Keyboard shortcut support for rapid desktop entry"
      ],
      working: "Built with React state hooks, robust mathematical expression tokenizers, and resilient error boundary guards.",
      highlights: "Sleek dark neumorphic-inspired UI with instant formula parsing."
    }
  },
  {
    id: "reminder-system",
    title: "Reminder System",
    subtitle: "Smart Habit Tracker, Task Scheduler & Weekly Planner",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: false,
    image: reminderImage,
    liveUrl: "https://rswarke1972-art.github.io/reminder/",
    githubUrl: "https://github.com/rswarke1972-art/reminder",
    tags: ["Productivity", "Task Manager", "Weekly Planner", "Habit Tracker"],
    shortDescription: "A productivity-focused task and reminder platform helping users schedule activities, plan weeks, track habits, and manage repeating tasks.",
    details: {
      generalIdea: "A clean, efficient productivity suite designed to organize daily schedules, manage recurring task cycles, and track consistent habit development without bloat.",
      keyFeatures: [
        "Weekly calendar view with drag-and-drop task prioritization",
        "Recurring task rules (Daily, Weekly, Monthly, Custom intervals)",
        "Habit completion streak counters and productivity graphs",
        "Category tagging and priority matrix (Eisenhower quadrant)",
        "Browser notification reminders for time-sensitive tasks"
      ],
      working: "Persists schedule and habit histories in LocalStorage with scheduled time comparison routines.",
      highlights: "Focuses on clean usability and friction-free daily workflow planning."
    }
  },
  {
    id: "bookflow",
    title: "BookFlow",
    subtitle: "Digital Library & Bookstore PWA with Offline Caching",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: false,
    image: bookflowImage,
    liveUrl: "https://rswarke1972-art.github.io/BookFlow/",
    githubUrl: "https://github.com/rswarke1972-art/BookFlow",
    tags: ["PWA", "Digital Library", "Book Store", "Offline Reading", "Auth"],
    shortDescription: "A modern digital library and bookstore Progressive Web App featuring authentication, offline caching, reading progress tracking, and curated collections.",
    details: {
      generalIdea: "BookFlow delivers a seamless mobile and desktop reading catalog. Users can browse curated literary works, track reading progress, bookmark favorite passages, and read saved books offline.",
      keyFeatures: [
        "Curated digital book catalog with genre tags and author profiles",
        "PWA offline caching for books and assets via custom service worker",
        "User authentication and personal bookshelf management",
        "In-browser EPUB/PDF reader with font and theme customizations",
        "Reading speed stats, bookmarking, and progress sync"
      ],
      working: "Constructed with responsive client-side routing, service worker cache management, and LocalStorage book progress state.",
      highlights: "Provides a smooth, native app-like bookstore experience installable on any device."
    }
  },
  {
    id: "ehsaas-e-alfaaz",
    title: "Ehsaas-e-Alfaaz",
    subtitle: "Original Shayari, Poetry Archive & Search Platform",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: false,
    featured: false,
    image: farsiflowImage, // elegant poetic preview
    liveUrl: "https://rswarke1972-art.github.io/Ehsaas-e-Alfaaz/",
    githubUrl: "https://github.com/rswarke1972-art/Ehsaas-e-Alfaaz",
    tags: ["Poetry", "Shayari", "Devanagari", "Cultural Literature"],
    shortDescription: "A personal collection of original Hindi and Urdu shayari with categorized emotional themes, copy-to-clipboard utilities, and real-time search.",
    details: {
      generalIdea: "Ehsaas-e-Alfaaz is a dedicated poetic sanctuary hosting an original anthology of Hindi and Urdu shayari. It presents heartfelt couplets on love, longing, healing, and existential introspection.",
      keyFeatures: [
        "Curated archive of original shayari formatted in Devanagari typography",
        "Categorized by emotional themes (Mohabbat, Zindagi, Tanhai, Khwaab)",
        "Instant 1-click clipboard copy utility for easy sharing",
        "Real-time instant search across titles, lines, and categories",
        "Minimalist aesthetic emphasizing poetic readability"
      ],
      working: "Uses JSON data fetch with dynamic client-side filtering and the Clipboard API for instant copying.",
      highlights: "Presents original literary verse in an elegant, distraction-free typographic layout."
    }
  },
  {
    id: "amharicflow",
    title: "AmharicFlow",
    subtitle: "Ethiopic Fidel Script & Vocabulary Mastery",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: false,
    image: indieflowImage,
    liveUrl: "https://rswarke1972-art.github.io/languages/AmharicFlow/",
    githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/AmharicFlow",
    tags: ["PWA", "Amharic", "Ethiopic Script", "Fidel", "Ge'ez"],
    shortDescription: "Master the Amharic Fidel script through interactive character grids, calligraphy tracing, spaced repetition flashcards, and cultural stories.",
    details: {
      generalIdea: "AmharicFlow provides a comprehensive learning platform for the Ethiopic Ge'ez script used in Amharic. It guides learners through the 142 Fidel characters organized by consonant families, with daily challenges, audio pronunciation, and interactive stories.",
      keyFeatures: [
        "Interactive Fidel character grid organized by consonant families (Ha, Hu, Hi, He, Ho)",
        "Daily deterministic character challenge with speak, trace, and reveal modes",
        "Calligraphy practice with animated stroke tracing and handwriting feedback",
        "Spaced Repetition System (SRS) flashcards with SM-2 algorithm",
        "Interactive Amharic stories with word-by-word translation tooltips",
        "Audio pronunciation using Web Speech API for authentic phonetics",
        "Family mastery tracking showing completion by consonant family"
      ],
      working: "Built as a Progressive Web App with service worker caching. Uses LocalStorage for progress tracking, streak counting, and SRS card scheduling. Features responsive glassmorphic UI with dark mode support.",
      highlights: "Deterministic daily character challenges ensure consistent practice while family-based tracking provides granular progress visibility."
    }
  },
  {
    id: "armenianflow",
    title: "ArmenianFlow",
    subtitle: "Armenian Alphabet, Vocabulary & Cultural Stories",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: false,
    image: indieflowImage,
    liveUrl: "https://rswarke1972-art.github.io/languages/ArmenianFlow/",
    githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/ArmenianFlow",
    tags: ["PWA", "Armenian", "Haykakan", "Alphabet", "Culture"],
    shortDescription: "Learn the 39-letter Armenian alphabet with interactive character grids, calligraphy practice, vocabulary drills, and cultural storytelling.",
    details: {
      generalIdea: "ArmenianFlow teaches the unique Armenian script created by Mesrop Mashtots. It covers both uppercase and lowercase letters, vocabulary building, sentence construction, and cultural context through interactive stories.",
      keyFeatures: [
        "39-letter Armenian alphabet explorer with uppercase and lowercase forms",
        "Daily alphabet challenge with speak, trace, and reveal functionality",
        "Calligraphy tracing practice with stroke order guidance",
        "SRS flashcard system with learning, young, mature, and mastered queues",
        "Interactive cultural stories with instant translation tooltips",
        "Sentence builder for grammar construction practice",
        "Vocabulary mastery dashboard with categorized word lists",
        "PWA install banner with online/offline status indicators"
      ],
      working: "Progressive Web App with service worker for offline access. Uses LocalStorage for streak tracking, character visitation, and SRS card management. Features online/offline status detection and adaptive UI.",
      highlights: "Includes daily deterministic challenges and vowel/consonant classification tracking for structured learning progression."
    }
  },
  {
    id: "burmeseflow",
    title: "BurmeseFlow",
    subtitle: "Myanmar Script, Vocabulary & Cultural Learning",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: false,
    image: indieflowImage,
    liveUrl: "https://rswarke1972-art.github.io/languages/BurmeseFlow/",
    githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/BurmeseFlow",
    tags: ["PWA", "Burmese", "Myanmar Script", "Language Learning"],
    shortDescription: "Master the Burmese Myanmar script with 43+ characters, vocabulary building, script construction lab, and interactive cultural stories.",
    details: {
      generalIdea: "BurmeseFlow teaches the complex Myanmar script used in Burmese. It covers consonants, vowels, diacritics, and script composition rules through interactive tools including a script construction lab for understanding character formation.",
      keyFeatures: [
        "43+ Myanmar character grid with consonants, vowels, and diacritics",
        "Script Construction Lab for understanding character composition rules",
        "Daily script challenge with audio pronunciation and tracing",
        "SRS flashcard system with spaced repetition algorithm",
        "Interactive stories with word-by-word translation",
        "Sentence grammar builder for practice",
        "Vocabulary mastery with 244 words across categories",
        "PWA with offline mode and online/offline status indicators"
      ],
      working: "Built as PWA with service worker caching. Uses LocalStorage for progress, streaks, and SRS queues. Features script construction lab for understanding complex Myanmar character composition rules.",
      highlights: "Script Construction Lab uniquely teaches how Burmese characters are composed from base consonants and diacritics."
    }
  },
  {
    id: "cyrillicflow",
    title: "CyrillicFlow",
    subtitle: "Multilingual Cyrillic Script Learning Platform",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: false,
    image: indieflowImage,
    liveUrl: "https://rswarke1972-art.github.io/languages/CyrillicFlow/",
    githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/CyrillicFlow",
    tags: ["PWA", "Cyrillic", "Russian", "Multilingual", "Alphabet"],
    shortDescription: "Learn Cyrillic scripts across multiple languages including Russian, Serbian, Bulgarian, Ukrainian, and Macedonian with SRS flashcards.",
    details: {
      generalIdea: "CyrillicFlow is a multilingual platform for learning Cyrillic scripts used across Slavic and non-Slavic languages. It supports language switching, comparative phrase analysis, and comprehensive character learning.",
      keyFeatures: [
        "Multi-language support (Russian, Serbian, Bulgarian, Ukrainian, Macedonian)",
        "Character alphabet grids with pronunciation and examples",
        "SRS flashcard system with SM-2 spaced repetition algorithm",
        "Multilingual comparison tool for greeting phrases side-by-side",
        "Sentence builder for grammar practice",
        "Story mode with interactive translations",
        "Achievement badges and streak tracking",
        "PWA install prompt with service worker caching"
      ],
      working: "Modular architecture with language-specific data files. Uses LocalStorage for progress per language, SRS card management, and achievement tracking. Features comparative multilingual tools.",
      highlights: "Unique multilingual comparison feature allows learning Cyrillic variations across different languages simultaneously."
    }
  },
  {
    id: "georgianflow",
    title: "GeorgianFlow",
    subtitle: "Mkhedruli Script, Grammar & Cultural Journey",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: false,
    image: indieflowImage,
    liveUrl: "https://rswarke1972-art.github.io/languages/GeorgianFlow/",
    githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/GeorgianFlow",
    tags: ["PWA", "Georgian", "Mkhedruli", "Grammar", "Culture"],
    shortDescription: "Master the 33-letter Georgian Mkhedruli script through unit-based learning, vocabulary, grammar construction, and cultural immersion.",
    details: {
      generalIdea: "GeorgianFlow provides a structured 5-unit learning path for the Georgian language. From alphabet mastery to cultural immersion, it guides learners through vocabulary, grammar, stories, and Georgian traditions like Supra feasts.",
      keyFeatures: [
        "33-letter Mkhedruli alphabet explorer with phonetic sounds",
        "Unit-based roadmap with progressive unlocking system",
        "Daily missions board with streak tracking",
        "SRS flashcard queues (Learning, Young, Mature, Mastered)",
        "Grammar constructor for sentence building practice",
        "Interactive stories with tooltip dictionary",
        "Cultural journey module covering traditions and history",
        "Achievement badge locker for milestones"
      ],
      working: "Progressive Web App with unit-based unlocking system. Uses LocalStorage for mission progress, SRS queues, and unit completion tracking. Features daily missions and achievement system.",
      highlights: "Unit-based roadmap with progressive unlocking creates structured learning path from alphabet to cultural fluency."
    }
  },
  {
    id: "greekflow",
    title: "GreekFlow",
    subtitle: "Modern Greek Alphabet, Vocabulary & Culture",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: false,
    image: indieflowImage,
    liveUrl: "https://rswarke1972-art.github.io/languages/GreekFlow/",
    githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/GreekFlow",
    tags: ["PWA", "Greek", "Modern Greek", "Alphabet", "Culture"],
    shortDescription: "Learn Modern Greek with 24-letter alphabet, vocabulary building, grammar exercises, and cultural exploration of Greek heritage.",
    details: {
      generalIdea: "GreekFlow teaches Modern Greek language and culture. It covers the Greek alphabet, vocabulary across categories, grammar construction, stories, and cultural aspects of Greek heritage including mythology and traditions.",
      keyFeatures: [
        "24-letter Modern Greek alphabet with pronunciation",
        "Vocabulary explorer with 250+ words across categories",
        "Grammar constructor for sentence building",
        "Interactive stories with translation tooltips",
        "Cultural module covering Greek heritage and traditions",
        "SRS flashcard system with spaced repetition",
        "Calligraphy practice for letter writing",
        "Unit-based learning progression system"
      ],
      working: "PWA with service worker for offline access. Uses LocalStorage for progress tracking, SRS management, and unit completion. Features cultural content integration.",
      highlights: "Combines language learning with deep cultural exploration of Greek heritage and traditions."
    }
  },
  {
    id: "hebrewflow",
    title: "HebrewFlow",
    subtitle: "Hebrew Alphabet, Vocabulary & Biblical Studies",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: false,
    image: indieflowImage,
    liveUrl: "https://rswarke1972-art.github.io/languages/HebrewFlow/",
    githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/HebrewFlow",
    tags: ["PWA", "Hebrew", "Aleph-Bet", "Biblical Hebrew", "RTL"],
    shortDescription: "Learn Hebrew with right-to-left script, 22-letter Aleph-Bet, vocabulary, grammar, and biblical text exploration.",
    details: {
      generalIdea: "HebrewFlow teaches the Hebrew language with focus on both Modern and Biblical Hebrew. It covers the 22-letter Aleph-Bet, right-to-left script, vocabulary, grammar, and includes biblical text study components.",
      keyFeatures: [
        "22-letter Hebrew Aleph-Bet with final letter forms",
        "Right-to-left (RTL) script support throughout",
        "Vocabulary builder with Modern and Biblical Hebrew words",
        "Grammar constructor for Hebrew sentence structure",
        "Biblical text exploration with verse analysis",
        "Interactive stories with translation support",
        "Audio pronunciation for authentic Hebrew phonetics",
        "SRS flashcard system for vocabulary retention"
      ],
      working: "PWA with RTL layout support. Uses LocalStorage for progress tracking and SRS management. Features specialized biblical text components alongside modern language learning.",
      highlights: "Unique integration of Biblical Hebrew text study with modern language learning in RTL interface."
    }
  },
  {
    id: "nepaliflow",
    title: "NepaliFlow",
    subtitle: "Devanagari Script, Nepali Vocabulary & Culture",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: false,
    image: indieflowImage,
    liveUrl: "https://rswarke1972-art.github.io/languages/NepaliFlow/",
    githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/NepaliFlow",
    tags: ["PWA", "Nepali", "Devanagari", "Hindi-Nepali", "Culture"],
    shortDescription: "Learn Nepali using Devanagari script with vocabulary, grammar, sentence building, and cultural exploration of Nepali traditions.",
    details: {
      generalIdea: "NepaliFlow teaches the Nepali language using the Devanagari script shared with Hindi. It covers vocabulary, grammar, sentence construction, and cultural aspects of Nepal including festivals and traditions.",
      keyFeatures: [
        "Devanagari script learning with Nepali-specific characters",
        "Vocabulary explorer with Nepali words and phrases",
        "Grammar constructor for Nepali sentence structure",
        "Interactive stories with Nepali cultural context",
        "Cultural module covering Nepali festivals and traditions",
        "SRS flashcard system for vocabulary retention",
        "Sentence builder for grammar practice",
        "Unit-based learning progression"
      ],
      working: "PWA with service worker caching. Uses LocalStorage for progress tracking and SRS management. Features cultural content specific to Nepali heritage.",
      highlights: "Teaches Nepali within the broader Devanagari script ecosystem with specific cultural focus on Nepal."
    }
  },
  {
    id: "subjects-notes",
    title: "SUBJECTS CS/IT Notes",
    subtitle: "Computer Science & IT Academic Resource Hub",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: false,
    image: codemasteryImage,
    liveUrl: "https://rswarke1972-art.github.io/SUBJECTS/",
    githubUrl: "https://github.com/rswarke1972-art/SUBJECTS",
    tags: ["Education", "Computer Science", "IT Notes", "Academic Resources"],
    shortDescription: "Comprehensive academic notes covering Web Development, DBMS, Data Mining, EVS, IoT, and Computer Science units for engineering students.",
    details: {
      generalIdea: "SUBJECTS provides structured academic notes for Computer Science and IT engineering students. It covers 5 major subjects with detailed unit-wise content, concepts, and study materials.",
      keyFeatures: [
        "Web Development notes (HTML, CSS, JavaScript, PHP, Backend)",
        "DBMS comprehensive notes with database concepts and SQL",
        "Data Mining unit-wise content with algorithms and techniques",
        "Environmental Science (EVS) study materials",
        "IoT (Internet of Things) notes with practical concepts",
        "Organized unit-wise structure for easy navigation",
        "Clean, readable academic formatting",
        "Quick reference for exam preparation"
      ],
      working: "Static HTML-based academic resource with organized unit-wise content structure. Simple navigation between subjects and units.",
      highlights: "Provides comprehensive academic coverage for multiple CS/IT subjects in one organized resource hub."
    }
  },
  {
      id: "gateforge",
      title: "GATEFORGE",
      subtitle: "Forge Your AIR Rank - GATE CSE Command Center",
      category: "education",
      categoryLabel: "Education & Learning",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/GATEFORGE/",
      githubUrl: "https://github.com/rswarke1972-art/GATEFORGE",
      tags: ["PWA", "GATE", "CSE", "Exam Prep", "Engineering"],
      shortDescription: "Ultimate GATE CSE preparation command center with subjects, theory hub, battle mode, revision, journal, analytics, mock tests, predictor, and planner.",
      details: {
        generalIdea: "GATEFORGE is a comprehensive preparation platform for GATE Computer Science Engineering aspirants. It provides a command center interface with authentication, subject-wise learning, theory hub, competitive battle mode, revision tools, journaling, analytics, mock tests, rank predictor, and study planner. The app uses a dark theme with glassmorphic UI and tracks progress through achievements.",
        keyFeatures: [
          "Authentication system with sign up, sign in, and guest mode for offline access",
          "Subject-wise learning modules with comprehensive CS/IT curriculum coverage",
          "Theory Hub with detailed explanations and concept repositories",
          "Battle Mode for competitive practice against other aspirants",
          "Revision system with spaced repetition and weak topic identification",
          "Study Journal for tracking daily progress and notes",
          "Analytics dashboard with performance metrics and insights",
          "Mock Test simulator with real exam patterns and time management",
          "AIR Rank Predictor based on performance and historical data",
          "Study Planner with daily goals and milestone tracking",
          "Achievement system for motivation and progress recognition",
          "Responsive design with mobile and desktop navigation"
        ],
        working: "Built as a Progressive Web App with service worker for offline mode. Uses localStorage for progress tracking, user data, and authentication state. Features modular JavaScript architecture with separate modules for each section. Implements glassmorphic UI with dark theme and smooth animations.",
        highlights: "Comprehensive GATE preparation platform combining learning, practice, analytics, and planning in one unified command center interface."
      }
    },
    {
      id: "goldenbaghdad",
      title: "GoldenBaghdad",
      subtitle: "Rule the Golden Age - Abbasid Historical Strategy",
      category: "game",
      categoryLabel: "Games & Entertainment",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/GoldenBaghdad/",
      githubUrl: "https://github.com/rswarke1972-art/GoldenBaghdad",
      tags: ["PWA", "Strategy Game", "History", "Abbasid", "Visual Novel"],
      shortDescription: "Experience the rise of the Abbasid Golden Age through an immersive historical strategy game with story mode, timeline, encyclopedia, and empire map.",
      details: {
        generalIdea: "GoldenBaghdad is an immersive historical strategy game set during the Abbasid Golden Age. Players take on the role of a young prince navigating political intrigue, managing relationships with scholars, military, merchants, citizens, and viziers. The game features story mode with branching choices, historical timeline, encyclopedia of people and places, and an interactive empire map.",
        keyFeatures: [
          "Story mode with branching narrative and meaningful choices",
          "Character relationship system with multiple factions",
          "Stat tracking for Knowledge, Empire Stability, Military Power, and Wealth",
          "Historical timeline with key events and periods",
          "Encyclopedia with categories for people, places, science, politics, trade, and religion",
          "Interactive empire map with city information",
          "Achievement system for completing milestones",
          "Settings for music, sound effects, animations, and dark parchment mode",
          "Progress saving and continue functionality",
          "Premium fonts and atmospheric visual design"
        ],
        working: "Built as a web application with PWA capabilities. Uses localStorage for progress tracking, relationship states, and achievements. Features modular JavaScript with separate files for story, choices, progress, relationships, achievements, timeline, encyclopedia, map, sound, and settings. Implements atmospheric visual design with premium fonts and animations.",
        highlights: "Immersive historical strategy experience combining narrative storytelling with strategic decision-making in the Abbasid Golden Age setting."
      }
    },
    {
      id: "lexiverse",
      title: "LexiVerse",
      subtitle: "Layered Vocabulary Experience",
      category: "language",
      categoryLabel: "Language & Linguistics",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/LexiVerse/",
      githubUrl: "https://github.com/rswarke1972-art/LexiVerse",
      tags: ["PWA", "Vocabulary", "Reading", "Grammar", "Language Learning"],
      shortDescription: "A layered vocabulary experience blending storytelling with linguistic evolution. Explore complex words with pronunciations, meanings, synonyms, antonyms, examples, and etymology.",
      details: {
        generalIdea: "LexiVerse is a vocabulary learning platform that uses storytelling to teach complex words in context. Users read passages where difficult words are highlighted and can click to explore their pronunciations in US, UK, and Indian accents, meanings, synonyms, antonyms, examples, and linguistic evolution. The app includes word practice, grammar play, and a comprehensive word database.",
        keyFeatures: [
          "Passage-based learning with highlighted complex words",
          "Multi-accent pronunciation (US, UK, Indian) for each word",
          "Detailed word exploration with meaning, synonyms, antonyms, and examples",
          "Linguistic evolution tracking from Latin roots to modern usage",
          "Words Practice mode for focused vocabulary building",
          "Grammar Play for contextual grammar learning",
          "Show All Words feature for comprehensive vocabulary review",
          "Progress tracking with resume functionality",
          "PWA with offline capabilities",
          "Clean, intuitive interface for seamless learning"
        ],
        working: "Built as a Progressive Web App with manifest for installation. Uses localStorage for progress tracking and word history. Features modular JavaScript architecture with app.js handling navigation and data management. Implements responsive design with mobile-friendly interface.",
        highlights: "Contextual vocabulary learning through storytelling, making language acquisition natural and engaging rather than rote memorization."
      }
    },
    {
      id: "linguawar",
      title: "LinguaWar",
      subtitle: "Conquer Languages - Competitive Language Battles",
      category: "language",
      categoryLabel: "Language & Linguistics",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/LinguaWar/",
      githubUrl: "https://github.com/rswarke1972-art/LinguaWar",
      tags: ["PWA", "Language Learning", "Multiplayer", "Competition", "Spanish", "Japanese"],
      shortDescription: "Competitive real-time language battles. Learn faster through vocabulary duels, translation races, cultural trivia, and survival mode against rivals worldwide.",
      details: {
        generalIdea: "LinguaWar is a competitive multiplayer language learning platform where users battle rivals in real-time. Players choose their warrior name and primary language from Spanish, Japanese, Persian, Hindi, or English. The app features four battle modes: Vocabulary Duel (1v1 speed MCQ), Translation Race (type fastest), Cultural Trivia (culture knowledge), and Survival Mode (last one standing). Players earn XP, rank up from Bronze to Language Emperor, and compete on the global leaderboard.",
        keyFeatures: [
          "Four competitive battle modes for different learning styles",
          "Real-time matchmaking against other players",
          "XP and ranking system from Bronze to Language Emperor",
          "Global leaderboard with warrior rankings",
          "Multi-language support (Spanish, Japanese, Persian, Hindi, English)",
          "Profile system with stats tracking (wins, losses, language)",
          "How to Play modal explaining each game mode",
          "Responsive design with mobile and desktop interfaces",
          "Glassmorphic UI with premium styling",
          "Guest mode for quick play without account"
        ],
        working: "Built as a single-page application with module-based JavaScript architecture. Uses localStorage for user data, stats, and progress. Features real-time matchmaking simulation and competitive game mechanics. Implements glassmorphic UI with dark theme and smooth animations.",
        highlights: "Gamified language learning through competitive multiplayer battles, making vocabulary acquisition exciting and socially engaging."
      }
    },
    {
      id: "mathpeak",
      title: "MathPeak",
      subtitle: "From Zero to Mathematical Mastery",
      category: "education",
      categoryLabel: "Education & Learning",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/MathPeak/",
      githubUrl: "https://github.com/rswarke1972-art/MathPeak",
      tags: ["PWA", "Mathematics", "Learning", "Calculus", "Algebra", "Geometry"],
      shortDescription: "Premium mathematical learning platform from zero to university mastery. Features learning peaks, practice arena, visual sandbox, formula hub, smart revision, and comprehensive analytics.",
      details: {
        generalIdea: "MathPeak is a comprehensive mathematical learning platform designed to take students from zero to university-level mastery. The app features a mountain peak metaphor where users climb through learning peaks covering arithmetic, algebra, geometry, calculus, and advanced topics. It includes an interactive practice arena with difficulty levels, a visual sandbox for mathematical simulations, a formula and concept library, smart revision with spaced repetition, and detailed progress analytics.",
        keyFeatures: [
          "Learning Peaks with step-by-step curriculum from basics to advanced",
          "Practice Arena with MCQ and numerical answers, difficulty selection (Easy to Olympiad)",
          "Interactive Visual Sandbox with 9 mathematical simulations (quadratic, geometry, trigonometry, derivatives, integration, matrices, vectors, probability, vector calculus)",
          "Formula Hub with categorized equation library and formal proofs",
          "Smart Revision System with spaced repetition and weakness detection",
          "Explain Like I am 10 mode for simplified explanations",
          "Interactive scratchpad for solving problems",
          "Achievement system with confetti celebrations",
          "Daily streak tracking and study plans",
          "Comprehensive analytics with XP, accuracy, and progress charts"
        ],
        working: "Built as a Progressive Web App with KaTeX for beautiful formula rendering. Uses localStorage for progress tracking, bookmarks, and user settings. Features modular JavaScript architecture with separate modules for dashboard, peaks, lessons, practice, visuals, formulas, revision, and analytics. Implements premium dark theme with glassmorphic UI and Lucide icons.",
        highlights: "Comprehensive mathematical learning platform combining structured curriculum, interactive simulations, spaced repetition, and detailed analytics for complete mastery."
      }
    },
    {
      id: "mema",
      title: "Mema",
      subtitle: "A Regency Romance Visual Novel",
      category: "game",
      categoryLabel: "Games & Entertainment",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/Mema/",
      githubUrl: "https://github.com/rswarke1972-art/Mema",
      tags: ["PWA", "Visual Novel", "Romance", "Interactive Story", "Regency"],
      shortDescription: "Every choice rewrites the heart in this premium interactive regency romance visual novel with branching narratives, relationship tracking, gallery, and music room.",
      details: {
        generalIdea: "Mema is a premium regency romance visual novel where every choice rewrites the heart. Players navigate through an interactive story with branching narratives, relationship tracking with multiple characters, and multiple endings. The app features a comprehensive journal system with choices timeline, save slots, relationship meters, CG gallery, music room, and flowchart for route visualization.",
        keyFeatures: [
          "Branching narrative with meaningful choices that affect relationships and endings",
          "Relationship tracking system with dynamic meters for each character",
          "Save system with 3 manual slots plus autosave",
          "Choices timeline showing all decisions made throughout the story",
          "CG gallery with unlockable artwork and lightbox viewer",
          "Music room with track list, playback controls, and audio visualizer",
          "Flowchart visualization of story routes and branches",
          "Settings for music, sound effects, animations, and theme selection",
          "Text speed control for customizable reading experience",
          "PWA with offline capabilities and install prompt"
        ],
        working: "Built as a Progressive Web App with modular JavaScript architecture. Uses localStorage for save data, progress, relationships, gallery unlocks, and settings. Features separate modules for config, utilities, app, dialogue, choices, relationships, progress, chapters, endings, music, achievements, save management, and mobile responsiveness. Implements glassmorphic UI with premium styling.",
        highlights: "Premium visual novel experience with comprehensive save system, relationship tracking, gallery, and music room for complete story immersion."
      }
    },
    {
      id: "memora",
      title: "Memora",
      subtitle: "Peaceful Late-Night Journaling",
      category: "productivity",
      categoryLabel: "Productivity & Tools",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/Memora/",
      githubUrl: "https://github.com/rswarke1972-art/Memora",
      tags: ["PWA", "Journaling", "Reflection", "Mindfulness", "Night Routine"],
      shortDescription: "A peaceful late-night journaling app that makes reflection feel soft, private, and beautifully yours. Set up your name and preferred reflection time for gentle daily reminders.",
      details: {
        generalIdea: "Memora is a peaceful late-night journaling application designed to make reflection feel soft, private, and beautiful. Users set up their profile with their name and preferred reflection time. The app provides a calming interface for daily journal entries with gentle reminders at the scheduled time. It features a moon-themed design with ambient effects and focuses on creating a quiet ritual for end-of-day reflection.",
        keyFeatures: [
          "Simple onboarding with name and reminder time setup",
          "Peaceful moon-themed interface with ambient visual effects",
          "Daily journal entries for late-night reflection",
          "Gentle reminder notifications at scheduled times",
          "Private and secure journaling experience",
          "PWA with offline capabilities for journaling anywhere",
          "Responsive design optimized for late-night use",
          "Clean, calming aesthetic with soft colors",
          "LocalStorage for private data storage",
          "Notification support for daily reflection reminders"
        ],
        working: "Built as a Progressive Web App with manifest for installation. Uses localStorage for user profile and journal entries. Features simple JavaScript architecture with app.js handling setup and journaling logic. Implements calming visual design with moon-themed aesthetics and ambient effects.",
        highlights: "Peaceful, private journaling experience designed specifically for late-night reflection with gentle reminders and calming aesthetics."
      }
    },
    {
      id: "pawnova",
      title: "Pawnova Ultimate",
      subtitle: "Master Strategy. Conquer the Board.",
      category: "game",
      categoryLabel: "Games & Entertainment",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/Pawnova/",
      githubUrl: "https://github.com/rswarke1972-art/Pawnova",
      tags: ["PWA", "Chess", "Strategy", "Puzzles", "Learning"],
      shortDescription: "Premium chess learning platform with tactical puzzles, bot battles, opening trainer, progress tracking, weakness detection, and tournament simulator. Master strategy and conquer the board.",
      details: {
        generalIdea: "Pawnova Ultimate is a premium chess learning platform designed to help players master strategy and conquer the board. The app features a tactical puzzle arena with difficulty levels, bot battles against AI opponents with different playstyles, an opening trainer for building repertoire, progress tracking with Elo ratings, weakness detection system, achievements, and a tournament simulator. It uses chessboard.js for interactive board visualization.",
        keyFeatures: [
          "Tactical Puzzle Arena with mate-in puzzles and difficulty ratings",
          "Bot Battles against 5 AI opponents (Beginner to Grandmaster Ghost)",
          "Opening Trainer with repertoire building for white and black",
          "Learning Academy with structured lessons for basics, openings, middlegame, endgames, tactics, and positional play",
          "Progress tracking with Elo ratings for Rapid, Blitz, and Puzzle",
          "Weakness detection system identifying areas needing improvement",
          "Achievement system for milestones and accomplishments",
          "Tournament Simulator for competitive practice",
          "Game Analysis with PGN import and move-by-move review",
          "Daily chess plan with tasks and streak tracking"
        ],
        working: "Built as a Progressive Web App with chessboard.js library for interactive boards. Uses localStorage for progress, puzzles solved, games played, and user settings. Features modular JavaScript architecture with separate modules for puzzles, battles, openings, learning, and analysis. Implements glassmorphic UI with dark theme and premium styling.",
        highlights: "Comprehensive chess learning platform combining puzzles, AI battles, opening training, and detailed analytics for complete strategic mastery."
      }
    },
    {
      id: "philosopheria",
      title: "Philosopheria",
      subtitle: "Explore Humanity's Greatest Minds",
      category: "education",
      categoryLabel: "Education & Learning",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/Philosopheria/",
      githubUrl: "https://github.com/rswarke1972-art/Philosopheria",
      tags: ["PWA", "Philosophy", "Education", "History", "Thinkers"],
      shortDescription: "A digital atlas of philosophy featuring 16+ philosophers, 11 schools of thought, 500+ quotes, timeline, concepts explorer, and comparative analysis tools.",
      details: {
        generalIdea: "Philosopheria is a digital atlas of philosophy that allows users to explore humanity's greatest minds. The app features profiles of 16+ philosophers from Socrates to Simone de Beauvoir, 11 schools of thought including Stoicism, Existentialism, Empiricism, and Rationalism, 500+ quotes, a historical timeline, concepts explorer for fundamental philosophical ideas, and comparative tools. It features a starfield hero section with search functionality.",
        keyFeatures: [
          "16+ philosopher profiles with era, brief, and key contributions",
          "11 schools of thought with detailed explanations",
          "500+ quotes with copy, share, and favorite functionality",
          "Historical timeline showing philosophical evolution",
          "Concepts explorer for fundamental ideas like ethics, truth, justice, freedom",
          "Search functionality for philosophers, ideas, and quotes",
          "Quote of the day section for daily inspiration",
          "Responsive design with mobile-friendly navigation",
          "PWA with offline capabilities",
          "Starfield hero section with particle effects"
        ],
        working: "Built as a Progressive Web App with manifest for installation. Uses localStorage for favorite quotes and user preferences. Features modular JavaScript with scripts.js handling navigation, search, and interactivity. Implements atmospheric visual design with starfield effects and smooth animations.",
        highlights: "Comprehensive philosophy exploration platform combining biographical information, schools of thought, quotes, and interactive tools for deep philosophical learning."
      }
    },
    {
      id: "promptica",
      title: "Promptica",
      subtitle: "Learn ChatGPT Prompting",
      category: "education",
      categoryLabel: "Education & Learning",
      isPwa: false,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/Promptica/",
      githubUrl: "https://github.com/rswarke1972-art/Promptica",
      tags: ["Prompt Engineering", "ChatGPT", "AI", "Learning", "Patterns"],
      shortDescription: "A focused home for learning ChatGPT prompting through examples, reusable patterns, difficulty levels, and copy-ready prompt starters. Build prompts that give ChatGPT a real job to do.",
      details: {
        generalIdea: "Promptica is a prompt learning library for building better ChatGPT prompts. It teaches the Promptica method: frame the role, add useful constraints, and iterate with signals. The app features 36 prompt patterns across 6 categories, 3 difficulty levels (Beginner, Intermediate, Advanced), a searchable library with copy-ready prompts, and a learn section explaining the prompting framework.",
        keyFeatures: [
          "36 proven prompt patterns across 6 categories",
          "3 difficulty levels for progressive learning",
          "Searchable prompt library with category and difficulty filters",
          "Copy-ready prompt starters for immediate use",
          "The Promptica method: frame role, add constraints, iterate with signals",
          "Category-based filtering for quick access to relevant prompts",
          "Clean, focused interface without distractions",
          "Static and fast, ready for GitHub Pages",
          "Responsive design for all devices",
          "Learn section explaining the prompting framework"
        ],
        working: "Built as a static website with vanilla JavaScript. Uses script.js for prompt data, search functionality, and filtering. No backend required, all data is client-side. Implements clean, minimal design focused on content accessibility and quick copying.",
        highlights: "Focused, distraction-free prompt learning platform with proven patterns and copy-ready starters for immediate ChatGPT improvement."
      }
    },
    {
      id: "realmora",
      title: "Realmora",
      subtitle: "Dark Strategy Kingdom Simulator",
      category: "game",
      categoryLabel: "Games & Entertainment",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/Realmora/",
      githubUrl: "https://github.com/rswarke1972-art/Realmora",
      tags: ["PWA", "Strategy Game", "Kingdom Management", "Politics", "Multiplayer"],
      shortDescription: "Govern, negotiate, and survive in this immersive dark fantasy political strategy simulator. Manage economy, trust, war, and diplomacy while navigating relationships with foreign kingdoms.",
      details: {
        generalIdea: "Realmora is a dark fantasy political strategy simulator where players govern a kingdom, negotiate alliances, and survive political intrigue. Players manage four core stats: Economy, Trust, War, and Diplomacy. The game features decision cards with branching choices, relationship management with NPC kingdoms (Iron Vanguard, Gilded Syndicate, Sylvan Conclave, Celestia Hegemony), real multiplayer kingdom interactions, alliance creation, world politics voting, territory map, achievements, and a reign chronicle.",
        keyFeatures: [
          "Four core stat management: Economy, Trust, War, Diplomacy",
          "Decision cards with branching choices and consequence predictions",
          "Relationship system with 4 NPC kingdoms and real multiplayer players",
          "Alliance creation and management between kingdoms",
          "World politics voting system for global decisions",
          "Territory map showing conquered lands",
          "Achievement system for milestones",
          "Reign chronicle tracking all decisions and events",
          "Kingdom setup with ruler name, kingdom name, and royal house specialty",
          "Firebase integration for real multiplayer features",
          "PWA with offline capabilities and install prompt"
        ],
        working: "Built as a Progressive Web App with Firebase backend for real multiplayer features. Uses localStorage for single-player progress, stats, and settings. Features modular JavaScript with firebase.js for multiplayer and app.js for game logic. Implements premium glassmorphic UI with gold accents and ambient sound effects.",
        highlights: "Immersive political strategy simulator combining single-player decision-making with real multiplayer kingdom interactions in a dark fantasy setting."
      }
    },
    {
      id: "tradelab",
      title: "TradeLab",
      subtitle: "Interactive Trading Academy",
      category: "education",
      categoryLabel: "Education & Learning",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/TradeLab/",
      githubUrl: "https://github.com/rswarke1972-art/TradeLab",
      tags: ["PWA", "Trading", "Finance", "Stock Market", "Simulation"],
      shortDescription: "Master financial market trading with interactive modules, candlestick pattern flashcards, trading simulator with technical indicators, risk management, and comprehensive glossary.",
      details: {
        generalIdea: "TradeLab is an interactive trading academy for mastering financial market trading. The app features learn modules with interactive lessons and assessments, a trading simulator with multiple market scenarios (bull, bear, range, high volatility, news events, flash crashes), candlestick pattern flashcards for pattern recognition, technical indicators (SMA, EMA, RSI), risk management tools, and a comprehensive jargon glossary. Users start with virtual capital and track their progress through levels and achievements.",
        keyFeatures: [
          "Interactive learn modules with lessons and quick assessments",
          "Trading simulator with 7 market scenarios and speed controls",
          "Candlestick pattern flashcards with bullish/bearish/neutral identification",
          "Technical indicators: SMA, EMA, RSI overlays",
          "Risk management with stop loss and take profit settings",
          "Leverage trading from 1x to 50x",
          "Virtual capital starting at $10,000 with portfolio tracking",
          "Level system with XP and achievements",
          "Equity curve visualization of trading performance",
          "Comprehensive glossary of trading terminology"
        ],
        working: "Built as a Progressive Web App with canvas-based charting. Uses localStorage for virtual capital, trade history, levels, and achievements. Features modular JavaScript with separate modules for lessons, simulator, and flashcards. Implements dark theme with glassmorphic UI and responsive design.",
        highlights: "Comprehensive trading education platform combining interactive learning, realistic simulation, pattern recognition, and detailed progress tracking for complete trading mastery."
      }
    },
    {
      id: "codemastery",
      title: "CodeMastery",
      subtitle: "Practice. Test. Master. Repeat.",
      category: "education",
      categoryLabel: "Education & Learning",
      isPwa: false,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/codemastery/",
      githubUrl: "https://github.com/rswarke1972-art/codemastery",
      tags: ["Coding", "Practice", "Testing", "Programming", "Algorithms"],
      shortDescription: "Coding practice and test platform with practice mode, test mode, problem selection, language switching, and comprehensive problem library for skill improvement.",
      details: {
        generalIdea: "CodeMastery is a coding practice and testing platform designed to help developers improve their skills through practice and testing. The app features a practice mode for solving problems, a test mode for evaluating performance, problem selection from a comprehensive library, language switching support, and how-to guides. Users can track their progress and choose from various coding challenges to master different programming concepts.",
        keyFeatures: [
          "Practice mode for solving coding problems",
          "Test mode for evaluating performance and skills",
          "Problem selection from comprehensive library",
          "Language switching support for multiple programming languages",
          "How-to guides and instructions",
          "Progress tracking with localStorage",
          "Clean, intuitive interface",
          "Responsive design for all devices",
          "Contact support for feedback and collaboration",
          "Modular architecture for easy maintenance"
        ],
        working: "Built as a static website with vanilla JavaScript. Uses localStorage for language selection and progress tracking. Features modular HTML structure with separate pages for practice, test, problem selection, language switching, and contact. Implements clean, colorful design with card-based navigation.",
        highlights: "Straightforward coding practice platform with practice and test modes, problem library, and language support for focused skill improvement."
      }
    },
    {
      id: "idiomverse",
      title: "IdiomVerse",
      subtitle: "Contextual Idiom Learning",
      category: "language",
      categoryLabel: "Language & Linguistics",
      isPwa: false,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/idiom-site/",
      githubUrl: "https://github.com/rswarke1972-art/idiom-site",
      tags: ["Idioms", "Language Learning", "Stories", "Quiz", "Context"],
      shortDescription: "Contextual learning platform for idioms and phrases. Learn through stories instead of memorizing lists. Each idiom includes meaning, usage, examples, and origin with interactive quizzes.",
      details: {
        generalIdea: "IdiomVerse is a contextual learning platform for idioms and phrases that teaches through stories instead of memorization. Users read stories where idioms are highlighted, click to explore meaning, usage, examples, and origin. The app features idiom quiz, meaning quiz, show all idioms view, story selection, and progress tracking. It makes language learning natural, intuitive, and engaging by teaching idioms in real-life context.",
        keyFeatures: [
          "Story-based learning with highlighted idioms",
          "Detailed idiom exploration with meaning, usage, examples, and origin",
          "Idiom quiz for testing recognition",
          "Meaning quiz for testing understanding",
          "Show all idioms for comprehensive review",
          "Story selection for different learning contexts",
          "Progress tracking with resume functionality",
          "How it works guide for new users",
          "Clean, intuitive interface",
          "Contact support for feedback"
        ],
        working: "Built as a static website with vanilla JavaScript. Uses localStorage for progress tracking and story history. Features modular JavaScript with app.js handling navigation, quizzes, and data management. Implements clean, simple design focused on content accessibility.",
        highlights: "Contextual idiom learning through storytelling, making phrase acquisition natural and engaging rather than rote memorization of lists."
      }
    },
    {
      id: "corezen",
      title: "CoreZen",
      subtitle: "Strong Body. Calm Mind.",
      category: "health",
      categoryLabel: "Health & Wellness",
      isPwa: false,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/CoreZen/",
      githubUrl: "https://github.com/rswarke1972-art/CoreZen",
      tags: ["Fitness", "Yoga", "Anatomy", "Nutrition", "Wellness"],
      shortDescription: "Comprehensive fitness platform combining strength training, yoga, anatomy education, nutrition, and wellness. Features exercise library, anatomy explorer, yoga section, workout planner, diet guide, and machine guide.",
      details: {
        generalIdea: "CoreZen is a comprehensive fitness and wellness platform that combines strength training, yoga, anatomy education, nutrition, and wellness into one unified experience. The app features an exercise library with proper form and difficulty levels, an interactive muscle anatomy explorer, yoga poses and breathing techniques, a workout planner for generating routines, a diet guide with healthy nutrition strategies, and a gym machine guide for equipment understanding.",
        keyFeatures: [
          "Exercise library for every muscle group with proper form guidance",
          "Interactive muscle anatomy explorer for understanding body movement",
          "Yoga section with poses, breathing techniques, and mindfulness",
          "Workout planner for generating personalized routines",
          "Diet guide with healthy nutrition strategies and meal ideas",
          "Gym machine guide for equipment, target muscles, and safety",
          "Responsive design for all devices",
          "Clean, organized navigation",
          "Visual feature cards for easy access",
          "Comprehensive wellness approach"
        ],
        working: "Built as a static website with vanilla JavaScript. Features modular HTML structure with separate pages for exercises, anatomy, yoga, planner, diet, and machines. Implements clean, modern design with feature cards and responsive layout. Uses script.js for basic interactivity.",
        highlights: "Comprehensive wellness platform combining fitness, yoga, anatomy, nutrition, and equipment guidance in one unified experience for complete physical and mental well-being."
      }
    },
    {
      id: "fracturedself",
      title: "Fractured Self",
      subtitle: "The Fall of Nader - Definitive Edition",
      category: "game",
      categoryLabel: "Games & Entertainment",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/FracturedSelf/",
      githubUrl: "https://github.com/rswarke1972-art/FracturedSelf",
      tags: ["PWA", "Visual Novel", "Story", "Drama", "Cinematic"],
      shortDescription: "A gripping tale of wealth, pride, and redemption. Nader, a three-time national boxing champion and heir to a vast travel empire, loses himself in a downward spiral of arrogance and indulgence.",
      details: {
        generalIdea: "Fractured Self: The Fall of Nader is a cinematic visual novel telling the story of Nader, a three-time national boxing champion and heir to a vast travel empire who loses himself in arrogance and indulgence. The Definitive Edition features enhanced cinematic story engine, chapter select (Prologue, Chapter 1, Chapter 2), gallery with CG collection, scene replay, music room, statistics tracking, character flags and relationships, comprehensive settings with themes and accessibility options, and PWA installation.",
        keyFeatures: [
          "Cinematic visual novel with 731 scenes across 3 chapters",
          "Chapter select with progress tracking and unlock system",
          "Gallery with 89 CGs and fullscreen lightbox viewer",
          "Scene replay for revisiting key moments",
          "Music room with ambient soundtrack and volume controls",
          "Statistics tracking with play time, completion, and choices",
          "Character flags and relationship tracking (Trust, Guilt, Hope, Fear, Relationship)",
          "Comprehensive settings with 4 themes, font selection, text size, speed, auto-play delay",
          "Audio controls for music and sound effects",
          "PWA with offline capabilities and install prompt"
        ],
        working: "Built as a Progressive Web App with enhanced cinematic story engine. Uses localStorage for settings, stats, flags, autosave, gallery unlocks, and progress. Features modular JavaScript with separate handling for menu, settings, gallery, statistics, and story navigation. Implements premium visual design with cinematic backgrounds, particle effects, and multiple font options.",
        highlights: "Premium cinematic visual novel with comprehensive save system, gallery, music room, statistics, and accessibility options for complete story immersion."
      }
    },
    {
      id: "fridge2food",
      title: "Fridge2Food",
      subtitle: "Premium Recipe Finder",
      category: "lifestyle",
      categoryLabel: "Lifestyle & Utilities",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/Fridge2Food/",
      githubUrl: "https://github.com/rswarke1972-art/Fridge2Food",
      tags: ["PWA", "Recipes", "Cooking", "Meal Planning", "Ingredients"],
      shortDescription: "Turn your fridge leftovers into gourmet meals instantly. Features recipe browser, smart pantry matcher by ingredient overlap, weekly meal planner with shopping lists, and favorites system.",
      details: {
        generalIdea: "Fridge2Food is a premium recipe finder that helps users turn fridge leftovers into gourmet meals. The app features a comprehensive recipe browser with filtering by region, prep time, and protein, a smart pantry matcher that shows recipes based on ingredient overlap percentage, a weekly meal planner that generates combined shopping lists, favorites and recently viewed tracking, and offline capabilities. It includes PWA installation instructions for iOS and Android.",
        keyFeatures: [
          "Recipe browser with advanced filtering (region, prep time, protein)",
          "Smart pantry matcher showing recipes by ingredient overlap percentage",
          "Weekly meal planner with automatic shopping list generation",
          "Favorites system for saving preferred recipes",
          "Recently viewed tracking for quick access",
          "Offline indicator and cached recipe access",
          "PWA with install instructions for iOS and Android",
          "Contact support for feedback",
          "Responsive design for all devices",
          "Clean, modern interface with glassmorphic styling"
        ],
        working: "Built as a Progressive Web App with manifest for installation. Uses localStorage for favorites, recently viewed, and meal planner data. Features modular JavaScript with script.js handling recipe data, pantry matching, and meal planning. Implements offline capabilities with service worker caching and modern glassmorphic UI.",
        highlights: "Smart recipe platform combining ingredient matching, meal planning, and comprehensive recipe browsing for turning leftovers into gourmet meals."
      }
    },
    {
      id: "greekflow",
      title: "GreekFlow",
      subtitle: "Modern Greek Alphabet, Vocabulary & Culture",
      category: "language",
      categoryLabel: "Language & Linguistics",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/languages/GreekFlow/",
      githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/GreekFlow",
      tags: ["PWA", "Greek", "Alphabet", "Vocabulary", "Culture"],
      shortDescription: "Master the Modern Greek alphabet through unit-based learning, vocabulary, grammar construction, stories, and cultural immersion.",
      details: {
        generalIdea: "GreekFlow provides a structured 5-unit learning path for the Modern Greek language. From alphabet mastery to cultural immersion, it guides learners through vocabulary, grammar, stories, and Greek traditions.",
        keyFeatures: [
          "5-unit structured learning path (Alphabet, Vocabulary, Grammar, Stories, Culture)",
          "Interactive character grid with pronunciation and writing practice",
          "250 high-frequency vocabulary words across 10 categories",
          "Grammar constructor for building sentences in different tenses",
          "Stories with word-by-word tooltip translations",
          "Cultural journeys exploring Greek heritage and traditions",
          "Spaced Repetition System (SRS) with learning, young, mature, mastered queues",
          "Daily missions for consistent practice",
          "Achievement badges for milestones",
          "Streak tracking for motivation"
        ],
        working: "Built as a Progressive Web App with service worker for offline mode. Uses localStorage for progress, SRS queues, streaks, and achievements. Features modular JavaScript with config.js for language metadata and progress.js for tracking. Implements glassmorphic UI with dark theme.",
        highlights: "Structured 5-unit learning path with progressive unlocking, SRS flashcards, and cultural immersion for comprehensive Greek language mastery."
      }
    },
    {
      id: "hebrewflow",
      title: "HebrewFlow",
      subtitle: "Hebrew Alphabet, Vocabulary & Cultural Learning",
      category: "language",
      categoryLabel: "Language & Linguistics",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/languages/HebrewFlow/",
      githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/HebrewFlow",
      tags: ["PWA", "Hebrew", "Aleph-Bet", "Vocabulary", "Culture"],
      shortDescription: "Master the Hebrew Aleph-Bet through unit-based learning, vocabulary, grammar construction, stories, and cultural immersion.",
      details: {
        generalIdea: "HebrewFlow provides a structured 5-unit learning path for the Hebrew language. From Aleph-Bet mastery to cultural immersion, it guides learners through vocabulary, grammar, stories, and Hebrew traditions.",
        keyFeatures: [
          "5-unit structured learning path (Alphabet, Vocabulary, Grammar, Stories, Culture)",
          "Interactive character grid with pronunciation and writing practice",
          "250 high-frequency vocabulary words across 10 categories",
          "Grammar constructor for building sentences in different tenses",
          "Stories with word-by-word tooltip translations",
          "Cultural journeys exploring Hebrew heritage and traditions",
          "Spaced Repetition System (SRS) with learning, young, mature, mastered queues",
          "Daily missions for consistent practice",
          "Achievement badges for milestones",
          "Streak tracking for motivation"
        ],
        working: "Built as a Progressive Web App with service worker for offline mode. Uses localStorage for progress, SRS queues, streaks, and achievements. Features modular JavaScript with config.js for language metadata and progress.js for tracking. Implements glassmorphic UI with dark theme.",
        highlights: "Structured 5-unit learning path with progressive unlocking, SRS flashcards, and cultural immersion for comprehensive Hebrew language mastery."
      }
    },
    {
      id: "khmerflow",
      title: "KhmerFlow",
      subtitle: "Khmer Script, Vocabulary & Cultural Learning",
      category: "language",
      categoryLabel: "Language & Linguistics",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/languages/KhmerFlow/",
      githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/KhmerFlow",
      tags: ["PWA", "Khmer", "Cambodian", "Script", "Vocabulary"],
      shortDescription: "Master the Khmer script through unit-based learning, vocabulary, grammar construction, stories, and cultural immersion.",
      details: {
        generalIdea: "KhmerFlow provides a structured 5-unit learning path for the Khmer (Cambodian) language. From script mastery to cultural immersion, it guides learners through vocabulary, grammar, stories, and Cambodian traditions.",
        keyFeatures: [
          "5-unit structured learning path (Alphabet, Vocabulary, Grammar, Stories, Culture)",
          "Interactive character grid with pronunciation and writing practice",
          "250 high-frequency vocabulary words across 10 categories",
          "Grammar constructor for building sentences in different tenses",
          "Stories with word-by-word tooltip translations",
          "Cultural journeys exploring Cambodian heritage and traditions",
          "Spaced Repetition System (SRS) with learning, young, mature, mastered queues",
          "Daily missions for consistent practice",
          "Achievement badges for milestones",
          "Streak tracking for motivation"
        ],
        working: "Built as a Progressive Web App with service worker for offline mode. Uses localStorage for progress, SRS queues, streaks, and achievements. Features modular JavaScript with config.js for language metadata and progress.js for tracking. Implements glassmorphic UI with dark theme.",
        highlights: "Structured 5-unit learning path with progressive unlocking, SRS flashcards, and cultural immersion for comprehensive Khmer language mastery."
      }
    },
    {
      id: "nepaliflow",
      title: "NepaliFlow",
      subtitle: "Devanagari Script, Vocabulary & Cultural Learning",
      category: "language",
      categoryLabel: "Language & Linguistics",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/languages/NepaliFlow/",
      githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/NepaliFlow",
      tags: ["PWA", "Nepali", "Devanagari", "Vocabulary", "Culture"],
      shortDescription: "Master the Nepali Devanagari script through unit-based learning, vocabulary, grammar construction, stories, and cultural immersion.",
      details: {
        generalIdea: "NepaliFlow provides a structured 5-unit learning path for the Nepali language. From Devanagari script mastery to cultural immersion, it guides learners through vocabulary, grammar, stories, and Nepali traditions.",
        keyFeatures: [
          "5-unit structured learning path (Alphabet, Vocabulary, Grammar, Stories, Culture)",
          "Interactive character grid with pronunciation and writing practice",
          "250 high-frequency vocabulary words across 10 categories",
          "Grammar constructor for building sentences in different tenses",
          "Stories with word-by-word tooltip translations",
          "Cultural journeys exploring Nepali heritage and traditions",
          "Spaced Repetition System (SRS) with learning, young, mature, mastered queues",
          "Daily missions for consistent practice",
          "Achievement badges for milestones",
          "Streak tracking for motivation"
        ],
        working: "Built as a Progressive Web App with service worker for offline mode. Uses localStorage for progress, SRS queues, streaks, and achievements. Features modular JavaScript with config.js for language metadata and progress.js for tracking. Implements glassmorphic UI with dark theme.",
        highlights: "Structured 5-unit learning path with progressive unlocking, SRS flashcards, and cultural immersion for comprehensive Nepali language mastery."
      }
    },
    {
      id: "langosphere",
      title: "LangoSphere",
      subtitle: "Global Language Sentence Explorer",
      category: "language",
      categoryLabel: "Language & Linguistics",
      isPwa: false,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/languages/global/",
      githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/global",
      tags: ["Language Learning", "Sentences", "Translation", "Multilingual"],
      shortDescription: "Explore sentences across multiple languages with translations. Browse language collections, view sentence lists, and access detailed translations.",
      details: {
        generalIdea: "LangoSphere is a global language sentence explorer that allows users to browse sentences across multiple languages. It features language selection, sentence lists with translations, and detailed views for individual sentences with their translations.",
        keyFeatures: [
          "Language selection view for choosing target languages",
          "Sentence list view with organized collections",
          "Detail view for individual sentences with translations",
          "Multilingual support for various languages",
          "Clean, simple interface for easy navigation",
          "Responsive design for all devices",
          "Quick access to sentence translations",
          "Organized sentence collections by language"
        ],
        working: "Built as a static website with vanilla JavaScript. Uses script.js for data management and view navigation. Features simple HTML structure with language, list, and detail views. Implements clean, minimal design focused on content accessibility.",
        highlights: "Simple, focused sentence explorer for multilingual learning with organized collections and easy translation access."
      }
    },
    {
      id: "strokeflow",
      title: "StrokeFlow",
      subtitle: "Master Chinese Stroke Order Offline",
      category: "language",
      categoryLabel: "Language & Linguistics",
      isPwa: true,
      featured: false,
      image: indieflowImage,
      liveUrl: "https://rswarke1972-art.github.io/languages/skritter/",
      githubUrl: "https://github.com/rswarke1972-art/languages/tree/main/skritter",
      tags: ["PWA", "Chinese", "HSK", "Calligraphy", "Stroke Order"],
      shortDescription: "Chinese calligraphy PWA for mastering HSK stroke order offline. Features HSK levels 1-3, thematic collections, daily challenges, quiz mode, and stories.",
      details: {
        generalIdea: "StrokeFlow is a Chinese calligraphy PWA designed for mastering HSK character stroke order offline. It features HSK levels 1-3, thematic collections (nature, family, numbers), daily writing challenges, quiz mode, story reading, and search by meaning or pinyin.",
        keyFeatures: [
          "HSK Levels 1-3 with character mastery tracking",
          "Thematic collections (Nature, Family, Numbers) for focused learning",
          "Daily writing challenge with deterministic character selection",
          "Stroke order viewer with animated tracing",
          "Quiz mode for testing character recognition",
          "Story reading with character context",
          "Search by meaning or pinyin for quick lookup",
          "Progress tracking with streak days and mastery percentage",
          "PWA with offline capabilities and install banner",
          "Service worker for offline stroke order access"
        ],
        working: "Built as a Progressive Web App with service worker for offline mode. Uses localStorage for mastery map, streak tracking, and progress. Features modular JavaScript with data.json for HSK character data. Implements clean, modern UI with progress tracking and daily challenges.",
        highlights: "Comprehensive Chinese calligraphy platform combining HSK mastery, thematic collections, daily challenges, and offline stroke order learning."
      }
    }
  ];
