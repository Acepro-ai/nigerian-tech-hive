import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { createUser } from "../../libs/users";
import PlanSelection from "./PlanSelection";
import PersonalInfoSection from "./PersonalInfoSection";
import ProfessionalInfoSection from "./ProfessionalInfoSection";
import FileUploadSection from "./FileUploadSection";
import PaymentModal from "./PaymentModal";

type JobSeekerFormData = {
  plan: "free" | "premium";
  availability: string;
  fullName: string;
  title: string; 
  email: string;
  phone: string;
  location: string;
  experience: string;
  hourlyRate: string; 
  skillsInput: string;
  portfolio: string;
  expectedSalary: string;
  bio: string;
  avatar: FileList;
  cv: FileList;
};

const JobSeekersForm = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [tempUserData, setTempUserData] = useState<
    (Omit<JobSeekerFormData, "skillsInput"> & { skills: string[] }) | null
  >(null);

  const methods = useForm<JobSeekerFormData>({
    defaultValues: {
      plan: "free",
      availability: "immediate",
      hourlyRate: "", 
    },
  });

  const { isPending, mutate } = useMutation({
    mutationFn: (newUser: any) => createUser(newUser),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast({
        title: variables.premium
          ? "Premium Activated!"
          : "Registration Complete",
        description: variables.premium
          ? "Your premium access is now active."
          : "Your profile has been submitted.",
      });
      methods.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    },
  });

  const formatSkills = (skillsString: string): string[] => {
    return skillsString
      .split(/\s*[, ]\s*/)
      .filter((skill) => skill.trim() !== "");
  };

  const onSubmit = (data: JobSeekerFormData) => {
    const formattedData = {
      ...data,
      skills: formatSkills(data.skillsInput),
      avatar: data.avatar[0],
      cv: data.cv[0],
      premium: data.plan === "premium",
    };

    if (data.plan === "premium") {
      setTempUserData(formattedData);
      setPaymentModalOpen(true);
      return;
    }

    mutate(formattedData);
  };

  const handlePaymentSuccess = () => {
    if (!tempUserData) return;
    mutate(tempUserData);
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
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
            <PlanSelection />
            <PersonalInfoSection />
            <ProfessionalInfoSection
              register={methods.register}
              errors={methods.formState.errors}
            />
            <FileUploadSection
              register={methods.register}
              errors={methods.formState.errors}
            />

            <div className="text-right">
              <Button
                type="submit"
                disabled={isPending}
                className="px-8 py-3 text-lg"
              >
                {isPending ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </FormProvider>

        <PaymentModal
          open={paymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          onPaymentSuccess={handlePaymentSuccess}
          userEmail={methods.watch("email")}
        />
      </CardContent>
    </Card>
  );
};

export default JobSeekersForm;
