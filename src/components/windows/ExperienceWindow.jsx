import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight } from 'lucide-react';

export default function ExperienceWindow() {
  const { experience } = portfolioData;
  const [selectedExp, setSelectedExp] = useState(experience[0]);

  return (
    <div className="flex h-full select-none">
      {/* Notes Sidebar */}
      <div className="w-64 bg-white/5 border-r border-white/10 overflow-y-auto">
        <div className="p-3 text-[10px] font-semibold text-white/40 uppercase tracking-wider border-b border-white/10">
          Career Timeline
        </div>
        <div className="divide-y divide-white/5">
          {experience.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedExp(exp)}
              className={`w-full text-left p-3.5 transition-colors flex flex-col space-y-1 ${
                selectedExp.company === exp.company
                  ? 'bg-amber-600/20 border-l-4 border-amber-500'
                  : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white truncate">{exp.company}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                  {exp.badge}
                </span>
              </div>
              <div className="text-[11px] text-amber-300 font-medium">{exp.role}</div>
              <div className="text-[10px] text-white/50">{exp.period}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Note Detail Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {selectedExp && (
          <div className="space-y-6">
            {/* Header info */}
            <div className="border-b border-white/10 pb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white tracking-tight">{selectedExp.company}</h2>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedExp.badge}
                </span>
              </div>
              <div className="text-sm font-semibold text-blue-400 mt-1">{selectedExp.role}</div>
              <div className="flex items-center space-x-4 text-xs text-white/60 mt-2">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedExp.period}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedExp.location}</span>
                </span>
              </div>
            </div>

            {/* Responsibilities & Achievements */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-3">
                Key Responsibilities & Deliverables
              </h3>
              <div className="space-y-2.5">
                {selectedExp.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300 leading-relaxed bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                Technologies & Tools Used
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {selectedExp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs bg-white/10 text-white rounded-lg border border-white/10 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
