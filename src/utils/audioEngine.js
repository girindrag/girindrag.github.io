// Web Audio API Generative Ambient Soundscape & UI Audio Engine
// Engineered for crystal-clear playback on all devices (MacBook speakers, headphones, mobile)

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentTrack = 'drift'; // 'drift' | 'pulse'
    this.masterGain = null;
    this.oscillators = [];
    this.lfo = null;
    this.pulseInterval = null;
    this.filter = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      // Master volume with safe headroom
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn('AudioContext init error:', e);
    }
  }

  // Instant kill of all active sound nodes without delay
  clearActiveNodes() {
    if (this.pulseInterval) {
      clearInterval(this.pulseInterval);
      this.pulseInterval = null;
    }

    if (this.lfo) {
      try {
        this.lfo.stop();
        this.lfo.disconnect();
      } catch (e) {}
      this.lfo = null;
    }

    this.oscillators.forEach(({ osc, gain }) => {
      try {
        osc.stop();
        osc.disconnect();
        gain.disconnect();
      } catch (e) {}
    });
    this.oscillators = [];
  }

  async play() {
    this.init();
    if (!this.ctx) return false;

    try {
      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      this.clearActiveNodes();
      this.isPlaying = true;

      // Reset and fade in master gain smoothly
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.linearRampToValueAtTime(0.35, now + 0.3);

      // Play immediate warm confirmation chime so user instantly hears feedback
      this.playChime();

      if (this.currentTrack === 'drift') {
        this.startDrift();
      } else {
        this.startPulse();
      }

      return true;
    } catch (e) {
      console.error('Audio play error:', e);
      return false;
    }
  }

  stop() {
    if (!this.ctx || !this.masterGain) {
      this.isPlaying = false;
      return false;
    }

    const now = this.ctx.currentTime;
    try {
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.15);
    } catch (e) {}

    setTimeout(() => {
      this.clearActiveNodes();
    }, 160);

    this.isPlaying = false;
    return false;
  }

  toggle() {
    if (this.isPlaying) {
      return this.stop();
    } else {
      return this.play();
    }
  }

  setTrack(track) {
    this.currentTrack = track;
    if (this.isPlaying) {
      this.play();
    }
  }

  // Instant pleasant startup chime (Chord: A4 - C#5 - E5)
  playChime() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [440, 554.37, 659.25]; // A major triad

    notes.forEach((freq, idx) => {
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.6);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.65);
      } catch (e) {}
    });
  }

  // "Drift" Track: Cinematic warm ambient harmonic chord
  // Clear audible frequencies optimized for laptop and phone speakers (110Hz to 660Hz)
  startDrift() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Filter node with warm resonance
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(1.2, now);
    filter.connect(this.masterGain);
    this.filter = filter;

    // Slow breathing LFO on filter (0.15 Hz)
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(0.15, now);
    lfoGain.gain.setValueAtTime(350, now);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start(now);
    this.lfo = lfo;

    // Musical chord: A2 (110Hz), E3 (164.8Hz), A3 (220Hz), C#4 (277.2Hz), E4 (329.6Hz)
    const voices = [
      { freq: 110.0, type: 'triangle', gain: 0.25 },
      { freq: 164.8, type: 'sine', gain: 0.20 },
      { freq: 220.0, type: 'triangle', gain: 0.18 },
      { freq: 277.2, type: 'sine', gain: 0.15 },
      { freq: 329.6, type: 'sine', gain: 0.12 },
      { freq: 440.0, type: 'sine', gain: 0.08 },
    ];

    voices.forEach((v) => {
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = v.type;
        // Subtle micro-detuning for lush stereo-like chorus effect
        const detune = (Math.random() - 0.5) * 4;
        osc.frequency.setValueAtTime(v.freq + detune, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(v.gain, now + 0.8);

        osc.connect(gain);
        gain.connect(filter);
        osc.start(now);

        this.oscillators.push({ osc, gain });
      } catch (e) {}
    });
  }

  // "Pulse" Track: Minimalist warm rhythmic synth arpeggios
  startPulse() {
    if (!this.ctx || !this.masterGain) return;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    filter.connect(this.masterGain);

    // Warm pentatonic scale: A3 (220), C4 (261.6), D4 (293.7), E4 (329.6), G4 (392), A4 (440)
    const notes = [220, 261.6, 293.7, 329.6, 392, 440, 329.6, 261.6];
    let noteIdx = 0;

    const triggerPulse = () => {
      if (!this.isPlaying || !this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(notes[noteIdx % notes.length], now);
        noteIdx++;

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

        osc.connect(gain);
        gain.connect(filter);

        osc.start(now);
        osc.stop(now + 0.75);
      } catch (e) {}
    };

    triggerPulse();
    this.pulseInterval = setInterval(triggerPulse, 650);
  }

  // Micro-interaction UI click
  playClick() {
    this.init();
    if (!this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.masterGain || this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch (e) {}
  }
}

export const soundEngine = new AudioEngine();

// Expose globally for testing / verification
if (typeof window !== 'undefined') {
  window.__soundEngine = soundEngine;
}
