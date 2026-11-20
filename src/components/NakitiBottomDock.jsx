import React from 'react';
import { Code, Download, Bot, Sparkles, ArrowUp } from 'lucide-react';

export default function NakitiBottomDock({ onToggleHUD, hudOpen }) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none">
      <div className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-2 rounded-full bg-[#121216]/90 backdrop-blur-2xl border border-white/[0.12] shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-xs font-mono text-[#a1a1a6]">
        {/* Code / HUD Toggle */}
        <button
          onClick={onToggleHUD}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full transition-all ${
            hudOpen
              ? 'bg-[#5865f2] text-white shadow-[0_0_15px_rgba(88,101,242,0.5)]'
              : 'hover:bg-white/[0.08] hover:text-white'
          }`}
          title="Show Web Vitals & System HUD"
        >
          <Code className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">&lt;/&gt; Code</span>
        </button>

        <span className="text-white/20">|</span>

        {/* Ask AI Jump */}
        <a
          href="#ai"
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full hover:bg-white/[0.08] hover:text-white transition-colors"
        >
          <Bot className="w-3.5 h-3.5 text-[#5865f2]" />
          <span>Ask AI</span>
        </a>

        <span className="text-white/20">|</span>

        {/* Resume Download */}
        <a
          href="./Girindra_Mohan_Resume.pdf"
          download
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>

        {/* Back to Top */}
        <a
          href="#overview"
          className="w-7 h-7 rounded-full hover:bg-white/[0.08] flex items-center justify-center text-white/60 hover:text-white transition-colors"
          title="Scroll to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
