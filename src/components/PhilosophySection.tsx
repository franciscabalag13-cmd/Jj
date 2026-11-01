import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Engineering Principles
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 [text-wrap:balance]">
            Architectural Philosophy &amp; Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Software craftsmanship is measured in milliseconds, semantic integrity, and how gracefully an interface behaves when users encounter edge cases.
          </p>
        </div>

        {/* Editorial numbered principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <div 
              key={principle.number} 
              className="p-7 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 space-y-4"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                  {principle.number}.
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {principle.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {principle.summary}
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs italic text-slate-500 dark:text-slate-400">
                "{principle.tagline}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
