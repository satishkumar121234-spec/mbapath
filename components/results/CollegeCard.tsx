import { Card, CardContent } from "@/components/ui/card";

interface CollegeCardProps {
  college: string;
  probability: number;
  category: "Dream" | "Target" | "Safe";
}

const categoryStyles = {
  Dream:
    "border-red-500/30 bg-red-500/10 text-red-300",
  Target:
    "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  Safe:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
};

export default function CollegeCard({
  college,
  probability,
  category,
}: CollegeCardProps) {
  return (
    <Card className="border-border bg-card transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardContent className="flex items-center justify-between p-5">

        <div>
          <h3 className="text-lg font-semibold">
            {college}
          </h3>

          <span
            className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${categoryStyles[category]}`}
          >
            {category}
          </span>
        </div>

        <div className="text-right">
          <div className="text-3xl font-bold">
            {probability}%
          </div>

          <p className="text-sm text-muted-foreground">
            Interview Chance
          </p>
        </div>

      </CardContent>
    </Card>
  );
}