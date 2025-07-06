import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface ProfessionalInfoSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const ProfessionalInfoSection = ({ register, errors }: ProfessionalInfoSectionProps) => {
  return (
    <>
      {/* Experience */}
      <div>
        <Label htmlFor="experience" className="dark:text-white">
          Years of Experience
        </Label>
        <Input
          id="experience"
          type="number"
          {...register("experience", {
            required: "Experience is required",
          })}
        />
        {errors.experience && (
          <p className="text-red-500 text-sm">
            {String(errors.experience.message)}
          </p>
        )}
      </div>

      {/* Skills */}
      <div>
        <Label htmlFor="skills" className="dark:text-white">
          Skills
        </Label>
        <Input id="skills" {...register("skills")} />
      </div>

      {/* Portfolio */}
      <div>
        <Label htmlFor="portfolio" className="dark:text-white">
          Portfolio URL
        </Label>
        <Input id="portfolio" type="url" {...register("portfolio")} />
      </div>

      {/* Expected Salary */}
      <div>
        <Label htmlFor="expectedSalary" className="dark:text-white">
          Expected Salary (USD)
        </Label>
        <Input
          id="expectedSalary"
          type="number"
          {...register("expectedSalary")}
        />
      </div>

      {/* Availability */}
      <div>
        <Label htmlFor="availability" className="dark:text-white">
          Availability
        </Label>
        <Select {...register("availability")}>
          <SelectTrigger>
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="immediate">Immediate</SelectItem>
            <SelectItem value="2-weeks">2 Weeks</SelectItem>
            <SelectItem value="1-month">1 Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bio */}
      <div>
        <Label htmlFor="bio" className="dark:text-white">
          Short Bio
        </Label>
        <Textarea id="bio" rows={4} {...register("bio")} />
      </div>
    </>
  );
};

export default ProfessionalInfoSection;