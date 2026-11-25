import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SkhiladzeRadialDial from './SkhiladzeRadialDial';

export default function TomHero() {
  const [timeStr, setTimeStr] = useState('');

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

  return (
    <section id="overview" className="relative min-h-[95vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-5 sm:px-12 max-w-7xl mx-auto z-10">
      {/* Tom de Koning Style Header Context Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-[#8E8B83] uppercase pb-6 border-b border-[#E7E1D7]/[0.1]">
        <div className="flex items-center space-x-3">
          <span className="text-[#E7E1D7] font-bold">PUN</span>
          <span>•</span>
          <span className="text-[#E7E1D7]">{timeStr || '20:40'} IST</span>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <span>
            P<span className="playfair-o">O</span>RTF<span className="playfair-o">O</span>LI<span className="playfair-o">O</span> 2026
          </span>
        </div>

        <div className="flex items-center space-x-2 text-[#E7E1D7]">
          <span className="w-2 h-2 rounded-full bg-[#F34213] animate-pulse" />
          <span>
            AVAILABLE F<span className="playfair-o">O</span>R SENI<span className="playfair-o">O</span>R &amp; LEAD R<span className="playfair-o">O</span>LES
          </span>
        </div>
      </div>

      {/* Center Hero Visual: Interactive Skhiladze-style Rotary Dial Tuner */}
      <SkhiladzeRadialDial />

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
