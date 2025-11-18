import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Briefcase, Users, MessageSquare, BarChart3, Star, Crown, Zap } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCurrentSession } from '@/libs/userSession';

const EmployerPaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get plan from URL params or session
  const planType = (searchParams.get('plan') as 'basic' | 'professional' | 'enterprise') || 
                   getCurrentSession()?.paidPlan || 
                   'professional';

  const planDetails = {
    basic: {
      name: 'Basic Plan',
      icon: Star,
      features: [
        { icon: Briefcase, title: 'Job Posting', description: '1 job posting for 30 days' },
        { icon: Users, title: 'Candidate Pool', description: 'Access to verified talent pool' },
        { icon: MessageSquare, title: 'Email Support', description: 'Standard email support' }
      ]
    },
    professional: {
      name: 'Professional Plan',
      icon: Zap,
      features: [
        { icon: Briefcase, title: 'Multiple Postings', description: '5 job postings for 60 days' },
        { icon: Users, title: 'Advanced Filtering', description: 'Advanced candidate filtering tools' },
        { icon: MessageSquare, title: 'Priority Support', description: 'Priority customer support' },
        { icon: BarChart3, title: 'Analytics', description: 'Detailed insights and analytics' }
      ]
    },
    enterprise: {
      name: 'Enterprise Plan',
      icon: Crown,
      features: [
        { icon: Briefcase, title: 'Unlimited Postings', description: 'Unlimited job postings for 90 days' },
        { icon: Users, title: 'AI Matching', description: 'AI-powered candidate matching' },
        { icon: MessageSquare, title: '24/7 Support', description: '24/7 priority support' },
        { icon: BarChart3, title: 'Advanced Analytics', description: 'Advanced analytics dashboard' }
      ]
    }
  };

  const currentPlan = planDetails[planType as keyof typeof planDetails];
  const IconComponent = currentPlan.icon;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <CheckCircle2 className="h-24 w-24 text-green-500" />
                <div className="absolute -top-2 -right-2 bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <IconComponent className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to {currentPlan.name}! 🎉
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your payment has been processed successfully. You're now ready to hire top Nigerian tech talent!
            </p>
          </div>

          {/* Plan Features */}
          <Card className="mb-8 border-green-200 dark:border-green-800 bg-white/80 dark:bg-gray-800/80">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Your {currentPlan.name} Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {currentPlan.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-green-100 dark:bg-green-800 rounded-lg">
                          <FeatureIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What's Next?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Post Your First Job
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Create a detailed job posting to attract the best candidates from our talent pool.
                    </p>
                    <Button onClick={() => navigate('/post-jobs?paid=true&plan=' + planType)} className="bg-red-600 hover:bg-red-700">
                      Post a Job Now
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Browse Our Talent Pool
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Explore profiles of skilled developers, designers, and tech professionals.
                    </p>
                    <Button variant="outline" onClick={() => navigate('/candidates')}>
                      Browse Candidates
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Get Support
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Need help? Our team is here to assist you with your hiring process.
                    </p>
                    <Button variant="outline">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">
                  📧 Confirmation Email Sent
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Check your email for your receipt and detailed plan information. 
                  You can manage your subscription anytime from your account dashboard.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">
                  🎯 Pro Tips for Success
                </h3>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Write detailed job descriptions, specify required skills clearly, 
                  and respond promptly to candidate applications for best results.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer CTA */}
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Questions about your plan or need help getting started?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
              <Button variant="outline" size="lg">
                Schedule Onboarding Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmployerPaymentSuccess;