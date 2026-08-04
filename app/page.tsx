"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import PredictorForm from "@/components/predictor/PredictorForm";
import PredictionMeter from "@/components/home/PredictionMeter";
import Stats from "@/components/home/Stats";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const [percentile, setPercentile] = useState(98.42);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <PredictorForm
      percentile={percentile}
      setPercentile={setPercentile}
       />
      <PredictionMeter percentile={percentile} />
      <Stats />
      <Footer />
    </main>
  );
}