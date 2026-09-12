import React, { useState } from "react";
import { 
  Cpu, 
  GitBranch, 
  Zap, 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight, 
  Activity, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Terminal,
  BarChart3
} from "lucide-react";

export default function AlgorithmShowcase() {
  const [selectedTab, setSelectedTab] = useState("telemetry");

  const sweepPoints = [
    { acc: "0%", lat: "265ms", spDag: "0.92x", status: "Loss (Rollback Penalty)" },
    { acc: "20%", lat: "258ms", spDag: "0.94x", status: "Loss (Rollback Penalty)" },
    { acc: "40%", lat: "218ms", spDag: "1.11x", status: "Break-Even Boundary (\u03B1* = 40%)" },
    { acc: "60%", lat: "240ms", spDag: "1.01x", status: "Gain Zone" },
    { acc: "80%", lat: "202ms", spDag: "1.20x", status: "Gain Zone" },
    { acc: "100%", lat: "155ms", spDag: "1.57x", status: "Max Overlap (2.25x vs Seq)" },
  ];

  return (
    <section id="algorithm" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/60 border-t border-b border-slate-900">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-600/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-cyan-950/30">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Systems &amp; Algorithmic Research · Patent-Pending Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            HyperAgent: <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">Speculative DAG Scheduling</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Eliminating the multi-second latency bottleneck in autonomous AI agents through Probabilistic DAGs, copy-on-write state trees, and deterministic $O(1)$ rollback.
          </p>
        </div>

        {/* Main Feature Grid Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Deep Theoretical & Architectural Overview */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Problem vs Innovation Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-rose-500/20">
                  <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block mb-1">Standard Agent Bottleneck</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ReAct &amp; Plan-and-Solve loops serialize tool calls behind upstream LLM token validation:
                    <code className="block mt-1 text-[11px] text-rose-300 font-mono-code bg-slate-950 p-1.5 rounded border border-rose-500/20">
                      T_seq = &sum;(T_LLM + T_Tool) &ge; 3.5s - 5.0s
                    </code>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">HyperAgent Innovation</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pre-dispatches downstream tools speculatively into isolated state branches when transition confidence exceeds threshold:
                    <code className="block mt-1 text-[11px] text-cyan-300 font-mono-code bg-slate-950 p-1.5 rounded border border-cyan-500/20">
                      P(v | S) &ge; &theta; &rarr; 2.03x - 2.25x Speedup
                    </code>
                  </p>
                </div>
              </div>

              {/* Core Safety Invariant */}
              <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 relative">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>The Fundamental Safety Invariant</span>
                </div>
                <p className="text-slate-200 text-sm font-mono-code leading-relaxed">
                  S_HyperAgent^(final) &equiv; S_Sequential^(final)
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Proven across 7/7 formal test suites: speculative branches remain strictly quarantined. On parameter mismatch, branches are discarded in $O(1)$ with zero canonical state contamination.
                </p>
              </div>

              {/* Research Artifacts Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://rswarke1972-art.github.io/HyperAgent/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition flex items-center gap-2 group"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Launch Live Workbench</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </a>

                <a
                  href="https://github.com/rswarke1972-art/HyperAgent/blob/main/paper/IEEE_HyperAgent_Manuscript.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-cyan-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-cyan-500/40 transition"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>IEEE Manuscript</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://github.com/rswarke1972-art/HyperAgent/blob/main/paper/Patent_Claims_Draft.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-cyan-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-cyan-500/40 transition"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Patent Claims</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://github.com/rswarke1972-art/HyperAgent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-cyan-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-cyan-500/40 transition"
                >
                  <GitBranch className="w-4 h-4 text-slate-400" />
                  <span>GitHub (v0.2.0)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right: Empirical Metrics & 3-Way Duel Visualizer */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    Empirical Baseline Duel (Cold Cache)
                  </span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    N=5 Trials
                  </span>
                </div>

                {/* 3-Way Latency Comparison Bars */}
                <div className="space-y-3 font-mono-code text-xs">
                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>1. Sequential Baseline</span>
                      <span className="text-white font-bold">348.0 ms (1.00x)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-500 h-full w-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>2. Ordinary DAG (Barrier)</span>
                      <span className="text-blue-400 font-bold">242.9 ms (1.43x)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[70%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-cyan-300 mb-1">
                      <span className="font-bold">3. HyperAgent Speculative</span>
                      <span className="text-cyan-300 font-bold">154.8 ms (2.25x)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-teal-400 h-full w-[44%] shadow-lg shadow-cyan-500/50"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Speculative Gain Delta:</span>
                  <span className="text-cyan-400 font-bold font-mono-code">+0.82x Over DAG Barriers</span>
                </div>
              </div>

              {/* The Break-Even Boundary Matrix Preview */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                    Empirical Break-Even Accuracy (&alpha;*)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
                    &alpha;* = 40%
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                  Below 40% accuracy, rollback penalties dominate ($0.92x$). Above 40%, speculation consistently outpaces ordinary DAG barriers up to $1.57x$.
                </p>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono-code">
                  <div className="p-2 rounded bg-slate-950/60 border border-rose-500/20">
                    <span className="text-rose-400 font-bold block">&lt; 40%</span>
                    <span className="text-slate-400">Loss Zone</span>
                  </div>
                  <div className="p-2 rounded bg-amber-500/10 border border-amber-500/30">
                    <span className="text-amber-300 font-bold block">= 40%</span>
                    <span className="text-slate-300">Break-Even</span>
                  </div>
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30">
                    <span className="text-emerald-300 font-bold block">&gt; 40%</span>
                    <span className="text-slate-300">Gain Zone</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Architectural Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">P-DAG &amp; Kahn's Waves</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formulates workflows as Probabilistic DAGs with 3-color DFS cycle rejection and Kahn's topological concurrency wave partitioning.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
              <GitBranch className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Isolated State Trees</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Copy-on-write speculative branch memory prevents state contamination. Mismatched branches are discarded in $O(1)$ without canonical pollution.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Adaptive Cost-Utility</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Evaluates the break-even rule $P_c \cdot G &gt; (1 - P_c) \cdot C_r + C_o$ to dynamically suppress speculation whenever cost exceeds expected gain.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">7/7 Correctness Proof</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formal automated test suite proves mathematical output equivalence (S_HyperAgent &equiv; S_Sequential) across synthetic fault injections and nested dependencies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
