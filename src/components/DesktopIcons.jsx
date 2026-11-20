import React from 'react';
import { Folder, Terminal, FileText, User, Cpu, Mail, FileDown } from 'lucide-react';

export default function DesktopIcons({ onOpenApp }) {
  const icons = [
    { id: 'about', label: 'About Me.app', icon: User, color: 'text-sky-400', action: () => onOpenApp('about') },
    { id: 'projects', label: 'Projects & Work', icon: Folder, color: 'text-blue-400', action: () => onOpenApp('projects') },
    { id: 'skills', label: 'Tech Stack.sys', icon: Cpu, color: 'text-emerald-400', action: () => onOpenApp('skills') },
    { id: 'experience', label: 'Experience.log', icon: FileText, color: 'text-amber-400', action: () => onOpenApp('experience') },
    { id: 'terminal', label: 'Terminal.sh', icon: Terminal, color: 'text-neutral-300', action: () => onOpenApp('terminal') },
    { 
      id: 'resume', 
      label: 'Resume.pdf', 
      icon: FileDown, 
      color: 'text-rose-400', 
      action: () => window.open('./Girindra_Mohan_Resume.pdf', '_blank') 
    },
    { id: 'contact', label: 'Contact.msg', icon: Mail, color: 'text-indigo-400', action: () => onOpenApp('contact') },
  ];

  return (
    <div className="absolute top-12 left-4 z-10 flex flex-col space-y-3">
      {icons.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={item.action}
            className="flex flex-col items-center justify-center w-24 p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all text-center group select-none"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-black/20 backdrop-blur-md group-hover:scale-105 transition-transform shadow-md border border-white/10">
              <Icon className={`w-7 h-7 ${item.color} drop-shadow`} />
            </div>
            <span className="mt-1 text-[11px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] px-1 py-0.5 rounded group-hover:bg-blue-600/60 line-clamp-1">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
