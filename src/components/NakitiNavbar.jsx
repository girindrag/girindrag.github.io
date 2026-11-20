import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function NakitiNavbar({ onOpenMenu, onToggleTheme, theme }) {
  const [timeStr, setTimeStr] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/80 backdrop-blur-xl border-b border-white/[0.08] py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Name with pulsing dot */}
        <a href="#" className="flex items-center space-x-2.5 group">
          <span className="w-2 h-2 rounded-full bg-[#5865f2] group-hover:scale-125 transition-transform" />
          <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#5865f2] transition-colors">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Center: Numbered Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-mono text-[#8a8a93]">
          <a href="#about" className="hover:text-white transition-colors">
            <span className="text-[#5865f2] mr-1">01</span> About
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            <span className="text-[#5865f2] mr-1">02</span> What I do
          </a>
          <a href="#work" className="hover:text-white transition-colors">
            <span className="text-[#5865f2] mr-1">03</span> Work
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            <span className="text-[#5865f2] mr-1">04</span> Experience
          </a>
          <a href="#ai" className="hover:text-white transition-colors">
            <span className="text-[#5865f2] mr-1">05</span> Ask AI
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            <span className="text-[#5865f2] mr-1">06</span> Contact
          </a>
        </nav>

        {/* Right: Live Location/Time & Menu Pill */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Live Location & Local Time Widget */}
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#a1a1a6]">
            <Globe className="w-3.5 h-3.5 text-[#5865f2] animate-spin [animation-duration:12s]" />
            <span>Pune, IN</span>
            <span className="text-white/30">•</span>
            <span className="text-white font-medium">{timeStr} IST</span>
          </div>

          {/* Minimalist Menu Pill Button */}
          <button
            onClick={onOpenMenu}
            className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/[0.1] text-xs font-mono tracking-wide transition-all duration-200 active:scale-95"
            aria-label="Toggle Fullscreen Menu"
          >
            <span>Menu</span>
            <div className="flex flex-col space-y-1">
              <span className="w-3 h-0.5 bg-white rounded-full" />
              <span className="w-3 h-0.5 bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
