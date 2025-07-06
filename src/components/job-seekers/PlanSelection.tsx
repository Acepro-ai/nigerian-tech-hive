import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormRegister } from "react-hook-form";

interface PlanSelectionProps {
  register: UseFormRegister<any>;
}

const PlanSelection = ({ register }: PlanSelectionProps) => {
  return (
    <div>
      <Label className="dark:text-white">Choose Your Plan</Label>
      <RadioGroup
        defaultValue="free"
        className="flex flex-col space-y-2 mt-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="free"
            id="free-plan"
            {...register("plan")}
          />
          <Label htmlFor="free-plan" className="dark:text-white">
            Free Plan
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="premium"
            id="premium-plan"
            {...register("plan")}
          />
          <Label htmlFor="premium-plan" className="dark:text-white">
            Premium Plan
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PlanSelection;