import React, { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  Cpu,
  Sparkles,
  ShieldCheck,
  Layers,
  Copy,
  Check,
  Code2
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("idea");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.liveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: "idea", label: "General Idea", icon: Lightbulb },
    { id: "features", label: "Key Features", icon: Sparkles },
    ...(project.details?.labs ? [{ id: "labs", label: "Simulation Labs", icon: Layers }] : []),
    { id: "working", label: "How It Works", icon: Cpu },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-panel rounded-3xl border border-slate-700/80 shadow-2xl shadow-cyan-950/50 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Image */}
        <div className="relative h-44 sm:h-56 w-full bg-slate-900 overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 transition cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {project.categoryLabel}
              </span>
              {project.isPwa && (
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  Progressive Web App
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-xs sm:text-sm text-cyan-200/80 font-medium -mt-0.5">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-800 bg-slate-950/40 flex-shrink-0 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 rounded-t-xl text-sm font-semibold flex items-center gap-2 transition cursor-pointer border-b-2 whitespace-nowrap ${
                  isActive
                    ? "text-cyan-400 border-cyan-400 bg-slate-900/60"
                    : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/30"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* TAB 1: General Idea */}
          {activeTab === "idea" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  Core Mission & Concept
                </h4>
                <p className="text-slate-200 font-medium text-sm sm:text-base leading-relaxed">
                  {project.details.generalIdea}
                </p>
              </div>

              {project.details.highlights && (
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Standout Innovations
                  </h4>
                  <p className="text-slate-300 text-sm">
                    {project.details.highlights}
                  </p>
                </div>
              )}

              {/* Tags Matrix */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Technologies & Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl text-xs bg-slate-800 text-cyan-200 border border-slate-700/80 font-mono-code"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Key Features */}
          {activeTab === "features" && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Highlighted Capabilities & Modes
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                {project.details.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 hover:border-cyan-500/30 transition"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: Simulation Labs */}
          {activeTab === "labs" && project.details?.labs && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Dedicated Interactive Simulation & Analysis Modules
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.details.labs.map((lab, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
                        <h4 className="text-sm font-bold text-white">{lab.name || lab.title}</h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{lab.desc || lab.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: How It Works / Architecture */}
          {activeTab === "working" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  Technical Architecture & Execution
                </h4>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {project.details.working || project.details.generalIdea}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <span className="text-xs text-slate-400 block font-medium">Deployment Target</span>
                  <span className="text-sm font-semibold text-white font-mono-code">GitHub Pages / Live Web</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <span className="text-xs text-slate-400 block font-medium">Platform Readiness</span>
                  <span className="text-sm font-semibold text-cyan-300 font-mono-code">
                    {project.isPwa ? "PWA Offline Installable" : "Responsive Web Application"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-2.5 rounded-xl glass-button text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
              title="Copy live URL"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl glass-button text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source</span>
              </a>
            )}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition flex items-center gap-2"
          >
            <span>Launch Live App & Test</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
