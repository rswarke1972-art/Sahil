import React from "react";
import { ArrowRight, BookOpen, Sparkles, Layers, Code, Globe, ShieldCheck } from "lucide-react";

export default function Hero({ totalProjects = 45 }) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none animate-glow-slow"></div>
      <div className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none animate-glow-slow" style={{ animationDelay: "-4s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-8 shadow-lg shadow-cyan-950/40 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Full-Stack & Frontend Developer · Interactive Systems Architect · Author</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 font-heading leading-[1.08]">
          Building Software That{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Teaches, Simulates
          </span>{" "}
          & Inspires.
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-normal">
          I am <strong className="text-white font-semibold">Sahil Rajesh Warke</strong>. I transform complex domains from mathematics, 
          neuropsychology, and linguistics to financial trading and statecraft into rich, interactive web applications, 
          Progressive Web Apps (PWAs), games, and literature.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition flex items-center justify-center gap-2 group"
          >
            <Layers className="w-5 h-5 group-hover:rotate-6 transition" />
            <span>Explore All {totalProjects}+ Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>

          <a
            href="#book"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-button text-slate-100 hover:text-cyan-300 font-semibold text-base shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition flex items-center justify-center gap-2 border border-slate-700/80"
          >
            <BookOpen className="w-5 h-5 text-purple-400" />
            <span>Discover The Book</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition group">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Code className="w-4 h-4" />
              <span className="text-xl font-bold font-heading text-white">{totalProjects}+</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Live Projects & Tools</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition group">
            <div className="flex items-center gap-2 text-teal-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xl font-bold font-heading text-white">10+</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Progressive Web Apps (PWA)</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition group">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-xl font-bold font-heading text-white">12+</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Multilingual Platforms</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-purple-500/40 transition group">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-xl font-bold font-heading text-white">1</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Published Novel</p>
          </div>
        </div>
      </div>
    </section>
  );
}
