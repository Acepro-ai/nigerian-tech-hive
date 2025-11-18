import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Users,
  Star,
  Clock,
  DollarSign,
  Building2,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hire = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hire Top Nigerian Tech Talent
              <span className="block text-red-200">For Your Company</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Access pre-vetted Nigerian developers, designers, and tech professionals.
              Post jobs, find candidates, and build your dream team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
                <Link to="/post-jobs" className="flex items-center">
                  Post a Job Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8">
                <Link to="/candidates" className="flex items-center">
                  Browse Candidates <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Verified Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">30 Days</div>
              <div className="text-gray-600 dark:text-gray-300">Average Hire Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Nigerian Talent */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Hire Nigerian Tech Talent?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover why leading companies choose Nigerian developers for their technical excellence and cultural fit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Star className="h-12 w-12 text-red-600" />
                </div>
                <CardTitle>World-Class Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Nigerian developers consistently rank among the top global talent pools,
                  with strong educational backgrounds and practical experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-red-600" />
                </div>
                <CardTitle>Fast Time-to-Hire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our streamlined process gets you qualified candidates within 48 hours,
                  with interviews scheduled within a week.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <DollarSign className="h-12 w-12 text-red-600" />
                </div>
                <CardTitle>Cost-Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Save up to 60% on development costs while maintaining high quality standards
                  and reliable delivery timelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Hiring Plan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Flexible plans designed to scale with your hiring needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic Plan</CardTitle>
                <div className="text-3xl font-bold text-red-600">₦25,000</div>
                <p className="text-gray-600 dark:text-gray-300">One-time payment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>1 job posting (30 days)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Access to candidate pool</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Link to="/post-jobs">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-red-200 dark:border-red-800">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional Plan</CardTitle>
                <div className="text-3xl font-bold text-red-600">₦75,000</div>
                <p className="text-gray-600 dark:text-gray-300">One-time payment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>5 job postings (60 days)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced candidate filtering</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Detailed analytics</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Link to="/post-jobs">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise Plan</CardTitle>
                <div className="text-3xl font-bold text-red-600">₦150,000</div>
                <p className="text-gray-600 dark:text-gray-300">One-time payment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited job postings (90 days)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>AI-powered matching</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Link to="/post-jobs">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple, efficient process to find and hire top talent
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Post Your Job</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create a detailed job posting with our easy-to-use form
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Get Matched</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our system matches your job with qualified candidates
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Interview & Hire</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Conduct interviews and make your hiring decision
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Onboard & Scale</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Welcome your new team member and continue building
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Hire Top Talent?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Join hundreds of companies that trust us to find their next star employee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
              <Link to="/post-jobs" className="flex items-center">
                Post a Job Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8">
              <Link to="/hire-nigerian-experts">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hire;