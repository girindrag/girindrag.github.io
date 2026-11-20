import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Apple, Cpu, HardDrive, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutThisMacWindow({ onOpenApp }) {
  const { personal } = portfolioData;

  return (
    <div className="p-8 flex flex-col items-center text-center select-none">
      {/* OS Logo / Icon */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-2xl mb-4 border border-white/20">
        <span className="text-4xl"></span>
      </div>

      <h1 className="text-xl font-bold text-white tracking-tight">macOS Cloud Edition</h1>
      <p className="text-xs text-white/50 mb-6 font-mono">Version 15.1 (Girindra Sonoma Build)</p>

      {/* Hardware Spec Card */}
      <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-xs space-y-2.5 text-left mb-6">
        <div className="flex justify-between items-center py-1 border-b border-white/5">
          <span className="text-white/50 flex items-center space-x-1.5">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Chip</span>
          </span>
          <span className="text-white font-medium">Apple M-Series / Cloud Engine (8 Cores)</span>
        </div>

        <div className="flex justify-between items-center py-1 border-b border-white/5">
          <span className="text-white/50 flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Architecture</span>
          </span>
          <span className="text-white font-medium">Docker, Kubernetes & Azure IoT</span>
        </div>

        <div className="flex justify-between items-center py-1 border-b border-white/5">
          <span className="text-white/50 flex items-center space-x-1.5">
            <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
            <span>Memory & Fleet</span>
          </span>
          <span className="text-white font-medium">400+ Enterprise Servers Supported</span>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-white/50 flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Production Uptime</span>
          </span>
          <span className="text-white font-medium">99.99% Enterprise Grade</span>
        </div>
      </div>

      {/* System Report Button */}
      <div className="flex space-x-3">
        <button
          onClick={() => onOpenApp('about')}
          className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/10 transition-colors"
        >
          More Info...
        </button>
        <button
          onClick={() => onOpenApp('projects')}
          className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
        >
          Explore System
        </button>
      </div>
    </div>
  );
}
