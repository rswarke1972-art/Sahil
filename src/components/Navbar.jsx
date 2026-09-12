import React, { useState, useEffect } from "react";
import { Menu, X, BookOpen, Layers, User, Mail, Sparkles, Cpu } from "lucide-react";

export default function Navbar({ projectCount = 60 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "The Book", href: "#book", icon: BookOpen, badge: "Novel" },
    { label: "Algorithm", href: "#algorithm", icon: Cpu, badge: "Patent" },
    { label: "Projects", href: "#projects", icon: Layers, count: projectCount },
    { label: "About", href: "#about", icon: User },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel py-3 shadow-2xl shadow-cyan-950/20 border-b border-slate-800/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition font-heading">
              Sahil Rajesh Warke
            </span>
            <span className="text-[11px] text-cyan-400/80 font-mono-code font-medium -mt-1">
              Systems Researcher, Developer &amp; Author
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {link.badge}
                  </span>
                )}
                {link.count && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono-code">
                    {link.count}+
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-semibold text-sm shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-5 mt-2 animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition"
                >
                  <span className="font-medium">{link.label}</span>
                  {link.count && (
                    <span className="px-2 py-0.5 rounded-full text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {link.count} Projects
                    </span>
                  )}
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {link.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/30"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
