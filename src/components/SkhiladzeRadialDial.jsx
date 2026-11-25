import React, { useState, useEffect, useRef, useCallback } from 'react';
import { soundEngine } from '../utils/audioEngine';

const DISCIPLINES = [
  { id: 'devops', name: 'DEVOPS', desc: 'CI/CD Pipelines, Multi-Cloud Fleet & Zero-Downtime Releases' },
  { id: 'cloud', name: 'CLOUD', desc: 'AWS & Azure Enterprise Architectures, Hybrid Connectivity' },
  { id: 'k8s', name: 'KUBERNETES', desc: 'Container Orchestration, EKS/AKS & Microservices' },
  { id: 'ai-infra', name: 'AI INFRA', desc: 'GPU Clusters, Model Serving & High-Throughput Ingestion' },
  { id: 'security', name: 'SECURITY', desc: 'Zero-Trust, Hardened Linux Baselines & Policy-as-Code' },
  { id: 'systems', name: 'SYSTEMS', desc: 'High-Availability Mission-Critical Enterprise Platforms' },
  { id: 'automation', name: 'AUTOMATION', desc: 'Ansible, Bash Scripting & Infrastructure as Code' },
  { id: 'sre', name: 'SRE', desc: '99.99% SLA Delivery, Incident Response & Chaos Engineering' },
  { id: 'networking', name: 'NETWORKING', desc: 'VPC Peering, BGP, Ingress Controllers & Service Meshes' },
  { id: 'linux', name: 'LINUX', desc: 'Debian/RHEL/HP-UX Kernel Tuning & Performance Optimization' },
  { id: 'terraform', name: 'TERRAFORM', desc: 'Modular Declarative Cloud Infrastructure & State Management' },
  { id: 'monitoring', name: 'MONITORING', desc: 'Prometheus, Grafana, OpenTelemetry & Real-Time Alerts' },
];

const TOTAL_STATIONS = DISCIPLINES.length;
const TOTAL_TICKS = 72; // Circular dial ticks

