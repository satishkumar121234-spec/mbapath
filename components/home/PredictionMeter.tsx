"use client";

import { motion } from "framer-motion";

type PredictionMeterProps = {
  percentile: number;
};

export default function PredictionMeter({
  percentile,
}: PredictionMeterProps) {
  const rotation = Math.min(Math.max(percentile, 0), 100) * 1.8 - 90;

  const getLabel = () => {
    if (percentile >= 99) return "Outstanding";
    if (percentile >= 97) return "Excellent";
    if (percentile >= 90) return "Very Good";
    if (percentile >= 80) return "Good";
    return "Needs Improvement";
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl shadow-2xl">

        <div className="text-center">
          <p className="text-cyan-400 font-medium tracking-wide uppercase">
            MBAPath Prediction Meter
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Estimated CAT Strength
          </h2>

          <p className="mt-3 text-slate-400">
            A visual estimate based on your CAT percentile.
          </p>
        </div>

        <div className="relative mt-16 flex justify-center">

          <div className="relative h-72 w-72">

            <div className="absolute inset-0 rounded-full border-[18px] border-slate-800" />

            <div
              className="absolute inset-0 rounded-full border-[18px] border-transparent"
              style={{
                borderTopColor: "#ef4444",
                borderRightColor: "#f59e0b",
                borderBottomColor: "#22c55e",
                transform: "rotate(-45deg)",
              }}
            />

            <motion.div
              animate={{
                rotate: rotation,
              }}
              transition={{
                duration: 1.4,
              }}
              className="absolute left-1/2 top-1/2 origin-bottom"
              style={{
                width: 4,
                height: 110,
                background: "white",
                transform: "translate(-50%, -100%)",
              }}
            />

            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

          </div>
        </div>

        <div className="mt-10 text-center">

          <div className="text-6xl font-bold text-white">
            {percentile.toFixed(2)}
          </div>

          <div className="mt-2 text-cyan-400 text-xl font-semibold">
            {getLabel()}
          </div>

        </div>

      </div>
    </section>
  );
}