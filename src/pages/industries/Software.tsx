
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
      salaryRange: "$60,000 - $120,000"
    },
    {
      title: "Cloud Solutions Architect",
      description: "Design and implement scalable cloud infrastructure and services",
      skills: ["AWS", "Azure", "Kubernetes", "Terraform", "Microservices"],
      salaryRange: "$90,000 - $160,000"
    },
    {
      title: "Mobile App Developer",
      description: "iOS and Android application development for enterprise clients",
      skills: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
      salaryRange: "$65,000 - $115,000"
    },
    {
      title: "Data Engineer",
      description: "Build data pipelines and analytics platforms for business intelligence",
      skills: ["Python", "Apache Spark", "SQL", "Docker", "ETL"],
      salaryRange: "$70,000 - $130,000"
    },
    {
      title: "QA Automation Engineer",
      description: "Automated testing frameworks and quality assurance processes",
      skills: ["Selenium", "Jest", "Cypress", "Python", "CI/CD"],
      salaryRange: "$55,000 - $100,000"
    },
    {
      title: "Product Manager (Technical)",
      description: "Drive product strategy and work closely with engineering teams",
      skills: ["Agile", "Scrum", "Jira", "Analytics", "Technical Background"],
      salaryRange: "$80,000 - $140,000"
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
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/">
              <Button variant="outline" className="mb-6 text-white border-white hover:bg-white hover:text-red-600">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Service Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Software and services companies operate across diverse domains, 
                creating opportunities for specialists and generalists alike.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="text-center card-hover">
                  <CardContent className="p-6">
                    <area.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Available Roles */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                In-Demand Roles
              </h2>
              <p className="text-lg text-gray-600">
                Explore opportunities across the software and services landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roles.map((role, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {role.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {role.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold text-sm">
                      {role.salaryRange}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Company Types */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Where You'll Work
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Software and services companies span every industry, from startups 
                  building the next big platform to established enterprises serving 
                  millions of users worldwide.
                </p>
                
                <div className="space-y-4">
                  {companyTypes.map((type, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Career Growth</h3>
                  <p className="text-gray-600 mb-4">
                    Software and services companies offer clear career progression paths, 
                    from junior developer to technical lead, architect, or management roles.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Technical leadership opportunities</li>
                    <li>• Cross-functional collaboration</li>
                    <li>• Continuous learning culture</li>
                    <li>• Conference and training budgets</li>
                  </ul>
                </Card>
                
                <Card className="p-6 text-center">
                  <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Ready to Apply?</h3>
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
      </div>
    </Layout>
  );
};

export default Software;
