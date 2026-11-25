import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import TomCornerHUD from './components/TomCornerHUD';
import TomHero from './components/TomHero';
import TomAboutInfo from './components/TomAboutInfo';
import TomCurvedShowcase from './components/TomCurvedShowcase';
import SkhiladzeSkillRing from './components/SkhiladzeSkillRing';
import TomExperienceGrid from './components/TomExperienceGrid';
import TomFooterMarquee from './components/TomFooterMarquee';
import NakitiBottomDock from './components/NakitiBottomDock';
import NakitiCodeInspectorModal from './components/NakitiCodeInspectorModal';

function PortfolioApp() {
  const [hudOpen, setHudOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen font-sans relative selection:bg-[#F34213] selection:text-[#0B0B0B] overflow-x-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0B0B0B] text-[#E7E1D7]' : 'bg-[#F8F6F0] text-[#121214]'
    }`}>
      {/* Skhiladze-Inspired Interactive Custom Cursor & Spotlight */}
      <CustomCursor />

      {/* Floating Corner HUD (Top-Left 'g.' Monogram + Top-Right Theme Toggle & 'MENU' Button) */}
      <TomCornerHUD />

      {/* Main Page Content */}
      <main className="relative z-10">
        {/* 1. Hero with Context Status Bar & Massive Typography */}
        <TomHero />

        {/* 2. 2-Column Editorial About & Metadata Grid with Vermillion CTA */}
        <TomAboutInfo />

        {/* 3. Retro-Futuristic Curved Glass Monitor Project Showcase */}
        <TomCurvedShowcase />

        {/* 4. Skhiladze-Inspired Interactive System Skills Ring & Masterclass */}
        <SkhiladzeSkillRing />

        {/* 5. Experience & Leadership History */}
        <TomExperienceGrid />

        {/* 6. Footer with 3D Extruded Centerpiece & Colossal Running Marquee */}
        <TomFooterMarquee />
      </main>

      {/* Floating Bottom Control Dock (Sound Engine, Code HUD, Theme Toggle, Resume, Top) */}
      <NakitiBottomDock 
        onToggleHUD={() => setHudOpen((prev) => !prev)}
        hudOpen={hudOpen}
      />

      {/* Live Developer Runtime HUD */}
      <NakitiCodeInspectorModal 
        isOpen={hudOpen} 
        onClose={() => setHudOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
