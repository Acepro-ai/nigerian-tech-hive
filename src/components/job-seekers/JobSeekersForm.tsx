
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { createUser } from "../../libs/users";
import PlanSelection from "./PlanSelection";
import PersonalInfoSection from "./PersonalInfoSection";
import ProfessionalInfoSection from "./ProfessionalInfoSection";
import FileUploadSection from "./FileUploadSection";

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
          <PlanSelection register={register} />
          
          <PersonalInfoSection register={register} errors={errors} />
          
          <ProfessionalInfoSection register={register} errors={errors} />
          
          <FileUploadSection register={register} errors={errors} />

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
