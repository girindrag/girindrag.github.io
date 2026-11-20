import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Download, Sparkles } from 'lucide-react';

export default function NakitiHero() {
  const { personal } = portfolioData;

  return (
    <section id="overview" className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-5 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Top Status & Accreditation Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Live Availability Status */}
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#a1a1a6]">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-white">Taking on new leadership &amp; IoT architecture roles</span>
        </div>

        {/* Credentials badge */}
        <div className="hidden sm:inline-flex items-center space-x-2 text-xs font-mono text-[#8a8a93]">
          <span className="text-[#5865f2] font-semibold">AZ-104</span>
          <span>•</span>
          <span>Microsoft Certified: Azure Administrator</span>
        </div>
      </div>

      {/* Hero Display Typography */}
      <div className="my-auto py-12 sm:py-16">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#5865f2] mb-3">
          Girindra Mohan — Team Lead &amp; Systems Architect
        </p>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.96]">
          Cloud &amp; IoT Engineer.
        </h1>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#8a8a93] leading-[1.02] mt-2">
          Invisible code. Indestructible systems.
        </h2>

        <p className="max-w-2xl text-base sm:text-lg text-[#a1a1a6] mt-8 leading-relaxed font-sans">
          8+ years engineering resilient infrastructure: from <span className="text-white font-medium">Debian 11 container fleets</span> and <span className="text-white font-medium">Azure IoT edge devices</span> at Harman, to <span className="text-white font-medium">400+ physical servers</span> at State Bank of India Data Center.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-10 font-mono text-xs">
          <a
            href="./Girindra_Mohan_Resume.pdf"
            download
            className="px-6 py-3.5 bg-[#5865f2] hover:bg-[#6c72ff] text-white rounded-full font-semibold flex items-center space-x-2 shadow-[0_0_30px_rgba(88,101,242,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href="#work"
            className="px-6 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-white rounded-full border border-white/[0.1] transition-all flex items-center space-x-1.5"
          >
            <span>Explore Systems</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#5865f2]" />
          </a>
        </div>
      </div>

      {/* Bottom Measuring Axis & Scroll Indicator */}
      <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8a8a93]">
        <div className="flex items-center space-x-4">
          <span>LAT 18.5204° N</span>
          <span className="text-white/20">|</span>
          <span>LON 73.8567° E</span>
          <span className="text-white/20">|</span>
          <span className="text-[#5865f2]">PUNE / INDIA</span>
        </div>

        <a
          href="#about"
          className="flex items-center space-x-2 text-[#8a8a93] hover:text-white transition-colors group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#5865f2] group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
