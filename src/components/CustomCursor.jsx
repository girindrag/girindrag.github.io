import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';

export default function CustomCursor() {
  const curRef = useRef(null);
  const lightRef = useRef(null);
  const badgeLabelRef = useRef(null);

  const [mode, setMode] = useState('dot'); // 'dot' | 'link' | 'view' | 'open'
  const [badgeText, setBadgeText] = useState('View');
  const [isVisible, setIsVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    // Only enable on devices with hover & fine pointer (mouse)
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(hover: none) or (pointer: coarse)').matches;
    if (isTouch) return;

    document.documentElement.classList.add('has-cur');

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let hasMoved = false;
    let animId;
    let lastTime = performance.now();

    const handlePointerMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;

      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        currentX = targetX;
        currentY = targetY;
        setIsVisible(true);
      }

      // Check what element is currently under the cursor
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (!target) {
        setMode('dot');
        return;
      }

      // Check for explicit custom cursor attributes
      const customCursorEl = target.closest('[data-cursor]');
      if (customCursorEl) {
        const customType = customCursorEl.getAttribute('data-cursor');
        const customLabel = customCursorEl.getAttribute('data-cursor-text') || 'Explore';
        setBadgeText(customLabel);
        setMode(customType || 'view');
        return;
      }

      // Check for project cards or showcase monitors
      const cardEl = target.closest('.project-card, [data-project-card]');
      if (cardEl) {
        setBadgeText('View');
        setMode('view');
        return;
      }

      // Check for interactive links and buttons
      const interactiveEl = target.closest(
        'a[href], button, summary, label[for], [role="button"], input[type="submit"], input[type="button"], .cursor-pointer'
      );
      if (interactiveEl) {
        setMode('link');
        return;
      }

      // Default dot state
      setMode('dot');
    };

    const handlePointerDown = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      setIsDown(true);
    };

    const handlePointerUp = () => {
      setIsDown(false);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
    };

    // RAF animation loop with exponential lerp physics from skhiladze.com
    const animate = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      // Exponential decay interpolation: smooth yet immediate response
      const k = 1 - Math.exp(-dt / 0.045);
      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      const transformStr = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`;

      if (curRef.current) {
        curRef.current.style.transform = transformStr;
      }
      if (lightRef.current) {
        lightRef.current.style.transform = transformStr;
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    document.addEventListener('mouseenter', handlePointerEnter);

    animId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove('has-cur');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('mouseenter', handlePointerEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* 1. Ambient Cursor Light Spotlight (skhiladze.com cur-light) */}
      <div
        ref={lightRef}
        className={`cur-light ${isVisible ? 'is-on' : ''}`}
        data-mode={mode}
        aria-hidden="true"
      />

      {/* 2. Precision Interactive Cursor (skhiladze.com cur) */}
      <div
        ref={curRef}
        className={`cur ${isVisible ? 'is-on' : ''} ${isDown ? 'is-down' : ''}`}
        data-mode={mode}
        aria-hidden="true"
      >
        {/* Core Glowing Dot */}
        <div className="cur__p" />

        {/* Magnetic Outer Ring (expands over links/buttons) */}
        <div className="cur__r" />

        {/* Dynamic Capsule Badge (expands over project cards/actions) */}
        <div className="cur__l">
          {mode === 'view' && <Eye className="w-3.5 h-3.5 text-[#0B0B0B]" />}
          {mode === 'open' && <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0B]" />}
          {mode === 'play' && <Play className="w-3.5 h-3.5 text-[#0B0B0B] fill-[#0B0B0B]" />}
          <span ref={badgeLabelRef} className="font-sans font-semibold text-[13px] tracking-wide">
            {badgeText}
          </span>
        </div>
      </div>
    </>
  );
}
