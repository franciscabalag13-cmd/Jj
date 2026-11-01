import React, { useState } from 'react';
import { ArrowDown, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onPlaygroundClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPlaygroundClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {/* Metadata kicker: Clean unboxed text with typographic separators (No pills!) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-6">
            <span>{PERSONAL_INFO.role}</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>{PERSONAL_INFO.location}</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Open to Senior Roles & Projects</span>
          </div>

          {/* Headline with text-wrap: balance */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.12] mb-6 [text-wrap:balance]">
            Crafting resilient web architectures and tactile interfaces.
          </h1>

          {/* Body prose */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {PERSONAL_INFO.bio}
          </p>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-all shadow-sm hover:translate-y-[-1px] active:translate-y-[0px] whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="h-4 w-4" />
            </button>

            <button
              onClick={onPlaygroundClick}
              className="px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <Terminal className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Interactive Component Studio</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-3 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              title="Copy direct email address"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quantifiable Highlights row */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono tabular-nums">
              6+
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Years Frontend Engineering
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono tabular-nums">
              &lt;2.4ms
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Average Frame Budget Latency
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              WCAG 2.2 AA Compliance
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono tabular-nums">
              42k+
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Tokens Synchronized Weekly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
