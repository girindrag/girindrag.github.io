import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Award, 
  GraduationCap, 
  CheckCircle, 
  Calendar 
} from 'lucide-react';

export default function AppleBentoHighlights() {
  const { experience, certifications, education } = portfolioData;

  const harman = experience[0];
  const dxc = experience[1];
  const genex = experience[2];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left">
        <p className="text-xs font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase">
          Career &amp; Proven Track Record
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mt-1">
          Engineered for mission-critical scale.
        </h2>
        <p className="text-[#6e6e73] dark:text-[#86868b] text-sm sm:text-base mt-2 max-w-2xl">
          A progression of leadership in high-availability environments, banking datacenters, and edge computing fleets.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Card 1: Harman Connected Services (Large Highlight Card - spans 7 cols) */}
        <div className="md:col-span-7 apple-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-white dark:bg-gradient-to-b dark:from-[#1c1c1e] dark:to-[#121213]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-[#0071e3]/10 dark:bg-[#2997ff]/10 text-[#0071e3] dark:text-[#2997ff] border border-[#0071e3]/20 dark:border-[#2997ff]/20 rounded-full text-xs font-semibold">
                Current Role • Team Lead
              </span>
              <span className="text-xs text-[#6e6e73] dark:text-[#86868b] flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{harman.period}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
              {harman.company}
            </h3>
            <p className="text-sm text-[#0071e3] dark:text-[#2997ff] font-medium mt-1">
              {harman.role} • {harman.location}
            </p>

            <div className="mt-5 space-y-2.5">
              {harman.highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[#333336] dark:text-[#d2d2d7]">
                  <CheckCircle className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-black/5 dark:border-white/5">
            {harman.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs bg-black/5 dark:bg-white/5 text-[#6e6e73] dark:text-[#a1a1a6] rounded-lg border border-black/5 dark:border-white/5 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: DXC Technology & State Bank of India (Spans 5 cols) */}
        <div className="md:col-span-5 apple-card p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-gradient-to-b dark:from-[#1c1c1e] dark:to-[#121213]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-full text-xs font-semibold">
                Banking Data Center
              </span>
              <span className="text-xs text-[#6e6e73] dark:text-[#86868b]">{dxc.period}</span>
            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
              {dxc.company}
            </h3>
            <p className="text-xs sm:text-sm text-amber-600 dark:text-amber-300 font-medium mt-1">
              State Bank of India (SBI-ITFO) Infrastructure
            </p>

            <div className="my-5 p-4 bg-[#f5f5f7] dark:bg-black/40 rounded-2xl border border-black/5 dark:border-white/5">
              <div className="text-3xl font-bold text-[#1d1d1f] dark:text-white">400+</div>
              <div className="text-xs text-[#6e6e73] dark:text-[#86868b] mt-0.5">Physical &amp; Virtual Enterprise Servers</div>
              <div className="text-[11px] text-amber-600 dark:text-amber-400 mt-2 font-mono">HP Blade (BL860/870/890) &amp; Superdome</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-xs text-[#333336] dark:text-[#d2d2d7]">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>24/7 offshore infrastructure support with zero downtime tolerance.</span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-[#333336] dark:text-[#d2d2d7]">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Assisted in scaling infrastructure to accommodate 10x customer growth.</span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-[#333336] dark:text-[#d2d2d7]">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>ASM disk groups creation, maintenance, and RHEL/HP-UX hardening.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-black/5 dark:border-white/5">
            {dxc.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] bg-black/5 dark:bg-white/5 text-[#6e6e73] dark:text-[#a1a1a6] rounded-md font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card 3: Genex Corporate Services (Spans 6 cols) */}
        <div className="md:col-span-6 apple-card p-6 sm:p-7 flex flex-col justify-between bg-white dark:bg-gradient-to-b dark:from-[#1c1c1e] dark:to-[#121213]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 rounded-full text-xs font-semibold">
                IoT Edge &amp; Computer Vision
              </span>
              <span className="text-xs text-[#6e6e73] dark:text-[#86868b]">{genex.period}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
              {genex.company}
            </h3>
            <p className="text-xs text-purple-600 dark:text-purple-300 font-medium mt-0.5">
              System Administrator • SlumberJS Client Location
            </p>

            <div className="mt-4 space-y-2 text-xs text-[#333336] dark:text-[#d2d2d7]">
              {genex.highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-black/5 dark:border-white/5">
            {genex.technologies.map((t) => (
              <span key={t} className="px-2 py-0.5 text-[10px] bg-black/5 dark:bg-white/5 text-[#6e6e73] dark:text-[#a1a1a6] rounded font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Card 4: Official Credentials & Education (Spans 6 cols) */}
        <div className="md:col-span-6 apple-card p-6 sm:p-7 flex flex-col justify-between bg-white dark:bg-gradient-to-b dark:from-[#1c1c1e] dark:to-[#121213]">
          <div>
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-semibold">
              Verified Credentials
            </span>

            <div className="mt-5 space-y-4">
              {/* Azure Certification */}
              <div className="p-4 bg-[#f5f5f7] dark:bg-black/40 rounded-2xl border border-black/5 dark:border-white/5 flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                    {certifications[0].issuer}
                  </div>
                  <div className="text-sm font-bold text-[#1d1d1f] dark:text-white mt-0.5">
                    {certifications[0].title}
                  </div>
                  <div className="text-xs text-[#6e6e73] dark:text-[#86868b] mt-0.5">
                    Code: {certifications[0].code} • Active Official Credential
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="p-4 bg-[#f5f5f7] dark:bg-black/40 rounded-2xl border border-black/5 dark:border-white/5 flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-[#0071e3]/10 text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#0071e3] dark:text-[#2997ff] tracking-wider">
                    Engineering Degree
                  </div>
                  <div className="text-sm font-bold text-[#1d1d1f] dark:text-white mt-0.5">
                    {education[0].degree}
                  </div>
                  <div className="text-xs text-[#6e6e73] dark:text-[#86868b] mt-0.5">
                    {education[0].institution} • {education[0].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-[#6e6e73] dark:text-[#86868b]">
            <span>Continuous Learning &amp; Cloud Excellence</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono">100% Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
