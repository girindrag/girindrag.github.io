import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function AppleFeaturedProjects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-black/5 dark:border-white/10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-xs font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase">
          Featured Architecture
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mt-1">
          Built for the real world.
        </h2>
        <p className="text-[#6e6e73] dark:text-[#86868b] text-sm sm:text-base mt-2">
          Production-tested infrastructure frameworks delivering high availability, security, and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="apple-card p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-gradient-to-b dark:from-[#18181a] dark:to-[#121213]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-black/5 dark:bg-white/5 text-[#0071e3] dark:text-[#2997ff] border border-black/5 dark:border-white/10 rounded-full text-xs font-medium">
                  {project.category}
                </span>
                <div className="flex items-center space-x-1 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{project.stars}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6e6e73] dark:text-[#86868b] mt-3 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-5 space-y-2">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-[#333336] dark:text-[#d2d2d7]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] bg-black/5 dark:bg-white/5 text-[#6e6e73] dark:text-[#a1a1a6] rounded-md border border-black/5 dark:border-white/5 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium"
              >
                <span>View on GitHub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
