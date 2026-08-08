import { mockPrediction } from "@/data/mockPrediction";
import { PredictorInput, PredictorResult } from "@/types/predictor";

export function predictProfile(
  input: PredictorInput
): PredictorResult {
  const explanation: string[] = [];

  // Percentile rules
  if (input.percentile >= 99) {
    explanation.push("Exceptional CAT percentile for top IIM consideration.");
  } else if (input.percentile >= 95) {
    explanation.push("Strong CAT percentile for many Tier-1 MBA programs.");
  } else if (input.percentile >= 85) {
    explanation.push("Competitive CAT percentile for several good MBA colleges.");
  } else {
    explanation.push("CAT percentile is below the typical range for older IIMs.");
  }

  // Work experience rules
  if (input.workExperience >= 24) {
    explanation.push("Meaningful work experience strengthens your profile.");
  } else if (input.workExperience >= 12) {
    explanation.push("Some work experience adds value to your application.");
  } else {
    explanation.push("Limited work experience may reduce profile competitiveness.");
  }

  // Academic rules
  const academicAverage =
    (input.class10 + input.class12 + input.graduation) / 3;

  if (academicAverage >= 85) {
    explanation.push("Strong academic consistency across all stages.");
  } else if (academicAverage >= 75) {
    explanation.push("Academics are reasonably competitive.");
  } else {
    explanation.push("Academic profile is below the average for highly selective programs.");
  }

  // Confidence score
  let confidence = 60;

  confidence += Math.min(20, Math.floor((input.percentile - 80) / 1.5));
  confidence += Math.min(10, Math.floor(input.workExperience / 6));
  confidence += Math.min(10, Math.floor((academicAverage - 70) / 3));

  confidence = Math.max(40, Math.min(95, confidence));

  return {
    ...mockPrediction,
    confidence,
    explanation,
  };
}