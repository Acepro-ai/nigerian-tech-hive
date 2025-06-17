
import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";

const ExpertiseSection = () => {
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

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Areas of Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our talent pool covers the full spectrum of modern technology skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="card-hover bg-white dark:bg-gray-800">
              <CardContent className="p-4 text-center">
                <Code className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 dark:text-white text-sm">{area}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
