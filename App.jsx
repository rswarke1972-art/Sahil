import gameImage from "./images/Screenshot (592).png";
import calcImage from "./images/Screenshot (593).png";
import indieflowImage from "./images/Screenshot (599).png";
import unityscriptImage from "./images/Screenshot (600).png";
import fridge2foodImage from "./images/Screenshot (601).png";
import japaneseflowImage from "./images/Screenshot (602).png";
import codemasteryImage from "./images/Screenshot (603).png";
import arabicflowImage from "./images/Screenshot (604).png";
import strokeflowImage from "./images/Screenshot (605).png";
import koreanflowImage from "./images/Screenshot (606).png";
import lexiverseImage from "./images/Screenshot (607).png";
import budhbhushanamImage from "./images/Screenshot (608).png";
import anchortalkImage from "./images/Screenshot (609).png";
import ashtavakraImage from "./images/Screenshot (610).png";
import latinflowImage from "./images/Screenshot (611).png";
import reminderImage from "./images/Screenshot (612).png";
import kurdishflowImage from "./images/Screenshot (613).png";
import farsiflowImage from "./images/Screenshot (614).png";
import idiomverseImage from "./images/Screenshot (615).png";
import langosphereImage from "./images/Screenshot (616).png";
import bondlyImage from "./images/Screenshot (617).png";
import realmoraImage from "./images/Screenshot (618).png";
import fracturedselfImage from "./images/Screenshot (619).png";
import corezenImage from "./images/Screenshot (620).png";
import artysseyImage from "./images/Screenshot (621).png";
import geoclueImage from "./images/Screenshot (622).png";
import dateyumeiImage from "./images/Screenshot (623).png";
import mindhavenImage from "./images/Screenshot (624).png";
import botaniqImage from "./images/Screenshot (625).png";
import mathpeakImage from "./images/Screenshot (626).png";
import memaImage from "./images/Screenshot (627).png";
import goldenbaghdadImage from "./images/Screenshot (628).png";
import pawnovaImage from "./images/Screenshot (629).png";
import threadoraImage from "./images/Screenshot (630).png";
import gateforgeImage from "./images/Screenshot (631).png";
import linguawarImage from "./images/Screenshot (632).png";
import neuropsyImage from "./images/Screenshot (633).png";
import memoraImage from "./images/Screenshot (634).png";
import prompticaImage from "./images/Screenshot (635).png";
import audioleafImage from "./images/Screenshot (636).png";
import emailjs from "@emailjs/browser";

