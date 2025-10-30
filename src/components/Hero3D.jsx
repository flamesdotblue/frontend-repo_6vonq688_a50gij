import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero3D = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Intro">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center md:pt-32">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          Tech • Portfolio • Interactive • Modern
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
          Software Developer & Tech Enthusiast
        </h1>
        <p className="mt-4 max-w-3xl text-balance text-base text-white/80 md:text-lg">
          Full‑stack development, AI/ML, and cloud solutions. I build scalable applications in C#, Java, and modern JS,
          implement robust RAG systems, and integrate secure, reliable APIs for enterprise use.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="group inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-600"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10"
          >
            Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
