import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Award, GraduationCap, MapPin, Mail, Phone, ExternalLink, Download, CheckCircle2 } from 'lucide-react';

export default function AboutWindow({ onOpenApp }) {
  const { personal, stats, education, certifications } = portfolioData;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-white/5 p-5 rounded-2xl border border-white/10">
        <img 
          src={personal.avatar} 
          alt={personal.name} 
          className="w-24 h-24 rounded-2xl ring-4 ring-blue-500/30 object-cover shadow-xl"
        />
        <div className="flex-1 text-center sm:text-left">
          <div className="inline-block px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-300 bg-blue-500/20 rounded-full mb-1">
            {personal.role}
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">{personal.name}</h1>
          <p className="text-xs text-blue-200 mt-1 font-medium">{personal.tagline}</p>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-3 text-xs text-slate-300">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{personal.location}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{personal.email}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{personal.phone}</span>
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
            <button 
              onClick={() => onOpenApp('contact')}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
            >
              Contact Me
            </button>
            <a 
              href="./Girindra_Mohan_Resume.pdf"
              download="Girindra_Mohan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md flex items-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
            <a 
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/10 flex items-center space-x-1.5 transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-white/60" />
            </a>
            <a 
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/10 flex items-center space-x-1.5 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-white/60" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-blue-400">{stat.value}</div>
            <div className="text-[11px] text-white/60 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Professional Bio */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
        <h2 className="text-sm font-semibold text-white tracking-wide uppercase mb-2 flex items-center space-x-2">
          <span>About My Journey</span>
        </h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          {personal.bio}
        </p>
      </div>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Education */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start space-x-3">
          <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl mt-0.5">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-semibold text-blue-300 tracking-wider">Education</div>
            <div className="text-xs font-bold text-white mt-0.5">{education[0].degree}</div>
            <div className="text-[11px] text-white/70">{education[0].institution}</div>
            <div className="text-[10px] text-white/50 mt-1">{education[0].location} • Batch of {education[0].year}</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start space-x-3">
          <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl mt-0.5">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-semibold text-emerald-300 tracking-wider">Official Certification</div>
            <div className="text-xs font-bold text-white mt-0.5">{certifications[0].title}</div>
            <div className="text-[11px] text-white/70">{certifications[0].issuer} • {certifications[0].code}</div>
            <div className="text-[10px] text-emerald-400 mt-1 flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Verified Credential</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
