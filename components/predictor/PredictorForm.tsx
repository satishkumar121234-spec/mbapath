"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

  interface PredictorFormProps {
  percentile: number;
  setPercentile: React.Dispatch<React.SetStateAction<number>>;
}

export default function PredictorForm({
  percentile,
  setPercentile,
}: PredictorFormProps) {

  return (
    <Card className="w-full max-w-5xl mx-auto mt-12 border-white/10 bg-slate-900/60 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-3xl text-white">
          Predict Your Chances
        </CardTitle>

        <p className="text-slate-400 mt-2">
          Fill in your profile to estimate your interview call probability.
        </p>
      </CardHeader>

      <CardContent>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <Label>CAT Year</Label>
            <Input placeholder="2026" />
          </div>

          <div>
            <Label>CAT Percentile</Label>
            <Input
              placeholder="98.42"
              value={percentile || ""}
              onChange={(e) =>
                 setPercentile(Number(e.target.value) || 0)
              }
            />
          </div>

          <div>
            <Label>Category</Label>
            <Input placeholder="General" />
          </div>

          <div>
            <Label>Gender</Label>
            <Input placeholder="Male / Female" />
          </div>

          <div>
            <Label>10th Percentage</Label>
            <Input placeholder="92" />
          </div>

          <div>
            <Label>12th Percentage</Label>
            <Input placeholder="88" />
          </div>

          <div>
            <Label>Graduation Percentage</Label>
            <Input placeholder="76" />
          </div>

          <div>
            <Label>Work Experience (Months)</Label>
            <Input placeholder="24" />
          </div>

        </div>

        <Button className="mt-8 w-full">
          Predict My Chances
        </Button>

      </CardContent>
    </Card>
  );
}