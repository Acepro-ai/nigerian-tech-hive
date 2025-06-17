
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Shield, DollarSign, Smartphone, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Fintech = () => {
  const roles = [
    {
      title: "Blockchain Developer",
      description: "Smart contract development, DeFi protocols, cryptocurrency systems",
      skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
      salaryRange: "$80,000 - $150,000"
    },
    {
      title: "Backend Engineer (Payments)",
      description: "Payment processing systems, fraud detection, financial APIs",
      skills: ["Node.js", "Python", "PostgreSQL", "Redis", "AWS"],
      salaryRange: "$70,000 - $120,000"
    },
    {
      title: "Frontend Developer (Mobile Banking)",
      description: "Mobile banking apps, web platforms, user authentication",
      skills: ["React Native", "Flutter", "React.js", "TypeScript"],
      salaryRange: "$65,000 - $110,000"
    },
    {
      title: "DevOps Engineer (Financial Systems)",
      description: "Infrastructure automation, security compliance, monitoring",
      skills: ["Kubernetes", "Docker", "Terraform", "CI/CD", "Security"],
      salaryRange: "$75,000 - $130,000"
    }
  ];

  const benefits = [
    "Competitive salaries with equity options",
    "Remote work opportunities",
    "Professional development budget",
    "Health and wellness benefits",
    "Flexible working hours",
    "Stock options and bonuses"
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
                Fintech Opportunities
              </h1>
              <p className="text-xl leading-relaxed">
                Join the financial revolution with cutting-edge fintech companies. 
                Build payment systems, blockchain applications, and digital banking solutions 
                that are transforming how the world handles money.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Overview */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Fintech?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The fintech industry is experiencing explosive growth, with companies seeking 
                talented developers to build the financial infrastructure of tomorrow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center card-hover dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">Rapid Growth</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fintech investment reached $91.5B globally in 2021, with continued expansion expected
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">Security Focus</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    High demand for developers who understand financial security and compliance
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-8">
                  <DollarSign className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">Competitive Pay</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Above-average salaries with equity opportunities in high-growth companies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Available Roles */}
        <div className="bg-white dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Popular Fintech Roles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore high-demand positions in the fintech sector
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {roles.map((role, index) => (
                <Card key={index} className="card-hover dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {role.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-semibold">
                      {role.salaryRange}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Fintech Benefits & Perks
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Fintech companies offer some of the best benefits in the tech industry, 
                  recognizing the importance of attracting and retaining top talent.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Card className="p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4 dark:text-white">Ready to Start?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Join thousands of Nigerian developers already working in fintech
                    </p>
                    <Link to="/job-seekers">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fintech;
