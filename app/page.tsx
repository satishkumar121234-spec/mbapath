import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import PredictionMeter from "@/components/home/PredictionMeter";
import Stats from "@/components/home/Stats";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <PredictionMeter percentile={98.42} />
      <Stats />
      <Footer />
    </main>
  );
}