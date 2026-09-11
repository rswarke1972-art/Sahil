import React, { useState, useMemo } from "react";
import { Search, Filter, Layers, X, Sparkles, SlidersHorizontal } from "lucide-react";
import { projectsData, categories } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        (project.details.generalIdea &&
          project.details.generalIdea.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Featured <span className="text-cyan-400">Creations & Systems</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore 45+ applications, Progressive Web Apps, language suites, strategy simulations, and AI productivity tools.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-panel p-4 sm:p-5 rounded-3xl mb-12 space-y-4 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, tech, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Count Badge */}
            <div className="text-xs text-slate-400 font-mono-code flex items-center gap-1.5 self-end md:self-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Showing <strong className="text-cyan-300 font-bold">{filteredProjects.length}</strong> of{" "}
              {projectsData.length} projects
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 scale-[1.02]"
                      : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel p-12 text-center rounded-3xl border border-slate-800 max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-900 text-slate-500 flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            <h3 className="text-xl font-bold text-white">No Matching Projects Found</h3>
            <p className="text-slate-400 text-sm">
              We couldn't find any projects matching "{searchQuery}". Try searching for another keyword or clear filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
