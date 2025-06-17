
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FintechBenefits = () => {
  const benefits = [
    "Competitive salaries with equity options",
    "Remote work opportunities",
    "Professional development budget",
    "Health and wellness benefits",
    "Flexible working hours",
    "Stock options and bonuses"
  ];

  return (
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
  );
};

export default FintechBenefits;
