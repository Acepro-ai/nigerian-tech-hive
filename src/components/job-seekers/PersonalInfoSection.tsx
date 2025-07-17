import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

const PersonalInfoSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium dark:text-white">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <p className="text-sm text-red-500">
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">
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
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">
              {String(errors.phone.message)}
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location" className="dark:text-white">
            Location
          </Label>
          <Input
            id="location"
            {...register("location", {
              required: "Location is required",
            })}
          />
          {errors.location && (
            <p className="text-sm text-red-500">
              {String(errors.location.message)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
