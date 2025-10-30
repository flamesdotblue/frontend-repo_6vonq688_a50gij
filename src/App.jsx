import React from 'react';
import Hero3D from './components/Hero3D';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { User, FolderGit2, Briefcase, Sparkles } from 'lucide-react';

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-b-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            <span className="font-medium">Portfolio</span>
          </div>
          <nav className="hidden items-center gap-2 sm:flex">
            <button onClick={() => scrollTo('skills')} className="rounded-md px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white">Skills</button>
            <button onClick={() => scrollTo('experience')} className="rounded-md px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white">Experience</button>
            <button onClick={() => scrollTo('projects')} className="rounded-md px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white">Projects</button>
          </nav>
        </div>
      </header>

      {/* Hero with Spline */}
      <Hero3D />

      {/* Content sections */}
      <Skills />
      <Experience />
      <Projects />

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
          <p className="text-sm text-white/70">
            Designed with a modern, interactive aesthetic. Available for roles in full‑stack engineering, AI/ML, and cloud solutions.
          </p>
        </div>
        <div className="mt-4 text-center text-xs text-white/50">© {new Date().getFullYear()} • Built with React & Tailwind</div>
      </footer>
    </div>
  );
}

export default App;
