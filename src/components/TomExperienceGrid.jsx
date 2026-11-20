import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin } from 'lucide-react';

export default function TomExperienceGrid() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-36 px-5 sm:px-12 max-w-7xl mx-auto border-t border-[#E7E1D7]/[0.1] relative z-10">
      {/* Eyebrow */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#E7E1D7]/[0.1] mb-14 gap-4">
        <div>
          <div className="text-xs font-mono tracking-widest text-[#F34213] uppercase mb-2">
            EXPERIENCE &amp; LEADERSHIP / HIST<span className="playfair-o">O</span>RY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#E7E1D7]">
            WHERE I'VE BEEN.
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#8E8B83] max-w-sm">
          8+ years running high-stakes platforms across automotive tier-1 and major banking data centers.
        </p>
      </div>

      {/* Experience Rows */}
      <div className="divide-y divide-[#E7E1D7]/[0.1] border-b border-[#E7E1D7]/[0.1]">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
          >
            {/* Left: Company & Period (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-[#F34213] font-bold">
                  0{idx + 1}
                </span>
                <span className="font-mono text-xs text-[#8E8B83] uppercase tracking-wider">
                  {exp.period}
                </span>
                {idx === 0 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F34213] text-[#0B0B0B] text-[10px] font-mono font-bold tracking-wider">
                    CURRENT
                  </span>
                )}
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight text-[#E7E1D7] group-hover:text-[#F34213] transition-colors">
                {exp.company}
              </h3>

              <div className="text-sm font-mono text-[#8E8B83] flex items-center space-x-2">
                <span>{exp.role}</span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-[#F34213]" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Right: Highlights & Tech Badges (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-2.5 text-sm sm:text-base text-[#E7E1D7]/80 leading-relaxed font-sans">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2.5">
                    <span className="text-[#F34213] font-mono mt-1 text-xs">▸</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-white/[0.04] text-[#8E8B83] rounded border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
