import React, { useMemo, useState } from 'react';
import { Mail, Github, Linkedin, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`);
    return `mailto:your@email.com?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Let’s Build Something Iconic</h2>
          <p className="mt-2 text-white/70">Brief me on the vision — I’ll engineer the experience.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 14 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 blur-2xl" />
          <div className="relative z-10 grid gap-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <motion.input
                whileFocus={{ boxShadow: '0 0 0 3px rgba(168,85,247,0.35)' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Satoshi Nakamoto"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <motion.input
                whileFocus={{ boxShadow: '0 0 0 3px rgba(99,102,241,0.35)' }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@domain.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <motion.textarea
                whileFocus={{ boxShadow: '0 0 0 3px rgba(14,165,233,0.35)' }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell me about the challenge, timeline, and goals."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 outline-none"
              />
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-fuchsia-600 to-indigo-500 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/30 transition hover:saturate-150"
            >
              Send it
              <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.08, type: 'spring', stiffness: 90, damping: 14 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur"
        >
          <div className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-b-[80px] bg-gradient-to-b from-indigo-500/30 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-lg font-medium text-white">Prefer shortcuts?</h3>
            <p className="mt-2 text-white/80">I’m active on these platforms — let’s connect.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:your@email.com"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
