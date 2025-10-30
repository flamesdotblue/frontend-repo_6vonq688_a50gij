import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  {
    role: 'Software Engineer Trainee',
    company: 'WISEWORK, Bangalore',
    period: 'Feb 2025 – Sep 2025',
    bullets: [
      'Integrated function‑calling with LLMs to execute backend operations from natural language.',
      'Enhanced C#/.NET Core services powering an AI HR assistant and real‑time SignalR features with manual JWT validation.',
      'Implemented strict sanity checks for dynamic SQL to prevent unauthorized operations.',
      'Built Qdrant vector DB setup to store/retrieve embeddings for RAG search; added resilient retry logic.',
      'Created a chat‑formatting pipeline for Gemini/OpenAI to ensure consistent UI rendering.',
    ],
  },
  {
    role: 'Cyber Security & Digital Forensics Intern',
    company: 'Cyber Secured India (CSI), Remote',
    period: 'Sep 2024 – Nov 2024',
    bullets: [
      'Investigated simulated attacks with Autopsy, FTK Imager, and Wireshark; boosted incident response.',
      'Hands‑on with OWASP Top 10, threat hunting, SIEM workflows, and MITRE ATT&CK.',
      'Completed 3‑hour CTF machine‑pwning challenge for certification.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-center gap-3">
        <div className="inline-flex rounded-lg bg-white/10 p-2 text-white"><Briefcase className="h-5 w-5" /></div>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Work Experience</h2>
      </div>

      <div className="space-y-6">
        {roles.map((r) => (
          <motion.div
            key={r.role}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 14 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur"
          >
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-medium text-white">{r.role}</h3>
                <p className="text-white/70">{r.company}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">{r.period}</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4 }}
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <h4 className="text-white">Certifications</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
            <li>AWS Prompt Engineering — AWS Skill Builder</li>
            <li>Google AI Essentials — Coursera</li>
            <li>Google Cybersecurity Specialization — Coursera</li>
            <li>EC‑Council SQL Injection — EC‑Council</li>
            <li>SWAYAM Soft Skills — NPTEL</li>
            <li>Cyber Security & Digital Forensics — CSI</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <h4 className="text-white">Education</h4>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            <li>B.E. Computer Science — Nitte Meenakshi Institute of Technology (2021–2025) • CGPA 8.18/10</li>
            <li>PUC — Sri Sathya Sai Loka Seva PU College (2021) • 94.5%</li>
            <li>SSLC — Sri Sathya Sai Loka Seva Vidya Kendra (2019) • 90.2%</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
