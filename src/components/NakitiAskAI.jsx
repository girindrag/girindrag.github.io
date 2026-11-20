import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function NakitiAskAI() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hi! I'm Girindra's interactive AI assistant. Ask me anything about his 8+ years experience, Docker & IoT setup at Harman, 400+ servers at State Bank of India, or tech stack.",
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    'What does Girindra do at Harman?',
    'Tell me about the SBI Data Center role.',
    'What is his core tech stack?',
    'Is he open to new roles?',
  ];

  const handleSend = (query) => {
    const q = (query || inputVal).trim();
    if (!q) return;

    const userMsg = { sender: 'user', text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const lower = q.toLowerCase();

      if (lower.includes('harman') || lower.includes('iot') || lower.includes('debian')) {
        reply =
          'At Harman Connected Services (Team Lead, 2023–Present), Girindra handles daily IoT device configuration using Docker, Linux, and Ansible. He installs and hardens Debian 11 for Docker containers, authoring automated deployment scripts and monitoring telemetry to ensure 99.99% uptime.';
      } else if (lower.includes('sbi') || lower.includes('bank') || lower.includes('dxc') || lower.includes('server')) {
        reply =
          'At DXC Technology (2021–2023), Girindra provided 24/7 offshore infrastructure support for the State Bank of India Data Center (SBI-ITFO), managing 400+ physical and virtual servers on HP Blade (BL860/870/890) and Superdome architecture, scaling capacity 10x with HP-UX and RHEL.';
      } else if (lower.includes('stack') || lower.includes('skill') || lower.includes('docker') || lower.includes('tech')) {
        reply =
          'Girindra’s stack spans: Cloud & IoT (Azure IoT Hub, Edge Provisioning), DevOps (Docker, Kubernetes, Ansible, Terraform), Enterprise OS (Debian 11, RHEL, HP-UX Unix), and Scripting (Python, Shell / Bash). He is Microsoft Certified: Azure Administrator (AZ-104).';
      } else if (lower.includes('role') || lower.includes('hire') || lower.includes('available') || lower.includes('contact')) {
        reply =
          'Yes! Girindra is actively taking on new leadership, Cloud/DevOps, and IoT architecture opportunities. You can email him directly at iamgirindra@gmail.com or call +91 9595066233.';
      } else {
        reply = `Girindra Mohan is an experienced Team Lead with 8+ years of comprehensive expertise in system administration, Docker, Linux, Ansible, and Azure IoT. He holds a B.E. in Information Technology from Pune. Feel free to download his resume or email iamgirindra@gmail.com!`;
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section id="ai" className="py-24 px-5 sm:px-8 max-w-4xl mx-auto border-t border-white/[0.08] relative z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#5865f2] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Assistant • Gemini-Trained Persona</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ask Girindra’s AI.
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#8a8a93] mt-2">
          Ask any question about his career, infrastructure methodologies, or availability.
        </p>

        {/* Prompt chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {samplePrompts.map((p) => (
            <button
              key={p}
              onClick={() => handleSend(p)}
              className="px-3.5 py-1.5 text-xs font-mono bg-white/[0.03] hover:bg-[#5865f2]/10 hover:border-[#5865f2]/40 text-[#a1a1a6] hover:text-white rounded-full border border-white/[0.08] transition-all"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Box */}
      <div className="rounded-2xl bg-[#0f0f13] border border-white/[0.08] shadow-2xl overflow-hidden flex flex-col h-[460px]">
        {/* Chat Header */}
        <div className="px-5 py-3.5 bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-full bg-[#5865f2] flex items-center justify-center text-white">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Girindra Assistant</div>
              <div className="text-[10px] text-emerald-400 font-mono">Live • Ready</div>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#8a8a93]">Gemini Knowledge Base</span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 font-sans text-xs sm:text-sm">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-2.5 ${
                m.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.sender === 'ai' && (
                <div className="w-6 h-6 rounded-full bg-[#5865f2]/20 text-[#5865f2] flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#5865f2] text-white rounded-tr-none'
                    : 'bg-white/[0.05] text-[#d2d2d7] border border-white/[0.08] rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8a8a93]">
              <Bot className="w-3.5 h-3.5 text-[#5865f2] animate-spin" />
              <span>Synthesizing response...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white/[0.02] border-t border-white/[0.08]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question about Girindra's experience..."
              className="flex-1 bg-white/[0.04] text-white text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-white/[0.08] focus:outline-none focus:border-[#5865f2] font-sans"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-[#5865f2] hover:bg-[#6c72ff] text-white transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
