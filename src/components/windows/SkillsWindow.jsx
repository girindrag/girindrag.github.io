import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Cpu, Cloud, Terminal, Shield, CheckCircle2, Zap } from 'lucide-react';

export default function SkillsWindow() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills);
  const [selectedCat, setSelectedCat] = useState(categories[0]);

  const catIcons = {
    'Cloud & IoT': Cloud,
    'DevOps & Containers': Zap,
    'Systems & OS': Shield,
    'Scripting & Tools': Terminal,
  };

  return (
    <div className="flex h-full select-none">
      {/* Category Sidebar */}
      <div className="w-52 bg-white/5 border-r border-white/10 p-3 flex flex-col space-y-1">
        <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider px-2 mb-2">
          Architecture Domains
        </div>
        {categories.map((cat) => {
          const Icon = catIcons[cat] || Cpu;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCat === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat}</span>
            </button>
          );
        })}

        <div className="mt-auto p-3 bg-white/5 rounded-xl border border-white/10 text-center">
          <div className="text-xs font-bold text-emerald-400">8+ Years</div>
          <div className="text-[10px] text-white/60">Production Experience</div>
        </div>
      </div>

      {/* Main Skills Grid */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
          <div>
            <h2 className="text-base font-bold text-white">{selectedCat}</h2>
            <p className="text-xs text-white/60">Core proficiencies, toolchains, and verified competencies</p>
          </div>
          <span className="text-[10px] bg-blue-500/20 text-blue-300 font-mono px-2 py-1 rounded-md border border-blue-500/30">
            {skills[selectedCat].length} technologies
          </span>
        </div>

        <div className="space-y-4">
          {skills[selectedCat].map((item, idx) => (
            <div key={idx} className="bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <div className="flex items-center space-x-2 font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{item.name}</span>
                </div>
                <span className="font-mono text-blue-300 text-[11px]">{item.level}%</span>
              </div>

              {/* Progress meter */}
              <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quick summary tags below */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="text-xs font-semibold text-white/70 mb-2">Key Highlights:</div>
          <div className="flex flex-wrap gap-2">
            {['Debian 11 Hardening', 'Superdome 400+ Nodes', 'Azure IoT Hub', 'Zero Downtime', 'CI/CD Automation', 'Docker Optimization'].map((tag) => (
              <span key={tag} className="text-[11px] px-2.5 py-1 bg-white/10 rounded-lg text-slate-200 border border-white/10 font-mono">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
