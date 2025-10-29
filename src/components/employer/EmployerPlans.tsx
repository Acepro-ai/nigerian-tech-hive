import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmployerPlansProps {
  onSelectPlan: (planType: 'basic' | 'professional' | 'enterprise') => void;
}

const EmployerPlans = ({ onSelectPlan }: EmployerPlansProps) => {
  const plans = [
    {
      id: 'basic' as const,
      name: 'Basic',
      price: 25000,
      description: 'Perfect for small companies',
      icon: Star,
      features: [
        '1 job posting for 30 days',
        'Basic candidate filtering',
        'Email support',
        'Standard listing visibility',
        'Basic analytics'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      id: 'professional' as const,
      name: 'Professional',
      price: 75000,
      description: 'Most popular for growing teams',
      icon: Zap,
      features: [
        '5 job postings for 60 days',
        'Advanced candidate filtering',
        'Priority support',
        'Featured listing (highlighted)',
        'Detailed analytics & insights',
        'Company branding options',
        'Direct candidate messaging'
      ],
      buttonText: 'Most Popular',
      popular: true
    },
    {
      id: 'enterprise' as const,
      name: 'Enterprise',
      price: 150000,
      description: 'For large organizations',
      icon: Crown,
      features: [
        'Unlimited job postings for 90 days',
        'AI-powered candidate matching',
        '24/7 priority support',
        'Premium listing placement',
        'Advanced analytics dashboard',
        'Custom company profile',
        'Dedicated account manager',
        'Bulk candidate outreach',
        'Integration support'
      ],
      buttonText: 'Go Premium',
      popular: false
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Job Posting Plans
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Choose the perfect plan to find top Nigerian tech talent for your company.
          All plans include access to our verified talent pool.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => {
          const IconComponent = plan.icon;
          return (
            <Card 
              key={plan.id} 
              className={`relative transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-red-500 border-2 transform scale-105' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-red-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.popular ? 'bg-red-100 dark:bg-red-900' : 'bg-gray-100 dark:bg-gray-800'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      plan.popular ? 'text-red-600' : 'text-gray-600 dark:text-gray-400'
                    }`} />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ₦{plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    per plan
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <Button 
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Need a custom solution? Contact our sales team for enterprise pricing.
        </p>
        <Button variant="outline" size="lg">
          Contact Sales
        </Button>
      </div>
    </div>
  );
};

export default EmployerPlans;