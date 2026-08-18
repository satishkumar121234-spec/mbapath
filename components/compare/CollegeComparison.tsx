"use client";

import { useState } from "react";
import { colleges } from "@/constants/colleges";
import { PredictorResult } from "@/types/predictor";

interface CollegeComparisonProps {
  result: PredictorResult;
}

export default function CollegeComparison({
  result,
}: CollegeComparisonProps) {
  const [firstCollegeId, setFirstCollegeId] = useState(
    colleges[0]?.id ?? ""
  );

  const [secondCollegeId, setSecondCollegeId] = useState(
    colleges[1]?.id ?? ""
  );

  const firstCollege = colleges.find(
    (college) => college.id === firstCollegeId
  );

  const secondCollege = colleges.find(
    (college) => college.id === secondCollegeId
  );

  const firstPrediction = result.predictions.find(
    (prediction) => prediction.college === firstCollege?.name
  );

  const secondPrediction = result.predictions.find(
    (prediction) => prediction.college === secondCollege?.name
  );

  return (
    <section className="mx-auto mt-12 w-full max-w-5xl rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl sm:p-6">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-cyan-400">
          Compare
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          Compare MBA Colleges
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Compare your predicted chances across two institutes.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="first-college"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            College 1
          </label>

          <select
            id="first-college"
            value={firstCollegeId}
            onChange={(event) => setFirstCollegeId(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
          >
            {colleges.map((college) => (
              <option key={college.id} value={college.id}>
                {college.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="second-college"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            College 2
          </label>

          <select
            id="second-college"
            value={secondCollegeId}
            onChange={(event) => setSecondCollegeId(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
          >
            {colleges.map((college) => (
              <option key={college.id} value={college.id}>
                {college.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[firstCollege, secondCollege].map((college, index) => {
          if (!college) return null;

          const prediction =
            index === 0 ? firstPrediction : secondPrediction;

          return (
            <div
              key={college.id}
              className="rounded-xl border border-white/10 bg-slate-950/60 p-5"
            >
              <h3 className="text-xl font-semibold text-white">
                {college.name}
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Type</span>
                  <span className="text-white">{college.type}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Tier</span>
                  <span className="text-white">{college.tier}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Your estimated chance
                  </span>

                  <span className="font-semibold text-cyan-400">
                    {prediction
                      ? `${prediction.probability}%`
                      : "Below current range"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Recommendation
                  </span>

                  <span className="font-medium text-white">
                    {prediction?.category ?? "Not recommended"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}