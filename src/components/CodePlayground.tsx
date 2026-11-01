import React, { useState } from 'react';
import { PLAYGROUND_COMPONENTS } from '../data/portfolioData';
import { Copy, Check, Sliders, RefreshCw, Eye, Code2 } from 'lucide-react';

export const CodePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('palette');
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState<boolean>(false);

  // State for the interactive demo components
  const [hue, setHue] = useState<number>(215);
  const [saturation, setSaturation] = useState<number>(85);
  const [buttonStatus, setButtonStatus] = useState<'idle' | 'executing' | 'success'>('idle');
  const [telemetryValues, setTelemetryValues] = useState<{ fps: number; memory: number; latency: number }>({
    fps: 60,
    memory: 14.2,
    latency: 1.8,
  });

  const activeComponent = PLAYGROUND_COMPONENTS.find(c => c.id === activeTab) || PLAYGROUND_COMPONENTS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeComponent.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateTelemetry = () => {
    setTelemetryValues({
      fps: Math.floor(58 + Math.random() * 3),
      memory: Number((13.5 + Math.random() * 2).toFixed(1)),
      latency: Number((1.2 + Math.random() * 1.4).toFixed(2)),
    });
  };

  return (
    <section id="playground" className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
              Interactive Component Studio
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Live Architecture &amp; Component Sandbox
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Testing design system tokens, spring animations, and telemetry rendering directly in browser memory.
            </p>
          </div>

          {/* Segmented Mode Selector (Buttons, not pills!) */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shrink-0">
            <button
              onClick={() => setViewMode('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === 'preview'
                  ? 'bg-slate-900 text-white dark:bg-blue-600 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Interactive Preview</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === 'code'
                  ? 'bg-slate-900 text-white dark:bg-blue-600 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>Source Code</span>
            </button>
          </div>
        </div>

        {/* Component Tabs Bar (Functional buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 dark:border-slate-800 mb-6">
          {PLAYGROUND_COMPONENTS.map((comp) => (
            <button
              key={comp.id}
              onClick={() => setActiveTab(comp.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                activeTab === comp.id
                  ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-blue-400 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {comp.name}
            </button>
          ))}
        </div>

        {/* Studio Canvas Box */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden shadow-xs">
          {/* Studio Toolbar */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-5 py-3 text-xs bg-slate-50/80 dark:bg-slate-900/60">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800 dark:text-slate-200">{activeComponent.name}</span>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-500 dark:text-slate-400">{activeComponent.description}</span>
            </div>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-2.5 py-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors"
              title="Copy snippet"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
          </div>

          {/* Canvas Body */}
          <div className="p-6 md:p-8 min-h-[320px] flex items-center justify-center">
            {viewMode === 'preview' ? (
              <div className="w-full max-w-2xl">
                {/* 1. Dynamic Token Palette */}
                {activeTab === 'palette' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-6 gap-2">
                      {[95, 80, 65, 50, 35, 18].map((lightness) => {
                        const bgHsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
                        const textColor = lightness > 60 ? '#0f172a' : '#f8fafc';
                        return (
                          <div
                            key={lightness}
                            style={{ backgroundColor: bgHsl, color: textColor }}
                            className="h-20 rounded-lg p-2 flex flex-col justify-between font-mono text-[11px] transition-all hover:scale-105 shadow-xs"
                          >
                            <span className="font-bold">{lightness * 10}</span>
                            <span className="opacity-80 text-[10px]">{lightness}%</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Interactive controls */}
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                      <div className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Sliders className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                          Base Spectral Hue ({hue}°)
                        </span>
                        <span className="font-mono">{hue} deg</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={hue}
                        onChange={(e) => setHue(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />

                      <div className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                        <span>Chroma Saturation ({saturation}%)</span>
                        <span className="font-mono">{saturation}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={saturation}
                        onChange={(e) => setSaturation(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>
                  </div>
                )}

                {/* 2. Tactile Spring Button */}
                {activeTab === 'spring-button' && (
                  <div className="flex flex-col items-center justify-center py-6 text-center space-y-6">
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                      Click to test deterministic state machine with spring release and ARIA completion announce.
                    </p>

                    <button
                      onClick={() => {
                        if (buttonStatus === 'idle') {
                          setButtonStatus('executing');
                          setTimeout(() => {
                            setButtonStatus('success');
                            setTimeout(() => setButtonStatus('idle'), 1800);
                          }, 600);
                        }
                      }}
                      disabled={buttonStatus !== 'idle'}
                      className={`relative px-6 py-3 rounded-lg font-medium text-sm transition-all duration-150 active:scale-95 shadow-sm ${
                        buttonStatus === 'idle'
                          ? 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500'
                          : buttonStatus === 'executing'
                          ? 'bg-amber-600 text-white cursor-wait scale-98'
                          : 'bg-emerald-600 text-white scale-100'
                      }`}
                    >
                      {buttonStatus === 'idle' && 'Deploy Token Payload'}
                      {buttonStatus === 'executing' && (
                        <span className="flex items-center gap-2">
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>Compiling AST...</span>
                        </span>
                      )}
                      {buttonStatus === 'success' && (
                        <span className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          <span>Payload Distributed</span>
                        </span>
                      )}
                    </button>

                    <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      Current State Machine: <span className="text-slate-900 dark:text-slate-100 font-bold">{buttonStatus}</span>
                    </div>
                  </div>
                )}

                {/* 3. Metric Strip */}
                {activeTab === 'metric-strip' && (
                  <div className="space-y-4">
                    <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-3 font-mono text-sm">
                      <div className="flex items-baseline justify-between py-2 border-b border-slate-200 dark:border-slate-800">
                        <span className="text-xs font-sans text-slate-600 dark:text-slate-400 font-medium">Render Frame Rate</span>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">{telemetryValues.fps} FPS</span>
                          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-sans">Stable</span>
                        </div>
                      </div>

                      <div className="flex items-baseline justify-between py-2 border-b border-slate-200 dark:border-slate-800">
                        <span className="text-xs font-sans text-slate-600 dark:text-slate-400 font-medium">Heap Memory Allocation</span>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">{telemetryValues.memory} MB</span>
                          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-sans">&lt;15MB Budget</span>
                        </div>
                      </div>

                      <div className="flex items-baseline justify-between py-2">
                        <span className="text-xs font-sans text-slate-600 dark:text-slate-400 font-medium">Main-Thread Event Delay</span>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">{telemetryValues.latency} ms</span>
                          <span className="text-xs text-blue-600 dark:text-blue-400 font-sans">Zero lag</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleSimulateTelemetry}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                        <span>Simulate Runtime Jitter</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. Clean Code Panel Markup */}
                {activeTab === 'code-panel-inspect' && (
                  <div className="space-y-4">
                    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-5 bg-slate-50 dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300 space-y-3">
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        Clean Structure: Decorative Panels Removed
                      </div>
                      <p className="leading-relaxed">
                        In accordance with the project specification:
                      </p>
                      <pre className="p-3 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 font-mono text-[11px] overflow-x-auto text-blue-600 dark:text-blue-400">
{`<!-- DECORATIVE CODE PANELS -->
<div class="code-panels">
  <!-- Delete all three panel divs here -->
</div>
<footer>
  Made with love 💙
</footer>`}
                      </pre>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                        The noisy static visual panels have been completely cleared out of the DOM. The clean markup container is maintained in the application footer alongside the authentic <span className="font-semibold">Made with love 💙</span> signature.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Source Code view */
              <div className="w-full">
                <pre className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto max-h-[380px] leading-relaxed border border-slate-800">
                  <code>{activeComponent.code}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
