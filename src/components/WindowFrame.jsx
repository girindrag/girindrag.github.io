import React, { useState } from 'react';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';

export default function WindowFrame({ 
  id, 
  title, 
  icon: Icon,
  isOpen, 
  isMinimized, 
  zIndex,
  onClose, 
  onMinimize, 
  onFocus, 
  children,
  defaultWidth = 'max-w-3xl',
  defaultHeight = 'h-[520px]'
}) {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen || isMinimized) return null;

  return (
    <div
      onClick={onFocus}
      style={{ zIndex }}
      className={`fixed transition-all duration-150 ease-out flex flex-col mac-glass rounded-xl shadow-mac-window overflow-hidden ${
        isMaximized 
          ? 'top-8 left-2 right-2 bottom-20 rounded-lg' 
          : `top-14 sm:top-20 left-1/2 -translate-x-1/2 w-[95vw] ${defaultWidth} ${defaultHeight}`
      }`}
    >
      {/* Window Title Bar */}
      <div 
        className="window-header h-10 px-4 bg-white/5 border-b border-white/10 flex items-center justify-between cursor-grab active:cursor-grabbing select-none"
        onDoubleClick={() => setIsMaximized(!isMaximized)}
      >
        {/* macOS Traffic Lights */}
        <div className="flex items-center space-x-2 w-20">
          <button
            onClick={(e) => { e.stopPropagation(); onClose(id); }}
            className="traffic-btn bg-[#FF5F56] border border-[#E0443E] hover:opacity-100"
            title="Close"
          >
            <X className="w-2.5 h-2.5 text-[#4D0000]" strokeWidth={3} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
            className="traffic-btn bg-[#FFBD2E] border border-[#DEA123] hover:opacity-100"
            title="Minimize"
          >
            <Minus className="w-2.5 h-2.5 text-[#5D4200]" strokeWidth={3} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
            className="traffic-btn bg-[#27C93F] border border-[#1AAB29] hover:opacity-100"
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? (
              <Minimize2 className="w-2 h-2 text-[#004D11]" strokeWidth={3} />
            ) : (
              <Maximize2 className="w-2 h-2 text-[#004D11]" strokeWidth={3} />
            )}
          </button>
        </div>

        {/* Title & Icon */}
        <div className="flex items-center space-x-2 text-xs font-medium text-white/80">
          {Icon && <Icon className="w-3.5 h-3.5 text-blue-400" />}
          <span>{title}</span>
        </div>

        {/* Right balance spacer */}
        <div className="w-20" />
      </div>

      {/* Window Body Content */}
      <div className="flex-1 overflow-y-auto bg-black/40 text-slate-100 relative">
        {children}
      </div>
    </div>
  );
}
