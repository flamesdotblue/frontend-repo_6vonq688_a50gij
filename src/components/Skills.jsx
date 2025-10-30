import React from 'react';
import { Code, Brain, Database, Cloud, Shield, GitBranch, Palette } from 'lucide-react';

const skills = [
  {
    title: 'Programming Languages',
    icon: Code,
    items: ['C', 'C++', 'C#', 'Python', 'JavaScript', 'Java'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'AI / ML',
    icon: Brain,
    items: ['ML Models', 'LLMs', 'Deep Learning', 'NLP', 'RAG'],
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Data & Tools',
    icon: Database,
    items: ['Pandas', 'NumPy', 'scikit-learn', 'Jupyter'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: ['AWS', 'DigitalOcean', 'CI/CD', 'GitHub Actions'],
    color: 'from-cyan-500 to-sky-500',
  },
  {
    title: 'APIs & Testing',
    icon: GitBranch,
    items: ['REST', 'Swagger', 'Postman', 'Unit Testing'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Security & UI',
    icon: Shield,
    items: ['Cyber Security', 'Linux/Unix', 'MudBlazor', 'CSS'],
    color: 'from-violet-500 to-purple-500',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Skills Snapshot</h2>
          <p className="mt-2 text-white/70">A blend of full‑stack, AI/ML, and cloud capabilities.</p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon: Icon, items, color }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-30 blur-2xl`} />
            <div className="relative z-10">
              <div className="mb-3 inline-flex rounded-lg bg-white/10 p-2 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
