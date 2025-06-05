
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Globe, Clock, Award, TrendingUp, CheckCircle, Star, Code } from "lucide-react";
import { Link } from "react-router-dom";

const HireNigerianExperts = () => {
  const benefits = [
    {
      icon: Globe,
      title: "English Proficiency",
      description: "Native or near-native English speakers with excellent communication skills"
    },
    {
      icon: Clock,
      title: "Timezone Advantages",
      description: "Strategic timezone overlap with Europe, Americas, and Asia for global teams"
    },
    {
      icon: Award,
      title: "Strong Technical Education",
      description: "World-class universities and technical institutions producing top talent"
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Solutions",
      description: "Access premium talent at competitive rates compared to traditional markets"
    }
  ];

  const expertiseAreas = [
    "Full Stack Development",
    "Mobile App Development", 
    "Cloud Architecture",
    "DevOps & Infrastructure",
    "Data Science & Analytics",
    "Cybersecurity",
    "Blockchain Development",
    "AI/Machine Learning",
    "Product Management",
    "UI/UX Design"
  ];

  const successStories = [
    {
      company: "TechCorp Solutions",
      role: "Senior Backend Developer",
      result: "40% reduction in development time",
      testimonial: "Our Nigerian developer exceeded expectations and became a key team leader."
    },
    {
      company: "Global Fintech",
      role: "Mobile Development Team",
      result: "Launched app 3 months ahead of schedule",
      testimonial: "The team's expertise in React Native was exactly what we needed."
    },
    {
      company: "E-commerce Platform",
      role: "Cloud Infrastructure Lead",
      result: "99.9% uptime improvement",
      testimonial: "Exceptional problem-solving skills and proactive approach to scaling."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Hire Nigerian Tech Experts
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Access Africa's largest pool of skilled software developers, engineers, 
                and tech professionals. Build your global team with Nigeria's finest talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Start Hiring Today
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
                  View Talent Pool
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Nigeria Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Hire Nigerian Tech Talent?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nigeria is Africa's tech powerhouse, producing thousands of skilled developers 
                and engineers ready to contribute to global projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-gray-600">
                Our talent pool covers the full spectrum of modern technology skills
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {expertiseAreas.map((area, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4 text-center">
                    <Code className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900 text-sm">{area}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                See how companies worldwide have succeeded with Nigerian talent
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <Star className="h-5 w-5 text-yellow-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {story.company}
                    </h3>
                    <p className="text-red-600 font-medium mb-2">{story.role}</p>
                    <p className="text-green-600 font-semibold mb-3">{story.result}</p>
                    <p className="text-gray-600 italic text-sm">"{story.testimonial}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Simple Hiring Process
              </h2>
              <p className="text-lg text-gray-600">
                We make it easy to find and hire the right talent for your projects
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Tell Us Your Needs</h3>
                <p className="text-gray-600 text-sm">Share your project requirements and ideal candidate profile</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">We Match Talent</h3>
                <p className="text-gray-600 text-sm">Our team identifies the best candidates from our network</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Interview & Select</h3>
                <p className="text-gray-600 text-sm">Meet candidates and choose the perfect fit for your team</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Start Building</h3>
                <p className="text-gray-600 text-sm">Begin working with your new team member immediately</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="hero-gradient text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Global Team?
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of companies that have successfully hired Nigerian tech talent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HireNigerianExperts;
