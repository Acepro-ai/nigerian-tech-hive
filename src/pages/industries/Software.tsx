
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Cloud, Database, Smartphone, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Software = () => {
  const roles = [
    {
      title: "Full Stack Developer",
      description: "End-to-end web application development using modern frameworks",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      salaryRange: "$60,000 - $250,000+"
    },
    {
      title: "Cloud Solutions Architect",
      description: "Design and implement scalable cloud infrastructure and services",
      skills: ["AWS", "Azure", "Kubernetes", "Terraform", "Microservices"],
      salaryRange: "$80,000 - $300,000+"
    },
    {
      title: "Mobile App Developer",
      description: "iOS and Android application development for enterprise clients",
      skills: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
      salaryRange: "$50,000 - $120,000"
    },
    {
      title: "Data Engineer",
      description: "Build data pipelines and analytics platforms for business intelligence",
      skills: ["Python", "Apache Spark", "SQL", "Docker", "ETL"],
      salaryRange: "$75,000 - $150,000+"
    },
    {
      title: "QA Automation Engineer",
      description: "Automated testing frameworks and quality assurance processes",
      skills: ["Selenium", "Jest", "Cypress", "Python", "CI/CD"],
      salaryRange: "$75,000 - $150,000+"
    },
    {
      title: "Product Manager (Technical)",
      description: "Drive product strategy and work closely with engineering teams",
      skills: ["Agile", "Scrum", "Jira", "Analytics", "Technical Background"],
      salaryRange: "$80,000 - $180,000+"
    }
  ];

  const serviceAreas = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Bespoke applications tailored to specific business needs"
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Services",
      description: "Moving legacy systems to modern cloud platforms"
    },
    {
      icon: Database,
      title: "Data & Analytics Solutions",
      description: "Business intelligence and data-driven decision making"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications"
    }
  ];

  const companyTypes = [
    "Enterprise Software Companies",
    "Consulting & Services Firms",
    "SaaS Platforms",
    "E-commerce Platforms",
    "Healthcare Technology",
    "EdTech Companies"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="hero-gradient text-white py-20 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/">
              <Button variant="outline" className="mb-6 text-white border-white hover:bg-white hover:text-red-600 dark:border-white/20 dark:hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Software & Services Careers
              </h1>
              <p className="text-xl leading-relaxed">
                Build the digital backbone of businesses worldwide. From enterprise software 
                to cutting-edge SaaS platforms, help companies transform through technology.
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Key Service Areas
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Software and services companies operate across diverse domains, 
                creating opportunities for specialists and generalists alike.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="text-center card-hover dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <area.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 dark:text-white">{area.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Available Roles */}
        <div className="bg-white dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                In-Demand Roles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore opportunities across the software and services landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roles.map((role, index) => (
                <Card key={index} className="card-hover dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {role.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {role.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-semibold text-sm">
                      {role.salaryRange}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Company Types */}
        <div className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Where You'll Work
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Software and services companies span every industry, from startups 
                  building the next big platform to established enterprises serving 
                  millions of users worldwide.
                </p>
                
                <div className="space-y-4">
                  {companyTypes.map((type, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Career Growth</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Software and services companies offer clear career progression paths, 
                    from junior developer to technical lead, architect, or management roles.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Technical leadership opportunities</li>
                    <li>• Cross-functional collaboration</li>
                    <li>• Continuous learning culture</li>
                    <li>• Conference and training budgets</li>
                  </ul>
                </Card>
                
                <Card className="p-6 text-center dark:bg-gray-800 dark:border-gray-700">
                  <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Ready to Apply?</h3>
                  <Link to="/job-seekers">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Join Our Network
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Employer CTA Section */}
        <section className="py-20 hero-gradient text-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Next Star Employee?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              You might have been struggling to find and hire the right candidates, but now our experts can tell you how to avoid common mistakes and accelerate interviews.
            </p>
            <p className="text-lg mb-8 text-red-100">
              Book a Free consulting call with one of our recruitment experts to discuss:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div>
                <h4 className="font-semibold mb-2">Your Budget vs. Expectations Match</h4>
                <p className="text-red-100 text-sm">Let us analyze your expectations and provide feedback on whether they align with market standards.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Your Offer Positioning</h4>
                <p className="text-red-100 text-sm">Get feedback on who your vacancy could be the "Dream Job" for and whether the offer is compelling.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Your Target Location</h4>
                <p className="text-red-100 text-sm">Learn what tech hubs, cities, and countries would be a better fit given your budget constraints.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-red-100 text-sm">Discuss what we can do for you and how we can make the hiring process easy and seamless.</p>
              </div>
            </div>
            <a href="https://calendly.com/zongsevenonline/meeting-with-marvelous-2?month=2025-06" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
                Book a Free Consulting Call
              </Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Software;
