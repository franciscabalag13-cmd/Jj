/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { CodePlayground } from './components/CodePlayground';
import { PhilosophySection } from './components/PhilosophySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Skip to Content for WCAG Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-md text-xs font-semibold"
      >
        Skip to main content
      </a>

      {/* Top Bar Contract Navbar */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        <Hero 
          onExploreClick={() => scrollToSection('projects')} 
          onPlaygroundClick={() => scrollToSection('playground')} 
        />

        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        <CodePlayground />

        <PhilosophySection />

        <ExperienceSection />

        <ContactSection />
      </main>

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Clean Code Panels & Footer with 'Made with love 💙' */}
      <Footer />
    </div>
  );
}
