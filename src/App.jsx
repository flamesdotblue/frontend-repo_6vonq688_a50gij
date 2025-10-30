import React, { useMemo, useState } from 'react';
import Hero3D from './components/Hero3D';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Sparkles, Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  // Top progress bar using scroll
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Scroll progress */}
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-fuchsia-500 to-indigo-500" />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-2 flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-fuchsia-400" />
            <span className="font-medium">Portfolio</span>
          </div>
          <nav className="hidden items-center gap-2 sm:flex">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="rounded-md px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                {l.label}
              </button>
            ))}
          </nav>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 sm:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="fixed inset-0 z-50">
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto border-l border-white/10 bg-slate-900 p-4"
              role="dialog"
              aria-modal="true"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-fuchsia-400" />
                  <span className="font-medium">Navigate</span>
                </div>
                <button
                  className="rounded-md p-2 text-white/80 hover:bg-white/10"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid gap-2">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-white/90 hover:bg-white/10"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </header>

      {/* Hero with Spline */}
      <Hero3D />

      {/* Content sections */}
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
          <p className="text-sm text-white/70">
            Designed for motion. Crisp typography, glossy depth, and immersive 3D for a hyped experience.
          </p>
        </div>
        <div className="mt-4 text-center text-xs text-white/50">© {new Date().getFullYear()} • Built with React & Tailwind</div>
      </footer>
    </div>
  );
}

export default App;