function App() {
  function sendEmail(event) {
  event.preventDefault();

  const params = {
    name: event.target.name.value,
    email: event.target.email.value,
    message: event.target.message.value,
  };

  emailjs
    .send(
      "service_a7ayyfv",
      "template_4z7fsjw",
      params,
      "WOOkqRSQ0vMflbWWI"
    )
    .then(() => {
      alert("Message sent successfully!");
      event.target.reset();
    })
    .catch((error) => {
      alert("Failed to send message.");
      console.error(error);
    });
}
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/60 border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold tracking-wide">
            Sahil<span className="text-cyan-400">.</span>
          </h1>

          <ul className="flex gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base text-slate-300 font-medium overflow-x-auto no-scrollbar">

  <a href="#home" className="hover:text-cyan-400 transition whitespace-nowrap">
    Home
  </a>

  <a href="#about" className="hover:text-cyan-400 transition whitespace-nowrap">
    About
  </a>

  <a href="#projects" className="hover:text-cyan-400 transition whitespace-nowrap">
    Projects
  </a>

  <a href="#contact" className="hover:text-cyan-400 transition whitespace-nowrap">
    Contact
  </a>

</ul>

        </div>

      </nav>

      {/* Hero Section */}
      <section
  id="home"
  className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
>

        <p className="mb-4 text-cyan-400 font-semibold tracking-widest uppercase">
          Frontend Developer
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
          Sahil Rajesh
          <span className="block text-cyan-400">
            Warke
          </span>
        </h1>

        <p className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10 px-2">
          I build modern web applications, interactive tools,
          educational platforms, and beautiful frontend experiences
          using React, JavaScript, and creative UI design.
        </p>

        <a
  href="#projects"
  className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 transition rounded-2xl font-semibold text-black shadow-lg shadow-cyan-500/30"
>
  View My Work
</a>

      </section>
            {/* Projects Section */}

                  {/* About Section */}

      <section id="about" className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-10">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed">
  I am a frontend developer passionate about building
  interactive educational platforms, language-learning ecosystems,
  simulations, and knowledge-based web applications.
  I enjoy transforming complex ideas into engaging digital
  experiences through clean UI design, interactive logic,
  quizzes, storytelling systems, animations, and meaningful user interaction.
  My projects focus on learning, self-improvement,
  language acquisition, and practical problem-solving.
</p>

        </div>

      </section>

      <section id="projects" className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-16 text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {/* Project Card 1 */}

            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

              <img
  src={gameImage}
  alt="Strategy Simulator"
  className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
/>

              <h3 className="text-3xl font-bold mb-4">
                Leadership Strategy Simulator
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                A complex decision-making simulation game featuring
                morality systems, rankings, analytics, combinations,
                and strategic gameplay mechanics.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                  JavaScript
                </span>

                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                  HTML
                </span>

                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                  CSS
                </span>

              </div>

              <a
  href="https://rswarke1972-art.github.io/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
>
  Live Demo
</a>

            </div>

            {/* Project Card 2 */}

            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

              <img
  src={calcImage}
  alt="Calculator"
  className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
/>

              <h3 className="text-3xl font-bold mb-4">
                React Scientific Calculator
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                Advanced calculator built using React with variable memory,
                custom functions, format modes, complex calculations,
                and modern UI controls.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                  React
                </span>

                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                  Tailwind
                </span>

                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                  JavaScript
                </span>

              </div>

              <a
  href="https://rswarke1972-art.github.io/react-calculator/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
>
  Live Demo
</a>

            </div>

            {/* Project Card 3 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={indieflowImage}
    alt="IndieFlow"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    IndieFlow
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive Indian language learning platform supporting
    Hindi, Gujarati, Tamil, Bengali, Marathi, and Sanskrit through
    quizzes, stories, character learning, and sentence-building activities.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Educational Platform
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Language Learning
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/IndieFlow/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Bondly Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
  src={bondlyImage}
  alt="Bondly"
  className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
/>

  <h3 className="text-3xl font-bold mb-4">
    Bondly
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A social networking platform designed to help people discover
    friends, language partners, and study partners worldwide.
    Features real-time messaging, friend requests, voice messages,
    photo and video sharing, file uploads, and interest-based
    connection discovery.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Social Network
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Real-Time Chat
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Firebase
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Bondly/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Realmora Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={realmoraImage}
    alt="Realmora"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Realmora
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A multiplayer kingdom strategy game where players build empires,
    manage economy, diplomacy, trust, and military strength while
    making impactful decisions. Form alliances, establish trade routes,
    gather intelligence through spies, launch sabotage operations,
    or wage war against rival kingdoms in a dynamic political world.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Multiplayer Game
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Strategy Simulation
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Kingdom Management
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Realmora/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 4 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={unityscriptImage}
    alt="UnityScript"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    UnityScript
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A structured scripture learning platform that explores philosophical
    and spiritual texts through verse analysis, interpretation,
    real-life applications, cross-links, and insight-based learning systems.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Educational Platform
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Philosophy
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/UnityScript/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 5 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={fridge2foodImage}
    alt="Fridge2Food"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Fridge2Food
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A smart cooking and meal discovery platform that provides recipes,
    nutritional insights, cooking steps, ingredient management,
    and categorized food exploration through an interactive interface.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Nutrition
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Food Platform
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Fridge2Food/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Fractured Self Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={fracturedselfImage}
    alt="Fractured Self"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Fractured Self
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive visual novel storytelling experience where the story
    unfolds scene by scene through cinematic imagery, dialogue,
    and immersive progression. Users advance the narrative by clicking
    through story moments while experiencing character-driven drama,
    emotional tension, and atmosphere-enhancing visual storytelling.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Interactive Story
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Visual Novel
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Cinematic Experience
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/FracturedSelf/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 6 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={japaneseflowImage}
    alt="JapaneseFlow"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    JapaneseFlow
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A multimedia Japanese learning platform featuring Hiragana,
    Katakana, and Kanji systems with stroke animations,
    audio pronunciation, quizzes, interactive stories,
    YouTube-integrated lessons, music playback,
    and intelligent word search functionality.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Kanji Animation
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Quiz System
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/JapaneseFlow/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 7 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={codemasteryImage}
    alt="CodeMastery"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    CodeMastery
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive programming practice platform that allows users
    to solve coding problems, study structured solutions,
    practice algorithms, and improve problem-solving skills
    through a modern learning interface.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Problem Solving
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Coding Platform
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/CodeMastery/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 8 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={arabicflowImage}
    alt="ArabicFlow"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    ArabicFlow
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A complete Arabic learning platform featuring letter learning,
    all 4 Arabic forms (isolated, initial, medial, final),
    interactive stories in 5 Arabic dialects,
    quizzes, and smart search functionality for language exploration.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Arabic Dialects
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Quiz System
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/ArabicFlow/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 9 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={strokeflowImage}
    alt="StrokeFlow"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    StrokeFlow
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A Chinese character learning platform designed around HSK levels,
    featuring stroke order learning, quiz mode, story mode,
    meaning-based search, and interactive vocabulary exploration
    for effective Mandarin learning.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Chinese Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      HSK System
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/StrokeFlow/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* CoreZen Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={corezenImage}
    alt="CoreZen"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    CoreZen
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A comprehensive fitness and wellness platform designed to help
    users train effectively through exercise tutorials, instructional
    videos, yoga guidance, workout planning, diet recommendations,
    anatomy learning, and gym machine education. Exercises are
    categorized by muscle groups to provide structured fitness
    progression for beginners and experienced athletes alike.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Fitness Platform
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Exercise Library
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Wellness Guide
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/CoreZen/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Artyssey Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={artysseyImage}
    alt="Artyssey"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Artyssey
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An art exploration platform that helps users understand famous
    paintings beyond their visual appearance. Each artwork is analyzed
    through symbolism, facial expressions, body language, composition,
    lighting, color usage, historical context, emotional themes,
    artistic intent, and hidden details. Users can discover artworks
    through searchable tags, artists, movements, themes, and subjects.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Art Analysis
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Visual Storytelling
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Cultural Education
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Artyssey/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* GeoClue Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={geoclueImage}
    alt="GeoClue"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    GeoClue
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An educational geography quiz platform where players identify
    countries using cultural, historical, geographical, and social
    clues. Users earn points for correct answers and lose points for
    incorrect guesses while learning about nations, landmarks,
    traditions, and unique characteristics from around the world
    through an engaging game-based learning experience.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Geography Quiz
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Educational Game
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Country Learning
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/GeoClue/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* DateYumei Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={dateyumeiImage}
    alt="DateYumei"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    DateYumei
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive romance visual novel where players experience a
    heartfelt story with Yumei through cinematic artwork, dialogue,
    and emotional storytelling. The narrative unfolds scene by scene,
    gradually developing friendship, trust, and romance while creating
    a personalized experience that addresses the player by name and
    immerses them in the journey.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Visual Novel
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Interactive Story
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Romance Narrative
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/DateYumei/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 10 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={koreanflowImage}
    alt="KoreanFlow"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    KoreanFlow
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive Korean learning platform featuring Hangul learning,
    clickable story mode with instant meanings and pronunciation,
    audio-assisted vocabulary exploration, quizzes,
    and search-based language learning tools.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Korean Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Interactive Stories
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/KoreanFlow/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 11 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={lexiverseImage}
    alt="LexiVerse"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    LexiVerse
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An immersive vocabulary learning platform where users explore
    interactive stories and click words to instantly discover
    meanings, pronunciation, synonyms, antonyms, etymology,
    examples, language evolution, and contextual usage.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Vocabulary Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Interactive Stories
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/LexiVerse/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* MindHaven Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={mindhavenImage}
    alt="MindHaven"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    MindHaven
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A mental wellness support platform designed to help people navigate
    stress, anxiety, loneliness, trauma, ADHD, OCD, depression, and
    other emotional challenges. The platform provides calming exercises,
    grounding techniques, guided breathing, journaling tools, coping
    strategies, self-reflection insights, achievement tracking, and
    crisis support resources in a safe and supportive environment.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Mental Wellness
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Coping Tools
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Self-Care Platform
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/MindHaven/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Botaniq Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={botaniqImage}
    alt="Botaniq"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Botaniq
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A relaxing botanical learning platform designed to help users
    explore the world of plants through an interactive ecosystem
    encyclopedia, plant classifications, medicinal herbs, bonsai
    education, growth tracking, care planning, and plant discovery
    systems. The platform combines education with a calm nature-inspired
    atmosphere to make learning botany enjoyable and immersive.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Botany Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Plant Encyclopedia
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Nature Education
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Botaniq/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* MathPeak Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={mathpeakImage}
    alt="MathPeak"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    MathPeak
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A gamified mathematics learning platform designed to guide users
    from foundational concepts to advanced topics through structured
    learning paths, practice challenges, visual explorations, formula
    references, and problem-solving exercises. Progress tracking,
    achievements, streak systems, analytics, and daily learning goals
    help keep learners motivated throughout their mathematical journey.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Mathematics Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Gamified Education
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Problem Solving
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/MathPeak/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* MEMA Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={memaImage}
    alt="MEMA"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    MEMA
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive choice-driven visual novel inspired by the classic
    novel Emma. Players shape the narrative through meaningful decisions,
    relationships, and moral dilemmas, with each choice influencing
    future events, character dynamics, story branches, and ultimately
    determining one of multiple possible endings.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Choice-Based Story
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Multiple Endings
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Interactive Novel
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Mema/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Golden Baghdad Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={goldenbaghdadImage}
    alt="Golden Baghdad"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Golden Baghdad
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive historical storytelling platform that follows the
    life and reign of Harun al-Rashid throughout the Abbasid Golden Age.
    The story is divided into structured chapters that explore political
    events, culture, science, diplomacy, leadership, and historical
    developments. Progression systems, achievements, milestones, and
    interactive learning elements help keep readers engaged while
    discovering one of history's most influential eras.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Historical Storytelling
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Interactive Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Abbasid History
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/GoldenBaghdad/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Pawnova Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={pawnovaImage}
    alt="Pawnova"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Pawnova
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A modern chess learning platform designed to help players improve
    from beginner to advanced levels through lessons, puzzles,
    opening preparation, battle arenas, progress tracking, tactical
    challenges, achievement systems, and AI-powered chess opponents.
    The platform combines structured learning with gamified progression
    to make chess improvement engaging and rewarding.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Chess Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Strategy Training
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Gamified Education
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Pawnova/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Threadora Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={threadoraImage}
    alt="Threadora"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Threadora
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A creative learning platform dedicated to crochet, knitting, and
    fiber arts. Users can learn stitches step by step, follow guided
    patterns, discover beginner-to-advanced projects, explore crafting
    techniques, and build handmade creations through structured lessons,
    pattern libraries, and skill progression systems.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Crochet Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Knitting Guide
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Creative Crafts
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Threadora/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* GATEFORGE Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={gateforgeImage}
    alt="GATEFORGE"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    GATEFORGE
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A comprehensive GATE preparation platform designed to help
    engineering students track progress, identify weaknesses,
    practice previous year questions, analyze performance, manage
    revisions, take mock tests, maintain error journals, predict AIR,
    and organize study plans. The platform focuses on data-driven
    preparation by automatically highlighting weak topics and guiding
    students toward more efficient exam readiness.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      GATE Preparation
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Exam Analytics
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Study Tracking
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/GATEFORGE/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* LinguaWar Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={linguawarImage}
    alt="LinguaWar"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    LinguaWar
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A multiplayer language learning battle platform where players
    compete against each other through real-time linguistic challenges.
    Participants can complete translations, finish sentences, answer
    vocabulary questions, solve cultural trivia, and race against
    opponents to improve their language skills while climbing rankings,
    earning achievements, and progressing through competitive leagues.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Multiplayer Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Language Battles
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Gamified Education
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/LinguaWar/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* NeuroPsy Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={neuropsyImage}
    alt="NeuroPsy"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    NeuroPsy
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive neuropsychology learning platform designed to help
    users understand the human brain, cognition, memory, emotions,
    neuroplasticity, psychological disorders, and behavioral science.
    The platform organizes complex neuroscience topics into structured
    learning paths with searchable lessons, quizzes, glossaries,
    progress tracking, and domain-based roadmaps that make advanced
    psychological concepts easier to learn and explore.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Neuropsychology
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Interactive Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Cognitive Science
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/NeuroPsy/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Memora Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={memoraImage}
    alt="Memora"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Memora
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A mindful digital journaling platform that helps users build a
    consistent diary-writing habit. Memora tracks moods, emotions,
    feelings, writing streaks, and personal reflections, then generates
    thoughtful journaling prompts based on the user's emotional state.
    Entries are organized into a searchable memory vault, while
    consistency tracking encourages long-term self-reflection and
    personal growth. The application is also a Progressive Web App
    (PWA), allowing users to install it and use it like a native mobile
    application.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Journaling
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Mood Tracking
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Progressive Web App
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/memora/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Promptica Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={prompticaImage}
    alt="Promptica"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Promptica
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An AI prompt discovery platform designed to help users find,
    search, organize, and use high-quality prompts for ChatGPT and
    other large language models. Promptica categorizes prompts by
    skill level, task type, and domain such as writing, coding,
    research, productivity, learning, and creativity. Users can
    instantly copy prompts, explore prompt libraries, and discover
    structured prompt patterns that improve AI outputs for real-world
    tasks and workflows.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Prompt Engineering
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      AI Tools
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Productivity
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Promptica/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 12 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={budhbhushanamImage}
    alt="Budhbhushanam"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Budhbhushanam
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A verse interpretation platform focused on the wisdom of
    Budhbhushanam, helping users deeply understand meanings,
    symbolism, leadership principles, philosophical ideas,
    real-life applications, and practical insights from each verse.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Leadership Wisdom
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Verse Interpretation
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/Budhbhushanam/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 13 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={anchortalkImage}
    alt="AnchorTalk"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    AnchorTalk
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive communication learning platform designed to help
    users respond thoughtfully to people in emotional distress through
    realistic conversation scenarios, supportive dialogue practice,
    empathy-building exercises, and guidance on effective communication.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Communication Skills
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Scenario Learning
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/AnchorTalk/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 14 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={ashtavakraImage}
    alt="Ashtavakra Gita Decoder"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Ashtavakra Gita Decoder
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A philosophical verse interpretation platform designed to decode
    the teachings of the Ashtavakra Gita through detailed meanings,
    word-by-word explanations, logic, debates, stories,
    real-life applications, self-reflection, and practical wisdom.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Philosophy
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Self Inquiry
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/AstavakraGitaDecoder/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 15 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={latinflowImage}
    alt="LatinFlow"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    LatinFlow
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A multilingual language learning platform supporting
    Spanish, French, German, Italian, Indonesian, and Portuguese
    through quizzes, interactive stories, sentence-building exercises,
    and tense-based practice across present, past, and future forms.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Language Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Grammar Practice
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/LatinFlow/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 16 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={reminderImage}
    alt="Reminder System"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    Reminder System
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A productivity-focused task and reminder platform that helps users
    schedule activities, create weekly plans, track progress,
    manage repeating tasks, and build consistent habits
    through an interactive reminder system.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Productivity
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Task Management
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/reminder/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 17 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={kurdishflowImage}
    alt="KurdishFlow"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    KurdishFlow
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive Kurdish language learning platform featuring
    alphabet learning, interactive stories, quizzes,
    pronunciation-based exploration, and smart search tools
    to help users understand Kurdish language fundamentals.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Language Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Quiz System
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/KurdishFlow/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 18 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={farsiflowImage}
    alt="FarsiFlow"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    FarsiFlow
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A Persian (Farsi) language learning platform featuring
    alphabet learning, interactive quizzes, vocabulary
    training, pronunciation practice, word-meaning exercises,
    and immersive language learning experiences.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Language Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Quiz System
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/FarsiFlow/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 19 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={idiomverseImage}
    alt="IdiomVerse"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    IdiomVerse
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An interactive English idiom and phrases learning platform that teaches
    meanings, origins, real-life usage, examples, and contextual
    understanding through immersive stories, clickable idioms,
    and quiz-based learning experiences.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Language Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Interactive Stories
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/IdiomVerse/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* Project Card 20 */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={langosphereImage}
    alt="LangoSphere"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    LangoSphere
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    A multilingual sentence-learning platform that helps users
    understand languages through sentence breakdowns,
    translations, grammar explanations, vocabulary analysis,
    and contextual alternatives for deeper language comprehension.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Language Learning
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Grammar Analysis
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/LangoSphere-/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>

{/* AudioLeaf Project Card */}

<div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

  <img
    src={audioleafImage}
    alt="AudioLeaf"
    className="h-48 sm:h-56 w-full object-cover rounded-2xl mb-6"
  />

  <h3 className="text-3xl font-bold mb-4">
    AudioLeaf
  </h3>

  <p className="text-slate-300 leading-relaxed mb-6">
    An AI-powered audiobook generation platform that converts PDFs,
    scanned books, documents, and study materials into spoken audio.
    AudioLeaf extracts text using OCR technology, supports multiple
    languages, displays reading progress, and transforms written
    content into accessible listening experiences. Designed for
    students, readers, language learners, researchers, and people
    who prefer consuming knowledge through audio rather than
    traditional reading.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      OCR
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Text-to-Speech
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
      Accessibility
    </span>

  </div>

  <a
    href="https://rswarke1972-art.github.io/AudioLeaf/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-semibold text-black transition"
  >
    Live Demo
  </a>

</div>
          </div>

        </div>

              {/* Contact Section */}

            {/* Contact Section */}

      <section id="contact" className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-5xl font-bold mb-12 text-center">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <form
            onSubmit={sendEmail}
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 sm:p-8 md:p-10 space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 rounded-2xl font-semibold text-black transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      </section>

    </div>
  );
}

export default App;