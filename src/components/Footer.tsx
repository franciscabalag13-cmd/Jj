import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* DECORATIVE CODE PANELS */}
      <div className="code-panels" data-testid="code-panels">
        {/* Delete all three panel divs here */}
      </div>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-950 transition-colors">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-slate-100">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
              </div>
            </div>

            <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X profile"
                className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send email"
                className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            {/* Signature as requested in prompt */}
            <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
              Made with love 💙
            </div>

            <div className="flex items-center gap-6">
              <span>© {currentYear} {PERSONAL_INFO.name}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a 
                href="#top" 
                className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors font-medium"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
