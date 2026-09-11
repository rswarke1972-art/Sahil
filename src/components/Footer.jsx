import React from "react";
import { ArrowUp, BookOpen, Heart, Layers } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#home" className="flex items-center gap-2 mb-2 group">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-black text-base shadow-md shadow-cyan-500/20">
              S
            </div>
            <span className="text-lg font-bold text-white font-heading">
              Sahil Rajesh Warke<span className="text-cyan-400">.</span>
            </span>
          </a>
          <p className="text-xs text-slate-500 max-w-sm">
            Frontend & Full-Stack Developer · Creator of 45+ Web Platforms & PWAs · Author of "The Questions That Heal"
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#book" className="hover:text-cyan-400 transition flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            The Book
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Projects
          </a>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
          <a
            href="https://archive.org/details/the-questions-that-heal/mode/2up"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition text-purple-400"
          >
            Internet Archive
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl glass-button text-slate-300 hover:text-cyan-400 transition flex items-center gap-2 text-xs font-semibold cursor-pointer border border-slate-800"
          aria-label="Scroll to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Sahil Rajesh Warke. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with React, Tailwind CSS & Passion for Learning.
        </p>
      </div>
    </footer>
  );
}
