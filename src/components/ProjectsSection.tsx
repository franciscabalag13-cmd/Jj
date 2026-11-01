import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Play, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Design Systems', 'Developer Tools', 'Creative Tech', 'Web Applications'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading & Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
              Curated Production Work
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 [text-wrap:balance]">
              Featured Projects &amp; Open Systems
            </h2>
          </div>

          {/* Interactive filter tabs (Buttons with click handlers, not pills!) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  filter === cat
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-7 transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-700 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Quiet 1-line text kicker (NO pill badge!) */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">{project.role}</span>
                </div>

                {/* Primary Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2.5 flex items-center justify-between group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-blue-600 dark:text-blue-400" />
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Quantitative Impact Row (Tabular Figures) */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/60 mb-6">
                  {project.impactMetrics.map((metric, i) => (
                    <div key={i}>
                      <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies unboxed row & Interactive trigger */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {project.technologies.slice(0, 3).map((t, idx) => (
                    <React.Fragment key={t}>
                      <span>{t}</span>
                      {idx < 2 && idx < project.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-slate-400">+{project.technologies.length - 3}</span>
                  )}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                  <Play className="h-3 w-3 fill-blue-600" />
                  <span>Launch Demo</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
