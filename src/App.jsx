import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookShowcase from "./components/BookShowcase";
import AlgorithmShowcase from "./components/AlgorithmShowcase";
import ProjectsSection from "./components/ProjectsSection";
import ProjectModal from "./components/ProjectModal";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { projectsData } from "./data/projectsData";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Global Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Navigation */}
      <Navbar projectCount={projectsData.length} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero totalProjects={projectsData.length} />

        {/* Book Showcase: The Questions That Heal */}
        <BookShowcase />

        {/* Algorithm & Systems Research: HyperAgent */}
        <AlgorithmShowcase />

        {/* 60 Projects Gallery with Category Filters & Search */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* About Sahil */}
        <About />

        {/* Contact Form with EmailJS */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;