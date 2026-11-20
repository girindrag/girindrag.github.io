import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Cloud, Zap, Shield, Terminal, Check } from 'lucide-react';

export default function AppleTechSpecs() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills);
  const [selectedCat, setSelectedCat] = useState(categories[0]);

  const categoryIcons = {
    'Cloud & IoT': Cloud,
    'DevOps & Containers': Zap,
    'Systems & OS': Shield,
    'Scripting & Tools': Terminal,
  };

  return (
    <section id="specs" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-black/5 dark:border-white/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-xs font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase">
          Technical Specifications
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mt-1">
          Engineered down to the metal.
        </h2>
        <p className="text-[#6e6e73] dark:text-[#86868b] text-sm sm:text-base mt-2">
          From microsecond edge IoT camera streams to enterprise blade clusters and automated IaC.
        </p>

        {/* Category Pills Switcher */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-black/5 dark:bg-[#161617] rounded-2xl border border-black/5 dark:border-white/10 mt-8 shadow-sm">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || Cpu;
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected 
                    ? 'bg-[#0071e3] text-white shadow-md' 
                    : 'text-[#6e6e73] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Specs Table / Grid */}
      <div className="apple-card p-6 sm:p-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-between pb-6 border-b border-black/5 dark:border-white/10 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">{selectedCat}</h3>
            <p className="text-xs text-[#6e6e73] dark:text-[#86868b] mt-0.5">Production architecture capabilities and benchmark expertise</p>
          </div>
          <span className="text-xs font-mono px-3 py-1 bg-black/5 dark:bg-white/5 text-[#0071e3] dark:text-[#2997ff] rounded-full border border-black/5 dark:border-white/10">
            {skills[selectedCat].length} Capabilities
          </span>
        </div>

        <div className="space-y-6">
          {skills[selectedCat].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center space-x-3 text-[#1d1d1f] dark:text-white font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#0071e3]/10 dark:bg-[#0071e3]/20 flex items-center justify-center text-[#0071e3] dark:text-[#2997ff]">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item.name}</span>
                </div>
                <span className="font-mono text-[#6e6e73] dark:text-[#86868b]">{item.level}% Proficiency</span>
              </div>

              {/* Minimalist Apple Progress Meter */}
              <div className="w-full h-1.5 bg-black/10 dark:bg-[#262629] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0071e3] to-[#2997ff] rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Apple Comparison Spec Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-black/5 dark:border-white/10 text-center">
          <div className="p-3 bg-[#f5f5f7] dark:bg-black/40 rounded-xl border border-black/5 dark:border-white/5">
            <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Deployment Model</div>
            <div className="text-sm font-bold text-[#1d1d1f] dark:text-white mt-1">Automated CI/CD &amp; GitOps</div>
          </div>
          <div className="p-3 bg-[#f5f5f7] dark:bg-black/40 rounded-xl border border-black/5 dark:border-white/5">
            <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Operating Base</div>
            <div className="text-sm font-bold text-[#1d1d1f] dark:text-white mt-1">Debian 11, RHEL, HP-UX</div>
          </div>
          <div className="p-3 bg-[#f5f5f7] dark:bg-black/40 rounded-xl border border-black/5 dark:border-white/5">
            <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Container Runtime</div>
            <div className="text-sm font-bold text-[#1d1d1f] dark:text-white mt-1">Docker Engine &amp; K8s</div>
          </div>
        </div>
      </div>
    </section>
  );
}
