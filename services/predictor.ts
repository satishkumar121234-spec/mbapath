import { colleges } from "@/constants/colleges";
import {
  PredictorInput,
  PredictorResult,
  CollegePrediction,
  PredictionCategory,
} from "@/types/predictor";

function classifyCollege(
  userPercentile: number,
  dream: number,
  target: number,
  safe: number
): PredictionCategory | null {
  if (userPercentile >= dream) return "Dream";
  if (userPercentile >= target) return "Target";
  if (userPercentile >= safe) return "Safe";
  return null;
}

function calculateProbability(
  userPercentile: number,
  threshold: number
): number {
  const diff = userPercentile - threshold;

  if (diff >= 3) return 95;
  if (diff >= 2) return 85;
  if (diff >= 1) return 72;
  if (diff >= 0.5) return 58;
  if (diff >= 0) return 42;
  if (diff >= -0.5) return 28;
  if (diff >= -1) return 16;
  return 5;
}

function buildPredictions(percentile: number): CollegePrediction[] {
  return colleges
    .map((college) => {
      const thresholds = college.percentile.general;

      const category = classifyCollege(
        percentile,
        thresholds.dream,
        thresholds.target,
        thresholds.safe
      );

      if (!category) return null;

      const threshold =
        category === "Dream"
          ? thresholds.dream
          : category === "Target"
          ? thresholds.target
          : thresholds.safe;

      return {
        college: college.name,
        probability: calculateProbability(percentile, threshold),
        category,
      };
    })
    .filter((college): college is CollegePrediction => college !== null)
    .sort((a, b) => b.probability - a.probability);
}

export function predictProfile(
  input: PredictorInput
): PredictorResult {
  const explanation: string[] = [];

  // Percentile explanation
  if (input.percentile >= 99) {
    explanation.push(
      "Exceptional CAT percentile for top IIM consideration."
    );
  } else if (input.percentile >= 95) {
    explanation.push(
      "Strong CAT percentile for many Tier-1 MBA programs."
    );
  } else if (input.percentile >= 85) {
    explanation.push(
      "Competitive CAT percentile for several good MBA colleges."
    );
  } else {
    explanation.push(
      "CAT percentile is below the typical range for older IIMs."
    );
  }

  // Work experience explanation
  if (input.workExperience >= 24) {
    explanation.push(
      "Meaningful work experience strengthens your profile."
    );
  } else if (input.workExperience >= 12) {
    explanation.push(
      "Some work experience adds value to your application."
    );
  } else {
    explanation.push(
      "Limited work experience may reduce profile competitiveness."
    );
  }

  // Academic explanation
  const academicAverage =
    (input.class10 + input.class12 + input.graduation) / 3;

  if (academicAverage >= 85) {
    explanation.push(
      "Strong academic consistency across all stages."
    );
  } else if (academicAverage >= 75) {
    explanation.push(
      "Academics are reasonably competitive."
    );
  } else {
    explanation.push(
      "Academic profile is below the average for highly selective programs."
    );
  }

  // Confidence score
  let confidence = 60;

  confidence += Math.min(
    20,
    Math.floor((input.percentile - 80) / 1.5)
  );

  confidence += Math.min(
    10,
    Math.floor(input.workExperience / 6)
  );

  confidence += Math.min(
    10,
    Math.floor((academicAverage - 70) / 3)
  );

  confidence = Math.max(40, Math.min(95, confidence));

  return {
    confidence,
    predictions: buildPredictions(input.percentile),
    explanation,
  };
}