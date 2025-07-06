import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface PersonalInfoSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const PersonalInfoSection = ({ register, errors }: PersonalInfoSectionProps) => {
  return (
    <>
      {/* Full Name */}
      <div>
        <Label htmlFor="fullName" className="dark:text-white">
          Full Name
        </Label>
        <Input
          id="fullName"
          {...register("fullName", {
            required: "Full name is required",
          })}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">
            {String(errors.fullName.message)}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="dark:text-white">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">
            {String(errors.email.message)}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="dark:text-white">
          Phone Number
        </Label>
        <Input
          id="phone"
          {...register("phone", { required: "Phone is required" })}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">
            {String(errors.phone.message)}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <Label htmlFor="location" className="dark:text-white">
          Location
        </Label>
        <Input id="location" {...register("location")} />
      </div>
    </>
  );
};

export default PersonalInfoSection;