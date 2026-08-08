import CollegeCard from "./CollegeCard";
import ConfidenceBadge from "./ConfidenceBadge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PredictorResult } from "@/types/predictor";

interface PredictionResultsProps {
  result: PredictorResult;
}

export default function PredictionResults({
  result,
}: PredictionResultsProps) {
  const dream = result.predictions.filter(
    (college) => college.category === "Dream"
  );

  const target = result.predictions.filter(
    (college) => college.category === "Target"
  );

  const safe = result.predictions.filter(
    (college) => college.category === "Safe"
  );

  return (
    <Card className="mx-auto mt-12 w-full max-w-5xl">
      <CardHeader>
        <CardTitle>Prediction Results</CardTitle>

        <ConfidenceBadge confidence={result.confidence} />
      </CardHeader>

      <CardContent className="space-y-10">

        <section>
          <h2 className="mb-4 text-xl font-bold">
            Dream Colleges
          </h2>

          <div className="space-y-4">
            {dream.map((college) => (
              <CollegeCard
                key={college.college}
                {...college}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold">
            Target Colleges
          </h2>

          <div className="space-y-4">
            {target.map((college) => (
              <CollegeCard
                key={college.college}
                {...college}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold">
            Safe Colleges
          </h2>

          <div className="space-y-4">
            {safe.map((college) => (
              <CollegeCard
                key={college.college}
                {...college}
              />
            ))}
          </div>
        </section>
<section>
  <h2 className="mb-4 text-xl font-bold">
    Why MBAPath Predicted This
  </h2>

  <ul className="space-y-2 text-sm text-muted-foreground">
    {result.explanation.map((item, index) => (
      <li key={index} className="flex gap-2">
        <span className="text-cyan-400">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</section>
      </CardContent>
    </Card>
  );
}