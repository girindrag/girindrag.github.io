import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Search, Sliders, Volume2, Moon, Sun, Apple } from 'lucide-react';

export default function MenuBar({ 
  activeAppTitle, 
  onOpenApp, 
  onToggleControlCenter, 
  onToggleSpotlight,
  theme,
  onToggleTheme 
}) {
  const [timeStr, setTimeStr] = useState('');
  const [appleMenuOpen, setAppleMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      };
      setTimeStr(now.toLocaleString('en-US', options).replace(/,/g, ''));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative z-50 h-7 w-full bg-black/40 backdrop-blur-2xl text-white/90 text-[13px] font-medium flex items-center justify-between px-3 border-b border-white/10 select-none">
      {/* Left items: Apple logo & App menus */}
      <div className="flex items-center space-x-4">
        {/* Apple Menu */}
        <div className="relative">
          <button 
            onClick={() => setAppleMenuOpen(!appleMenuOpen)}
            className="hover:opacity-80 transition-opacity flex items-center pt-0.5"
            aria-label="Apple menu"
          >
            <span className="text-[15px] font-sans"></span>
          </button>

          {appleMenuOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setAppleMenuOpen(false)}
              />
              <div className="absolute top-7 left-0 z-50 w-56 mac-glass rounded-lg shadow-2xl py-1 text-slate-200 text-xs animate-in fade-in zoom-in-95 duration-100">
                <button 
                  onClick={() => { onOpenApp('about-mac'); setAppleMenuOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  About This Mac
                </button>
                <div className="h-px bg-white/10 my-1" />
                <button 
                  onClick={() => { onOpenApp('about'); setAppleMenuOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  System Settings...
                </button>
                <button 
                  onClick={() => { onOpenApp('projects'); setAppleMenuOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  App Store...
                </button>
                <div className="h-px bg-white/10 my-1" />
                <button 
                  onClick={() => { onOpenApp('terminal'); setAppleMenuOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Terminal (CLI)...
                </button>
                <div className="h-px bg-white/10 my-1" />
                <button 
                  onClick={() => { window.location.reload(); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Restart...
                </button>
              </div>
            </>
          )}
        </div>

        {/* Active Application Title */}
        <span className="font-semibold text-white tracking-wide">
          {activeAppTitle || 'Girindra Mohan'}
        </span>

        {/* Menu items */}
        <nav className="hidden sm:flex items-center space-x-3 text-white/80">
          <button onClick={() => onOpenApp('projects')} className="hover:text-white transition-colors">Portfolio</button>
          <button onClick={() => onOpenApp('skills')} className="hover:text-white transition-colors">Skills</button>
          <button onClick={() => onOpenApp('experience')} className="hover:text-white transition-colors">Experience</button>
          <button onClick={() => onOpenApp('contact')} className="hover:text-white transition-colors">Contact</button>
          <button onClick={() => onOpenApp('terminal')} className="hover:text-white transition-colors">Terminal</button>
        </nav>
      </div>

      {/* Right items: Controls, Wi-Fi, Battery, Clock */}
      <div className="flex items-center space-x-3.5 text-white/85 text-xs">
        <button 
          onClick={onToggleTheme}
          title="Toggle Wallpaper Scheme"
          className="hover:text-white transition-colors p-1 rounded hover:bg-white/10"
        >
          {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-indigo-300" /> : <Sun className="w-3.5 h-3.5 text-amber-300" />}
        </button>

        <button 
          onClick={onToggleSpotlight}
          title="Spotlight Search (Cmd+K)" 
          className="hover:text-white transition-colors p-1 rounded hover:bg-white/10 flex items-center space-x-1"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden md:inline text-[10px] text-white/60 bg-white/10 px-1 rounded">⌘K</span>
        </button>

        <button 
          onClick={onToggleControlCenter}
          title="Control Center" 
          className="hover:text-white transition-colors p-1 rounded hover:bg-white/10"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center space-x-1" title="Wi-Fi Connected: High Speed Edge">
          <Wifi className="w-3.5 h-3.5" />
        </div>

        <div className="flex items-center space-x-1" title="Battery: 100% Fully Charged">
          <Battery className="w-4 h-4 text-emerald-400" />
          <span className="text-[11px] hidden sm:inline">100%</span>
        </div>

        <span className="font-medium tracking-tight text-white/95 pl-1">
          {timeStr || 'Thu Nov 20 7:30 PM'}
        </span>
      </div>
    </header>
  );
}
