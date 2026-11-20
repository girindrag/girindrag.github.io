import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Mail, Phone, MapPin, Download } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon } from './Icons';

export default function NakitiContactFooter() {
  const { personal } = portfolioData;

  const steps = [
    {
      num: '01',
      title: 'Share the challenge',
      desc: 'Send an email outlining your system requirements, IoT fleet scope, or infrastructure bottlenecks.',
    },
    {
      num: '02',
      title: 'Fast technical review',
      desc: 'I review your stack and respond within 24 hours with architectural thoughts and alignment.',
    },
    {
      num: '03',
      title: 'An alignment call',
      desc: 'A focused discussion to define deliverables, timelines, and execution strategy.',
    },
  ];

  return (
    <footer id="contact" className="bg-[#070709] pt-24 pb-32 px-5 sm:px-8 border-t border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-white/[0.08] mb-14">
          <div>
            <span className="font-mono text-xs text-[#5865f2] uppercase tracking-wider">
              06 · Engagement &amp; Contact
            </span>
            <h2 className="font-display text-3xl sm:text-6xl font-bold tracking-tight text-white mt-2">
              What’s actually hurting?
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#8a8a93] max-w-sm mt-4 sm:mt-0">
            Whether you need hands-on team leadership, zero-downtime server scaling, or edge IoT device provisioning.
          </p>
        </div>

        {/* 3-Step Transparent Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[#5865f2]">
                  STEP {s.num}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-3">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8a8a93] mt-2 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Giant Circular CTA & Direct Contact Row */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0f0f13] to-[#070709] border border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          <div className="max-w-xl">
            <h3 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Ready to engineer resilient systems?
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#8a8a93] mt-4 leading-relaxed">
              Drop an email or connect directly on LinkedIn. Currently based in Pune, India with flexible global timezone overlap.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-xs font-mono text-[#a1a1a6]">
              <a href={`mailto:${personal.email}`} className="hover:text-white flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-[#5865f2]" />
                <span>{personal.email}</span>
              </a>
              <span>•</span>
              <a href={`tel:${personal.phone}`} className="hover:text-white flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.phone}</span>
              </a>
            </div>
          </div>

          {/* Signature Inacio Nakiti Giant Circular CTA Button */}
          <a
            href={`mailto:${personal.email}?subject=Infrastructure%20%2F%20Team%20Lead%20Inquiry`}
            className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#5865f2] hover:bg-[#6c72ff] text-white flex flex-col items-center justify-center font-display font-bold text-lg sm:text-xl shadow-[0_0_50px_rgba(88,101,242,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 group shrink-0"
          >
            <span>Start a project</span>
            <span className="text-2xl mt-1 group-hover:translate-x-1.5 transition-transform">→</span>
          </a>
        </div>

        {/* Footer Meta Row */}
        <div className="pt-12 mt-16 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8a8a93]">
          <div>
            <span>© {new Date().getFullYear()} {personal.name}</span>
            <span className="mx-2">•</span>
            <span>Inspired by inacionakiti.com</span>
          </div>

          <div className="flex items-center space-x-5">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href="./Girindra_Mohan_Resume.pdf" download className="hover:text-white text-[#5865f2]">
              Resume (PDF)
            </a>
            <a href="#overview" className="hover:text-white">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
