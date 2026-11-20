import React, { useState, useEffect, useRef } from 'react';
import { Search, Boxes, Cpu, FileText, User, Terminal, Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Spotlight({ isOpen, onClose, onOpenApp }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Flatten searchable items
  const items = [
    { type: 'app', id: 'about', title: 'About Girindra Mohan', desc: 'Summary, background and bio', icon: User },
    { type: 'app', id: 'projects', title: 'Projects & Work', desc: 'Edge IoT, SBI Data Center, Azure telemetry', icon: Boxes },
    { type: 'app', id: 'skills', title: 'Technical Skills & Architecture', desc: 'Docker, Linux, Ansible, Azure IoT, K8s', icon: Cpu },
    { type: 'app', id: 'experience', title: 'Work Experience Log', desc: 'Connected Services Corp Wipro (Harman), DXC Technology', icon: FileText },
    { type: 'app', id: 'terminal', title: 'Interactive macOS Terminal', desc: 'Run commands: help, bio, projects, contact', icon: Terminal },
    { type: 'app', id: 'contact', title: 'Contact & Hire', desc: 'Email: iamgirindra@gmail.com', icon: Mail },
    ...portfolioData.projects.map(p => ({
      type: 'project',
      id: 'projects',
      title: p.title,
      desc: p.description,
      icon: Boxes,
    })),
  ];

  const filtered = items.filter(i => 
    i.title.toLowerCase().includes(query.toLowerCase()) || 
    i.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-xl mac-glass rounded-2xl shadow-2xl overflow-hidden border border-white/20 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-white/10">
          <Search className="w-5 h-5 text-white/50 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Spotlight Search (e.g. Docker, Ansible, Projects, Contact...)"
            className="w-full bg-transparent text-white placeholder-white/40 text-sm focus:outline-none"
          />
          <kbd className="text-[10px] text-white/40 bg-white/10 px-2 py-0.5 rounded border border-white/10">ESC</kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-white/40 text-xs">
              No matching items found for "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onOpenApp(item.id);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-600 group transition-colors text-left"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/80 group-hover:text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-white">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-white/60 group-hover:text-white/80 line-clamp-1">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
