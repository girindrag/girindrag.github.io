import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Mail, Phone, Download } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { soundEngine } from '../utils/audioEngine';

export default function TomFooterMarquee() {
  const { personal } = portfolioData;
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 25, y: x * 25 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const marqueeText = 'GIRINDRA MOHAN • CLOUD & IOT ARCHITECT • RESILIENT SYSTEMS • ';

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden border-t border-[#E7E1D7]/[0.1] bg-[#0B0B0B] tom-glow-bottom">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 relative z-10">
        {/* 3D Extruded Center Monolith Centerpiece linking directly to LinkedIn */}
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => soundEngine.playClick()}
          data-cursor="open"
          data-cursor-text="Connect"
          className="flex flex-col items-center justify-center py-16 sm:py-24 cursor-pointer group select-none transition-transform"
          title="Connect with Girindra Mohan on LinkedIn (@girindrag)"
          aria-label="Connect with Girindra Mohan on LinkedIn"
        >
          <div
            style={{
              transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="w-32 h-32 sm:w-44 sm:h-44 rounded-3xl tom-glass-elevated border-2 border-white/[0.15] dark:border-white/[0.15] group-hover:border-[#F34213] flex items-center justify-center shadow-[0_25px_60px_rgba(243,66,19,0.3)] group-hover:shadow-[0_30px_70px_rgba(243,66,19,0.45)] transition-all duration-300 group-hover:scale-105"
          >
            <span className="font-display font-black text-6xl sm:text-8xl text-[#121214] dark:text-[#E7E1D7] group-hover:text-[#F34213] transition-colors leading-none tracking-tighter">
              g<span className="text-[#F34213]">.</span>
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-[#8E8B83] group-hover:text-[#F34213] transition-colors mt-6">
            <span>
              CLICK T<span className="playfair-o">O</span> C<span className="playfair-o">O</span>NNECT
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F34213] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>

        {/* 4-Quadrant Editorial Metadata Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 border-t border-[#E7E1D7]/[0.1] text-xs font-mono uppercase tracking-widest text-[#8E8B83]">
          {/* Top-Left Quadrant */}
          <div className="space-y-2">
            <div className="text-[#E7E1D7] font-bold text-sm">
              GIRINDRA M<span className="playfair-o">O</span>HAN.W<span className="playfair-o text-[#F34213]">O</span>RK
            </div>
            <div>AUT<span className="playfair-o">O</span>MATI<span className="playfair-o">O</span>N • DEBIAN 11 • ENTERPRISE SCALE</div>
          </div>

          {/* Top-Right Quadrant */}
          <div className="space-y-2 md:text-right">
            <div className="text-[#E7E1D7] font-bold text-sm">
              P<span className="playfair-o">O</span>RTF<span className="playfair-o">O</span>LI<span className="playfair-o">O</span> 2026
            </div>
            <div>PUNE, INDIA • LAT 18.5204° N</div>
          </div>

          {/* Bottom-Left Quadrant */}
          <div className="space-y-3 pt-6 border-t border-[#E7E1D7]/[0.08]">
            <a
              href={`mailto:${personal.email}`}
              className="text-[#E7E1D7] hover:text-[#F34213] flex items-center space-x-2 transition-colors font-bold text-sm"
            >
              <Mail className="w-4 h-4 text-[#F34213]" />
              <span>{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="text-[#8E8B83] hover:text-[#E7E1D7] flex items-center space-x-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{personal.phone}</span>
            </a>
          </div>

          {/* Bottom-Right Quadrant */}
          <div className="space-y-3 pt-6 border-t border-[#E7E1D7]/[0.08] md:text-right">
            <div>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E7E1D7] hover:text-[#F34213] inline-flex items-center space-x-1.5 transition-colors font-bold text-sm"
              >
                <span>LINKEDIN: @GIRINDRAG</span>
                <ArrowUpRight className="w-4 h-4 text-[#F34213]" />
              </a>
            </div>
            <div>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E8B83] hover:text-[#E7E1D7] inline-flex items-center space-x-1.5 transition-colors"
              >
                <span>GITHUB: @GIRINDRAG</span>
                <ArrowUpRight className="w-4 h-4 text-[#F34213]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Colossal Bottom Running Marquee */}
      <div className="mt-12 overflow-hidden border-t border-[#E7E1D7]/[0.1] py-8 select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl uppercase tracking-tighter text-[#E7E1D7] mx-6"
            >
              GIRINDRA M<span className="playfair-o text-[#F34213]">O</span>HAN • CL<span className="playfair-o text-[#F34213]">O</span>UD &amp; I<span className="playfair-o text-[#F34213]">O</span>T ARCHITECT •{' '}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright Line */}
      <div className="text-center pt-8 text-[11px] font-mono uppercase tracking-widest text-[#8E8B83]">
        © {new Date().getFullYear()} GIRINDRA M<span className="playfair-o">O</span>HAN. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
