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

  const [result, setResult] = useState(() => predictProfile(profile));
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

      <PredictionResults result={result} />

      <Stats />

      <Footer />
    </main>
  );
}