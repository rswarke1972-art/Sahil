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