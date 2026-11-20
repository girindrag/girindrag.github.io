import React, { useState, useEffect } from 'react';
import AppleNavbar from './components/AppleNavbar';
import AppleHero from './components/AppleHero';
import AppleBentoHighlights from './components/AppleBentoHighlights';
import AppleTechSpecs from './components/AppleTechSpecs';
import AppleFeaturedProjects from './components/AppleFeaturedProjects';
import AppleTerminalStage from './components/AppleTerminalStage';
import AppleContact from './components/AppleContact';
import AppleFooter from './components/AppleFooter';
import Spotlight from './components/Spotlight';

export default function App() {
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  
  // Theme state: defaults to dark mode, supports localStorage persistence
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  // Apply theme class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Global keyboard shortcut for Spotlight (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSpotlightOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenApp = (appId) => {
    const targets = {
      about: '#overview',
      experience: '#experience',
      skills: '#specs',
      projects: '#projects',
      terminal: '#terminal',
      contact: '#contact',
    };

    const targetId = targets[appId] || '#overview';
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] flex flex-col selection:bg-[#0071e3] selection:text-white transition-colors duration-300">
      {/* Apple Style Global Navigation Bar with Light/Dark Mode Switch */}
      <AppleNavbar 
        onOpenSpotlight={() => setSpotlightOpen(true)} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Apple Product Page Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Showcase */}
        <AppleHero />

        {/* 2. Keynote Bento Highlights (Harman, DXC SBI 400+, Genex, Credentials) */}
        <AppleBentoHighlights />

        {/* 3. Tech Specs Matrix (Cloud, DevOps, OS, Automation) */}
        <AppleTechSpecs />

        {/* 4. Featured Production Systems & Architecture */}
        <AppleFeaturedProjects />

        {/* 5. Apple Developer Interactive Terminal */}
        <AppleTerminalStage />

        {/* 6. Contact & Support Composition */}
        <AppleContact />
      </main>

      {/* 7. Apple Global Footer */}
      <AppleFooter />

      {/* Spotlight Search Overlay (⌘K) */}
      <Spotlight
        isOpen={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
        onOpenApp={handleOpenApp}
      />
    </div>
  );
}
