import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Upload } from "lucide-react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface FileUploadSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const FileUploadSection = ({ register, errors }: FileUploadSectionProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Avatar Upload */}
      <div className="space-y-2">
        <Label htmlFor="avatar" className="dark:text-white flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload Profile Picture
        </Label>
        <Input
          type="file"
          id="avatar"
          accept="image/*"
          className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-600 hover:file:bg-red-100"
          {...register("avatar", {
            required: "Profile picture is required",
          })}
        />
        {errors.avatar && (
          <p className="text-red-500 text-sm">
            {String(errors.avatar.message)}
          </p>
        )}
      </div>

      {/* CV Upload */}
      <div className="space-y-2">
        <Label htmlFor="cv" className="dark:text-white flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Upload CV/Resume
        </Label>
        <Input
          type="file"
          id="cv"
          accept=".pdf,.doc,.docx"
          className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
          {...register("cv", {
            required: "CV/Resume is required",
          })}
        />
        {errors.cv && (
          <p className="text-red-500 text-sm">
            {String(errors.cv.message)}
          </p>
        )}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
        </p>
      </div>
    </div>
  );
};

export default FileUploadSection;