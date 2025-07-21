import React from "react";
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

const ProfessionalInfoSection = ({
  register,
  errors,
}: ProfessionalInfoSectionProps) => {
  return (
    <>
      {/* Professional Title */}
      <div>
        <Label htmlFor="title" className="dark:text-white">
          Professional Title
        </Label>
        <Input
          id="title"
          {...register("title", {
            required: "Title is required",
          })}
          placeholder="e.g. Frontend Developer"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{String(errors.title.message)}</p>
        )}
      </div>

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

      {/* Hourly Rate */}
      <div>
        <Label htmlFor="hourlyRate" className="dark:text-white">
          Hourly Rate (USD)
        </Label>
        <Input id="hourlyRate" type="number" {...register("hourlyRate")} />
      </div>

      {/* Skills */}
      <div>
        <Label htmlFor="skillsInput" className="dark:text-white">
          Skills (separate with spaces or commas)
        </Label>
        <Input
          id="skillsInput"
          {...register("skillsInput", {
            required: "Skills are required",
            validate: (value) => {
              const skills = value
                .split(/\s*[, ]\s*/)
                .filter((skill) => skill.trim() !== "");
              return skills.length > 0 || "Please enter at least one skill";
            },
          })}
          placeholder="e.g. JavaScript React CSS or JavaScript, React, CSS"
        />
        {errors.skillsInput && (
          <p className="text-red-500 text-sm">
            {String(errors.skillsInput.message)}
          </p>
        )}
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
