export type Category =
  | "General"
  | "EWS"
  | "NC-OBC"
  | "SC"
  | "ST"
  | "PwD";

export type Gender =
  | "Male"
  | "Female"
  | "Other";

export type PredictionCategory =
  | "Dream"
  | "Target"
  | "Safe";

export interface PredictorInput {
  catYear: number;
  percentile: number;

  category: Category;
  gender: Gender;

  class10: number;
  class12: number;
  graduation: number;

  workExperience: number;
}

export interface CollegePrediction {
  college: string;
  probability: number;
  category: PredictionCategory;
}

export interface PredictorResult {
  confidence: number;
  predictions: CollegePrediction[];
  explanation: string[];
}