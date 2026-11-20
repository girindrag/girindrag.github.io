import React, { useState } from 'react';
import { Code, Download, Volume2, VolumeX, ArrowUp, Music } from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';
import { FourRedDots } from './TomCornerHUD';

export default function NakitiBottomDock({ onToggleHUD, hudOpen }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState('pulse');
  const [showTrackSelect, setShowTrackSelect] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('');
    }, 2500);
  };

  const toggleSound = async () => {
    soundEngine.playClick();
    const active = await soundEngine.toggle();
    setIsPlaying(active);
    triggerToast(active ? `AUDIO ACTIVE: ${track.toUpperCase()}` : 'AUDIO MUTED');
  };

  const changeTrack = async (newTrack) => {
    soundEngine.playClick();
    setTrack(newTrack);
    await soundEngine.setTrack(newTrack);
    setIsPlaying(true);
    setShowTrackSelect(false);
    triggerToast(`AUDIO TRACK: ${newTrack.toUpperCase()}`);
  };

  const scrollToTop = () => {
    soundEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHUD = () => {
    soundEngine.playClick();
    onToggleHUD();
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 select-none max-w-[95vw]">
      {/* Visual Audio Toast Notification */}
      {toastMsg && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-[#141416]/95 border border-[#F34213]/50 text-[#F34213] text-[11px] font-mono font-bold tracking-wider shadow-[0_0_20px_rgba(243,66,19,0.35)] animate-in fade-in slide-in-from-bottom-2 duration-150">
          {toastMsg}
        </div>
      )}

      {/* Track Selector Popup */}
      {showTrackSelect && (
        <div className="absolute bottom-16 left-4 bg-[#141416]/98 backdrop-blur-2xl border border-white/[0.14] rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col space-y-1.5 w-52 text-xs font-mono text-[#E7E1D7] animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between px-2 py-1 border-b border-white/[0.08] mb-1">
            <span className="text-[10px] text-[#8E8B83] uppercase font-bold tracking-wider">
              Soundscape Mode
            </span>
            <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-[#F34213] animate-ping' : 'bg-[#8E8B83]'}`} />
          </div>
          <button
            onClick={() => changeTrack('pulse')}
            className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-colors ${
              track === 'pulse'
                ? 'bg-[#F34213] text-[#0B0B0B] font-bold'
                : 'hover:bg-white/[0.08] text-[#E7E1D7]'
            }`}
          >
            <span>01 · Pulse (Synth Rhythm)</span>
            {track === 'pulse' && <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0B]" />}
          </button>
          <button
            onClick={() => changeTrack('drift')}
            className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-colors ${
              track === 'drift'
                ? 'bg-[#F34213] text-[#0B0B0B] font-bold'
                : 'hover:bg-white/[0.08] text-[#E7E1D7]'
            }`}
          >
            <span>02 · Drift (Lush Ambient)</span>
            {track === 'drift' && <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0B]" />}
          </button>
        </div>
      )}

      {/* Capsule Dock Container matching exact screenshot design */}
      <div className="flex items-center space-x-2 sm:space-x-3 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#161618]/90 hover:bg-[#1a1a1e]/95 backdrop-blur-2xl border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-xs font-mono text-[#E7E1D7] transition-all">
        {/* 1. Left Sound Indicator Pill with Glowing Border & Animated Bars */}
        <button
          onClick={toggleSound}
          className={`flex items-center justify-center px-3 py-1.5 rounded-full transition-all duration-300 active:scale-95 ${
            isPlaying
              ? 'bg-[#F34213]/20 border border-[#F34213] shadow-[0_0_20px_rgba(243,66,19,0.45)] text-[#F34213]'
              : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#8E8B83]'
          }`}
          title={isPlaying ? 'Click to Mute background sound' : 'Click to Unmute & Play background soundscape'}
          aria-label={isPlaying ? 'Mute sound' : 'Play sound'}
        >
          {isPlaying ? (
            <div className="flex items-end space-x-0.5 h-3.5 w-3.5">
              <span className="w-0.5 bg-[#F34213] rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-full" />
              <span className="w-0.5 bg-[#F34213] rounded-full animate-[pulse_0.4s_ease-in-out_infinite_0.1s] h-2/3" />
              <span className="w-0.5 bg-[#F34213] rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.2s] h-4/5" />
            </div>
          ) : (
            <div className="flex items-end space-x-0.5 h-3.5 w-3.5 opacity-40">
              <span className="w-0.5 bg-[#8E8B83] rounded-full h-1.5" />
              <span className="w-0.5 bg-[#8E8B83] rounded-full h-2.5" />
              <span className="w-0.5 bg-[#8E8B83] rounded-full h-1" />
            </div>
          )}
        </button>

        {/* 2. Music Note Button with 4 Red Dots & Track Menu Toggle */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => {
              soundEngine.playClick();
              if (!isPlaying) toggleSound();
              setShowTrackSelect(!showTrackSelect);
            }}
            className={`p-1.5 rounded-full transition-all active:scale-90 ${
              isPlaying
                ? 'text-[#F34213] hover:bg-[#F34213]/15'
                : 'text-[#8E8B83] hover:text-[#E7E1D7] hover:bg-white/[0.08]'
            }`}
            title="Switch Ambient Track or Toggle Sound"
            aria-label="Sound settings"
          >
            <Music className="w-4 h-4" />
          </button>
        </div>

        {/* Vertical Divider */}
        <span className="h-4 w-px bg-white/[0.14]" />

        {/* 3. Code / Live Runtime HUD Toggle Button */}
        <button
          onClick={handleHUD}
          className={`p-1.5 rounded-full transition-all active:scale-90 ${
            hudOpen
              ? 'text-[#F34213] bg-[#F34213]/15'
              : 'text-[#8E8B83] hover:text-[#E7E1D7] hover:bg-white/[0.08]'
          }`}
          title="Toggle Live Runtime HUD & Vitals"
          aria-label="Toggle Runtime HUD"
        >
          <Code className="w-4 h-4" />
        </button>

        {/* Vertical Divider */}
        <span className="h-4 w-px bg-white/[0.14]" />

        {/* 4. Resume Button linking to clean resume page */}
        <a
          href="./resume.html"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundEngine.playClick()}
          className="group relative px-4 py-1.5 rounded-full bg-[#242428] hover:bg-[#2e2e33] border border-white/[0.14] hover:border-[#F34213]/40 text-[#E7E1D7] hover:text-white transition-all duration-200 flex items-center space-x-2 font-mono text-xs font-medium shadow-[0_4px_12px_rgba(0,0,0,0.5)] active:scale-95"
          title="View Official Resume (Aakriti Gupta style layout with PDF download)"
        >
          {/* Subtle minimal single red accent dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-[#F34213] shrink-0" />
          <Download className="w-3.5 h-3.5 text-[#E7E1D7] group-hover:text-[#F34213] group-hover:translate-y-0.5 transition-all duration-200" />
          <span className="tracking-wide">Resume</span>
        </a>

        {/* 5. Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="p-1.5 rounded-full text-[#8E8B83] hover:text-[#E7E1D7] hover:bg-white/[0.08] transition-all active:scale-90"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
