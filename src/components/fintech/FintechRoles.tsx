
import { Card, CardContent } from "@/components/ui/card";

const FintechRoles = () => {
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

  return (
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
  );
};

export default FintechRoles;
