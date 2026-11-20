import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AppleFooter() {
  const { personal } = portfolioData;

  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#161617] text-[#6e6e73] dark:text-[#86868b] text-[11px] leading-relaxed pt-12 pb-16 px-4 sm:px-6 border-t border-black/5 dark:border-white/10 select-none transition-colors">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Footnotes */}
        <div className="space-y-2 pb-6 border-b border-black/10 dark:border-white/10 text-[#86868b] dark:text-[#6e6e73]">
          <p>
            1. Supported 400+ physical and virtual mission-critical servers for the State Bank of India Data Center (SBI-ITFO) on HP Blade Servers (BL860/870/890) and HP Superdome architectures, scaling capacity 10x with zero unplanned downtime.
          </p>
          <p>
            2. Microsoft Certified: Azure Administrator Associate (AZ-104) verified credential for cloud computing, storage, network provisioning, and identity governance.
          </p>
          <p>
            3. Debian 11 optimized operating systems hardened specifically for high-density Docker containers and IoT edge telemetry fleets at Harman Connected Services.
          </p>
        </div>

        {/* Apple Breadcrumb Trail */}
        <div className="flex items-center space-x-2 text-xs py-2 text-[#6e6e73] dark:text-[#a1a1a6]">
          <a href="#" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors"></a>
          <span>›</span>
          <span className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Engineers</span>
          <span>›</span>
          <span className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Cloud &amp; IoT</span>
          <span>›</span>
          <span className="text-[#1d1d1f] dark:text-white font-medium">Girindra Mohan</span>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
          <div>
            <h4 className="font-semibold text-[#1d1d1f] dark:text-white mb-2.5">Career Highlights</h4>
            <ul className="space-y-1.5">
              <li><a href="#experience" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Harman Connected Services</a></li>
              <li><a href="#experience" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">DXC Technology (SBI-ITFO)</a></li>
              <li><a href="./Girindra_Mohan_Resume.pdf" download className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Official Resume (PDF)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] dark:text-white mb-2.5">Core Architectures</h4>
            <ul className="space-y-1.5">
              <li><a href="#specs" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Azure IoT Hub &amp; Edge</a></li>
              <li><a href="#specs" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Docker &amp; Kubernetes (K8s)</a></li>
              <li><a href="#specs" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Ansible Automation</a></li>
              <li><a href="#specs" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">HP Blade &amp; Superdome</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] dark:text-white mb-2.5">Operating Systems</h4>
            <ul className="space-y-1.5">
              <li><a href="#specs" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Debian 11 (Hardened)</a></li>
              <li><a href="#specs" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Red Hat Enterprise Linux (RHEL)</a></li>
              <li><a href="#specs" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">HP-UX Enterprise</a></li>
              <li><a href="#specs" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Ubuntu &amp; Windows Server</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] dark:text-white mb-2.5">Profiles &amp; Direct</h4>
            <ul className="space-y-1.5">
              <li><a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">LinkedIn Profile</a></li>
              <li><a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">GitHub Repositories</a></li>
              <li><a href={`mailto:${personal.email}`} className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">{personal.email}</a></li>
              <li><a href={`tel:${personal.phone}`} className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">{personal.phone}</a></li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#86868b] dark:text-[#6e6e73]">
          <div>
            Copyright © {new Date().getFullYear()} Girindra Mohan. All rights reserved. Designed in Cupertino style.
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <a href="#overview" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Back to Top ↑</a>
            <a href="./Girindra_Mohan_Resume.pdf" download className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
