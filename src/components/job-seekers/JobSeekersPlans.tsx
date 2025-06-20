
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const JobSeekersPlans = () => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Registration Plan
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          To get the most out of our candidate-first services, choose the
          plan that best suits your current needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <Card className="relative">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Free
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Get started with essential features
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Free membership
                </span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Talent shortlist
                </span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Learning articles
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className="relative border-red-200 border-2">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Popular
            </span>
          </div>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Premium
            </CardTitle>
            <div className="text-3xl font-bold text-red-600 mb-2">
              $100
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Everything in Free plus exclusive features
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Free membership
                </span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Talent shortlist
                </span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Learning articles
                </span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Consultancy meetings
                </span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Resume review
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobSeekersPlans;
