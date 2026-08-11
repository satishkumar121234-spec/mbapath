"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import PredictorForm from "@/components/predictor/PredictorForm";
import PredictionMeter from "@/components/home/PredictionMeter";
import PredictionResults from "@/components/results/PredictionResults";
import Stats from "@/components/home/Stats";
import Footer from "@/components/layout/Footer";

import { predictProfile } from "@/services/predictor";
import { PredictorInput } from "@/types/predictor";

export default function HomePage() {
  const [profile, setProfile] = useState<PredictorInput>({
    catYear: 2026,
    percentile: 98.42,
    category: "General",
    gender: "Male",
    class10: 90,
    class12: 88,
    graduation: 82,
    workExperience: 24,
  });

  const [result, setResult] = useState<ReturnType<typeof predictProfile> | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);

  const handlePredict = async () => {
    setIsPredicting(true);

    // Simulate prediction processing time
    await new Promise((resolve) => setTimeout(resolve, 800));

    const prediction = predictProfile(profile);
    setResult(prediction);

    setIsPredicting(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

     <PredictorForm
        profile={profile}
        setProfile={setProfile}
        onPredict={handlePredict}
        isPredicting={isPredicting}
     />

      <PredictionMeter percentile={profile.percentile} />

      {result ? (
        <PredictionResults result={result} />
      ) : (
        <section className="mx-auto mt-12 w-full max-w-5xl rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-2xl">
            🎯
          </div>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            No Prediction Yet
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Enter your CAT profile and click{" "}
            <span className="font-medium text-slate-200">
              Predict My Chances
            </span>{" "}
            to see your interview probability, confidence score, and recommended colleges.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
            <span className="rounded-full border border-white/10 px-3 py-1">
              Dream Colleges
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Target Colleges
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Safe Colleges
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Confidence Score
            </span>
          </div>
        </section>
      )}

      <Stats />

      <Footer />
    </main>
  );
}