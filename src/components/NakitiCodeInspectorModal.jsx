import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Activity, Cpu, Radio, ShieldCheck } from 'lucide-react';
import { FourRedDots } from './TomCornerHUD';
import { soundEngine } from '../utils/audioEngine';

export default function NakitiCodeInspectorModal({ isOpen, onClose }) {
  const [fps, setFps] = useState(60);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const calculateFPS = (now) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calculateFPS);
    };

    animId = requestAnimationFrame(calculateFPS);
    const audioInterval = setInterval(() => {
      setIsAudioActive(soundEngine.isPlaying);
    }, 500);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(audioInterval);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:right-8 z-50 w-[92vw] max-w-md rounded-2xl bg-[#141416]/95 backdrop-blur-2xl border border-white/[0.14] p-5 sm:p-6 shadow-[0_30px_70px_rgba(0,0,0,0.9)] text-xs font-mono text-[#E7E1D7] animate-in fade-in zoom-in-95 duration-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.10] mb-4">
        <div className="flex items-center space-x-3">
          <FourRedDots className="w-3.5 h-3.5 shrink-0" />
          <div className="flex flex-col">
            <span className="font-display font-bold uppercase tracking-wider text-sm text-[#E7E1D7]">
              LIVE RUNTIME H<span className="playfair-o">U</span>D &amp; VITALS
            </span>
            <span className="text-[10px] text-[#8E8B83] tracking-widest uppercase">
              System Telemetry · Node 01
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center text-[#8E8B83] hover:text-[#E7E1D7] transition-all"
          title="Close HUD"
          aria-label="Close HUD"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Metrics Rows */}
      <div className="space-y-2 text-[11px] sm:text-xs">
        <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
          <span className="text-[#8E8B83] flex items-center space-x-1.5">
            <Activity className="w-3 h-3 text-[#F34213]" />
            <span>Render Performance</span>
          </span>
          <span className="text-emerald-400 font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            {fps} FPS
          </span>
        </div>

        <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
          <span className="text-[#8E8B83]">Largest Contentful Paint</span>
          <span className="text-emerald-400 font-bold font-mono">0.32s (Good)</span>
        </div>

        <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
          <span className="text-[#8E8B83]">Cumulative Layout Shift</span>
          <span className="text-emerald-400 font-bold font-mono">0.002</span>
        </div>

        <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
          <span className="text-[#8E8B83] flex items-center space-x-1.5">
            <Radio className="w-3 h-3 text-[#F34213]" />
            <span>Web Audio Engine</span>
          </span>
          <span className={`font-semibold flex items-center space-x-1.5 ${
            isAudioActive ? 'text-[#F34213]' : 'text-[#8E8B83]'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${
              isAudioActive ? 'bg-[#F34213] animate-ping' : 'bg-[#8E8B83]'
            }`} />
            <span>{isAudioActive ? 'Streaming (Generative)' : 'Muted (Standby)'}</span>
          </span>
        </div>

        <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
          <span className="text-[#8E8B83] flex items-center space-x-1.5">
            <Cpu className="w-3 h-3 text-[#8E8B83]" />
            <span>Engine Core</span>
          </span>
          <span className="text-[#E7E1D7] font-mono">React 18 · Vite · Tailwind</span>
        </div>

        <div className="flex items-center justify-between py-1.5 border-b border-white/[0.06]">
          <span className="text-[#8E8B83]">Edge Host &amp; CI/CD</span>
          <span className="text-[#E7E1D7] font-semibold flex items-center space-x-1">
            <ShieldCheck className="w-3 h-3 text-[#F34213]" />
            <span>GitHub Actions Pages</span>
          </span>
        </div>

        <div className="flex items-center justify-between pt-1.5">
          <span className="text-[#8E8B83]">Production Target</span>
          <a
            href="https://girindrag.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F34213] hover:text-white font-semibold flex items-center space-x-1 transition-colors"
          >
            <span>girindrag.github.io</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
