import React from "react";
import { User, Code2, Brain, Globe2, Sparkles, BookOpen, Compass, Terminal } from "lucide-react";

export default function About() {
  const domains = [
    {
      icon: Code2,
      title: "Frontend & PWA Architecture",
      description:
        "Building responsive, high-performance web applications using React, modern JavaScript, Tailwind CSS, service workers, and offline-first storage patterns.",
      tags: ["React", "JavaScript", "PWA", "Tailwind CSS", "Vite", "Web Audio API", "HTML5 Canvas"],
      color: "cyan",
    },
    {
      icon: Globe2,
      title: "Linguistic Ecosystems",
      description:
        "Developing multilingual platforms covering Indic scripts, East Asian Kanji/Hangul stroke animations, Arabic letter mechanics, and European romance grammar engines.",
      tags: ["Indian Languages", "Japanese (Kanji)", "Chinese (HSK)", "Arabic", "Korean (Hangul)", "Farsi"],
      color: "blue",
    },
    {
      icon: Brain,
      title: "Psychology & Cognitive Science",
      description:
        "Integrating neuropsychology, CBT-guided journaling, empathetic dialogue simulations, and emotional wellness into thoughtful digital tools.",
      tags: ["Mental Wellness", "Neuroscience", "CBT Tools", "Scenario Empathy", "Mindfulness"],
      color: "purple",
    },
    {
      icon: Compass,
      title: "Philosophy, Literature & Games",
      description:
        "Author of 'The Questions That Heal', creator of digital philosophy atlases, interactive visual novels, and strategic statecraft simulations.",
      tags: ["Published Author", "Advaita Vedanta", "Stoicism", "Kingdom Strategy", "Visual Novels"],
      color: "teal",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Multidisciplinary Creator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            About <span className="text-cyan-400">Sahil Rajesh Warke</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Where frontend engineering, cognitive psychology, linguistics, and literature converge into interactive software.
          </p>
        </div>

        {/* Story Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 mb-12 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">My Mission & Philosophy</h3>
              <p className="text-xs text-cyan-300 font-mono-code">Transforming Deep Knowledge into Digital Realities</p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            I am a full-stack and frontend developer passionate about creating digital experiences that educate, empower, and inspire.
            Rather than building cookie-cutter websites, I enjoy transforming complex subjects such as mathematical conjectures,
            stroke-by-stroke Kanji calligraphy, financial trading mechanics, classical philosophical debates, and psychological healing into
            engaging, tactile web platforms.
          </p>

          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            As the author of the published novel <strong className="text-purple-300">The Questions That Heal</strong>, my coding is deeply informed
            by human empathy, narrative structure, and clarity. Whether I'm architecting a Progressive Web App (PWA) with offline caching
            or building an interactive scenario simulator, my goal is always to deliver software that feels alive and meaningful.
          </p>
        </div>

        {/* Domains Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((dom) => {
            const Icon = dom.icon;
            return (
              <div
                key={dom.title}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 mb-4 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-heading">{dom.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{dom.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {dom.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs bg-slate-900 text-slate-300 border border-slate-800 font-mono-code"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
