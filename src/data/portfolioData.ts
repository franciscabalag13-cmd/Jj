import { Project, ExperienceItem, PlaygroundComponent } from '../types';

export const PERSONAL_INFO = {
  name: 'Francisca Balag',
  role: 'Senior Frontend Engineer & UI Architect',
  email: 'franciscabalag13@gmail.com',
  location: 'Manila, PH / Remote Worldwide',
  bio: 'Building accessible, fast, and tactile web applications. I bridge high-fidelity interface design with robust TypeScript architectures and scalable design systems.',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://x.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'aura-design-tokens',
    title: 'Aura Token Studio',
    summary: 'A real-time design token generator and accessibility contrast engine for high-velocity engineering teams.',
    fullDescription: 'Aura Studio allows design system maintainers to define semantic color scales, typographic ramps, and spatial steps with automated APCA and WCAG 2.2 AA contrast compliance verification. Exports directly to Tailwind CSS configs, CSS variables, and iOS/Android tokens.',
    category: 'Design Systems',
    year: '2025',
    role: 'Lead Architect & Engineer',
    impactMetrics: [
      { label: 'Contrast audits', value: '100% automated' },
      { label: 'Bundle footprint', value: '8.4 KB gzip' },
      { label: 'Weekly token syncs', value: '42,000+' }
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'ColorJS.io', 'Canvas API'],
    features: [
      'Interactive OKLCH & HSL color curve adjustments',
      'Instant WCAG AA/AAA matrix verification with simulated color blindness',
      'Live code generation for Tailwind v4 and CSS Custom Properties',
      'Zero-dependency runtime token consumer'
    ],
    interactiveDemoType: 'aura',
    githubUrl: 'https://github.com/franciscabalag/aura-tokens',
    liveUrl: '#demo-aura'
  },
  {
    id: 'lumina-canvas',
    title: 'Lumina Vector Engine',
    summary: 'Lightweight reactive canvas and SVG plotting engine for real-time telemetry and generative charts.',
    fullDescription: 'Engineered a specialized 60 FPS drawing pipeline that renders live data telemetry into fluid cubic bezier waves and interactive heatmaps without heavy charting dependencies.',
    category: 'Creative Tech',
    year: '2024',
    role: 'Creator & Maintainer',
    impactMetrics: [
      { label: 'Rendering speed', value: '60 FPS stable' },
      { label: 'Frame budget latency', value: '< 2.4 ms' },
      { label: 'Zero external deps', value: 'Pure Canvas/SVG' }
    ],
    technologies: ['TypeScript', 'WebGL Context', 'HTML5 Canvas', 'RequestAnimationFrame'],
    features: [
      'Adaptive sub-pixel anti-aliasing for dense telemetry points',
      'Pointer tracking with magnetic anchor snaps',
      'Custom curve smoothing using Catmull-Rom splines',
      'Dark/Light canvas color space auto-adaptation'
    ],
    interactiveDemoType: 'lumina',
    githubUrl: 'https://github.com/franciscabalag/lumina-engine',
    liveUrl: '#demo-lumina'
  },
  {
    id: 'devpulse-profiler',
    title: 'DevPulse Core Web Vitals',
    summary: 'Client-side performance diagnostic workbench measuring real-time FID, INP, and layout shifts.',
    fullDescription: 'DevPulse hooks into the browser PerformanceObserver API to track user interactions, long tasks, and resource waterfall waterfalls with instantaneous visual budgeting alerts.',
    category: 'Developer Tools',
    year: '2024',
    role: 'Frontend Performance Engineer',
    impactMetrics: [
      { label: 'LCP reduction', value: '-38%' },
      { label: 'Interaction latency', value: '16 ms target' },
      { label: 'Memory overhead', value: '< 1.1 MB' }
    ],
    technologies: ['TypeScript', 'Performance API', 'Web Workers', 'Tailwind CSS'],
    features: [
      'Live DOM node mutation and repaint frequency heatmaps',
      'Long-task detection with call stack attribution',
      'Interaction to Next Paint (INP) stress tester',
      'JSON report export for CI/CD regression gates'
    ],
    interactiveDemoType: 'devpulse',
    githubUrl: 'https://github.com/franciscabalag/devpulse',
    liveUrl: '#demo-devpulse'
  },
  {
    id: 'zenith-reader',
    title: 'Zenith Editorial Reader',
    summary: 'A distraction-free typography engine optimized for reading long-form engineering essays.',
    fullDescription: 'Zenith implements an adaptive typographic grid with dynamic measure calculation (65-75ch limit), proportional vertical rhythm, and smooth chapter progress tracking.',
    category: 'Web Applications',
    year: '2023',
    role: 'Product Designer & Developer',
    impactMetrics: [
      { label: 'Lighthouse Accessibility', value: '100 / 100' },
      { label: 'Avg reading completion', value: '84%' },
      { label: 'Offline cache size', value: '340 KB' }
    ],
    technologies: ['React', 'CSS Grid', 'IndexedDB', 'Web Speech Synthesis'],
    features: [
      'Proportional typographic scale based on viewport width',
      'Bionic reading toggle and contrast calibration for dyslexia',
      'Keyboard vim-style navigation (j/k scroll, / search)',
      'Built-in text-to-speech audio companion'
    ],
    interactiveDemoType: 'zenith',
    githubUrl: 'https://github.com/franciscabalag/zenith-reader',
    liveUrl: '#demo-zenith'
  }
];

