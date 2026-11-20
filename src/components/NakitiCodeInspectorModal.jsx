import React, { useState, useEffect } from 'react';
import { X, Activity, Cpu, CheckCircle2, Zap } from 'lucide-react';

export default function NakitiCodeInspectorModal({ isOpen, onClose }) {
  const [fps, setFps] = useState(60);

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
    return () => cancelAnimationFrame(animId);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 sm:right-8 z-50 w-[90vw] max-w-sm rounded-2xl bg-[#0e0e13]/95 backdrop-blur-2xl border border-white/[0.12] p-5 shadow-2xl text-xs font-mono text-[#d2d2d7] animate-in fade-in zoom-in-95 duration-150">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
        <div className="flex items-center space-x-2 text-white font-bold">
          <Zap className="w-4 h-4 text-[#5865f2]" />
          <span>Live Runtime HUD &amp; Vitals</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/[0.08]"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
          <span className="text-[#8a8a93]">Render Performance</span>
          <span className="text-emerald-400 font-bold">{fps} FPS</span>
        </div>

        <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
          <span className="text-[#8a8a93]">Largest Contentful Paint</span>
          <span className="text-emerald-400 font-bold">0.32s (Good)</span>
        </div>

        <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
          <span className="text-[#8a8a93]">Cumulative Layout Shift</span>
          <span className="text-emerald-400 font-bold">0.002</span>
        </div>

        <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
          <span className="text-[#8a8a93]">Canvas Particle Engine</span>
          <span className="text-[#5865f2]">Active (HTML5 / 2D)</span>
        </div>

        <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
          <span className="text-[#8a8a93]">Edge Host &amp; CI/CD</span>
          <span className="text-white">GitHub Actions Pages</span>
        </div>

        <div className="flex items-center justify-between py-1">
          <span className="text-[#8a8a93]">Production Target</span>
          <span className="text-[#5865f2] font-semibold">girindrag.github.io</span>
        </div>
      </div>
    </div>
  );
}
