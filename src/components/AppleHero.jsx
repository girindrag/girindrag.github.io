import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ChevronRight, 
  Download, 
  Activity, 
  Server, 
  Wifi 
} from 'lucide-react';

export default function AppleHero() {
  const { personal, stats } = portfolioData;
  const [activeTab, setActiveTab] = useState('fleet');

  return (
    <section id="overview" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Apple Style Top Notification Ribbon */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#f5f5f7] dark:bg-[#1d1d1f] border border-black/5 dark:border-white/10 text-xs text-[#6e6e73] dark:text-[#a1a1a6] mb-8 hover:border-black/20 dark:hover:border-white/25 transition-all shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#1d1d1f] dark:text-white font-medium">Team Lead</span>
          <span>•</span>
          <span className="hidden sm:inline">Harman Connected Services</span>
          <a href="#experience" className="text-[#0071e3] dark:text-[#2997ff] flex items-center hover:underline">
            View Role <ChevronRight className="w-3 h-3 ml-0.5" />
          </a>
        </div>

        {/* Apple Signature Headline */}
        <div className="space-y-2 mb-6">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase">
            {personal.role}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] dark:text-white leading-[1.08]">
            {personal.name}.
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight apple-gradient-text leading-[1.1]">
            Titanium-strength infrastructure.
          </h2>
        </div>

        {/* Subhead text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#6e6e73] dark:text-[#86868b] leading-relaxed mb-8">
          8+ years engineering resilient cloud platforms, automated IoT device provisioning, and 24/7 mission-critical servers for global scale.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="./Girindra_Mohan_Resume.pdf"
            download="Girindra_Mohan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-semibold rounded-full shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-black/5 dark:bg-[#1d1d1f] hover:bg-black/10 dark:hover:bg-[#2d2d2f] text-[#1d1d1f] dark:text-white text-sm font-medium rounded-full border border-black/10 dark:border-white/10 transition-all duration-200 flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ChevronRight className="w-4 h-4 text-[#86868b]" />
          </a>
        </div>

        {/* Apple Style Hardware & Dashboard Stage Mockup */}
        <div className="relative mx-auto max-w-4xl bg-white dark:bg-[#161617] rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden text-left">
          {/* Bezel Top Bar */}
          <div className="bg-[#f2f2f5] dark:bg-[#1e1e1f] px-4 py-3 border-b border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-xs text-[#6e6e73] dark:text-[#86868b] font-mono hidden sm:inline">
                girindra-cloud-core • Debian 11.8 ARM64
              </span>
            </div>

            {/* Stage Selector Tabs */}
            <div className="flex items-center space-x-1 bg-black/5 dark:bg-black/40 p-0.5 rounded-lg border border-black/5 dark:border-white/5 text-xs">
              <button
                onClick={() => setActiveTab('fleet')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${
                  activeTab === 'fleet' ? 'bg-[#0071e3] text-white' : 'text-[#6e6e73] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white'
                }`}
              >
                IoT Fleet (Harman)
              </button>
              <button
                onClick={() => setActiveTab('sbi')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${
                  activeTab === 'sbi' ? 'bg-[#0071e3] text-white' : 'text-[#6e6e73] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white'
                }`}
              >
                Data Center (SBI)
              </button>
              <button
                onClick={() => setActiveTab('azure')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${
                  activeTab === 'azure' ? 'bg-[#0071e3] text-white' : 'text-[#6e6e73] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white'
                }`}
              >
                Azure IoT Cloud
              </button>
            </div>
          </div>

          {/* Interactive Screen Panel */}
          <div className="p-5 sm:p-7 bg-[#fbfbfd] dark:bg-[#161617]">
            {activeTab === 'fleet' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#0071e3] dark:text-[#2997ff]">
                      Harman Connected Services • Edge Fleet
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-[#1d1d1f] dark:text-white mt-1">
                      Debian 11 Hardened Docker Fleet &amp; IoT Provisioning
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono">
                    <Activity className="w-3.5 h-3.5" />
                    <span>FLEET OPERATIONAL</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Containers</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">Docker Engine</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Debian 11 Optimized</div>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Configuration</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">Ansible</div>
                    <div className="text-[10px] text-[#0071e3] dark:text-blue-400 mt-1">Automated Playbooks</div>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Telemetry</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">Health Monitor</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Preemptive Alerts</div>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Availability</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">99.99%</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Minimal Downtime</div>
                  </div>
                </div>

                <div className="bg-[#121214] text-slate-200 p-3.5 rounded-xl font-mono text-xs border border-black/10 dark:border-white/5">
                  <div className="text-zinc-500 mb-1">// Production Deploy Script</div>
                  <div className="text-blue-400">$ ansible-playbook -i production_hosts provision_edge_iot.yml</div>
                  <div className="text-emerald-400">PLAY [Configure Edge Debian 11 Containers] *********************</div>
                  <div className="text-slate-400">ok: [iot-edge-01] =&gt; docker container running, security baseline verified</div>
                </div>
              </div>
            )}

            {activeTab === 'sbi' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400">
                      DXC Technology • SBI-ITFO
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-[#1d1d1f] dark:text-white mt-1">
                      State Bank of India 400+ Server Infrastructure
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-mono">
                    <Server className="w-3.5 h-3.5" />
                    <span>24/7 OFFSHORE SUPPORT</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Architecture</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">HP Blade &amp; Superdome</div>
                    <div className="text-[10px] text-[#6e6e73] dark:text-[#86868b] mt-1">BL860/870/890</div>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Server Fleet</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">400+ Nodes</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Physical &amp; Virtual</div>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Storage Layer</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">ASM Disk Groups</div>
                    <div className="text-[10px] text-[#0071e3] dark:text-blue-400 mt-1">Storage Management</div>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Platform Growth</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">10x Scale</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Seamless Capacity</div>
                  </div>
                </div>

                <div className="bg-[#121214] text-slate-200 p-3.5 rounded-xl font-mono text-xs border border-black/10 dark:border-white/5">
                  <div className="text-zinc-500 mb-1">// Enterprise Unix Shell Automation</div>
                  <div className="text-amber-400">$ hpux-admin --audit-cluster --node sbi-superdome-04</div>
                  <div className="text-emerald-400">[PASS] RHEL 8.x / HP-UX kernel integrity: 100% compliant</div>
                </div>
              </div>
            )}

            {activeTab === 'azure' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-purple-600 dark:text-purple-400">
                      Cloud &amp; Computer Vision Pipeline
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-[#1d1d1f] dark:text-white mt-1">
                      Azure IoT Hub, Edge Streaming &amp; SlumberJS
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-mono">
                    <Wifi className="w-3.5 h-3.5" />
                    <span>AZURE CERTIFIED</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Cloud Provider</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">Microsoft Azure</div>
                    <div className="text-[10px] text-purple-600 dark:text-purple-400 mt-1">IoT Hub &amp; Edge</div>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Orchestration</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">Kubernetes (K8s)</div>
                    <div className="text-[10px] text-[#0071e3] dark:text-blue-400 mt-1">Container Clusters</div>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Hardware Feeds</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">Camera APIs</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Real-time Stream</div>
                  </div>
                  <div className="bg-white dark:bg-black/40 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                    <div className="text-xs text-[#6e6e73] dark:text-[#86868b]">Certification</div>
                    <div className="text-lg font-bold text-[#1d1d1f] dark:text-white mt-0.5">AZ-104</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Azure Administrator</div>
                  </div>
                </div>

                <div className="bg-[#121214] text-slate-200 p-3.5 rounded-xl font-mono text-xs border border-black/10 dark:border-white/5">
                  <div className="text-zinc-500 mb-1">// Azure IoT Device Telemetry Test</div>
                  <div className="text-purple-400">$ az iot hub device-identity show --device-id edge-cam-08</div>
                  <div className="text-emerald-400">[CONNECTED] Cloud ingestion rate: 45,000 events/sec via K8s ingress</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Apple Style Highlights Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {stats.map((s, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#161617] border border-black/5 dark:border-white/5 text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] dark:text-white">{s.value}</div>
              <div className="text-xs text-[#6e6e73] dark:text-[#86868b] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
