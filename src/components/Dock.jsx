import React, { useState } from 'react';
import { 
  FolderGit2, 
  Terminal, 
  Compass, 
  FileText, 
  Boxes, 
  Cpu, 
  Mail, 
  Info,
  Trash2 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Dock({ openWindows, onToggleWindow, onOpenApp }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const dockItems = [
    { id: 'finder', name: 'Finder', icon: FolderGit2, bg: 'from-blue-500 to-cyan-500', action: () => onOpenApp('projects') },
    { id: 'about', name: 'About Me', icon: Info, bg: 'from-sky-500 to-blue-600', action: () => onOpenApp('about') },
    { id: 'projects', name: 'Projects', icon: Boxes, bg: 'from-indigo-500 to-purple-600', action: () => onOpenApp('projects') },
    { id: 'skills', name: 'Skills & Stack', icon: Cpu, bg: 'from-emerald-500 to-teal-600', action: () => onOpenApp('skills') },
    { id: 'experience', name: 'Experience', icon: FileText, bg: 'from-amber-500 to-orange-600', action: () => onOpenApp('experience') },
    { id: 'terminal', name: 'Terminal', icon: Terminal, bg: 'from-zinc-700 to-zinc-900', action: () => onOpenApp('terminal') },
    { id: 'safari', name: 'SlumberJS & IoT', icon: Compass, bg: 'from-blue-600 to-indigo-700', action: () => onOpenApp('projects') },
    { id: 'contact', name: 'Mail', icon: Mail, bg: 'from-blue-400 to-blue-600', action: () => onOpenApp('contact') },
    { 
      id: 'github', 
      name: 'GitHub Profile', 
      icon: GithubIcon, 
      bg: 'from-neutral-800 to-neutral-950', 
      action: () => window.open('https://github.com/girindrag', '_blank', 'noopener,noreferrer') 
    },
    { 
      id: 'trash', 
      name: 'Trash', 
      icon: Trash2, 
      bg: 'from-zinc-500 to-zinc-700', 
      action: () => alert("Trash is empty! Clean like a freshly provisioned Debian 11 server. 🚀") 
    },
  ];

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end px-3 py-2 space-x-2 bg-white/10 dark:bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-mac-dock transition-all duration-200">
        {dockItems.map((item, idx) => {
          const Icon = item.icon;
          const isOpen = openWindows && openWindows[item.id]?.isOpen;
          
          // Magnification scale calculation
          let scale = 'scale-100';
          if (hoveredIdx !== null) {
            const distance = Math.abs(hoveredIdx - idx);
            if (distance === 0) scale = 'scale-125 -translate-y-2';
            else if (distance === 1) scale = 'scale-110 -translate-y-1';
          }

          return (
            <div 
              key={item.id} 
              className="relative flex flex-col items-center group"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Tooltip */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none px-2.5 py-1 text-[11px] font-medium tracking-wide text-white bg-zinc-900/90 backdrop-blur-md rounded-md shadow-lg border border-white/10 whitespace-nowrap z-50">
                {item.name}
              </div>

              {/* Dock Icon Button */}
              <button
                onClick={item.action}
                className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr ${item.bg} flex items-center justify-center text-white shadow-lg transition-transform duration-150 ease-out ${scale} active:scale-95`}
                aria-label={item.name}
              >
                <Icon className="w-6 h-6 drop-shadow-md" />
              </button>

              {/* Running App Dot */}
              <div className={`w-1 h-1 rounded-full mt-1 transition-opacity ${isOpen ? 'bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.8)]' : 'opacity-0'}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
