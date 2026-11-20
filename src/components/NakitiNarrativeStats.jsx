import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, Award, Server, Activity } from 'lucide-react';

export default function NakitiNarrativeStats() {
  const { stats, personal } = portfolioData;

  return (
    <section id="about" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <span className="font-mono text-xs text-[#5865f2] uppercase tracking-wider">
          01 · Philosophy &amp; Narrative
        </span>
        <span className="font-mono text-xs text-[#8a8a93]">
          System Administration • Edge IoT
        </span>
      </div>

      {/* Massive Typographic Narrative */}
      <div className="max-w-5xl mb-16">
        <p className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white/95 leading-[1.25] tracking-tight">
          "When infrastructure is truly well-engineered, it operates in complete silence. My focus is delivering{' '}
          <span className="text-[#5865f2] underline decoration-white/20 underline-offset-4">
            resilient Linux edge containers
          </span>
          , zero-downtime automation, and high-density server clusters that allow businesses to{' '}
          <span className="text-white">scale without friction.</span>"
        </p>

        <p className="mt-8 text-sm sm:text-base text-[#8a8a93] max-w-3xl leading-relaxed font-sans">
          {personal.bio}
        </p>
      </div>

      {/* 4 Metric Cards with Particle-like Precision Styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#5865f2]/40 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="font-mono text-xs text-[#5865f2] mb-4">
              METRIC 0{idx + 1}
            </div>
            <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight group-hover:text-[#5865f2] transition-colors">
              {stat.value}
            </div>
            <div className="font-sans text-xs text-[#8a8a93] mt-2 group-hover:text-white/80 transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
