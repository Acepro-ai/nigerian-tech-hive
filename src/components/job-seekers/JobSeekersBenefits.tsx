
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Star } from "lucide-react";

const JobSeekersBenefits = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <Card className="text-center">
        <CardContent className="p-6">
          <Briefcase className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2 dark:text-white">
            Global Opportunities
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Access remote and on-site positions with international
            companies
          </p>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardContent className="p-6">
          <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2 dark:text-white">
            Expert Matching
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our team personally matches your skills with the right
            opportunities
          </p>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardContent className="p-6">
          <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2 dark:text-white">
            Career Growth
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Get support and guidance to advance your career globally
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobSeekersBenefits;
