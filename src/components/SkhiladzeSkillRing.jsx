import React, { useState } from 'react';
import { 
  Cloud, 
  Boxes, 
  Cpu, 
  Terminal, 
  Network, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight, 
  BookOpen,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { SKILL_PILLARS } from '../data/skillsLearningData';
import { soundEngine } from '../utils/audioEngine';
import { FourRedDots } from './TomCornerHUD';

const ICONS = {
  Cloud,
  Boxes,
  Cpu,
  Terminal,
  Network,
  Layers,
};

export default function SkhiladzeSkillRing() {
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [copiedCmd, setCopiedCmd] = useState('');

  const currentPillar = SKILL_PILLARS[activePillarIdx];
  const currentStage = currentPillar.stages[activeStageIdx];
  const IconComponent = ICONS[currentPillar.icon] || Terminal;

  const selectPillar = (idx) => {
    soundEngine.playDialDock();
    setActivePillarIdx(idx);
    setActiveStageIdx(0);
  };

  const selectStage = (idx) => {
    soundEngine.playClick();
    setActiveStageIdx(idx);
  };

  const copyToClipboard = (text) => {
    soundEngine.playClick();
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(''), 2000);
  };

  return (
    <section id="skills" className="py-24 sm:py-36 px-5 sm:px-12 max-w-7xl mx-auto border-t border-[#E7E1D7]/[0.1] relative z-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#E7E1D7]/[0.1] mb-14 gap-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#F34213] uppercase font-bold">
            <FourRedDots className="w-3.5 h-3.5" />
            <span>KNOWLEDGE RING &amp; MASTERCLASS</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-[#E7E1D7] leading-[1.05]">
            SYSTEM SKILLS <span className="playfair-o text-[#F34213]">R</span>ING
          </h2>
        </div>

        <p className="max-w-md font-sans text-xs sm:text-sm text-[#8E8B83] leading-relaxed">
          Comprehensive, start-to-end learning curriculums for IoT &amp; Enterprise System Administration. Built from official standards and field-proven engineering architectures.
        </p>
      </div>

      {/* Main Grid: Interactive Ring Selector on Left, Deep Learning Curriculum on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Interactive Rotary Skill Ring & Station Badges */}
        <div className="lg:col-span-5 space-y-6">
          {/* Circular Rotary Visualizer Container */}
          <div className="relative rounded-3xl tom-glass-elevated border border-[#E7E1D7]/[0.12] p-6 sm:p-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
            {/* Ambient Background Glow */}
            <div 
              className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
              style={{ backgroundColor: currentPillar.color }}
            />

            {/* Circular Ring Geometry */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-white/[0.12] flex items-center justify-center my-4">
              {/* Inner concentric orbit */}
              <div className="absolute w-44 h-44 rounded-full border border-dashed border-white/[0.08]" />
              <div className="absolute w-28 h-28 rounded-full border border-white/[0.05]" />

              {/* 6 Skill Station Nodes around the Ring (60 degrees each) */}
              {SKILL_PILLARS.map((pillar, idx) => {
                const angle = (360 / SKILL_PILLARS.length) * idx - 90; // start at top
                const rad = (angle * Math.PI) / 180;
                const radius = 110; // distance from center
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);
                const isSelected = activePillarIdx === idx;
                const NodeIcon = ICONS[pillar.icon] || Terminal;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => selectPillar(idx)}
                    className={`absolute w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 z-20 group active:scale-90 ${
                      isSelected
                        ? 'bg-[#F34213] text-[#0B0B0B] scale-110 shadow-[0_0_24px_rgba(243,66,19,0.7)]'
                        : 'bg-[#18181A] hover:bg-[#222226] text-[#8E8B83] hover:text-[#E7E1D7] border border-white/[0.1]'
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    title={pillar.title}
                  >
                    <NodeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </button>
                );
              })}

              {/* Center Active Station Readout */}
              <div className="relative z-10 flex flex-col items-center text-center p-3 select-none">
                <span className="w-2 h-2 rounded-full bg-[#F34213] animate-ping mb-1" />
                <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-[#E7E1D7] uppercase">
                  {currentPillar.name}
                </span>
                <span className="font-mono text-[10px] text-[#8E8B83] uppercase tracking-widest mt-0.5">
                  Node 0{activePillarIdx + 1} / 06
                </span>
              </div>
            </div>

            {/* Pillar Meta Stats Tagline */}
            <div className="w-full pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8E8B83]">
              <span>CURRICULUM: {currentPillar.stats.modules} STAGES</span>
              <span className="text-[#F34213] font-bold">{currentPillar.stats.hours}</span>
            </div>
          </div>

          {/* Quick List Selector for Mobile / Easy Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SKILL_PILLARS.map((p, idx) => {
              const isSelected = activePillarIdx === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => selectPillar(idx)}
                  className={`p-3 rounded-2xl text-left font-mono transition-all border ${
                    isSelected
                      ? 'bg-[#18181A] border-[#F34213] text-white shadow-[0_0_15px_rgba(243,66,19,0.25)]'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.08] text-[#8E8B83]'
                  }`}
                >
                  <div className="text-[10px] text-[#F34213] font-bold">0{idx + 1}</div>
                  <div className="text-xs font-bold uppercase truncate mt-0.5">{p.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column (7 cols): Deep Step-by-Step Curriculum Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl tom-glass-elevated border border-[#E7E1D7]/[0.15] p-6 sm:p-10 shadow-2xl space-y-8">
            {/* Header with Title, Tagline, and Official Docs Link */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/[0.1]">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F34213]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F34213] font-bold">
                    DOMAIN 0{activePillarIdx + 1}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#E7E1D7] uppercase tracking-tight">
                  {currentPillar.title}
                </h3>
                <p className="font-sans text-sm text-[#8E8B83]">
                  {currentPillar.tagline}
                </p>
              </div>

              {/* Direct Official Documentation Button */}
              <a
                href={currentPillar.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="shrink-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-[#F34213] text-[#E7E1D7] hover:text-[#0B0B0B] border border-white/[0.12] transition-all text-xs font-mono font-bold shadow-md active:scale-95 group"
                title={`Visit ${currentPillar.officialDocName}`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>OFFICIAL DOCS</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Stage Selector Tabs (01 Fundamentals to 04 Enterprise Expert) */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8E8B83] font-bold">
                SELECT PROFICIENCY LEVEL
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {currentPillar.stages.map((stage, sIdx) => {
                  const isStageActive = activeStageIdx === sIdx;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => selectStage(sIdx)}
                      className={`p-3 rounded-2xl text-left font-mono transition-all border ${
                        isStageActive
                          ? 'bg-[#F34213] text-[#0B0B0B] border-[#F34213] font-bold shadow-[0_0_15px_rgba(243,66,19,0.35)]'
                          : 'bg-[#121214] hover:bg-white/[0.06] border-white/[0.08] text-[#8E8B83] hover:text-[#E7E1D7]'
                      }`}
                    >
                      <div className="text-[10px] opacity-75">{stage.level.split(' · ')[0]}</div>
                      <div className="text-xs font-bold truncate mt-0.5">
                        {stage.level.split(' · ')[1]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Stage Body: Summary & Core Curriculum Topics */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#F34213] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentStage.level} · {currentStage.summary}</span>
              </div>

              {/* Topic Checklist */}
              <div className="space-y-2.5">
                {currentStage.topics.map((t, tIdx) => (
                  <div key={tIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#E7E1D7]/90 font-sans leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#F34213] shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-World Terminal Command Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#8E8B83]">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-3.5 h-3.5 text-[#F34213]" />
                  <span>PRODUCTION TERMINAL TOOLING</span>
                </div>
                <span className="text-[10px] text-[#8E8B83]/70">Verified CLI Patterns</span>
              </div>

              <div className="rounded-2xl bg-[#0B0B0B] border border-white/[0.1] p-4 font-mono text-xs text-[#E7E1D7] shadow-inner space-y-2 overflow-x-auto">
                {currentStage.commands.map((cmd, cIdx) => (
                  <div key={cIdx} className="flex items-center justify-between gap-4 group">
                    <span className="text-emerald-400 select-all whitespace-pre-wrap">{cmd}</span>
                    <button
                      onClick={() => copyToClipboard(cmd)}
                      className="p-1 rounded hover:bg-white/[0.1] text-[#8E8B83] hover:text-white transition-colors shrink-0"
                      title="Copy command"
                    >
                      {copiedCmd === cmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* IoT & System Administrator Real-World Impact Banner */}
            <div className="rounded-2xl bg-[#F34213]/10 border border-[#F34213]/30 p-4 sm:p-5 flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#F34213] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#F34213] tracking-wider uppercase block">
                  IOT &amp; SYSADMIN FIELD APPLICATION
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#E7E1D7]/90 leading-relaxed">
                  {currentStage.iotSysAdminFocus}
                </p>
              </div>
            </div>

            {/* Footer with Deep Official Documentation Link */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#8E8B83]">
              <span>SOURCE: {currentPillar.officialDocName}</span>
              <a
                href={currentStage.officialDocs}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="hover:text-[#F34213] inline-flex items-center space-x-1 text-[#E7E1D7] font-semibold transition-colors"
              >
                <span>Read Official Standard Specification</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F34213]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
