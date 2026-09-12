import React from "react";
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
  BarChart3,
  Shield,
  Database,
  Radio,
  Network
} from "lucide-react";

export default function AlgorithmShowcase() {
  return (
    <section id="algorithm" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/60 border-t border-b border-slate-900">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-2/3 -right-32 w-96 h-96 bg-emerald-600/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-cyan-950/30">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Flagship Systems &amp; Algorithmic Research</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Autonomous Systems &amp; Streaming Algorithms
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Four production-grade architectures attacking foundational systems bottlenecks: wall-clock latency in AI agent workflows, memory bloat in high-velocity cyber-telemetry streams, O(N) KV-cache memory exhaustion in long-context LLM inference, and the freezing robot problem in dynamic autonomous mobile robotics.
          </p>
        </div>

        {/* ALGORITHM 1: HYPERAGENT */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono-code text-xs font-bold uppercase tracking-wider">
              Algorithm 01 · AI Systems &amp; Concurrency
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Theory & Invariants */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    HyperAgent: <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">Speculative Parallel DAGs</span>
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                    Eliminating the multi-second execution bottleneck in autonomous AI agents through Probabilistic DAGs, copy-on-write state trees, and deterministic $O(1)$ rollback.
                  </p>
                </div>

                {/* Problem vs Innovation */}
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

                {/* Safety Invariant */}
                <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 relative">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>The Fundamental Safety Invariant</span>
                  </div>
                  <p className="text-slate-200 text-sm font-mono-code leading-relaxed">
                    S_HyperAgent^(final) &equiv; S_Sequential^(final)
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Verified across 7/7 formal test suites: speculative branches remain strictly quarantined. On parameter mismatch, branches are discarded in $O(1)$ with zero canonical state contamination.
                  </p>
                </div>

                {/* Action Buttons */}
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

              {/* Right Column: Metrics & Duel */}
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

          {/* 4 Pillars for HyperAgent */}
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
                Formal automated test suite proves mathematical output equivalence across synthetic fault injections and nested dependencies.
              </p>
            </div>
          </div>
        </div>


        {/* ALGORITHM 2: AEGISSTREAM */}
        <div className="space-y-6 pt-10">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono-code text-xs font-bold uppercase tracking-wider">
              Algorithm 02 · Big Data &amp; Cybersecurity
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Theory & Space Complexity */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    AegisStream: <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent">Bounded Streaming Sketches</span>
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                    High-throughput network anomaly detection engine replacing unbounded SIEM flow tables with four sub-linear probabilistic sketches.
                  </p>
                </div>

                {/* Problem vs Innovation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-rose-500/20">
                    <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block mb-1">Standard SIEM Memory Bloat</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Stateful flow tables &amp; adjacency graphs scale linearly $O(N)$ with traffic volume, triggering cache thrashing and dropped packets:
                      <code className="block mt-1 text-[11px] text-rose-300 font-mono-code bg-slate-950 p-1.5 rounded border border-rose-500/20">
                        M_exact(500k) = 72.85 MB (Unbounded)
                      </code>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">AegisStream Innovation</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Four parallel probabilistic sketches (CMS, HLL, Bloom, Bounded Lateral Tracker) lock memory into an asymptotic plateau:
                      <code className="block mt-1 text-[11px] text-emerald-300 font-mono-code bg-slate-950 p-1.5 rounded border border-emerald-500/20">
                        M_sketches(500k) = 3.60 MB (-95.05%)
                      </code>
                    </p>
                  </div>
                </div>

                {/* Bounded Space Theorem */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 relative">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>The Fundamental Bounded Space Theorem</span>
                  </div>
                  <p className="text-slate-200 text-sm font-mono-code leading-relaxed">
                    dM_Aegis / dN &rarr; 0 (Bounded O(1) Memory w.r.t. Stream Size N)
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Verified empirically: between 250,000 and 500,000 events, exact tables grew by +34.0 MB while AegisStream sketches changed by only +0.15 KB (+0.004%).
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://rswarke1972-art.github.io/AegisStream/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition flex items-center gap-2 group"
                  >
                    <Activity className="w-4 h-4" />
                    <span>Launch Telemetry Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </a>

                  <a
                    href="https://github.com/rswarke1972-art/AegisStream/blob/main/paper/IEEE_AegisStream_Manuscript.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-emerald-500/40 transition"
                  >
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>IEEE Manuscript</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href="https://github.com/rswarke1972-art/AegisStream/blob/main/paper/patentability_and_prior_art_review.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-emerald-500/40 transition"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Prior Art &amp; Claims</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href="https://github.com/rswarke1972-art/AegisStream"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-emerald-500/40 transition"
                  >
                    <GitBranch className="w-4 h-4 text-slate-400" />
                    <span>GitHub (v1.0.0)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Metrics & Memory Scaling */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Database className="w-4 h-4 text-emerald-400" />
                      Memory Scaling Plateau (N=500,000)
                    </span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      19,550 eps
                    </span>
                  </div>

                  <div className="space-y-3 font-mono-code text-xs">
                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>1. Exact Baseline (Dict + Sets)</span>
                        <span className="text-rose-400 font-bold">72.85 MB</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full w-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-emerald-300 mb-1">
                        <span className="font-bold">2. AegisStream Sketches</span>
                        <span className="text-emerald-300 font-bold">3.60 MB (-95.05%)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full w-[5%] shadow-lg shadow-emerald-500/50"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Median per-event Latency:</span>
                    <span className="text-emerald-400 font-bold font-mono-code">41.5 &mu;s (p99: 150.0 &mu;s)</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-amber-400" />
                      Multi-Factor APT Kill Chain Confluence
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                      100% Precision at &tau; &ge; 0.35
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                    Recon alone (0.225) is suppressed to prevent alert fatigue. Converging with C2 beaconing (0.539) and exfiltration (0.696) triggers high-confidence alarms.
                  </p>

                  <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-mono-code">
                    <div className="p-1.5 rounded bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-400 block">Stage 1</span>
                      <span className="text-cyan-400 font-bold">0.225</span>
                    </div>
                    <div className="p-1.5 rounded bg-amber-500/10 border border-amber-500/30">
                      <span className="text-amber-300 block">Stage 2</span>
                      <span className="text-amber-300 font-bold">0.539</span>
                    </div>
                    <div className="p-1.5 rounded bg-amber-500/10 border border-amber-500/30">
                      <span className="text-amber-300 block">Stage 3</span>
                      <span className="text-amber-300 font-bold">0.452</span>
                    </div>
                    <div className="p-1.5 rounded bg-rose-500/10 border border-rose-500/30">
                      <span className="text-rose-400 block">Stage 4</span>
                      <span className="text-rose-400 font-bold">0.696</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 4 Pillars for AegisStream */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Count-Min Sketch</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Volumetric DDoS tracking with conservative update optimization. Strict monotonicity (&fnof;_hat &ge; &fnof;) guaranteed with zero underestimation.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-3">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">HyperLogLog Array</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reconnaissance port scan tracking across 500k distinct targets in 4 KB flat (99.99% memory reduction vs 54.1 MB exact set) at 0.17% relative error.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Double-Hashed Bloom</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Kirsch-Mitzenmacher threat intelligence IoC filtering across 50,000 indicators with guaranteed zero false negatives and 99.15% memory savings.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <Network className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Bounded Lateral Tracker</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Replaces unbounded bipartite graph edge retention ($O(|V| + |E|)$) with streaming per-user HLL cardinality estimators ($O(1)$ memory w.r.t. events).
              </p>
            </div>
          </div>
        </div>


        {/* ALGORITHM 3: SYNAPSECACHE */}
        <div className="space-y-6 pt-10">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono-code text-xs font-bold uppercase tracking-wider">
              Algorithm 03 · AI Systems &amp; LLM Memory Optimization
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-purple-500/30 shadow-2xl shadow-purple-950/40 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Theory & Invariants */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    SynapseCache: <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Bounded-Memory Attention-Aware KV Compaction</span>
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                    Deterministic bounded-memory Key-Value cache manager enforcing strict capacity $|\mathcal&#123;C&#125;_t| \le B$ across long-context autoregressive transformer inference via online cross-head entropy and relational consensus.
                  </p>
                </div>

                {/* Problem vs Innovation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-rose-500/20">
                    <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block mb-1">Standard LLM O(N) VRAM Bottleneck</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Full KV cache grows linearly with context length $O(N \cdot L \cdot H_&#123;\text&#123;KV&#125;&#125; \cdot d)$, exhausting GPU High-Bandwidth Memory (HBM) and causing out-of-memory serving crashes:
                      <code className="block mt-1 text-[11px] text-rose-300 font-mono-code bg-slate-950 p-1.5 rounded border border-rose-500/20">
                        M_KV(64k, 70B Model) = 20.00 GB decimal (18.63 GiB)
                      </code>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-purple-500/30">
                    <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">SynapseCache Tiered Innovation</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Four-tier bounded cache topology with cross-head entropy consensus locks memory into a deterministic invariant with 100% long-range topic retention:
                      <code className="block mt-1 text-[11px] text-purple-300 font-mono-code bg-slate-950 p-1.5 rounded border border-purple-500/20">
                        M_Synapse(64k, 20% Budget) = 4.00 GB decimal (-80.0%)
                      </code>
                    </p>
                  </div>
                </div>

                {/* Strict Capacity Invariant */}
                <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30 relative">
                  <div className="flex items-center gap-2 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                    <span>The Strict Capacity Invariant</span>
                  </div>
                  <p className="text-slate-200 text-sm font-mono-code leading-relaxed">
                    |C_t| &le; B &forall; t &isin; [1, N] (Strict Invariant by Construction)
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Verified step-by-step across 5,000 insertions &amp; 7 adversarial conditions (14/14 tests). Demonstrates immunity to multi-topic distractor collapse across 32,000 intervening tokens where uncalibrated baselines (H2O) collapse to 0.0% retention.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://rswarke1972-art.github.io/SynapseCache/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-300 hover:to-indigo-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 transition flex items-center gap-2 group"
                  >
                    <Activity className="w-4 h-4" />
                    <span>Launch Telemetry Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </a>

                  <a
                    href="https://github.com/rswarke1972-art/SynapseCache/blob/main/paper/IEEE_SynapseCache_Manuscript.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-purple-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-purple-500/40 transition"
                  >
                    <FileText className="w-4 h-4 text-purple-400" />
                    <span>IEEE Manuscript</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href="https://github.com/rswarke1972-art/SynapseCache/blob/main/paper/patentability_and_prior_art_review.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-purple-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-purple-500/40 transition"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Prior Art &amp; Claims</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href="https://github.com/rswarke1972-art/SynapseCache"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-purple-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-purple-500/40 transition"
                  >
                    <GitBranch className="w-4 h-4 text-slate-400" />
                    <span>GitHub (v1.1.0)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Metrics & Memory Scaling */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                      <Database className="w-4 h-4 text-purple-400" />
                      70B KV Memory Footprint (N=64,000, FP16)
                    </span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      6.11x Speedup
                    </span>
                  </div>

                  <div className="space-y-3 font-mono-code text-xs">
                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>1. Full KV Baseline (Unbounded)</span>
                        <span className="text-rose-400 font-bold">20.00 GB (18.63 GiB)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full w-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-purple-300 mb-1">
                        <span className="font-bold">2. SynapseCache (20% Budget)</span>
                        <span className="text-purple-300 font-bold">4.00 GB (-80.0% State)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 h-full w-[20%] shadow-lg shadow-purple-500/50"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Prototype Attention Latency:</span>
                    <span className="text-purple-400 font-bold font-mono-code">36.17 ms vs 220.87 ms</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-cyan-400" />
                      Subspace Consensus &amp; Distractor Immunity
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30 font-bold">
                      100% Retention at D = 32k
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                    Single-head spikes (&kappa;=1) age out naturally in candidates. Cross-head consensus (&kappa; &ge; 4, &delta; &ge; 0.04) promotes relational anchors to protected storage.
                  </p>

                  <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-mono-code">
                    <div className="p-1.5 rounded bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-400 block">Cold (&delta;=0)</span>
                      <span className="text-rose-400 font-bold">Evicted</span>
                    </div>
                    <div className="p-1.5 rounded bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-400 block">1 Head</span>
                      <span className="text-amber-300 font-bold">Filtered</span>
                    </div>
                    <div className="p-1.5 rounded bg-purple-500/10 border border-purple-500/30">
                      <span className="text-purple-300 block">&ge;4 Heads</span>
                      <span className="text-purple-300 font-bold">100% Anch</span>
                    </div>
                    <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                      <span className="text-emerald-400 block">Topic 32k</span>
                      <span className="text-emerald-400 font-bold">100% Ret</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 4 Pillars for SynapseCache */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Invariant Sink Tier</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Guaranteed 0% eviction probability for initial tokens ($t &lt; k_&#123;\text&#123;sink&#125;&#125;$), preserving prompt structure and system instructions permanently.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Relational Anchor Tier</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-head consensus gate ($\sum \mathbb&#123;I&#125;(A_h &gt; \tau) \ge \kappa$). Immune-locks foundational entities against catastrophic topic drift.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Sliding Local Window</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                FIFO buffer of size $w_&#123;\text&#123;local&#125;&#125;$ for immediate syntactic coherence, local punctuation, and short-range conversational fluency.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Entropy Salience Scoring</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Normalized Shannon entropy across query heads combined with exponential decay ($\lambda = 0.95$), pruning stale transient tokens smoothly.
              </p>
            </div>
          </div>
        </div>


        {/* ALGORITHM 4: KINETICSHIELD */}
        <div className="space-y-6 pt-10">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono-code text-xs font-bold uppercase tracking-wider">
              Algorithm 04 · Robotics &amp; Autonomous Motion Planning
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Theory & Invariants */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    KineticShield: <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Conformal Collision Pruning &amp; Kinematic B-Spline Planning</span>
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                    Distribution-free uncertainty estimation with formally bounded trajectory feasibility and empirical collision evaluation across dynamic human-industrial environments.
                  </p>
                </div>

                {/* Problem vs Innovation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-rose-500/20">
                    <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block mb-1">The Overconfidence vs Freezing Dilemma</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Neural trajectory predictors crash under out-of-distribution drift (100% collision in linear/shift regimes), while conservative potential fields freeze in place (97.8% paralysis in chokepoints):
                      <code className="block mt-1 text-[11px] text-rose-300 font-mono-code bg-slate-950 p-1.5 rounded border border-rose-500/20">
                        Baseline Freezing Rate = 97.8% in Narrow Chokepoints
                      </code>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">KineticShield Conformal Innovation</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Finite-sample marginal coverage $P(\mathbf&#123;p&#125;_\text&#123;obs&#125; \in \mathcal&#123;C&#125;_\alpha) \ge 1 - \alpha$ under exchangeability; closed-loop collision safety evaluated empirically in simulation:
                      <code className="block mt-1 text-[11px] text-emerald-300 font-mono-code bg-slate-950 p-1.5 rounded border border-emerald-500/20">
                        Chokepoint Freezing: 4.4% (-95.5%) | Area: 0.78 m² (-77.5%)
                      </code>
                    </p>
                  </div>
                </div>

                {/* Strict Invariants Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 relative">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Kinematic Feasibility &amp; Geometric Bound Invariants</span>
                  </div>
                  <p className="text-slate-200 text-sm font-mono-code leading-relaxed">
                    max ||Q_i|| &le; v_max &rArr; ||ṙ(t)|| &le; v_max &nbsp;&amp;&nbsp; &delta;_r &le; R(sec(&pi;/8) - 1)
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Continuous-time velocity and acceleration limits are strictly guaranteed by construction as sufficient conditions via B-spline derivative control polygons ($\mathbf&#123;Q&#125;_i, \mathbf&#123;R&#125;_i$), eliminating inter-sample discretization violations.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://rswarke1972-art.github.io/KineticShield/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition flex items-center gap-2 group"
                  >
                    <Activity className="w-4 h-4" />
                    <span>Launch 60 FPS Simulation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </a>

                  <a
                    href="https://github.com/rswarke1972-art/KineticShield/blob/main/paper/IEEE_KineticShield_Manuscript.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-emerald-500/40 transition"
                  >
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>IEEE Manuscript</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href="https://github.com/rswarke1972-art/KineticShield/blob/main/paper/patentability_and_prior_art_review.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-emerald-500/40 transition"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Prior Art &amp; Claims</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href="https://github.com/rswarke1972-art/KineticShield"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-button text-slate-200 hover:text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2 border border-slate-700/80 hover:border-emerald-500/40 transition"
                  >
                    <GitBranch className="w-4 h-4 text-slate-400" />
                    <span>GitHub (v1.2.0)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Telemetry & Invariants Gauges */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      Empirical Verification Telemetry
                    </span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      11/11 UNIT TESTS PASSING
                    </span>
                  </div>

                  {/* Telemetry Metric Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[11px] text-slate-400 block mb-0.5">SAT Narrow-Phase (p50)</span>
                      <span className="text-base font-bold text-emerald-400 font-mono-code">0.084 ms</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">p99: 0.142 ms (&lt; 0.5 ms budget)</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[11px] text-slate-400 block mb-0.5">Closed-Loop Planning</span>
                      <span className="text-base font-bold text-cyan-400 font-mono-code">1.276 ms</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">&lt; 16.67 ms (60 FPS budget)</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[11px] text-slate-400 block mb-0.5">Chokepoint Freezing</span>
                      <span className="text-base font-bold text-emerald-400 font-mono-code">4.4%</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">vs. 97.8% Conservative (-95.5%)</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[11px] text-slate-400 block mb-0.5">Uncertainty Tube Area</span>
                      <span className="text-base font-bold text-teal-400 font-mono-code">0.78 m²</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">-77.5% vs. 3.46 m² buffers</span>
                    </div>
                  </div>

                  {/* Benchmark Modalities Mini-Table */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] font-mono-code text-slate-300 space-y-1.5">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-800 pb-1 flex justify-between">
                      <span>Modality Stress Test</span>
                      <span>Collision (KineticShield vs Base)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">1. Linear Crossing</span>
                      <span className="text-emerald-400 font-semibold">0/20 [0.0%, 16.1%] vs. 20/20 (100%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">2. Bimodal Wandering</span>
                      <span className="text-emerald-400 font-semibold">3/20 [5.2%, 36.0%] | Freezing: 2.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">3. Adversarial Pursuit</span>
                      <span className="text-emerald-400 font-semibold">0/20 [0.0%, 16.1%] vs. 20/20 (100%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">4. Narrow Chokepoint</span>
                      <span className="text-emerald-400 font-semibold">0/20 Collisions | 4.4% Freezing</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">5. Distribution Shift</span>
                      <span className="text-emerald-400 font-semibold">4/20 [8.1%, 41.6%] vs. 20/20 (100%)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 4 Pillars for KineticShield */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Split Conformal (Mode A)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Certified finite-sample marginal coverage $P(\mathbf&#123;p&#125;_\text&#123;obs&#125; \in \mathcal&#123;C&#125;_\alpha) \ge 1 - \alpha$ over exchangeable non-conformity residuals without distributional assumptions.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Adaptive Recency (Mode B)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sliding-window exponential discounting ($\gamma = 0.96$) to empirically track non-stationary dynamic regimes and sudden turning transitions.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Derivative Control Polygons</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Continuous-time B-spline hodograph proof bounding velocity and acceleration by construction via control polygons $\mathbf&#123;Q&#125;_i$ and $\mathbf&#123;R&#125;_i$.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Sub-Millisecond SAT Pruning</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                AABB broad-phase filter combined with 2D Separating Axis Theorem on regular octagons ($\delta_r \le 0.034 R$) executing in $0.084$ ms.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
