import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Star } from 'lucide-react';

export default function NakitiSelectedWork() {
  const { projects } = portfolioData;

  return (
    <section id="work" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-white/[0.08] mb-14">
        <div>
          <span className="font-mono text-xs text-[#5865f2] uppercase tracking-wider">
            03 · Selected Work
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Systems I've had a hand in.
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#8a8a93] max-w-sm mt-4 sm:mt-0">
          Hover over each system card to inspect deliverables, architecture stack, and technical achievements.
        </p>
      </div>

      {/* Stacked Project Cards */}
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="nakiti-project-card p-6 sm:p-10 rounded-2xl bg-[#0f0f13] border border-white/[0.08] flex flex-col justify-between cursor-pointer group"
          >
            <div>
              {/* Card Meta Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs text-[#5865f2] project-invert-text font-bold">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-xs text-[#8a8a93] project-invert-muted uppercase">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 text-xs text-amber-400 font-mono project-invert-text">
                    <Star className="w-3.5 h-3.5 fill-amber-400 project-invert-text" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center project-arrow-icon transition-transform duration-200">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight project-invert-text">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#a1a1a6] mt-3 max-w-3xl leading-relaxed project-invert-muted">
                {project.description}
              </p>

              {/* Bullet highlights */}
              <div className="mt-5 space-y-1.5">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-2 text-xs sm:text-sm text-[#d2d2d7] project-invert-muted"
                  >
                    <span className="font-mono text-[#5865f2] project-invert-text">▸</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags footer */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.08] project-invert-border">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-white/[0.04] text-[#d2d2d7] rounded-md border border-white/[0.08] project-invert-tag transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
