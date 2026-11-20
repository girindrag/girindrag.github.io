// Web Audio API Generative Ambient Soundscape & UI Micro-FX
// Inspired by Inacio Nakiti's ambient soundscapes (Drift & Pulse)

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentTrack = 'drift'; // 'drift' | 'pulse'
    this.masterGain = null;
    this.oscillators = [];
    this.lfo = null;
    this.pulseInterval = null;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();

    // Master volume control with gentle ceiling
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  play() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.stop();
    this.isPlaying = true;

    // Smooth fade in over 2 seconds
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 2.0);

    if (this.currentTrack === 'drift') {
      this.startDrift();
    } else {
      this.startPulse();
    }
  }

  stop() {
    if (!this.ctx) return;

    if (this.masterGain) {
      // Smooth fade out
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
    }

    setTimeout(() => {
      this.oscillators.forEach(({ osc, gain }) => {
        try {
          osc.stop();
          osc.disconnect();
          gain.disconnect();
        } catch (e) {}
      });
      this.oscillators = [];

      if (this.lfo) {
        try {
          this.lfo.stop();
          this.lfo.disconnect();
        } catch (e) {}
        this.lfo = null;
      }

      if (this.pulseInterval) {
        clearInterval(this.pulseInterval);
        this.pulseInterval = null;
      }
    }, 850);

    this.isPlaying = false;
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  setTrack(track) {
    this.currentTrack = track;
    if (this.isPlaying) {
      this.play();
    }
  }

  // "Drift" Track: Cinematic warm ambient drone with slow filter breathing
  startDrift() {
    // Frequencies: Root A1 (55Hz), E2 (82.4Hz), A2 (110Hz), C#3 (138.6Hz), E3 (164.8Hz)
    const freqs = [55, 82.4, 110, 138.6, 164.8];

    // Filter node for smooth cosmic warmth
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.5, this.ctx.currentTime);
    filter.connect(this.masterGain);

    // LFO for slow breathing cutoff frequency (0.15 Hz)
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime);
    lfoGain.gain.setValueAtTime(120, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();
    this.lfo = lfo;

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Alternate sine and warm triangle waveforms
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 0.8, this.ctx.currentTime);

      const level = idx === 0 ? 0.35 : 0.15 / (idx + 0.8);
      gain.gain.setValueAtTime(level, this.ctx.currentTime);

      osc.connect(gain);
      gain.connect(filter);
      osc.start();

      this.oscillators.push({ osc, gain });
    });
  }

  // "Pulse" Track: Minimalist rhythmic synthesizer pulse
  startPulse() {
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, this.ctx.currentTime);
    filter.connect(this.masterGain);

    const notes = [110, 130.8, 164.8, 196, 220]; // Pentatonic space scale
    let noteIndex = 0;

    const triggerPulse = () => {
      if (!this.isPlaying || !this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(notes[noteIndex % notes.length], this.ctx.currentTime);
      noteIndex++;

      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(filter);
      osc.start();
      osc.stop(this.ctx.currentTime + 1.3);
    };

    triggerPulse();
    this.pulseInterval = setInterval(triggerPulse, 900);
  }

  // Micro-interaction click sound for hovering cards or tapping buttons
  playClick() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.035);
    } catch (e) {}
  }
}

export const soundEngine = new AudioEngine();
