import { PredictorResult } from "@/types/predictor";

export const mockPrediction: PredictorResult = {
  confidence: 82,

  predictions: [
    {
      college: "IIM Ahmedabad",
      probability: 18,
      category: "Dream",
    },
    {
      college: "IIM Bangalore",
      probability: 24,
      category: "Dream",
    },
    {
      college: "IIM Lucknow",
      probability: 74,
      category: "Target",
    },
    {
      college: "IIM Kozhikode",
      probability: 79,
      category: "Target",
    },
    {
      college: "MDI Gurgaon",
      probability: 95,
      category: "Safe",
    },
    {
      college: "IIFT Delhi",
      probability: 92,
      category: "Safe",
    },
  ],

  explanation: [
    "Excellent CAT percentile.",
    "Good work experience.",
    "Average academic profile.",
  ],
};