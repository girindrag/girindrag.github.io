import React, { useState, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function AppleTerminalStage() {
  const [history, setHistory] = useState([
    { text: 'Apple Darwin Kernel Release 24.1.0 (arm64) — Cloud & IoT Engine', type: 'system' },
    { text: 'Tap a quick command below or type your query in the prompt:', type: 'info' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  const quickCommands = ['whoami', 'skills', 'projects', 'exp', 'contact', 'clear'];

  const runCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { text: `girindra@apple-pro ~ % ${cmdStr}`, type: 'user' }];

    if (!cmd) {
      setHistory(newHistory);
      return;
    }

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Command Index:
  • whoami   - Profile overview and engineering summary
  • skills   - Technical stack: Docker, Kubernetes, Ansible, Azure IoT
  • projects - Key production systems and frameworks
  • exp      - Career roles: Harman, DXC (SBI Data Center), Genex
  • contact  - Direct contact methods & links
  • clear    - Clear terminal screen`
        });
        break;

      case 'whoami':
      case 'bio':
        newHistory.push({
          type: 'output',
          text: `Girindra Mohan
Role: Cloud / IoT Engineer & Team Lead
Experience: 8+ Years Production Scale
Location: Pune, India
Certifications: Microsoft Certified Azure Administrator Associate`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `• Cloud & IoT: Azure IoT Hub, Edge Provisioning, Camera Telemetry
• DevOps: Docker, Kubernetes, Ansible, CI/CD, Terraform
• Enterprise OS: Debian 11, RHEL, HP-UX, Superdome Architecture
• Automation: Python, Bash Scripting, ASM Disks`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `1. Edge IoT Fleet Automation (Debian 11 & Docker)
2. State Bank of India 400+ Server Infrastructure (HP Blade & Superdome)
3. Azure IoT Stream Telemetry Pipeline (K8s & IoT Hub)
4. Production Infrastructure as Code (Terraform & GitOps)`
        });
        break;

      case 'exp':
        newHistory.push({
          type: 'output',
          text: `• Harman Connected Services (2023 - Present): Team Lead, IoT & Containers
• DXC Technology (2021 - 2023): System Administration, SBI 24/7 Data Center
• Genex Corporate Services (2020 - 2021): System Administrator, Azure IoT`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: iamgirindra@gmail.com
Phone: +91 9595066233
LinkedIn: https://linkedin.com/in/girindrag
GitHub: https://github.com/girindrag
Location: Pune, India`
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `zsh: command not found: ${cmd}. Type "help" or tap a chip above.`
        });
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-black/5 dark:border-white/10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-[#161617] text-xs text-[#0071e3] dark:text-[#2997ff] border border-black/5 dark:border-white/10 mb-3 shadow-sm">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>Interactive Developer Shell</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
          Explore via Command Line.
        </h2>
        <p className="text-xs sm:text-sm text-[#6e6e73] dark:text-[#86868b] mt-1">
          Test live CLI commands right in your browser or phone.
        </p>

        {/* Quick tap chips for mobile & desktop */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {quickCommands.map((c) => (
            <button
              key={c}
              onClick={() => runCommand(c)}
              className="px-3 py-1 text-xs font-mono bg-black/5 dark:bg-[#161617] hover:bg-black/10 dark:hover:bg-white/10 text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white rounded-lg border border-black/5 dark:border-white/10 transition-colors"
            >
              ${c}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Bezel */}
      <div className="apple-card overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 text-left">
        <div className="bg-[#f0f0f2] dark:bg-[#1e1e1f] px-4 py-2.5 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs text-[#6e6e73] dark:text-[#86868b] font-mono">girindra@macbook: ~ (zsh)</span>
          <div className="w-12" />
        </div>

        <div className="bg-[#0c0d0e] p-4 sm:p-6 font-mono text-xs sm:text-sm text-emerald-400 min-h-[280px] max-h-[420px] overflow-y-auto">
          <div className="space-y-1.5">
            {history.map((item, idx) => (
              <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                {item.type === 'system' && <span className="text-zinc-500">{item.text}</span>}
                {item.type === 'info' && <span className="text-cyan-400">{item.text}</span>}
                {item.type === 'user' && <span className="text-white font-semibold">{item.text}</span>}
                {item.type === 'output' && <span className="text-slate-200">{item.text}</span>}
                {item.type === 'error' && <span className="text-rose-400">{item.text}</span>}
              </div>
            ))}

            {/* Prompt */}
            <div className="flex items-center space-x-2 pt-1 text-xs sm:text-sm">
              <span className="text-[#2997ff] font-semibold">girindra@apple-pro</span>
              <span className="text-white font-semibold">~ %</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type command..."
                className="flex-1 bg-transparent text-emerald-400 focus:outline-none caret-emerald-400 font-mono text-xs sm:text-sm placeholder-zinc-700"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
