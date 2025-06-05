
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
import { FileText, Users, Briefcase, Star } from "lucide-react";

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
    bio: ""
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
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Nigeria's Top Tech Talent Network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Register with MarvelRecruit and connect with global opportunities. 
              We match skilled Nigerian professionals with top companies worldwide.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Briefcase className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Opportunities</h3>
                <p className="text-gray-600">Access remote and on-site positions with international companies</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Expert Matching</h3>
                <p className="text-gray-600">Our team personally matches your skills with the right opportunities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Career Growth</h3>
                <p className="text-gray-600">Get support and guidance to advance your career globally</p>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="mr-3 h-6 w-6 text-red-600" />
                Register Your Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+234 xxx xxx xxxx"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Current Location *</Label>
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
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                      <SelectItem value="2-3">2-3 years (Junior)</SelectItem>
                      <SelectItem value="4-6">4-6 years (Mid-Level)</SelectItem>
                      <SelectItem value="7-10">7-10 years (Senior)</SelectItem>
                      <SelectItem value="10+">10+ years (Expert/Lead)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skills">Key Skills & Technologies *</Label>
                  <Textarea
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => handleInputChange("skills", e.target.value)}
                    placeholder="List your main technical skills, programming languages, frameworks, tools, etc."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio">Portfolio/GitHub/LinkedIn URL</Label>
                  <Input
                    id="portfolio"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange("portfolio", e.target.value)}
                    placeholder="https://github.com/yourusername or portfolio link"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="expectedSalary">Expected Salary Range (USD)</Label>
                    <Select onValueChange={(value) => handleInputChange("expectedSalary", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select salary range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="20k-30k">$20,000 - $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="50k-70k">$50,000 - $70,000</SelectItem>
                        <SelectItem value="70k-100k">$70,000 - $100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Availability</Label>
                    <RadioGroup 
                      value={formData.availability}
                      onValueChange={(value) => handleInputChange("availability", value)}
                      className="flex flex-col space-y-2 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="immediate" id="immediate" />
                        <Label htmlFor="immediate">Available Immediately</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2weeks" id="2weeks" />
                        <Label htmlFor="2weeks">2 weeks notice</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1month" id="1month" />
                        <Label htmlFor="1month">1 month notice</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Professional Summary</Label>
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
