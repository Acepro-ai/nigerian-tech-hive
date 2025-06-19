import Layout from "@/components/Layout";
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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FileText, Users, Briefcase, Star, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "./../libs/users";

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
};

const JobSeekers = () => {
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
    mutate({ ...data, avatar: data.avatar[0] });
  };
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   location: "",
  //   experience: "",
  //   skills: "",
  //   portfolio: "",
  //   expectedSalary: "",
  //   availability: "",
  //   bio: "",
  //   plan: "free"
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast({
  //     title: "Application Submitted!",
  //     description: "We'll review your profile and get back to you soon.",
  //   });
  //   console.log("Form submitted:", formData);
  // };

  // const handleInputChange = (field: string, value: string) => {
  //   setFormData(prev => ({ ...prev, [field]: value }));
  // };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join Nigeria's Top Tech Talent Network
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Register with MarvelRecruit and connect with global opportunities.
              We match skilled Nigerian professionals with top companies
              worldwide.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Briefcase className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  Global Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access remote and on-site positions with international
                  companies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  Expert Matching
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team personally matches your skills with the right
                  opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  Career Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get support and guidance to advance your career globally
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Registration Plan Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Registration Plan
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                To get the most out of our candidate-first services, choose the
                plan that best suits your current needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Plan */}
              <Card className="relative">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Free
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get started with essential features
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Free membership
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Talent shortlist
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Learning articles
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative border-red-200 border-2">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Premium
                  </CardTitle>
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    $100
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Everything in Free plus exclusive features
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Free membership
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Talent shortlist
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Learning articles
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Consultancy meetings
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Resume review
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Registration Form */}
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

                {/* Avatar Upload */}
                <div>
                  <Label htmlFor="avatar" className="dark:text-white">
                    Upload Profile Picture
                  </Label>
                  <Input
                    type="file"
                    id="avatar"
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

                {/* Submit Button */}
                <div className="text-right">
                  <Button type="submit" disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default JobSeekers;
