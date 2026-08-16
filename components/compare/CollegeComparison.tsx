import { colleges } from "@/constants/colleges";

interface CollegeComparisonProps {
  firstCollegeId: string;
  secondCollegeId: string;
}

export default function CollegeComparison({
  firstCollegeId,
  secondCollegeId,
}: CollegeComparisonProps) {
  const first = colleges.find((c) => c.id === firstCollegeId);
  const second = colleges.find((c) => c.id === secondCollegeId);

  if (!first || !second) {
    return null;
  }

  return (
    <section className="mx-auto mt-12 w-full max-w-5xl rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        College Comparison
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {[first, second].map((college) => (
          <div
            key={college.id}
            className="rounded-xl border border-white/10 bg-slate-950/60 p-5"
          >
            <h3 className="text-xl font-semibold text-white">
              {college.name}
            </h3>

            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <div>
                <span className="font-medium text-slate-200">Type:</span>{" "}
                {college.type}
              </div>

              <div>
                <span className="font-medium text-slate-200">Tier:</span>{" "}
                {college.tier}
              </div>

              <div>
                <span className="font-medium text-slate-200">Dream:</span>{" "}
                {college.percentile.general.dream}%
              </div>

              <div>
                <span className="font-medium text-slate-200">Target:</span>{" "}
                {college.percentile.general.target}%
              </div>

              <div>
                <span className="font-medium text-slate-200">Safe:</span>{" "}
                {college.percentile.general.safe}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}