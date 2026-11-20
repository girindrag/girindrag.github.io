import React, { useState } from 'react';
import NakitiParticleCanvas from './components/NakitiParticleCanvas';
import NakitiNavbar from './components/NakitiNavbar';
import NakitiFlyoutMenu from './components/NakitiFlyoutMenu';
import NakitiHero from './components/NakitiHero';
import NakitiNarrativeStats from './components/NakitiNarrativeStats';
import NakitiServicesCream from './components/NakitiServicesCream';
import NakitiSelectedWork from './components/NakitiSelectedWork';
import NakitiExperienceTimeline from './components/NakitiExperienceTimeline';
import NakitiAskAI from './components/NakitiAskAI';
import NakitiContactFooter from './components/NakitiContactFooter';
import NakitiBottomDock from './components/NakitiBottomDock';
import NakitiCodeInspectorModal from './components/NakitiCodeInspectorModal';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hudOpen, setHudOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f6] font-sans relative selection:bg-[#5865f2] selection:text-white noise-bg">
      {/* 3D / 2D Canvas Interactive Particles */}
      <NakitiParticleCanvas />

      {/* Top Navigation Bar with Pune Clock & Menu */}
      <NakitiNavbar 
        onOpenMenu={() => setMenuOpen(true)} 
      />

      {/* Full-Screen Flyout Editorial Menu */}
      <NakitiFlyoutMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
      />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* 1. Hero with Status, Massive Headline & Lat/Long Coordinates */}
        <NakitiHero />

        {/* 2. Philosophy Narrative & 4-Metric Stats Grid */}
        <NakitiNarrativeStats />

        {/* 3. "What I Do" (Alternating Warm Porcelain/Cream Section) */}
        <NakitiServicesCream />

        {/* 4. Selected Work (Stacked Cards with Electric Indigo Hover Inversion) */}
        <NakitiSelectedWork />

        {/* 5. Career Scale Timeline & Infinite Toolkit Marquee */}
        <NakitiExperienceTimeline />

        {/* 6. Ask Girindra's AI (Interactive Assistant) */}
        <NakitiAskAI />

        {/* 7. Engagement, 3-Step Process & Giant Circular CTA Footer */}
        <NakitiContactFooter />
      </main>

      {/* Floating Bottom Dock (HUD, AI, Resume, Top) */}
      <NakitiBottomDock 
        onToggleHUD={() => setHudOpen((prev) => !prev)}
        hudOpen={hudOpen}
      />

      {/* Live Developer HUD (Core Web Vitals & Runtime) */}
      <NakitiCodeInspectorModal 
        isOpen={hudOpen} 
        onClose={() => setHudOpen(false)} 
      />
    </div>
  );
}
