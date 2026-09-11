import React from "react";
import { Eye, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300">
      {/* Thumbnail Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950/60">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/85 backdrop-blur-md text-cyan-300 border border-slate-700/80 shadow-md">
            {project.categoryLabel}
          </span>
          {project.isPwa && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-500/20 backdrop-blur-md text-teal-300 border border-teal-500/40 flex items-center gap-1 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              PWA
            </span>
          )}
        </div>

        {/* Quick View Button Hover Overlay */}
        <button
          onClick={() => onSelect(project)}
          className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl shadow-cyan-500/50 cursor-pointer"
          title="Quick View Details"
        >
          <Eye className="w-6 h-6" />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Subtitle / Short Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/80 text-slate-300 border border-slate-700/50 font-mono-code"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 rounded-lg text-xs bg-slate-900/60 text-slate-400 border border-slate-800 font-mono-code">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Actions Layout - View Details on top, Live Demo underneath/adjacent */}
        <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
          {/* Primary View Details Button */}
          <button
            onClick={() => onSelect(project)}
            className="w-full py-2.5 px-4 rounded-xl glass-button text-cyan-300 hover:text-white font-semibold text-sm border border-cyan-500/30 hover:border-cyan-400/80 hover:bg-cyan-500/15 transition flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-cyan-950/40"
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>View Details (Idea · Features · Working)</span>
          </button>

          {/* Live Demo / Test Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-slate-700/60 hover:border-cyan-400 shadow-md"
          >
            <span>Live Demo & Testing</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
