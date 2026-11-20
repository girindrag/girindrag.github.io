import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, ExternalLink, Activity, Server, Cpu, Layers } from 'lucide-react';

export default function TomCurvedShowcase() {
  const { projects } = portfolioData;
  const [activeIdx, setActiveIdx] = useState(0);

  const curProject = projects[activeIdx];

  const nextProject = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="py-24 sm:py-36 px-5 sm:px-12 max-w-7xl mx-auto border-t border-[#E7E1D7]/[0.1] relative z-10">
      {/* Eyebrow & Project Counter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#E7E1D7]/[0.1] mb-12 gap-4">
        <div>
          <div className="text-xs font-mono tracking-widest text-[#F34213] uppercase mb-2">
            WHAT Y<span className="playfair-o">O</span>U’RE HERE F<span className="playfair-o">O</span>R (I GUESS)
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#E7E1D7]">
            SELECTED W<span className="playfair-o">O</span>RK.
          </h2>
        </div>

        {/* Counter & Controls */}
        <div className="flex items-center space-x-6">
          <div className="font-mono text-lg font-bold tracking-widest text-[#E7E1D7]">
            0{activeIdx + 1}/0{projects.length}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full tom-glass hover:bg-white/[0.15] text-[#E7E1D7] hover:text-[#F34213] flex items-center justify-center transition-all duration-150 active:scale-95"
              aria-label="Previous Project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full tom-glass hover:bg-white/[0.15] text-[#E7E1D7] hover:text-[#F34213] flex items-center justify-center transition-all duration-150 active:scale-95"
              aria-label="Next Project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main 3D Curved Glass Container Showcase */}
      <div 
        className="relative rounded-3xl tom-glass-elevated border border-[#E7E1D7]/[0.15] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] project-card"
        data-cursor="view"
        data-cursor-text="Explore"
      >
        {/* Curved Glass Top Status Line */}
        <div className="px-6 py-4 bg-white/[0.03] border-b border-[#E7E1D7]/[0.1] flex items-center justify-between text-xs font-mono tracking-widest uppercase text-[#8E8B83]">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F34213]" />
            <span className="text-[#E7E1D7] font-semibold">{curProject.category}</span>
          </div>

          <div className="hidden sm:flex items-center space-x-3">
            <span>CRT SHADER: ACTIVE</span>
            <span>•</span>
            <span className="text-[#F34213]">LATENCY: 0.12ms</span>
          </div>
        </div>

        {/* Curved Glass Display Body */}
        <div className="p-6 sm:p-12 crt-overlay">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs text-[#F34213] uppercase tracking-widest font-bold">
                SYSTEM 0{activeIdx + 1}
              </span>

              <h3 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#E7E1D7] leading-[1.05]">
                {curProject.title}
              </h3>

              <p className="font-sans text-base sm:text-lg text-[#8E8B83] leading-relaxed">
                {curProject.description}
              </p>

              <div className="space-y-2 pt-2">
                {curProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[#E7E1D7]/90 font-mono">
                    <span className="text-[#F34213]">▸</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {curProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-white/[0.05] text-[#E7E1D7] rounded-md border border-[#E7E1D7]/[0.1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Retro-Futuristic Terminal Display (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#0B0B0B] border border-[#E7E1D7]/[0.12] p-5 font-mono text-xs text-[#E7E1D7] shadow-inner space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-[10px] text-[#8E8B83]">
                <span>ARCH_MONITOR.LOG</span>
                <span className="text-emerald-400">STATUS: HEALTHY</span>
              </div>

              {activeIdx === 0 && (
                <div className="space-y-1.5 text-xs text-[#8E8B83]">
                  <div className="text-[#F34213]">{"$ docker ps --format 'table {{.Names}}\\t{{.Status}}'"}</div>
                  <div className="text-white">edge-fleet-telemetry    Up 42 days (healthy)</div>
                  <div className="text-white">edge-camera-pipeline    Up 42 days (healthy)</div>
                  <div className="text-white">ansible-agent-worker    Up 42 days (healthy)</div>
                  <div className="text-emerald-400 pt-2">[OK] Debian 11 security baseline verified</div>
                </div>
              )}

              {activeIdx === 1 && (
                <div className="space-y-1.5 text-xs text-[#8E8B83]">
                  <div className="text-[#F34213]">$ hpux-cluster status --datacenter sbi-itfo</div>
                  <div className="text-white">BLADE_CHASSIS_01..16    [400+ Nodes Active]</div>
                  <div className="text-white">SUPERDOME_CLUSTER_A     [100% Core Redundancy]</div>
                  <div className="text-white">ASM_DISK_GROUPS         [Rebalanced / Zero-Loss]</div>
                  <div className="text-emerald-400 pt-2">[OK] 24/7 SLA Target: 99.99% Delivered</div>
                </div>
              )}

              {activeIdx === 2 && (
                <div className="space-y-1.5 text-xs text-[#8E8B83]">
                  <div className="text-[#F34213]">$ az iot hub device-twin show --id slumber-cam</div>
                  <div className="text-white">INGESTION_RATE: 45,000 events/sec</div>
                  <div className="text-white">K8S_PODS: 12 Running / 0 Restarts</div>
                  <div className="text-emerald-400 pt-2">[OK] Azure Certified Architecture Verified</div>
                </div>
              )}

              {activeIdx === 3 && (
                <div className="space-y-1.5 text-xs text-[#8E8B83]">
                  <div className="text-[#F34213]">$ terraform plan -out=production.tfplan</div>
                  <div className="text-white">Plan: 38 to add, 0 to change, 0 to destroy</div>
                  <div className="text-emerald-400 pt-2">[OK] Policy as Code: Compliant</div>
                </div>
              )}

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#8E8B83]">
                <span>SCALE FACTOR</span>
                <span className="text-[#F34213] font-bold">10x ENTERPRISE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Selector Scrub Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[#E7E1D7]/[0.1] bg-[#121212]">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-4 text-left font-mono text-xs transition-colors border-r last:border-r-0 border-[#E7E1D7]/[0.1] ${
                activeIdx === idx
                  ? 'bg-[#F34213] text-[#0B0B0B] font-bold'
                  : 'text-[#8E8B83] hover:text-[#E7E1D7] hover:bg-white/[0.03]'
              }`}
            >
              <div className="text-[10px] opacity-75">0{idx + 1}</div>
              <div className="truncate mt-0.5">{p.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
