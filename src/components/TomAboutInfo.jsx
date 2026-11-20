import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download } from 'lucide-react';

export default function TomAboutInfo() {
  const { personal, education, certifications } = portfolioData;
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const metaRows = [
    { label: 'SERVICES', value: 'Cloud & IoT Architecture, DevOps, Linux Engineering' },
    { label: 'EXPERIENCE', value: '8+ Years in Production Environments' },
    { label: 'TIMEZONE', value: `PUN / IST (${timeStr || '20:42:00'})` },
    { label: 'AVAILABILITY', value: 'Taking on Senior / Team Lead Roles from Q4' },
    { label: 'ENTERPRISE FLEET', value: '400+ Physical/Virtual Nodes (State Bank of India)' },
    { label: 'CERTIFICATIONS', value: 'Microsoft Certified: Azure Administrator (AZ-104)' },
    { label: 'CHAI CONSUMED', value: '2,450+ Cups & Counting ☕' },
  ];

  return (
    <section id="about" className="py-24 sm:py-36 px-5 sm:px-12 max-w-7xl mx-auto border-t border-[#E7E1D7]/[0.1] relative z-10">
      {/* Eyebrow */}
      <div className="text-xs font-mono tracking-widest text-[#F34213] uppercase mb-12">
        AB<span className="playfair-o">O</span>UT / INF<span className="playfair-o">O</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Editorial Manifesto (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#E7E1D7] leading-[1.05]">
            I build systems that withstand extreme pressure —{' '}
            <span className="text-[#F34213]">
              unf<span className="playfair-o">o</span>rgettable reliability.
            </span>
          </h2>

          <div className="space-y-6 text-[#E7E1D7]/80 font-sans text-base sm:text-lg leading-relaxed">
            <p>
              I believe great infrastructure is like great architecture: invisible when it works, indestructible under stress. Over the last 8+ years, I've led engineering teams to automate complex Linux environments, orchestrate Docker containers on hardened Debian 11, and manage mission-critical clusters.
            </p>
            <p className="text-[#8E8B83]">
              From running 24/7 offshore operations for India’s largest banking datacenter (SBI-ITFO) to architecting edge camera telemetry and Azure IoT gateways at Harman, my mission is simple: eliminate downtime, automate everything repetitive, and build systems that scale gracefully.
            </p>
          </div>

          {/* Tom de Koning Style Vermillion Pill Button */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-8 py-4 rounded-full bg-[#F34213] hover:bg-white text-[#0B0B0B] font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2 shadow-[0_0_35px_rgba(243,66,19,0.35)]"
            >
              <span>
                VIEW W<span className="playfair-o">O</span>RK
              </span>
              <span className="text-base">→</span>
            </a>

            <a
              href="./Girindra_Mohan_Resume.pdf"
              download
              className="px-8 py-4 rounded-full tom-glass hover:bg-white/[0.12] text-[#E7E1D7] font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center space-x-2"
            >
              <span>
                RES<span className="playfair-o">U</span>ME (PDF)
              </span>
              <Download className="w-3.5 h-3.5 text-[#F34213]" />
            </a>
          </div>
        </div>

        {/* Right Column: Metadata Table with 1px Dividers (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="divide-y divide-[#E7E1D7]/[0.12] border-y border-[#E7E1D7]/[0.12]">
            {metaRows.map((row) => (
              <div key={row.label} className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#8E8B83] shrink-0">
                  {row.label}
                </span>
                <span className="font-sans text-sm sm:text-right font-medium text-[#E7E1D7]">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 text-xs font-mono tracking-widest uppercase text-[#8E8B83]">
            B.E. IN INF<span className="playfair-o">O</span>RMATI<span className="playfair-o">O</span>N TECHN<span className="playfair-o">O</span>L<span className="playfair-o">O</span>GY • PUNE
          </div>
        </div>
      </div>
    </section>
  );
}
