import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FileText, Users, Briefcase, Star, Check } from "lucide-react";

const JobSeekers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    skills: "",
    portfolio: "",
    expectedSalary: "",
    availability: "",
    bio: "",
    plan: "free"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your profile and get back to you soon.",
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
              We match skilled Nigerian professionals with top companies worldwide.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Briefcase className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Global Opportunities</h3>
                <p className="text-gray-600 dark:text-gray-300">Access remote and on-site positions with international companies</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Expert Matching</h3>
                <p className="text-gray-600 dark:text-gray-300">Our team personally matches your skills with the right opportunities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Career Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">Get support and guidance to advance your career globally</p>
              </CardContent>
            </Card>
          </div>

          {/* Registration Plan Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Registration Plan</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                To get the most out of our candidate-first services, choose the plan that best suits your current needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Plan */}
              <Card className="relative">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Free</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">Get started with essential features</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Free membership</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Talent shortlist</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Learning articles</span>
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
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Premium</CardTitle>
                  <div className="text-3xl font-bold text-red-600 mb-2">$100</div>
                  <p className="text-gray-600 dark:text-gray-300">Everything in Free plus exclusive features</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Free membership</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Talent shortlist</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Learning articles</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Consultancy meetings</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Resume review</span>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Plan Selection */}
                <div>
                  <Label className="dark:text-white">Choose Your Plan</Label>
                  <RadioGroup 
                    value={formData.plan}
                    onValueChange={(value) => handleInputChange("plan", value)}
                    className="flex flex-col space-y-2 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="free" id="free-plan" />
                      <Label htmlFor="free-plan" className="dark:text-white">Free Plan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="premium" id="premium-plan" />
                      <Label htmlFor="premium-plan" className="dark:text-white">Premium Plan ($100)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="dark:text-white">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="dark:text-white">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="dark:text-white">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+234 xxx xxx xxxx"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location" className="dark:text-white">Current Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="City, State, Country"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience" className="dark:text-white">Years of Experience *</Label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800">
                      <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                      <SelectItem value="2-3">2-3 years (Junior)</SelectItem>
                      <SelectItem value="4-6">4-6 years (Mid-Level)</SelectItem>
                      <SelectItem value="7-10">7-10 years (Senior)</SelectItem>
                      <SelectItem value="10+">10+ years (Expert/Lead)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skills" className="dark:text-white">Key Skills & Technologies *</Label>
                  <Textarea
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => handleInputChange("skills", e.target.value)}
                    placeholder="List your main technical skills, programming languages, frameworks, tools, etc."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio" className="dark:text-white">Portfolio/GitHub/LinkedIn URL</Label>
                  <Input
                    id="portfolio"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange("portfolio", e.target.value)}
                    placeholder="https://github.com/yourusername or portfolio link"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="expectedSalary" className="dark:text-white">Expected Salary Range (USD)</Label>
                    <Select onValueChange={(value) => handleInputChange("expectedSalary", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select salary range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800">
                        <SelectItem value="20k-30k">$20,000 - $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="50k-70k">$50,000 - $70,000</SelectItem>
                        <SelectItem value="70k-100k">$70,000 - $100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="dark:text-white">Availability</Label>
                    <RadioGroup 
                      value={formData.availability}
                      onValueChange={(value) => handleInputChange("availability", value)}
                      className="flex flex-col space-y-2 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="immediate" id="immediate" />
                        <Label htmlFor="immediate" className="dark:text-white">Available Immediately</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2weeks" id="2weeks" />
                        <Label htmlFor="2weeks" className="dark:text-white">2 weeks notice</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1month" id="1month" />
                        <Label htmlFor="1month" className="dark:text-white">1 month notice</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio" className="dark:text-white">Professional Summary</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    placeholder="Tell us about your professional background, achievements, and career goals..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default JobSeekers;
