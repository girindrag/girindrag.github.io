import React, { useState } from 'react';
import { Code, Download, VolumeX, ArrowUp, Music } from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';

export default function NakitiBottomDock({ onToggleHUD, hudOpen }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState('drift');
  const [showTrackSelect, setShowTrackSelect] = useState(false);

  const toggleSound = () => {
    const active = soundEngine.toggle();
    setIsPlaying(active);
  };

  const changeTrack = (newTrack) => {
    setTrack(newTrack);
    soundEngine.setTrack(newTrack);
    setShowTrackSelect(false);
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none">
      {/* Track Selector Popup */}
      {showTrackSelect && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-[#121216]/95 backdrop-blur-2xl border border-white/[0.12] rounded-xl p-2 shadow-2xl flex flex-col space-y-1 w-40 text-xs font-mono text-[#a1a1a6] animate-in fade-in zoom-in-95 duration-100">
          <div className="text-[10px] text-white/40 uppercase px-2 py-0.5 font-semibold">Soundscape</div>
          <button
            onClick={() => changeTrack('drift')}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors ${
              track === 'drift' ? 'bg-[#F34213] text-[#0B0B0B] font-bold' : 'hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <span>01 · Drift (Drone)</span>
            {track === 'drift' && <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0B]" />}
          </button>
          <button
            onClick={() => changeTrack('pulse')}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors ${
              track === 'pulse' ? 'bg-[#F34213] text-[#0B0B0B] font-bold' : 'hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <span>02 · Pulse (Synth)</span>
            {track === 'pulse' && <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0B]" />}
          </button>
        </div>
      )}

      <div className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-2 rounded-full bg-[#121216]/90 backdrop-blur-2xl border border-white/[0.12] shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-xs font-mono text-[#a1a1a6]">
        {/* Sound Toggle Button with Animated Equalizer Bars */}
        <div className="flex items-center space-x-1">
          <button
            onClick={toggleSound}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all ${
              isPlaying
                ? 'bg-[#F34213]/20 text-white border border-[#F34213]/50 shadow-[0_0_15px_rgba(243,66,19,0.3)]'
                : 'hover:bg-white/[0.08] hover:text-white'
            }`}
            title={isPlaying ? 'Mute ambient soundscape' : 'Play ambient soundscape (Drift & Pulse)'}
          >
            {isPlaying ? (
              <div className="flex items-end space-x-0.5 h-3 w-3">
                <span className="w-0.5 bg-[#F34213] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
                <span className="w-0.5 bg-[#F34213] rounded-full animate-[pulse_0.4s_ease-in-out_infinite_0.1s] h-2/3" />
                <span className="w-0.5 bg-[#F34213] rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.2s] h-4/5" />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-white/50" />
            )}
            <span className="hidden xs:inline">
              {isPlaying ? `Sound: ${track === 'drift' ? 'Drift' : 'Pulse'}` : 'Sound: Off'}
            </span>
          </button>

          {/* Small track switch chevron */}
          {isPlaying && (
            <button
              onClick={() => setShowTrackSelect(!showTrackSelect)}
              className="p-1 rounded-full hover:bg-white/[0.08] text-white/60 hover:text-white transition-colors"
              title="Change soundtrack (Drift / Pulse)"
            >
              <Music className="w-3 h-3 text-[#F34213]" />
            </button>
          )}
        </div>

        <span className="text-white/20">|</span>

        {/* Code / HUD Toggle */}
        <button
          onClick={onToggleHUD}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full transition-all ${
            hudOpen
              ? 'bg-[#F34213] text-[#0B0B0B] font-bold shadow-[0_0_15px_rgba(243,66,19,0.5)]'
              : 'hover:bg-white/[0.08] hover:text-white'
          }`}
          title="Show Web Vitals & System HUD"
        >
          <Code className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">&lt;/&gt; Code</span>
        </button>

        <span className="text-white/20">|</span>

        {/* Resume Download */}
        <a
          href="./Girindra_Mohan_Resume.pdf"
          download
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>

        {/* Back to Top */}
        <a
          href="#overview"
          className="w-7 h-7 rounded-full hover:bg-white/[0.08] flex items-center justify-center text-white/60 hover:text-white transition-colors"
          title="Scroll to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
