import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-900/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Career Milestones
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Work Experience &amp; Leadership
          </h2>
        </div>

        <div className="space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <div 
              key={idx} 
              className="p-7 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {exp.role} <span className="text-slate-400 font-normal">at</span> {exp.company}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {exp.location}
                  </div>
                </div>

                <div className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 shrink-0">
                  {exp.period}
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="space-y-2 mb-5">
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                    <span className="text-slate-400 mt-0.5">—</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="text-slate-400 font-sans text-[11px] uppercase tracking-wide">Environment:</span>
                {exp.techStack.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span>{tech}</span>
                    {i < exp.techStack.length - 1 && (
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
