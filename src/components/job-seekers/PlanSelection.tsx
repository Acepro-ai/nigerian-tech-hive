import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";

const PlanSelection = () => {
  const { setValue, watch } = useFormContext();
  const currentPlan = watch("plan");

  return (
    <div className="mb-6">
      <Label className="text-lg font-medium dark:text-white">
        Choose Your Plan
      </Label>
      <RadioGroup
        value={currentPlan}
        className="flex flex-col space-y-3 mt-3"
        onValueChange={(value: "free" | "premium") => {
          setValue("plan", value, { shouldValidate: true });
        }}
      >
        <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent">
          <RadioGroupItem value="free" id="free-plan" />
          <Label htmlFor="free-plan" className="flex-1 dark:text-white">
            <div className="font-medium">Free Plan</div>
            <div className="text-sm text-muted-foreground">
              Basic profile listing
            </div>
          </Label>
        </div>
        <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent bg-primary/5">
          <RadioGroupItem value="premium" id="premium-plan" />
          <Label htmlFor="premium-plan" className="flex-1 dark:text-white">
            <div className="font-medium">Premium Plan</div>
            <div className="text-sm text-muted-foreground">
              Priority visibility + advanced features
            </div>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PlanSelection;
