import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function NakitiExperienceTimeline() {
  const { experience, education, certifications } = portfolioData;

  const tools = [
    'Docker Engine',
    'Kubernetes (K8s)',
    'Ansible Automation',
    'Azure IoT Hub',
    'Debian 11 Hardened',
    'Red Hat Enterprise Linux',
    'HP-UX Unix',
    'HP Blade & Superdome',
    'Terraform IaC',
    'Python',
    'Bash / Shell',
    'ASM Disk Groups',
    'CI/CD Pipelines',
    'Git Version Control',
  ];

  return (
    <section id="experience" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-white/[0.08] mb-14">
        <div>
          <span className="font-mono text-xs text-[#5865f2] uppercase tracking-wider">
            04 · Career Scale
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Timeline of Leadership.
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#8a8a93] max-w-xs mt-4 sm:mt-0">
          8+ years of battle-tested operations across global automotive tier-1 and major banking data centers.
        </p>
      </div>

      {/* Timeline Rows */}
      <div className="space-y-12 mb-20">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-white/[0.06] last:border-b-0"
          >
            {/* Left: Big Year & Period (4 cols) */}
            <div className="md:col-span-4 space-y-1">
              <div className="flex items-center space-x-3">
                <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {exp.period.split('–')[0].trim()}
                </span>
                {idx === 0 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#5865f2] text-white text-[10px] font-mono font-bold tracking-wider">
                    NOW
                  </span>
                )}
              </div>
              <div className="font-mono text-xs text-[#8a8a93]">{exp.period}</div>
              <div className="font-mono text-xs text-[#5865f2] flex items-center space-x-1 pt-1">
                <MapPin className="w-3 h-3" />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Right: Company, Role & Highlights (8 cols) */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {exp.company}
                </h3>
                <div className="text-sm font-semibold text-[#5865f2] mt-0.5">
                  {exp.role}
                </div>
              </div>

              <div className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
                    <span className="text-[#5865f2] font-mono mt-0.5">▸</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono bg-white/[0.04] text-[#8a8a93] rounded-md border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Horizontal Marquee Ticker ("Toolkit") */}
      <div className="pt-10 border-t border-white/[0.08] overflow-hidden">
        <div className="font-mono text-xs text-[#8a8a93] uppercase tracking-wider mb-6 text-center">
          Continuous Toolchain &amp; Infrastructure Ecosystem
        </div>

        <div className="relative flex overflow-x-hidden mask-fade">
          <div className="flex space-x-4 animate-marquee whitespace-nowrap py-3">
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#d2d2d7]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5865f2]" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