export const PLAYGROUND_COMPONENTS: PlaygroundComponent[] = [
  {
    id: 'palette',
    name: 'Dynamic Token Palette',
    description: 'Calculates compliant primary and accent shades in real-time with optical contrast checking.',
    category: 'Design Systems',
    language: 'tsx',
    code: `// Dynamic Token Generator with APCA Contrast Check
const calculateColorGrade = (baseHue: number, lightness: number) => {
  return \`hsl(\${baseHue}, 75%, \${lightness}%)\`;
};

export function PaletteCard({ hue = 217 }: { hue: number }) {
  const shades = [95, 80, 60, 45, 30, 15];
  return (
    <div className="flex gap-2">
      {shades.map((l) => (
        <div 
          key={l} 
          style={{ backgroundColor: calculateColorGrade(hue, l) }}
          className="h-12 flex-1 rounded-md transition-transform hover:scale-105" 
        />
      ))}
    </div>
  );
}`
  },
  {
    id: 'spring-button',
    name: 'Tactile Haptic Button',
    description: 'Zero-layout-shift micro-interaction with spring physics settlement and aria feedback.',
    category: 'Interactions',
    language: 'tsx',
    code: `// Accessible Spring Button with state machine
export function TactileButton({ label = "Confirm Action" }) {
  const [state, setState] = useState<'idle' | 'pressed' | 'done'>('idle');

  return (
    <button
      onClick={() => {
        setState('pressed');
        setTimeout(() => setState('done'), 400);
      }}
      className="px-5 py-2.5 text-sm font-medium rounded-lg bg-slate-900 text-white transition-all active:scale-95 hover:bg-slate-800"
    >
      {state === 'done' ? '✓ Completed' : label}
    </button>
  );
}`
  },
  {
    id: 'metric-strip',
    name: 'Tabular Telemetry Row',
    description: 'Formatted tabular numerals with WCAG compliant variance indicators.',
    category: 'Data Display',
    language: 'tsx',
    code: `// Tabular Numerals KPI Row
export function MetricRow({ label, value, delta }: MetricProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-slate-100 py-2.5 font-mono text-sm tabular-nums">
      <span className="text-slate-600 font-sans">{label}</span>
      <div className="flex items-center gap-3">
        <span className="font-semibold text-slate-900">{value}</span>
        <span className="text-xs text-emerald-600">+{delta}%</span>
      </div>
    </div>
  );
}`
  },
  {
    id: 'code-panel-inspect',
    name: 'Clean Code Panel Markup',
    description: 'Verification of the clean markup structure with decorative panels eliminated.',
    category: 'Architecture',
    language: 'html',
    code: `<!-- DECORATIVE CODE PANELS -->
<div class="code-panels">
  <!-- Delete all three panel divs here -->
</div>
<footer>
  Made with love 💙
</footer>`
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2023 — Present',
    role: 'Senior Frontend Architect',
    company: 'Apex Digital Products',
    location: 'Remote',
    description: 'Spearheaded the design system unification across 4 enterprise web products, reducing front-of-screen defect rates by 42% and trimming client load times.',
    achievements: [
      'Architected cross-platform design tokens supporting Tailwind v4 and React 19',
      'Enforced strict WCAG AA contrast standards and keyboard navigation parity',
      'Mentored 8 mid-level and junior engineers in defensive TypeScript patterns'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vitest', 'Figma Tokens']
  },
  {
    period: '2021 — 2023',
    role: 'Frontend Engineer',
    company: 'Vanguard Interactive',
    location: 'Manila, PH',
    description: 'Engineered high-frequency data analytics dashboards and interactive canvas visualization tools for e-commerce and fintech clients.',
    achievements: [
      'Implemented real-time charting pipeline operating under strict 16ms frame budgets',
      'Authored reusable UI component library used across 12 client engagements',
      'Pioneered micro-interaction guidelines resulting in 28% higher onboarding completion'
    ],
    techStack: ['React', 'JavaScript', 'HTML5 Canvas', 'SVG', 'Node.js', 'PostgreSQL']
  },
  {
    period: '2019 — 2021',
    role: 'UI/UX Developer',
    company: 'Monochrome Studios',
    location: 'Manila, PH',
    description: 'Designed and built bespoke responsive web applications, editorial publications, and marketing experiences.',
    achievements: [
      'Delivered 20+ responsive web projects with 95+ Lighthouse accessibility scores',
      'Converted legacy codebases to modern CSS architecture and component-driven paradigms'
    ],
    techStack: ['HTML5', 'CSS3', 'Modern JavaScript', 'Webpack', 'Sass']
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Zero-Latency Human Experience',
    summary: 'Every button press, tab switch, and input must settle within 100–200ms. Interfaces should anticipate intent rather than make users wait.',
    tagline: 'Perception of speed is an architectural discipline.'
  },
  {
    number: '02',
    title: 'Accessibility As First Principle',
    summary: 'Contrast ratios, screen reader semantics, and focus management are not post-launch audits; they are non-negotiable foundations built on day one.',
    tagline: 'Universal usability is the highest standard of craftsmanship.'
  },
  {
    number: '03',
    title: 'Typographic & Spatial Math',
    summary: 'Harmonious layouts emerge from strict mathematical scales: golden ratio line-heights, balanced optical hierarchy, and proportional padding.',
    tagline: 'Clarity over decoration. Intentional whitespace over clutter.'
  },
  {
    number: '04',
    title: 'Resilient Design Systems',
    summary: 'Tokens should survive framework migrations. Clean semantic variables allow components to compose seamlessly across light and dark themes.',
    tagline: 'Design systems should liberate developers, not constrain them.'
  }
];
