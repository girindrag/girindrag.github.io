import React from 'react';
import { Layers, Shield, Cpu, Terminal, ArrowUpRight } from 'lucide-react';

export default function NakitiServicesCream() {
  const services = [
    {
      num: '01',
      title: 'Edge IoT & Hardened Debian Containers',
      subtitle: 'Harman Connected Services production model',
      desc: 'Architecting zero-touch edge device provisioning using Debian 11, Docker containers, and automated Ansible deployment playbooks with proactive health monitoring.',
      tags: ['Docker', 'Debian 11', 'Ansible', 'Edge Hardware', 'Telemetry'],
    },
    {
      num: '02',
      title: 'Enterprise Server Fleet Management',
      subtitle: 'State Bank of India Data Center (SBI-ITFO)',
      desc: '24/7 offshore infrastructure management across 400+ physical and virtual enterprise nodes on HP Blade (BL860/870/890) and Superdome architecture under 10x scale.',
      tags: ['HP-UX', 'RHEL', 'Superdome', 'ASM Disks', '24/7 High-Avail'],
    },
    {
      num: '03',
      title: 'Azure Cloud & Computer Vision Ingestion',
      subtitle: 'Genex & SlumberJS Client Location',
      desc: 'Connecting distributed camera streaming feeds and edge sensors into Azure IoT Hub with container orchestration on Kubernetes and strict security protocols.',
      tags: ['Azure IoT Hub', 'Kubernetes (K8s)', 'Camera APIs', 'AZ-104'],
    },
    {
      num: '04',
      title: 'Infrastructure as Code & CI/CD Automation',
      subtitle: 'Self-healing, reproducible environments',
      desc: 'Authoring production Terraform scripts, Python/Bash system automations, and resilient CI/CD delivery pipelines that preempt regressions and eliminate manual toil.',
      tags: ['Terraform', 'Python', 'Shell / Bash', 'GitOps', 'CI/CD'],
    },
  ];

  return (
    <section id="services" className="bg-[#f5f2eb] text-[#121214] py-24 px-5 sm:px-8 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-black/[0.1] mb-14">
          <div>
            <span className="font-mono text-xs text-[#5865f2] uppercase tracking-wider font-semibold">
              02 · What I Do
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#121214] mt-2">
              Capabilities &amp; Core Disciplines.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#66666e] max-w-md mt-4 sm:mt-0 leading-relaxed">
            Delivering technical leadership, resilient operating system hardening, and scalable cloud platforms that withstand enterprise load.
          </p>
        </div>

        {/* 2x2 Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/[0.1] border border-black/[0.1] rounded-2xl overflow-hidden bg-[#faf8f4]">
          {services.map((s, idx) => (
            <div
              key={s.num}
              className={`p-8 sm:p-12 flex flex-col justify-between hover:bg-white transition-colors duration-200 group ${
                idx >= 2 ? 'border-t border-black/[0.1]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm font-semibold text-[#5865f2]">
                    /{s.num}
                  </span>
                  <span className="font-mono text-xs text-[#66666e] group-hover:text-black transition-colors">
                    {s.subtitle}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121214] tracking-tight group-hover:text-[#5865f2] transition-colors">
                  {s.title}
                </h3>

                <p className="font-sans text-sm text-[#44444a] mt-4 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-black/[0.08]">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono bg-black/[0.04] text-[#121214] rounded-md border border-black/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
