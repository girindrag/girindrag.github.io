import React, { useState, useEffect } from 'react';
import { ArrowDown, Disc, Sliders } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SkhiladzeRadialDial from './SkhiladzeRadialDial';
import { soundEngine } from '../utils/audioEngine';

export default function TomHero() {
  const [timeStr, setTimeStr] = useState('');
  const [heroMode, setHeroMode] = useState('dial'); // 'dial' (skhiladze radial tuner) | 'marquee' (kinetic stacked)

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleHeroMode = (mode) => {
    soundEngine.playClick();
    if (mode === 'dial') {
      soundEngine.playDialDock();
    } else {
      soundEngine.playDialWhoosh(0.8);
    }
    setHeroMode(mode);
  };

  return (
    <section id="overview" className="relative min-h-[95vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-5 sm:px-12 max-w-7xl mx-auto z-10">
      {/* Tom de Koning Style Header Context Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-[#8E8B83] uppercase pb-6 border-b border-[#E7E1D7]/[0.1]">
        <div className="flex items-center space-x-3">
          <span className="text-[#E7E1D7] font-bold">PUN</span>
          <span>•</span>
          <span className="text-[#E7E1D7]">{timeStr || '20:40'} IST</span>
        </div>

        {/* Mode Switcher: Rotary Dial Tuner vs Kinetic Marquee */}
        <div className="flex items-center space-x-1 p-1 rounded-full bg-[#18181A] border border-white/[0.1]">
          <button
            onClick={() => toggleHeroMode('dial')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full transition-all text-[11px] font-mono font-bold ${
              heroMode === 'dial'
                ? 'bg-[#F34213] text-[#0B0B0B] shadow-[0_0_12px_rgba(243,66,19,0.5)]'
                : 'text-[#8E8B83] hover:text-[#E7E1D7]'
            }`}
            title="Interactive Skhiladze-style Rotary Dial Tuner"
          >
            <Disc className={`w-3.5 h-3.5 ${heroMode === 'dial' ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
            <span>DIAL</span>
          </button>
          <button
            onClick={() => toggleHeroMode('marquee')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full transition-all text-[11px] font-mono font-bold ${
              heroMode === 'marquee'
                ? 'bg-[#F34213] text-[#0B0B0B] shadow-[0_0_12px_rgba(243,66,19,0.5)]'
                : 'text-[#8E8B83] hover:text-[#E7E1D7]'
            }`}
            title="Kinetic 3-Stack Marquee View"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>MARQUEE</span>
          </button>
        </div>

        <div className="flex items-center space-x-2 text-[#E7E1D7]">
          <span className="w-2 h-2 rounded-full bg-[#F34213] animate-pulse" />
          <span>
            AVAILABLE F<span className="playfair-o">O</span>R SENI<span className="playfair-o">O</span>R &amp; LEAD R<span className="playfair-o">O</span>LES
          </span>
        </div>
      </div>

      {/* Center Hero Visual: Interactive Rotary Dial Tuner OR Kinetic 3-Stack Marquee */}
      {heroMode === 'dial' ? (
        <SkhiladzeRadialDial />
      ) : (
        /* 3-Stacked Kinetic Brand Marquee: Girindra / Mohan / .Work (Restrained Red Accent) */
        <div className="my-auto py-6 sm:py-8 -mx-5 sm:-mx-12 overflow-hidden select-none border-y border-[#E7E1D7]/[0.08] my-4 sm:my-6 bg-[#0B0B0B]/30 space-y-1 sm:space-y-2 animate-in fade-in duration-300">
          {/* Line 1: Girindra */}
          <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            {[...Array(8)].map((_, i) => (
              <h1
                key={i}
                className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] tracking-tight uppercase leading-[0.88] text-[#E7E1D7] mx-6 sm:mx-10 shrink-0 inline-flex items-center hover:text-[#F34213] transition-colors duration-300"
              >
                <span>GIRINDRA</span>
                <span className="text-[#8E8B83]/30 mx-6 sm:mx-10 text-3xl sm:text-5xl font-mono">•</span>
              </h1>
            ))}
          </div>

          {/* Line 2: Mohan with subtle red italic O */}
          <div className="flex animate-marquee whitespace-nowrap will-change-transform" style={{ animationDuration: '32s' }}>
            {[...Array(8)].map((_, i) => (
              <h1
                key={i}
                className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] tracking-tight uppercase leading-[0.88] text-[#E7E1D7] mx-6 sm:mx-10 shrink-0 inline-flex items-center hover:text-[#F34213] transition-colors duration-300"
              >
                <span>M<span className="playfair-o text-[#F34213]">O</span>HAN</span>
                <span className="text-[#8E8B83]/30 mx-6 sm:mx-10 text-3xl sm:text-5xl font-mono">•</span>
              </h1>
            ))}
          </div>

          {/* Line 3: .Work with minimal red dot */}
          <div className="flex animate-marquee whitespace-nowrap will-change-transform" style={{ animationDuration: '28s' }}>
            {[...Array(8)].map((_, i) => (
              <h1
                key={i}
                className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] tracking-tight uppercase leading-[0.88] text-[#E7E1D7] mx-6 sm:mx-10 shrink-0 inline-flex items-center hover:text-[#F34213] transition-colors duration-300"
              >
                <span><span className="text-[#F34213]">.</span>W<span className="playfair-o">O</span>RK</span>
                <span className="text-[#8E8B83]/30 mx-6 sm:mx-10 text-3xl sm:text-5xl font-mono">•</span>
              </h1>
            ))}
          </div>
        </div>
      )}

      {/* Positioning Statement & Mission */}
      <div className="max-w-4xl">
        <p className="font-display text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#E7E1D7] mt-2 sm:mt-4 leading-[1.15]">
          I engineer high-performance systems and build infrastructure that never breaks —{' '}
          <span className="text-[#F34213]">stronger, sharper, unforgettable.</span>
        </p>

        <p className="font-sans text-sm sm:text-base text-[#8E8B83] mt-5 max-w-2xl leading-relaxed">
          Cloud / IoT Engineer &amp; Team Lead with 8+ years across enterprise banking datacenters, automotive IoT fleets, and self-healing Debian 11 container architectures.
        </p>
      </div>

      {/* Bottom Context Row */}
      <div className="flex items-end justify-between pt-8 border-t border-[#E7E1D7]/[0.1] text-xs font-mono tracking-widest uppercase text-[#8E8B83] mt-8">
        <div className="flex items-center space-x-4">
          <span>AUT<span className="playfair-o">O</span>MATI<span className="playfair-o">O</span>N</span>
          <span>•</span>
          <span>CL<span className="playfair-o">O</span>UD / I<span className="playfair-o">O</span>T</span>
          <span>•</span>
          <span>ENTERPRISE LINUX</span>
        </div>

        <a
          href="#about"
          className="flex items-center space-x-2 text-[#E7E1D7] hover:text-[#F34213] transition-colors group"
        >
          <span>EXPL<span className="playfair-o">O</span>RE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#F34213] group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
