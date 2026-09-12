import leadershipStrategyIcon from "../images/leadership-strategy-icon.png";
import calculatorIcon from "../images/calculator-icon.png";
import indieflowImage from "../images/Screenshot (599).png";
import indieflowIcon from "../images/indieflow-icon.png";
import unityscriptIcon from "../images/unityscript-icon.png";
import fridge2foodIcon from "../images/fridge2food-icon.png";
import japaneseflowIcon from "../images/japaneseflow-icon.png";
import codemasteryIcon from "../images/codemastery-icon.png";
import codemasteryImage from "../images/Screenshot (603).png";
import arabicflowIcon from "../images/arabicflow-icon.png";
import strokeflowIcon from "../images/strokeflow-icon.png";
import koreanflowIcon from "../images/koreanflow-icon.png";
import lexiverseIcon from "../images/lexiverse-icon.png";
import budhbhushanamIcon from "../images/budhbhushanam-icon.png";
import anchortalkIcon from "../images/anchortalk-icon.png";
import ashtavakraIcon from "../images/ashtavakra-icon.png";
import latinflowIcon from "../images/latinflow-icon.png";
import reminderIcon from "../images/reminder-icon.png";
import kurdishflowIcon from "../images/kurdishflow-icon.png";
import farsiflowIcon from "../images/farsiflow-icon.png";
import farsiflowImage from "../images/Screenshot (614).png";
import idiomverseIcon from "../images/idiomverse-icon.png";
import langosphereIcon from "../images/langosphere-icon.png";
import bondlyIcon from "../images/bondly-icon.png";
import realmoraIcon from "../images/realmora-icon.png";
import fracturedselfIcon from "../images/fracturedself-icon.png";
import corezenIcon from "../images/corezen-icon.png";
import artysseyIcon from "../images/artyssey-icon.png";
import geoclueIcon from "../images/geoclue-icon.png";
import dateyumeiIcon from "../images/dateyumei-icon.png";
import mindhavenIcon from "../images/mindhaven-icon.png";
import botaniqIcon from "../images/botaniq-icon.png";
import mathpeakIcon from "../images/mathpeak-icon.png";
import memaIcon from "../images/mema-icon.png";
import goldenbaghdadIcon from "../images/goldenbaghdad-icon.png";
import pawnovaIcon from "../images/pawnova-icon.png";
import threadoraIcon from "../images/threadora-icon.png";
import gateforgeIcon from "../images/gateforge-icon.png";
import linguawarIcon from "../images/linguawar-icon.png";
import neuropsyIcon from "../images/neuropsy-icon.png";
import memoraIcon from "../images/memora-icon.png";
import prompticaImage from "../images/promptica-icon.png";
import audioleafImage from "../images/audioleaf-icon.png";
import conjecturaImage from "../images/conjectura.png";
import bookflowIcon from "../images/bookflow-icon.png";
import philosopheriaImage from "../images/philosopheria.png";
import tradelabIcon from "../images/tradelab-icon.png";
import ehsaasIcon from "../images/ehsaas-icon.png";
import amharicflowIcon from "../images/amharicflow-icon.png";
import armenianflowIcon from "../images/armenianflow-icon.png";
import burmeseflowIcon from "../images/burmeseflow-icon.png";
import cyrillicflowIcon from "../images/cyrillicflow-icon.png";
import georgianflowIcon from "../images/georgianflow-icon.png";
import greekflowIcon from "../images/greekflow-icon.png";
import hebrewflowIcon from "../images/hebrewflow-icon.png";
import nepaliflowIcon from "../images/nepaliflow-icon.png";
import khmerflowIcon from "../images/khmerflow-icon.png";
import questionsthathealIcon from "../images/questionsthatheal-icon.png";
import foroughFarrokhzadIcon from "../images/forough-farrokhzad-icon.png";
import manhwaMakerIcon from "../images/manhwa-maker-icon.png";
import lizIcon from "../images/liz-icon.png";
import subjectsIcon from "../images/subjects-icon.png";
import leaderAtlasIcon from "../images/leader-atlas-icon.png";

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
    subtitle: "Meaningful Friendship & Language Exchange Network",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: true,
    featured: true,
    image: bondlyIcon,
    liveUrl: "https://rswarke1972-art.github.io/Bondly/",
    githubUrl: "https://github.com/rswarke1972-art/Bondly",
    tags: ["PWA", "Firebase", "Real-Time Chat", "Language Exchange", "Smart Matching", "Voice Notes", "Audio Waveforms"],
    shortDescription: "A meaningful friendship and language exchange PWA featuring real-time messaging, voice notes, weighted compatibility matching, cross-language practice, and Deep Mode conversations.",
    details: {
      generalIdea: "Bondly is a mobile-first friendship and language exchange network built to foster authentic, high-empathy connections without commercial social media toxicity, follower metrics, or algorithmic outrage. Engineered around mutual learning and intentional dialogue, Bondly connects people globally based on complementary language goals, shared passions, and conversational depth. Users can find dedicated tandem language partners, exchange voice notes with live audio visualizers, engage in structured 'Deep Mode' philosophical discussions, and track cross-cultural friendship milestones in a safe, moderated ecosystem.",
      keyFeatures: [
        "Multi-Factor Smart Compatibility Matching: Algorithmic compatibility scoring weighted across shared interests (30%), bidirectional language exchange potential (25%), timezone proximity (20%), personality traits (15%), and friendship goals (10%)",
        "Full-Featured Real-Time Messaging: Production-ready chat powered by Firestore and Realtime Database with sub-second message delivery, unread counters, typing indicators, read receipts, and message delivery states",
        "Integrated Voice Note Studio: Built-in MediaRecorder audio engine capturing crystal-clear voice notes with dynamic playback waveforms, pause/resume scrubbing, and hold-to-record gesture controls",
        "Rich Message Interactions: Contextual long-press menus supporting direct reply quoting, multi-emoji reactions, message forwarding to friend lists, text copying, and soft deletions",
        "Tandem Language Exchange Hub: Bidirectional matching connecting native speakers with learners, complete with language proficiency badges, target language filtering, and vocabulary practice tools",
        "Curated 'Deep Mode' Conversation Lab: Structured dialogue accelerator offering categorized icebreakers, philosophical dilemmas, cultural inquiries, and psychological reflection prompts to bypass superficial small talk",
        "Granular Discovery & Filtering Engine: Search and discover peers across multi-dimensional criteria including country, native tongue, target language, shared hobbies, timezone offsets, and online presence",
        "Comprehensive Trust & Safety Framework: User blocking, silent muting, structured report categorization, and client-side content moderation enforcing respectful community interaction",
        "Interactive Friendship Categorization: Organize connections into customized tiers including Close Friends, Language Partners, Study Buddies, and Casual Connections",
        "Progressive Web App & Offline Shell: Mobile-optimized PWA with touch gesture navigation, swipe interactions, manifest shortcuts, and offline service worker asset caching"
      ],
      working: "Bondly is built with modular vanilla JavaScript adhering to strict separation of concerns across dedicated controllers (messaging, matching, discovery, language, presence, and safety). Real-time communication utilizes dual Firebase services: Cloud Firestore for persistent message threads and user profiles, combined with Firebase Realtime Database for ephemeral state synchronization including typing status, presence heartbeats, and read receipts. Audio voice notes are captured via the native MediaStream Recording API and encoded into compact blobs for immediate transmission. The matching engine implements a weighted multi-factor heuristic normalizing timezone offsets and interest vectors into a 0-100 compatibility index. Touch gestures, bottom sheets, and responsive viewports are orchestrated through custom touch event listeners and hardware-accelerated CSS transformations.",
      highlights: "Features an algorithmic 5-factor compatibility matcher, real-time voice messaging with waveform rendering, a dedicated Language Exchange hub, and a curated Deep Mode conversation engine.",
      labs: [
        { name: "Multi-Factor Matching Engine", desc: "Interactive algorithm computing compatibility scores based on shared interests, language goals, and timezone proximity." },
        { name: "Real-Time Chat & Voice Studio", desc: "Low-latency messaging console with MediaRecorder voice notes, typing indicators, and message reactions." },
        { name: "Tandem Language Exchange Hub", desc: "Cross-cultural learning desk matching native speakers with learners with proficiency level badges." },
        { name: "Deep Mode Dialogue Lab", desc: "Structured conversation accelerator offering curated philosophical prompts, cultural dilemmas, and icebreakers." },
        { name: "Global Discovery Sandbox", desc: "Multi-parameter filter engine exploring worldwide profiles by country, language, hobby, and active status." },
        { name: "Trust & Moderation Suite", desc: "Safety command center featuring one-click user blocking, quiet muting, and structured conduct reporting." },
        { name: "Friendship Milestone Tracker", desc: "Visual relationship dashboard tracking shared conversation streaks, milestone badges, and interaction stats." }
      ]
    }
  },
  {
    id: "realmora",
    title: "Realmora",
    subtitle: "Dark Strategy Kingdom Simulator & Geopolitical Engine",
    category: "games",
    categoryLabel: "Games & Simulations",
    isPwa: true,
    featured: true,
    image: realmoraIcon,
    liveUrl: "https://rswarke1972-art.github.io/Realmora/",
    githubUrl: "https://github.com/rswarke1972-art/Realmora",
    tags: ["PWA", "Strategy Game", "Multiplayer", "Diplomacy Engine", "Territory Map", "Espionage", "World Senate", "Firebase"],
    shortDescription: "A dark fantasy political strategy simulator and kingdom engine featuring 4-pillar stat equilibrium, foreign NPC kingdoms, territory conquest, espionage sabotage, and multiplayer senate voting.",
    details: {
      generalIdea: "Realmora is an immersive dark fantasy geopolitical strategy simulator where players ascend the imperial throne to govern an empire on the brink of turmoil. As sovereign ruler, players must maintain delicate equilibrium across four foundational pillars of royal authority: Economy, Trust, War, and Diplomacy. Every royal decree, foreign embassy interaction, and military skirmish creates cascading consequences. Featuring deep narrative decision decks, distinct foreign AI empires, clandestine espionage operations, an interactive provincial territory map, and real multiplayer federation mechanics, Realmora challenges rulers to survive shifting alliances, betrayal, and political intrigue.",
      keyFeatures: [
        "Four Foundational Pillars of Power: Dynamic equilibrium balancing Economy (treasury reserves and trade tariffs), Trust (civil loyalty and religious morale), War (garrison defense and legion readiness), and Diplomacy (foreign standing and pact integrity)",
        "Sovereign Decision Deck & Consequence Engine: Hundreds of contextual dilemma cards with dynamic predictive consequence previews, risk indicators, and branching narrative outcomes",
        "Four Unique Royal House Specialties: Choose your founding lineage: Merchant Guild (+20 starting Economy), Iron Guard (+20 starting War Defense), Scholar Embassy (+20 starting Diplomacy), or Sacred Order (+20 starting Civil Trust)",
        "Distinct Foreign NPC Kingdoms: Interact with four sophisticated AI empires featuring dynamic relationship meters: Iron Vanguard (militaristic legionnaires), Gilded Syndicate (mercantile magnates), Sylvan Conclave (isolationist druidic guardians), and Celestia Hegemony (zealous solar theocracy)",
        "Bilateral Diplomacy Suite: Negotiate non-aggression pacts, establish lucrative trade routes, send lavish royal tributes, sign mutual defense treaties, or demand vassalage",
        "Covert Espionage & Sabotage Network: Dispatch royal spies to infiltrate rival courts, steal military intelligence, sabotage food granaries, incite peasant rebellions, or stage high-stakes assassinations",
        "Interactive Provincial Territory Map: Strategic continent map displaying conquered fiefdoms, border garrisons, economic output nodes, and regional unrest levels",
        "Tactical Warfare & Siege Mechanics: Frontline battlefield calculations determining army casualties, siege weapon effectiveness, garrison defense thresholds, and territorial spoils",
        "Global World Senate & Politics: Universal council where rulers vote on global senate bills, continental trade embargoes, military sanctions, and collective geopolitical declarations",
        "Real Multiplayer Empire Network & PWA: Live player presence and alliance federations powered by Firebase, coupled with full offline PWA capabilities, gold theme styling, and install prompt"
      ],
      working: "Realmora is engineered using modular vanilla JavaScript with zero framework overhead, structured around clean functional controllers including diplomacy.js, war.js, espionage.js, politics.js, and events.js. The economic and political simulation runs on a reactive state engine that computes turn deltas, failure boundary conditions (peasant uprisings, military coups, or treasury collapse), and relationship matrices. Real-time multiplayer synchronization is handled through Firebase Authentication, Cloud Firestore, and Realtime Database, enabling live ruler presence, player kingdom interactions, and global leaderboard rankings. The client interface employs high-performance CSS glassmorphism, hardware-accelerated starfield and gold particle dust, sound ambience controllers, and an offline-resilient Service Worker with standard Web App Manifest installation.",
      highlights: "Features a 4-pillar equilibrium simulation, four distinct NPC AI empires, interactive territory warfare, covert espionage operations, real-time multiplayer alliances, and full PWA installability.",
      labs: [
        { name: "Sovereign Decision Deck", desc: "Interactive dilemma engine with branching narrative cards, consequence previews, and multi-variable stat impacts." },
        { name: "4-Pillar Stat Equilibrium Engine", desc: "Dynamic systemic model balancing Economy, Trust, War, and Diplomacy against catastrophic failure thresholds." },
        { name: "Foreign Kingdom AI & Treaties", desc: "Diplomatic simulation desk managing dynamic relationship meters, trade pacts, and tributes with 4 distinct NPC empires." },
        { name: "Covert Espionage & Sabotage Console", desc: "Clandestine operations center for deploying spies, gathering intelligence, and orchestrating sabotage missions." },
        { name: "Territorial Province Conquest Map", desc: "Interactive continent grid visualizing sovereign borders, garrisons, provincial outputs, and expansion fronts." },
        { name: "Global Senate & World Politics", desc: "Universal legislative chamber for tabulating multi-kingdom votes, imperial embargoes, and international sanctions." },
        { name: "Reign Chronicle & Hall of Kings", desc: "Chronological royal ledger tracking reign longevity, historical decrees, milestone achievements, and global rankings." }
      ]
    }
  },
  {
    id: "fractured-self",
    title: "Fractured Self",
    subtitle: "The Fall of Nader: Psychological Visual Novel & Cinematic Narrative Engine",
    category: "novels",
    categoryLabel: "Interactive Visual Novels",
    isPwa: true,
    featured: true,
    image: fracturedselfIcon,
    liveUrl: "https://rswarke1972-art.github.io/FracturedSelf/",
    githubUrl: "https://github.com/rswarke1972-art/FracturedSelf",
    tags: ["PWA", "Visual Novel", "Psychological Drama", "Branching Narrative", "Cinematic Engine", "Web Audio", "CG Gallery", "Autosave Vault"],
    shortDescription: "An atmospheric 731-scene psychological visual novel tracking the dramatic fall, moral hubris, and redemption of Nader, featuring branching dialogue, dynamic character flags, ambient Web Audio, and CG collections.",
    details: {
      generalIdea: "Fractured Self: The Fall of Nader is an emotionally raw, cinematic psychological visual novel exploring the depths of human arrogance, fractured identity, and the agonizing path toward moral redemption. The story chronicles Nader, a three-time national boxing champion and sole heir to a sprawling travel conglomerate, whose supreme hubris and unyielding pride set off a devastating downward spiral. Across 731 high-tension scenes spanning the Prologue, Chapter 1, and Chapter 2, readers navigate intense confrontations between Nader, his unbending father Fawzy al-Damanhouri, and Sabah, whose quiet devotion challenges his decaying soul. Through branching player decisions, psychological flag tracking, dynamic environmental particle physics, and adaptive musical soundscapes, every choice reflects a crack in the protagonist's fragile self-image.",
      keyFeatures: [
        "731-Scene Episodic Psychological Journey: A sweeping dramatic narrative across Prologue ('The Arrow and the Dark', 35 scenes), Chapter 1 ('The Fall from Grace', 191 scenes), and Chapter 2 ('The Trial of Conscience', 505 scenes)",
        "Dynamic Psychological Flag Matrix: Tracks 5 core emotional dimensions in real time: Trust, Guilt, Hope, Fear, and Character Relationship affinity",
        "Branching Dialogue & Consequence Engine: Crucial narrative crossroads where player decisions alter dialogue tone, character reactions, and ultimate moral resolutions",
        "Comprehensive CG Illustration Gallery: High-resolution artwork vault with 89 collectible CG illustrations and fullscreen lightbox inspection",
        "Synthesized Web Audio Ambient Soundscapes: Custom procedural Web Audio synthesizer delivering evocative dark atmospheric music without heavy external audio payloads",
        "Interactive Transcript & Dialogue History: Instant-access conversational backlog allowing readers to review previous exchanges, speech attributions, and narrative text",
        "Multi-Slot Save & State Checkpoint System: Robust client-side persistence with 3 manual save/load slots alongside real-time automatic progress checkpoints",
        "Reading Accessibility & Aesthetic Customization: Four reading modes (Dark, Light, Sepia, High Contrast), 4 typography styles (Cinzel, Georgia, Lora, Playfair Display), and adjustable text speed",
        "Rich Analytics & Statistics Console: Real-time reader telemetry measuring total playtime, story completion percentage, choice distribution, and gallery unlock rates",
        "Progressive Web App Architecture: Offline caching for script, styling, and core scene assets, home screen install prompt, and orientation-adaptive viewport"
      ],
      working: "Fractured Self is built with lightweight vanilla ES6 JavaScript and HTML5 Canvas with zero runtime dependencies. The narrative runs on a declarative JSON state machine (stories.json) containing 731 branching scene nodes. The engine orchestrates smooth cross-fading scene graphics, typewriter text pacing, auto-advance timers, and real-time audio ducking. An environmental particle canvas simulates floating gold dust, rain, and moody atmospheric fog. Player progress, flags, unlocked CGs, and reader settings are synchronized with LocalStorage, while a custom Service Worker implements offline asset caching with a fail-safe Promise.allSettled mechanism and standard Web App Manifest installation.",
      highlights: "Features a 731-scene psychological narrative, 5-variable dynamic flag engine (Trust, Guilt, Hope, Fear, Relationship), procedural Web Audio soundscapes, an 89-illustration CG gallery, and full PWA offline installation.",
      labs: [
        { name: "Branching Narrative Decision Engine", desc: "Interactive story controller coordinating 731 dramatic scenes with choice trees and multi-character dialogue." },
        { name: "Psychological Flag & Affinity Tracker", desc: "Dynamic state machine calculating live scores for Trust, Guilt, Hope, Fear, and Relationship affinity." },
        { name: "Adaptive Typography & Ambience Lab", desc: "Customizable reading environment with 4 visual themes, 4 serif/display typefaces, and adjustable typewriter speeds." },
        { name: "Transcript Backlog & History Viewer", desc: "Full dialogue review archive providing instant retrospective access to past narrative beats and speaker text." },
        { name: "Synthesized Web Audio Studio", desc: "Procedural browser audio engine generating dark ambient tones, melancholic chords, and atmospheric cues." },
        { name: "CG Illustration Gallery & Lightbox", desc: "Unlockable visual art repository showcasing 89 high-resolution story illustrations with fullscreen zooming." },
        { name: "Multi-Slot Save & State Vault", desc: "Triple-slot persistent state manager tracking chapter checkpoints, timestamps, and autosave restore points." }
      ]
    }
  },
  {
    id: "indieflow",
    title: "IndieFlow",
    subtitle: "Pan-Indian Language Learning Ecosystem & 15-Script Matrix",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: indieflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/IndieFlow/",
    githubUrl: "https://github.com/rswarke1972-art/IndieFlow",
    tags: ["PWA", "Language Learning", "Indic Scripts", "SM-2 Spaced Repetition", "15 Languages", "Sentence Builder", "Audio Pronunciation", "Comparative Linguistics"],
    shortDescription: "A comprehensive Indian language learning ecosystem across 15 Indic languages featuring SM-2 flashcards, interactive script tracing, sentence builders, cultural storybooks, and a 15-language comparative matrix.",
    details: {
      generalIdea: "IndieFlow is a unified, progressive language learning ecosystem and linguistic comparative workbench celebrating India's rich multilingual heritage. Spanning 15 major constitutionally recognized and classical Indian languages (Hindi, Sanskrit, Marathi, Bengali, Gujarati, Punjabi, Kannada, Telugu, Tamil, Malayalam, Odia, Assamese, Nepali, Sindhi, and Urdu), IndieFlow provides a complete educational pathway from script literacy to conversational reading fluency. Learners master unique Brahmic writing systems through phonetic character visualizers, build retention via the SuperMemo SM-2 spaced repetition algorithm, assemble grammatically accurate Indic sentences, and explore bilingual folklore stories. The platform uniquely features a pan-Indian comparative matrix that maps cognates, idioms, and phrases side-by-side across all 15 languages simultaneously.",
      keyFeatures: [
        "15 Major Indian Languages: Deep curriculum and dedicated datasets for Hindi, Sanskrit, Marathi, Bengali, Gujarati, Punjabi, Kannada, Telugu, Tamil, Malayalam, Odia, Assamese, Nepali, Sindhi, and Urdu",
        "SuperMemo SM-2 Spaced Repetition: Scientifically-grounded flashcard review algorithm calculating optimal repetition intervals, ease factors, and recall retention scores",
        "Interactive Letters & Script Visualizer: Detailed breakdown of Vowels (Swar), Consonants (Vyanjan), Matras (diacritics), and conjunct ligatures with authentic native audio",
        "Interactive Sentence Constructor: Drag-and-drop word tile syntax engine teaching Subject-Object-Verb (SOV) sentence structure, case markers, and postpositions with immediate grammatical validation",
        "Adaptive Audio & Reading Quiz Studio: Multi-format quizzes with listening comprehension, character recognition, English-to-Indic translation, streak multipliers, and instant feedback",
        "Synchronized Bilingual Cultural Storybook: Native folktales and literature with line-by-line synchronized English translations, tap-to-listen pronunciations, and contextual glossaries",
        "4-Tier Vocabulary Mastery Matrix: Tracks words dynamically across New, Learning, Known, and Mastered stages with real-time progress calculations",
        "15-Language Multilingual Comparison Matrix: Side-by-side linguistic comparison engine displaying common greetings, numbers, and cultural idioms across all 15 scripts simultaneously to showcase shared linguistic heritage",
        "Habit Streaks & Milestone Badges: Gamified consistency tracker recording daily learning streaks, letters visited, words mastered, and unlockable achievement trophies (Scholar, Polyglot, Master)",
        "Offline-First Progressive Web App: Service worker asset caching, dynamic manifest injection, responsive mobile-first dark slate glassmorphism, and home screen install capability"
      ],
      working: "IndieFlow is architected with modular vanilla JavaScript and optimized client-side JSON datasets without heavy framework dependencies. Language state is orchestrated through a centralized config.js controller that dynamically loads modular JSON packs (~100KB each) based on the user's active language selection. The spaced repetition engine implements the mathematical SuperMemo SM-2 formula storing interval days, repetition counts, and ease factors in LocalStorage. Progress telemetry (progress.js) computes weighted mastery percentages across character, vocabulary, and story modules. The application features a Service Worker with dynamic manifest injection for offline accessibility and an adaptive responsive interface optimized for Indic font rendering across diverse scripts.",
      highlights: "Features comprehensive coverage of 15 Indian languages, an SM-2 spaced repetition flashcard engine, interactive sentence syntax builders, and an unprecedented 15-script comparative linguistic matrix.",
      labs: [
        { name: "15-Script Character & Phonetics Lab", desc: "Interactive alphabet engine exploring vowels, consonants, matras, and conjuncts with phonetic guides and native audio." },
        { name: "SM-2 Spaced Repetition Studio", desc: "Algorithmic flashcard trainer scheduling optimal reviews based on difficulty ratings, ease factors, and interval scaling." },
        { name: "Indic Sentence Construction Lab", desc: "Interactive syntax workbench assembling word tiles into grammatically correct Subject-Object-Verb (SOV) sentences." },
        { name: "Audio Listening & Recall Quiz", desc: "Adaptive assessment module testing reading comprehension, script recognition, and auditory word matching." },
        { name: "Bilingual Cultural Storybook", desc: "Line-by-line parallel reader with contextual translations, cultural lore, and sentence-level audio playback." },
        { name: "15-Language Comparative Matrix", desc: "Pan-Indian comparative workbench contrasting phrases, greetings, and cognates across 15 Indic scripts in parallel." },
        { name: "Vocabulary Tier Mastery Vault", desc: "Four-stage lexical progression tracker organizing vocabulary across New, Learning, Known, and Mastered tiers." }
      ]
    }
  },
  {
    id: "japaneseflow",
    title: "JapaneseFlow",
    subtitle: "Complete Japanese Mastery, Kana Systems, JLPT Kanji & SRS Engine",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: japaneseflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/JapaneseFlow/",
    githubUrl: "https://github.com/rswarke1972-art/JapaneseFlow",
    tags: ["PWA", "Japanese Learning", "Hiragana & Katakana", "JLPT Kanji", "SM-2 Spaced Repetition", "Japanese Grammar", "Furigana Reader", "Mnemonic Audio"],
    shortDescription: "A comprehensive Japanese language learning PWA covering Hiragana, Katakana, JLPT N5-N1 Kanji, SM-2 spaced repetition review queues, particle grammar, and bilingual cultural storybooks.",
    details: {
      generalIdea: "JapaneseFlow is a holistic, offline-ready Japanese language mastery ecosystem designed to guide learners seamlessly from introductory Kana literacy up to advanced JLPT Kanji and complex grammar structures. Built around a cognitive learning architecture, the platform combines complete Hiragana and Katakana syllabaries, multi-tier JLPT Kanji roadmaps (N5 through N1) with stroke orders and onyomi/kunyomi readings, and a dedicated Japanese grammar laboratory covering particles and essential verb conjugations. A built-in SuperMemo SM-2 spaced repetition system schedules dynamic review queues based on individual memory decay, while interactive mnemonic songs and bilingual cultural literature (such as Kenji Miyazawa's classic tales) provide authentic immersion. With daily streak tracking, XP milestones, and offline PWA capabilities, JapaneseFlow makes mastering the intricacies of Japanese structured, engaging, and accessible anywhere.",
      keyFeatures: [
        "Complete Dual Kana Syllabaries: Interactive character explorers for all 46 basic Hiragana and Katakana, plus dakuten, handakuten, and combined yōon diphthongs with authentic native audio",
        "JLPT Kanji Mastery (N5 to N1): Progressive Kanji curriculum organized by official JLPT levels, displaying radicals, stroke counts, Onyomi (Chinese) and Kunyomi (Japanese) readings, and high-frequency compounds",
        "SuperMemo SM-2 Spaced Repetition Engine: Scientifically schedules reviews for Kana, Kanji, and vocabulary based on retention ease factors, interval scaling, and quality response scores",
        "Comprehensive Japanese Grammar Hub: Detailed breakdowns of essential particles (wa, ga, o, ni, de, e, to, mo, kara, made) and systematic verb conjugation matrices (Masu, Te, Nai, Ta, Potential, Passive)",
        "Bilingual Story Mode with Furigana Annotations: Interactive classical Japanese literature reader featuring toggleable furigana ruby text, romaji transliterations, instant word definitions, and parallel English glosses",
        "Mnemonic Kana Audio Songs: Integrated melodic mnemonic songs for Hiragana and Katakana memorization, accompanied by serene traditional shakuhachi flute ambient audio",
        "Adaptive Multi-Format Quiz Studio: Interactive assessments testing script recognition, audio listening recall, English-to-Japanese vocabulary matching, and Romaji conversions",
        "Gamified Progress & JLPT Readiness Telemetry: Live dashboard tracking level advancement, XP accumulation, daily study goals, active day streaks, accuracy rates, and JLPT N5 readiness percentages",
        "Instant Dictionary & Radical Search: High-speed search engine across the Japanese lexicon, allowing instant lookups by English meaning, Romaji, Kana, or Kanji radical",
        "Offline-First Progressive Web App: Service worker caching for data.json, audio assets, and lessons, paired with web app manifest shortcuts and fullscreen desktop/mobile installation"
      ],
      working: "JapaneseFlow is engineered with vanilla modular JavaScript, utilizing optimized client-side JSON databases (data.json and wildcat.json totaling over 700KB of rich linguistic data) without external framework dependencies. The spaced repetition engine (srs.js) implements the mathematical SuperMemo SM-2 algorithm, persisting card ease factors, review intervals, and next-review timestamps in LocalStorage. Dynamic dashboard analytics (dashboard.js) analyze mastery queues in real time to recommend the user's optimal next learning step. The bilingual story viewer utilizes custom DOM tokenizers to bind interactive lookup listeners to individual Japanese tokens with synchronized furigana ruby tags. A service worker caches core scripts, audio files, and data tables to provide a completely responsive, offline-first learning experience.",
      highlights: "Features dual Kana syllabaries with mnemonic songs, JLPT N5-N1 Kanji with dual readings, an SM-2 spaced repetition review engine, Japanese particle grammar guides, and an interactive furigana story reader with full PWA offline support.",
      labs: [
        { name: "Dual Kana Syllabary Explorer", desc: "Interactive phonetics grid for all Hiragana and Katakana characters, diacritics, and combinations with native audio." },
        { name: "JLPT Kanji Progression Studio", desc: "Level-based Kanji laboratory detailing Onyomi/Kunyomi readings, radical classifications, and vocabulary compounds." },
        { name: "SM-2 Spaced Repetition Review Queue", desc: "Algorithmic review workbench optimizing flashcard retention through difficulty ratings and adaptive review schedules." },
        { name: "Japanese Particle & Grammar Lab", desc: "Structured guide covering particle usage rules, sentence patterns, and multi-form verb conjugation tables." },
        { name: "Furigana Cultural Story Reader", desc: "Interactive bilingual story viewer with clickable vocabulary lookups, furigana ruby text toggles, and parallel English translations." },
        { name: "Kana Mnemonic Melodic Studio", desc: "Musical learning player with Hiragana and Katakana mnemonic songs and relaxing traditional Japanese ambient flute music." },
        { name: "Adaptive Assessment & Quiz Console", desc: "Dynamic testing suite featuring listening recall, Kana transcription, Romaji-to-script drills, and instant feedback." }
      ]
    }
  },
  {
    id: "corezen",
    title: "CoreZen",
    subtitle: "Holistic Fitness Architecture, Muscle Anatomy, Yoga Sanctuary & Training Systems",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: corezenIcon,
    liveUrl: "https://rswarke1972-art.github.io/CoreZen/",
    githubUrl: "https://github.com/rswarke1972-art/CoreZen",
    tags: ["PWA", "Fitness Architecture", "Muscle Anatomy", "Exercise Library", "Yoga Sanctuary", "Workout Planner", "Nutrition & Diet", "Gym Equipment Guide"],
    shortDescription: "An all-in-one fitness and wellness PWA integrating kinesiological muscle anatomy, categorized exercise biomechanics, yoga sanctuary flows, personalized workout routine generation, nutritional guidance, and gym machine safety manuals.",
    details: {
      generalIdea: "CoreZen is a unified fitness, kinesiology, and wellness platform engineered around the guiding philosophy: Strong Body. Calm Mind. Rather than isolating strength training from recovery and mindfulness, CoreZen synthesizes high-performance physical conditioning with functional anatomical understanding and restorative yoga. Athletes and fitness enthusiasts can explore an interactive dual-view human anatomy map, investigate categorized exercise libraries with concentric/eccentric cues and common form pitfalls, generate personalized multi-day training splits calibrated to individual experience levels, practice structured yoga flows with breath tempo cadence, master gym equipment mechanics, and adopt science-backed nutritional meal structures. Fully enabled as an offline-first Progressive Web App, CoreZen provides an ad-free, accessible, and scientifically grounded physical training companion anywhere.",
      keyFeatures: [
        "Biomechanical Exercise Library: Multi-category movement directory with primary/secondary muscle activation, step-by-step execution cues, common form pitfalls, and coaching tips",
        "Interactive Dual-View Anatomy Explorer: Interactive anterior and posterior human body maps detailing muscle origins, kinesiological functions, and target exercises",
        "Mindful Yoga Sanctuary: Progressive asana library spanning Beginner, Flexibility, Strength, Balance, and Pranayama breathing routines with breath tempo indicators",
        "Adaptive Multi-Day Workout Planner: Intelligent routine generator designing structured 2-to-6 day training splits calibrated for Strength, Hypertrophy, Fat Loss, and Mobility",
        "Comprehensive Nutrition & Diet Guide: Macro breakdown strategies, vegetarian and lean protein directories, meal architectures, and nutrient timing principles",
        "Complete Gym Machine Manual: Equipment reference detailing mechanical levers, seat and cable pin adjustments, safety catch locks, and proper muscle recruitment patterns",
        "Form Precision & Injury Prevention Engine: Step-by-step cueing system detailing common mistakes (e.g. elbow flaring, lumbar hyperextension) with corrective biomechanical tips",
        "Dynamic Search & Multi-Filter Console: Real-time filtering across difficulty levels (Beginner, Intermediate, Advanced), muscle groups, and equipment setups",
        "Modern Glassmorphism & Micro-Interactions: Glowing emerald and cyan UI with subtle hover physics, intersection observer scroll reveals, and high-contrast typography",
        "Offline-First Progressive Web App: Service worker caching (sw.js), standalone PWA manifest, interactive device-specific install modal dialog, and home screen launch capability"
      ],
      working: "CoreZen is architected as an offline-first Progressive Web App utilizing modular vanilla JavaScript and structured JSON databases (data.json) without heavy frontend framework overhead. Biomechanical movement datasets are organized hierarchically by target muscle groups and equipment modalities. The interactive anatomy viewer maps anterior and posterior anatomical nodes to relational exercise queries, rendering immediate biomechanical cues on selection. The workout planner dynamically computes split architectures and exercise pairings across 2-to-6 day schedules using algorithmic volume distribution. A dedicated service worker leverages Promise.allSettled() pre-caching and Network-First routing for navigation requests, ensuring instant loading even without internet connectivity, while custom beforeinstallprompt event hooks manage cross-platform PWA installation states.",
      highlights: "Features an interactive dual-view muscle anatomy map, a multi-category exercise biomechanics library with form cues, a dynamic 2-to-6 day workout planner, a mindful yoga sanctuary, and a comprehensive gym machine manual with full PWA offline support.",
      labs: [
        { name: "Interactive Anatomy & Muscle Activation Lab", desc: "Dual-perspective body map highlighting anterior and posterior muscle groups with primary and secondary recruitment pathways." },
        { name: "Exercise Biomechanics & Form Lab", desc: "Interactive movement analyzer detailing step-by-step concentric/eccentric phases, joint alignments, and common execution mistakes." },
        { name: "Dynamic Split Generator & Routine Lab", desc: "Algorithmic workout builder generating structured weekly training splits tailored to goal, experience level, and training days." },
        { name: "Mindful Yoga & Pranayama Studio", desc: "Asana flow and breathwork trainer with categorized poses for flexibility, balance, core stability, and diaphragmatic breathing." },
        { name: "Gym Equipment & Machine Calibration Lab", desc: "Virtual machine setup guide detailing seat positions, cable pulley heights, safety stops, and resistance profiles." },
        { name: "Nutritional Architecture & Macro Studio", desc: "Daily protein calculator, vegetarian fuel directory, and pre/post-workout nutritional timing guide." },
        { name: "Progressive Overload & Volume Tracker", desc: "Training volume and recovery workbench balancing weekly sets per muscle group to prevent overtraining and optimize hypertrophy." }
      ]
    }
  },
  {
    id: "artyssey",
    title: "Artyssey",
    subtitle: "Masterpiece Art Analysis, Semiotics & Symbolism Decoder",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: true,
    featured: true,
    image: artysseyIcon,
    liveUrl: "https://rswarke1972-art.github.io/Artyssey/",
    githubUrl: "https://github.com/rswarke1972-art/Artyssey",
    tags: ["PWA", "Masterpiece Art Analysis", "Semiotics & Symbolism", "Art History", "Chiaroscuro & Lighting", "Visual Storytelling", "Cultural Education", "Museum Curation"],
    shortDescription: "An immersive museum art analysis PWA decoding 21 world masterpieces across 10 analytical dimensions including semiotics, hidden symbolism, facial micro-expressions, golden ratio geometry, and historical context.",
    details: {
      generalIdea: "Artyssey is an immersive museum education and semiotic art analysis platform designed to transform classical art viewing from passive aesthetic observation into rigorous hermeneutic decryption: teaching users to read master paintings like literature. Centered around 21 curated world masterpieces spanning the High Renaissance, Romanticism, Victorian Academicism, Pre-Raphaelite Brotherhood, Vienna Secession, and Ukiyo-e woodblock printing, Artyssey breaks down each canvas across 10 rigorous analytical dimensions: Historical Context, Facial Micro-Expressions, Postural Kinesics, Semiotic Symbolism, Material Object Culture, Compositional Geometry, Chiaroscuro Lighting, Emotional Atmosphere, Historiographical Impact, and Biographical Lore. By unveiling the hidden allegories behind works like Vasily Pukirev's The Unequal Marriage, Leonardo da Vinci's The Last Supper, and Friedrich Retzsch's Checkmate, Artyssey resurrects the cultural controversies and visual mysteries embedded in centuries of human creativity.",
      keyFeatures: [
        "10-Dimensional Masterpiece Deconstruction: Systematic analysis of Context, Facial Features, Body Language, Symbolism, Object Details, Composition, Lighting/Color, Mood, Significance, and Painter Lore",
        "Semiotic Symbolism & Hidden Allegory Decoder: Unraveling esoteric and theological allegories such as Mephistopheles' chess pieces in Checkmate, severed ribbons in The Unequal Marriage, and magical ritual herbs in Waterhouse's canvases",
        "Facial Expression & Micro-Physiognomy Analysis: Scientific breakdown of pupil dilation, facial muscle tension, moral agony, and subtle emotional nuance across painted historical figures",
        "Postural Kinesics & Body Language Mapping: Spatial orientation, directional gaze vectors, defensive postures, and somatic tension indicators across dramatic human interactions",
        "Geometrical Composition & Golden Ratio Vectors: Deconstructing pyramidal arrangements, triangular sightlines, golden spirals, and orthogonal vanishing points in masterpiece architecture",
        "Chiaroscuro & Chromatic Palette Decoding: Investigating tonal contrast, dramatic chiaroscuro tenebrism, pigment selection, emotional color harmonies, and luminous focal points",
        "High-Resolution Interactive Canvas Viewer: Fullscreen zoomable inspection allowing users to examine fine craquelure, oil glazing layers, delicate brushstrokes, and background details",
        "Dynamic Multi-Tag Autocomplete Search: Instant keyword and thematic filtering across art movements, emotional moods, mythological subjects, historical eras, and genres",
        "Curated Historical Context & Archival Lore: Exhaustive historiographical narratives placing each work within its socio-political landscape, academic controversies, and artist biographies",
        "Offline-First Progressive Web App: Service worker caching (sw.js), standalone PWA manifest, custom installation modal with device-specific instructions, and home screen launch capability"
      ],
      working: "Artyssey is engineered as an offline-first Progressive Web App utilizing modular vanilla JavaScript and an exhaustive client-side dataset (data.json exceeding 1MB of curated art historical monographs) without heavy framework overhead. The client architecture parses painting records into structured DOM components, binding dynamic tag indexes to an auto-completing search filter. Clicking any painting preserves viewport scroll positions via sessionStorage before navigating to the deep dossier viewer (information.html). High-resolution image assets are managed through a custom lightbox overlay with smooth backdrop blur transitions. A dedicated service worker leverages Promise.allSettled() pre-caching and Network-First routing for navigation requests, ensuring instant museum-grade performance even when offline, while custom beforeinstallprompt event hooks manage cross-platform PWA installation states.",
      highlights: "Features exhaustive 10-dimensional deconstructions of 21 world masterpieces, semiotic symbolism decoding, facial expression and postural kinesics mapping, compositional geometry analysis, and full PWA offline support.",
      labs: [
        { name: "Semiotic Symbolism & Iconography Decoder", desc: "Interactive allegory workbench decoding hidden theological, mythological, and political symbols embedded across canvases." },
        { name: "High-Resolution Loupe & Texture Magnification Studio", desc: "Virtual museum magnifying loupe inspecting micro brushwork, pigment glazes, canvas textures, and fine details." }
      ]
    }
  },
  {
    id: "audioleaf",
    title: "AudioLeaf",
    subtitle: "PDF-to-Audiobook Studio with Local OCR and AI Reading Assistant",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: true,
    featured: true,
    image: audioleafImage,
    liveUrl: "https://rswarke1972-art.github.io/AudioLeaf/",
    githubUrl: "https://github.com/rswarke1972-art/AudioLeaf",
    tags: ["OCR", "Text-to-Speech", "PDF Reader", "Study Hub", "AI Assistant", "PWA", "Accessibility"],
    shortDescription: "A fully client-side audiobook studio that transforms PDFs and scanned book pages into natural spoken audio using on-device OCR, synchronized sentence highlighting, and an AI reading assistant - zero uploads, zero servers, completely private.",
    details: {
      generalIdea: "AudioLeaf brings knowledge to life for students, researchers, commuters, and visually impaired readers. Simply drop any PDF or scanned document into the browser and AudioLeaf extracts clean text using local OCR (Tesseract.js), renders the PDF with PDF.js, and begins reading aloud with real-time sentence-by-sentence highlighting. Every session is private because all processing happens in the browser. A built-in Study Hub lets readers bookmark, annotate, and highlight while the AI Reading Assistant can summarize, explain, simplify, or translate any selected passage on demand.",
      keyFeatures: [
        "On-Device OCR Engine: Uses Tesseract.js at an optimized 2x scale to extract text from scanned book pages, handwritten notes, and image-based PDFs without sending any data to a server - achieving 10x speed over the naive approach",
        "PDF.js Powered Viewer: Renders native PDF pages alongside the text extraction panel with zoom, page navigation, and dual-column layout detection for academic papers and textbooks",
        "Web Speech API TTS: Converts extracted sentences to speech using the browser's built-in speech synthesis with live voice selection across 50+ language voices, adjustable speed (0.5x to 3x), and preview mode",
        "Sentence-Level Synchronized Highlighting: Every spoken sentence is precisely highlighted in the text panel as it is read aloud, giving the feel of a professional audiobook player with word-by-word tracking",
        "AI Reading Assistant: Context menu appears on text selection with four AI actions: Summarize (distills a passage), Explain (unpacks complex ideas), Simplify (rewrites in plain language), and Translate (converts to a target language)",
        "Smart Header/Footer Scrubber: Dynamically detects and removes repetitive headers, footers, page numbers, and watermark text that appear across multiple pages before they are fed to TTS",
        "Study Hub Dashboard: Centralized workspace to manage bookmarks, annotated notes, color-coded highlights, and AI-saved readings. All data persists in browser localStorage and can be exported as structured JSON",
        "LRU Page Cache: Intelligent 8-page least-recently-used cache ensures previously read pages load instantly when navigating back without re-running OCR",
        "Multi-Theme Customization Studio: Five themes (Dark, Light, Warm, Forest, Night), adjustable font size and line spacing, three reading width modes, and four highlight color options that persist across sessions",
        "Full PWA with Service Worker: Registers a Network-First Service Worker with automatic asset caching for offline reading. A header Install button triggers the native browser install prompt to add AudioLeaf to the home screen or desktop"
      ],
      working: "AudioLeaf operates as a three-stage pipeline: (1) Extraction - PDF.js parses the document structure and attempts direct text extraction first. If the content is image-based or the extracted text looks garbled (looksCorrupted check), Tesseract.js renders the page canvas and performs OCR with grayscale preprocessing and a confidence threshold gate of 80 to avoid low-quality reads. (2) Processing - Raw extracted text passes through a multi-step cleaning pipeline: header/footer frequency analysis removes boilerplate, duplicate line removal cleans repetition, splitIntoSentences builds the sentence array for TTS, and fixPronunciation normalizes abbreviations and equations. (3) Playback - The Web Speech API receives sentence strings one at a time. Each sentence triggers highlightActiveSentence in the text panel and scrolls the display. Skip forward/back moves between sentences; skip 10s uses the utterance boundary event to estimate word position. The entire reading session state (current page, sentence index, notes, highlights, bookmarks) is serialized to localStorage on every change.",
      highlights: [
        "Zero-server architecture: every OCR, AI, and TTS operation runs entirely inside the user's browser, making AudioLeaf completely private and offline-capable",
        "Dual text extraction strategy: tries fast PDF.js text layer first and falls back to Tesseract OCR only when content is image-based, keeping load time minimal for standard PDFs",
        "The AI Reading Assistant is built with local prompt engineering using selected text as context, producing four distinct outputs (summary, explanation, simplification, translation) without external API calls",
        "LRU page cache with prefetching reads the next and previous pages in the background so navigation feels instantaneous",
        "Sentence editing mode lets users click any sentence to correct OCR mistakes before they are read aloud, ensuring audio accuracy on difficult documents",
        "Export-ready Study Hub produces structured JSON of all notes, highlights, bookmarks, and AI readings for use in Notion, Obsidian, or any note-taking workflow",
        "Keyboard-first design with full shortcut coverage: Spacebar for play/pause, arrow keys for sentence and page navigation"
      ],
      labs: [
        {
          name: "OCR Stress Test Lab",
          desc: "Upload a low-resolution scan of a hand-annotated page (e.g., a photocopy of a textbook with margin notes). Compare the raw Tesseract output in the text panel against the original PDF page rendered in the viewer. Observe how the header/footer scrubber and duplicate line removal clean the output before TTS."
        },
        {
          name: "Voice Benchmarking Lab",
          desc: "Open the Voice Selection panel and cycle through all available browser voices on the same paragraph. Use the Preview button to audition each voice before committing. Note how different languages and accents affect prosody and naturalness for the same English text."
        },
        {
          name: "AI Annotation Sprint",
          desc: "Load any academic PDF, play a section, and pause on a difficult concept. Select that sentence in the text panel and trigger all four AI actions (Summarize, Explain, Simplify, Translate) in sequence. Save each result to the Study Hub and export the final JSON for review."
        },
        {
          name: "Speed Learning Experiment",
          desc: "Upload a chapter from a non-fiction book and set the TTS speed to 1.8x. Use the sentence-level progress bar to track position. After 10 minutes, pause and quiz yourself on the content. Then re-listen to missed sentences at 1.0x using Jump to Sentence."
        },
        {
          name: "Two-Column PDF Layout Lab",
          desc: "Upload a research paper or newspaper scan that uses a two-column layout. AudioLeaf attempts automatic two-column text detection and extraction order. Review whether the left column is read fully before the right column begins, and manually reorder any misaligned sentences using the edit mode."
        },
        {
          name: "Offline Reading Mode Lab",
          desc: "Open AudioLeaf over localhost or the live deployment and load a multi-page PDF to trigger Service Worker caching. Disconnect from the internet and refresh. Confirm the app loads from cache and continues to read the already-extracted text without any network requests."
        },
        {
          name: "Study Hub Export and Import Lab",
          desc: "Annotate a full chapter (5 bookmarks, 10 highlights, 5 notes, 3 AI readings). Export the Study Hub as JSON. Open the exported file and inspect the data schema. Write a simple script to convert the exported JSON into a Markdown outline with headings for each note and bullet points for highlights."
        }
      ]
    }
  },
  {
    id: "promptica",
    title: "Promptica",
    subtitle: "ChatGPT Prompt Learning Library with 36 Copy-Ready Patterns",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: true,
    featured: true,
    image: prompticaImage,
    liveUrl: "https://rswarke1972-art.github.io/Promptica/",
    githubUrl: "https://github.com/rswarke1972-art/Promptica",
    tags: ["Prompt Engineering", "ChatGPT", "AI Patterns", "LLM Workflows", "PWA", "Productivity"],
    shortDescription: "A focused, zero-friction prompt learning studio with 36 expert-crafted patterns across 6 categories and 3 difficulty levels. Every prompt is copy-ready, searchable, and explained - turning prompt engineering from guesswork into a repeatable skill.",
    details: {
      generalIdea: "Promptica exists because most people use ChatGPT like a search engine and consistently under-prompt. The library teaches a three-step method (Frame the Role, Add Useful Constraints, Iterate with Signals) through 36 copy-ready prompt patterns spanning Writing, Learning, Work, Coding, Research, and Creative domains. Each prompt is graded by difficulty (Beginner to Advanced), explained with its strategic purpose, and designed to be adapted rather than just copied. The entire app is static, offline-capable via PWA, and loads in under one second.",
      keyFeatures: [
        "36 Expert-Crafted Prompt Patterns: Six categories (Writing, Learning, Work, Coding, Research, Creative) each with 6 prompts covering Beginner, Intermediate, and Advanced difficulty tiers - from Clear Rewrite Coach to Worldbuilding Sheet",
        "Category Filtering System: Interactive category cards with icon-coded domains that filter the prompt library instantly. Clicking a category card scrolls smoothly to the library and shows only relevant prompts",
        "Difficulty Tier Badges: Every prompt carries a color-coded difficulty pill (green Beginner, amber Intermediate, red Advanced) with filter buttons to narrow by skill level",
        "Full-Text Search: Live keyword search across prompt title, category, difficulty, summary, and the full prompt body - finding relevant patterns in real time as you type",
        "One-Click Copy with Confirmation: A clipboard copy button on every card copies the complete prompt text and shows an animated check icon with 1.6 second reset - with a legacy fallback for non-secure contexts",
        "Show More / Show Less Accordion: Long prompts collapse to a preview by default with an expand toggle to reveal the full text, keeping the interface scannable without hiding content",
        "The Promptica Method Framework: A three-step pedagogical section (Frame the Role, Add Useful Constraints, Iterate with Signals) teaches the mental model behind effective prompting - not just templates",
        "Stats Dashboard in Hero: Real-time counters showing 36 prompt patterns, 6 categories, and 3 difficulty levels give instant scope clarity on first load",
        "Reset Filters with Live Count: A results counter shows matching prompt count and a Reset Filters button clears all active search and category state simultaneously",
        "Full PWA with Service Worker: Registers a Network-First Service Worker for offline access with an Install App button in the header and hero - serving the prompt library even without a network connection"
      ],
      working: "Promptica is a pure client-side static application with zero build step or server dependency. The script.js file declares two flat arrays: categories (6 objects with name, icon, and description) and prompts (36 objects with title, category, difficulty, summary, and full prompt text). A shared state object tracks the active query string, difficulty filter, and category filter. The render() function calls renderCategories() and renderPrompts() together. renderPrompts() filters the 36-prompt array through matchesPrompt() which does a case-insensitive substring match across all five prompt fields simultaneously. The filtered array is mapped to HTML card strings and written to innerHTML. Copy functionality uses navigator.clipboard.writeText on secure contexts and falls back to a hidden textarea + document.execCommand for older browsers. The Show More accordion uses aria-expanded toggling for accessibility. PWA registration happens in an IIFE after render() and listens for beforeinstallprompt to show install buttons, or falls back to a guide modal.",
      highlights: [
        "Zero external dependencies and zero build step: the entire app is three files (HTML, CSS, JS) that run instantly from any file server or GitHub Pages",
        "The three-step Promptica method is baked into the UI as a first-class learning section, not buried in documentation",
        "Full-text search covers the actual prompt body, so users can find patterns by describing what they want to do rather than knowing the prompt's name",
        "Prompt cards show character counts so users can calibrate for token-limit-sensitive models before copying",
        "Copy confirmation with auto-reset means users get clear feedback without a persistent toast notification cluttering the interface",
        "The category filter and difficulty filter are independent and additive - users can browse Advanced Coding prompts or Beginner Creative prompts without extra clicks",
        "Built as a PWA with Network-First caching so the full library is available offline after the first visit, useful in workshops and low-connectivity environments"
      ],
      labs: [
        {
          name: "Prompt Anatomy Dissection Lab",
          desc: "Pick any Advanced prompt (e.g., Architecture Tradeoff or Brand Naming Matrix). Break it into its structural components: role framing, constraint specification, output format instruction, and success criteria. Rewrite each component independently and recombine into a new variant for a different domain."
        },
        {
          name: "Category Sprint Challenge",
          desc: "Set a 10-minute timer. Filter to one category (e.g., Research) and read all 6 prompts. Pick the one closest to a real task you have right now. Copy it, fill in the bracketed variables, paste it into ChatGPT, and evaluate the output against the prompt's stated summary goal."
        },
        {
          name: "Difficulty Ladder Experiment",
          desc: "Take one topic (e.g., machine learning). Find the Beginner prompt (Explain Like Layers), the Intermediate prompt (Exam Drill Builder), and the Advanced prompt (Mastery Roadmap). Run all three on the same topic and compare the depth and structure of the outputs."
        },
        {
          name: "Prompt Remix Workshop",
          desc: "Open the Creative category and find the Idea Remix prompt. Use it on a prompt pattern itself (e.g., remix the Socratic Tutor prompt into 15 variants). Create five safer versions (less demanding), five stranger versions (unconventional constraints), and five more premium versions (higher-stakes applications)."
        },
        {
          name: "Cross-Category Transfer Lab",
          desc: "Take the Decision Matrix prompt from the Work category and adapt it for a Creative category task (e.g., choosing between story premises). Modify the criteria fields to reflect creative rather than operational values. Evaluate whether structured decision frameworks transfer across knowledge domains."
        },
        {
          name: "Prompt Iteration Protocol",
          desc: "Run the Clear Rewrite Coach prompt on a paragraph of your own writing. Review the three edits it identifies. Use the Iterate with Signals method: write specific feedback on what is still wrong and run a follow-up prompt asking for a sharper revision targeting those exact issues."
        },
        {
          name: "Offline Prompt Lab",
          desc: "Open Promptica on the live deployment, browse all 36 prompts to warm the Service Worker cache, then disconnect from the internet and refresh. Verify the full library loads offline. Test search, filtering, and copy functionality without network access to validate the PWA caching strategy."
        }
      ]
    }
  },
  {
    id: "gateforge",
    title: "GATEFORGE",
    subtitle: "Forge Your AIR Rank - Ultimate GATE CSE Command Center & CBT Exam Arena",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: gateforgeIcon,
    liveUrl: "https://rswarke1972-art.github.io/GATEFORGE/",
    githubUrl: "https://github.com/rswarke1972-art/GATEFORGE",
    tags: ["PWA", "GATE CSE", "AIR Predictor", "PYQ Battle Arena", "CBT Mock Simulator", "Theory Hub", "Error Journal", "Spaced Repetition"],
    shortDescription: "A battle-tested GATE CSE preparation command center featuring 12 curriculum subjects, interactive Theory Hub, 4-mode PYQ combat arena, 65-question CBT mock simulator with negative marking and virtual calculator, automated error journal, and algorithmic All India Rank (AIR) predictor.",
    details: {
      generalIdea: "GATEFORGE transforms Computer Science & Information Technology GATE exam preparation into a data-driven, tactical command center. Instead of passive rote memorization, GATEFORGE treats exam readiness as an evolving combat score. Aspirants track topic-level mastery across all 12 core curriculum domains, master conceptual proofs in the Theory Hub, sharpen recall under intense time pressure in the PYQ Battle Arena, diagnose conceptual blind spots in the automated Error Journal, reinforce volatile formulas via spaced repetition schedules (Days 1, 3, 7, 15, 30), and benchmark endurance in a full 65-question computer-based mock simulator calibrated with authentic GATE negative marking. The algorithmic AIR Predictor synthesizes test accuracy, study streaks, question volume, and topic coverage to compute realistic All India Rank target brackets.",
      keyFeatures: [
        "12 Core GATE CSE Subject Modules: Comprehensive tracking across General Aptitude, Engineering Mathematics, Discrete Math, Digital Logic, COA, Programming & Data Structures, Algorithms, Theory of Computation, Compiler Design, DBMS, Operating Systems, and Computer Networks",
        "Interactive Theory Hub: In-depth concept notes, mathematical definitions, asymptotic complexity charts, and canonical algorithms for rapid revision before solving questions",
        "4-Mode PYQ Battle Arena: Gamified practice including Solo Battle (30s timer, 5 questions), Speed Mode (15s rapid-fire, 8 questions), Boss Battle (45s high-difficulty questions), and Survival Mode (unlimited questions until the first strike)",
        "65-Question CBT Mock Simulator: Faithful replica of the official GATE interface featuring 180-minute countdown timer, question palette with 4 status states (Answered, Not Answered, Marked for Review, Answered & Marked for Review), virtual numeric calculator, and accurate negative marking (1/3 deduction for 1-mark questions, 2/3 deduction for 2-mark questions)",
        "Dynamic AIR Rank Predictor: Algorithmic model calculating candidate readiness scores and projecting realistic All India Rank brackets (e.g., AIR 150 – 350) based on weighted accuracy, consistency streak, battle XP, and mock performance",
        "Automated Error Journal & Weakness Heatmap: Automatically captures recurring conceptual mistakes, classifies error patterns by subject and sub-topic, and highlights high-risk areas needing targeted intervention",
        "Scientific Spaced Repetition Revision: Automated revision scheduler queuing forgotten formulas and tricky concepts at intervals of Day 1, 3, 7, 15, and 30 to guarantee long-term synaptic retention",
        "Daily Tactical Study Planner: Configurable study schedules calibrated to target GATE year (2026, 2027, 2028), target AIR goal, and daily study hours (1–16 hrs/day) with daily streak motivation",
        "Gamified XP, Combo, & Achievement Engine: Unlocks achievement badges for consecutive study days, PYQ milestones, battle victories, and mock test percentiles with real-time celebratory popups",
        "Dual Cloud & Offline Architecture: Cloud synchronization with Firebase Firestore and Google Auth alongside a frictionless, zero-setup offline Guest Mode backed by local storage",
        "Offline-Ready PWA Infrastructure: Built-in Service Worker caching all static assets and question banks, complete with home screen installability and distraction-free full-screen launch"
      ],
      working: "GATEFORGE operates on an event-driven client-side architecture backed by a dual persistence layer: cloud synchronization with Firebase Firestore when authenticated, and an instant offline Guest Mode using structured localStorage serialization. Test and battle engines utilize high-precision requestAnimationFrame and setInterval timers with automatic state persistence. The AIR prediction engine applies a multi-factor regression formula: Score = 50 + (Accuracy * 0.4) + (Streak * 0.15) + (PYQs * 0.05) + (XP / 100) + (MockAcc * 0.3) + (TopicCompletion * 30), mapping into rank distribution power curves. The CBT mock simulator manages 65 question states via an immutable state reducer, enforcing official GATE marking criteria and virtual calculator precision. Offline operation is powered by a custom Service Worker implementing cache-first strategies for curriculum assets.",
      highlights: [
        "100% offline functionality in Guest Mode: Aspirants can solve PYQs, read the Theory Hub, battle time constraints, and take mocks without an internet connection",
        "Authentic GATE CBT engine: Replicates question palettes, negative marking penalties (1/3 and 2/3), question marking flags, and real-time countdown timers",
        "Algorithmic AIR Predictor: Gives tangible rank milestones that dynamically update as mock test accuracy and topic completion percentages improve",
        "4 distinct gamified battle modes transforming tedious previous-year question drills into high-focus competitive sprints",
        "Automated error logging with spaced repetition schedules preventing repeat mistakes on high-yield exam topics",
        "PWA installable on desktop, iPhone/iPad, and Android with dedicated platform guidance and prompt trigger"
      ],
      labs: [
        {
          name: "AIR Predictor Calibration Lab",
          desc: "Adjust test accuracy, study streak length, and completed subject count. Observe how the regression algorithm recalculates the readiness percentage and dynamically shifts the projected All India Rank range bracket."
        },
        {
          name: "PYQ Battle Speed Arena Lab",
          desc: "Launch Speed Mode with a strict 15-second per-question timer. Practice rapid question parsing and mental shortcut computation across Discrete Mathematics and Digital Logic under intense time pressure."
        },
        {
          name: "65-Question CBT Mock Simulation Lab",
          desc: "Initiate a full 3-hour mock test. Utilize the built-in virtual calculator, navigate the color-coded question palette, toggle 'Marked for Review' flags, and analyze the post-test diagnostic score breakdown with negative marks calculated."
        },
        {
          name: "Theory Hub Mastery Sprint",
          desc: "Navigate the Theory Hub across all 12 GATE subjects. Review asymptotic complexity classes in Algorithms, Chomsky hierarchy in TOC, and TCP congestion control dynamics in Computer Networks before heading into battle mode."
        },
        {
          name: "Spaced Repetition Revision Cycle Lab",
          desc: "Mark tricky formulas in the Error Journal and observe how the system schedules automated revision prompts at Day 1, Day 3, Day 7, Day 15, and Day 30 to seal concepts into long-term memory."
        },
        {
          name: "Weakness Diagnostic & Error Heatmap",
          desc: "Review the analytics tab after multiple test sessions. Examine subject-by-subject accuracy heatmaps to identify low-scoring topics and trigger focused practice sessions to eliminate vulnerabilities."
        },
        {
          name: "Offline PWA & Guest Mode Validation Lab",
          desc: "Open GATEFORGE, click Continue as Guest, and trigger the Install modal. Disconnect network access and verify that the full Theory Hub, question banks, battle modes, and planner function seamlessly offline without network latency."
        }
      ]
    }
  },
  {
    id: "mathpeak",
    title: "MathPeak",
    subtitle: "From Zero to Mathematical Mastery - Interactive Learning Peaks & Calculus Arena",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: mathpeakIcon,
    liveUrl: "https://rswarke1972-art.github.io/MathPeak/",
    githubUrl: "https://github.com/rswarke1972-art/MathPeak",
    tags: ["PWA", "Mathematics", "Calculus Sandbox", "Interactive Geometry", "KaTeX", "Spaced Repetition", "Fuzzy Search", "Gamified Learning"],
    shortDescription: "A comprehensive, gamified mathematics laboratory and progressive mastery platform taking learners from foundational arithmetic to multivariable calculus through 9 interactive visual sandboxes, step-by-step learning peaks, KaTeX formula hubs, and scientific spaced repetition revision.",
    details: {
      generalIdea: "MathPeak reimagines mathematical education as an adventurous mountain ascent. Instead of static textbook theorems and passive rote memorization, MathPeak transforms abstract mathematical concepts into tactile, manipulable visual instruments. Learners climb through progressive 'Learning Peaks' spanning Arithmetic, Pre-Algebra, Euclidean Geometry, Trigonometry, Single-Variable Calculus, Linear Algebra, Probability & Statistics, and Multivariable Vector Fields. Each concept pairs rigorous KaTeX LaTeX formula proofs with real-time parameter sliders, instant graph mutations, an interactive mathematical scratchpad, and an adaptive spaced repetition scheduler that prevents conceptual memory decay.",
      keyFeatures: [
        "8 Progressive Learning Peaks: Curated pedagogical pathways scaling from foundational numbers and algebraic equations to multivariable calculus, linear algebra transformations, and vector fields",
        "9 Real-Time Visual Sandboxes: Interactive HTML5 Canvas visualizers with dynamic parameter sliders covering Quadratic Parabolas, Triangle Geometry Centroids, Unit Circle Trigonometry, Tangent Derivatives, Riemann Sum Integration, 2D Matrix Warping, Vector Dot/Cross Products, Bell Curve Probability, and Vector Field Curl/Divergence",
        "Adaptive Practice Arena: Practice drills with multi-level difficulties ranging from Beginner to Olympiad tier, featuring immediate step-by-step KaTeX LaTeX solution derivations",
        "KaTeX Mathematical Typesetting: Lightning-fast, client-side LaTeX formula rendering displaying complex differential equations, matrix notations, and limit definitions with sub-millisecond precision",
        "Interactive Formula Hub: Searchable, categorized mathematical cheat sheet with one-click LaTeX code copying, formal mathematical proofs, and intuitive 'Explain Like I'm 10' conceptual analogies",
        "Scientific Spaced Repetition Revision: Ebbinghaus forgetting curve review scheduler tracking concept volatility and automatically generating spaced repetition review queues at Day 1, 3, 7, 14, and 30 intervals",
        "Fuzzy Concept Search Engine: Typo-tolerant fuzzy search engine that instantly indexes formulas, theorems, and lesson topics even when search queries contain common misspellings (e.g., 'derivitive' or 'pythagoras')",
        "Interactive On-Screen Scratchpad: Built-in digital canvas allowing learners to sketch geometric figures, write intermediate algebraic steps, and calculate proofs alongside problems",
        "Gamified Rank & XP Progression: Dynamic rank progression scaling from Equation Explorer to Theorem Master and Peak Ascendant, complete with daily study streaks, XP counters, and Web Audio celebratory tones",
        "Weakness Heatmaps & Analytics: Granular performance diagnostic tracking accuracy percentiles, time spent per domain, and high-frequency error patterns across mathematical disciplines",
        "Mobile-First Responsive Shell: Optimized touch gestures with canvas scrolling locks preventing accidental viewport bounces while manipulating geometric vertices or slider dials",
        "Offline-First Progressive Web App: Built-in Service Worker with pre-cached assets and manifest supporting seamless desktop and mobile home screen installation"
      ],
      working: "MathPeak is engineered with a modular zero-framework vanilla JavaScript architecture designed for maximal performance and zero latency. Mathematical formulas are rendered on the fly using KaTeX auto-renderers. The 9 Visual Sandboxes utilize dedicated HTML5 Canvas 2D rendering contexts running high-frequency animation loops with responsive resize observers. Graph sliders mutate mathematical state models in real time, recalculating vertices, numerical derivatives, and Riemann integration rectangles via high-precision numerical algorithms. State persistence, lesson milestones, and spaced repetition decay timers are serialized into browser localStorage, while sound effects are generated synthetically via the Web Audio API (AudioContext synth oscillators). An offline Service Worker caches static assets and font files for instant offline utility.",
      highlights: [
        "9 dedicated interactive visual simulation sandboxes allowing students to physically touch and warp mathematical concepts",
        "Dual-level pedagogy pairing rigorous university-level mathematical proofs with intuitive 'Explain Like I'm 10' conceptual breakdowns",
        "Lightning-fast client-side KaTeX rendering eliminating clunky image-based formula representations",
        "Typo-tolerant fuzzy search algorithm helping learners find definitions and formulas rapidly",
        "Integrated digital scratchpad enabling handwritten scratch work directly within practice problems",
        "PWA installable on desktop, iPhone, and Android devices for 100% offline study without server dependence"
      ],
      labs: [
        {
          name: "Riemann Sum Convergence Lab",
          desc: "Vary the rectangular slice column count $N$ from 2 to 80 under a curved polynomial. Watch numerical approximation errors diminish in real time as the Riemann sum converges smoothly to the exact definite integral."
        },
        {
          name: "Unit Circle Trigonometric Projection Lab",
          desc: "Rotate the continuous angle dial from $0^\\circ$ to $360^\\circ$. Observe how cosine (horizontal floor shadow) and sine (vertical wall height) project simultaneously onto continuous sinusoidal wave graphs."
        },
        {
          name: "Derivative Tangent & Instantaneous Slope Lab",
          desc: "Slide coordinate point $x$ along a cubic polynomial $f(x) = x^3 - 3x$. Observe the secant line collapse into an instantaneous tangent line while tracking the exact derivative curve slope $f'(x) = 3x^2 - 3$."
        },
        {
          name: "2D Linear Transformation Matrix Grid Lab",
          desc: "Manipulate the basis vector coordinates $\\hat{i}$ and $\\hat{j}$ using slider controllers. Observe how the coordinate grid shears, rotates, and scales, revealing the geometric meaning of matrix multiplication and determinants."
        },
        {
          name: "Dynamic Geometry Centroid & Incircle Lab",
          desc: "Drag glowing vertices $A$, $B$, and $C$ across the coordinate plane. Watch interior angle sums maintain $180^\\circ$ while centroid coordinates $G$ and circumcircle radii recalculate instantaneously."
        },
        {
          name: "Vector Calculus Curl & Divergence Fluid Lab",
          desc: "Toggle between rotational curl field $\\vec{F} = \\langle -y, x \\rangle$ and expansion divergence field $\\vec{F} = \\langle x, y \\rangle$. Watch dynamic floating particles simulate physical fluid flow and circulation."
        },
        {
          name: "Normal Distribution Central Limit Lab",
          desc: "Scale trial batches from 10 to 1,000 random event occurrences. Observe discrete binomial outcome bars assemble smoothly into the classic continuous Gaussian bell curve."
        },
        {
          name: "Offline PWA & Scratchpad Validation Lab",
          desc: "Launch MathPeak in offline mode via the Service Worker cache. Solve challenging practice problems using the digital scratchpad canvas, bookmark formulas into the local Formula Hub, and verify full functionality without network access."
        }
      ]
    }
  },
  {
    id: "pawnova",
    title: "Pawnova",
    subtitle: "Master Strategy, Conquer the Board - Elite Chess Academy & Battle Arena",
    category: "games",
    categoryLabel: "Games & Simulations",
    isPwa: true,
    featured: true,
    image: pawnovaIcon,
    liveUrl: "https://rswarke1972-art.github.io/Pawnova/",
    githubUrl: "https://github.com/rswarke1972-art/Pawnova",
    tags: ["PWA", "Chess Academy", "AI Sparring Arena", "Tactical Puzzles", "Opening Trainer", "Blunder Journal", "Tournament Simulator", "Elo Analytics"],
    shortDescription: "A premier, mobile-first chess learning platform and battle arena combining 6 structured academy pathways, adaptive AI sparring bots (800 to 2500+ Elo), tactical puzzle arena, opening repertoire trainers, weakness detection, and PGN game analysis.",
    details: {
      generalIdea: "Pawnova Ultimate synthesizes the tactical rigor of competitive chess with modern gamified pedagogy and a dark luxury aesthetic (obsidian black, soft gold, walnut, and emerald green). Engineered for chess enthusiasts of all levels, Pawnova bridges the gap between passive puzzle solving and active board mastery. Players train across 6 structured Academy learning pathways, solve hundreds of tactical puzzles categorized by motif and Elo difficulty, spar against 5 distinctive AI bot personalities ranging from casual club players to ruthless tactical monsters and endgame specialists, memorize opening repertoires through interactive spaced repetition, and review missed tactical opportunities in an automated Blunder Journal.",
      keyFeatures: [
        "Structured Learning Academy: 6 comprehensive masterclass paths covering Basics & Rules, Opening Fundamentals, Tactical Motifs, Positional Concepts, Middlegame Strategy, and Essential King & Pawn Endgames",
        "Tactical Puzzle Arena: Thematic tactical puzzles spanning Mate in 1/2/3, Forks, Pins, Skewers, Discovered Attacks, and Decoys across Easy (800–1200) to Master (2000+) difficulty tiers with animated board feedback",
        "5 AI Sparring Bot Personalities: Custom-calibrated chess engines including Beginner Bot (800 Elo), Tactical Monster (1400 Elo), Positional Master (1800 Elo), Endgame Beast (2100 Elo), and Grandmaster Ghost (2500+ Elo)",
        "Opening Repertoire Trainer: Interactive repertoire builder with move validation and strategic guidelines for White (London System, Italian Game, Queen's Gambit) and Black (Sicilian Defense, Caro-Kann, French Defense)",
        "Multi-Discipline Elo Progress Tracking: Dynamic Elo progression curves independently tracking Rapid, Blitz, and Puzzle performance ratings with historical growth charts",
        "Automated Blunder Journal: Catalogs missed tactical shots, oversight blunders, and inaccurate moves from practice sessions for focused re-drilling and pattern correction",
        "Tactical Weakness Detection: Diagnostic analytics identifying recurring blind spots (e.g., back-rank vulnerabilities, knight forks, or passive piece coordination) and suggesting targeted exercises",
        "8-Player Tournament Simulator: Single-elimination bracket simulator with real-time match outcome generation, round progression, and championship trophy celebrations",
        "PGN Game Tree Replay & Analysis: Built-in PGN parser and game explorer allowing players to import master games, navigate move branches, and study grandmaster annotations",
        "Daily Tactical Training Plan: Interactive daily checklist with customizable training goals (puzzles, opening lines, endgame drills) paired with a fire-animated streak tracker",
        "Glassmorphic Dark Luxury UI: Premium design aesthetic featuring obsidian glass cards, soft gold accents, smooth drag-and-drop piece physics, and subtle sound synthesis",
        "Offline-First Progressive Web App: Service Worker precaching assets and puzzle databases, complete with header install button and PWA manifest for desktop and mobile home screen installation"
      ],
      working: "Pawnova is engineered with a modular, responsive architecture utilizing chessboard.js for drag-and-drop piece rendering and chess.js for strict algebraic move validation and board state management. The AI sparring arena utilizes an optimized minimax evaluation engine with alpha-beta pruning, positional piece-square tables, and style-weighted evaluation weights tailored to each bot personality. The opening repertoire engine manages branching move decision trees with spaced repetition review intervals. All game records, blunder journals, Elo rating histories, and puzzle progress serialize seamlessly to browser localStorage. An offline-ready Service Worker pre-caches static styles, sound effects, and chessboard piece SVGs for zero-latency gameplay anywhere.",
      highlights: [
        "5 distinct AI bot personalities simulating human-like playstyles, from aggressive tactical attackers to clinical endgame conversion machines",
        "Full PWA offline functionality: solve puzzles, learn opening repertoires, and spar against AI bots completely offline without an internet connection",
        "Automated Blunder Journal turning painful game mistakes into high-retention learning opportunities",
        "Unified rating ecosystem tracking independent Elo ratings for Rapid play, Blitz games, and Tactical Puzzles",
        "Interactive move-by-move opening repertoire builder reinforcing key plans for both White and Black",
        "Luxury dark obsidian and soft gold aesthetic delivering an elevated, distraction-free grandmaster club atmosphere"
      ],
      labs: [
        {
          name: "Tactical Fork & Pin Precision Lab",
          desc: "Engage the Tactical Puzzle Arena filtered by 'Forks & Pins'. Test pattern recognition speed under pressure, using the hint system and move feedback to verify tactical motif identification."
        },
        {
          name: "Bot Sparring Style Divergence Lab",
          desc: "Play consecutive 10-minute games against the 'Tactical Monster' (1400 Elo) and the 'Positional Master' (1800 Elo). Observe how the tactical engine hunts piece sacrifices while the positional engine cramps space and seizes open files."
        },
        {
          name: "Opening Repertoire Spaced Repetition Lab",
          desc: "Practice the Sicilian Defense Najdorf and London System lines in the Opening Trainer. Verify move validation on theoretical mainline moves and review strategic summaries for each pawn structure."
        },
        {
          name: "King & Pawn Endgame Opposition Lab",
          desc: "Load the Endgame Academy module. Practice crucial King and Pawn opposition techniques, key square occupation, and pawn promotion triangulation against the Endgame Beast bot."
        },
        {
          name: "Blunder Journal & Tactical Diagnostic Lab",
          desc: "Intentionally trigger a tactical inaccuracy in a bot sparring game. Navigate to the Blunder Journal, review the flagged mistake, and solve the corrective variation to reinforce pattern memory."
        },
        {
          name: "Tournament Bracket Elimination Lab",
          desc: "Launch the 8-player tournament simulator. Seed competitors across quarters, semis, and finals, evaluating simulated matchup odds and advancing through bracket rounds."
        },
        {
          name: "PGN Game Tree Replay & Analysis Lab",
          desc: "Import a classic grandmaster PGN game into the analysis board. Step forward and backward through move nodes, explore alternative candidate branches, and evaluate key turning points."
        },
        {
          name: "Offline PWA & Service Worker Validation Lab",
          desc: "Open Pawnova, click the header Install button to inspect PWA readiness, disconnect network access, and verify that the full chessboard, puzzle sets, and AI bot sparring engine function smoothly offline."
        }
      ]
    }
  },
  {
    id: "neuropsy",
    title: "NeuroPsy",
    subtitle: "Neuroscience Meets Behavior - Brain Anatomy, Cognition & Clinical Neuropsychology",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: neuropsyIcon,
    liveUrl: "https://rswarke1972-art.github.io/NeuroPsy/",
    githubUrl: "https://github.com/rswarke1972-art/NeuroPsy",
    tags: ["PWA", "Neuroscience", "Neuropsychology", "Brain Anatomy", "Cognitive Science", "Clinical Pathology", "Synaptic Transmission", "Quiz Arena"],
    shortDescription: "A comprehensive, mobile-first neuroscience and neuropsychology educational platform spanning 15 core domains across 3 progressive roadmap levels, interactive diagnostic quizzes, an exhaustive alphabetized glossary, and full offline PWA capabilities.",
    details: {
      generalIdea: "NeuroPsy bridges the gap between biological neuroscience and human behavioral neuropsychology. From action potentials and synaptic vesicles up to complex executive function, clinical neuropathology, and cognitive rehabilitation, NeuroPsy provides an intuitive, curriculum-aligned educational command center. Students, clinicians, psychology majors, and curious minds progress through 3 structured pedagogical roadmap levels, explore 15 in-depth core knowledge domains, test clinical understanding through diagnostic multiple-choice quizzes with detailed rationales, and search an exhaustive, bookmarkable neuroscience glossary with letter-indexed navigation.",
      keyFeatures: [
        "3-Tier Progressive Roadmap: Structured learning pathways organized into Level 1 (Cellular & Neuroanatomy Foundations), Level 2 (Cognitive Systems & Neural Networks), and Level 3 (Clinical Neuropsychology & Neuropathology)",
        "15 Comprehensive Domain Modules: Exhaustive lessons covering Neuroanatomy, Neurons & Action Potentials, Synaptic Neurotransmitters, Sensory Perception, Motor Cortex Control, Hippocampal Memory, Language & Aphasias, Prefrontal Executive Function, Limbic Emotion, Attention & Consciousness, Neuroplasticity, Neurodevelopment, Neurodegenerative Diseases, Traumatic Brain Injury, and Neuroimaging Modalities",
        "Interactive Diagnostic Quiz Arena: Multi-question clinical evaluation tests with real-time feedback, correct answer verification, in-depth rationale explanations, and persistent score tracking",
        "Exhaustive A-Z Neuroscience Glossary: Searchable, letter-indexed dictionary defining hundreds of technical terms (e.g., Long-Term Potentiation, Broca's Area, Saltatory Conduction, Anosognosia, Oligodendrocytes) with personal bookmarking",
        "SVG Circular Progress Tracker: Dynamic animated SVG progress ring tracking overall lesson completion percentages and domain milestones in real time",
        "Full-Text Real-Time Search: Instantaneous search filter querying lesson titles, domain overviews, quiz items, and glossary terms as the user types",
        "Cellular & Synaptic Pathway Maps: Clear breakdowns of resting membrane potentials, ion channels (Na+/K+ ATPase), vesicle exocytosis, and neurotransmitter receptor kinetics (dopaminergic, serotonergic, cholinergic, GABAergic, glutamatergic)",
        "Clinical Pathology Profiles: Detailed diagnostic breakdowns of Alzheimer's disease, Parkinson's, Huntington's chorea, frontotemporal dementia, stroke syndromes, and traumatic brain injury Glasgow coma scales",
        "Mobile Slide-Over Lesson Drawers: Smooth, focus-friendly slide-over reading drawers with keyboard accessibility (Escape to dismiss) and reading progress tracking",
        "Dual Aesthetic Studio: Seamless one-click dark mode and light mode theme switcher with high-contrast typography and accessibility compliance",
        "Zero-Backend LocalStorage Engine: All study milestones, completed topics, bookmarked glossary terms, and quiz records persist securely in browser localStorage without mandatory accounts",
        "Full Offline PWA Architecture: Service Worker precaching static assets, styles, scripts, and brain graphics with home screen installability on iOS, Android, and Desktop"
      ],
      working: "NeuroPsy is engineered with modern modular vanilla ES JavaScript with zero framework overhead, ensuring instantaneous load times and zero network latency. The application dynamically renders learning roadmaps, topic libraries, and glossaries from structured JSON/JS data structures using efficient DOM fragment injection. The interactive quiz module manages state via encapsulated closure trackers, evaluating answer selections and calculating accuracy percentages. User settings, completed topic arrays, and bookmarked glossary terms serialize to browser localStorage via a dedicated storage manager. An offline Service Worker implements a cache-first strategy for static assets and medical illustrations, while an integrated Web App Manifest enables full standalone PWA installation.",
      highlights: [
        "Covers 15 core neuroscience domains spanning molecular biology to clinical neuropsychological rehabilitation",
        "Interactive quiz arena providing instant clinical rationales after every answer attempt",
        "Letter-indexed A-Z glossary with personal bookmarking for high-yield medical and psychological terminology",
        "Dynamic SVG progress ring visualizing real-time curriculum completion without external charting libraries",
        "100% offline functionality powered by custom Service Worker caching and localStorage persistence",
        "Clean, responsive glassmorphic UI with seamless dark and light mode adaptation"
      ],
      labs: [
        {
          name: "Neuroanatomy Hemisphere & Lobe Exploration Lab",
          desc: "Examine the cerebral cortex across Frontal, Parietal, Temporal, and Occipital lobes. Identify primary motor and somatosensory cortices, the Sylvian fissure, and basal ganglia structures."
        },
        {
          name: "Synaptic Transmission & Neurotransmitter Mapping Lab",
          desc: "Trace action potential propagation along myelinated axons. Observe depolarization, calcium influx, synaptic vesicle exocytosis, and receptor binding dynamics for GABA versus Glutamate."
        },
        {
          name: "Memory Consolidation & Hippocampus Pathway Lab",
          desc: "Investigate the trisynaptic circuit of the hippocampus (Dentate Gyrus -> CA3 -> CA1). Explore how Long-Term Potentiation (LTP) and NMDA receptor activation encode short-term into long-term declarative memories."
        },
        {
          name: "Aphasia & Language Localization Diagnostic Lab",
          desc: "Compare clinical symptoms of Broca's expressive aphasia (inferior frontal gyrus lesion) versus Wernicke's receptive aphasia (posterior superior temporal gyrus lesion) and conduction aphasia (arcuate fasciculus damage)."
        },
        {
          name: "Executive Function Prefrontal Cortex Lab",
          desc: "Explore dorsolateral, orbitofrontal, and ventromedial prefrontal cortex contributions to working memory, impulse inhibition, cognitive flexibility, and moral decision-making."
        },
        {
          name: "Neurodegenerative Pathology Comparative Lab",
          desc: "Analyze cellular neuropathology: beta-amyloid plaques and tau neurofibrillary tangles in Alzheimer's versus alpha-synuclein Lewy bodies and substantia nigra dopaminergic loss in Parkinson's."
        },
        {
          name: "Interactive Clinical Diagnostic Quiz Sprint",
          desc: "Engage the 15-question clinical evaluation quiz. Answer case-study questions, review detailed physiological rationales for incorrect choices, and monitor accuracy percentage updates on the dashboard."
        },
        {
          name: "Offline PWA & Glossary Cache Validation Lab",
          desc: "Launch NeuroPsy, click the header Install button to trigger PWA installation, bookmark key glossary terms, disconnect from network, and verify that the full topic library and quiz sessions operate offline."
        }
      ]
    }
  },
  {
    id: "botaniq",
    title: "Botaniq",
    subtitle: "Interactive Botany Encyclopedia, Bonsai Academy & Greenhouse Care Ecosystem",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: false,
    image: botaniqIcon,
    liveUrl: "https://rswarke1972-art.github.io/Botaniq/",
    githubUrl: "https://github.com/rswarke1972-art/Botaniq",
    tags: ["Botany", "Plant Care", "Encyclopedia", "Bonsai Art", "Science Lab", "PWA", "Plant Doctor", "Web Audio"],
    shortDescription: "A serene, scientific botanical sanctuary and comprehensive greenhouse companion featuring deep species taxonomy, bonsai sculpting academy, algorithmic plant symptom diagnosis, biomes exploration, photosynthesis & stomata science simulations, and procedural ambient soundscapes.",
    details: {
      generalIdea: "Botaniq is an immersive botanical exploration platform, plant pathology diagnostic clinic, and living greenhouse companion crafted for horticulturists, botanists, and indoor gardeners. It seamlessly bridges rigorous botanical science with the mindful, meditative art of plant cultivation. From an exhaustive species encyclopedia cataloging lighting tolerances, humidity bands, and propagation mechanisms to an interactive Bonsai Academy detailing wire training and seasonal pruning, Botaniq empowers users to understand plant physiology at cellular and ecosystem levels. Equipped with an algorithmic Plant Doctor for triage, interactive laboratory simulations demonstrating transpiration and photosynthesis, a personalized care schedule with misting/fertilizing timers, and a procedural Web Audio ambient sound synthesizer, Botaniq transforms plant care into an enlightening, restorative daily ritual.",
      keyFeatures: [
        "Botanical Taxonomy & Species Encyclopedia: Deep compendium detailing binomial nomenclature, family classifications, light lumens, moisture bands, pet toxicity, and natural biomes.",
        "Bonsai Academy & Sculpting Mechanics: Comprehensive styling guides covering Chokkan (formal upright), Moyogi, Kengai (cascade), wiring tension, root pruning cadences, and seasonal potting substrates.",
        "Plant Doctor Algorithmic Diagnostic Engine: Interactive symptom triage matrix analyzing chlorosis, necrosis, leaf droop, and root rot to deliver immediate organic remedies and care corrections.",
        "Interactive Botanical Science Simulations: Real-time interactive laboratory models demonstrating photosynthesis photon/CO2 saturation curves, stomatal transpiration dynamics, xylem capillary action, and soil pH nutrient availability.",
        "Dynamic Biomes & Global Eco-Zones: Multi-biome geographic exploration covering tropical rainforests, arid succulent deserts, temperate woodlands, and alpine tundra plant adaptations.",
        "Greenhouse Care Planner & Seasonal Schedules: Automated scheduling engine calculating watering frequency, seasonal winter dormancy pauses, humidity misting cadences, and fertilizer N-P-K ratios.",
        "Growth Milestones & Plant Journaling: Visual milestone tracking system recording height metrics, leaf count additions, repotting intervals, and historical vitality notes.",
        "Procedural Web Audio Ambient Soundscapes: Built-in nature synthesizer generating relaxing zen garden chimes, rain on foliage, babbling brooks, and gentle forest wind for mindful plant care sessions.",
        "Micropropagation & Cutting Guide: Step-by-step horticultural propagation tutorials spanning water rooting, stem cuttings, air layering, and division protocols.",
        "Medicinal Ethnobotany & Herbarium: Historical compendium exploring therapeutic compounds, alkaloid properties, and traditional ethnobotanical usages across civilizations.",
        "Adaptive Seasonal Weather Synchronization: Real-time seasonal mode toggle (Spring, Summer, Autumn, Winter, Monsoon) adapting ambient palette, care warnings, and growth predictions.",
        "Progressive Web App (PWA) Offline Operation: Fully installable desktop and mobile PWA with Service Worker asset caching, custom manifest icons, and offline botanical access."
      ],
      working: "Botaniq is constructed with a high-performance modular JavaScript architecture organized into specialized domains (plants.js, encyclopedia.js, learning.js, bonsai.js, diagnosis.js, care.js, journal.js, ecosystems.js, and science.js). State management synchronizes garden inventory, journal entries, and customized care schedules directly into localStorage with JSON serialization. The Plant Doctor runs a deterministic diagnostic decision-tree algorithm scoring observed symptoms against pathogenic, cultural, and nutritional deficiencies. The botanical science engine uses canvas-driven mathematical modeling for transpiration flux and photosynthetic light reactions. Web Audio API synthesizes continuous procedural soundscapes with biquad filter nodes and gain oscillators, while a PWA Service Worker caches core encyclopedic assets for resilient offline consultation in greenhouses or outdoor gardens.",
      highlights: "Harmoniously fuses rigorous academic botanical science with restorative nature-inspired aesthetics, procedural audio synthesis, and practical horticultural care utilities.",
      labs: [
        {
          name: "Species Taxonomy & Cultivation Filter Lab",
          desc: "Navigate to the Botanical Encyclopedia, query diverse species (e.g., Monstera deliciosa, Ficus elastica, Sansevieria), filter by sunlight exposure, humidity tolerance, and pet toxicity, and verify detailed taxonomy profiles."
        },
        {
          name: "Bonsai Academy Styling & Wiring Mechanics Lab",
          desc: "Access the Bonsai Academy, explore Chokkan, Moyogi, and Kengai sculpting styles, review step-by-step wiring tension guides and seasonal root pruning timelines, and verify structural advice."
        },
        {
          name: "Plant Doctor Diagnostic Triage Lab",
          desc: "Launch the Plant Doctor symptom checker, simulate chlorosis (leaf yellowing with green veins) and leaf tip burn, execute diagnostic triage, and confirm accurate root-cause identification (magnesium deficiency vs overwatering) with recommended remedies."
        },
        {
          name: "Interactive Photosynthesis & Transpiration Science Lab",
          desc: "Enter the Science Lab, manipulate photon intensity and carbon dioxide sliders in the Photosynthesis simulator, adjust humidity and temperature in the Stomatal Transpiration module, and observe real-time rate curve animations."
        },
        {
          name: "Ecosystem Biomes & Global Flora Exploration Lab",
          desc: "Switch to the Biomes view, traverse tropical rainforest canopy layers, arid succulent desert adaptations, and alpine tundra flora, verifying regional climate metrics and evolutionary traits."
        },
        {
          name: "Care Planner & Seasonal Synchronization Lab",
          desc: "Configure an indoor greenhouse collection in the Care Planner, trigger the seasonal weather mode toggle (Summer to Winter/Monsoon), and verify that watering alerts and dormancy recommendations automatically adjust."
        },
        {
          name: "Plant Journaling & Milestone Tracking Lab",
          desc: "Log a new botanical specimen into the Growth Journal, record initial height, potting mix formulation, and watering schedule, refresh the app, and verify persistent localStorage state retention."
        },
        {
          name: "PWA Installation & Offline Ambient Audio Lab",
          desc: "Test the PWA install button in the top navigation header to trigger the application installation flow, activate the procedural Zen Garden ambient audio synthesizer, disconnect network, and verify seamless offline functionality."
        }
      ]
    }
  },
  {
    id: "mindhaven",
    title: "MindHaven",
    subtitle: "Comprehensive Mental Wellness Sanctuary, CBT Thought Clinic & Crisis Safety Ecosystem",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: false,
    image: mindhavenIcon,
    liveUrl: "https://rswarke1972-art.github.io/MindHaven/",
    githubUrl: "https://github.com/rswarke1972-art/MindHaven",
    tags: ["Mental Health", "Mindfulness", "Breathing Exercises", "CBT Clinic", "PWA", "Crisis Support", "Mood Analytics", "Gemini AI"],
    shortDescription: "An evidence-based mental wellness sanctuary and emotional refuge providing guided resonant breathing, CBT cognitive distortion reframing, clinical depression/anxiety screenings, personalized safety planning, trigger analytics, sleep hygiene tracking, and an empathetic AI companion.",
    details: {
      generalIdea: "MindHaven is an evidence-based digital mental wellness sanctuary, clinical psychometrics suite, and compassionate emotional crisis refuge. Architected to provide immediate nervous-system regulation during episodes of acute distress, anxiety, panic, or low energy, MindHaven delivers clinically backed therapeutic modalities without friction. It bridges foundational somatic tools such as resonant Box and 4-7-8 breathing pacers and 5-4-3-2-1 sensory grounding with cognitive psychotherapies including Cognitive Behavioral Therapy (CBT) distortion reframing, standardized PHQ-9/GAD-7 psychometric assessments, personalized Stanley-Brown safety planning, and longitudinal mood pattern analytics. Integrated with a local-first privacy architecture and an optional Google Gemini empathetic conversational companion, MindHaven ensures individuals have access to a confidential, compassionate emotional support anchor 24/7, completely operational offline.",
      keyFeatures: [
        "Multi-Paced Respiration Pacer: Visually guided and haptically supported breathing engine featuring Box Breathing (4-4-4-4), 4-7-8 Relaxing Breath, Paced Respiration, and custom cycle timing.",
        "CBT Thought Reframing Clinic: Interactive cognitive distortion identification worksheet (catastrophizing, black-and-white thinking, emotional reasoning, mind-reading) with structured alternative thought synthesis.",
        "Clinical Psychometric Screenings: Standardized self-assessments including PHQ-9 (depression severity), GAD-7 (generalized anxiety disorder), and Perceived Stress Scale with longitudinal score tracking.",
        "Stanley-Brown Personalized Safety Plan: Clinical emergency crisis plan detailing personal warning signs, internal coping mechanisms, distraction social circles, emergency contacts, and lethal means safety.",
        "5-4-3-2-1 Sensory Grounding & Calm Space: Multi-sensory somatic grounding walkthrough paired with calming visual fractals, mindful reflection prompts, and ambient audio soundscapes.",
        "Comprehensive Crisis Support Directory: Curated global and national emergency lifeline index (988 Lifeline, Crisis Text Line, Trevor Project, Befrienders Worldwide) with one-touch calling.",
        "Longitudinal Mood & Trigger Analytics: Daily emotional check-in calendar correlating mood ratings against sleep quality, physical activity, social connection, and identified environmental triggers.",
        "Compassionate AI Emotional Companion: Integrated privacy-first AI companion powered by Google Gemini, offering empathetic active listening, de-escalation support, and psychoeducational guidance.",
        "Targeted Wellness Roadmaps & Habit Streaks: Structured step-by-step guides for overcoming burnout, conquering panic attacks, conquering insomnia, and building emotional resilience.",
        "Guided Mental Wellness Journaling: Prompted reflective journaling featuring gratitude prompts, emotional release free-writing, and morning/evening intentional check-ins.",
        "Sleep Hygiene & Wind-Down Suite: Evening relaxation protocols, circadian rhythm habits checklist, insomnia thought-dumping, and sleep-to-mood correlation tracking.",
        "Local-First Privacy & Offline PWA: Zero telemetry, client-side encrypted localStorage persistence, selective data export/import, and complete offline PWA service worker caching."
      ],
      working: "MindHaven is engineered as an enterprise-grade client-side application featuring decoupled modular controllers (app.js, dashboard.js, breathing.js, calmspace.js, cbt.js, assessment.js, crisis.js, safetyplan.js, insights.js, journal.js, sleep.js, triggers.js, roadmaps.js, and pwa-install.js). The breathing engine uses requestAnimationFrame and CSS SVG circle stroke-dashoffset interpolation for fluid respiratory pacing. Clinical assessments implement standardized diagnostic scoring rubrics that dynamically plot severity bands and historical trend charts. Thought reframing data and emotional safety plans are persisted securely in local browser storage without server-side telemetry. The AI companion interfaces with the Gemini Pro API via client-provided keys with strict safety filters and prompt engineering tailored for supportive psychological first aid. A Service Worker caches all assets, icons, and audio for offline availability.",
      highlights: "Empathetic, local-first therapeutic companion providing evidence-based somatic regulation, clinical assessments, and suicide prevention safety planning with zero telemetry.",
      labs: [
        {
          name: "Somatic Breathing Pacer & Cycle Tuning Lab",
          desc: "Select Box Breathing (4-4-4-4) and 4-7-8 Relaxing Breath, test custom respiratory cycle sliders, observe smooth SVG pacing circle contractions and expansions, and verify audio-visual inhalation/hold cues."
        },
        {
          name: "5-4-3-2-1 Sensory Grounding & Calm Space Lab",
          desc: "Enter Calm Space, initiate the step-by-step 5-4-3-2-1 sensory grounding protocol (sight, touch, sound, smell, taste), toggle ambient nature soundscapes, and confirm cognitive re-centering."
        },
        {
          name: "CBT Cognitive Distortion Reframing Lab",
          desc: "Launch the CBT Thought Clinic, log an automatic negative thought, classify distortions (e.g., Catastrophizing and Emotional Reasoning), craft an evidence-based balanced counter-thought, and verify worksheet persistence."
        },
        {
          name: "Clinical Psychometric Assessment (PHQ-9 & GAD-7) Lab",
          desc: "Complete the 9-item PHQ-9 depression screening and 7-item GAD-7 anxiety inventory, review automated scoring calculations, risk stratification, and verify historical progress timeline plotting."
        },
        {
          name: "Personalized Crisis Safety Plan & Distress Triage Lab",
          desc: "Populate the Stanley-Brown Safety Plan with custom triggers, warning signs, and coping actions; navigate to Crisis Support to test emergency lifeline direct-dial triggers and de-escalation resources."
        },
        {
          name: "Mood Calendar, Sleep & Trigger Correlation Lab",
          desc: "Submit daily emotional check-ins across multiple days with varying mood, sleep duration, and identified stressors; inspect the Insights tab to verify multivariate correlation charts and pattern detection."
        },
        {
          name: "AI Wellness Companion (Gemini) Integration Lab",
          desc: "Navigate to Haven Companion chat, configure privacy context preferences, simulate a supportive de-escalation conversation, and verify conversation export and localized transcript clearance."
        },
        {
          name: "PWA Offline Resilience & Privacy Data Export Lab",
          desc: "Test the PWA install flow via the in-app Install button, disconnect network connectivity to verify complete offline access across all clinical modules, and execute a selective JSON data export."
        }
      ]
    }
  },
  {
    id: "golden-baghdad",
    title: "Golden Baghdad",
    subtitle: "Abbasid Golden Age Interactive Historical Chronicle & Statecraft Simulation",
    category: "novels",
    categoryLabel: "Interactive Visual Novels",
    isPwa: true,
    featured: false,
    image: goldenbaghdadIcon,
    liveUrl: "https://rswarke1972-art.github.io/GoldenBaghdad/",
    githubUrl: "https://github.com/rswarke1972-art/GoldenBaghdad",
    tags: ["Historical Novel", "Abbasid Era", "House of Wisdom", "Statecraft", "Visual Novel", "PWA", "Interactive Fiction"],
    shortDescription: "An epic, choice-driven historical chronicle and governance simulation following Harun al-Rashid through 10 rich chapters of scientific patronage, diplomacy with Charlemagne, House of Wisdom breakthroughs, and factional statecraft.",
    details: {
      generalIdea: "Golden Baghdad is an epic historical visual novel and statecraft role-playing simulation set during the zenith of the Islamic Golden Age. Assuming the mantle of the historical Caliph Harun al-Rashid, players navigate the cultural, intellectual, and political currents of the medieval world from the Round City of Baghdad. Spanning 10 richly written narrative chapters, the chronicle challenges players with consequential dilemmas balancing military preparedness, scientific patronage at the Bayt al-Hikma (House of Wisdom), Silk Road trade alliances, and high-stakes diplomacy with Charlemagne and the Byzantine Empire. With dynamic factional relationships, multi-metric governance tracking, a searchable historical encyclopedia, an interactive empire map, and atmospheric period soundscapes, Golden Baghdad brings one of world civilization's greatest renaissance eras to vivid interactive life.",
      keyFeatures: [
        "10-Chapter Epic Narrative: Complete historical journey spanning Harun al-Rashid's youth, ascension to the Caliphate, the Barmakid viziers, cultural flowering, and succession legacy.",
        "Multi-Branching Consequence Engine: Dynamic decision architecture where choices permanently influence imperial stability, military prowess, treasury wealth, and philosophical wisdom.",
        "Five-Faction Political Dynamics: Sophisticated court standing system tracking relationship levels with Scholars, Viziers, Military Commanders, Silk Road Merchants, and Citizens.",
        "Bayt al-Hikma (House of Wisdom) Patronage: Fund groundbreaking translations and research by legendary polymaths including Al-Khwarizmi, Jabir ibn Hayyan, and Al-Kindi.",
        "Diplomatic Statecraft & Global Treaties: Negotiate historic diplomatic exchanges with Charlemagne (including the legendary water clock and elephant) and Byzantine Empress Irene.",
        "Searchable Historical Encyclopedia: Curated compendium detailing key historical figures, medieval metropolises, scientific advancements, theological debates, and architectural wonders.",
        "Interactive Abbasid Empire Map: Geographic atlas exploring major medieval cultural hubs including Baghdad, Damascus, Cairo, Cordoba, Rayy, Samarkand, and Aachen.",
        "Chronological Era Timeline: Interactive historical chronicle tracking milestones from the Abbasid Revolution in 750 CE through the golden age peak.",
        "Historic Milestones & Achievements: Comprehensive unlockable achievement system rewarding diplomatic triumphs, intellectual patronage, and strategic milestones.",
        "Procedural Middle Eastern Soundscapes: Atmospheric audio synthesis evoking bustling bazaar soundscapes, royal court lutes, and tranquil House of Wisdom halls.",
        "Customizable Reading Experience: Rich parchment dark mode, atmospheric typography featuring Cinzel, Cormorant Garamond, and Amiri Arabic font pairings.",
        "Progressive Web App (PWA) Offline Architecture: Complete offline access with localized state persistence, responsive touch mechanics, and manifest installation."
      ],
      working: "Golden Baghdad is engineered with a modular client-side architecture dividing game systems across dedicated modules (chapters.js, story.js, choices.js, relationships.js, progress.js, encyclopedia.js, map.js, timeline.js, sound.js, and achievements.js). Player stats (Knowledge, Wisdom, Military, Diplomacy, Treasury, and Stability) and faction standings are managed through a unified state controller persisted to localStorage with automatic checkpointing. The encyclopedia and timeline query indexed JSON records with real-time substring filtering and modal views. The audio engine orchestrates localized ambient sound effects and musical motifs using the Web Audio API and HTML5 Audio. Manifest and responsive CSS styling ensure a seamless visual novel experience across desktop displays and mobile touch devices.",
      highlights: "Seamlessly synthesizes authentic medieval historiography with interactive branching fiction, deep factional statecraft, and rich Middle Eastern aesthetic immersion.",
      labs: [
        {
          name: "Prologue Statecraft & Formative Choice Lab",
          desc: "Launch Chapter 1 ('The Young Prince'), evaluate the three formative paths (Train with Generals, Study with Scholars, or Observe Court Politics), and verify that imperial stats and faction relationships update accurately in the HUD."
        },
        {
          name: "House of Wisdom Scientific Patronage Lab",
          desc: "Progress to the Bayt al-Hikma patronage scene, commission mathematical translations with Al-Khwarizmi, and verify that Scholar faction trust increases while advancing the intellectual progress tracker."
        },
        {
          name: "Diplomatic Envoy & Charlemagne Treaty Lab",
          desc: "Navigate to the Western diplomacy scenario, dispatch the historic diplomatic delegation with the brass water clock and white elephant Abul-Abbas to Aachen, and verify diplomatic stat rewards and historical context modals."
        },
        {
          name: "Faction Balance & Court Intrigue Stress Lab",
          desc: "Simulate competing court petitions from Viziers and Military generals, test contrasting choices, and confirm that faction standing fluctuations and court tension thresholds trigger correctly."
        },
        {
          name: "Searchable Abbasid Encyclopedia Lab",
          desc: "Open the Imperial Encyclopedia, query entries across categories (People, Places, Science, Culture), test real-time search filtering for 'Al-Khwarizmi' and 'Astrolabe', and verify historical timeline popups."
        },
        {
          name: "Interactive Empire Map & Trade Hub Lab",
          desc: "Open the Empire Map, inspect clickable geographic nodes (Round City of Baghdad, Damascus, Cairo, Cordoba, Samarkand), and verify regional population data, trade goods, and historical notes."
        },
        {
          name: "Era Timeline & Chronological Milestone Lab",
          desc: "Access the historical timeline view, traverse milestones from the 762 CE founding of Baghdad through 809 CE, and verify sequential event descriptions and chronological alignment."
        },
        {
          name: "PWA Manifest & Localized Checkpoint Lab",
          desc: "Verify PWA manifest recognition and app icon assets, initiate chapter playthrough, reload the browser tab, and confirm that chapter narrative progress, stats, and unlocked achievements persist seamlessly via localStorage."
        }
      ]
    }
  },
  {
    id: "mema",
    title: "MEMA",
    subtitle: "Regency Romance Interactive Visual Novel Inspired by Jane Austen",
    category: "novels",
    categoryLabel: "Interactive Visual Novels",
    isPwa: true,
    featured: false,
    image: memaIcon,
    liveUrl: "https://rswarke1972-art.github.io/Mema/",
    githubUrl: "https://github.com/rswarke1972-art/Mema",
    tags: ["Visual Novel", "Regency Romance", "Jane Austen", "Choice-Driven", "PWA", "Multiple Endings", "Story Game"],
    shortDescription: "A refined Regency romance visual novel inspired by Jane Austen's Emma. Shape Emma Woodvale's destiny across branching storylines, dynamic societal standing, romantic prospects, unlockable CG artwork, and 8 unique endings.",
    details: {
      generalIdea: "MEMA is an elegant, choice-driven Regency romance visual novel and social simulation inspired by Jane Austen's timeless masterpiece Emma. Assuming the role of the clever and self-assured Miss Emma Woodvale of Hartfield, players navigate the delicate nuances, ballrooms, and salon intrigues of Highbury society. Every dialogue choice, subtle social glance, and matchmaking intervention reverberates through dynamic character relationship meters and core personal virtues: Reputation, Wit, Empathy, and Independence. Players can pursue true romance with the steadfast Theodore (Mr. Knightley), flirt with the charming yet mercurial Lucien (Frank Churchill), champion their dear friend Clara, or forge an autonomous path as an independent mistress of Hartfield. Featuring 8 distinct narrative resolutions, unlockable high-resolution CG gallery artwork, an atmospheric Regency music parlor, multi-slot save architecture, and an interactive route flowchart, MEMA captures the wit, humor, and emotional depth of classic 19th-century English literature.",
      keyFeatures: [
        "Branching Regency Storyline: Multi-chapter interactive narrative with meaningful choices shaping social reputation, character affections, and romantic destinies.",
        "8 Distinct Narrative Endings: Discover eight unique story climaxes ranging from True Love and Benevolent Matchmaker to Sovereign of the Salon and Scandalous Exile.",
        "Dynamic Societal Virtue Metrics: Real-time stat tracking for Reputation, Wit, Empathy, and Independence balancing social standing with genuine moral growth.",
        "Four-Way Relationship System: Detailed affinity trackers for Theodore, Lucien, Clara, and high society gossips with nuanced reaction trees.",
        "Illustrated CG Artwork Gallery: Unlockable full-screen commemorative illustrations celebrating pivotal narrative moments (first ballroom dance, garden confession, grand finale).",
        "Classical Period Music Room: Integrated Regency soundscape player with harpsichord melodies, ballroom waltzes, and gentle rain acoustics.",
        "Interactive Route Flowchart: Visual decision tree mapping visited scenes, alternate branches, lockouts, and available story paths in real time.",
        "Comprehensive Book of Choices: In-game journal chronicling every pivotal decision made, relationship fluctuations, and historical social standings.",
        "Multi-Slot Save & Autosave System: Robust state manager with three dedicated manual save slots, persistent checkpoint autosave, and scene replay options.",
        "Customizable Reading Experience: Adjustable typewriter text speed, autoplay pacing, dialogue transcript history, and Regency parchment aesthetics.",
        "Unlockable Regency Achievements: Achievement trophy suite rewarding social discretion, witty rejoinders, romantic reconciliations, and completionist runs.",
        "Progressive Web App (PWA) Offline Support: Full PWA support with Service Worker offline caching, responsive mobile touch mechanics, and install prompts."
      ],
      working: "MEMA is architected with a modern modular JavaScript engine decoupling core systems across specialized modules (app.js, chapters.js, dialogue.js, choices.js, relationships.js, progress.js, save.js, endings.js, music.js, achievements.js, and mobile.js). Story nodes and branching dialogues are parsed from structured JSON trees into an in-memory lookup graph. Player choices execute mathematical mutations on relationship and virtue vectors, which are evaluated at narrative thresholds to route scenes and determine one of eight final scorecard resolutions. Game state, CG unlocks, and audio preferences are serialized into localStorage. The UI incorporates responsive CSS layout with typography pairing Playfair Display and Inter, while a Service Worker caches visual novel scenes, assets, and audio for seamless offline play.",
      highlights: "Delightfully captures the wit, irony, and romantic warmth of Jane Austen's world through branching social simulation, nuanced character development, and period-authentic audiovisual polish.",
      labs: [
        {
          name: "Opening Scene & Formative Wit Lab",
          desc: "Launch Chapter 1 at Hartfield, test dialogue responses between playful wit and gentle empathy, and verify that the stats bar updates Reputation and Wit values in real time."
        },
        {
          name: "Theodore vs Lucien Romantic Affinity Lab",
          desc: "Progress to the Rosemere ballroom and garden encounters, compare contrasting dialogue options with Theodore and Lucien, and confirm that character relationship meters calibrate accurately in the Journal."
        },
        {
          name: "Matchmaking Dilemma & Clara Alliance Lab",
          desc: "Navigate Clara's courtship scenario, choose between encouraging Sir Edwin or prioritizing Clara's true happiness, and verify narrative branching into alternate scene paths."
        },
        {
          name: "Interactive Route Flowchart Verification Lab",
          desc: "Open the Journal and inspect the visual route flowchart, observe highlighted path progress across completed chapters, and test branching node navigation."
        },
        {
          name: "CG Illustration Gallery Unlock Lab",
          desc: "Trigger the first ballroom dance scene, verify that the corresponding commemorative illustration unlocks in the CG Gallery, and inspect full-screen modal viewing."
        },
        {
          name: "Multi-Slot Save & State Restoration Lab",
          desc: "Save the current playthrough to Slot 1, make divergent choices altering social stats, save to Slot 2, reload Slot 1, and verify that all narrative flags, inventory memories, and relationship values restore faithfully."
        },
        {
          name: "Music Room Acoustics & Audio Engine Lab",
          desc: "Access the Music Room, test track playback across ballroom waltzes and tranquil garden themes, adjust volume sliders, and verify continuous ambient audio transitions during gameplay."
        },
        {
          name: "Scorecard Resolution & 8-Ending Matrix Lab",
          desc: "Simulate story conclusion thresholds, test conditions triggering 'The Master of Hartfield' versus 'Mistress of Hartfield' and 'A Flighty London Fancy', and verify the ending scorecard presentation."
        }
      ]
    }
  },
  {
    id: "dateyumei",
    title: "DateYumei",
    subtitle: "Personalized Interactive Anime Romance Visual Novel & Dating Simulator",
    category: "novels",
    categoryLabel: "Interactive Visual Novels",
    isPwa: true,
    featured: false,
    image: dateyumeiIcon,
    liveUrl: "https://rswarke1972-art.github.io/DateYumei/",
    githubUrl: "https://github.com/rswarke1972-art/DateYumei",
    tags: ["Visual Novel", "Romance Narrative", "Dating Simulator", "Anime", "Interactive Fiction", "PWA", "Personalized Story"],
    shortDescription: "An emotionally resonant, choice-driven anime dating simulator and romance visual novel. Experience a heartfelt journey of unexpected connections with Yumei through personalized name integration, dynamic affection tracking, branching chapter dates, and multiple endings.",
    details: {
      generalIdea: "DateYumei is an emotionally resonant, choice-driven anime dating simulation and romance visual novel centered on the delicate beauty of unexpected connections. Players embark on a personal journey alongside Yumei, a charming and thoughtful heroine navigating high school life, quiet dreams, and tender feelings. Powered by a dynamic name-injection engine, players personalize their identity to experience natural, deeply immersive conversations. Every dialogue response, thoughtful compliment, and shared date activity dynamically alters Yumei's Affection Heart Meter, triggering animated facial expressions, blushing sprite states, and branching narrative paths. Spanning four cinematic chapters from a serendipitous meeting under cherry blossoms to late-night stargazing confessions and emotional outro climaxes, DateYumei blends nostalgic visual novel aesthetics with modern interactive storytelling.",
      keyFeatures: [
        "Personalized Identity Engine: Dynamic player username integration weaving custom names naturally throughout all voiced narrative lines and dialogue branches.",
        "Dynamic Affection Heart System: Choice-reactive relationship meter calculating romantic affinity points and unlocking intimate scene variations.",
        "Four-Chapter Branching Storyline: Rich multi-scene narrative traversing the cherry blossom encounter, cafe date, festival evening, and heartfelt outro.",
        "Reactive Character Sprite Expressions: Expressive anime character portrait states dynamically shifting between smiling, blushing, surprised, and emotional reflection.",
        "Typewriter Dialogue Engine: Smooth letter-by-letter text rendering with customizable typing speeds, instant click-to-complete, and sound cues.",
        "Autoplay & Fast Skip Modes: Hands-free cinematic reading mode with text-length-aware pacing and high-speed skip controls for alternate route exploration.",
        "Dialogue Backlog History Drawer: Comprehensive conversation transcript log enabling players to review previous exchanges and character reflections.",
        "Curated Chapter Soundtrack: Atmospheric lo-fi and emotive piano background music tracks synchronized with pivotal narrative beats and tender moments.",
        "Multiple Emotional Climax Endings: Branching outro resolutions including the coveted Best Ending 'Two Hearts Entwined', Good Ending, and Bitter-Sweet endings.",
        "Cinematic Visual Novel Interface: Immersive borderless presentation with twilight gradients, golden starlight motifs, and elegant Lora serif typography.",
        "State Checkpoint Persistence: Automatic progress saving to localStorage preserving active chapter, scene index, affection totals, and visited routes.",
        "Progressive Web App (PWA) Offline Support: Full PWA support with Service Worker asset caching, standalone display mode, and responsive mobile layout."
      ],
      working: "DateYumei is powered by a custom client-side visual novel engine (script.js) that interprets structured scene trees from an extensive JSON narrative database (story.json). As the player interacts with choices, the engine performs mathematical mutations on the affection counter and updates the heart meter in the HUD. Character portrait sprites dynamically update source paths to reflect conversational sentiment. The text rendering engine uses asynchronous character pacing with requestAnimationFrame timeouts to deliver smooth typewriter effects. Scene checkpoints, affection scores, and username personalization are serialized into namespaced localStorage keys (yumei_game_currentChapter, yumei_game_currentScene, yumei_game_hearts). Audio management coordinates BGM transitions and choice sound effects using HTML5 Audio APIs, while a Service Worker caches narrative scripts and media assets for offline play.",
      highlights: "Seamlessly blends emotional visual novel storytelling with dynamic character affection mechanics, personalized dialogue integration, and nostalgic anime aesthetics.",
      labs: [
        {
          name: "Player Personalization & Username Injection Lab",
          desc: "Launch DateYumei from the title screen, enter a custom username, initiate Chapter 1, and verify that Yumei dynamically addresses the player with the custom name in dialogue boxes."
        },
        {
          name: "Affection Heart Meter Calibration Lab",
          desc: "Encounter dialogue choices in Chapter 1, select a deeply empathetic compliment, observe the heart gain animation, and verify that the affection score increments in the persistent state."
        },
        {
          name: "Character Sprite Emotion Transition Lab",
          desc: "Navigate through playful banter and vulnerable conversation scenes, verifying that Yumei's character sprite dynamically transitions between neutral, smiling, and blushing emotional states."
        },
        {
          name: "Typewriter Playback, Autoplay & Skip Mode Lab",
          desc: "Test the typewriter text pacing controls, activate Autoplay to confirm automatic scene advancement after text finishes, and toggle Skip mode to rapidly traverse previously read lines."
        },
        {
          name: "Dialogue Backlog & History Review Lab",
          desc: "Open the dialogue history backlog during a conversation, scroll through earlier dialogue lines, and confirm accurate speaker names and text formatting retention."
        },
        {
          name: "Chapter BGM Transition & Audio Synchronization Lab",
          desc: "Progress from Chapter 1 to Chapter 2, verify that background music smoothly cross-fades into the daytime date theme, and test sound effect triggers on button clicks."
        },
        {
          name: "Branching Outro & Multiple Ending Matrix Lab",
          desc: "Reach Chapter 4 with varying affection levels (above threshold for Best Ending vs standard), trigger the finale scene, and verify divergent outro text and ending screens."
        },
        {
          name: "PWA Offline Readiness & State Restoration Lab",
          desc: "Inspect PWA manifest and service worker registration, progress into Chapter 2, reload the browser tab, and verify that the story resumes at the exact scene with saved affection scores intact."
        }
      ]
    }
  },
  {
    id: "linguawar",
    title: "LinguaWar",
    subtitle: "Real-Time Multiplayer Linguistic Battle Arena & Competitive Gamified Learning",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: false,
    image: linguawarIcon,
    liveUrl: "https://rswarke1972-art.github.io/LinguaWar/",
    githubUrl: "https://github.com/rswarke1972-art/LinguaWar",
    tags: ["Language Battle", "Multiplayer Game", "Gamified Learning", "Speed Translation", "PWA", "Firebase", "Competitive Arena"],
    shortDescription: "A high-octane competitive multiplayer language learning arena. Duel worldwide rivals in real-time Vocabulary Duels, Translation Races, Cultural Trivia, and high-stakes Survival Mode across Spanish, Japanese, Persian, Hindi, and English.",
    details: {
      generalIdea: "LinguaWar transforms language acquisition into an adrenaline-fueled competitive arena. Drawing inspiration from fighting games and rapid-fire esports, LinguaWar challenges polyglots, students, and linguistics enthusiasts to test their reflexes, translation speed, vocabulary retention, and cultural mastery in real-time matches against live rivals or intelligent sparring bots. Players choose their warrior moniker and favorite language from Spanish, Japanese, Persian, Hindi, or English, battling across four distinct game modes: 1v1 Vocabulary Duels, high-speed Translation Races, Cultural Trivia quizzes, and sudden-death Survival Mode. Powered by a Firebase Firestore real-time synchronization backend with simulated bot fallbacks, dynamic XP leveling from Bronze to Language Emperor, global leaderboards, and an obsidian cyber-gladiator aesthetic, LinguaWar makes daily language practice electrifying, social, and habit-forming.",
      keyFeatures: [
        "Four Competitive Battle Modes: Face rivals in 1v1 Vocabulary Duels, speed-typing Translation Races, Cultural Trivia showdowns, and 10-round sudden-death Survival Mode.",
        "Multi-Lingual Arena: Full competitive curriculum across five global languages: Spanish, Japanese (Kanji & Kana), Persian (Farsi), Hindi (Devanagari), and English.",
        "Real-Time Multiplayer & Bot Fallback: Seamless Firebase Firestore room matchmaking pairing human combatants instantly, with smart AI bots ensuring zero queue latency.",
        "Comprehensive Questions Database: Over 10,000 carefully curated challenges covering synonyms, rapid translations, grammatical structures, and regional idioms.",
        "Warrior Ranking & XP System: Progressive rank ladder rewarding victories with experience points advancing players from Novice through Diamond to Language Emperor.",
        "Global Real-Time Leaderboard: Live competitive standings indexing warrior ranks, win streaks, match victories, and accumulated combat XP.",
        "Live Match Timer & Combat Scoreboards: High-pressure 15-second per-round countdown timers, real-time HP/score bars, and dramatic round victory animations.",
        "Warrior Profile & Combat Analytics: Personalized profile tracking total matches, win-loss ratio, favorite language mastery, and recent battle history.",
        "Fuzzy Translation Matching Engine: Intelligent string normalization and distance algorithms tolerating minor punctuation differences while strictly enforcing linguistic accuracy.",
        "Interactive How-to-Play Rules Codex: Comprehensive in-game guide detailing combat scoring formulas, survival elimination mechanics, and streak multipliers.",
        "Cyber-Gladiator Visual Design: Immersive dark obsidian aesthetic with glowing electric blue and gold arena styling, glassmorphism cards, and fluid transitions.",
        "Progressive Web App (PWA) Offline Ready: Full PWA support with standalone window mode, touch-optimized mobile battle controls, and service worker caching."
      ],
      working: "LinguaWar is built on an event-driven modular JavaScript architecture (app.js, game.js, matchmaking.js, questions.js, auth.js, ui.js, leaderboard.js, and mobile.js). Real-time match states, round synchronization, and player readiness are orchestrated through Firebase Firestore snapshot listeners (onSnapshot) with optimistic client updates. When human opponents are unavailable, the matchmaking module instantiates simulated bot combatants with randomized response latencies and tiered accuracy curves. The questions engine draws from a structured JSON deck (questions.json) dynamically filtered by language and mode. Game scoring applies time-decay bonuses that award higher XP for sub-3-second responses. User stats and local settings persist in localStorage, while PWA manifest configuration enables seamless full-screen gaming on mobile and desktop devices.",
      highlights: "Innovatively fuses fighting-game excitement with rigorous linguistic drills, proving that competitive esports mechanics can dramatically accelerate foreign language mastery.",
      labs: [
        {
          name: "Warrior Onboarding & Language Selection Lab",
          desc: "Launch the application, enter a warrior moniker, select a primary language (e.g. Spanish or Japanese), and verify that the user profile and arena lobby initialize correctly."
        },
        {
          name: "Vocabulary Duel 1v1 Matchmaking Lab",
          desc: "Queue for a Vocabulary Duel, verify matchmaking room creation and opponent connection, and test rapid-fire 15-second multiple choice rounds with instant score updates."
        },
        {
          name: "Translation Race Speed & Accuracy Lab",
          desc: "Enter a Translation Race, type foreign language answers against the clock, test fuzzy matching tolerance for minor casing variations, and confirm time-bonus scoring."
        },
        {
          name: "Cultural Trivia & Etymology Challenge Lab",
          desc: "Select Cultural Trivia mode in Japanese or Persian, answer regional customs and idiom origin questions, and verify accurate explanation reveals upon round completion."
        },
        {
          name: "Sudden-Death Survival Gauntlet Lab",
          desc: "Initiate Survival Mode, simulate answering 5 consecutive rounds correctly, deliberately submit an incorrect answer, and confirm instant knockout and survival streak logging."
        },
        {
          name: "AI Bot Sparring Fallback Validation Lab",
          desc: "Disconnect external network matchmaking triggers, launch a practice duel, and verify that the automated sparring bot responds realistically within the 15-second round window."
        },
        {
          name: "Leaderboard Sync & XP Rank Progression Lab",
          desc: "Complete a competitive match victory, check XP award calculations, and verify that updated scores reflect dynamically on the global warrior leaderboard."
        },
        {
          name: "PWA Standalone & Mobile Arena Layout Lab",
          desc: "Inspect the PWA manifest and app icon assets, test responsive touch controls on mobile viewports, and confirm seamless navigation between Arena, Profile, and Rules modals."
        }
      ]
    }
  },
  {
    id: "threadora",
    title: "Threadora",
    subtitle: "Comprehensive Fiber Arts Academy, Multi-Craft Studio & Digital Stitch Companion",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: true,
    featured: false,
    image: threadoraIcon,
    liveUrl: "https://rswarke1972-art.github.io/Threadora/",
    githubUrl: "https://github.com/rswarke1972-art/Threadora",
    tags: ["Fiber Arts", "Crochet", "Knitting", "Amigurumi", "Embroidery", "Macrame", "PWA", "Craft Studio"],
    shortDescription: "A serene digital craft studio and multi-disciplinary fiber arts academy. Master crochet, knitting, amigurumi, embroidery, macrame, and cross-stitch with interactive step-by-step stitch diagrams, digital row counters, yarn stash tracking, and hands-free craft mode.",
    details: {
      generalIdea: "Threadora is an all-in-one digital crafting studio, multi-craft academy, and fiber arts companion designed for crocheters, knitters, amigurumi creators, and textile artisans. From a complete beginner's first slip knot to advanced multi-skein garment construction, Threadora demystifies fiber crafts with clear, interactive stitch diagrams, animated tool mechanics, and curated project patterns across six distinct disciplines: Crochet, Knitting, Amigurumi, Embroidery, Macrame, Cross-Stitch, and Tailoring. Equipped with hands-free Craft Mode featuring large-format row counters, digital yarn stash inventory managers, project timeline planners, US vs UK terminology converters, and daily streak tracking, Threadora transforms repetitive craft counting into a peaceful, highly organized, and creative daily sanctuary.",
      keyFeatures: [
        "Six Core Fiber Arts Disciplines: Comprehensive curricula for Crochet, Knitting, Amigurumi sculpture, Botanical Embroidery, Macrame knotting, and Cross-Stitch charting.",
        "Interactive Stitch & Technique Library: Step-by-step illustrated guides detailing hook insertion points, yarn-over maneuvers, tension control, and difficulty ratings.",
        "Hands-Free Crafting Mode: Fullscreen distraction-free workspace featuring high-visibility tap and voice-responsive row counters and display wake-lock.",
        "Digital Yarn Stash & Skein Inventory: Multi-attribute stash organizer tracking dye lots, fiber composition (merino, alpaca, cotton, acrylic), weight categories, and yardage remaining.",
        "Interactive Digital Row & Stitch Counters: Multi-project counter widgets supporting separate row, round, and repeat tracking with customizable milestone chimes.",
        "Curated Project Pattern Repository: Step-by-step downloadable and interactive pattern guides categorized by skill tier, craft type, and required gauge.",
        "Project Planner & WIP Roadmap: Complete workflow planner logging project start dates, target deadlines, estimated yardage, and material costs.",
        "Finished Object (FO) Showcase Gallery: Visual milestone journal for uploading completed project photographs, technique notes, and recipient gift logs.",
        "Global Fiber Arts Glossary & Converter: Instant translation dictionary bridging US vs UK crochet terminologies, metric hook millimeter conversions, and gauge calculators.",
        "Daily Craft Streaks & Achievement Badges: Gamified habit system rewarding consistent daily stitches with unlockable milestones and craft progress analytics.",
        "Tailoring & Garment Sewing Modules: Practical tutorials for body measurement fitting, seam finishing, hemming, darting, and pattern adjustments.",
        "Progressive Web App (PWA) Offline Operation: Complete offline resilience with Service Worker caching, installable standalone display mode, and instant launch."
      ],
      working: "Threadora is architected with a decoupled modular client-side JavaScript engine (app.js, dashboard.js, learning.js, stitchlibrary.js, patterns.js, amigurumi.js, macrame.js, crossstitch.js, tailoring.js, counters.js, craftmode.js, yarnstash.js, planner.js, projects.js, gallery.js, glossary.js, and service-worker.js). State management coordinates project progress, active row counters, yarn inventory, and craft streaks in local browser storage with real-time JSON synchronization. Craft Mode integrates Screen Wake Lock APIs to prevent display sleep during hands-on crafting sessions. Touch gestures and keyboard shortcuts trigger zero-latency counter increments with haptic and audio feedback. A dedicated Service Worker caches all offline stitch schematics, SVG icons, and stylesheets for reliable crafting off-grid.",
      highlights: "Harmoniously blends hands-on artisanal craft education with modern digital studio utilities, hands-free screen controls, and comprehensive multi-discipline fiber art curricula.",
      labs: [
        {
          name: "Stitch Library & Technique Exploration Lab",
          desc: "Access the Stitch Library, filter by craft discipline (Crochet, Knitting, Embroidery), inspect step-by-step schematics for the Magic Ring and Cable Stitch, and verify technique difficulty ratings."
        },
        {
          name: "Hands-Free Craft Mode & Row Counter Lab",
          desc: "Enter Craft Mode on an active project, test large-format touch increment controls, verify row and repeat counter synchronization, and confirm Screen Wake Lock activation."
        },
        {
          name: "Digital Yarn Stash & Skein Tracking Lab",
          desc: "Add a new yarn entry to the Stash manager (specifying fiber content, weight category, colorway, dye lot, and total yardage), log partial skein usage, and verify accurate remaining yardage calculations."
        },
        {
          name: "Pattern Library & Gauge Calculator Lab",
          desc: "Open a garment pattern in the Pattern Repository, test the interactive gauge calculation widget with custom swatch measurements, and verify automated stitch count adjustments."
        },
        {
          name: "Amigurumi 3D Sculpture & Shaping Lab",
          desc: "Navigate to the Amigurumi academy module, walk through the spherical increase/decrease progression chart, and confirm safety-eye placement guidelines and seamless invisible decrease instructions."
        },
        {
          name: "Fiber Arts Glossary & US/UK Terminology Converter Lab",
          desc: "Consult the Glossary, search key abbreviations (e.g. SC, DC, TR, K2tog, SSK), toggle between US and UK crochet terminology, and verify accurate stitch translation tables."
        },
        {
          name: "Project Planner & Material Cost Estimator Lab",
          desc: "Create a new WIP project in the Planner, assign deadline milestones and yarn skeins from stash, and verify budget calculations and completion percentage tracking."
        },
        {
          name: "PWA Standalone Installation & Offline Resilience Lab",
          desc: "Trigger the in-app Install button from the top navigation header, disconnect network connectivity, and verify that stitch encyclopedias and project counters remain fully operational offline."
        }
      ]
    }
  },
  {
    id: "budhbhushanam",
    title: "Budhbhushanam",
    subtitle: "Classical Sanskrit Statecraft, Leadership & Ethical Verse Decoder",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: true,
    featured: true,
    image: budhbhushanamIcon,
    liveUrl: "https://rswarke1972-art.github.io/Budhbhushanam/",
    githubUrl: "https://github.com/rswarke1972-art/Budhbhushanam",
    tags: ["Sanskrit Treatise", "Chhatrapati Sambhaji Maharaj", "Royal Statecraft", "Rajniti & Governance", "Leadership Wisdom", "Verse Decoder", "Devanagari Literature"],
    shortDescription: "An immersive verse interpretation platform unlocking King Sambhaji's Sanskrit treatise on statecraft, ethical leadership, strategic discipline, and actionable modern wisdom.",
    details: {
      generalIdea: "Budhbhushanam ('The Ornament of the Wise') is a celebrated Sanskrit political and ethical treatise composed by Chhatrapati Sambhaji Maharaj, the scholar-warrior second Chhatrapati of the Maratha Empire. Composed during his youth at Shringarpur, this profound work synthesizes centuries of ancient Indian political thought (Rajniti, Nitisastra, and Arthasastra traditions) with martial fortitude, judicial fairness, and psychological wisdom. The platform transforms this rare classical masterpiece into an accessible, structured digital guide. Each Sanskrit shloka is systematically deconstructed through word-by-word sandhi breakdown, comprehensive translations, historical royal context, simple and deep analytical layers, core moral principles, behavioural contrasts (wrong way vs right way), practical modern applications, executive leadership lenses, and pithy contemplative insights.",
      keyFeatures: [
        "Verse-by-Verse Classical Corpus: Complete Sanskrit shlokas rendered in pristine Devanagari typography with metrical cadence",
        "Grammatical Sandhi Decomposition: Granular word-by-word morphological breakdowns explaining compound terms and Sanskrit roots",
        "Dual Analytical Horizons: Layered explanatory breakdowns featuring both accessible simple interpretations and deep philosophical exegesis",
        "Authorial Intent & Royal Context: Historical commentary explaining Sambhaji Maharaj's perspectives as a monarch, military strategist, and scholar",
        "Ethical Contrast Engine: Direct comparative matrices juxtaposing corrupt, ego-driven failures against disciplined, virtuous statesmanship",
        "Universal Life Principles: Distilled enduring ethical maxims applicable to individual character building, crisis resolution, and moral courage",
        "Real-World Scenarios: Pragmatic modern situational case studies demonstrating how ancient statecraft principles resolve contemporary dilemmas",
        "Actionable Application Checklists: Concrete step-by-step behavioural guidelines translating philosophical theory into daily habits",
        "Executive Leadership Lens: Dedicated leadership perspectives tailored for modern managers, strategists, founders, and community leaders",
        "Contemplative Insight Aphorisms: Memorable distilled wisdom capsules designed for meditation, daily reflection, and moral grounding",
        "Persistent Reading Session: LocalStorage progress tracking remembering reader position across browser refreshes and device restarts",
        "Regal Responsive Interface: Immersive dark mode theme styled with royal saffron and deep crimson accents honoring Maratha heritage"
      ],
      working: "Built as a high-performance, distraction-free digital reader utilizing native vanilla JavaScript, CSS custom properties, and asynchronous JSON data streaming. The application loads structured verse objects containing multi-tiered linguistic, philosophical, and pedagogical metadata. Dynamic DOM rendering reconstructs shloka cards with contextual headers, grammatical breakdowns, collapsible annotations, and formatted bulleted action plans. Reading state is synchronized to the browser's localStorage under 'bb_index', enabling seamless continuation across reading sessions. The responsive design adapts seamlessly across mobile screens, tablets, and desktop workstations.",
      highlights: "Revitalizes a rare, historic Sanskrit treatise composed by one of India's most heroic and learned scholar-monarchs, bridging the gap between classical political science and 21st-century leadership ethics.",
      labs: [
        {
          name: "Royal Invocation & Mindset Harmonization",
          desc: "Explore the introductory invocations uniting intellect (Ganesha) with fearless righteous valor (Narasimha) to center the mind before making difficult executive choices."
        },
        {
          name: "Rajniti & Sovereign Statecraft Matrix",
          desc: "Analyze the foundational pillars of righteous kingship, governance, fort defense, treasury administration, and judicial impartiality."
        },
        {
          name: "Word-by-Word Sanskrit Grammatical Decoder",
          desc: "Deconstruct intricate classical Sanskrit compounds, sandhi rules, and etymological roots with interactive lexical annotations."
        },
        {
          name: "Moral Contrast & Behavioural Analysis Engine",
          desc: "Evaluate the psychological differences between ego-driven impulse versus steady, principled discernment across difficult situations."
        },
        {
          name: "Executive Crisis Translation Chamber",
          desc: "Translate ancient battle-tested principles of loyalty, vigilance, and alliance management into actionable boardroom and crisis strategies."
        },
        {
          name: "Power, Humility & Service Evaluator",
          desc: "Assess leadership strength through the lens of humility, exploring how noble power must be wielded for obstacle removal rather than self-aggrandizement."
        },
        {
          name: "Daily Contemplative Aphorism Generator",
          desc: "Extract timeless Sanskrit aphorisms and core insights designed for morning meditation, moral alignment, and personal fortitude."
        },
        {
          name: "Persistent Reading & Progress Archive",
          desc: "Track cumulative study progress through the treatise with persistent local storage state and smooth navigation controls."
        }
      ]
    }
  },
  {
    id: "anchortalk",
    title: "AnchorTalk",
    subtitle: "Empathetic Dialogue, Crisis Intervention & Supportive Communication Simulator",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: true,
    featured: true,
    image: anchortalkIcon,
    liveUrl: "https://rswarke1972-art.github.io/AnchorTalk/",
    githubUrl: "https://github.com/rswarke1972-art/AnchorTalk",
    tags: ["PWA", "Crisis Communication", "Empathy Training", "Non-Violent Dialogue", "Psychological Validation", "Scenario Engine", "Mental Health"],
    shortDescription: "An advanced, interactive crisis communication simulator and scenario studio training empathetic, non-violent, and de-escalating dialogue across 108 realistic high-stress scenarios.",
    details: {
      generalIdea: "AnchorTalk ('Stay steady. Speak safely.') is an evidence-grounded interactive communication simulator, scenario authoring studio, and empathy training suite. When loved ones, colleagues, or team members face intense psychological distress, panic attacks, grief, burnout, shame spirals, or crisis situations, well-intentioned individuals often inadvertently cause harm through toxic positivity, premature problem-solving, intellectualization, or emotional withdrawal. AnchorTalk provides a safe, guided sandbox to practice grounded, non-violent communication. Powered by a modular multi-engine architecture and a comprehensive catalog of 108 branching scenarios, the platform trains users in active emotional validation, crisis de-escalation, and holding space without offering hollow platitudes.",
      keyFeatures: [
        "108 Branching Real-World Scenarios: Deep simulation library covering acute crisis intervention, workplace conflict, grief, guilt spirals, panic attacks, and safety planning",
        "6 Core Psychological Validation Rules: Structured foundational guides deconstructing why 'Don't fix, understand' and emotional mirroring prevent defensive escalation",
        "Modular Multi-Engine Architecture: Clean decoupling across eventBus, stateManager, effectEngine, nodeResolver, replayEngine, achievementEngine, and analyticsEngine",
        "Visual Scenario Studio (studio.html): Full-featured node graph authoring environment allowing educators and creators to design, connect, and export custom dialogue trees",
        "Creator Analytics Dashboard (analytics.html): Live performance analytics tracking user choice distributions, drop-off rates, empathy scores, and escalation probabilities",
        "Real-Time Emotional Feedback: Immediate psychological commentary explaining why particular word choices foster emotional safety or trigger alienation",
        "Multi-Tiered State Mutation: Dynamically tracks persona stress levels, conversational trust meters, and escalation indices across multi-step dialogue paths",
        "Replay & Decision Branch Review: Interactive replay system allowing learners to revisit critical decision junctions and explore alternate conversational outcomes",
        "Integrated Achievement Engine: Gamified milestone system awarding empathy badges, crisis safety certifications, and mastery streaks",
        "Dual Theme Ergonomics: Sleek light and dark interface modes with accessible contrast ratios for calm, low-anxiety simulation sessions",
        "Full PWA Offline Support: Progressive Web App with custom Service Worker caching (sw.js), background persistence, and seamless homescreen installation",
        "Search & Category Filtering: Instant multi-category filtering across Crisis, Workplace, Personal Grief, Boundary Setting, and Anxiety scenarios"
      ],
      working: "AnchorTalk is built entirely with modular ES6 JavaScript and native browser APIs without external framework overhead. The simulation loop is driven by an EventBus pub/sub architecture coordinating with a central StateManager. As users select dialogue options, the EffectEngine computes deltas across conversational trust, user empathy score, and scenario stress levels. The NodeResolver dynamically traverses graph nodes defined in a 3.7MB structured corpus (data.json). The Scenario Studio provides an interactive canvas to construct nodes, define condition gates, and export valid scenario schemas. The application leverages custom Service Worker caching for complete offline operation and stores user progress, custom scenarios, and theme preferences in LocalStorage.",
      highlights: "Delivers a transformative mental health communication training platform with 108 branching scenarios, visual scenario authoring, creator analytics, and zero-framework PWA resilience.",
      labs: [
        {
          name: "Crisis De-Escalation & Safety Planning Lab",
          desc: "Interactive roleplay navigating acute psychological distress, assessing emergency indicators safely, and establishing supportive safety agreements without panic."
        },
        {
          name: "Active Listening & Validation Mirror",
          desc: "Real-time dialogue simulator that evaluates conversational choices against non-violent communication principles, rewarding emotional presence over premature fixing."
        },
        {
          name: "Toxic Positivity & Invalidation Detector",
          desc: "Comparative exercise exposing how well-intentioned dismissive clichés ('look on the bright side', 'everything happens for a reason') alienate individuals in pain."
        },
        {
          name: "Workplace Conflict & Credit Dispute Sim",
          desc: "Complex organizational roleplay resolving project credit disputes, toxic colleague confrontations, and team accountability tensions with assertive empathy."
        },
        {
          name: "Grief & Profound Loss Holding Space",
          desc: "Deeply sensitive simulated encounters training individuals on how to sit comfortably with another person's sorrow without rushing to fill the silence."
        },
        {
          name: "Burnout & Compassion Fatigue Triage",
          desc: "Boundary-setting scenarios coaching healthcare workers, caretakers, and professionals to offer supportive empathy while preserving healthy personal boundaries."
        },
        {
          name: "Visual Scenario Studio & Graph Authoring",
          desc: "Interactive node editor allowing instructors and psychologists to visually graph dialogue trees, assign stress deltas, and export structured JSON scenarios."
        },
        {
          name: "Creator Analytics & Empathy Metric Engine",
          desc: "Comprehensive analytics suite visualizing learner decision heatmaps, choice drop-offs, difficulty indexes, and collective empathy rating curves."
        }
      ]
    }
  },
  {
    id: "ashtavakra",
    title: "Ashtavakra Gita Decoder",
    subtitle: "Non-Dual Advaita Philosophy, Direct Realization & Self-Inquiry Platform",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: true,
    featured: true,
    image: ashtavakraIcon,
    liveUrl: "https://rswarke1972-art.github.io/AstavakraGitaDecoder/",
    githubUrl: "https://github.com/rswarke1972-art/AstavakraGitaDecoder",
    tags: ["PWA", "Philosophy", "Advaita Vedanta", "Self Inquiry", "Verse Decoder", "Consciousness Studies", "Sanskrit"],
    shortDescription: "An immersive philosophical interpretation platform and self-inquiry laboratory decoding the radical non-dual dialogues between Sage Ashtavakra and King Janaka.",
    details: {
      generalIdea: "The Ashtavakra Gita is universally celebrated as one of the pinnacle, most radical expositions of non-dual (Advaita Vedanta) philosophy. Far removed from elaborate rituals, dogma, or theological cosmology, this profound dialogue between the physically deformed, spiritually illumined Sage Ashtavakra and the seeking monarch King Janaka cuts directly to the core of human consciousness. The platform decodes this 13,500-line classical corpus into an accessible, multi-layered philosophical laboratory. Every shloka is deconstructed across word-by-word Sanskrit translations, dual-layer simple and deep metaphysical exegesis, formal tri-part logic (premise, observation, conclusion), inner dialectical debates (Mind vs Wisdom), allegorical stories, real-world psychological case studies, actionable self-inquiry usage guidelines, and multi-lens perspectives spanning spiritual, psychological, and philosophical dimensions.",
      keyFeatures: [
        "Complete Classical Devanagari Corpus: Pure, uncompromised Sanskrit shlokas rendered in elegant typography reflecting metrical cadence",
        "Word-by-Word Sanskrit Grammatical Parsing: Granular sandhi and lexical decomposition unpacking root etymologies and philosophical nouns",
        "Dual-Layered Analytical Exegesis: Structured simple summaries paired with deep Advaita ontological commentary deconstructing ego and illusion",
        "Formal Tri-Part Logic Engine: Rigorous dialectical framework detailing premise, empirical observation, and philosophical conclusion for every verse",
        "Mind vs Wisdom Internal Debate: Interactive dialectical dialogues pitting habitual ego attachments against the luminous clarity of witness consciousness",
        "Allegorical Parables & Stories: Evocative illustrative narratives illuminating why external kingdom wealth fails to quench inner existential yearning",
        "Real-World Modern Case Studies: Contemporary situational case studies exploring student anxiety, executive burnout, and emotional over-identification",
        "Actionable Self-Inquiry Checklists: Practical contemplative prompts guiding seekers on how to question personal assumptions and observe the mind",
        "Tri-Lens Multi-Disciplinary Analysis: Verses examined simultaneously through spiritual self-realization, cognitive psychology, and epistemological philosophy",
        "Aphoristic Insight Capsules: High-potency contemplative maxims designed for morning stillness, mindfulness, and cognitive recalibration",
        "Distraction-Free Contemplative Design: Dark-mode reading aesthetic tailored for quiet introspection with seamless previous and next navigation",
        "Full PWA Standalone Experience: Offline-ready web application with web app manifest and dedicated touch icons for mobile reading"
      ],
      working: "Ashtavakra Gita Decoder is engineered with lean vanilla JavaScript and modern CSS custom properties with zero external framework overhead. The entire 768KB structured corpus (verses.json) is loaded asynchronously into an in-memory repository. A lightweight state machine tracks the active verse index and dynamically generates rich DOM trees for shloka cards, formal logic blocks, comparative debate dialogues, and multi-lens commentary tabs. The user interface optimizes readability through responsive typographic scaling and provides immediate, friction-free keyboard and touch-based navigation between verses.",
      highlights: "Transforms the most uncompromising classical Advaita Vedanta treatise into a multi-tiered digital laboratory for direct self-inquiry, psychological deconditioning, and inner liberation.",
      labs: [
        {
          name: "Self-Inquiry & Witness Consciousness Lab",
          desc: "Guided contemplative exercises exploring 'Who am I?' and disidentifying awareness from transient mental thoughts, emotional reactions, and sensory data."
        },
        {
          name: "Mind vs Wisdom Dialectical Arena",
          desc: "Interactive debate engine confronting habitual ego-driven attachment and fear with the silent, unflinching clarity of witness consciousness."
        },
        {
          name: "Tri-Part Philosophical Logic Analyzer",
          desc: "Formal logical deconstruction evaluating the premises, empirical observations, and deductions underpinning non-dual metaphysical reality."
        },
        {
          name: "Word-by-Word Sanskrit Etymological Decoder",
          desc: "Granular linguistic dissection of classical Sanskrit roots including Moksha (liberation), Vairagya (detachment), Sakshi (witness), and Brahman (absolute reality)."
        },
        {
          name: "Ego Attachment & Sense Object Simulator",
          desc: "Analytical chamber assessing the psychological mechanics of desire, temporary sensory gratification, and lingering existential dissatisfaction."
        },
        {
          name: "Tri-Lens Perspective Chamber (Spiritual, Psychological, Philosophical)",
          desc: "Comparative matrix viewing each shloka simultaneously through classical Vedantic realization, modern cognitive psychology, and epistemology."
        },
        {
          name: "Modern Stress & Burnout Deconditioning Workbench",
          desc: "Pragmatic application suite applying royal non-attachment principles to executive pressure, workplace anxiety, and cognitive overload."
        },
        {
          name: "Contemplative Insight & Aphorism Meditation Vault",
          desc: "Distilled treasury of Ashtavakra aphorisms engineered for daily mindfulness, silent contemplation, and grounding in the present moment."
        }
      ]
    }
  },
  {
    id: "lexiverse",
    title: "LexiVerse",
    subtitle: "Contextual Literature, Multi-Accent Pronunciation & Etymology Explorer",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: lexiverseIcon,
    liveUrl: "https://rswarke1972-art.github.io/LexiVerse/",
    githubUrl: "https://github.com/rswarke1972-art/LexiVerse",
    tags: ["PWA", "Vocabulary", "Literature", "Etymology", "Grammar Drills", "Speech Synthesis", "Interactive Stories"],
    shortDescription: "An immersive literary vocabulary ecosystem and grammar laboratory blending contextual storytelling with Latin/Greek etymology, tri-accent audio pronunciations, and 800+ syntax drills.",
    details: {
      generalIdea: "LexiVerse transforms English vocabulary acquisition from dry rote memorization into an organic literary adventure. Instead of studying isolated flashcard lists, learners immerse themselves in curated, high-level narrative literature where complex, sophisticated words are semantically embedded. Clicking any highlighted word summons an interactive etymological dossier: Latin and Greek root origins, historical morphological evolutions, full definitions, contextual examples, and multi-accent audio speech (US, UK, and Indian English pronunciations). Backed by an exhaustive 26-volume A-to-Z dictionary database, an extensive Grammar Play engine featuring over 800 interactive challenges, and multi-tiered vocabulary practice modes, LexiVerse delivers a holistic masterclass in English linguistics.",
      keyFeatures: [
        "Interactive Literary Fiction Reader: Immersive short stories and narrative passages embedded with curated advanced vocabulary words",
        "Instant Semantic Word Dossiers: Popup modals breaking down meanings, nuance connotations, synonyms, antonyms, and literary citations",
        "Multi-Accent Audio Pronunciations: Integrated speech synthesis delivering authentic pronunciations across US, UK, and Indian English accents",
        "Deep Etymological Lineage: Tracing roots from Proto-Indo-European, classical Latin, and ancient Greek to Middle English transformations",
        "Exhaustive A-Z Digital Lexicon: Complete alphabetical word directory backed by 26 partitioned JSON datasets (A.json through Z.json)",
        "Grammar Play Practice Suite (grammar.html): Over 800 interactive grammar and syntax challenges covering clauses, tenses, and parts of speech",
        "Word Practice Arena (practice.html): Multi-mode vocabulary drills featuring definition matching, sentence completions, and rapid-fire flashcards",
        "Story Selection Portal (select.html): Genre-spanning library allowing readers to select narratives by difficulty tier, theme, and lexical density",
        "Reading State Persistence: Seamlessly resumes reading position, active passage index, and discovered words across browser sessions",
        "Custom Word Vault & Bookmarking: Learners save challenging terms into an individualized study list for spaced repetition review",
        "High-Performance Dark Palette: Deep noir aesthetic accented with vibrant crimson and amber tones designed for comfortable nocturnal reading",
        "Offline-First PWA Architecture: Standalone Progressive Web App powered by service worker caching (sw.js) for continuous offline study"
      ],
      working: "LexiVerse is engineered with pure modular vanilla JavaScript and modern CSS without external framework dependencies. The reading engine dynamically renders passage text and attaches interactive click listeners to inline vocabulary tokens. Clicking a token activates modal.js, querying structured JSON dictionaries (A.json to Z.json) loaded on demand to optimize browser memory. Speech synthesis utilizes the browser's native Web Speech API, dynamically selecting regional voice engines for US, UK, and Indian phonetic accents. Grammar.js powers an interactive assessment engine with instant scoring against an 800+ question bank (grammar_questions.json). An offline Service Worker caches literary passages, stylesheets, and linguistic datasets, while LocalStorage persists user reading checkpoints and bookmark collections.",
      highlights: "Merges the joy of literature with rigorous lexical science, featuring 800+ grammar drills, tri-accent speech synthesis, full A-Z etymological depth, and zero-framework PWA resilience.",
      labs: [
        {
          name: "Interactive Story Reading & Click-to-Learn Lab",
          desc: "Practice reading challenging literature with inline vocabulary highlighting and instant semantic modal popups."
        },
        {
          name: "Multi-Accent Phonetic Pronunciation Chamber",
          desc: "Auditory training module comparing acoustic pronunciations of advanced words across US, UK, and Indian English dialects."
        },
        {
          name: "Etymological Root & Morphology Workbench",
          desc: "Deconstruct complex English words into classical Greek prefixes, Latin stems, and historical morphological shifts."
        },
        {
          name: "A-to-Z Lexicon Directory & Search Matrix",
          desc: "High-speed directory querying words, root families, and definitions across 26 partitioned alphabetical datasets."
        },
        {
          name: "Grammar Play & Syntax Challenge Simulator",
          desc: "800-question interactive grammar engine testing sentence structure, subjunctive moods, modifiers, and idiomatic phrasing."
        },
        {
          name: "Vocabulary Flashcards & Rapid Drill Arena",
          desc: "Spaced repetition practice sandbox drilling definitions, antonyms, and fill-in-the-blank contextual applications."
        },
        {
          name: "Contextual Nuance & Connotation Analyzer",
          desc: "Comparative exercise exploring subtle shades of meaning between closely related synonyms in different literary contexts."
        },
        {
          name: "Reading Progress & Personalized Word Vault",
          desc: "Manage custom saved vocabulary collections, track reading fluency metrics, and export personalized revision lists."
        }
      ]
    }
  },
  {
    id: "arabicflow",
    title: "ArabicFlow",
    subtitle: "Complete Arabic Script, 4-Position Forms, 5 Dialects & Cultural Suite",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: arabicflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/ArabicFlow/",
    githubUrl: "https://github.com/rswarke1972-art/ArabicFlow",
    tags: ["PWA", "Arabic Learning", "Letter Forms", "5 Dialects", "Root Words", "Typing Keyboard", "Interactive Stories"],
    shortDescription: "An immersive Arabic language ecosystem and cultural portal celebrating Arab heritage across 4-position cursive letterforms, 5 regional dialects, sentence building, and folklore.",
    details: {
      generalIdea: "ArabicFlow is an immersive Arabic language learning ecosystem and cultural portal bridging Classical Modern Standard Arabic (Fusha) with the rich living colloquial dialects spoken across the Arab world. Designed to demystify the Arabic abjad script and its cursive morphology, ArabicFlow guides learners through the four contextual letter forms (isolated, initial, medial, final), non-connecting letters, harakat diacritics, and the root-and-pattern (Jadr) derivational morphology system. Beyond script literacy, ArabicFlow celebrates the vibrant regional culture of Arab countries across 5 major dialect families (Modern Standard Arabic, Egyptian Masri, Levantine Shami, Gulf Khaleeji, and Maghrebi Darija), featuring bilingual narrative folklore, interactive sentence builders, authentic virtual Arabic keyboard practice, audio pronunciations, ambient Ney flute melodies, and gamified XP progression.",
      keyFeatures: [
        "Complete 4-Position Cursive Visualizer: Interactive charts detailing all 28 Arabic letters in isolated, initial, medial, and final cursive joining forms",
        "5 Living Dialect Suites: Side-by-side linguistic comparisons covering Modern Standard Arabic (MSA), Egyptian, Levantine, Gulf, and Maghrebi",
        "Interactive Sentence Builder: Drag-and-drop lexical puzzle interface assembling grammatically accurate Arabic sentences with real-time feedback",
        "Trilateral Root (Jadr) Derivation Matrix: Explore how 3-consonant Semitic roots expand into semantic word families across verbs, nouns, and adjectives",
        "Virtual Arabic On-Screen Keyboard: Dedicated interactive typing sandbox teaching the standard Arabic keyboard layout without requiring system reconfiguration",
        "Bilingual Cultural Folklore Stories: Rich illustrated cultural narratives with synchronized audio recitations, phrase breakdowns, and English parallel text",
        "Interactive Quiz Arena: Comprehensive multi-format testing engine covering letter identification, position shapes, vocabulary recall, and dialect comprehension",
        "Gamified Leveling & Daily Streak Engine: Built-in XP leveling system, rank progressions, streak tracking, and achievement milestone badges",
        "Ambient Cultural Soundscapes: Optional traditional Arabic Ney flute audio backdrop creating a focused, atmospheric learning sanctuary",
        "Full RTL (Right-to-Left) Native Typography: Pristine typography styled with Google Fonts Tajawal and Outfit, respecting authentic Arabic ligatures",
        "Search & Dictionary Lookup: Instant lexical search filtering letters, dialect vocabulary, root words, and phonetic transliterations",
        "Complete Offline-Ready PWA: Progressive Web App with service worker caching (sw.js), install banner, and dynamic online/offline connectivity monitors"
      ],
      working: "ArabicFlow is engineered with pure modular vanilla JavaScript and modern CSS with zero external framework overhead. The application cleanly decouples logic across dedicated controllers (characters.js, sentence.js, keyboard.js, quiz.js, storyViewer.js, and gamification.js). Asynchronous JSON fetching loads the 277KB linguistic database (data.json). The interface natively enforces bidirectional text isolation with RTL layouts and dynamic ligatures. LocalStorage synchronizes learner XP, streak counters, completed quiz scores, and saved bookmarked stories. The PWA Service Worker caches media, audio streams, and lesson JSON datasets for full offline operation.",
      highlights: "Uniquely unites classical Fusha literacy with 5 living Arab dialects, 4-position cursive typography, sentence mechanics, cultural folklore, and PWA resilience.",
      labs: [
        {
          name: "4-Position Cursive Calligraphy Sandbox",
          desc: "Interactive tactile visualizer tracing how each Arabic character transforms across initial, medial, final, and isolated script positions."
        },
        {
          name: "5-Dialect Comparative Matrix",
          desc: "Real-time dialectal workbench comparing phonology, idioms, and everyday greetings across MSA, Egyptian, Levantine, Gulf, and Maghrebi."
        },
        {
          name: "Trilateral Root (Jadr) Family Tree Explorer",
          desc: "Deconstruct Semitic 3-consonant roots to observe how patterns (Awzan) yield interconnected verbs, nouns, and participles."
        },
        {
          name: "Interactive Arabic Sentence Construction Lab",
          desc: "Drag-and-drop syntax workbench assembling verb-subject-object (VSO) and topic-comment sentences with case ending hints."
        },
        {
          name: "Virtual Arabic Keyboard & Typing Drill Arena",
          desc: "Touch and keyboard typing laboratory mapping QWERTY keys to Arabic letters with live speed and accuracy metrics."
        },
        {
          name: "Arabian Folklore & Story Listening Chamber",
          desc: "Synchronized audio-text player featuring cultural legends, bedtime parables, and idiomatic dialogues across the Arab world."
        },
        {
          name: "Harakat Diacritics & Vocalization Trainer",
          desc: "Interactive vowelization module demonstrating how short vowels (Fatha, Damma, Kasra, Sukun) alter semantic meanings."
        },
        {
          name: "Gamified Mastery & Streak Tracker",
          desc: "Personal linguistic dashboard monitoring XP gains, daily study streaks, mastery badges, and quiz progression."
        }
      ]
    }
  },
  {
    id: "strokeflow",
    title: "StrokeFlow",
    subtitle: "Mandarin Chinese Character, HSK Stroke Order & Cultural Calligraphy Suite",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: strokeflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/StrokeFlow/",
    githubUrl: "https://github.com/rswarke1972-art/StrokeFlow",
    tags: ["PWA", "Chinese Learning", "HSK System", "Stroke Order", "Calligraphy", "Radicals", "Pinyin"],
    shortDescription: "An interactive Mandarin character ecosystem and calligraphy laboratory structured across HSK levels, featuring animated stroke orders, radical decomposition, and folklore.",
    details: {
      generalIdea: "StrokeFlow is an interactive Chinese character learning ecosystem and calligraphy laboratory designed to help learners master Mandarin Hanzi from foundational brushstrokes to advanced HSK literacy. Demystifying the logic of Chinese writing, StrokeFlow combines animated stroke-by-stroke calligraphy demonstrations with the Eight Principles of Yong (Yong Zi Ba Fa), radical semantic decomposition, tone visualizers, and HSK level-based progression. Learners explore character morphology (pictographic, ideographic, and phono-semantic compounds), train auditory comprehension with native Pinyin audio, test character recognition in interactive quiz arenas, and practice reading through cultural Chinese folklore stories accompanied by traditional bamboo flute melodies.",
      keyFeatures: [
        "Animated Stroke-by-Stroke Calligraphy: Real-time SVG stroke animations showcasing exact writing sequences, directions, and calligraphy rhythm",
        "HSK 1 Through HSK 6 Curriculum: Structured multi-level character taxonomy covering core vocabulary from beginner to advanced proficiency",
        "Radical Semantic & Phonetic Decomposition: Interactive anatomy diagrams isolating Kangxi radicals, semantic keys, and phonetic clues",
        "Pinyin & 4-Tone Audio Pronunciation: Clear native audio recitations with tone contour visualizations (flat, rising, falling-rising, falling)",
        "Daily Writing Challenge: Gamified daily character prompts encouraging regular handwriting practice and muscle-memory retention",
        "Cultural Chinese Folklore Stories: Illustrated bilingual Chinese narratives with synchronized audio, pinyin toggles, and vocabulary tooltips",
        "Multi-Format Character Quizzes: Interactive testing arena covering character recognition, tone discrimination, and pinyin transcription",
        "Tian Zi Ge & Mi Zi Ge Practice Grids: Traditional Chinese calligraphy grid overlays ensuring proper proportion, balance, and center-point alignment",
        "Ambient Chinese Bamboo Flute Melodies: Traditional meditative soundtrack (Dizi flute) cultivating a serene, focused scholar's studio atmosphere",
        "Fast Hanzi, Pinyin & English Search: Instant search engine filtering characters by Hanzi glyph, Pinyin transcription, radical, or English definition",
        "Streak & Mastery Tracking Dashboard: Personal progress statistics displaying consecutive study days, mastered characters, and HSK level completion",
        "Complete Offline-Ready PWA: Standalone Progressive Web App with custom Service Worker caching (sw.js) for continuous practice anywhere"
      ],
      working: "StrokeFlow is engineered with pure modular vanilla JavaScript and modern CSS with zero external framework overhead. The application cleanly decouples logic across dedicated controllers (characters.js, viewer.js, quiz.js, search.js, and story-viewer.js). Asynchronous JSON fetching loads the 160KB character database (data.json). SVG stroke paths animate with sequential CSS stroke-dashoffset transitions to mimic authentic brush calligraphy. Tone audio and flute soundscapes integrate via HTML5 Audio and Web Audio APIs. LocalStorage manages user learning streaks, mastered character sets, and quiz high scores. An offline Service Worker caches all visual assets, audio files, and character schemas for full offline resilience.",
      highlights: "Bridges traditional Chinese brush calligraphy with modern cognitive language acquisition, featuring animated stroke orders, 6 HSK tiers, radical morphology, and PWA resilience.",
      labs: [
        {
          name: "Eight Principles of Yong (永) Stroke Order Lab",
          desc: "Master the fundamental 8 stroke types (Ce, Le, Nu, Ti, Ce, Le, Nuo, Zhe) with interactive directional animations."
        },
        {
          name: "Tian Zi Ge Calligraphy Proportion Workbench",
          desc: "Practice spatial balance and stroke distribution inside traditional 9-quadrant and cross grids."
        },
        {
          name: "Radical Decomposition & Phono-Semantic Matrix",
          desc: "Dissect composite characters into their semantic root (meaning) and phonetic component (sound)."
        },
        {
          name: "4-Tone Auditory & Pitch Contour Visualizer",
          desc: "Train pitch discrimination across the 4 Mandarin tones and neutral tone with acoustic feedback."
        },
        {
          name: "HSK 1-6 Progressive Vocabulary Explorer",
          desc: "Systematic tier-based curriculum tracking cumulative character mastery across all HSK levels."
        },
        {
          name: "Chinese Folklore & Legend Story Reader",
          desc: "Bilingual narrative reader featuring classical Chinese fables, idioms (Chengyu), and native audio narration."
        },
        {
          name: "Hanzi Recognition & Tone Quiz Arena",
          desc: "Rapid-fire assessment challenges evaluating character meaning, pinyin accuracy, and tone selection."
        },
        {
          name: "Daily Calligrapher Streak & Mastery Dashboard",
          desc: "Personal learning command center monitoring daily study habits, retention curves, and review queues."
        }
      ]
    }
  },
  {
    id: "koreanflow",
    title: "KoreanFlow",
    subtitle: "Interactive Hangul Block Constructor, 3-Tier Syllable Matrix & Audio Stories",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: koreanflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/KoreanFlow/",
    githubUrl: "https://github.com/rswarke1972-art/KoreanFlow",
    tags: ["PWA", "Korean Learning", "Hangul", "Syllable Combiner", "Batchim Rules", "Audio Stories", "Linguistics"],
    shortDescription: "An interactive Korean language ecosystem and Hangul laboratory featuring real-time syllabic block construction, Batchim sound-change rules, and folklore.",
    details: {
      generalIdea: "KoreanFlow is an interactive Korean language learning ecosystem and cultural portal designed to demystify Hangul (the Korean alphabet) and guide learners from foundational phonetic jamo to fluent reading and cultural dialogue comprehension. Founded on the linguistic ingenuity of King Sejong the Great, KoreanFlow deconstructs the syllabic block structure into its constituent parts: initial consonants (Choseong), medial vowels (Jungseong), and final consonants (Jongseong / Batchim). Learners physically combine jamo into valid Hangul Unicode syllabic blocks in a real-time Combiner sandbox, master complex Batchim assimilation sound-change rules, test listening and character recall in interactive quiz arenas, and explore rich bilingual Korean folklore and modern daily stories accompanied by traditional Daegeum bamboo flute music and gamified streak tracking.",
      keyFeatures: [
        "Interactive Hangul Syllabic Block Combiner: Dynamic sandbox fusing initial consonants, medial vowels, and final batchim into living Unicode characters",
        "Complete Jamo Alphabet Directory: Visual directory detailing all 14 basic consonants, 5 double consonants, 10 basic vowels, and 11 complex vowels",
        "Batchim Sound-Change Assimilation Guide: Interactive phonetic visualizer explaining nasalization, liquidization, t-stops, and tensification",
        "Stroke Order & Writing Pacing: Animated guide demonstrating correct stroke sequences and proportions for each individual Korean jamo",
        "Interactive Bilingual Story Reader: Illustrated Korean narratives with word-by-word romanization toggles, audio narration, and English glosses",
        "Multi-Mode Hangul Quiz Arena: Gamified assessment testing consonant-vowel combinations, auditory discrimination, and vocabulary matching",
        "Instant Korean Lexical Search: High-speed dictionary search querying words by Hangul, revised romanization, or English definitions",
        "Daily Learning Streak & High Score Dashboard: Personal progress tracker encouraging consistent daily review with streak fire counters and trophies",
        "Ambient Daegeum Flute Soundtrack: Traditional Korean bamboo flute backdrop cultivating a peaceful, focused study ambiance",
        "Audio Pronunciation Integration: Crisp native audio samples for every individual consonant, vowel, combined syllable, and story dialogue line",
        "Responsive Clean Hanok Theme: Modern dark-mode interface styled with slate blue and coral accents inspired by traditional Korean architecture",
        "Complete Offline-Ready PWA: Standalone Progressive Web App with custom Service Worker caching (sw.js) and instant homescreen installability"
      ],
      working: "KoreanFlow is engineered with pure modular vanilla JavaScript and modern CSS with zero external framework overhead. The syllabic block combiner utilizes a mathematical algorithmic formula mapping Choseong (initial: 0-18), Jungseong (medial: 0-20), and Jongseong (final: 0-27) indexes to precomputed Korean Unicode codepoints: 0xAC00 + (initial * 588) + (medial * 28) + final. Asynchronous JSON streaming loads lesson datasets (data.json). LocalStorage records user learning streaks, high scores, and saved story checkpoints. An offline Service Worker caches all audio tracks, stylesheets, and fonts for full offline study.",
      highlights: "Unites King Sejong's scientific Hangul block architecture with real-time Unicode synthesis, Batchim phonetics, cultural stories, and PWA resilience.",
      labs: [
        {
          name: "Hangul Syllabic Block Combiner Lab",
          desc: "Real-time interactive sandbox selecting initial consonants, medial vowels, and final batchim with live Unicode synthesis."
        },
        {
          name: "Batchim Phonetic Assimilation Matrix",
          desc: "Visualizer testing how final consonants mutate phonetically when followed by vowels, nasals, or plosives."
        },
        {
          name: "Jamo Articulation & Phonetic Anatomist",
          desc: "Interactive diagram explaining how King Sejong designed consonants to mirror vocal organ tongue and mouth shapes."
        },
        {
          name: "Double Consonants & Diphthong Workshop",
          desc: "Focused practice distinguishing tense consonants (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ) and complex diphthong vowels (ㅘ, ㅝ, ㅢ)."
        },
        {
          name: "Korean Folklore & Modern Story Reader",
          desc: "Bilingual audio-text player featuring cultural legends (Chunhyang, Heungbu) with clickable vocabulary annotations."
        },
        {
          name: "Auditory Discrimination & Listening Quiz Arena",
          desc: "Audio testing challenges distinguishing aspirated, slack, and tense Korean consonants under time pressure."
        },
        {
          name: "Hanok Vocabulary & Idiomatic Expression Vault",
          desc: "Thematic vocabulary explorer cataloging daily Korean life, cuisine, honorifics, and situational dialogue."
        },
        {
          name: "Daily Study Streak & Fluency Command Center",
          desc: "Personal learner analytics dashboard tracking cumulative study minutes, streak milestones, and quiz mastery."
        }
      ]
    }
  },
  {
    id: "latinflow",
    title: "LatinFlow",
    subtitle: "35 Latin-Script Languages, Comparative Romance Linguistics & Sentence Lab",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: latinflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/LatinFlow/",
    githubUrl: "https://github.com/rswarke1972-art/LatinFlow",
    tags: ["PWA", "Romance Languages", "Latin Script", "35 Languages", "Grammar Drills", "Sentence Builder", "Cognates"],
    shortDescription: "A massive comparative polyglot ecosystem and sentence laboratory spanning 35 Latin-script languages, featuring shared cognates, stories, and quizzes.",
    details: {
      generalIdea: "LatinFlow is an expansive multilingual learning ecosystem and comparative linguistic workbench spanning 35 Latin-script languages across European, Romance, and global linguistic families. Tracing the historic lineage of Classical Latin into modern Western and global tongues (including Spanish, French, Italian, Portuguese, Romanian, Catalan, German, Dutch, Scandinavian tongues, and Latin-script world languages like Tagalog, Swahili, and Vietnamese), LatinFlow leverages shared Latinate cognates, grammatical inflection patterns, and mutual lexical intelligibility. Learners master syntax through interactive sentence completion engines, test reading and auditory comprehension through bilingual cultural folklore stories, practice grammar across multi-format quiz arenas, and compare cognates across 35 partitioned linguistic datasets.",
      keyFeatures: [
        "35 Global Latin-Script Languages: Massive multi-language curriculum spanning Romance, Germanic, Slavic, Baltic, and global Latin-script families",
        "Instant Multi-Language Switcher (language.html): Seamlessly transition between 35 languages with localized UI states and dedicated dataset hydration",
        "Interactive Sentence Completion Workbench (sentence.html): Drag-and-drop lexical puzzles reinforcing tense agreements, word order, and case declensions",
        "Bilingual Cultural Story Reader (stories.html): Illustrated literary narratives with synchronized audio, phrase translations, and vocabulary annotations",
        "Comprehensive Multi-Format Quiz Arena (quiz.html): Testing grammar, cognates, vocabulary definitions, and contextual usage across all 35 tongues",
        "Shared Latinate Cognate Mapping: Comparative analysis highlighting how Latin roots branch across Spanish, French, Italian, Portuguese, and English",
        "Romance Verb Conjugation Mechanics: Practice regular and irregular verbs across present, imperfect, preterite, future, and subjunctive moods",
        "Audio Pronunciation Integration: Native speech synthesis and audio samples reinforcing phonetic cadence, elision, and accentuation rules",
        "Dynamic Country Flag Backdrops: Immersive visual themes adapting to each selected language with national flag motifs and cultural aesthetics",
        "Localized Grammar & Vocabulary Schemas: 35 dedicated JSON datasets (data/*.json) maintaining lightweight memory footprints via on-demand loading",
        "Streak & Progress Analytics: Track practice sessions, completed quizzes, reading milestones, and linguistic retention metrics",
        "Complete Offline-Ready PWA: Standalone Progressive Web App powered by custom Service Worker caching (sw.js) for continuous offline polyglot study"
      ],
      working: "LatinFlow is engineered with pure modular vanilla JavaScript and modern CSS with zero external framework overhead. The multi-language architecture is driven by a centralized configuration controller (config.js) that dynamically loads language-specific JSON datasets (e.g. spanish.json, italian.json, french.json) on demand. Dynamic DOM rendering parses sentence puzzle tokens and tracks slot placements. LocalStorage maintains learner language selections, streak counts, and quiz scores across sessions. An offline Service Worker caches all language schemas, flag assets, and styles for uninterrupted offline polyglot learning.",
      highlights: "Uniquely scales comparative Romance and European linguistics across 35 Latin-script languages, uniting cognate science with interactive sentence puzzles, folklore stories, and PWA resilience.",
      labs: [
        {
          name: "35-Language Comparative Cognate Matrix",
          desc: "Cross-analyze vocabulary cognates and sound shifts across Romance, Germanic, and global Latin-script languages."
        },
        {
          name: "Interactive Sentence Puzzle & Syntax Workbench",
          desc: "Assemble grammatically accurate sentences, practicing subject-verb agreement and adjectival placement."
        },
        {
          name: "Romance Verb Conjugation & Tense Arena",
          desc: "Drill regular and irregular verb conjugations across indicative, past preterite, and subjunctive moods."
        },
        {
          name: "Bilingual Folklore & Cultural Story Reader",
          desc: "Immersive narrative player with parallel translations, cultural footnotes, and synchronized audio."
        },
        {
          name: "Etymological Latin Root Family Explorer",
          desc: "Trace how ancient Latin roots (e.g. scribere, videre, portare) evolved into modern European derivatives."
        },
        {
          name: "Multi-Language Vocabulary & Grammar Quiz Lab",
          desc: "Challenge comprehension across 35 languages with adaptive vocabulary recall and syntax tests."
        },
        {
          name: "Linguistic Sound Shift & Phonetic Comparator",
          desc: "Compare phonetic evolutions such as Latin /f/ transitioning to Spanish /h/ or /k/ to French /ʃ/."
        },
        {
          name: "Polyglot Progress & Language Switcher Desk",
          desc: "Personal command center managing active study tracks, daily streaks, and retention across 35 tongues."
        }
      ]
    }
  },
  {
    id: "kurdishflow",
    title: "KurdishFlow",
    subtitle: "Kurdish Language, Dual Script (Sorani & Kurmanji) & Cultural Folklore Portal",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: kurdishflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/KurdishFlow/",
    githubUrl: "https://github.com/rswarke1972-art/KurdishFlow",
    tags: ["PWA", "Kurdish Learning", "Kurmanji", "Sorani", "Dual Script", "Audio Stories", "Linguistics"],
    shortDescription: "An interactive Kurdish language ecosystem celebrating Kurdish heritage across Sorani (Arabic script), Kurmanji (Latin script), folklore, and quizzes.",
    details: {
      generalIdea: "KurdishFlow is an interactive Kurdish language learning ecosystem and cultural portal celebrating the rich linguistic heritage and history of the Kurdish people across Greater Kurdistan and the diaspora. Uniting the two primary Kurdish dialects and writing systems: Sorani (written in the modified Perso-Arabic abjad with full vowel representation) and Kurmanji (written in the Latin-based Hawar alphabet), KurdishFlow provides an intuitive learning pathway from character recognition to conversational reading fluency. Learners master all 4 cursive joining positions of Sorani letters, explore contextual vocabulary examples, test recall in interactive quiz arenas, and immerse themselves in authentic Kurdish folklore stories accompanied by traditional Kurdish Bilûr/Duduk flute melodies.",
      keyFeatures: [
        "Dual-Script Curriculum (Sorani & Kurmanji): Complete support for both Sorani (Arabic-based abjad) and Kurmanji (Latin-based Hawar) orthographies",
        "4-Position Cursive Sorani Alphabet Guide: Visual directory illustrating isolated, initial, medial, and final letter joining forms",
        "Unique Kurdish Vowelization System: Clear instruction on how Sorani represents all vowels explicitly with dedicated letterforms (e.g. ە, ۆ, ێ)",
        "Interactive Bilingual Kurdish Folklore Stories: Illustrated cultural narratives with synchronized audio recitations, phrase breakdowns, and English glosses",
        "Multi-Mode Character & Vocabulary Quiz Arena: Dynamic assessment challenges testing letter identification, script position forms, and lexical meanings",
        "Instant Kurdish Lexical Search Engine: High-speed dictionary search querying words across Sorani script, Latin transliteration, and English definitions",
        "Contextual Word Examples & Sentences: Real-world vocabulary cards featuring audio pronunciation, phonetic transcriptions, and idiomatic expressions",
        "Ambient Kurdish Bilûr Flute Soundscapes: Meditative traditional Kurdish bamboo flute soundtrack evoking the serene atmosphere of the Zagros mountains",
        "Native Bi-Directional Layout Engine: Dynamic switching between RTL (Right-to-Left for Sorani) and LTR (Left-to-Right for Kurmanji and English)",
        "Kurdish Cultural Heritage & Flag Integration: Visual theme styled with traditional Kurdish flag colors (red, white, green, and the 21-ray golden sun)",
        "Localized Lightweight Data Architecture: Asynchronous streaming of structured JSON schemas maintaining instant page responsiveness",
        "Complete Offline-Ready PWA: Standalone Progressive Web App with web app manifest and dedicated touch icons for seamless mobile learning"
      ],
      working: "KurdishFlow is engineered with pure modular vanilla JavaScript and modern CSS with zero external framework overhead. The application decouples logic across dedicated controllers (characters.js, stories.js, storyViewer.js, quiz.js, and search.js). Asynchronous JSON fetching loads the 32KB linguistic database (data.json). The user interface dynamically enforces bidirectional text isolation (RTL for Sorani script and LTR for phonetic transcriptions and English translations). LocalStorage maintains active learning levels, completed quiz scores, and saved bookmarked stories.",
      highlights: "Bridges Kurdish linguistic heritage across Sorani and Kurmanji scripts, uniting 4-position cursive typography, authentic folklore, and offline PWA resilience.",
      labs: [
        {
          name: "Sorani 4-Position Cursive Script Lab",
          desc: "Interactive visualizer detailing how Kurdish Arabic-based letters connect across initial, medial, final, and isolated positions."
        },
        {
          name: "Sorani & Kurmanji Dual-Orthography Converter",
          desc: "Side-by-side comparative matrix mapping Arabic-based Sorani characters to Latin-based Hawar alphabet equivalents."
        },
        {
          name: "Kurdish Vowelization & Diacritic Sandbox",
          desc: "Specialized workshop mastering the unique Kurdish explicit vowel letters (ە for 'e', ۆ for 'o', ێ for 'ê')."
        },
        {
          name: "Zagros Mountain Folklore & Story Reader",
          desc: "Bilingual audio-text player featuring authentic Kurdish tales and cultural legends with clickable vocabulary annotations."
        },
        {
          name: "Phonetic Pronunciation & Audio Listening Chamber",
          desc: "Auditory training module with native voice recitations distinguishing hard and soft consonants (e.g. ڕ vs ر, ڵ vs ل)."
        },
        {
          name: "Interactive Kurdish Lexicon & Search Matrix",
          desc: "High-speed directory querying words, root stems, and definitions across conversational vocabulary categories."
        },
        {
          name: "Character Recognition & Vocabulary Quiz Arena",
          desc: "Assessment module testing script fluency, word meanings, and phonetic spellings under timed conditions."
        },
        {
          name: "Kurdish Cultural Heritage & Idiom Explorer",
          desc: "Thematic discovery deck cataloging traditional proverbs, Newroz celebrations, and daily conversational greetings."
        }
      ]
    }
  },
  {
    id: "farsiflow",
    title: "FarsiFlow",
    subtitle: "Persian Language, Classical Poetic Heritage & Nastaliq Script Studio",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: farsiflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/FarsiFlow/",
    githubUrl: "https://github.com/rswarke1972-art/FarsiFlow",
    tags: ["PWA", "Persian Learning", "Farsi", "Shahnameh", "Classical Poetry", "Speed Typing", "Moshaereh", "Nastaliq Script"],
    shortDescription: "An immersive Persian language learning ecosystem uniting 32-letter Nastaliq script mastery, epic Shahnameh tales, classical Diwan poetry, Mosha'ereh duels, and speed typing.",
    details: {
      generalIdea: "FarsiFlow is a comprehensive Persian language learning ecosystem and cultural sanctuary designed to immerse learners in the beauty, history, and eloquence of the Persian language (Farsi). From mastering the 32-letter alphabet (Alefba) across all four cursive joining forms to reading epic verses from Ferdowsi's Shahnameh and Saadi's Gulistan, FarsiFlow weaves linguistic proficiency with centuries of Iranian literary heritage. The platform features an interactive Persian speed typing laboratory, a Mosha'ereh poetry competition arena where users exchange rhyming verses, dialect comparisons between Tehrani, Dari, and Tajiki, and ambient Persian Ney flute accompaniment for meditative deep study.",
      keyFeatures: [
        "32-Letter Persian Alphabet Studio: Full cursive joining forms (Isolated, Initial, Medial, and Final) with emphasis on unique Persian letters (Pe, Che, Zhe, Gaf)",
        "Epic Shahnameh Story Archive: Heroic mythological tales and narrative chapters from Ferdowsi's Book of Kings with bilingual sentence translations",
        "Saadi's Gulistan Moral Prose: Classical ethical parables and rhythmic rhymed prose (Saj) with line-by-line morphological annotations",
        "Classical Poetry Library: Extensive Diwan collection featuring Hafez, Rumi, Saadi, and Omar Khayyam with meter (Vazn) and rhyme analysis",
        "Mosha'ereh Poetry Competition Game: Interactive traditional poetic duel where learners match the ending letter of an opponent's verse with an authentic Persian poem",
        "Persian Speed Typing Laboratory: In-browser Persian keyboard practice with real-time WPM calculation, accuracy tracking, and literary excerpt drills",
        "Dialect Comparator Matrix: Side-by-side linguistic breakdown of Iranian Persian (Tehrani), Afghan Persian (Dari), and Tajik Persian (Tajiki in Cyrillic)",
        "Daily Verse & Audio Recitation: Dynamic daily poetic verse with native audio pronunciation, translation toggles, and poetic commentary",
        "Interactive Quiz Arena: Multi-mode challenges spanning character recognition, vocabulary flashcards, sentence translation, and listening comprehension",
        "Bidirectional Search Matrix: High-speed bilingual dictionary search indexing Persian vocabulary, phonetic transliterations, and English meanings",
        "Ambient Persian Ney Sanctuary: Built-in traditional Persian flute and musical accompaniments creating a serene learning atmosphere",
        "Progressive Web App Architecture: Offline caching via dedicated Service Worker, web app manifest, and custom home screen icons"
      ],
      working: "FarsiFlow is built with modular vanilla JavaScript, HTML5, and responsive modern CSS without external framework dependencies. The application coordinates specialized controllers (characters.js, stories.js, storyViewer.js, poetry.js, poemViewer.js, poetryGame.js, typing.js, and quiz.js) to provide instant navigation and state management. Extensive asynchronous JSON datasets (including 1.18 MB poetry archives, 1.66 MB typing databases, and multi-part story collections) are dynamically fetched and cached locally. Native RTL (Right-to-Left) rendering is paired with beautiful Nastaliq and Vazirmatn typography for an authentic Iranian aesthetic.",
      highlights: "Seamlessly blends classical Persian literature with modern interactive pedagogy, featuring the traditional Mosha'ereh poetic tournament and Persian speed typing.",
      labs: [
        {
          name: "Persian Alphabet & 4-Position Cursive Studio",
          desc: "Interactive exploration of all 32 Persian letters across Isolated, Initial, Medial, and Final cursive forms, highlighting unique phonemes like Pe, Che, Zhe, and Gaf."
        },
        {
          name: "Shahnameh Epic Narrative Reader",
          desc: "Immersive bilingual story viewer showcasing Ferdowsi's mythological masterpieces, legendary heroes (Rostam and Sohrab), and synced audio playback."
        },
        {
          name: "Gulistan Moral Prose & Wisdom Explorer",
          desc: "Line-by-line literary dissection of Saadi Shirazi's classical maxims, aphorisms, and moral tales with grammatical and vocabulary breakdowns."
        },
        {
          name: "Classical Diwan & Meter Analysis Chamber",
          desc: "Exhaustive Persian poetry collection featuring Ghazals and Rubaiyat from Hafez, Rumi, and Khayyam with poetic meter (Vazn) and rhyming structures."
        },
        {
          name: "Mosha'ereh Traditional Poetic Duel Arena",
          desc: "Interactive recreation of Iran's classical poetic tournament where players must strategically recall and recite verses matching the opponent's closing letter."
        },
        {
          name: "Persian Speed Typing & Keyboard Lab",
          desc: "Real-time typing test studio featuring authentic Persian keyboard layout mapping, speed metrics (WPM), accuracy ratings, and literary excerpt challenges."
        },
        {
          name: "Persian Dialect Comparator (Tehrani, Dari, Tajiki)",
          desc: "Comparative linguistic matrix contrasting Iranian Farsi, Afghan Dari, and Central Asian Tajiki across pronunciation, vocabulary, and Cyrillic/Persian scripts."
        },
        {
          name: "Daily Verse Recitation & Ambient Ney Sanctuary",
          desc: "Daily contemplative poetry cards with native speech synthesis, English translations, and meditative traditional Persian Ney flute audio."
        }
      ]
    }
  },
  {
    id: "idiomverse",
    title: "IdiomVerse",
    subtitle: "Interactive English Idioms, Narrative Context & Etymology Sanctuary",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: idiomverseIcon,
    liveUrl: "https://rswarke1972-art.github.io/IdiomVerse/",
    githubUrl: "https://github.com/rswarke1972-art/IdiomVerse",
    tags: ["PWA", "Idioms", "English Etymology", "Contextual Stories", "Figurative Language", "Vocabulary Mastery", "Interactive Quizzes"],
    shortDescription: "An interactive English figurative language ecosystem featuring contextual story highlighting, etymology origins, comprehensive dictionary archives, and dual-mode quizzes.",
    details: {
      generalIdea: "IdiomVerse is an interactive English figurative language and etymology ecosystem engineered to transform the way learners, writers, and ESL communicators master idioms, colloquialisms, and figurative expressions. Rather than relying on rote memorization or isolated flashcards, IdiomVerse immerses users in engaging narrative stories where idioms naturally occur in context. Readers click on any highlighted idiom to instantly open an interactive modal revealing its figurative meaning, real-world example sentences, practical situational usage rules, and historical origin or cultural etymology. Complementing the narrative reader are a complete searchable dictionary catalog of over 50 idioms, dual-mode situation and meaning quiz arenas with instant scoring, and persistent reading progress tracking.",
      keyFeatures: [
        "Contextual Narrative Reader: Engaging stories weaving figurative idioms organically into real-world and moral story scenarios",
        "Interactive Idiom Highlighting: Dynamic text parser that highlights recognized idioms directly within multi-paragraph prose",
        "Deep Etymology & Origin Modals: Comprehensive breakdowns detailing historical roots from nautical, military, theatrical, and culinary traditions",
        "Practical Usage & Situational Rules: Clear guidance distinguishing formal, informal, professional, and colloquial conversational contexts",
        "All-Idioms Searchable Matrix: Comprehensive directory catalog with responsive grid cards, instant search filtering, and quick-reference definitions",
        "Dual-Mode Quiz Arena: Interactive testing with both Idiom Identification mode and Figurative Meaning Matcher mode",
        "Real-Time Scoreboard & Analytics: Instant answer verification, percentage accuracy tracking, and performance evaluation",
        "Persistent Reading State: LocalStorage-backed bookmarking enabling one-click Continue functionality across reading sessions",
        "Passage Selector & Pagination: Multi-story chapter selector allowing focused practice across varied themes and difficulty tiers",
        "Etymological Heritage Breakdown: Fascinating backstories behind expressions like 'house of cards', 'smart cookie', and 'in the red'",
        "Pure Vanilla Web Architecture: High-performance, zero-framework lightweight client rendering with sub-second page loads",
        "Progressive Web App Readiness: Configured with web app manifest, responsive touch icons, and mobile standalone display modes"
      ],
      working: "IdiomVerse is architected with pure modular JavaScript and responsive semantic CSS with zero external library overhead. The application decouples story data (stories.js) from linguistic metadata (idioms.json). On page initialization, storyLoader.js asynchronously fetches the idioms dictionary, parses raw story text with dynamic regular expressions to wrap matched idioms in interactive spans, and attaches modal click listeners. Reading state and quiz results persist seamlessly in browser LocalStorage, while responsive flexbox and CSS grid layouts ensure flawless presentation across mobile, tablet, and desktop viewports.",
      highlights: "Pioneers narrative-based idiom acquisition by combining contextual story reading with instant historical etymology modals and dual-mode quiz reinforcement.",
      labs: [
        {
          name: "Contextual Narrative Reader & Highlighting Lab",
          desc: "Interactive reading environment where English idioms are dynamically highlighted within multi-paragraph stories with one-click etymology popups."
        },
        {
          name: "Historical Origin & Etymology Dissection Chamber",
          desc: "Deep-dive analytical module investigating the historical roots and centuries-old cultural lore behind famous expressions and colloquialisms."
        },
        {
          name: "Situational Usage & Register Classifier",
          desc: "Interactive guide distinguishing between formal business registers, casual slang, and conversational English to prevent social missteps."
        },
        {
          name: "Dual-Mode Idiom Quiz Arena",
          desc: "Interactive testing sandbox challenging users to select the right idiom for specific scenarios or identify the figurative meaning from distractors."
        },
        {
          name: "Comprehensive Idioms Dictionary Matrix",
          desc: "Searchable reference catalog indexing dozens of idioms with instant real-time keyword filtering, usage notes, and sample sentences."
        },
        {
          name: "Meaning vs Literal Interpretation Studio",
          desc: "Visual cognitive training module contrasting deceptive literal interpretations with true figurative nuances and metaphors."
        },
        {
          name: "Reading Bookmark & Progress Tracker",
          desc: "State-synchronized session manager saving reading progress, completed passages, and comprehension scores across browser sessions."
        },
        {
          name: "Story Passage Selector & Curated Scenarios",
          desc: "Themed story hub featuring corporate intrigue, personal growth, ethical dilemmas, and teamwork narratives designed for idiom immersion."
        }
      ]
    }
  },
  {
    id: "langosphere",
    title: "LangoSphere",
    subtitle: "Multilingual Sentence Syntax Deconstructor & 90+ Language Grammar Parser",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: langosphereIcon,
    liveUrl: "https://rswarke1972-art.github.io/LangoSphere-/",
    githubUrl: "https://github.com/rswarke1972-art/LangoSphere",
    tags: ["PWA", "Syntax Analyzer", "Grammar Parsing", "90+ Languages", "Morpheme Breakdown", "Polyglot Studio", "Linguistics"],
    shortDescription: "A massive multilingual sentence syntax analyzer deconstructing word-by-word morphemes, grammatical rules, and syntactic alternatives across 91 world languages.",
    details: {
      generalIdea: "LangoSphere is a global polyglot syntax deconstruction and grammar analysis powerhouse covering 91 world languages and regional dialects. Moving far beyond simplistic whole-phrase memorization, LangoSphere dissects authentic foreign sentences down to their fundamental morphemes, grammatical markers, and syntactic foundations. Learners select any language from an expansive global directory (spanning Romance, Germanic, Slavic, Semitic, Indo-Aryan, East Asian, Turkic, Austronesian, and African language families) to explore curated sentence catalogs. Selecting any sentence triggers an instant deep-dive breakdown: word-by-word morpheme definitions, grammatical mechanics (such as verb conjugations, noun declensions, pro-drop rules, and particle roles), and idiomatic alternatives with semantic nuances.",
      keyFeatures: [
        "91 Global Languages & Dialects: Comprehensive coverage from Spanish, French, German, Arabic, Japanese, and Hindi to Moroccan Darija, Kutchi, Sindhi, Pashto, and Zulu",
        "Granular Morpheme Deconstruction: Word-by-word tokenized breakdown linking individual foreign words directly to their root lemmas and precise meanings",
        "Grammatical Logic & Rule Engine: In-depth commentary explaining verb conjugations, grammatical gender, grammatical cases, and pro-drop subjects",
        "Syntactic Alternatives Explorer: Side-by-side alternative phrasings showcasing continuous tenses, formal vs colloquial registers, and contractions",
        "Tri-Tier Hierarchical Navigation: Fluid workflow transitioning seamlessly from Language Directory to Sentence Catalog to Deep Detail View",
        "Scroll Position Preservation: Dynamic state caching restoring exact scroll offsets upon navigating back from detailed grammatical breakdowns",
        "Universal Orthography Rendering: Native support for RTL scripts (Arabic, Farsi, Urdu, Sindhi), CJK logographs, Cyrillic, and Latin diacritics",
        "Zero-Latency Client Search: Instantaneous client-side filtering through thousands of pre-tokenized multilingual lesson sentences",
        "Linguistic Typology Coverage: Exposes diverse world sentence structures including SVO, SOV, VSO, and agglutinative morphologies",
        "Accessible Mobile First UI: Clean card-based responsive layout with high-contrast typography engineered for focused linguistic study",
        "Lightweight Vanilla Architecture: Engineered with 100% pure vanilla JavaScript and CSS with zero heavy third-party framework overhead",
        "Progressive Web App Capabilities: Integrated web app manifest, responsive touch icons, and standalone mobile app installation"
      ],
      working: "LangoSphere is engineered as an ultra-lightweight client-side single-page application utilizing pure vanilla JavaScript and semantic HTML5. The application architecture leverages a massive 670KB structured linguistic dataset containing over 20,500 lines of curated lesson objects across 91 languages. The rendering pipeline operates via three clean state views (languageView, listView, and detailView) with seamless DOM toggling. Scroll positions are accurately preserved using window.scrollY caches to allow frictionless navigation through lengthy sentence lists without losing reading context.",
      highlights: "Demystifies foreign sentence structure across an astonishing repository of 91 world languages through word-by-word syntactic deconstruction and grammar breakdowns.",
      labs: [
        {
          name: "91-Language Global Polyglot Directory",
          desc: "Interactive global portal allowing learners to navigate and explore syntactic datasets across 91 major world languages and regional tongues."
        },
        {
          name: "Granular Word-by-Word Morpheme Parser",
          desc: "Interactive tokenization lab deconstructing full foreign sentences into isolated words with their respective root meanings and grammatical tags."
        },
        {
          name: "Deep Grammar & Conjugation Dissector",
          desc: "Analytical studio explaining grammatical nuances including verbal moods, agreement markers, pronoun dropping, and preposition contractions."
        },
        {
          name: "Syntactic Phrasing & Alternative Variator",
          desc: "Comparative engine displaying multiple valid sentence permutations, contrasting continuous aspect, formal phrasing, and everyday colloquialisms."
        },
        {
          name: "Typological Word Order Comparison Matrix",
          desc: "Cross-linguistic structural visualizer highlighting differences between SVO, SOV, VSO, and topic-prominent sentence alignments."
        },
        {
          name: "Bidirectional Script & Glyph Inspector",
          desc: "Typography testing chamber ensuring flawless presentation of right-to-left scripts, complex ligatures, and intricate non-Latin alphabets."
        },
        {
          name: "Linguistic Dialect & Regional Contrast Studio",
          desc: "Comparative workbench examining dialectal divergence across sister tongues such as Kurmanji vs Sorani Kurdish, Dari vs Farsi, and Javanese vs Sundanese."
        },
        {
          name: "Memory Retention & Sentence Construction Sandbox",
          desc: "Cognitive drill laboratory challenging learners to reconstruct target language sentences from memory using verified grammatical building blocks."
        }
      ]
    }
  },
  {
    id: "leadership-strategy-simulator",
    title: "Leadership: The Moral Simulator",
    subtitle: "Crisis Command, Ethical Governance & Incident Strategy Engine",
    category: "games",
    categoryLabel: "Games & Simulations",
    isPwa: true,
    featured: true,
    image: leadershipStrategyIcon,
    liveUrl: "https://rswarke1972-art.github.io/",
    githubUrl: "https://github.com/rswarke1972-art/strategic-simulator",
    tags: ["PWA", "Strategy Simulator", "Crisis Management", "Ethical Leadership", "Incident Command", "Decision Matrix", "Hazmat Tactics"],
    shortDescription: "An advanced crisis response and ethical leadership tactical simulator evaluating real-time decision-making under high-stakes emergencies and moral dilemmas.",
    details: {
      generalIdea: "Leadership: The Moral Simulator (Strategic Simulator) is an advanced crisis command and ethical governance decision engine engineered to test executive judgment under intense psychological and operational pressure. Players step into the role of Incident Commander confronted with life-or-death municipal emergencies ranging from rapid-entry vehicular rescues and multi-story residential infernos to industrial chemical vapor leaks and critical infrastructure collapses. Every tactical directive recalculates interconnected vectors including Command Integrity, Public Trust, Casualty Mitigation, and Secondary Hazard Cascades. Rather than presenting obvious right or wrong choices, the simulator forces commanders to balance speed, resource constraints, ethical liability, and long-term consequences with full post-incident tactical debriefs.",
      keyFeatures: [
        "Multi-Incident Tactical Scenarios: High-stakes emergency operations including Hot Car infant rescues, multi-alarm apartment fires, and refinery Hazmat leaks",
        "Dynamic Interdependent Metrics Engine: Real-time telemetry monitoring Command Integrity, Public Safety, Casualties, and Collateral Damage",
        "Branching Ethical Consequence Trees: Multi-tiered decision paths where immediate interventions create cascading second-order complications",
        "Hazmat & Industrial Hazard Modeling: Realistic vapor cloud dispersion, thermal threshold tracking, and explosive limit containment",
        "Emergency Resource Deployment Matrix: Strategic allocation of tactical units, paramedic triage, structural firefighting, and containment perimeters",
        "Rigorous Commander Evaluation System: Performance ratings spanning Gold Ribbon Commander, Standard Competence, Marginal Command, and Critical Failure",
        "Atmospheric & Sensor Telemetry Feeds: Live in-simulation data logs showing toxicity ppm, structural heat levels, and evacuation perimeters",
        "Time-Critical Pressure Sequences: Urgent response windows forcing decisive executive action under simulated operational stress",
        "Comprehensive Post-Incident Debriefs: Forensic breakdowns of command choices, overlooked hazards, ethical trade-offs, and tactical efficiency",
        "Authentic Incident Command Terminology: Grounded in real-world ICS protocols, tactical priority ladders, and emergency management doctrines",
        "Progressive Web App Offline Resilience: Full offline functionality via dedicated Service Worker, web manifest, and custom home screen icons",
        "Responsive Dark Command Console: Immersive high-contrast UI styled with dark carbon fiber textures, amber warning indicators, and crimson status accents"
      ],
      working: "Leadership: The Moral Simulator is engineered with modular vanilla JavaScript (engine.js, scenarios.js, ui.js, and script.js) and modern CSS with zero external library overhead. The application decouples scenario definitions (scenarios.js) from mathematical simulation states (engine.js). Player decisions invoke the state engine to calculate metric deltas across multi-variable arrays (integrity, casualties, public trust), evaluate condition triggers for branching events, and render real-time telemetry updates to the DOM. Full offline execution is governed by sw.js with asset pre-caching.",
      highlights: "Challenges leaders with realistic, morally complex emergency scenarios where every split-second tactical choice carries immediate human and systemic consequences.",
      labs: [
        {
          name: "Incident Command & Rapid Triage Arena",
          desc: "High-pressure emergency command simulator testing immediate resource allocation, triage prioritization, and initial size-up under time pressure."
        },
        {
          name: "Apartment Inferno & Flashover Containment Lab",
          desc: "Multi-story residential fire tactical exercise managing structural ladder rescues, interior attack teams, and vertical ventilation timing."
        },
        {
          name: "Industrial Hazmat & Vapor Dispersion Chamber",
          desc: "Chemical incident simulator monitoring toxic ppm sensors, explosive limits, downwind evacuations, and containment isolation zones."
        },
        {
          name: "Ethical Calculus & Moral Dilemma Sandbox",
          desc: "Executive decision arena forcing agonizing trade-offs between individual civilian survival, responder safety, and long-term public infrastructure."
        },
        {
          name: "Secondary Hazard Cascade Simulator",
          desc: "Dynamic hazard modeling environment demonstrating how minor delays or miscalculations trigger structural collapse, backdrafts, or gas explosions."
        },
        {
          name: "Emergency Telemetry & Sensor Analytics Deck",
          desc: "Real-time command dashboard monitoring environmental sensors, thermal gradient telemetry, perimeter integrity, and unit status."
        },
        {
          name: "Post-Incident Forensic Debrief Matrix",
          desc: "Comprehensive diagnostic review evaluating decision efficiency, moral integrity, public communication accuracy, and tactical command ratings."
        },
        {
          name: "Urban Crisis Escalation & Riot Containment Studio",
          desc: "Large-scale municipal crisis management simulator balancing law enforcement de-escalation, medical evacuation corridors, and community trust."
        }
      ]
    }
  },
  {
    id: "geoclue",
    title: "GeoClue",
    subtitle: "Deductive World Geography, Cultural Mystery & Clue Investigation Hub",
    category: "games",
    categoryLabel: "Games & Simulations",
    isPwa: true,
    featured: true,
    image: geoclueIcon,
    liveUrl: "https://rswarke1972-art.github.io/GeoClue/",
    githubUrl: "https://github.com/rswarke1972-art/GeoClue",
    tags: ["PWA", "Geography Game", "Deductive Quiz", "197 Countries", "Cultural Trivia", "World Exploration", "Interactive Mystery"],
    shortDescription: "An interactive deductive geography game challenging players to identify mystery nations from subtle cultural, geographical, culinary, and geopolitical clues across 197 countries.",
    details: {
      generalIdea: "GeoClue transforms global geography into an investigative detective game. Rather than quizzing simple flag or capital memorization, GeoClue tests nuanced world knowledge by presenting players with subtle, multi-dimensional clues: culinary traditions, unique topological wonders, historical milestones, biome anomalies, and cultural identity traits. Players examine clues drawn from a vast database of 197 sovereign nations and dependencies, deduce the target country, and choose from dynamically randomized distractors. Every round challenges cognitive deduction, geography literacy, and cultural appreciation while tracking player streaks and high scores.",
      keyFeatures: [
        "197 Sovereign Nations & Territories: Exhaustive geographic database covering every recognized nation across all seven continents",
        "Nuanced Multi-Tier Clue System: Clues blend culinary traditions, geopolitical history, biome ecosystems, and cultural folklore",
        "Dynamic Clue Shuffling Engine: Selects random trios of clues per nation for infinite replayability without repetitive rounds",
        "Smart Distractor Generation: Procedurally selects 3 plausible incorrect country options alongside the target mystery nation",
        "Streak & High Score Tracker: Real-time score counter rewarding persistent deductive streaks and geographic recall accuracy",
        "Instant Visual Feedback: Color-coded UI responses indicating correct answers, revealing missed solutions, and cycling the next mystery",
        "Responsive Glassmorphic UI: Clean dark-mode game box styled with sleek rounded corners, high-contrast typography, and smooth transitions",
        "Ultra-Fast Lightweight Performance: Pure vanilla JavaScript architecture delivering sub-second load times and zero network lag",
        "Offline Progressive Web App: Installable on desktop and mobile with dedicated web app manifest and custom touch icons",
        "Cultural & Anthropological Depth: Highlights intangible cultural heritage, indigenous traditions, and lesser-known historical milestones",
        "Global Geographic Coverage: Equal representation from major world powers to small island nations and landlocked micro-states",
        "Zero-Dependency Client Engine: Entire application logic and 197-country JSON payload run 100% locally in the browser"
      ],
      working: "GeoClue is built with pure modular vanilla JavaScript and modern CSS. On startup, loadCountries() asynchronously fetches the 47KB clue.json database containing 197 country records. Each game round, loadRandomCountry() picks a mystery country, shuffles its 5 clues using an unbiased array randomizer to extract 3 random clues, and calls getOptions() to generate 3 random distractor countries. Player clicks trigger event listeners that validate the selected answer, update the cumulative score, provide immediate visual feedback, and transition seamlessly to the next challenge.",
      highlights: "Elevates geography trivia into an engaging deductive mystery game covering 197 sovereign countries through rich cultural, ecological, and historical clues.",
      labs: [
        {
          name: "Deductive Mystery Country Investigation Lab",
          desc: "Core forensic quiz environment challenging players to deduce secret nations from subtle cultural, culinary, and geographical clues."
        },
        {
          name: "197-Nation Global Clue Database Matrix",
          desc: "Interactive reference catalog indexing 197 sovereign countries with 5 distinct historical, ecological, and anthropological clue vectors per nation."
        },
        {
          name: "Procedural Clue Randomization & Shuffling Chamber",
          desc: "Algorithmic testing studio demonstrating unbiased clue permutation ensuring no two gameplay rounds present identical clue sequences."
        },
        {
          name: "Plausible Distractor & Foil Generator",
          desc: "Option generation sandbox examining geographic and cultural distractor clustering to create engaging, non-obvious multiple-choice options."
        },
        {
          name: "Culinary & Anthropological Heritage Explorer",
          desc: "Thematic exploration module focusing on unique global dishes, regional spices, traditional festivals, and indigenous folklore."
        },
        {
          name: "Ecological Biomes & Topographical Terrain Lab",
          desc: "Environmental deduction arena analyzing clue patterns related to rain shadows, archipelagos, volcanic terrain, and river deltas."
        },
        {
          name: "Score Streak & Cognitive Retention Tracker",
          desc: "Performance analytics dashboard measuring consecutive correct deductions, reaction speed, and regional geographic strengths."
        },
        {
          name: "Micro-State & Island Nation Discovery Sandbox",
          desc: "Specialized exploration deck uncovering obscure geographic marvels, remote Pacific atolls, and landlocked nations often overlooked in standard trivia."
        }
      ]
    }
  },
  {
    id: "unityscript",
    title: "UnityScript",
    subtitle: "AI-Powered Universal Scripture Recitation, Ethics & Comparative Wisdom Platform",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: true,
    featured: true,
    image: unityscriptIcon,
    liveUrl: "https://rswarke1972-art.github.io/UnityScript/",
    githubUrl: "https://github.com/rswarke1972-art/UnityScript",
    tags: ["PWA", "Gemini AI", "Scripture Learning", "Spoken Recitation", "Active Recall", "Comparative Philosophy", "Ethical Dilemmas", "40,000+ Verses"],
    shortDescription: "An AI-powered universal wisdom platform transforming scripture education across 40,090 verified verses through spoken recitation feedback, active recall dilemmas, and comparative synthesis.",
    details: {
      generalIdea: "UnityScript transforms humanity's engagement with sacred and philosophical scriptures from passive rote memorization into an active, multi-modal cognitive journey. Developed for the Google Gemini Fund My Crazy Student Initiative, UnityScript unifies over 40,090 canonical verses across five major traditions: the Bhagavad Gita, the Upanishads, the Dhammapada, the Quran, and the Bible. Powered by Google Gemini Flash, the platform implements a structured 'Focused 6' cognitive learning loop: grounded reading with word-by-word morphemic breakdowns, real-time microphone speech recitation with token alignment badges, context-grounded ethical dilemma quizzes, interactive Socratic mentorship, cross-tradition philosophical synthesis ('The Shared Thread'), and universal semantic wisdom search.",
      keyFeatures: [
        "40,090+ Verified Canonical Verses: Comprehensive library spanning Bhagavad Gita, Upanishads, Dhammapada, Quran, and the Bible",
        "Original Script Typography: Native rendering for Devanagari Sanskrit, Pali, Classical Arabic, and English translations with diacritical support",
        "The 'Focused 6' Learning Cycle: Structured 6-stage cognitive loop (Read, Recite, Quiz, Discuss, Connect, Explore) optimizing moral comprehension",
        "AI-Assisted Spoken Recitation Engine: Real-time speech-to-text token alignment badges color-coding Matched, Minor Variant, and Missing words",
        "Phonetic Accuracy Scoring: Tiered recitation analysis offering instant feedback on spoken pronunciation and chanting cadence",
        "Active Recall Ethical Dilemma Quizzes: Gemini-generated real-world moral scenarios challenging users to apply scriptural ethics to modern crises",
        "Socratic AI Study Companion: Interactive conversational mentor guiding learners through existential doubts, historical context, and ethical tensions",
        "'The Shared Thread' Synthesis: Comparative philosophy engine identifying universal moral parallels across disparate global traditions",
        "Universal Multi-Faith Semantic Search: High-speed cross-scripture search indexing thematic concepts like duty, compassion, and mortality",
        "Audio Timestamp Maker Studio: Built-in audio synchronization tool mapping acoustic timestamps directly to verse tokens",
        "Full PWA Offline Resilience: Service Worker asset caching, standalone manifest, and touch icons enabling complete offline study",
        "Accessible Dark Sanctuary Design: Elegant black obsidian theme (#060608) with luminous golden typography and serene chanting atmosphere"
      ],
      working: "UnityScript is engineered with modular client-side JavaScript, HTML5, and bespoke CSS, backed by a FastAPI backend on Render leveraging the Google Gemini Flash API. The architecture decouples canonical scripture stores (over 50MB of verified JSON corpora across traditions) from cognitive interaction layers. Speech recognition captures spoken recitation via the Web Speech API and performs Levenshtein phonetic distance matching against canonical verse tokens. Offline capability is managed by sw.js, ensuring that canonical texts remain fully accessible without an active internet connection.",
      highlights: "Selected for the Google Gemini Student Initiative, bridging ancient wisdom traditions through AI recitation alignment, ethical dilemmas, and comparative philosophy.",
      labs: [
        {
          name: "Canonical Scripture Reader & Word Breakdown Lab",
          desc: "Interactive reading deck displaying verified verses across Sanskrit, Pali, Arabic, and English with word-by-word morpheme translations."
        },
        {
          name: "AI Spoken Recitation & Phonetic Alignment Studio",
          desc: "Real-time speech evaluation chamber comparing microphone audio against canonical verses with color-coded token alignment badges and accuracy scores."
        },
        {
          name: "Active Recall Ethical Dilemma Sandbox",
          desc: "Cognitive assessment arena generating context-grounded moral conflict scenarios that require applying active scriptural principles."
        },
        {
          name: "Socratic AI Philosophical Mentorship Lounge",
          desc: "Interactive dialogue space powered by Gemini Flash engaging learners in deep Socratic questioning regarding existential doubts and ethics."
        },
        {
          name: "The Shared Thread Cross-Tradition Synthesizer",
          desc: "Comparative philosophy engine mapping universal ethical threads (such as selfless duty, loving-kindness, and justice) across world traditions."
        },
        {
          name: "Universal Multi-Faith Semantic Search Matrix",
          desc: "High-speed semantic search system indexing themes, aphorisms, and moral teachings across more than 40,000 sacred passages."
        },
        {
          name: "Acoustic Timestamp Maker & Alignment Studio",
          desc: "Audio engineering tool mapping audio recitations precisely to verse tokens for synchronized highlight playback."
        },
        {
          name: "Meditative Contemplation & Daily Verse Sanctuary",
          desc: "Contemplative reflection interface delivering daily curated philosophical verses with ambient chanting and commentary."
        }
      ]
    }
  },
  {
    id: "fridge2food",
    title: "Fridge2Food",
    subtitle: "Zero-Waste Pantry Ingredient Matcher, Recipe Engine & Meal Prep Studio",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: fridge2foodIcon,
    liveUrl: "https://rswarke1972-art.github.io/Fridge2Food/",
    githubUrl: "https://github.com/rswarke1972-art/Fridge2Food",
    tags: ["PWA", "Smart Recipe Finder", "Pantry Matcher", "Zero Waste", "Meal Planner", "Nutrition Insights", "Culinary Studio"],
    shortDescription: "A smart culinary ecosystem matching available pantry leftovers with 120+ authentic global recipes, featuring nutritional breakdowns, meal planning, and automated shopping lists.",
    details: {
      generalIdea: "Fridge2Food is a smart culinary assistant and sustainability platform designed to eliminate household food waste, conquer daily cooking fatigue, and promote mindful culinary creation. Rather than requiring users to buy new groceries for every dish, Fridge2Food allows users to check off ingredients currently sitting in their refrigerator and pantry. The intelligent matching algorithm cross-references over 120 authentic recipe compositions, ranking potential meals by ingredient overlap percentage and identifying missing items. Complemented by detailed step-by-step cooking modes, macronutrient nutritional insights (calories, proteins, carbs, fats), weekly meal planning calendars, and smart consolidated grocery shopping lists, Fridge2Food makes gourmet home cooking effortless and eco-conscious.",
      keyFeatures: [
        "Smart Pantry Ingredient Matcher: Dynamic overlap algorithm calculating recipe feasibility based on selected items in your fridge",
        "Extensive 120+ Recipe Catalog: Authentic culinary dishes accompanied by high-resolution imagery and detailed cooking guides",
        "Macronutrient & Nutritional Breakdown: Clear per-serving analytics for calories, proteins, carbohydrates, dietary fats, and fiber",
        "Interactive Step-by-Step Cooking Mode: Distraction-free kitchen view with built-in culinary timers and interactive ingredient checklists",
        "Dietary & Lifestyle Filtering: Instant presets for Vegetarian, Vegan, Gluten-Free, High-Protein, Low-Carb, and Quick-Prep meals",
        "Weekly Meal Prep Planner: Integrated calendar allowing users to schedule breakfasts, lunches, and dinners throughout the week",
        "Automated Grocery Shopping List: Aggregates missing recipe ingredients into an organized, checkable digital shopping list",
        "Prep & Cook Time Categorization: Filter meals by total prep time from rapid 15-minute skillet meals to slow-simmered stews",
        "Cuisine & Regional Diversity: Broad collection covering South Asian, Mediterranean, Pan-Asian, and continental culinary traditions",
        "Full PWA Offline Resilience: Dedicated Service Worker caching, offline fallback screen, and home screen installation support",
        "Custom Pantry Install Modal: In-app guidance tailored for iOS Safari and Android Chrome home screen installation",
        "Responsive Glassmorphic Kitchen UI: Modern dark theme styled with emerald accents (#10b981), warm gold indicators, and smooth card animations"
      ],
      working: "Fridge2Food is architected with modular vanilla JavaScript, responsive CSS3 variables, and semantic HTML5 without external framework overhead. The client-side search engine calculates Jaccard similarity and overlap coefficients between user-selected pantry tags and the recipe database schema. State management synchronizes favorite recipes, active weekly meal plans, and shopping list checkboxes directly into browser LocalStorage. Full offline resilience is managed through sw.js, pre-caching the core application shell, recipe databases, and UI assets for zero-latency kitchen access.",
      highlights: "Tackles household food waste with an intelligent pantry ingredient matching engine, 120+ recipe library, weekly meal scheduler, and offline kitchen PWA capability.",
      labs: [
        {
          name: "Pantry Leftover Matching & Overlap Lab",
          desc: "Interactive ingredient selection sandbox evaluating pantry combinations against 120+ dishes with percentage feasibility rankings."
        },
        {
          name: "Macronutrient Profiler & Caloric Calculator",
          desc: "Nutritional analysis module calculating real-time caloric, protein, carbohydrate, and fat metrics based on recipe servings."
        },
        {
          name: "Hands-Free Step-by-Step Cooking Suite",
          desc: "Kitchen-optimized cooking interface featuring step-by-step progression, integrated countdown timers, and bold readability."
        },
        {
          name: "Dietary Restriction & Allergen Filter Engine",
          desc: "Interactive sorting laboratory testing complex dietary filters including vegan, gluten-free, dairy-free, and high-protein preferences."
        },
        {
          name: "Weekly Meal Planning & Schedule Matrix",
          desc: "7-day culinary calendar studio for organizing balanced daily meals, batch prep sessions, and leftovers utilization."
        },
        {
          name: "Automated Missing Ingredient Consolidator",
          desc: "Smart shopping list utility aggregating missing pantry items across planned weekly recipes into a consolidated checklist."
        },
        {
          name: "Prep Time & Culinary Efficiency Analyzer",
          desc: "Time-management benchmark measuring total prep, cooking, and cleanup overhead across varying culinary techniques."
        },
        {
          name: "Offline Kitchen Resilience & PWA Cache Sandbox",
          desc: "Network simulation chamber testing offline recipe accessibility, LocalStorage persistence, and Service Worker background caching."
        }
      ]
    }
  },
  {
    id: "codemastery",
    title: "CodeMastery",
    subtitle: "Interactive DSA & Algorithm Problem Solving Arena (C, C++, Java, Python)",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: true,
    featured: true,
    image: codemasteryIcon,
    liveUrl: "https://rswarke1972-art.github.io/CodeMastery/",
    githubUrl: "https://github.com/rswarke1972-art/CodeMastery",
    tags: ["PWA", "Coding Platform", "Data Structures", "Algorithms", "DSA Practice", "C++", "Python", "Problem Solving"],
    shortDescription: "An interactive programming practice ecosystem featuring dual practice and timed test modes, structured C/C++ and Python DSA solutions, and categorized algorithmic challenges.",
    details: {
      generalIdea: "CodeMastery is an interactive coding practice and algorithm mastery ecosystem designed to empower computer engineering students, self-taught programmers, and interview candidates to master core Data Structures and Algorithms. Covering fundamental to advanced computer science topics (including Arrays, Strings, Matrices, Linked Lists, Stacks, Queues, Recursion, Searching, Sorting, and Binary Trees), CodeMastery provides a seamless dual-mode learning environment. In Practice Mode, learners inspect problem statements, study syntax-highlighted reference solutions in C/C++ and Python, code in an in-browser scratchpad editor, and review step-by-step logic explanations. In Test Mode, learners challenge themselves under exam conditions to verify algorithmic recall, syntax accuracy, and problem-solving speed.",
      keyFeatures: [
        "Dual Practice & Test Modes: Switch between exploratory guided study with full logic explanations and timed assessment testing",
        "Multi-Language Algorithmic Support: High-quality reference implementations across C, C++, and Python (problems.js and pythonProblems.js)",
        "Categorized Problem Directory: Structured taxonomy organizing challenges across Arrays, Strings, Searching, Sorting, Linked Lists, and Trees",
        "In-Browser Code Scratchpad: Integrated code editor area allowing learners to type, test, and refine algorithms directly in the browser",
        "Step-by-Step Logic Dissections: Detailed conceptual commentary breaking down pointer movements, recursion stacks, and loop invariants",
        "Time & Space Complexity Insights: Explicit Big-O asymptotic analysis evaluating optimal runtime and memory overhead",
        "One-Click Language Switcher: Seamless toggle instantly switching reference code and explanations between C/C++ and Python",
        "Persistent State Management: Remembers active problem selections, chosen language mode, and draft code across browser sessions",
        "Linear Problem Pagination: Intuitive Previous/Next navigation enabling focused, distraction-free progression through algorithmic curricula",
        "Clean Cybernetic Terminal Aesthetic: High-contrast dark IDE interface designed to reduce cognitive fatigue during prolonged coding sessions",
        "Offline Progressive Web App: Installable on desktop and mobile with dedicated web app manifest, custom touch icons, and offline caching",
        "Zero-Dependency Lightweight Engine: Ultra-fast vanilla JavaScript architecture delivering instant problem switching with zero compile latency"
      ],
      working: "CodeMastery is built with modular client-side JavaScript, semantic HTML5, and responsive CSS. The application architecture decouples extensive problem datasets (problems.js and pythonProblems.js totaling over 220KB of structured algorithmic challenges) from the presentation layer. Dedicated controllers (practice.js, test.js, select.js) dynamically render problem descriptions, code displays, and explanations based on user language preferences stored in LocalStorage. Seamless DOM updates ensure instantaneous transitions between coding challenges without full-page reloads.",
      highlights: "Provides structured, interview-ready DSA curricula across C/C++ and Python with dual practice-test workflows, syntax breakdowns, and Big-O analysis.",
      labs: [
        {
          name: "Interactive Practice & Scratchpad Lab",
          desc: "Guided coding sandbox featuring problem statements, reference code displays, step-by-step logic explanations, and in-browser code editor."
        },
        {
          name: "Timed Assessment & Recall Test Arena",
          desc: "Simulated exam chamber testing algorithmic memory, syntax mastery, and problem-solving speed without reference solution aids."
        },
        {
          name: "Cross-Language Syntax Bridge (C/C++ vs Python)",
          desc: "Comparative programming lab contrasting manual memory pointers and static types in C/C++ with idiomatic dynamic slicing in Python."
        },
        {
          name: "Array & Matrix Algorithm Manipulation Studio",
          desc: "Hands-on algorithmic workbench covering two-pointer techniques, sliding windows, prefix sums, and multi-dimensional matrix rotations."
        },
        {
          name: "Linked List & Pointer Traversal Lab",
          desc: "Deep-dive visualization exercise practicing singly and doubly linked list reversals, cycle detection, and sentinel node patterns."
        },
        {
          name: "Searching, Sorting & Big-O Complexity Deck",
          desc: "Algorithmic benchmark analyzing time/space trade-offs across binary search, merge sort, quicksort, and insertion sort."
        },
        {
          name: "Recursion Stack & Backtracking Chamber",
          desc: "Cognitive drill environment tracing recursive call stacks, base case conditions, and combinatorial permutation trees."
        },
        {
          name: "Progressive Web App Offline Coding Studio",
          desc: "Network-resilient coding environment verifying offline problem access, local drafting persistence, and instant terminal rendering."
        }
      ]
    }
  },
  {
    id: "react-calculator",
    title: "React Calculator",
    subtitle: "Advanced Scientific Computation Suite & Natural Textbook Display Engine",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: true,
    featured: true,
    image: calculatorIcon,
    liveUrl: "https://rswarke1972-art.github.io/react-calculator/",
    githubUrl: "https://github.com/rswarke1972-art/react-calculator",
    tags: ["React Calculator", "Scientific Calculator", "PWA", "Mathematics", "Natural Display", "Math Parser"],
    shortDescription: "An advanced scientific calculator featuring an authentic natural textbook display, cursor-driven multi-line expression editing, shift modifiers, and comprehensive engineering mathematics tools.",
    details: {
      generalIdea: "An advanced, feature-rich scientific calculation suite built with modern web technologies, designed to provide a state-of-the-art computational workspace that surpasses standard hardware devices. The application features a natural textbook LCD display that renders mathematical formulas with authentic typographical structures, such as nested vertical fractions, radical square roots, superscripts, and brackets, matching formal math notation. Users navigate through multi-line expressions with a directional D-pad, access extensive secondary mathematical functions through an intuitive Shift modifier system, compute arbitrary-base logarithms, and leverage persistent answer memory registers for continuous multi-stage scientific and engineering workflows.",
      keyFeatures: [
        "Tactile Hardware-Style Interface: Responsive tactical button layout, directional navigation pad, Shift modifier keys, and high-contrast dual-line LCD matrix display.",
        "Natural Textbook Display (MathPrint): Expressions render in authentic mathematical formatting with nested fractions, radicals, powers, and brackets rather than flat linear strings.",
        "Two-Line Matrix Expression Editor: Edit expressions interactively with left/right cursor positioning, character insertions, deletions (DEL), and comprehensive clear (AC).",
        "Shift Key Modifiers & Alternate Functions: Dedicated SHIFT toggle unlocking secondary mathematical capabilities, inverse trigonometry, cube roots, powers of 10, and mathematical constants.",
        "Arbitrary Base Logarithms (log_a(b)): Direct evaluation of logarithms with custom bases alongside standard natural log (ln) and base-10 logarithms.",
        "Comprehensive Trigonometric & Hyperbolic Suite: Complete sin, cos, tan, and their inverses with instant degree (DEG), radian (RAD), and gradian (GRAD) mode switching.",
        "Multi-Tier Powers, Roots & Reciprocals: Square (x^2), arbitrary power (x^y), square root (sqrt), cube root, and inverse (x^-1) evaluation with exact mathematical precedence.",
        "Scientific Notation & Engineering Constants: Native x10^x exponential entry, standard scientific notation formatting, and high-precision floating-point arithmetic.",
        "Ans Memory & Register State: Dedicated Ans key instantly retrieves the previous calculation result for seamless multi-step algebraic chaining and iterative computations.",
        "Tactile Audio & Visual Feedback: Realistic button press depression styling, tactical feedback sounds, and visual active indicators on the virtual LCD screen.",
        "Power State & Session Memory: Hardware ON/OFF simulation preserving expression history, memory registers, and display state across interactive sessions.",
        "Progressive Web App Architecture: Fully responsive mobile and desktop PWA installable as a standalone offline desktop utility with zero network latency."
      ],
      working: "Constructed with semantic HTML5 and responsive CSS Grid modeling an ergonomic scientific hardware chassis and tactile button matrix. An expression tokenizer and mathematical layout engine parse user keystrokes into structured DOM nodes, rendering fractions with dynamic vinculums and exponents with real-time typography. The evaluation pipeline resolves operators in accordance with mathematical order of operations (BODMAS/PEMDAS), while managing floating-point precision, syntax validation, and error boundaries. Complete PWA manifest and service worker integration deliver sub-millisecond offline launches and standalone desktop execution.",
      highlights: "Tactile physical feel with natural textbook math rendering, full PWA offline standalone support, and an expanded suite of high-precision scientific calculation capabilities.",
      labs: [
        {
          name: "Natural Textbook Expression Lab",
          desc: "Interactive sandbox for crafting multi-level mathematical expressions with real-time nested fraction, radical, and bracket layout rendering."
        },
        {
          name: "Arbitrary Base Logarithm Sandbox",
          desc: "Dedicated computational workbench evaluating complex logarithmic expressions with custom bases, natural logarithms, and power-of-10 progressions."
        },
        {
          name: "Fraction & Mixed Radical Evaluator",
          desc: "Testbench analyzing continuous fraction division, nested square roots, and higher-order radicals with exact arithmetic precedence."
        },
        {
          name: "Trigonometric & Angle Mode Workbench",
          desc: "Precision calculation lab comparing sinusoidal, cosinusoidal, and tangent curves across Degree, Radian, and Gradian unit spaces."
        },
        {
          name: "Multi-Tier Exponent & Power Studio",
          desc: "Interactive laboratory testing arbitrary exponential powers, negative indices, and nested power sequences with visual textbook indicators."
        },
        {
          name: "Scientific Notation & Engineering Exponent Deck",
          desc: "Experiment station for large-scale astrophysical and microscopic calculations using x10^x scientific notation and floating-point accuracy."
        },
        {
          name: "Memory Register & Ans Recall Chamber",
          desc: "Workflow simulator demonstrating cumulative algebraic chaining, intermediate result caching, and Ans variable recurrence in multi-stage equations."
        },
        {
          name: "Offline PWA Standalone Console",
          desc: "Simulation chamber for testing standalone Progressive Web App installation, tactile button responsiveness, and instant offline caching."
        }
      ]
    }
  },
  {
    id: "reminder-system",
    title: "Reminder System",
    subtitle: "Smart Habit Tracker, Task Scheduler & Weekly Planner",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: true,
    image: reminderIcon,
    liveUrl: "https://rswarke1972-art.github.io/reminder/",
    githubUrl: "https://github.com/rswarke1972-art/reminder",
    tags: ["Productivity", "Task Scheduler", "Habit Tracker", "Weekly Planner", "Browser Extension", "Alarm Engine"],
    shortDescription: "A productivity-focused task and reminder platform helping individuals schedule daily routines, track weekly priorities, and reinforce positive habit streaks.",
    details: {
      generalIdea: "A focused personal productivity and workflow automation suite engineered to eliminate task procrastination and optimize daily time allocation. Built with an intuitive browser extension and web interface, Reminder System combines time-targeted task scheduling with an interactive 7-day weekly planner matrix. Users assign tasks to specific weekdays or designate them as daily recurring routines, configure granular hour-and-minute alert triggers, track real-time completion percentages via an interactive progress bar, and cultivate consistent discipline through persistent streak milestones backed by background alarm listeners and native desktop notifications.",
      keyFeatures: [
        "Dual-Wheel Precision Time Picker: Granular 24-hour and 60-minute selection menus for exact timestamp scheduling without manual text parsing errors.",
        "Daily Recurring Routine Engine: One-click repeat toggle that automatically propagates essential daily habits across every calendar day with automatic interval renewal.",
        "7-Day Weekly Planner Matrix: Segmented weekday navigation (Monday through Sunday) enabling focused day-by-day task planning and context switching.",
        "Dynamic Progress Bar & Completion Analytics: Real-time visual progress indicator computing percentage completion of scheduled tasks for the active view.",
        "Gamified Habit Streak Tracker: Persistent daily streak counter celebrating consecutive 100% completion days to build compounding productivity momentum.",
        "Background Alarm Dispatcher: Low-overhead background alarm service utilizing browser alarm APIs to maintain active wakeups even when the popup is closed.",
        "Native Desktop Notification Triggers: High-priority desktop notifications displaying task titles and timing prompts directly to the user's operating system.",
        "Context-Aware Task Filtering: Intelligent view filtering that separates day-specific actions from global recurring routines while maintaining unified data integrity.",
        "Frictionless One-Click Task Status: Instant checkoff toggle with visual strikethrough styling and quick deletion with automatic alarm deregistration.",
        "Zero-Latency Local Storage Engine: Client-side asynchronous storage persistence ensuring immediate data retrieval, offline reliability, and privacy.",
        "Responsive Dark Glassmorphic Interface: High-contrast modern interface with glowing status indicators, tactical action buttons, and clear typography.",
        "Dual Deployment Extension & Web Utility: Architected to operate both as an always-accessible browser extension popup and a standalone web companion."
      ],
      working: "Built with semantic HTML5, modern CSS3 flexbox/grid layout, and asynchronous WebExtension storage APIs (browser.storage.local). When a task is registered with specific hour and minute offsets, an asynchronous background alarm (browser.alarms.create) is queued with either one-time epoch triggers or recurring 1440-minute intervals. The background service worker listens for alarm events (browser.alarms.onAlarm), correlates the triggered alarm ID against stored task records, and dispatches native operating system notifications via browser.notifications.create. Progress metrics and streak counters calculate dynamically upon task completion hooks, updating DOM state and localStorage synchronously.",
      highlights: "Zero-friction task scheduling with automated 24-hour recurring alarms, 7-day weekly workflow segmentation, and persistent streak gamification.",
      labs: [
        {
          name: "Weekly Planner & Day Matrix Lab",
          desc: "Interactive sandbox for organizing multi-day schedules, testing weekday isolation, and balancing weekly workload distribution."
        },
        {
          name: "Precision Time Picker & Alarm Studio",
          desc: "Configuration workbench testing exact hour and minute timestamp scheduling, edge-case midnight crossovers, and immediate alarm dispatching."
        },
        {
          name: "Recurring Daily Routine Engine",
          desc: "Simulation testbed evaluating 1440-minute cyclical habit renewal, multi-day recurrence persistence, and automatic task repopulation."
        },
        {
          name: "Habit Streak & Milestone Tracker",
          desc: "Gamification laboratory monitoring cumulative completion streaks, zero-task validation guards, and milestone celebration logic."
        },
        {
          name: "Real-Time Completion Progress Deck",
          desc: "Analytics simulator modeling dynamic percentage progress bar animations and active-view filtering based on task checkoffs."
        },
        {
          name: "Background Alarm & Notification Dispatcher",
          desc: "Technical testbench verifying browser background service workers, alarm registration lifecycles, and OS notification payloads."
        },
        {
          name: "Local Storage & State Synchronization Vault",
          desc: "Data resilience chamber testing asynchronous storage transactions, task deletion cleanups, and cross-session persistence."
        },
        {
          name: "Browser Extension Popup & Web Responsive Bench",
          desc: "Display environment testing ergonomic popup dimensions, dark glassmorphic styling, and cross-browser extension compatibility."
        }
      ]
    }
  },
  {
    id: "bookflow",
    title: "BookFlow",
    subtitle: "Happiness Library & Digital Bookstore PWA with Offline Caching",
    category: "pwa",
    categoryLabel: "Web App & PWA",
    isPwa: true,
    featured: true,
    image: bookflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/BookFlow/",
    githubUrl: "https://github.com/rswarke1972-art/BookFlow",
    tags: ["PWA", "Digital Library", "Book Store", "Offline Reading", "Auth", "Service Worker"],
    shortDescription: "A modern digital library and bookstore Progressive Web App featuring authentication, offline caching, reading progress tracking, and curated collections.",
    details: {
      generalIdea: "BookFlow (Happiness Library) delivers a full-featured, accessible digital reading ecosystem engineered to democratize access to timeless classic literature, philosophical treatises, scientific breakthroughs, and self-help classics. Architected as an offline-first Progressive Web App, BookFlow enables readers to discover curated literary works, read complete public-domain volumes directly within the browser via an integrated PDF reader, and continue reading anywhere without an active internet connection. The platform integrates user authentication for personalized bookshelf curation, automated reading history tracking, interactive category filtering, and an administrative book ingestion engine.",
      keyFeatures: [
        "Progressive Web App Architecture: Fully installable desktop and mobile PWA with Service Worker offline caching, background asset sync, and instant load speeds.",
        "Curated Public Domain Masterpieces: Direct access to classic works including Marcus Aurelius's Meditations, James Allen's As a Man Thinketh, and Jane Austen's Pride and Prejudice.",
        "In-Browser PDF Reader Integration: Full-featured embedded PDF reading engine allowing distraction-free reading without third-party desktop viewers.",
        "Multi-Category Genre Matrix: Instant filtering across Self Help, Philosophy, Fiction, Science, and History with dynamic category tab navigation.",
        "User Authentication & Session Management: Secure user registration and login workflows supporting personalized reading sessions and bookshelf state.",
        "Personalized Favorites & Bookshelf: One-click favorite toggling to curate private reading collections and custom wishlists stored persistently.",
        "Reading History & Recently Viewed: Automated tracking of previously opened books allowing readers to resume reading exactly where they left off.",
        "Dynamic Live Search & Metadata Index: Fast real-time text searching across book titles, authors, descriptions, and ISBN records.",
        "Adaptive Light & Dark Themes: Dual theme toggle engineered for day reading and high-contrast nighttime immersion with persistent preference storage.",
        "Administrative Catalog Management: Built-in admin panel empowering curators to upload new books, update covers, and manage catalog metadata.",
        "Responsive Card & Carousel Layouts: Elegant book cover presentation with popular selections, curated recommendations, and responsive grid layouts.",
        "Zero-Latency Client-Side Cache: Optimized local JSON and browser cache storage enabling complete offline library browsing and continuous reading."
      ],
      working: "Constructed with semantic HTML5, modern CSS3 custom properties for dynamic theming, vanilla JavaScript ES6 modules, and Service Worker caching (service-worker.js). User credentials and session tokens are validated against client-side authentication handlers and RESTful backend endpoints. Book catalog records and cover assets are indexed in books.json and cached in the browser Cache Storage API via Cache-First and Stale-While-Revalidate network strategies. Reading progression, favorites, and history synchronize to localStorage and remote JSON data stores with optimistic UI updates.",
      highlights: "Offline-first PWA digital library with embedded PDF reading, personal favorites curation, multi-genre navigation, and administrative book catalog controls.",
      labs: [
        {
          name: "PWA Offline Caching & Sync Studio",
          desc: "Interactive testbench evaluating Service Worker asset pre-caching, offline PDF retrieval, and Cache Storage resilience under airplane mode."
        },
        {
          name: "Multi-Genre Catalog Filtering Deck",
          desc: "Exploration laboratory testing dynamic tag sorting, multi-category book aggregation, and fast search indexing across diverse literary genres."
        },
        {
          name: "In-Browser PDF Reader Sandbox",
          desc: "Reading environment analyzing PDF rendering performance, page navigation controls, and typography scaling across varied screen dimensions."
        },
        {
          name: "User Authentication & Session Gate",
          desc: "Security and session simulator verifying user login workflows, token persistence, and role-based access for library members and administrators."
        },
        {
          name: "Personal Favorites & Shelf Manager",
          desc: "Workflow station for testing custom collection bookmarking, optimistic UI updates, and persistent user wishlist synchronization."
        },
        {
          name: "Reading History & Resume Engine",
          desc: "Analytics simulator monitoring recently viewed book histories, session timestamps, and seamless reading progress restoration."
        },
        {
          name: "Adaptive Day-Night Theme Workbench",
          desc: "Visual display sandbox testing CSS custom property transitions, high-contrast typography, and user color-scheme preference persistence."
        },
        {
          name: "Administrative Book Ingestion Console",
          desc: "Curator workbench simulating administrative book uploads, cover URL validation, metadata formatting, and catalog schema integrity."
        }
      ]
    }
  },
  {
    id: "ehsaas-e-alfaaz",
    title: "Ehsaas-e-Alfaaz",
    subtitle: "Original Hindi & Urdu Shayari, Ghazals & Literary Archive",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: true,
    featured: true,
    image: ehsaasIcon,
    liveUrl: "https://rswarke1972-art.github.io/Ehsaas-e-Alfaaz/",
    githubUrl: "https://github.com/rswarke1972-art/Ehsaas-e-Alfaaz",
    tags: ["Poetry", "Shayari", "Hindi Literature", "Urdu Poetry", "Devanagari", "PWA", "Cultural Archive"],
    shortDescription: "A personal literary archive celebrating 95 original Hindi and Urdu shayari compositions, featuring authentic Devanagari calligraphy typography, 5 emotional categories, instant search, and copy-to-clipboard utilities.",
    details: {
      generalIdea: "Ehsaas-e-Alfaaz (meaning 'The Feelings of Words') is a heartfelt personal anthology and cultural preservation platform comprising 95 original Hindi and Urdu poetic compositions (shayari, nazms, and couplets). Designed with a warm parchment-paper aesthetic that honors classical literary traditions, the archive provides an intimate reading space across five distinct emotional landscapes: Sadness (Dard), Motivation (Hausla), Spirituality (Ruhaniyat), Life (Zindagi), and Love (Ishq). The application pairs deep literary expression with seamless digital accessibility, featuring authentic Noto Serif Devanagari typography, real-time multi-field search indexing, one-click clipboard sharing, and offline PWA capability.",
      keyFeatures: [
        "Anthology of 95 Original Compositions: Extensive collection of original Hindi and Urdu couplets and nazms exploring multifaceted human experiences.",
        "5 Emotional Category Classifications: Granular categorization spanning Sadness, Motivation, Spirituality, Life, and Love for intuitive mood-based discovery.",
        "Authentic Noto Serif Devanagari Typography: Elegant high-readability serif typeface configured with double line-height for optimal poetic stanza presentation.",
        "Warm Classical Parchment Aesthetic: Handcrafted ivory and sand background palette (#f7f2e8) paired with gentle card elevations reminiscent of antique manuscripts.",
        "Real-Time Multi-Field Search Engine: Instant filtering across titles, categories, and poetic verse content without page reloads or latency.",
        "One-Click Clipboard Sharing Utility: Integrated copy button with visual state feedback ('Copied!') allowing effortless sharing to messaging and social channels.",
        "Context-Preserving Card Layout: Dynamic DOM rendering that respects stanza line breaks (white-space: pre-line) preserving original poetic meter and cadence.",
        "Standalone Progressive Web App: Installable PWA with custom burgundy branding (#5b1d28) and offline caching for undisturbed reading anywhere.",
        "Zero-Dependency Vanilla Architecture: Ultra-lightweight codebase executing with near-zero bundle weight, instantaneous load speeds, and high battery efficiency.",
        "Responsive Mobile Reading Experience: Fluid container scaling and touch-friendly controls tailored for smartphone reading, tablets, and desktop displays.",
        "Cultural Literary Preservation: Digital repository designed to celebrate Hindustani literary heritage, poetic nuance, and lyrical introspections.",
        "Extensible JSON Schema Engine: Clean decoupling of poetic data and presentation layer enabling effortless addition of future ghazals and nazms."
      ],
      working: "Constructed with clean semantic HTML5 and vanilla CSS incorporating Google Fonts Noto Serif Devanagari. Poetic records are asynchronously ingested from an external JSON repository (data.json) containing structured title, category, and verse strings. An input event listener executes substring matching across title, body, and category attributes, dynamically clearing and rebuilding the card container. The clipboard API handles secure asynchronous text copying with timed UI feedback states. Web app manifest integration provides standalone mobile and desktop launcher installation.",
      highlights: "95 original Hindi and Urdu poetic works presented with classical parchment styling, real-time multi-field search, and one-click social sharing.",
      labs: [
        {
          name: "Poetic Meter & Typographic Stanza Lab",
          desc: "Reading laboratory analyzing line-height ratios, Devanagari ligatures, and white-space cadence across varied screen resolutions."
        },
        {
          name: "Emotional Mood & Thematic Matrix",
          desc: "Exploration workbench categorizing poetic resonance across Love, Grief, Spiritual Introspection, Life Lessons, and Motivational Fire."
        },
        {
          name: "Real-Time Substring Search Testbed",
          desc: "Search performance sandbox evaluating instantaneous text indexing across 95 multi-line couplets, category keys, and titles."
        },
        {
          name: "Clipboard Integration & Social Share Gate",
          desc: "Interactive verification deck testing navigator.clipboard API support, timeout reset transitions, and mobile copy behavior."
        },
        {
          name: "Classical Parchment & Palette Studio",
          desc: "Aesthetic design workbench testing warm ivory-sand contrasting, card shadow elevations, and reading eye-strain reduction."
        },
        {
          name: "PWA Standalone & Offline Reading Console",
          desc: "Progressive Web App installation sandbox verifying custom manifest parameters, burgundy theme matching, and offline access."
        },
        {
          name: "JSON Data Schema & Scalability Vault",
          desc: "Architecture workbench analyzing JSON serialization, unicode Devanagari character encoding, and extensible poetry ingestion."
        },
        {
          name: "Hindustani Literary & Sentiment Sandbox",
          desc: "Curatorial analysis environment exploring linguistic nuances, Urdu-Hindi vocabulary blending, and lyrical metaphorical depth."
        }
      ]
    }
  },
  {
    id: "amharicflow",
    title: "AmharicFlow",
    subtitle: "Ethiopic Ge'ez Fidel Script, Vocabulary & Cultural Immersion",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: amharicflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/AmharicFlow/",
    githubUrl: "https://github.com/rswarke1972-art/AmharicFlow",
    tags: ["PWA", "Amharic", "Ethiopic Script", "Ge'ez", "Fidel Abugida", "Language Learning", "Ethiopian Culture"],
    shortDescription: "Master the Amharic language and ancient Ethiopic Ge'ez Fidel script through interactive 142-character matrix grids, digital stroke calligraphy, SM-2 spaced repetition flashcards, and cultural stories.",
    details: {
      generalIdea: "AmharicFlow is an immersive language-learning ecosystem dedicated to Amharic, the national language of Ethiopia, and its ancient Ethiopic (Ge'ez) script known as the Fidel abugida. The application guides learners from fundamental character recognition to conversational and cultural fluency. With 142 distinct Fidel characters categorized into their classic seven vowel orders (Ge'ez, Ka'ib, Salis, Rabi, Hamis, Sadis, and Sabi), users master reading, writing, and phonetics. The platform integrates dynamic calligraphy stroke tracing, SM-2 spaced repetition flashcards, contextual vocabulary decks, conversational sentence builders, interactive cultural stories with synchronized audio highlighting, and offline PWA reliability.",
      keyFeatures: [
        "Complete 142-Character Fidel Abugida Matrix: Full catalog of Ethiopic consonants mapped across the traditional seven vowel orders (Ge'ez to Sabi).",
        "Interactive Calligraphy Stroke Canvas: Digital canvas for handwriting practice with real-time vector stroke tracing, accuracy feedback, and character guides.",
        "SM-2 Spaced Repetition Flashcards: Algorithmic study system that schedules reviews based on recall strength to guarantee long-term script retention.",
        "Comprehensive Core Vocabulary Decks: Curated vocabulary categories with authentic Romanization, English translations, and audio pronunciation.",
        "Contextual Sentence Construction Engine: 50 progressive conversational sentences reinforcing grammatical particles, verb conjugations, and syntax.",
        "Interactive Cultural Story Reader: 15 engaging Ethiopian narratives and folktales with synchronized sentence-by-sentence audio playback and word tooltips.",
        "Granular Consonant Family Mastery: Real-time progress analytics showing percentage mastery across individual consonant branches and vowel series.",
        "Daily Deterministic Challenge: Structured daily learning loop combining pronunciation practice, character stroke tracing, and recall quizzes.",
        "Dynamic Assessment & Listening Quizzes: Multi-format quizzes testing visual character recognition, audio phonetic matching, and translation accuracy.",
        "Progressive Web App Offline Caching: Service worker architecture providing seamless offline access to all character grids, audio samples, and stories.",
        "Modern Dark Glassmorphic Theme: Premium user interface with radiant emerald, gold, and ruby accents inspired by the Ethiopian tricolor.",
        "Client-Side Gamification & Streaks: Localized XP reward engine, streak milestones, and achievement badges celebrating consistent daily practice."
      ],
      working: "Engineered as an offline-first Progressive Web App using vanilla JavaScript ES6, CSS3 custom properties, and service worker caching (sw.js). Linguistic data is managed through an optimized JSON schema (data/amharic.json) housing 142 Fidel glyphs, 60 vocabulary entries, 50 sentences, and 15 complete stories. The calligraphy module leverages HTML5 Canvas API for touch and pointer stroke tracking, calculating distance metrics against reference Bezier curves. Spaced repetition relies on the SuperMemo SM-2 interval algorithm, storing ease factors and review timestamps in localStorage alongside mastery matrices.",
      highlights: "Comprehensive Ethiopic Fidel abugida matrix with digital calligraphy stroke tracing, 15 illustrated cultural stories, and offline PWA capability.",
      labs: [
        {
          name: "Fidel Abugida Seven-Order Matrix Lab",
          desc: "Interactive vowel-order laboratory exploring the 142 Ge'ez consonant-vowel combinations, morphological shifts, and phonetic transitions."
        },
        {
          name: "Digital Calligraphy & Stroke Tracing Studio",
          desc: "Handwriting workbench analyzing vector stroke paths, directionality rules, and real-time accuracy scoring on touch and stylus screens."
        },
        {
          name: "SM-2 Spaced Repetition Flashcard Engine",
          desc: "Cognitive memory testbed validating card intervals, ease factor adjustments, and optimal review scheduling for non-Latin scripts."
        },
        {
          name: "Conversational Syntax & Sentence Builder",
          desc: "Grammar sandbox testing subject-object-verb (SOV) structure, postpositional markers, and contextual phrase building."
        },
        {
          name: "Ethiopian Cultural Story & Audio Reader",
          desc: "Immersion deck evaluating synchronized narrative playback, word-by-word tooltip lookups, and cultural story comprehension."
        },
        {
          name: "Phonetic Audio & Speech Synthesis Gate",
          desc: "Acoustic laboratory testing audio playback latency, phonetic transliteration accuracy, and pronunciation waveform alignment."
        },
        {
          name: "Consonant Family Mastery & Streak Vault",
          desc: "Analytics simulator tracking incremental family completion rates, daily practice streaks, and localStorage state synchronization."
        },
        {
          name: "PWA Offline Service Worker & Asset Bench",
          desc: "Resilience testbed evaluating full-cache offline performance, dynamic JSON retrieval, and standalone mobile app installation."
        }
      ]
    }
  },
  {
    id: "armenianflow",
    title: "ArmenianFlow",
    subtitle: "Mesrop Mashtots Aybuben Script, Vocabulary & Cultural Stories",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: armenianflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/ArmenianFlow/",
    githubUrl: "https://github.com/rswarke1972-art/ArmenianFlow",
    tags: ["PWA", "Armenian", "Haykakan", "Aybuben", "Alphabet", "Language Learning", "Culture"],
    shortDescription: "Learn the 39-letter Armenian alphabet with interactive character grids, calligraphy practice, vocabulary drills, and cultural storytelling.",
    details: {
      generalIdea: "ArmenianFlow is a comprehensive language-learning platform dedicated to the Armenian language and its unique 39-letter alphabet (Aybuben), commissioned by King Vramshapuh and created by scholar Mesrop Mashtots in 405 AD. The application provides an engaging educational journey covering both uppercase and lowercase letterforms, IPA phonetics, and classical numerical values. Learners advance from foundational script mastery to conversational fluency through real-time calligraphy stroke tracing, four-tier SM-2 spaced repetition flashcards, thematic vocabulary decks, progressive sentence builders, and 15 illustrated cultural stories with interactive word-level translations.",
      keyFeatures: [
        "Complete 39-Letter Aybuben Alphabet Matrix: Full explorer covering uppercase and lowercase glyphs, IPA phonetics, and classical numerical values.",
        "Interactive Calligraphy Stroke Engine: Dedicated drawing canvas with real-time vector path tracing, stroke guides, and stroke accuracy scoring.",
        "SM-2 Algorithmic Spaced Repetition: Four-tier SRS review queue (Learning, Young, Mature, Mastered) ensuring durable character retention.",
        "Comprehensive Thematic Vocabulary: Categorized lexical decks with authentic transliteration, Armenian typography, and English definitions.",
        "Conversational Sentence Architecture: 50 progressive everyday sentences reinforcing Armenian grammar patterns, case endings, and verb conjugations.",
        "15 Cultural Stories & Historical Legends: Illustrated folklore and historical narratives (Sasuntsi Davit, Mount Ararat, ancient traditions) with word-by-word tooltips.",
        "Daily Deterministic Alphabet Challenge: Daily study routine cycling through stroke tracing, pronunciation practice, and active recall tests.",
        "Audio Phonetic Matching & Quizzes: Multi-format visual and listening assessments testing letter identification and translation accuracy.",
        "Vowel & Consonant Classification Analytics: Real-time progress dashboard tracking mastery across vowels, plosives, fricatives, and nasals.",
        "Progressive Web App Offline Caching: Custom service worker architecture enabling uninterrupted learning and audio playback without an internet connection.",
        "Dark Glassmorphic Armenian Aesthetic: High-contrast modern interface accented with radiant Armenian tricolor glows (crimson red, sapphire blue, apricot orange).",
        "Gamified Achievement & Streak Milestones: Localized XP rewards, practice streak counters, and mastery certificates celebrating continuous engagement."
      ],
      working: "Built as an offline-first Progressive Web App using vanilla JavaScript ES6 modules, CSS3 custom properties, and service worker caching (sw.js). Linguistic assets are stored in structured JSON format (data/armenian.json) containing 39 alphabet glyphs with stroke coordinates, 50 vocabulary terms, 50 sentence models, and 15 cultural narratives. The stroke engine leverages HTML5 Canvas API for touch and mouse vector tracing, computing offset differentials against reference paths. Progress metrics, SRS review intervals, and streak counters synchronize asynchronously with browser localStorage.",
      highlights: "Interactive 39-letter Aybuben alphabet with digital calligraphy tracing, 15 illustrated cultural folktales, and complete offline PWA support.",
      labs: [
        {
          name: "Aybuben 39-Character Script Matrix Lab",
          desc: "Interactive alphabet laboratory analyzing uppercase and lowercase glyph pairs, phonetic shifts, and historical numerical correlations."
        },
        {
          name: "Digital Calligraphy & Vector Stroke Studio",
          desc: "Handwriting testbench evaluating stroke sequence rules, touch vector tracing precision, and real-time accuracy scoring."
        },
        {
          name: "SM-2 Four-Tier Spaced Repetition Engine",
          desc: "Cognitive study workbench testing ease factor computations, interval progression queues, and retention curve optimization."
        },
        {
          name: "Armenian Syntax & Sentence Construction Deck",
          desc: "Grammar simulator experimenting with word-order flexibility, agglutinative noun cases, and conversational dialogue synthesis."
        },
        {
          name: "Cultural Folktale & Narrative Immersion Chamber",
          desc: "Reading laboratory exploring synchronized story playback, word-by-word tooltip translations, and cultural context absorption."
        },
        {
          name: "Audio Phonetics & Listening Assessment Gate",
          desc: "Acoustic testbed evaluating vowel resonance, ejective consonant articulation, and pronunciation latency."
        },
        {
          name: "Alphabet Family Mastery & Streak Vault",
          desc: "Progress analytics simulator modeling consonant-vowel mastery distributions, review queues, and daily streak milestones."
        },
        {
          name: "PWA Service Worker & Cache Resilience Console",
          desc: "Offline readiness testbed validating service worker pre-caching, manifest declarations, and instant standalone app loading."
        }
      ]
    }
  },
  {
    id: "burmeseflow",
    title: "BurmeseFlow",
    subtitle: "Myanmar Round Script, Diacritics Lab & Cultural Learning",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: burmeseflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/BurmeseFlow/",
    githubUrl: "https://github.com/rswarke1972-art/BurmeseFlow",
    tags: ["PWA", "Burmese", "Myanmar Script", "Brahmic", "Language Learning", "Culture", "Calligraphy"],
    shortDescription: "Master the Burmese Myanmar script with 43+ characters, vocabulary building, script construction lab, and interactive cultural stories.",
    details: {
      generalIdea: "BurmeseFlow is an immersive language-learning platform dedicated to the Burmese language and its iconic Brahmic circular script (Myanmar script). Developed from Pyu and Mon scripts, Burmese is renowned for its elegant rounded letterforms traditionally etched onto palm leaves. The platform guides learners through the complete 43-character consonant-vowel inventory, medials, tones, and complex stacking ligatures. It uniquely features an interactive Script Construction Lab for assembling multi-part glyphs, 244 thematic vocabulary items, 150 conversational sentences, and 10 cultural folktales with synchronized audio highlighting.",
      keyFeatures: [
        "Complete 43-Character Myanmar Alphabet Matrix: Explorer covering standard consonants, independent vowels, tone markers, and consonant medials.",
        "Interactive Script Construction Lab: Specialized sandbox for assembling complex glyphs with base consonants, medials, vowels, and killer marks (Asat).",
        "Digital Calligraphy Stroke Engine: Handwriting canvas with touch/stylus vector path tracing, stroke guides, and real-time accuracy scoring.",
        "SM-2 Algorithmic Spaced Repetition: Four-tier SRS review queue guaranteeing long-term retention of circular Burmese character forms.",
        "Expansive 244-Word Thematic Vocabulary: Rich vocabulary decks covering everyday life, Burmese cuisine, nature, traditions, and travel.",
        "Conversational 150-Sentence Syntactic Engine: Progressive sentence models reinforcing Burmese SOV grammar, polite particles, and postpositions.",
        "10 Illustrated Cultural Stories: Traditional Myanmar folklore and cultural narratives featuring interactive word-by-word tooltips and audio.",
        "Phonetic Tone & Pronunciation Engine: High-fidelity audio playback capturing low, high, creaky, and stopped tone distinctions.",
        "Daily Script Deterministic Challenge: Structured daily learning loop combining stroke tracing, pronunciation practice, and active recall tests.",
        "Progressive Web App Offline Caching: Full service worker pre-caching ensuring complete offline access to all audio files, character grids, and stories.",
        "Dark Glassmorphic Myanmar Aesthetic: High-contrast modern interface accented with radiant golden-yellow, emerald-green, and ruby-red tricolor glows.",
        "Gamified Achievement & Streak Milestones: Localized XP rewards, practice streak counters, and mastery certificates celebrating continuous engagement."
      ],
      working: "Built as an offline-first Progressive Web App using vanilla JavaScript ES6 modules, responsive CSS3 custom properties, and service worker caching (sw.js). Linguistic data is indexed in structured JSON format (data/burmese.json) containing 43 character glyphs with stroke coordinates, 244 vocabulary records, 150 sentence patterns, and 10 cultural narratives. The Script Construction Lab parses combining Unicode characters and OpenType shaping rules in real time. The stroke tracing canvas uses HTML5 Canvas API to calculate user stroke accuracy against reference paths, persisting progress to browser localStorage.",
      highlights: "Unique Myanmar Script Construction Lab, 244 categorized vocabulary words, digital calligraphy stroke tracing, and offline PWA capability.",
      labs: [
        {
          name: "Myanmar Script Construction Lab",
          desc: "Interactive sandbox for assembling complex Burmese glyphs from base consonants, vowel diacritics, medials, and Asat killers."
        },
        {
          name: "Circular Calligraphy & Stroke Studio",
          desc: "Handwriting testbench evaluating clockwise stroke directionality, circular curve precision, and real-time accuracy scoring."
        },
        {
          name: "Four-Tone Phonetic & Pitch Workbench",
          desc: "Acoustic laboratory analyzing pitch contours across low, high, creaky, and stopped tones with pronunciation waveform feedback."
        },
        {
          name: "SM-2 Spaced Repetition Flashcard Engine",
          desc: "Cognitive memory testbed validating card review intervals, ease factor scaling, and character retention performance."
        },
        {
          name: "Conversational Syntax & Sentence Deck",
          desc: "Grammar simulator experimenting with SOV word order, polite honorific particles, and contextual sentence synthesis."
        },
        {
          name: "Myanmar Cultural Folktale & Audio Chamber",
          desc: "Immersion laboratory exploring synchronized story playback, word-by-word tooltip lookups, and cultural story comprehension."
        },
        {
          name: "Vocabulary Domain Mastery & Streak Vault",
          desc: "Progress analytics simulator tracking 244-word vocabulary mastery distributions, category completions, and daily streaks."
        },
        {
          name: "PWA Service Worker & Offline Resilience Console",
          desc: "Offline readiness testbed validating service worker pre-caching, manifest declarations, and instant standalone app loading."
        }
      ]
    }
  },
  {
    id: "cyrillicflow",
    title: "CyrillicFlow",
    subtitle: "Pan-Slavic & Eurasian Cyrillic Script Matrix Across 9 Languages",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: cyrillicflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/CyrillicFlow/",
    githubUrl: "https://github.com/rswarke1972-art/CyrillicFlow",
    tags: ["PWA", "Cyrillic", "Slavic Languages", "Russian", "Ukrainian", "Serbian", "Mongolian", "Comparative Linguistics"],
    shortDescription: "Master Cyrillic scripts across 9 languages including Russian, Ukrainian, Serbian, Belarusian, Bulgarian, Kazakh, and Mongolian with comparative tools and SRS.",
    details: {
      generalIdea: "CyrillicFlow is a multilingual comparative educational ecosystem dedicated to the Cyrillic alphabet and its application across nine major Slavic, Central Asian, and Mongolic languages (Russian, Ukrainian, Belarusian, Serbian, Macedonian, Kazakh, Kyrgyz, Tajik, and Mongolian). The platform breaks down the shared roots originating from 9th-century Old Church Slavonic, highlights unique regional orthographic variants (such as Serbian љ/њ/џ, Ukrainian є/ї/ґ, Belarusian ў, Kazakh ә/ғ/қ, and Mongolian ө/ү), and delivers side-by-side script comparison matrices, SM-2 flashcard queues, conversational sentence builders, and 54 cultural folktales with synchronized audio highlighting.",
      keyFeatures: [
        "Unified 9-Language Cyrillic Matrix: Comprehensive script explorer for Russian, Ukrainian, Belarusian, Serbian, Macedonian, Kazakh, Kyrgyz, Tajik, and Mongolian.",
        "Comparative Script & Orthography Lab: Interactive cross-linguistic workbench highlighting shared letters, unique regional glyphs, and phonetic shifts.",
        "Side-by-Side Sentence Translation Comparator: Multi-lingual phrase builder comparing grammatical structures and cognates across Slavic and Central Asian tongues.",
        "SM-2 Algorithmic Spaced Repetition Flashcards: Four-tier review queue scheduling reviews to solidify non-Latin letterforms and spelling conventions.",
        "Rich Thematic Vocabulary Decks: Curated vocabulary for each language with native Cyrillic typography, Roman transliteration, and English definitions.",
        "Conversational Sentence Builder: Everyday sentence construction exercises for each language reinforcing grammar, noun declensions, and verb conjugations.",
        "54 Illustrated Cultural Stories: Authentic folktales and cultural narratives across all 9 language traditions with synchronized word-by-word tooltips.",
        "Phonetic Audio & Pronunciation Guide: Clear acoustic playback distinguishing subtle palatalization (soft signs ь) and language-specific phonemes.",
        "Gamified Achievement & XP Engine: Multi-tier badge system celebrating script milestones, cross-language comparisons, and daily streaks.",
        "Progressive Web App Offline Caching: Service worker architecture delivering complete offline access to all 9 language databases and stories.",
        "Dark Glassmorphic Slavic Aesthetic: High-contrast interface adorned with radiant imperial crimson, gold, and sapphire blue tricolor accents.",
        "Cross-Language Search & Dictionary: Global dictionary search querying words, roots, and phrases across all 9 Cyrillic language repositories."
      ],
      working: "Built as an offline-first Progressive Web App with modular ES6 JavaScript, CSS3 custom properties, and service worker caching (sw.js). Linguistic data is split into 9 modular JSON files (data/*.json) mapping characters, 180 total vocabulary entries, 144 sentence models, and 54 cultural stories. The comparative engine calculates character set intersections and differences using Set algorithms, rendering cross-language glyph matrices dynamically. Progress and streak data are isolated per language and synced synchronously with browser localStorage.",
      highlights: "Comparative script matrix across 9 Cyrillic languages with 54 cultural stories, side-by-side phrase comparators, and full PWA offline support.",
      labs: [
        {
          name: "Comparative Cyrillic Orthography Lab",
          desc: "Interactive matrix analyzing script intersections, language-specific letters, and phonetic divergences across all 9 Cyrillic languages."
        },
        {
          name: "Multilingual Phrase & Cognate Comparator",
          desc: "Side-by-side translation workbench evaluating shared Slavic roots, grammatical case patterns, and lexical evolution."
        },
        {
          name: "Palatalization & Phonetic Audio Deck",
          desc: "Acoustic testbed comparing hard vs soft consonant variations, iotated vowels, and pronunciation nuances."
        },
        {
          name: "SM-2 Cross-Language Flashcard Engine",
          desc: "Spaced repetition laboratory testing review scheduling, retention curves, and script recall across multiple language queues."
        },
        {
          name: "Conversational Syntax & Sentence Studio",
          desc: "Grammar sandbox testing word-order flexibility, grammatical agreement, and conversational phrase construction."
        },
        {
          name: "Eurasian Cultural Story & Audio Reader",
          desc: "Immersion deck exploring illustrated folklore from Eastern Europe to Central Asia with synchronized word-by-word tooltips."
        },
        {
          name: "Global Lexical Search & Root Dictionary",
          desc: "Search engine simulator indexing cross-language roots, Cyrillic letter queries, and contextual definitions."
        },
        {
          name: "PWA Service Worker & Multi-DB Cache Vault",
          desc: "Resilience testbed evaluating multi-database offline pre-caching, dynamic JSON loading, and standalone mobile app installation."
        }
      ]
    }
  },
  {
    id: "georgianflow",
    title: "GeorgianFlow",
    subtitle: "UNESCO Mkhedruli Script, Polypersonal Grammar & Cultural Journey",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: georgianflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/GeorgianFlow/",
    githubUrl: "https://github.com/rswarke1972-art/GeorgianFlow",
    tags: ["PWA", "Georgian", "Kartvelian", "Mkhedruli", "Language Learning", "Grammar", "Caucasus Culture"],
    shortDescription: "Master the 33-letter Georgian Mkhedruli script through unit-based learning, vocabulary, grammar construction, and cultural immersion.",
    details: {
      generalIdea: "GeorgianFlow is a comprehensive language-learning platform dedicated to the Georgian language (Kartuli ena) and its UNESCO-recognized Mkhedruli script. Covering all 33 letters with their unique curvilinear anatomy, phonetic glottal ejective consonants, and complex agglutinative grammar with polypersonal verb screeves, the platform guides learners through structured progressive units. Learners practice digital calligraphy stroke tracing, explore 240 vocabulary items across cultural domains, construct sentences, immerse themselves in Georgian traditions (Supra feasts, polyphony, Caucasus history), and read illustrated folktales with synchronized tooltips.",
      keyFeatures: [
        "Complete 33-Letter Mkhedruli Script Matrix: Explorer covering all 33 modern Georgian letters with IPA phonetics and audio samples.",
        "Progressive 5-Unit Learning Roadmap: Structured curriculum advancing from alphabet fundamentals to complex conversation and cultural fluency.",
        "Digital Calligraphy Stroke Canvas: Interactive canvas for practicing fluid Mkhedruli circular penmanship with stroke guides and accuracy scoring.",
        "Polypersonal Grammar Constructor: Dedicated grammar sandbox deconstructing Georgian verb screeves, ergative cases, and polypersonal markers.",
        "Four-Tier SM-2 Spaced Repetition Flashcards: Algorithmic review queues (Learning, Young, Mature, Mastered) ensuring durable script recall.",
        "Comprehensive 240-Word Vocabulary Decks: Categorized lexical modules spanning daily dialogue, culinary terms, family, nature, and geography.",
        "Cultural Immersion Journey: Rich modules celebrating Georgia's ancient heritage, UNESCO polyphonic chant, Supra banquet toasts, and winemaking history.",
        "Illustrated Stories & Interactive Reader: Narrative folktales and literary excerpts with word-by-word tooltips and synchronized audio playback.",
        "Daily Missions & Deterministic Challenges: Habit-forming daily tasks combining stroke drills, audio listening, and sentence construction.",
        "Progressive Web App Offline Caching: Custom service worker architecture enabling full offline access to audio guides, flashcards, and lessons.",
        "Dark Glassmorphic Caucasus Theme: High-contrast interface adorned with Saint George crimson (#be123c) and radiant royal gold accents.",
        "Gamified Achievement & Streak Locker: Localized XP reward system, milestone badges, and streak counters tracking consistent practice."
      ],
      working: "Built as an offline-first Progressive Web App using vanilla JavaScript ES6, CSS3 custom properties, and service worker caching (sw.js). Linguistic data is partitioned across modular JSON datasets (characters.json, words.json, grammar.json, stories.json, culture.json, audio.json). The calligraphy engine tracks vector coordinates on an HTML5 canvas, comparing user input against canonical stroke paths. LocalStorage persists mission status, lesson unlocks, SRS queues, and streak tallies.",
      highlights: "Interactive 33-letter Mkhedruli script explorer with polypersonal grammar constructor, 240 vocabulary words, and Georgian cultural modules.",
      labs: [
        {
          name: "Mkhedruli 33-Character Script Matrix Lab",
          desc: "Interactive alphabet laboratory analyzing curvilinear letter anatomy, phonetic glottal ejectives, and script phonology."
        },
        {
          name: "Digital Calligraphy & Stroke Tracing Studio",
          desc: "Handwriting testbench evaluating looping stroke directionality, touch canvas precision, and real-time accuracy scoring."
        },
        {
          name: "Polypersonal Verb Screeve & Grammar Lab",
          desc: "Grammar simulator deconstructing multi-argument verb agreement, subject-object markers, and ergative case alignment."
        },
        {
          name: "SM-2 Spaced Repetition Flashcard Engine",
          desc: "Cognitive memory testbed validating card review intervals, ease factor scaling, and non-Latin character retention."
        },
        {
          name: "Conversational Syntax & Sentence Construction Deck",
          desc: "Sentence builder testing agglutinative morpheme chaining, postpositional affixes, and everyday conversation."
        },
        {
          name: "Georgian Cultural Heritage & Story Chamber",
          desc: "Immersion laboratory exploring illustrated folklore, historical narratives, and traditional Supra feast etiquette."
        },
        {
          name: "Acoustic Phonetics & Ejective Consonant Gate",
          desc: "Acoustic testbed comparing aspirated vs glottal ejective consonant bursts with pronunciation audio playback."
        },
        {
          name: "PWA Service Worker & Offline Lesson Console",
          desc: "Offline readiness testbed validating service worker pre-caching, manifest declarations, and instant standalone app loading."
        }
      ]
    }
  },
  {
    id: "greekflow",
    title: "GreekFlow",
    subtitle: "Classical & Modern Greek Alphabet, Vocabulary & Hellenic Culture",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: greekflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/GreekFlow/",
    githubUrl: "https://github.com/rswarke1972-art/GreekFlow",
    tags: ["PWA", "Greek", "Modern Greek", "Alphabet", "Hellenic Culture", "Philosophy", "Calligraphy"],
    shortDescription: "Learn Modern Greek with 24-letter alphabet, vocabulary building, grammar exercises, and cultural exploration of Greek heritage.",
    details: {
      generalIdea: "GreekFlow is a comprehensive language-learning ecosystem dedicated to Modern Greek (Ellinika) and its legendary 24-letter alphabet (Alpha to Omega), the cornerstone of Western literature, philosophy, mathematics, and science. The application guides learners from foundational alphabet recognition to fluent conversational expression. Covering all 24 uppercase and lowercase glyph pairs, diphthongs, and monotonic stress accents, learners practice digital calligraphy stroke tracing, master 240 categorized vocabulary items, construct sentences with case inflections, immerse themselves in Greek philosophy and mythology, and read illustrated cultural folktales with synchronized tooltips.",
      keyFeatures: [
        "Complete 24-Letter Greek Alphabet Matrix: Full explorer covering uppercase and lowercase glyphs (Alpha to Omega), pronunciation guides, and mathematical symbols.",
        "Interactive Calligraphy Stroke Canvas: Digital penmanship canvas for practicing uppercase and lowercase Greek letterforms with real-time vector accuracy scoring.",
        "SM-2 Algorithmic Spaced Repetition Flashcards: Four-tier SRS review queue (Learning, Young, Mature, Mastered) solidifying alphabet and vocabulary retention.",
        "Comprehensive 240-Word Thematic Vocabulary: Categorized lexical decks with native Greek orthography, phonetic Romanization, and English definitions.",
        "Hellenic Grammar & Sentence Constructor: Progressive sentence builder reinforcing Greek noun gender, three declensions, case systems (Nominative, Genitive, Accusative, Vocative), and verb tenses.",
        "Cultural Immersion Modules: Deep explorations of ancient Greek philosophy (Socrates, Plato, Aristotle), classical mythology, theatrical arts, and Mediterranean heritage.",
        "Illustrated Cultural Stories & Interactive Reader: Narrative folktales and literary selections with synchronized word-by-word tooltips and audio playback.",
        "Diphthongs & Stress Accent Engine: Dedicated drills teaching two-vowel combinations (ou, ei, ai, oi) and monotonic accent rules.",
        "Daily Deterministic Challenge: Structured daily learning loop combining pronunciation practice, character stroke tracing, and recall quizzes.",
        "Progressive Web App Offline Caching: Custom service worker architecture enabling full offline access to character grids, audio guides, and lessons.",
        "Dark Glassmorphic Aegean Aesthetic: High-contrast modern interface accented with radiant Aegean blue (#0284c7), Olympic gold, and marble white glows.",
        "Gamified Achievement & Streak Locker: Localized XP rewards, practice streak counters, and mastery certificates celebrating continuous engagement."
      ],
      working: "Built as an offline-first Progressive Web App using vanilla JavaScript ES6, CSS3 custom properties, and service worker caching (sw.js). Linguistic data is split across modular JSON datasets (characters.json, words.json, grammar.json, stories.json, culture.json, audio.json). The stroke canvas uses HTML5 Canvas API to track pointer coordinates against reference Bezier paths. LocalStorage manages lesson unlocks, spaced repetition queues, streak milestones, and quiz scores.",
      highlights: "Interactive 24-letter Greek alphabet with digital calligraphy tracing, 240 vocabulary words, Hellenic cultural modules, and offline PWA capability.",
      labs: [
        {
          name: "Alpha-to-Omega 24-Character Script Matrix Lab",
          desc: "Interactive alphabet laboratory analyzing uppercase and lowercase letter pairs, phonological values, and scientific mathematical symbols."
        },
        {
          name: "Digital Calligraphy & Stroke Tracing Studio",
          desc: "Handwriting testbench evaluating fluid letterforms, stroke sequence rules, and touch canvas accuracy scoring."
        },
        {
          name: "Diphthongs & Monotonic Accent Workbench",
          desc: "Phonetic laboratory practicing Greek vowel combinations, consonant clusters, and monotonic stress accent rules."
        },
        {
          name: "Hellenic Case Declension & Sentence Deck",
          desc: "Grammar simulator experimenting with gender agreements, case inflections (Nominative, Genitive, Accusative, Vocative), and syntax."
        },
        {
          name: "SM-2 Four-Tier Spaced Repetition Engine",
          desc: "Cognitive memory testbed validating card review intervals, ease factor adjustments, and long-term vocabulary retention."
        },
        {
          name: "Classical Philosophy & Cultural Story Chamber",
          desc: "Immersion deck exploring illustrated folklore, philosophical dialogues, and Aegean cultural narratives with word tooltips."
        },
        {
          name: "Vocabulary Domain Mastery & Streak Vault",
          desc: "Progress analytics simulator tracking 240-word vocabulary mastery distributions, category completions, and daily streaks."
        },
        {
          name: "PWA Service Worker & Offline Lesson Console",
          desc: "Offline readiness testbed validating service worker pre-caching, manifest declarations, and instant standalone app loading."
        }
      ]
    }
  },
    {
    id: "hebrewflow",
    title: "HebrewFlow",
    subtitle: "Ancient & Modern Hebrew Alef-Bet, Biblical Texts & Yiddish Heritage",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: hebrewflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/HebrewFlow/",
    githubUrl: "https://github.com/rswarke1972-art/HebrewFlow",
    tags: ["PWA", "Hebrew", "Alef-Bet", "Biblical Hebrew", "Niqqud", "Yiddish", "Semitic Languages", "Language Learning"],
    shortDescription: "Master the 22-letter Hebrew Alef-Bet, 5 Soffit final forms, Niqqud vowel marks, root morphology, biblical text exploration, and Yiddish linguistic heritage.",
    details: {
      generalIdea: "HebrewFlow is an immersive digital academy and scholarly linguistic portal dedicated to the Hebrew language (עברית) across its ancient biblical, liturgical, rabbinic, and revived modern spoken forms, enriched with Ashkenazi Yiddish linguistic heritage. The application guides learners from foundational right-to-left (RTL) consonant recognition to rich biblical verse analysis and contemporary conversational proficiency. Learners navigate all 22 core consonants plus 5 Soffit (final) letter variants, master the Niqqud diacritical vocalization system, practice interactive digital calligraphy stroke tracing, explore tri-consonantal root morphology (Shoresh and Binyan), build an extensive 240-word thematic lexicon, and engage with illustrated cultural chronicles and biblical texts featuring synchronized word-by-word glossing.",
      keyFeatures: [
        "Complete 27-Character Hebrew Alef-Bet Matrix: Full explorer covering all 22 primary consonants and the 5 Soffit final forms (Kaf, Mem, Nun, Pe, Tsadi) with gematria values and phonetic guides.",
        "Niqqud Diacritical Vocalization System: Comprehensive drills teaching the full vowel pointing apparatus (Patach, Kamatz, Tzere, Segol, Shva, Cholam, Kubutz, and Dagesh).",
        "Dual Biblical & Modern Hebrew Tracks: Scholarly curriculum bridging ancient biblical scripture, liturgical texts, and contemporary Israeli Hebrew vocabulary.",
        "Yiddish Linguistic Heritage Module: Dedicated exploration of Yiddish orthography, Germanic-Semitic lexical fusion, and classic Ashkenazi literary heritage.",
        "Interactive Digital Calligraphy Stroke Canvas: Penmanship tracing studio with real-time vector coordinate evaluation and stroke order accuracy scoring.",
        "SM-2 Algorithmic Spaced Repetition Flashcards: Four-tier SRS queue system (Learning, Young, Mature, Mastered) calculating optimal review intervals for durable retention.",
        "240-Word Thematic Lexicon: Extensive vocabulary database organized by thematic semantic domains with native Hebrew typography, phonetic transliteration, and definitions.",
        "Shoresh Root & Binyan Morphology Engine: Interactive sentence and grammar workshop exploring tri-consonantal root families, verb patterns (Binyanim), and gender agreements.",
        "Illustrated Biblical & Cultural Story Reader: Narrative texts and traditional folklore equipped with synchronized word-by-word tooltip glossaries and audio playback.",
        "Daily Practice Missions & Streak Tracker: Structured daily challenge loops featuring character tracing, auditory discrimination, and recall quizzes.",
        "Dark Glassmorphic Sapphire Aesthetic: High-contrast responsive interface styled with royal sapphire blue (#0284c7), deep midnight obsidian, and radiant gold accents.",
        "Progressive Web App Offline Architecture: Service worker precaching and manifest configuration enabling instant loading and continuous offline study anywhere."
      ],
      working: "Engineered as an offline-first Progressive Web App built with modern vanilla JavaScript ES6, CSS3 design systems, and dedicated service worker caching (sw.js). Linguistic data is cleanly partitioned into modular JSON databases (hebrew.json, yiddish.json, characters.json, words.json, grammar.json, stories.json, culture.json, audio.json). The penmanship workbench utilizes the HTML5 Canvas API to sample pointer drag vectors against normalized reference Bezier curves. LocalStorage persists learner progress, SM-2 flashcard intervals, streak counters, and unit completion badges.",
      highlights: "Interactive 22-letter Alef-Bet with 5 Soffit forms, Niqqud vowels, Shoresh morphology, Yiddish heritage module, and offline PWA capability.",
      labs: [
        {
          name: "Alef-Bet & Soffit 27-Character Phonological Matrix Lab",
          desc: "Interactive script workstation analyzing consonant glyphs, final letter variants (Kaf, Mem, Nun, Pe, Tsadi), numerical gematria, and phonetic articulations."
        },
        {
          name: "Niqqud Diacritic Vocalization & Vowel Pointing Studio",
          desc: "Phonetic laboratory experimenting with vowel dots and dashes (Patach, Kamatz, Tzere, Segol, Shva, Cholam, Kubutz) and Dagesh plosive markers."
        },
        {
          name: "Digital Calligraphy & Hebrew Stroke Tracing Studio",
          desc: "Handwriting testbed evaluating stroke sequence accuracy, serif curvature, and right-to-left fluid penmanship on touch canvas."
        },
        {
          name: "Shoresh Tri-Consonantal Root & Binyan Morphology Workbench",
          desc: "Grammar simulator demonstrating verb conjugation patterns (Pa'al, Pi'el, Hif'il, Hitpa'el), noun templates, and gender agreements."
        },
        {
          name: "SM-2 Algorithmic Spaced Repetition Memory Vault",
          desc: "Cognitive retention simulator calculating recall decay curves, card maturity queues, and automated review scheduling."
        },
        {
          name: "Biblical Scripture & Cultural Story Reading Chamber",
          desc: "Literary reader displaying illustrated narratives and scriptural verses with synchronized word tooltips and syntactic breakdown."
        },
        {
          name: "Yiddish Orthography & Ashkenazi Heritage Laboratory",
          desc: "Linguistic exploration deck investigating Hebrew script adaptation for Yiddish, double-vov/yud digraphs, and cultural folk idioms."
        },
        {
          name: "PWA Service Worker & Offline Linguistic Console",
          desc: "Offline performance workbench auditing service worker cache storage, manifest registration, and instant standalone app deployment."
        }
      ]
    }
  },
    {
    id: "nepaliflow",
    title: "NepaliFlow",
    subtitle: "Devanagari Script, Nepali Vocabulary & Himalayan Culture",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: nepaliflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/NepaliFlow/",
    githubUrl: "https://github.com/rswarke1972-art/NepaliFlow",
    tags: ["PWA", "Nepali", "Devanagari", "Himalayan Culture", "Language Learning", "South Asian Languages"],
    shortDescription: "Master the 46-character Nepali Devanagari script, vowel matras, honorific conjugations, SOV grammar, and Himalayan cultural stories.",
    details: {
      generalIdea: "NepaliFlow is an immersive digital language academy dedicated to Nepali (नेपाली), the official national language of Nepal and lingua franca of the Himalayas. Structured around the complete 46-character Devanagari script (13 vowels and 33 consonants plus conjuncts), learners explore vowel diacritics (Matras), Subject-Object-Verb (SOV) syntax with postpositions, polite honorific registers (तपाईं, हजुर), digital calligraphy stroke tracing, 240 thematic vocabulary items, illustrated cultural stories with word tooltips, and an SM-2 algorithmic spaced repetition system.",
      keyFeatures: [
        "Complete 46-Character Devanagari Script Matrix: Full explorer covering 13 vowels, 33 consonants, and essential conjuncts (Ksha, Tra, Gya) with phonetic guides and stroke counts.",
        "Vowel Diacritic Matra System: Interactive laboratory teaching how matra diacritics modify consonants (Kaa, Ki, Kee, Ku, Koo, Kri, Ke, Kai, Ko, Kau, Kam, Kah).",
        "Tiered Honorific Registers & Polite Conjugation: Practical drills mastering the social spectrum of respect from informal (Timi) to respectful (Tapain) and supreme honorific (Hajur).",
        "Subject-Object-Verb (SOV) Syntax Engine: Structured sentence builder focusing on Nepali postpositions (-ma, -le, -lai, -bata) and ergative case markings.",
        "Interactive Digital Calligraphy Stroke Canvas: Penmanship tracing studio evaluating stroke order, top horizontal shirorekha alignment, and curve accuracy.",
        "SM-2 Algorithmic Spaced Repetition Flashcards: Four-tier SRS queue system (Learning, Young, Mature, Mastered) ensuring durable character and lexical memory.",
        "240-Word Thematic Lexicon: Comprehensive vocabulary categorized across 10 semantic domains including Himalayan geography, daily conversation, family, and nature.",
        "Illustrated Himalayan Cultural Story Reader: Narrative folktales and moral fables equipped with synchronized word-by-word tooltip glossaries and audio playback.",
        "Deep Cultural Chronicles & Heritage: Immersion into Mount Everest (Sagarmatha), Dashain and Tihar festivals, Newari pagoda architecture, and traditional folk music.",
        "Daily Practice Missions & Streak Tracker: Structured daily challenge loops featuring stroke penmanship, vocabulary flashcards, and auditory quizzes.",
        "Crimson Himalayan Dark Glassmorphic Aesthetic: Modern responsive design accented with royal rhododendron vermilion (#dc2626) and warm metallic gold.",
        "Progressive Web App Offline Architecture: Service worker precaching and manifest setup enabling instant loading and continuous offline study anywhere."
      ],
      working: "Engineered as an offline-first Progressive Web App built with vanilla JavaScript ES6, CSS3 design system, and service worker caching (sw.js). Linguistic data is cleanly partitioned into modular JSON databases (nepali.json, characters.json, words.json, grammar.json, stories.json, culture.json, audio.json). The penmanship workbench utilizes the HTML5 Canvas API to sample pointer drag vectors against normalized reference Bezier curves. LocalStorage persists user progress, SM-2 flashcard queues, streaks, and achievement badges.",
      highlights: "Interactive 46-character Devanagari script with digital calligraphy stroke tracing, 240 vocabulary words, Himalayan cultural immersion, and offline PWA capability.",
      labs: [
        {
          name: "Devanagari 46-Character Phonological Matrix Lab",
          desc: "Interactive alphabet laboratory analyzing vowel and consonant acoustics, conjunct ligatures, and phonetic articulation points."
        },
        {
          name: "Vowel Diacritic Matra & Syllable Combination Studio",
          desc: "Phonetic workbench experimenting with Devanagari vowel signs, inherent vowel suppression, and consonant-vowel syllable creation."
        },
        {
          name: "Digital Calligraphy & Devanagari Stroke Tracing Bench",
          desc: "Handwriting testbed evaluating stroke sequence accuracy, top shirorekha bar alignment, and touch canvas precision."
        },
        {
          name: "SOV Syntactic Postposition & Word Order Workbench",
          desc: "Grammar simulator experimenting with ergative agent markers (-le), locative postpositions (-ma), and Subject-Object-Verb syntax."
        },
        {
          name: "Tiered Honorific Conjugation & Respect Register Simulator",
          desc: "Sociolinguistic deck practicing verb inflection shifts across casual, formal, and supreme honorific polite speech."
        },
        {
          name: "SM-2 Algorithmic Spaced Repetition Memory Vault",
          desc: "Cognitive retention testbed calculating recall decay intervals, card maturity distributions, and scheduled review queues."
        },
        {
          name: "Himalayan Cultural Folktales & Narrative Reader Chamber",
          desc: "Literary reading lounge displaying illustrated folktales with synchronized word tooltips and syntactic breakdown."
        },
        {
          name: "PWA Service Worker & Offline Linguistic Console",
          desc: "Offline performance workbench auditing service worker cache storage, manifest registration, and instant standalone app deployment."
        }
      ]
    }
  },
  {
    id: "subjects-notes",
    title: "SUBJECTS CS/IT Academic Hub",
    subtitle: "Computer Science & IT Engineering Curriculum Knowledge Base",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: false,
    featured: true,
    image: subjectsIcon,
    liveUrl: "https://rswarke1972-art.github.io/my-first-repo/",
    githubUrl: "https://github.com/rswarke1972-art/my-first-repo",
    tags: ["Education", "Computer Science", "IT Notes", "Academic Resources", "SPPU", "Engineering"],
    shortDescription: "Curated academic curriculum repository covering Computer Architecture, DBMS, Discrete Mathematics, IoT, Web Development, and Environmental Studies across 29 units and 360+ modules.",
    details: {
      generalIdea: "SUBJECTS is an extensive, semester-long academic knowledge repository curated for Computer Science and Information Technology engineering students under Savitribai Phule Pune University (SPPU). The platform organizes 6 core foundational and applied engineering subjects into 29 structured units and over 360 individual topic modules. Covering deep low-level hardware organization (Von Neumann, 8086 microprocessors, multi-tier cache memory, pipelining), database systems (relational algebra, SQL, BCNF normalization, ACID transaction protocols), theoretical computing (discrete mathematics, logic, graphs, combinatorics), connected systems (IoT hardware, microcontrollers, sensor networking, cloud edge), modern full-stack web technologies (HTML5, responsive CSS3, JavaScript DOM, APIs), and environmental sustainability.",
      keyFeatures: [
        "Computer Architecture & Microprocessor Module (CMP - CS201): In-depth coverage of Von Neumann vs Harvard architectures, 8086 microprocessor assembly, pipelining, multi-level cache hierarchies, and parallel computing.",
        "Database Management Systems Curriculum (DBMS - CS202): Relational model theory, schema design, ER modeling, SQL querying, formal normalization (1NF through BCNF), and concurrency control.",
        "Discrete Mathematics & Logic Framework (DM - CS203): Mathematical foundations covering propositional logic, inference rules, set theory, relation lattices, graph theory, and combinatorics.",
        "Internet of Things & Embedded Systems Deck (IoT - CS204): Hardware architectures, sensor and actuator interfacing, communication protocols (MQTT, CoAP), edge computing, and smart city applications.",
        "Full-Stack Web Development Track (WEB - CS205): Semantic HTML5, CSS3 layout engines (Flexbox and Grid), vanilla JavaScript DOM APIs, server-side scripting, and RESTful architectures.",
        "Environmental Science & Sustainability Units (EVS - CS206): Multidisciplinary exploration of ecosystem dynamics, biodiversity conservation, natural resource preservation, and environmental pollution mitigation.",
        "29 Structured Syllabus Units: Organized academic roadmap guiding students step-by-step through semester curricula with clear topical breakdowns.",
        "Over 360 Detailed Conceptual Modules: Individual lesson pages containing concise theory, architectural diagrams, mathematical proofs, and code examples.",
        "Dedicated Subject Landing Hubs: Modular entry points for every engineering subject with quick unit overviews and direct concept navigation.",
        "Responsive Modern Glassmorphic Dashboard: Clean, high-contrast dark theme optimized for focused reading, desktop study, and mobile tablet review.",
        "Direct Exam Preparation & Reference Index: Fast-lookup topical navigation enabling rapid review before university semester exams and viva voce.",
        "Lightweight Static Architecture: High-performance, zero-latency static HTML/CSS delivery with universal device compatibility and instant loading."
      ],
      working: "Built as a lightweight, static web curriculum repository hosted on GitHub Pages. Each subject is partitioned into dedicated unit subdirectories (units_cmp, units_dbms, units_dm, units_iot, units_web, units_evs) housing modular topic HTML files. An overarching glassmorphic dashboard connects all 6 subjects, providing fast indexation, semantic typography, and frictionless cross-subject navigation.",
      highlights: "Curated academic hub covering 6 core CS/IT engineering subjects across 29 units and 360+ conceptual modules with zero-latency navigation.",
      labs: [
        {
          name: "Von Neumann & 8086 Microprocessor Architecture Lab",
          desc: "Hardware simulation bench analyzing CPU instruction cycles, register organizations, bus interconnections, and 8086 assembly interrupts."
        },
        {
          name: "Multi-Level Cache Hierarchy & Memory Management Bench",
          desc: "Cache simulator evaluating hit/miss penalties, mapping algorithms (Direct, Associative, Set-Associative), and write policies."
        },
        {
          name: "Relational Algebra, SQL & Schema Normalization Studio",
          desc: "Database modeling testbed testing relational calculus, query optimization plans, and functional dependency decomposition into BCNF."
        },
        {
          name: "Transaction Concurrency & ACID Recovery Deck",
          desc: "Concurrency simulator exploring two-phase locking (2PL), serializability schedules, deadlock detection, and write-ahead logging."
        },
        {
          name: "Propositional Logic, Graph Theory & Combinatorics Workbench",
          desc: "Discrete mathematics workbench evaluating truth tables, graph traversals (Eulerian & Hamiltonian), and recurrence relations."
        },
        {
          name: "Embedded Sensors, Microcontrollers & IoT Protocol Studio",
          desc: "Telemetry testbed analyzing microcontroller interfaces, sensor data acquisition, and lightweight IoT publish-subscribe messaging with MQTT."
        },
        {
          name: "Full-Stack HTML5, CSS3 & JavaScript DOM Engineering Lab",
          desc: "Web development testbench evaluating semantic accessibility, responsive Flexbox/Grid layouts, and event-driven DOM scripting."
        },
        {
          name: "Static Web Architecture & Rapid Academic Reference Console",
          desc: "Performance testbed verifying static file routing, zero-dependency client delivery, and offline syllabus search speed."
        }
      ]
    }
  },
  {
    id: "khmerflow",
    title: "KhmerFlow",
    subtitle: "Khmer Script, Dual Series Consonants & Angkor Wat Heritage",
    category: "language",
    categoryLabel: "Language & Linguistics",
    isPwa: true,
    featured: true,
    image: khmerflowIcon,
    liveUrl: "https://rswarke1972-art.github.io/KhmerFlow/",
    githubUrl: "https://github.com/rswarke1972-art/KhmerFlow",
    tags: ["PWA", "Khmer", "Cambodian", "Abugida", "Angkor Wat", "Language Learning", "Southeast Asian Languages"],
    shortDescription: "Master the 79-character Khmer script (the world's largest alphabet), 33 consonants across dual series, dependent vowels, sub-consonants, and Cambodian cultural folklore.",
    details: {
      generalIdea: "KhmerFlow is an immersive digital academy and cultural portal dedicated to the Khmer language (ភាសាខ្មែរ), the official national tongue of Cambodia and language of the ancient Khmer Empire. Built around the Guinness World Record-holding 79-character writing system, learners explore the complete Brahmic abugida script: 33 consonants divided into dual phonological series (first-series 'a' and second-series 'o'), 23 dependent vowels (Sra), 14 independent vowels (Sra Penh Vow), and subscript consonant ligatures (Cheung ជើង). The platform integrates interactive stroke tracing, a 250-word thematic lexicon, grammar drills exploring SVO syntax and honorific registers, illustrated folk stories, and an SM-2 algorithmic spaced repetition system.",
      keyFeatures: [
        "Complete 79-Character Khmer Script Matrix: Full explorer covering 33 consonants, 23 dependent vowels, 14 independent vowels, and subscript forms with phonetic series classification.",
        "Dual Phonological Series Engine: Interactive drills mastering how first-series (a-register) and second-series (o-register) consonants alter dependent vowel pronunciations.",
        "Cheung Subscript Consonant Workbench: Dedicated module teaching consonant clustering and vertical stacked ligature assembly (ជើង).",
        "Interactive Digital Calligraphy Stroke Canvas: Penmanship tracing studio evaluating stroke order, distinctive loop directions, and touch canvas accuracy.",
        "SM-2 Algorithmic Spaced Repetition Flashcards: Four-tier SRS queue system (Learning, Young, Mature, Mastered) solidifying glyph and vocabulary retention.",
        "250-Word Thematic Lexicon: Extensive lexical database organized across 10 semantic domains with native Khmer orthography, phonetic Romanization, and definitions.",
        "Subject-Verb-Object (SVO) Grammar & Classifier Engine: Structural sentence builder reinforcing Khmer syntax, noun classifiers, and polite particles.",
        "Illustrated Cambodian Cultural Story Reader: Narrative folktales and literary fables equipped with synchronized word-by-word tooltip glossaries and audio playback.",
        "Angkorian Heritage & Cultural Chronicles: Immersion into Angkor Wat architecture, classical Apsara dance, the Water Festival (Bon Om Touk), and culinary traditions.",
        "Daily Practice Missions & Streak Tracker: Structured daily challenge loops featuring stroke penmanship, character listening drills, and recall quizzes.",
        "Dark Glassmorphic Terracotta Aesthetic: High-contrast responsive interface accented with royal Angkor amber-gold (#b45309), terracotta, and deep midnight obsidian.",
        "Progressive Web App Offline Architecture: Service worker precaching and manifest setup enabling instant loading and continuous offline study anywhere."
      ],
      working: "Engineered as an offline-first Progressive Web App built with modern vanilla JavaScript ES6, CSS3 custom properties, and service worker caching (sw.js). Linguistic data is cleanly partitioned into modular JSON databases (writing_system.json, characters.json, words.json, grammar.json, stories.json, culture.json, achievements.json, daily_challenges.json). The penmanship workbench utilizes the HTML5 Canvas API to sample pointer drag vectors against normalized reference Bezier curves. LocalStorage persists learner progress, SM-2 flashcard intervals, streak counters, and achievement badges.",
      highlights: "Interactive 79-character Khmer script with dual-series consonants, subscript Cheung ligatures, 250 vocabulary words, and offline PWA capability.",
      labs: [
        {
          name: "Khmer 79-Character Brahmic Script Matrix Lab",
          desc: "Interactive script workstation analyzing consonant glyphs, independent vowels, dependent vowels, and phonetic series groupings."
        },
        {
          name: "Dual-Series Consonant & Inherent Vowel Shift Studio",
          desc: "Phonological laboratory experimenting with first-series (a-register) and second-series (o-register) acoustic transformations."
        },
        {
          name: "Cheung Subscript Ligature & Cluster Workbench",
          desc: "Typographic testbench practicing vertical sub-consonant combinations, word stacking rules, and consonant clusters."
        },
        {
          name: "Digital Calligraphy & Khmer Stroke Tracing Studio",
          desc: "Handwriting testbed evaluating stroke sequence accuracy, circular loops, and fluid penmanship on touch canvas."
        },
        {
          name: "SVO Syntax, Classifiers & Polite Particle Deck",
          desc: "Grammar simulator experimenting with word order, numerical classifiers, negation patterns, and respectful sentence particles."
        },
        {
          name: "SM-2 Algorithmic Spaced Repetition Memory Vault",
          desc: "Cognitive retention simulator calculating recall decay intervals, card maturity distributions, and scheduled review queues."
        },
        {
          name: "Angkorian Lore & Illustrated Folktale Reading Chamber",
          desc: "Literary reader displaying illustrated Cambodian narratives with synchronized word tooltips and syntactic breakdown."
        },
        {
          name: "PWA Service Worker & Offline Linguistic Console",
          desc: "Offline performance workbench auditing service worker cache storage, manifest registration, and instant standalone app deployment."
        }
      ]
    }
  },
  {
    id: "the-questions-that-heal",
    title: "The Questions That Heal",
    subtitle: "A Philosophical & Psychological Novel (Web Edition & Digital Book)",
    category: "novels",
    categoryLabel: "Interactive Visual Novels",
    isPwa: false,
    featured: true,
    image: questionsthathealIcon,
    liveUrl: "https://rswarke1972-art.github.io/TheQuestionsThatHeal/",
    githubUrl: "https://github.com/rswarke1972-art/TheQuestionsThatHeal",
    tags: ["Philosophical Novel", "Psychology", "Web Reader", "E-Book", "Healing & Growth", "Carl Rogers", "Literature", "Sahil Warke"],
    shortDescription: "The official website edition and companion digital reader of the philosophical novel by Sahil Rajesh Warke. Experience the complete journey of Professor Vinay, Rudhika, and Adhrika through grief, attachment, self-acceptance, and transformational questions.",
    details: {
            working: "The Questions That Heal digital edition is architected as a lightweight, zero-dependency client-side literary reading application and companion e-book platform. The text processing pipeline compiles markdown chapters through Pandoc into semantic HTML5 structures with inlined high-legibility serif web typography (Crimson Pro display headings paired with EB Garamond body text at 1.9 line height). Client-side JavaScript provides real-time reading progress tracking via passive scroll event listeners driving a CSS transform progress indicator. A reader preference controller manages typography scaling (14px to 26px) and dynamic CSS custom property theme swaps (warm parchment day mode and deep contrast night mode) with state persistence via localStorage. The table of contents uses native semantic anchor jumps with smooth-scrolling behavior. Offline capability and packaging are managed through EPUB 3.0 specification bundling with embedded CSS stylesheets and vector cover typography, deployed globally via GitHub Pages.",
generalIdea: "The Questions That Heal is a deeply reflective philosophical and psychological novel written by Sahil Rajesh Warke. Centered on the guiding premise that genuine emotional healing does not begin with rigid answers but with compassionate, courageous questions, the narrative follows Professor Vinay, a seasoned psychology educator, and his interactions with students including Rudhika and Adhrika as they navigate unseen emotional wounds, grief, relational trauma, fear of vulnerability, and personal growth. To ensure the story is universally accessible to readers who prefer reading directly on the web or mobile browser rather than traditional e-readers, this standalone digital web edition was engineered with responsive Crimson Pro and EB Garamond typography, instant table-of-contents jump navigation, reader theme controls, and direct EPUB e-book access.",
      keyFeatures: [
        "Complete 8-Part Literary Journey: Features the complete unabridged narrative spanning 7 major chapters ('The Question After the Rain', 'The Weight of Belief', 'When Words Become Weapons', 'The Walls We Build', 'Beyond Labels', 'The Mirror and the Mind', 'The Smile Hidden Behind Silence') and the moving Epilogue ('The Quiet Beginning').",
        "Dual-Medium Availability: Purpose-built as an open web edition for readers who prefer reading directly in browsers, while simultaneously providing one-click EPUB e-book downloads for offline e-readers like Kindle, Apple Books, and Kobo.",
        "Bespoke Literary Typography: Crafted using classic EB Garamond serif body text and Crimson Pro display headings, calibrated with 1.9 line-height for fatigue-free reading.",
        "Dynamic Reader Themes: Built-in theme switcher offering warm parchment day reading and high-contrast ambient dark mode with persistent user preferences.",
        "Font Scale Customization: Granular font scaling controls allowing readers to tailor letter size from 14px to 26px for optimal accessibility across devices.",
        "Live Reading Progress Indicator: Integrated real-time scroll progress bar fixed at the browser crown, showing exact visual journey completion.",
        "Deep Humanistic Psychology Foundations: Rooted in Carl Rogers' paradox of acceptance, Viktor Frankl's logotherapy and meaning-making, and Erich Fromm's philosophy of intentional love.",
        "Dialogue-Driven Socratic Counseling: Illustrates therapeutic inquiry in action, showing how reframing internal monologues unlocks emotional clarity.",
        "Seamless Table of Contents Navigation: Interactive anchor menu enabling instant jumping between chapters with responsive layout adaptation.",
        "Original Painted Cover Artwork: Features the official 1024x1536 literary cover painting depicting Professor Vinay's sunlit university office and psychology library.",
        "Print & Export Optimization: Dedicated CSS print media queries ensuring elegant margins, clean page breaks, and distraction-free hardcopy or PDF export.",
        "Zero Distraction Minimalist Architecture: Pure zero-dependency semantic HTML5/CSS3 implementation achieving instant page loads and zero tracker footprint."
      ],
      techStack: [
        "Semantic HTML5",
        "Vanilla CSS3",
        "Crimson Pro & EB Garamond Typography",
        "Pandoc E-Book Tooling",
        "EPUB 3.0 Standard",
        "JavaScript Reader Engine",
        "LocalStorage State",
        "GitHub Pages"
      ],
      learningOutcomes: [
        "The Socratic Paradox of Healing: Understand why premature answers often stifle emotional resolution while the right exploratory question creates space for self-discovery.",
        "Acceptance as the Precondition for Change: Internalize Carl Rogers' timeless insight that acknowledging emotional reality without defense is the first step toward transformation.",
        "Deconstructing Words as Weapons: Analyze the psychological impact of internal and interpersonal language on emotional safety and self-worth.",
        "Dismantling Defensive Walls: Learn the emotional architecture behind psychological defense mechanisms and the quiet courage required to lower them.",
        "Transcending Societal & Self-Imposed Labels: Recognize how identity labels constrain potential and how compassionate dialogue restores multidimensional human dignity.",
        "The Power of Empathetic Silence: Discover how active, non-judgmental listening provides a healing sanctuary for burdens carried in silence."
      ],
      labs: [
        {
          name: "Socratic Question Framing Lab",
          desc: "Interactive exercise in reframing blunt diagnostic statements into open, compassionate questions that foster emotional safety and psychological insight."
        },
        {
          name: "The Rogers Paradox Acceptance Matrix",
          desc: "Self-reflection simulation guiding users to identify hidden resistance, practice unconditional self-acceptance, and unlock organic personal growth."
        },
        {
          name: "Emotional Walls Diagnostic",
          desc: "Interactive mapping tool that traces personal protective barriers back to original vulnerabilities and suggests gentle pathways for re-establishing authentic connection."
        },
        {
          name: "Words as Weapons Reframing Sandbox",
          desc: "Simulation exploring high-stakes conversations, demonstrating how altering linguistic tone and intent de-escalates conflict into collaborative understanding."
        },
        {
          name: "Beyond Labels Identity Explorer",
          desc: "Reflective inquiry module for peeling away societal stereotypes, academic pressures, and self-limiting beliefs to reconnect with core values."
        },
        {
          name: "The Mirror & The Mind Projection Lab",
          desc: "Psychological exercise analyzing how interpersonal irritation often reflects unacknowledged internal conflict and repressed emotions."
        },
        {
          name: "Active Empathetic Listening Simulator",
          desc: "Interactive dialogue practice training users to listen deeply without interrupting, advising, or projecting before the speaker feels genuinely heard."
        },
        {
          name: "The Quiet Beginning Milestone Compass",
          desc: "Goal-setting and emotional recovery journal guiding users to formulate their own healing questions for long-term emotional resilience."
        }
      ]
    }
  },
  {
    id: "forough-farrokhzad",
    title: "Forough Farrokhzad",
    subtitle: "Persian Poetry Archive, Feminist Voice & Modernist Literary Legacy",
    category: "philosophy",
    categoryLabel: "Philosophy & Culture",
    isPwa: false,
    featured: true,
    image: foroughFarrokhzadIcon,
    liveUrl: "https://rswarke1972-art.github.io/ForoughFarrokhzad/",
    githubUrl: "https://github.com/rswarke1972-art/ForoughFarrokhzad",
    tags: ["Persian Poetry", "Forough Farrokhzad", "Modern Persian Literature", "Philosophy & Culture", "Feminist Voice", "Audio Recitations", "Literary Archive", "Iranian Heritage"],
    shortDescription: "An immersive multimedia literary archive celebrating Forough Farrokhzad, Iran's iconic 20th-century modernist poet and filmmaker. Explore bilingual poetry with Persian calligraphy, audio recitations, interactive biographical timeline, book chronologies, and revolutionary cultural legacy.",
    details: {
            working: "Forough Farrokhzad is architected as an offline-capable, modular single-page literary archive built with vanilla JavaScript (ES6+), decoupled CSS3 styling modules, and semantic HTML5. The application architecture partitions runtime responsibilities across specialized controllers (app.js for screen routing and state machines, content.js for the core literary repository, reader.js for bilingual poetry layout, audio.js and tts.js for speech synthesis, timeline.js for chronological milestones, quotes.js for philosophical reflections, and settings.js for user preferences). The bilingual reader dynamically pairs original Persian Naskh calligraphy with English verse translations, leveraging the browser Web Speech API with customizable pitch, speech rate, and language fallback for audio recitations. Real-time client-side search performs multi-field substring queries across Persian titles, English translations, and thematic tags without external dependencies. User preferences including night mode, font scaling, and reading history are serialized in localStorage.",
generalIdea: "Forough Farrokhzad (1934-1967) was Iran's most trailblazing and revolutionary female poet of the 20th century. Breaking with centuries-old rigid poetic meters, she championed Nimai free verse to explore candid themes of womanhood, bodily autonomy, desire, societal confinement, and existential rebirth. This digital archive honors her transformative legacy through an interactive cultural suite: featuring bilingual Persian and English poetry readers, Web Speech audio synthesis for poetic recitation, comprehensive biographical essays, interactive timelines of her milestones (including her groundbreaking 1962 leper colony documentary 'The House is Black'), curated quotes, book collections from 'The Captive' to 'Another Birth', and interactive reflection modules.",
      keyFeatures: [
        "Bilingual Persian-English Poetry Archive: Features complete bilingual poem displays presenting original Persian Naskh calligraphy side-by-side with calibrated English translations.",
        "Interactive Audio Reading Engine: Built-in Web Speech API audio synthesis and spoken-word player allowing readers to listen to poetic recitations and cadence.",
        "Comprehensive Chronological Timeline: Interactive life journey spanning her 1934 Tehran birth, 1955 debut 'The Captive', 1962 European travels, acclaimed cinema direction, and enduring modern resonance.",
        "Complete Book & Collection Chronicles: Curated overviews and critical analyses of all major collections including 'Asir' (The Captive), 'Divar' (The Wall), 'Esyan' (Rebellion), and 'Tavallodi Digar' (Another Birth).",
        "Cinematic Heritage & 'The House is Black': Dedicated documentary film showcase celebrating her pioneering 1962 Tabriz leper colony masterpiece that founded the Iranian New Wave.",
        "Thematic Poetry Taxonomy: Categorized exploration filters allowing users to discover verse across themes of female liberation, existential longing, love, mortality, and nature.",
        "Persian Calligraphy & Typography: Custom styling integrating Noto Naskh Arabic and Cormorant Garamond serif typefaces for authentic Persian aesthetic immersion.",
        "Dynamic Reader Settings & Night Mode: Reader controls allowing adjustment of typography sizing, line spacing, and ambient contrast themes for late-night contemplative study.",
        "Search & Filter Engine: Real-time search across all archived poems, titles, Persian keywords, and biographical entries with instant highlight matching.",
        "Curated Philosophical Quotes: Indexed collection of Forough's most stirring observations on artistic honesty, freedom, patriarchal resistance, and emotional truth.",
        "Mobile-First Touch Architecture: Gesture-optimized layout with smooth page transitions, interactive rose petal animations, and full offline caching.",
        "Zero-Tracker Open Cultural Preservation: Clean, lightweight web application built without third-party surveillance trackers to preserve literary heritage for future generations."
      ],
      techStack: [
        "Vanilla JavaScript (ES6+)",
        "CSS3 Custom Properties & Animations",
        "Semantic HTML5",
        "Web Speech API (TTS)",
        "Noto Naskh Arabic & Cormorant Typography",
        "LocalStorage State",
        "GitHub Pages"
      ],
      learningOutcomes: [
        "Nimai Poetic Modernism: Understand how Forough broke away from classical Persian rhyming schemas to establish free-verse intimacy and raw emotional authenticity.",
        "Feminine Agency & Patriarchal Resistance: Analyze how Farrokhzad used verse to claim female desire, personal autonomy, and intellectual freedom in 1950s Tehran.",
        "The Poetics of Another Birth (Tavallodi Digar): Explore the existential philosophy of rebirth, transience, and spiritual awakening that defines her mature literary period.",
        "Foundational Iranian Cinema: Discover how her cinema verite documentary 'The House is Black' pioneered humanistic visual poetry and influenced Kiarostami and Makhmalbaf.",
        "Language, Metaphor & Nature in Persian: Learn how Persian poetic imagery (wind, sun, cold season, earth) serves as a vehicle for internal psychological transformation.",
        "Artistic Courage in the Face of Condemnation: Appreciate the moral courage required to publish unvarnished personal truth against fierce societal and patriarchal censure."
      ],
      labs: [
        {
          name: "Nimai Free-Verse Rhythm Lab",
          desc: "Interactive meter simulator contrasting classical Persian ghazal structures with Forough's liberated Nimai cadences and natural speech pauses."
        },
        {
          name: "Bilingual Verse Translation Explorer",
          desc: "Comparative linguistic sandbox examining untranslatable Persian idioms, emotional nuances, and metaphorical layers in 'I Will Greet the Sun Again'."
        },
        {
          name: "The House is Black Visual Poetics Studio",
          desc: "Cinematic analysis lab deconstructing scene composition, spoken poetic narration, and humanistic framing from her landmark 1962 documentary."
        },
        {
          name: "Thematic Metaphor Mapping Sandbox",
          desc: "Interactive diagramming exercise tracing recurring Persian motifs of wind, captivity, mirrors, and winter across her five poetry collections."
        },
        {
          name: "Female Voice & Autonomy Dialogue Lab",
          desc: "Sociological reflection module analyzing 1950s Iranian social structures and the courageous rhetorical strategies used in her collection 'Rebellion'."
        },
        {
          name: "Audio Cadence & Recitation Workshop",
          desc: "Interactive speech synthesizer training users in Persian vowel lengths, emotional inflection, and the melodic delivery of modern Persian poetry."
        },
        {
          name: "Chronological Legacy Milestone Navigator",
          desc: "Interactive timeline simulator exploring how key historical events, European travel, and literary circles shaped her creative evolution."
        },
        {
          name: "Poetic Rebirth Reflection Journal",
          desc: "Contemplative writing prompt generator inspired by 'Another Birth', guiding readers to articulate their own journeys through grief, truth, and self-discovery."
        }
      ]
    }
  },
  {
    id: "manhwa-maker",
    title: "ManhwaMaker Studio",
    subtitle: "Professional Webtoon & Vertical-Scroll Comic Creation Platform",
    category: "tools",
    categoryLabel: "AI & Productivity Tools",
    isPwa: true,
    featured: true,
    image: manhwaMakerIcon,
    liveUrl: "https://rswarke1972-art.github.io/manhwa-maker/",
    githubUrl: "https://github.com/rswarke1972-art/manhwa-maker",
    tags: ["PWA", "Webtoon Studio", "Manhwa Creator", "Comic Design", "Vertical Scroll", "Canvas Engine", "SFX Generator", "Storyboarding"],
    shortDescription: "A professional, offline-first Webtoon and Manhwa authoring suite. Create vertical-scroll web comics with unlimited panels, dynamic speech bubbles, comic sound effects (SFX), speed lines, story arc templates, and mobile reader mode.",
    details: {
      working: "ManhwaMaker Studio is architected around a reactive Multi-Episode Document Model (ManhwaStudioApp) that decouples authoring state from dual rendering targets: the interactive authoring canvas and the export slicing engine. The workspace uses responsive HTML5 canvas and SVG overlays to render continuous vertical strips at a base width of 600px. Speech bubbles and SFX objects are modeled as vector nodes maintaining normalized coordinates relative to their parent panel; tail anchors use quadratic Bezier curves recomputed dynamically on drag events. An in-memory history stack captures immutable snapshots across 40 user interactions for instantaneous undo/redo. The export engine slices continuous strips into standard Webtoon-compliant image chunks using offscreen Canvas 2D contexts. The application registers a Service Worker (sw.js) for offline asset caching and persists workspace state via versioned localStorage serialization.",
      generalIdea: "ManhwaMaker Studio is an advanced webtoon and manhwa creation platform engineered for digital comic artists, storytellers, and webtoon creators. Utilizing a multi-episode document model with dual interactive and export rendering engines, creators can compose seamless vertical-scroll webcomics tailored for modern mobile platforms (Webtoon, Tapas, KakaoPage). The studio provides comprehensive panel manipulation with customizable gutters and bleed margins, rich speech bubble vectors with editable tails, Korean manhwa-style sound effects (SFX) with dramatic perspective skews, speed line overlays, pre-built story arc templates (Dungeon Awakening, Hunter Guild, Villainess Romance), a Spotlight command palette (Ctrl + K), and mobile reader preview.",
      keyFeatures: [
        "Multi-Episode Document Architecture: Manage multi-chapter webtoon series within a unified project model featuring episode switching, metadata tagging, and auto-syncing.",
        "Infinite Vertical Canvas Engine: True continuous-scroll layout with customizable strip widths (600px standard), inter-panel gutters, background tinting, and seamless transitions.",
        "Dynamic Speech Bubble System: Rich vector balloon library including standard dialogue, spiky scream bubbles, jagged demon/monster shouts, rounded whispers, and rectangular narration boxes.",
        "Direct Manipulation & Touch Gestures: Smooth mouse and multi-touch dragging, scaling, rotating, and tail-anchor repositioning for all panel overlays directly on the canvas.",
        "Manhwa Onomatopoeia (SFX) Generator: Korean webtoon-inspired dramatic sound effect text with custom typographic gradients, impact bursts, stroke outlines, and angle tilts.",
        "Pre-Built Story Arc Templates: Out-of-the-box illustrated templates including Dungeon Awakening, Hunter Guild, Neon City Portal, Villainess Otome, and Martial Arts Sword Slash.",
        "Realistic Mobile Reader Preview: Built-in smartphone frame simulation allowing creators to test reading rhythm, panel pacing, and visual cliffhangers exactly as readers experience them.",
        "Spotlight Command Palette (Ctrl + K): Keyboard-driven modal launcher for instant panel navigation, layer search, template insertion, and workspace shortcuts.",
        "Robust 40-Step Undo/Redo Engine: Deep state history stack capturing every panel resize, bubble translation, text edit, and layer reordering with non-destructive rollbacks.",
        "Export & Slicing Pipeline: High-resolution export system generating individual panel slices, continuous vertical PNG strips, and full chapter archive bundles.",
        "Local Persistence & Crash Protection: Automatic localStorage state serialization guaranteeing zero loss of artwork, draft narratives, and custom panel configurations.",
        "Offline-First Progressive Web App: Service Worker precaching of all UI assets, canvas utilities, and template graphics for fully functional offline studio creation."
      ],
      techStack: [
        "Vanilla JavaScript (ES6+)",
        "HTML5 Canvas API",
        "CSS3 Custom Properties & Grid",
        "Service Worker (PWA)",
        "Vector Math & Bezier Curves",
        "LocalStorage Serialization",
        "GitHub Pages"
      ],
      learningOutcomes: [
        "Vertical-Scroll Visual Pacing: Master the art of pacing webtoons across mobile vertical viewport scrolls, controlling reader eye tracking and emotional rhythm.",
        "Panel Composition & Gutter Psychology: Understand how varying panel height, gutters, and bleed boundaries builds narrative tension and dramatic scale.",
        "Dialogue Flow & Balloon Placement: Learn optimal speech balloon sequencing to guide reader navigation naturally without obscuring character expressions or key action.",
        "SFX as Visual Storytelling: Harness Korean manhwa onomatopoeia styling to convey kinetic energy, ambient acoustics, and physical impact.",
        "Multi-Episode Storyboarding: Plan serialized comic narrative arcs with clear inciting incidents, mid-chapter hooks, and cliffhanger panel endings.",
        "Cross-Platform Digital Publishing: Prepare optimized digital assets that adhere to standard Webtoon and Tapas slice dimensions (800x1280 max per slice)."
      ],
      labs: [
        {
          name: "Vertical Scroll Pacing Simulator",
          desc: "Interactive scroll-speed benchmark measuring eye dwell time per panel to optimize reading rhythm and tension buildup."
        },
        {
          name: "Dynamic Speech Tail Bezier Lab",
          desc: "Interactive math sandbox demonstrating quadratic Bezier curve curvature and anchor placement for natural character dialogue direction."
        },
        {
          name: "Action SFX Typography & Angle Workshop",
          desc: "Kinetic lettering studio for experimenting with impact skew, outer glow, and stroke thickness on classic Korean manhwa sound effects."
        },
        {
          name: "Webtoon Gutter Tension Diagnostic",
          desc: "Layout tool that dynamically adjusts vertical panel spacing to visualize the psychological impact of time dilation between comic beats."
        },
        {
          name: "Hunter Awakening Template Sandbox",
          desc: "Pre-configured 12-panel action sequence demonstrating cliffhanger panel staging, speed line overlays, and atmospheric lighting."
        },
        {
          name: "Mobile Viewport Readability Tester",
          desc: "Responsive smartphone simulation analyzing font contrast, balloon readability, and safe margins across different screen ratios."
        },
        {
          name: "Webtoon Slicing & Resolution Analyzer",
          desc: "Image processing tool calculating optimal slice boundaries and compression ratios for Webtoon and Tapas upload limits."
        },
        {
          name: "Undo/Redo State Machine Inspector",
          desc: "Developer laboratory visualizing the 40-step circular history buffer, delta memory footprint, and snapshot serialization."
        }
      ]
    }
  },
  {
    id: "project-liz",
    title: "PROJECT L.I.Z.",
    subtitle: "Case File 09: Symmetrical Psychological Thriller & Forensic Cat-and-Mouse Game",
    category: "games",
    categoryLabel: "Games & Simulations",
    isPwa: true,
    featured: true,
    image: lizIcon,
    liveUrl: "https://rswarke1972-art.github.io/LIZ/",
    githubUrl: "https://github.com/rswarke1972-art/LIZ",
    tags: ["PWA", "Psychological Thriller", "Detective Game", "Forensic Simulation", "Symmetrical Gameplay", "Web Audio API", "Interactive Corkboard", "Branching Endings"],
    shortDescription: "An atmospheric symmetrical psychological thriller game. Experience the brutal crime scene of Case File 09 from dual perspectives: play as the Detective uncovering forensic clues and interrogating suspects, or as the Killer desperately tampering with evidence, managing heart rate, and fabricating alibis.",
    details: {
      working: "PROJECT L.I.Z. is architected using a centralized GameStateManager managing dual symmetrical state machines: DetectiveMode and KillerMode. Both game perspectives mutate a shared canonical crime scene data model (CASE_DATA in caseData.js) featuring physical evidence nodes, forensic tampering states, and suspect suspicion vectors. The evidence corkboard employs dynamic SVG path rendering to compute red-string Bezier tangents connecting discovered clues to multi-clue deduction rules. The interrogation system integrates real-time biometric simulation (heart rate BPM and composure decay) paired with conversational state trees and contradiction detection. An ambient Web Audio API engine synthesizes adaptive procedural soundscapes, including binaural heartbeats and cassette tape mechanical clicks without external audio files. State serialization uses versioned localStorage with PWA Service Worker caching (sw.js).",
      generalIdea: "PROJECT L.I.Z. (Case File 09) is an intense, atmospheric psychological cat-and-mouse thriller game exploring crime, deception, and forensic deduction through innovative symmetrical gameplay. Set in a rain-drenched neon-noir city, players can experience the murder investigation from either side of the law. As the Detective, players comb the crime scene for physical evidence, reconstruct timelines on an interactive red-string corkboard, and conduct high-stakes interrogations watching for biometric stress signals. As the Killer, players race against time with limited Action Points (AP) to wipe fingerprints, plant misleading evidence, manage spiking panic heart rates, and endure the Detective's grilling without cracking under pressure. Every decision impacts forensic integrity and leads to multiple starkly different narrative conclusions.",
      keyFeatures: [
        "Symmetrical Dual-Perspective Gameplay: Play the identical crime scene as either Detective Arthur Vance hunting for truth or the Killer desperately concealing their identity.",
        "Interactive Forensic Evidence Corkboard: Real-time SVG red-string pinboard connecting discovered forensic clues into breakthrough deductive conclusions.",
        "Dynamic Interrogation Room with ECG Biometrics: High-tension interrogation engine featuring animated heart-rate monitors, composure meters, and psychological pressure tactics.",
        "Action Point (AP) & Composure Economy: The Killer must balance limited action points with rising panic levels, risking sloppy evidence cleanup if heart rate spikes too high.",
        "Forensic Tampering & Staging Mechanics: Burn incriminating audio cassettes, wipe latent fingerprints, reposition murder weapons, and plant false evidence to frame rival suspects.",
        "Contradiction & Alibi Cross-Examination: Detective mode cross-references suspect testimonies against physical autopsy findings and corkboard deductions to expose lies.",
        "Procedural Web Audio Sound Engine: Synthesizes dynamic tension drones, pulsating human heartbeats, analog cassette recorder motor hums, and thunderous rain in real-time.",
        "Multiple Branching Narrative Endings: Culminates in diverse outcomes ranging from Perfect Deduction and Framing an Innocent to Killer Escape and Total Forensic Collapse.",
        "Rich Noir Aesthetic & CRT Post-Processing: Atmospheric design featuring scanlines, chromatic aberration, tape player UI, and rain-soaked forensic photography.",
        "Instant Perspective Flip: Replay the identical case file from the opposing side to witness firsthand how the Killer's tampering baffles the Detective's investigation.",
        "Full Session Autosave & Resume: LocalStorage game state serialization preserving discovered clues, evidence placements, and dialogue progress across browser reloads.",
        "Offline-First Progressive Web App: Service Worker precaching of all stylesheet modules, game controllers, and typography for distraction-free offline gameplay."
      ],
      techStack: [
        "Vanilla JavaScript (ES6+ Modules)",
        "Web Audio API (Procedural Audio)",
        "SVG Dynamic Vector Graphics",
        "CSS3 Animations & CRT FX",
        "Service Worker (PWA)",
        "LocalStorage State Engine",
        "GitHub Pages"
      ],
      learningOutcomes: [
        "Forensic Chain of Custody: Understand how tampering with or contaminating physical crime scene evidence irrevocably skews forensic analysis and investigative logic.",
        "Biometrics & Stress Analysis: Observe how autonomic stress responses (elevated heart rate, composure decay) betray psychological deception during targeted cross-examination.",
        "Symmetrical Game Design: Analyze how sharing a single canonical world state between opposing roles creates emergent tactical counter-play and psychological immersion.",
        "Deductive Synthesis via Visual Mapping: Learn how spatial evidence clustering (corkboard red strings) organizes disparate data points into cohesive investigative hypotheses.",
        "Procedural Audio Synthesis: Discover how the Web Audio API can generate immersive cinematic soundscapes (heartbeats, hums, clicks) entirely from code without audio downloads.",
        "Narrative Consequence Architecture: Master branching storytelling design where multiple independent game vectors determine moral and legal outcomes."
      ],
      labs: [
        {
          name: "Symmetrical Scene State Comparator",
          desc: "Interactive dual-pane visualizer comparing the virgin crime scene state against the Killer's tampered version in real time."
        },
        {
          name: "SVG Red-String Deduction Grapher",
          desc: "Network topology sandbox demonstrating how connecting evidence nodes triggers multi-clue deductive logic gates."
        },
        {
          name: "Interrogation ECG Stress Simulator",
          desc: "Psychological testing chamber measuring simulated suspect pulse rates and composure decay under varying interrogation pressures."
        },
        {
          name: "Action Point Budgeting Matrix",
          desc: "Tactical resource planning tool optimizing the Killer's finite AP allocation between evidence removal, cleaning, and staging."
        },
        {
          name: "Web Audio Heartbeat Synthesizer",
          desc: "Audio engineering lab manipulating Web Audio oscillators and low-pass biquad filters to generate dynamic tension heartbeats."
        },
        {
          name: "Contradiction Matrix Diagnostic",
          desc: "Logic verification workbench mapping suspect statements against physical crime scene facts to identify irreconcilable testimonies."
        },
        {
          name: "Branching Ending Probability Tree",
          desc: "Narrative engine analyzing how evidence preservation percentages and suspicion vectors steer players toward each of the distinct endings."
        },
        {
          name: "CRT Filter & Chromatic Aberration Lab",
          desc: "Shader and CSS visual styling workbench calibrating scanline intensity, bloom, and chromatic lens drift for immersive noir styling."
        }
      ]
    }
  },
  {
    id: "leader-atlas",
    title: "LeaderAtlas",
    subtitle: "Global Political History, Leadership Ideologies & Governance Archive",
    category: "philosophy",
    image: leaderAtlasIcon,
    liveUrl: "https://rswarke1972-art.github.io/LeaderAtlas/",
    githubUrl: "https://github.com/rswarke1972-art/LeaderAtlas",
    featured: true,
    isPwa: false,
    tags: ["Political Science", "World History", "Governance Archive", "Comparative Politics", "Statecraft", "Interactive Timelines", "Ideological Mapping", "Entity Graph"],
    shortDescription: "A comprehensive, modular world leadership and political history exploration archive. Features deep historical dossiers on over 447 world leaders across 199 sovereign nations, mapping political ideologies, historical event timelines, policy achievements, criticisms, and constitutional transitions through dynamic client-side entity linking.",
    details: {
      working: "LeaderAtlas is built as an ultra-fast, zero-dependency static web platform driven by a modular client-side architecture. The navigation layer uses a hash-based single-page application router (router.js) that intercepts hash changes to dynamically transition between the global nation directory, country dossiers, leader profiles, and comparative ideology indexes. A tiered asynchronous data loader (dataLoader.js) fetches normalized JSON files on demand with an in-memory caching layer, eliminating redundant network roundtrips. The core intelligence engine features an automatic relational cross-linker (autolinker.js) that dynamically identifies and links political parties, historical events, and ideological terms mentioned inside leader biographies. Multi-faceted filtering (filters.js) enables instant compound queries across governance forms, ideological spectrums, and historical eras, while dynamic timeline builders (timeline.js) generate interactive chronological visual sequences entirely through CSS Grid and vanilla DOM manipulation.",
      generalIdea: "LeaderAtlas is an open educational archive and comparative political science laboratory dedicated to deconstructing the mechanisms of statecraft, institutional power, and governance across world history. By synthesizing over 447 leader dossiers across 199 nations, the platform examines how political ideologies - from classical liberalism and democratic socialism to authoritarianism, post-colonial nationalism, and monarchism - shape national destinies and international relations. Rather than presenting hagiographies or simplistic biographical summaries, each leader record balances major legislative and foreign policy achievements against documented historical criticisms, domestic dissent, human rights records, and long-term socio-economic legacies. Through interactive comparative timelines and interconnected entity graphs, users explore how individual decisions, systemic institutional constraints, and prevailing ideological currents intersect to forge modern global geopolitics.",
      keyFeatures: [
        "Comprehensive Global Dossier Database: Detailed political records covering over 447 world leaders across 199 sovereign nations spanning modern and contemporary eras.",
        "Hash-Based Client-Side Router: Fluid single-page navigation supporting deep-linkable URLs for specific nations, leaders, political parties, and historic milestones.",
        "Tiered Asynchronous JSON Caching: High-performance data pipeline that asynchronously retrieves and caches modular country and leader datasets without external database overhead.",
        "Dynamic Entity Auto-Linker: Contextual text-scanning engine that cross-links references to political parties, historic treaties, and ideological movements directly within biographies.",
        "Interactive Chronological Timelines: Visual milestone tracking mapping administrations, major legislative acts, foreign conflicts, and constitutional shifts along responsive timelines.",
        "Ideological Taxonomy & Spectrum Mapping: Systematic categorization of leaders by economic and social coordinates, party platforms, and philosophical traditions.",
        "Balanced Dual-Perspective Analysis: Unbiased documentation pairing documented policy achievements and reform milestones with verified historical criticisms and institutional challenges.",
        "Multi-Faceted Compound Search: Real-time fuzzy keyword search indexing leader names, sovereign nations, executive titles, political factions, and key legislative terms.",
        "Categorical Multi-Filter System: Instantaneous filtering across continents, government structures (parliamentary, presidential, constitutional monarchy), and political eras.",
        "Relational Faction & Party Indexes: Dedicated archives tracing the genealogy, electoral coalitions, and ideological evolutions of major political parties worldwide.",
        "Zero-Dependency Pure Web Architecture: Engineered entirely in semantic HTML5, modern CSS3, and vanilla ES6+ JavaScript for instant load times and permanent static hostability.",
        "Fully Responsive Civic UI: High-contrast typography and neoclassical aesthetic optimized for desktops, tablets, and mobile devices without framework bloat."
      ],
      techStack: [
        "Vanilla JavaScript (ES6+ Modules)",
        "Semantic HTML5 & WAI-ARIA",
        "Modern CSS3 (Grid & Flexbox)",
        "Modular JSON Database (1000+ files)",
        "Hash-Based SPA Routing",
        "Client-Side In-Memory Cache",
        "GitHub Pages Deployment"
      ],
      learningOutcomes: [
        "Comparative Statecraft Analysis: Evaluate how differing constitutional systems and executive powers influence governance outcomes and crisis responses.",
        "Ideological Genealogy: Trace the philosophical lineage of major political movements and observe how theoretical ideologies adapt when confronted with real-world governance.",
        "Balanced Historical Historiography: Develop critical reasoning by weighing positive policy reforms against domestic criticisms, institutional overreach, and long-term consequences.",
        "Relational Historical Contextualization: Understand how international treaties, economic shifts, and global conflicts reverberate across simultaneously active national administrations.",
        "Zero-Framework SPA Architecture: Master the implementation of hash routers, asynchronous data memoization, and dynamic DOM rendering using pure vanilla web standards.",
        "Curated Data Structure Design: Learn best practices for architecting normalized, scalable JSON schemas representing complex multi-relational historical entities."
      ],
      labs: [
        {
          name: "Ideological Compass & Spectrum Sandbox",
          desc: "Interactive coordinate matrix plotting historical leaders across economic and social governance axes to analyze ideological clustering."
        },
        {
          name: "Synchronous Global Timeline Comparator",
          desc: "Multi-track chronological visualizer aligning tenures of contemporary leaders to study parallel global responses to historical crises."
        },
        {
          name: "Relational Entity Link Graph Explorer",
          desc: "Visual node mapping environment illustrating reciprocal connections between political factions, landmark treaties, and leader decisions."
        },
        {
          name: "Constitutional Governance System Simulator",
          desc: "Comparative institutional lab contrasting executive authority and legislative balance across presidential, parliamentary, and semi-presidential models."
        },
        {
          name: "Achievement vs Criticism Policy Evaluator",
          desc: "Analytical scoring workbench dissecting contested historical policies through dual lenses of stated legislative goals versus recorded socio-economic impacts."
        },
        {
          name: "Compound Query & Faction Filter Lab",
          desc: "Search optimization sandbox testing multi-parameter boolean queries across party affiliations, governance eras, and geographic jurisdictions."
        },
        {
          name: "Client-Side JSON Memoization Benchmark",
          desc: "Performance diagnostic measuring network payload efficiency, memory footprint, and cache hit ratios across large-scale static entity datasets."
        },
        {
          name: "Hash Router State & History Emulator",
          desc: "Single-page application navigation lab demonstrating browser history manipulation, state serialization, and deep-link reconstruction."
        }
      ]
    }
  }
];
