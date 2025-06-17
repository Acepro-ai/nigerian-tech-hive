
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Clock, Award, TrendingUp } from "lucide-react";

const WhyNigeriaSection = () => {
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

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Hire Nigerian Tech Talent?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nigeria is Africa's tech powerhouse, producing thousands of skilled developers 
            and engineers ready to contribute to global projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center card-hover bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <benefit.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyNigeriaSection;
