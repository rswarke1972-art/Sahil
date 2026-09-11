import React, { useState } from "react";
import { BookOpen, ExternalLink, Sparkles, Heart, Quote, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { bookData } from "../data/bookData";

export default function BookShowcase() {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);

  return (
    <section id="book" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-purple-600/15 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Published Literary Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            The Questions <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">That Heal</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A novel blending psychology, philosophy, healing, and the quiet courage to transform one conversation at a time.
          </p>
        </div>

        {/* Main Book Feature Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-purple-500/20 shadow-2xl shadow-purple-950/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Book Cover Visual (3D Tilt Effect) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group perspective-1000">
                {/* Ambient glow behind book */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/40 via-pink-500/30 to-cyan-500/40 rounded-2xl blur-xl group-hover:blur-2xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative rounded-2xl overflow-hidden border border-purple-400/30 shadow-2xl shadow-purple-950/80 group-hover:scale-[1.02] transition-all duration-500 max-w-[280px] sm:max-w-[320px]">
                  <img
                    src={bookData.coverImage}
                    alt={bookData.title}
                    className="w-full h-auto object-cover block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-purple-200 font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      Free on Internet Archive
                    </span>
                  </div>
                </div>
              </div>

              {/* Author Attribution */}
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">By {bookData.author}</p>
                <p className="text-xs text-slate-400 font-mono-code">Published Novel & Academic Synthesis</p>
              </div>
            </div>

            {/* Book Details & Synopsis */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quote Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/30 border border-purple-500/20 relative">
                <Quote className="w-8 h-8 text-purple-400/20 absolute top-3 right-3 pointer-events-none" />
                <p className="text-purple-200 italic text-base sm:text-lg font-medium leading-relaxed">
                  "{bookData.quote}"
                </p>
              </div>

              {/* Overview text */}
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Some wounds cannot be seen. They live quietly in memories, relationships, unanswered questions, and the stories we tell ourselves.
                </p>
                <p>
                  <strong>Professor Vinay</strong> never claims to have all the answers. Instead, he believes that the right question, asked with patience and compassion, can help people discover their own path toward healing.
                </p>
                
                {showFullSynopsis && (
                  <div className="pt-2 space-y-3 text-slate-300 animate-in fade-in duration-300">
                    <p>
                      Through the lives of <strong>Rudhika</strong>, <strong>Adhrika</strong>, and others who cross his path, <em>The Questions That Heal</em> explores grief, trauma, love, attachment, forgiveness, self-discovery, and the quiet courage it takes to grow.
                    </p>
                    <p>
                      Blending psychology with philosophy, this novel is not about perfect lives or perfect people. It is about ordinary human beings learning to face extraordinary emotional struggles one conversation at a time.
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => setShowFullSynopsis(!showFullSynopsis)}
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition flex items-center gap-1 cursor-pointer"
              >
                {showFullSynopsis ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>Read Full Synopsis</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Themes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {bookData.details.keyThemes.map((theme) => (
                  <div key={theme.title} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      {theme.title}
                    </h4>
                    <p className="text-[12px] text-slate-400 leading-snug">
                      {theme.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={bookData.archiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-400 hover:to-pink-400 text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-95 transition flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Free on Internet Archive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <Heart className="w-3.5 h-3.5 text-pink-400" />
                  <span>Open Access & Free Borrowing</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
