"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "250+",
    label: "Schools can be tracked with structured application data.",
  },
  {
    value: "24/7",
    label: "Always available planning layer for deadlines and tasks.",
  },
  {
    value: "3x",
    label: "Clearer visibility across essays, tests, and recommendations.",
  },
  {
    value: "1 place",
    label: "Everything important for the MBA journey stays organized.",
  },
];

export default function Stats() {
  return (
    <section id="programs" className="border-t border-white/10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Built for applicants who want structure, not chaos.
          </h2>
          <p className="mt-4 text-slate-300">
            MBAPath is designed to keep your workflow disciplined from school
            shortlisting to final submission.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}