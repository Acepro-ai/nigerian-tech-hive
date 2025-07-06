
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { createUser } from "../../libs/users";

type JobSeekerFormData = {
  plan: string;
  availability: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  skills: string;
  portfolio: string;
  expectedSalary: string;
  bio: string;
  avatar: FileList;
  cv: FileList;
};

const JobSeekersForm = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobSeekerFormData>({
    defaultValues: {
      plan: "free",
      availability: "immediate",
    },
  });
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: (newUser) => createUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast({
        title: "Candidate successfully registered!",
        description: "Your profile has been submitted.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data) => {
    // If premium plan is selected, redirect to Paystack
    if (data.plan === 'premium') {
      // Save user data first with premium status
      mutate({ 
        ...data, 
        avatar: data.avatar[0], 
        cv: data.cv[0], 
        premium: true 
      });
      
      // Redirect to Paystack payment link
      setTimeout(() => {
        window.open('https://paystack.shop/pay/n6i4e47xjf', '_blank');
      }, 1000); // Small delay to ensure data is saved
      
      return;
    }
    
    // For free plan, save normally
    mutate({ 
      ...data, 
      avatar: data.avatar[0], 
      cv: data.cv[0], 
      premium: false 
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl dark:text-white">
          <FileText className="mr-3 h-6 w-6 text-red-600" />
          Register Your Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Plan Selection */}
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
                {errors.fullName.message}
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
                {errors.email.message}
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
                {errors.phone.message}
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
                {errors.experience.message}
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

          {/* File Upload Section */}
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
                  {errors.avatar.message}
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
                  {errors.cv.message}
                </p>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <Button type="submit" disabled={isPending} className="px-8 py-3 text-lg">
              {isPending ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default JobSeekersForm;
