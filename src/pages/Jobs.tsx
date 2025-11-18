import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Users,
  Star,
  Clock,
  DollarSign,
  Building2,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Briefcase,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Jobs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Dream Tech Job
              <span className="block text-blue-200">In Nigeria & Globally</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Connect with leading companies hiring top tech talent.
              Browse jobs, apply easily, and launch your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                <Link to="/job-seekers" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
                <Link to="/candidates" className="flex items-center">
                  Browse All Jobs <ArrowRight className="ml-2 h-5 w-5" />
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
              <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Job Postings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Companies Hiring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Job Seekers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Application Tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Nigerian Tech Jobs?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join the thriving Nigerian tech ecosystem with competitive salaries and growth opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <DollarSign className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle>Competitive Salaries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Nigerian tech salaries are highly competitive, with top developers earning
                  internationally comparable compensation packages.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Zap className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle>Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Nigeria's tech scene is booming with startups, scale-ups, and multinational companies
                  offering excellent career advancement prospects.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Globe className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle>Global Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Work with international clients, contribute to global projects, and build a portfolio
                  that opens doors worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Job Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find opportunities in the roles that match your skills and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/candidates">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">Software Development</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Frontend, Backend, Full-Stack</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">250+ jobs</Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/candidates">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">Cybersecurity</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Security Analysis, Ethical Hacking</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">80+ jobs</Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/candidates">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">Data Science & AI</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">ML, Data Analysis, AI</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">120+ jobs</Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/candidates">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg mr-4">
                      <Building2 className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">Product Management</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Product Owners, Managers</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">60+ jobs</Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/candidates">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-lg mr-4">
                      <Search className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">UI/UX Design</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Designers, Researchers</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">90+ jobs</Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/candidates">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
                      <Globe className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">DevOps & Cloud</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Infrastructure, Cloud Engineering</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">70+ jobs</Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple steps to find and apply for your dream job
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Create Profile</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sign up and create your professional profile showcasing your skills
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Browse Jobs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Search and filter through thousands of job opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Apply & Connect</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Apply to jobs and connect directly with hiring companies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Get Hired</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Land your dream job and start your career journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real stories from job seekers who found their dream roles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">Adunni O.</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Senior Frontend Developer</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "I found my current role through this platform. The process was smooth and I connected
                  with a great company that values work-life balance."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    K
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">Kemi T.</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Data Scientist</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "The platform helped me transition from a different field into tech. I got multiple
                  interviews and landed a role with excellent growth opportunities."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    J
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">John A.</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">DevOps Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "I was able to find remote opportunities that allowed me to work with international
                  teams while staying in Nigeria. Highly recommend!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Career?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who found their dream jobs through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
              <Link to="/job-seekers" className="flex items-center">
                Create Your Profile <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
              <Link to="/candidates">Browse Jobs</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;