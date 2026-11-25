import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Download, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// Four Red Dots Diamond Icon with Pulse & Hover Rotation
export function FourRedDots({ className = "w-4 h-4" }) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full text-[#F34213] animate-four-dots transition-transform duration-500 ease-out group-hover:rotate-90 group-hover:scale-110"
        fill="currentColor"
      >
        {/* Top Dot */}
        <circle cx="12" cy="4.5" r="2.8" />
        {/* Bottom Dot */}
        <circle cx="12" cy="19.5" r="2.8" />
        {/* Left Dot */}
        <circle cx="4.5" cy="12" r="2.8" />
        {/* Right Dot */}
        <circle cx="19.5" cy="12" r="2.8" />
      </svg>
    </div>
  );
}

export default function TomCornerHUD() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, isDark, toggleTheme, setTheme } = useTheme();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      {/* Floating Top-Left 'g.' Monogram HUD */}
      <div className="fixed top-5 left-5 sm:top-8 sm:left-8 z-40">
        <a
          href="#"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl tom-glass hover:bg-white/[0.12] flex items-center justify-center transition-all duration-300 group shadow-2xl"
          title="Girindra Mohan"
        >
          <span className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#F34213] transition-colors leading-none tracking-tighter">
            g<span className="text-[#F34213]">.</span>
          </span>
        </a>
      </div>

      {/* Floating Top-Right Theme Toggle & MENU Button */}
      <div className="fixed top-5 right-5 sm:top-8 sm:right-8 z-40 flex items-center space-x-2.5 sm:space-x-3">
        {/* Light / Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#18181a]/85 hover:bg-[#222226]/90 backdrop-blur-xl border border-white/[0.14] hover:border-white/[0.25] flex items-center justify-center transition-all duration-300 shadow-2xl active:scale-95 group text-[#E7E1D7] hover:text-[#F34213]"
          title={isDark ? "Switch to Light Mode (T)" : "Switch to Dark Mode (T)"}
          aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#F34213] transition-transform duration-500 group-hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[#121214] transition-transform duration-500 group-hover:-rotate-12" />
          )}
        </button>

        {/* MENU Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-[#18181a]/85 hover:bg-[#222226]/90 backdrop-blur-xl border border-white/[0.14] hover:border-white/[0.25] flex items-center space-x-3 transition-all duration-300 shadow-2xl active:scale-95 group"
          aria-label="Open Menu"
        >
          {/* 4 Red Dots in Diamond Animation */}
          <FourRedDots className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          
          {/* MENU Text */}
          <span className="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-[#E7E1D7] group-hover:text-white transition-colors leading-none pt-0.5">
            MENU
          </span>
        </button>
      </div>

      {/* Fullscreen Editorial Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0B0B]/98 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-12 animate-in fade-in duration-200">
          {/* Top Bar with Theme Switcher and Close Button */}
          <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#8E8B83]">
              <FourRedDots className="w-3.5 h-3.5" />
              <span>
                GIRINDRA M<span className="playfair-o">O</span>HAN.W<span className="playfair-o text-[#F34213]">O</span>RK
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {/* Theme Switcher inside Drawer */}
              <div className="flex items-center p-1 rounded-xl bg-white/[0.06] border border-white/[0.1]">
                <button
                  onClick={() => setTheme('dark')}
                  className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all ${
                    isDark ? 'bg-[#F34213] text-[#0B0B0B]' : 'text-[#8E8B83] hover:text-[#E7E1D7]'
                  }`}
                >
                  <Moon className="w-3 h-3" />
                  <span>DARK</span>
                </button>
                <button
                  onClick={() => setTheme('light')}
                  className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all ${
                    !isDark ? 'bg-[#F34213] text-[#0B0B0B]' : 'text-[#8E8B83] hover:text-[#E7E1D7]'
                  }`}
                >
                  <Sun className="w-3 h-3" />
                  <span>LIGHT</span>
                </button>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 rounded-full tom-glass hover:bg-white/[0.15] text-[#E7E1D7] flex items-center justify-center transition-all duration-150 active:scale-90"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Massive Typographic Navigation Links */}
          <nav className="max-w-4xl w-full mx-auto my-auto py-8 text-center sm:text-left">
            <div className="space-y-4 sm:space-y-6">
              <a
                href="#overview"
                onClick={() => setMenuOpen(false)}
                className="block font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#E7E1D7] hover:text-[#F34213] hover:translate-x-3 transition-all duration-200 uppercase tracking-tight"
              >
                INF<span className="playfair-o">O</span>
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#E7E1D7] hover:text-[#F34213] hover:translate-x-3 transition-all duration-200 uppercase tracking-tight"
              >
                AB<span className="playfair-o">O</span>UT
              </a>
              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className="block font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#E7E1D7] hover:text-[#F34213] hover:translate-x-3 transition-all duration-200 uppercase tracking-tight"
              >
                W<span className="playfair-o">O</span>RK
              </a>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="block font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#E7E1D7] hover:text-[#F34213] hover:translate-x-3 transition-all duration-200 uppercase tracking-tight group"
              >
                <span>SKILLS <span className="playfair-o text-[#F34213]">R</span>ING</span>
              </a>
              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="block font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#E7E1D7] hover:text-[#F34213] hover:translate-x-3 transition-all duration-200 uppercase tracking-tight"
              >
                EXPERIENCE
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#E7E1D7] hover:text-[#F34213] hover:translate-x-3 transition-all duration-200 uppercase tracking-tight"
              >
                C<span className="playfair-o">O</span>NTACT
              </a>
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="max-w-7xl w-full mx-auto pt-6 border-t border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E8B83]">
            <div className="flex items-center space-x-6">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E7E1D7] flex items-center space-x-1"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F34213]" />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E7E1D7] flex items-center space-x-1"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F34213]" />
              </a>
              <a
                href="./resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E7E1D7] flex items-center space-x-1 text-[#F34213]"
              >
                <span>RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F34213]" />
              </a>
            </div>

            <div className="tracking-widest uppercase">
              P<span className="playfair-o">O</span>RTF<span className="playfair-o">O</span>LI<span className="playfair-o">O</span> 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
}
