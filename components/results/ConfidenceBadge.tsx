import { Badge } from "@/components/ui/badge";

interface ConfidenceBadgeProps {
  confidence: number;
}

export default function ConfidenceBadge({
  confidence,
}: ConfidenceBadgeProps) {
  const getVariant = () => {
    if (confidence >= 85) {
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    }

    if (confidence >= 70) {
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    }

    return "bg-red-500/10 text-red-400 border-red-500/20";
  };

  return (
    <Badge
      variant="outline"
      className={`px-4 py-2 text-sm font-semibold ${getVariant()}`}
    >
      Confidence Score: {confidence}%
    </Badge>
  );
}