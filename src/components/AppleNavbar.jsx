import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight, Download, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AppleNavbar({ onOpenSpotlight, theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Experience', href: '#experience' },
    { label: 'Cloud & IoT', href: '#specs' },
    { label: 'Projects', href: '#projects' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#161617]/80 dark:bg-[#161617]/80 light:bg-white/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10 py-3 shadow-sm' 
            : 'bg-transparent backdrop-blur-md border-b border-black/5 dark:border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Left: Apple Icon & Name */}
          <div className="flex items-center space-x-3">
            <a 
              href="#" 
              className="text-[#1d1d1f] dark:text-white hover:opacity-75 transition-opacity text-xl leading-none flex items-center"
              aria-label="Apple"
            >
              
            </a>
            <a 
              href="#" 
              className="font-semibold text-sm tracking-tight text-[#1d1d1f] dark:text-white hover:opacity-80 transition-opacity hidden xs:inline-block"
            >
              Girindra Mohan
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-normal text-[#6e6e73] dark:text-[#a1a1a6]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded-full bg-black/5 dark:bg-white/10 text-[#1d1d1f] dark:text-[#f5f5f7] hover:scale-110 active:scale-95 transition-all duration-200"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Light and Dark Mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform rotate-0" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 transition-transform -rotate-12" />
              )}
            </button>

            {/* Search / Spotlight trigger */}
            <button
              onClick={onOpenSpotlight}
              className="p-1.5 text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
              title="Search (⌘K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Resume Button */}
            <a
              href="./Girindra_Mohan_Resume.pdf"
              download="Girindra_Mohan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium rounded-full shadow transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[52px] z-40 bg-[#fbfbfd]/95 dark:bg-black/95 backdrop-blur-2xl flex flex-col px-6 py-8 md:hidden animate-in fade-in duration-200 overflow-y-auto">
          {/* Mobile Theme Switcher Banner */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/10 dark:border-white/10">
            <span className="text-xs font-medium text-[#6e6e73] dark:text-[#a1a1a6]">Appearance</span>
            <button
              onClick={onToggleTheme}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-xs font-medium text-[#1d1d1f] dark:text-white"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col space-y-5 text-xl font-medium text-[#1d1d1f] dark:text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="pb-3 border-b border-black/5 dark:border-white/10 hover:text-[#0071e3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 pt-4 space-y-4">
            <a
              href="./Girindra_Mohan_Resume.pdf"
              download="Girindra_Mohan_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-[#0071e3] text-white rounded-xl text-sm font-semibold shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 py-2.5 bg-black/5 dark:bg-white/10 rounded-xl text-xs text-[#1d1d1f] dark:text-white"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black/50 dark:text-white/50" />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 py-2.5 bg-black/5 dark:bg-white/10 rounded-xl text-xs text-[#1d1d1f] dark:text-white"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black/50 dark:text-white/50" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
