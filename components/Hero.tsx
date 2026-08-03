"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_right,rgba(99,102,241,0.16),transparent_30%),linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,1))]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
          >
            Sprint 1 • Module 1 • MBA admissions platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Build a smarter MBA application strategy with one focused workspace.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
          >
            MBAPath helps applicants organize target schools, track deadlines,
            refine their story, and make every round of the application process
            more deliberate and measurable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#admissions"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Start planning
            </Link>
            <Link
              href="#resources"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore resources
            </Link>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
            <div>
              <span className="block text-white">12+</span>
              Schools tracked
            </div>
            <div>
              <span className="block text-white">4 rounds</span>
              Application planning
            </div>
            <div>
              <span className="block text-white">100%</span>
              Focused workflow
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">Current focus</div>
                  <div className="mt-1 text-xl font-semibold text-white">
                    Round 1 application board
                  </div>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  On track
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  {
                    school: "ISB Hyderabad",
                    status: "Essay draft in review",
                    progress: "82%",
                  },
                  {
                    school: "IIM Ahmedabad",
                    status: "Recommendations requested",
                    progress: "64%",
                  },
                  {
                    school: "XLRI Jamshedpur",
                    status: "Deadline in 14 days",
                    progress: "48%",
                  },
                ].map((item) => (
                  <div
                    key={item.school}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-medium text-white">{item.school}</div>
                        <div className="text-sm text-slate-400">
                          {item.status}
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-cyan-300">
                        {item.progress}
                      </div>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
                        style={{ width: item.progress }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}