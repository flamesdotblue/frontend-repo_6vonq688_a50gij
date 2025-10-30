import React from 'react';
import { Rocket, Sparkles, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'WiseONE — AI‑Driven HRMS Platform',
    icon: Rocket,
    summary:
      'Built spotlight‑search across data, core conversational AI with secure function‑calling, and rigorous query validation for safe operations. Enabled personalized, real‑time responses by propagating auth context.',
    stack: ['C#', 'LLMs', 'RAG', 'Qdrant', 'JWT', 'SignalR'],
  },
  {
    title: 'Wise Maestro — Enterprise AI Knowledge Platform',
    icon: Sparkles,
    summary:
      'Multi‑model RAG with Gemini + OpenAI, improved Qdrant schema, resilient chat formatting, and robust retry logic for rate‑limited, long‑running tasks.',
    stack: ['C#', 'Gemini', 'OpenAI', 'Qdrant', 'RAG'],
  },
  {
    title: 'Adaptive Security Operations Center',
    icon: Workflow,
    summary:
      'Automated detection pipelines integrating Wazuh and VirusTotal, deployed on major clouds, orchestrated via Shuffle for streamlined alert workflows.',
    stack: ['Firewall', 'Linux', 'Wazuh', 'Shuffle', 'Cloud'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Highlighted Projects</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ title, icon: Icon, summary, stack }, idx) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: idx * 0.05, type: 'spring', stiffness: 90, damping: 14 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30" />
            <div className="relative z-10">
              <div className="mb-3 inline-flex rounded-lg bg-white/10 p-2 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-white">{title}</h3>
              <p className="mt-2 text-white/80">{summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {/* shine */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -inset-x-10 -inset-y-10 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
