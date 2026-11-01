import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Check, ArrowRight, Play, Eye } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Interactive states for the specific project demo
  const [auraLightness, setAuraLightness] = useState<number>(50);
  const [luminaFreq, setLuminaFreq] = useState<number>(3);
  const [devPulseClicks, setDevPulseClicks] = useState<number[]>([]);
  const [zenithFontScale, setZenithFontScale] = useState<number>(100);
  const [zenithBionic, setZenithBionic] = useState<boolean>(false);

  const handleDevPulseClick = () => {
    const randomLatency = Math.floor(12 + Math.random() * 18);
    setDevPulseClicks(prev => [randomLatency, ...prev.slice(0, 4)]);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.role}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Title and summary */}
          <div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-3">
              {project.title}
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Impact Metrics Row */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            {project.impactMetrics.map((metric, i) => (
              <div key={i}>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-slate-100 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Live Mini-Sandbox Demo */}
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-slate-100">
                <Play className="h-3.5 w-3.5 text-blue-600 fill-blue-600" />
                <span>Live Interactive Sandbox</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Running in-memory</span>
            </div>

            {/* Aura Token Demo */}
            {project.interactiveDemoType === 'aura' && (
              <div className="space-y-4">
                <div 
                  style={{ backgroundColor: `hsl(215, 90%, ${auraLightness}%)` }} 
                  className="h-20 rounded-lg flex items-center justify-between px-5 font-mono text-xs font-semibold transition-colors duration-150 shadow-xs"
                >
                  <span style={{ color: auraLightness > 55 ? '#0f172a' : '#f8fafc' }}>
                    hsl(215, 90%, {auraLightness}%)
                  </span>
                  <span 
                    style={{ 
                      backgroundColor: auraLightness > 55 ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
                      color: auraLightness > 55 ? '#0f172a' : '#f8fafc'
                    }}
                    className="px-2 py-0.5 rounded text-[11px]"
                  >
                    WCAG AA {auraLightness > 35 && auraLightness < 75 ? 'Pass (4.8:1)' : 'Pass (8.2:1)'}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <span>Adjust Luminance:</span>
                  <input 
                    type="range" 
                    min="15" 
                    max="90" 
                    value={auraLightness} 
                    onChange={(e) => setAuraLightness(Number(e.target.value))}
                    className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded appearance-none accent-blue-600 cursor-pointer"
                  />
                  <span className="font-mono">{auraLightness}%</span>
                </div>
              </div>
            )}

            {/* Lumina Vector Demo */}
            {project.interactiveDemoType === 'lumina' && (
              <div className="space-y-4">
                <div className="h-24 w-full bg-slate-900 dark:bg-slate-950 rounded-lg flex items-center justify-center p-2 overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 80">
                    <path
                      d={`M 10 40 Q 100 ${40 - luminaFreq * 6}, 200 40 T 390 40`}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                    />
                    <circle cx="200" cy="40" r="4" fill="#60a5fa" />
                  </svg>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <span>Oscillation Frequency:</span>
                  <input 
                    type="range" 
                    min="1" 
                    max="6" 
                    value={luminaFreq} 
                    onChange={(e) => setLuminaFreq(Number(e.target.value))}
                    className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded appearance-none accent-blue-600 cursor-pointer"
                  />
                  <span className="font-mono">{luminaFreq}x</span>
                </div>
              </div>
            )}

            {/* DevPulse Demo */}
            {project.interactiveDemoType === 'devpulse' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleDevPulseClick}
                    className="px-4 py-2 text-xs font-semibold rounded bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-xs active:scale-95"
                  >
                    Simulate User Click Event
                  </button>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Latest INP: {devPulseClicks.length > 0 ? `${devPulseClicks[0]} ms (Good)` : 'No events yet'}
                  </span>
                </div>
                {devPulseClicks.length > 0 && (
                  <div className="flex gap-2">
                    {devPulseClicks.map((lat, idx) => (
                      <span key={idx} className="text-xs font-mono px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded text-slate-800 dark:text-slate-200">
                        #{idx + 1}: {lat}ms
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Zenith Reader Demo */}
            {project.interactiveDemoType === 'zenith' && (
              <div className="space-y-4">
                <div 
                  style={{ fontSize: `${zenithFontScale}%` }} 
                  className="p-4 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all max-w-[65ch] leading-relaxed text-slate-800 dark:text-slate-200"
                >
                  {zenithBionic ? (
                    <p>
                      <strong>Ar</strong>chitectures <strong>th</strong>at <strong>re</strong>spect <strong>hu</strong>man <strong>at</strong>tention <strong>ar</strong>e <strong>bu</strong>ilt <strong>wi</strong>th <strong>cl</strong>arity <strong>an</strong>d <strong>ca</strong>re.
                    </p>
                  ) : (
                    <p>
                      Architectures that respect human attention are built with clarity, rigorous typographic measure, and care.
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span>Text Scale:</span>
                    <button 
                      onClick={() => setZenithFontScale(prev => Math.max(80, prev - 10))}
                      className="px-2 py-0.5 border border-slate-300 dark:border-slate-700 rounded font-mono"
                    >
                      -
                    </button>
                    <span className="font-mono">{zenithFontScale}%</span>
                    <button 
                      onClick={() => setZenithFontScale(prev => Math.min(130, prev + 10))}
                      className="px-2 py-0.5 border border-slate-300 dark:border-slate-700 rounded font-mono"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => setZenithBionic(!zenithBionic)}
                    className="px-3 py-1 rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium"
                  >
                    {zenithBionic ? 'Standard Reading' : 'Bionic Reading'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Architectural Features */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">
              Key Architectural Features
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clean Technologies Metadata (Zero-pill rule: unboxed text with ·) */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
              Technology Stack
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 px-6 py-4 bg-slate-50/50 dark:bg-slate-950/50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            Close
          </button>
          
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
