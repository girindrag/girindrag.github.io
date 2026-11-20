import React, { useEffect } from 'react';
import { X, ArrowUpRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function NakitiFlyoutMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const menuItems = [
    { num: '01', title: 'Overview & Philosophy', href: '#overview' },
    { num: '02', title: 'About & Background', href: '#about' },
    { num: '03', title: 'What I Do (Services)', href: '#services' },
    { num: '04', title: 'Selected Systems (Work)', href: '#work' },
    { num: '05', title: 'Career Scale & Timeline', href: '#experience' },
    { num: '06', title: 'Ask Girindra’s AI', href: '#ai' },
    { num: '07', title: 'Get In Touch', href: '#contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#070709]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 animate-in fade-in duration-200">
      {/* Top Bar with brand & Close Button */}
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#8a8a93]">
          <span className="w-2 h-2 rounded-full bg-[#5865f2]" />
          <span>{portfolioData.personal.name}</span>
          <span className="text-white/20">—</span>
          <span>Navigation Index</span>
        </div>

        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.2] border border-white/[0.1] text-white flex items-center justify-center transition-all duration-150 active:scale-90"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Giant Numbered Navigation List */}
      <nav className="max-w-4xl w-full mx-auto my-auto py-8">
        <div className="space-y-4 sm:space-y-5">
          {menuItems.map((item) => (
            <a
              key={item.num}
              href={item.href}
              onClick={onClose}
              className="flex items-baseline space-x-4 sm:space-x-6 group text-left"
            >
              <span className="font-mono text-sm sm:text-base text-[#5865f2] group-hover:text-white transition-colors">
                {item.num}
              </span>
              <span className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white/90 group-hover:text-[#5865f2] group-hover:translate-x-3 transition-all duration-200">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Footer Info Row */}
      <div className="max-w-7xl w-full mx-auto pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#8a8a93]">
        <div className="flex items-center space-x-5">
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center space-x-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center space-x-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="./Girindra_Mohan_Resume.pdf"
            download
            className="hover:text-white flex items-center space-x-1 text-[#5865f2]"
          >
            <Download className="w-3 h-3" />
            <span>Download Resume</span>
          </a>
        </div>

        <div>
          <span>Available for Team Lead &amp; Cloud/IoT Roles</span>
        </div>
      </div>
    </div>
  );
}