export default function SkhiladzeRadialDial() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0); // in degrees
  const [activeStation, setActiveStation] = useState(0);
  const [isTuned, setIsTuned] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const activeStationRef = useRef(0);
  activeStationRef.current = activeStation;

  const lastTickIdxRef = useRef(0);
  const dragStartRef = useRef({ angle: 0, initialRotation: 0, lastX: 0, lastY: 0, velocity: 0 });
  const animFrameRef = useRef(null);
  const wheelSnapTimerRef = useRef(null);
  const rotationRef = useRef(0);
  rotationRef.current = rotation;

  // Calculate current station based on rotation (0 deg corresponds to top 12 o'clock)
  const getStationFromRotation = useCallback((deg) => {
    // Normalize to [0, 360)
    const norm = ((-deg % 360) + 360) % 360;
    const sectorSize = 360 / TOTAL_STATIONS;
    const idx = Math.round(norm / sectorSize) % TOTAL_STATIONS;
    return idx;
  }, []);

  // Play tick sounds when crossing dial tick marks
  const checkTickAudio = useCallback((deg) => {
    const tickStep = 360 / TOTAL_TICKS;
    const currentTickIdx = Math.floor((((deg % 360) + 360) % 360) / tickStep);
    if (currentTickIdx !== lastTickIdxRef.current) {
      lastTickIdxRef.current = currentTickIdx;
      soundEngine.playDialTick(1.0);
    }
  }, []);

  // Click on a specific discipline station to rotate dial to it
  const tuneToStation = (idx) => {
    const targetSector = (360 / TOTAL_STATIONS) * idx;
    const currentMod = ((-rotationRef.current % 360) + 360) % 360;
    let diff = targetSector - currentMod;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;

    const newRot = rotationRef.current - diff;
    soundEngine.playDialWhoosh(1.2);
    setRotation(newRot);
    setActiveStation(idx);
    setIsTuned(true);
    soundEngine.playDialDock();
  };

  // Center "CLICK TO TUNE IN" handler
  const handleTuneInClick = () => {
    soundEngine.playDialStrike();
    setIsTuned(true);
    // If audio engine is not already playing, toggle it on
    if (!soundEngine.isPlaying) {
      soundEngine.play();
    }
  };

  // Pointer Drag Handlers (Rotate dial by dragging with mouse/pointer)
  const handlePointerDown = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    dragStartRef.current = {
      angle,
      initialRotation: rotationRef.current,
      lastX: e.clientX,
      lastY: e.clientY,
      velocity: 0,
    };
    setIsDragging(true);
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const currentAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
      const angleDiff = currentAngle - dragStartRef.current.angle;
      const newRotation = dragStartRef.current.initialRotation + angleDiff;

      setRotation(newRotation);
      checkTickAudio(newRotation);

      const st = getStationFromRotation(newRotation);
      if (st !== activeStationRef.current) {
        setActiveStation(st);
      }
    };

    const handlePointerUp = () => {
      if (isDragging) {
        setIsDragging(false);
        // Snap to nearest continuous 30-deg station sector without 360-deg rewinds
        const sectorSize = 360 / TOTAL_STATIONS;
        const snappedDeg = Math.round(rotationRef.current / sectorSize) * sectorSize;
        const norm = ((-snappedDeg % 360) + 360) % 360;
        const nearestIdx = Math.round(norm / sectorSize) % TOTAL_STATIONS;

        setRotation(snappedDeg);
        setActiveStation(nearestIdx);
        soundEngine.playDialDock();
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, checkTickAudio, getStationFromRotation]);

  // Non-passive wheel listener: prevents default page scroll and auto-snaps on pause
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleNativeWheel = (e) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY) * 6;
      const newRot = rotationRef.current - delta;
      setRotation(newRot);
      checkTickAudio(newRot);
      const st = getStationFromRotation(newRot);
      if (st !== activeStationRef.current) {
        setActiveStation(st);
        soundEngine.playDialTick(1.2);
      }

      // Debounce snap to nearest station once wheel scrolling pauses
      if (wheelSnapTimerRef.current) clearTimeout(wheelSnapTimerRef.current);
      wheelSnapTimerRef.current = setTimeout(() => {
        const sectorSize = 360 / TOTAL_STATIONS;
        const snappedDeg = Math.round(rotationRef.current / sectorSize) * sectorSize;
        const norm = ((-snappedDeg % 360) + 360) % 360;
        const nearestIdx = Math.round(norm / sectorSize) % TOTAL_STATIONS;

        setRotation(snappedDeg);
        setActiveStation(nearestIdx);
        soundEngine.playDialDock();
      }, 200);
    };

    el.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleNativeWheel);
      if (wheelSnapTimerRef.current) clearTimeout(wheelSnapTimerRef.current);
    };
  }, [checkTickAudio, getStationFromRotation]);

  const curDiscipline = DISCIPLINES[activeStation];

  return (
    <div className="relative w-full py-12 sm:py-20 flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Spiderweb Background Radial Lines */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] rounded-full border border-white/[0.04] opacity-50" />
        <div className="w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] rounded-full border border-white/[0.05] opacity-60" />
        {/* Subtle radial spokes radiating outwards */}
        {DISCIPLINES.map((_, i) => {
          const spokeAngle = (360 / TOTAL_STATIONS) * i;
          return (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent origin-center"
              style={{ transform: `rotate(${spokeAngle}deg)` }}
            />
          );
        })}
      </div>

      {/* Main Dial Interactive Wheel Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        className={`relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] lg:w-[620px] lg:h-[620px] rounded-full flex items-center justify-center touch-none cursor-grab active:cursor-grabbing transition-transform duration-75`}
      >
        {/* Outer Circular Ring with Radial Ticks */}
        <div
          className="absolute inset-0 rounded-full border border-white/[0.12] transition-transform duration-300 ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Circular Dial Tick Marks */}
          {Array.from({ length: TOTAL_TICKS }).map((_, idx) => {
            const tickAngle = (360 / TOTAL_TICKS) * idx;
            const isMajor = idx % (TOTAL_TICKS / TOTAL_STATIONS) === 0;
            return (
              <div
                key={idx}
                className="absolute left-1/2 top-0 origin-bottom flex flex-col items-center"
                style={{
                  height: '50%',
                  transform: `translateX(-50%) rotate(${tickAngle}deg)`,
                }}
              >
                <span
                  className={`block rounded-full ${
                    isMajor
                      ? 'w-[2px] h-[12px] sm:h-[16px] bg-white/[0.6]'
                      : 'w-[1px] h-[6px] sm:h-[8px] bg-white/[0.2]'
                  }`}
                />
              </div>
            );
          })}

          {/* Radial Discipline Labels along the Circumference */}
          {DISCIPLINES.map((d, idx) => {
            const angle = (360 / TOTAL_STATIONS) * idx;
            const isCurrent = activeStation === idx;
            return (
              <div
                key={d.id}
                onClick={(e) => {
                  e.stopPropagation();
                  tuneToStation(idx);
                }}
                className="absolute left-1/2 top-0 origin-bottom flex flex-col items-center cursor-pointer pointer-events-auto"
                style={{
                  height: '50%',
                  transform: `translateX(-50%) rotate(${angle}deg)`,
                }}
              >
                {/* Station Label positioned outside the dial border */}
                <div
                  className={`-translate-y-8 sm:-translate-y-10 font-mono text-[10px] sm:text-[12px] font-bold tracking-widest uppercase transition-all duration-300 hover:scale-110 ${
                    isCurrent
                      ? 'text-[#F34213] drop-shadow-[0_0_12px_rgba(243,66,19,0.8)] scale-110'
                      : 'text-[#8E8B83] hover:text-[#E7E1D7]'
                  }`}
                  style={{
                    // Rotate text to face inward towards the center
                    transform: 'rotate(0deg)',
                  }}
                >
                  {d.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Static Dial Top 12-o'clock Needle / Indicator Bead */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 flex flex-col items-center pointer-events-none z-20">
          {/* Glowing Orange Needle Bead */}
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#F34213] shadow-[0_0_16px_rgba(243,66,19,0.9)] border-2 border-[#0B0B0B] animate-pulse" />
          <div className="w-0.5 h-3 bg-[#F34213]" />

          {/* "CLICK TO TUNE IN" arched badge below the top needle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleTuneInClick();
            }}
            className="mt-3 px-3 py-1 rounded-full bg-[#18181A]/90 hover:bg-[#F34213] hover:text-[#0B0B0B] border border-[#F34213]/40 text-[#F34213] font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(243,66,19,0.25)] pointer-events-auto active:scale-95"
            title="Click to Tune In & Activate Audio"
          >
            CLICK TO TUNE IN
          </button>
        </div>

        {/* Center Namepiece & Station Status (Matching Screenshot) */}
        <div
          onClick={handleTuneInClick}
          className="relative z-10 flex flex-col items-center text-center cursor-pointer p-4 group"
        >
          {/* Massive Name: Girindra Mohan */}
          <h1 className="font-display font-extrabold text-3xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#121214] dark:text-[#E7E1D7] group-hover:text-[#F34213] transition-colors duration-300">
            Girindra Mohan
          </h1>

          {/* Skhiladze-style Pill readout under the name */}
          <div className="mt-3 sm:mt-4 flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] backdrop-blur-xl shadow-lg transition-all">
            <span className="w-2 h-2 rounded-full bg-[#F34213] animate-ping" />
            <span className="font-mono text-xs sm:text-sm text-[#E7E1D7] tracking-wider font-semibold">
              {curDiscipline.name}
            </span>
            <span className="text-white/[0.3]">•</span>
            <span className="font-mono text-[11px] sm:text-xs text-[#8E8B83] hidden sm:inline">
              Station 0{activeStation + 1}
            </span>
          </div>

          {/* Active Discipline Description preview */}
          <p className="mt-3 max-w-sm sm:max-w-md text-xs sm:text-sm text-[#8E8B83] font-sans leading-relaxed transition-all">
            {curDiscipline.desc}
          </p>
        </div>
      </div>

      {/* Quick Station Navigation Dots at the bottom */}
      <div className="mt-8 flex items-center space-x-2 z-10">
        {DISCIPLINES.map((d, i) => (
          <button
            key={d.id}
            onClick={() => tuneToStation(i)}
            className={`transition-all duration-300 rounded-full ${
              activeStation === i
                ? 'w-6 h-2 bg-[#F34213] shadow-[0_0_10px_rgba(243,66,19,0.8)]'
                : 'w-2 h-2 bg-white/[0.2] hover:bg-white/[0.5]'
            }`}
            title={`Tune to ${d.name}`}
            aria-label={`Tune to ${d.name}`}
          />
        ))}
      </div>
    </div>
  );
}
