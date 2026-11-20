import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { 
  Folder, 
  FolderGit2, 
  Tag, 
  Star, 
  ExternalLink, 
  Layers, 
  Cloud, 
  Server, 
  Cpu, 
  CheckCircle,
  LayoutGrid,
  List
} from 'lucide-react';

export default function ProjectsWindow() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(portfolioData.projects[0]);
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'IoT / DevOps', 'Infrastructure', 'Cloud', 'DevOps'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category.includes(activeCategory));

  return (
    <div className="flex h-full select-none">
      {/* Finder Sidebar */}
      <div className="w-48 bg-white/5 border-r border-white/10 p-3 hidden sm:flex flex-col space-y-4">
        <div>
          <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider px-2 mb-1.5">
            Favorites
          </div>
          <div className="space-y-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Folder className="w-3.5 h-3.5" />
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider px-2 mb-1.5">
            Tags & Systems
          </div>
          <div className="space-y-1 text-xs text-white/60 px-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Azure IoT</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Docker & K8s</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Ansible Playbooks</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Enterprise Linux</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Finder Toolbar */}
        <div className="h-10 px-4 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs text-white/80">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-white">{activeCategory} Projects</span>
            <span className="text-white/40">({filteredProjects.length} items)</span>
          </div>

          <div className="flex items-center space-x-2 bg-white/10 p-0.5 rounded-lg border border-white/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1 rounded ${viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-white/50'}`}
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1 rounded ${viewMode === 'list' ? 'bg-white/20 text-white' : 'text-white/50'}`}
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Project Items Container */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedProject?.id === project.id
                    ? 'bg-blue-900/30 border-blue-500/50 shadow-lg ring-1 ring-blue-500/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                      <span className="text-[10px] text-blue-300 font-medium">{project.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-[11px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    <Star className="w-3 h-3 fill-amber-300" />
                    <span>{project.stars}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 mt-2.5 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-3 space-y-1">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-1.5 text-[11px] text-slate-400">
                      <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] bg-white/10 text-white/80 rounded-md border border-white/10 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
