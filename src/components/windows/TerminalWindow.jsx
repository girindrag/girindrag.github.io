import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function TerminalWindow({ onOpenApp }) {
  const [history, setHistory] = useState([
    { text: 'Last login: ' + new Date().toLocaleDateString() + ' on ttys001', type: 'system' },
    { text: 'Type "help" to see available terminal commands.', type: 'info' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = inputVal.trim().toLowerCase();
    const newHistory = [...history, { text: `girindra@macbook ~ % ${inputVal}`, type: 'user' }];

    if (!cmd) {
      setHistory(newHistory);
      setInputVal('');
      return;
    }

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • help       - Show this command reference
  • bio        - Display Girindra's summary and background
  • skills     - List core technical competencies & infrastructure tools
  • projects   - Showcase production projects
  • exp        - Show professional career history (Harman, DXC)
  • contact    - Display email, phone, and social handles
  • uname -a   - Show operating system and kernel info
  • clear      - Clear terminal screen`
        });
        break;

      case 'bio':
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `[Girindra Mohan]
Role: Cloud / IoT Engineer & Team Lead
Experience: 8+ Years in System Administration, Docker, Linux, Ansible, Azure IoT
Location: Pune, India
Education: B.E. in Information Technology`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[Technical Stack & Proficiencies]
• Cloud & IoT: Azure IoT Hub, Camera Connections, Hardware Telemetry, Edge Devices
• DevOps: Docker, Kubernetes, Ansible Automation, CI/CD Pipelines, Terraform
• Operating Systems: Linux (Debian 11, RHEL, Ubuntu), HP-UX, Unix, Windows Server
• Scripting: Python, Shell / Bash, YAML, Git Version Control`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `[Featured Projects]
1. Edge IoT Fleet Automation (Ansible, Docker, Debian 11)
2. SBI Enterprise Data Center Infrastructure (400+ Nodes, Superdome, HP-UX)
3. Azure IoT Stream Telemetry Pipeline (K8s, CI/CD, Azure IoT)
4. Production Infrastructure as Code (Terraform, Azure, GitOps)`
        });
        break;

      case 'exp':
        newHistory.push({
          type: 'output',
          text: `[Career History]
• Connected Services Corp Wipro (formerly Harman) (2023 - Present): Team Lead, IoT & Container Infrastructure
• DXC Technology (2021 - 2023): System Administration, SBI 24/7 Data Center (400+ servers)`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `[Contact Details]
• Email: iamgirindra@gmail.com
• Phone: +91 9595066233
• LinkedIn: https://linkedin.com/in/girindrag
• GitHub: https://github.com/girindrag
• Location: Pune, India`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'uname -a':
        newHistory.push({
          type: 'output',
          text: `Darwin girindra-macbook.local 24.0.0 Darwin Kernel Version: xnu-10063.1.1: Cloud/IoT-Ready arm64`
        });
        break;

      case 'sudo':
      case 'sudo rm -rf /':
        newHistory.push({
          type: 'error',
          text: `Permission denied: As a seasoned System Administrator with 8+ years experience, Girindra protects production systems from destructive commands! 🛡️`
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `zsh: command not found: ${cmd}. Type "help" to view valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="h-full bg-black/90 p-4 font-mono text-xs text-green-400 overflow-y-auto select-text">
      <div className="space-y-1">
        {history.map((item, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">
            {item.type === 'system' && <span className="text-zinc-500">{item.text}</span>}
            {item.type === 'info' && <span className="text-cyan-400">{item.text}</span>}
            {item.type === 'user' && <span className="text-white font-semibold">{item.text}</span>}
            {item.type === 'output' && <span className="text-slate-200">{item.text}</span>}
            {item.type === 'error' && <span className="text-rose-400">{item.text}</span>}
          </div>
        ))}

        {/* Input prompt */}
        <div className="flex items-center space-x-2 pt-1">
          <span className="text-blue-400 font-semibold">girindra@macbook</span>
          <span className="text-white">~ %</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
            className="flex-1 bg-transparent text-green-400 focus:outline-none caret-green-400 font-mono"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
