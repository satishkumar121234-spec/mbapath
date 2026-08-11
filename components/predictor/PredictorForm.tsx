"use client";

import { PredictorInput } from "@/types/predictor";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
interface PredictorFormProps {
  profile: PredictorInput;
  setProfile: React.Dispatch<React.SetStateAction<PredictorInput>>;
  onPredict: () => void;
  isPredicting: boolean;
}

export default function PredictorForm({
  profile,
  setProfile,
  onPredict,
  isPredicting,
}: PredictorFormProps) {
  const [error, setError] = useState("");
    const updateField = <K extends keyof PredictorInput>(
    field: K,
    value: PredictorInput[K]
  ) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
   const validateForm = () => {
  if (profile.percentile < 0 || profile.percentile > 100) {
    return "CAT percentile must be between 0 and 100.";
  }

  if (profile.class10 < 0 || profile.class10 > 100) {
    return "10th percentage must be between 0 and 100.";
  }

  if (profile.class12 < 0 || profile.class12 > 100) {
    return "12th percentage must be between 0 and 100.";
  }

  if (profile.graduation < 0 || profile.graduation > 100) {
    return "Graduation percentage must be between 0 and 100.";
  }

  if (profile.workExperience < 0) {
    return "Work experience cannot be negative.";
  }

  return "";
};
  return (
    <Card className="mx-auto mt-12 w-full max-w-5xl border-border bg-card">
      <CardHeader>
        <CardTitle className="text-3xl">
          Predict Your Chances
        </CardTitle>

        <p className="text-muted-foreground mt-2">
          Fill in your profile to estimate your MBA interview call probability.
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <Label>CAT Year</Label>

            <Select
              value={String(profile.catYear)}
              onValueChange={(value) =>
                updateField("catYear", Number(value))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select CAT year" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
              </SelectContent>
           </Select>
          </div>

          <div>
            <Label htmlFor="percentile">CAT Percentile</Label>

            <Input
              id="percentile"
              type="number"
              step="0.01"
              value={profile.percentile}
              onChange={(e) =>
                updateField("percentile", Number(e.target.value))
              }
            />
          </div>

          <div>
             <Label>Category</Label>

            <Select
              value={profile.category}
              onValueChange={(value) =>
                updateField("category", value as PredictorInput["category"])
             }
            >
             <SelectTrigger>
               <SelectValue placeholder="Select category" />
             </SelectTrigger>

             <SelectContent>
               <SelectItem value="General">General</SelectItem>
               <SelectItem value="EWS">EWS</SelectItem>
               <SelectItem value="NC-OBC">NC-OBC</SelectItem>
               <SelectItem value="SC">SC</SelectItem>
               <SelectItem value="ST">ST</SelectItem>
               <SelectItem value="PwD">PwD</SelectItem>
             </SelectContent>
           </Select>
          </div>

         <div>
           <Label>Gender</Label>

           <Select
              value={profile.gender}
              onValueChange={(value) =>
                updateField("gender", value as PredictorInput["gender"])
              }
            >
             <SelectTrigger>
               <SelectValue placeholder="Select gender" />
             </SelectTrigger>

             <SelectContent>
               <SelectItem value="Male">Male</SelectItem>
               <SelectItem value="Female">Female</SelectItem>
               <SelectItem value="Other">Other</SelectItem>
             </SelectContent>
           </Select>
         </div>

          <div>
            <Label htmlFor="class10">10th Percentage</Label>

            <Input
              id="class10"
              type="number"
              value={profile.class10}
              onChange={(e) =>
                updateField("class10", Number(e.target.value))
              }
            />
          </div>

          <div>
            <Label htmlFor="class12">12th Percentage</Label>

            <Input
              id="class12"
              type="number"
              value={profile.class12}
              onChange={(e) =>
                updateField("class12", Number(e.target.value))
              }
            />
          </div>

          <div>
            <Label htmlFor="graduation">Graduation Percentage</Label>

            <Input
              id="graduation"
              type="number"
              value={profile.graduation}
              onChange={(e) =>
                updateField("graduation", Number(e.target.value))
              }
            />
          </div>

          <div>
            <Label htmlFor="workExperience">
              Work Experience (Months)
            </Label>

            <Input
              id="workExperience"
              type="number"
              value={profile.workExperience}
              onChange={(e) =>
                updateField("workExperience", Number(e.target.value))
              }
            />
          </div>

        </div>

      <Button
        className="mt-8 w-full"
        disabled={isPredicting}
        onClick={() => {
          const validationError = validateForm();

          if (validationError) {
            setError(validationError);
            return;
          }

          setError("");
          onPredict();
        }}
       >
        {isPredicting ? "Predicting..." : "Predict My Chances"}
       </Button>
       {error && (
         <p className="mt-3 text-sm text-red-400">
            {error}
         </p>
       )}
      </CardContent>
    </Card>
  );
}