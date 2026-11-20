import React, { useState } from 'react';
import { Wifi, Bluetooth, Radio, Moon, Sun, Monitor, Volume2, Cloud, Server, Sparkles } from 'lucide-react';

export default function ControlCenter({ isOpen, onClose, theme, onToggleTheme }) {
  const [wifiActive, setWifiActive] = useState(true);
  const [bluetoothActive, setBluetoothActive] = useState(true);
  const [brightness, setBrightness] = useState(90);
  const [volume, setVolume] = useState(80);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="fixed top-9 right-3 z-50 w-80 mac-glass rounded-2xl shadow-2xl p-3 text-white border border-white/15 animate-in fade-in slide-in-from-top-2 duration-150 select-none">
        {/* Top Toggles Grid */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          {/* Network Block */}
          <div className="bg-white/10 rounded-xl p-2.5 flex flex-col justify-between">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setWifiActive(!wifiActive)}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${wifiActive ? 'bg-blue-500 text-white' : 'bg-white/20 text-white/60'}`}
              >
                <Wifi className="w-4 h-4" />
              </button>
              <div className="flex flex-col text-[11px] leading-tight">
                <span className="font-semibold">Wi-Fi</span>
                <span className="text-white/60 text-[10px]">{wifiActive ? 'Cloud-Edge' : 'Off'}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <button 
                onClick={() => setBluetoothActive(!bluetoothActive)}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${bluetoothActive ? 'bg-blue-500 text-white' : 'bg-white/20 text-white/60'}`}
              >
                <Bluetooth className="w-4 h-4" />
              </button>
              <div className="flex flex-col text-[11px] leading-tight">
                <span className="font-semibold">Bluetooth</span>
                <span className="text-white/60 text-[10px]">{bluetoothActive ? 'IoT Gateway' : 'Off'}</span>
              </div>
            </div>
          </div>

          {/* Quick Switches */}
          <div className="grid grid-rows-2 gap-2">
            {/* Theme Toggle */}
            <button 
              onClick={onToggleTheme}
              className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-2 flex items-center space-x-2.5 text-left"
            >
              <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
              <div className="text-[11px] leading-tight">
                <div className="font-semibold">Dark Mode</div>
                <div className="text-[10px] text-white/60">{theme === 'dark' ? 'Enabled' : 'Light'}</div>
              </div>
            </button>

            {/* Cloud Status */}
            <div className="bg-white/10 rounded-xl p-2 flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <Server className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-tight">
                <div className="font-semibold">Status</div>
                <div className="text-[10px] text-emerald-300 font-mono">100% Up</div>
              </div>
            </div>
          </div>
        </div>

        {/* Display Brightness Slider */}
        <div className="bg-white/10 rounded-xl p-2.5 mb-2">
          <div className="flex items-center justify-between text-[11px] font-semibold mb-1.5 text-white/90">
            <span className="flex items-center space-x-1.5">
              <Monitor className="w-3.5 h-3.5" />
              <span>Display Brightness</span>
            </span>
            <span className="text-[10px] text-white/60">{brightness}%</span>
          </div>
          <input 
            type="range" 
            min="20" 
            max="100" 
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
            className="w-full accent-blue-500 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Sound Volume Slider */}
        <div className="bg-white/10 rounded-xl p-2.5 mb-2">
          <div className="flex items-center justify-between text-[11px] font-semibold mb-1.5 text-white/90">
            <span className="flex items-center space-x-1.5">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Sound Volume</span>
            </span>
            <span className="text-[10px] text-white/60">{volume}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-full accent-blue-500 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* IoT Fleet Summary Pill */}
        <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 rounded-xl p-2.5 flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1 text-[11px]">
            <div className="font-semibold text-white">Harman Connected Services</div>
            <div className="text-[10px] text-blue-200">Team Lead • Pune, India</div>
          </div>
        </div>
      </div>
    </>
  );
}
