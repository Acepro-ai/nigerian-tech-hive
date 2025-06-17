
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const SuccessStoriesSection = () => {
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
    <div className="bg-gray-50 dark:bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how companies worldwide have succeeded with Nigerian talent
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="card-hover bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {story.company}
                </h3>
                <p className="text-red-600 dark:text-red-400 font-medium mb-2">{story.role}</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mb-3">{story.result}</p>
                <p className="text-gray-600 dark:text-gray-300 italic text-sm">"{story.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
