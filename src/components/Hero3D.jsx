import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 12 } },
};

const Hero3D = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Intro">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-950/90" />

      {/* Floating sparkle accent */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
          <Sparkles className="h-4 w-4 text-fuchsia-300" />
          <span>Futuristic • Immersive • Hypnotic</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow md:text-6xl"
        >
          Building Next‑Gen Experiences
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-4 max-w-3xl text-balance text-base text-white/80 md:text-lg"
        >
          Full‑stack engineering, AI/ML, and cloud craftsmanship. I craft high‑performance apps and immersive UIs that feel alive.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            onClick={() => scrollTo('projects')}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-fuchsia-600 to-indigo-500 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/30 transition hover:saturate-150"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.button>
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            onClick={() => scrollTo('experience')}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10"
          >
            Experience
          </motion.button>
        </motion.div>
      </motion.div>

      {/* bottom shimmer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero3D;
