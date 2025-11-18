import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import EmployerPlans from '@/components/employer/EmployerPlans';
import EmployerPaymentModal from '@/components/employer/EmployerPaymentModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, MapPin, Clock, DollarSign, Building2, Star, AlertCircle } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getCurrentSession, createNewSession, isPremiumUser, getUserPlan } from '@/libs/userSession';

const PostJobs = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<'plans' | 'form'>('plans');
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'professional' | 'enterprise' | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Check user session and premium status on mount
  useEffect(() => {
    const session = getCurrentSession();
    if (session) {
      setIsPremium(session.hasPaid);
      setUserEmail(session.email || '');
      if (session.hasPaid) {
        setCurrentStep('form');
        setSelectedPlan(session.paidPlan || null);
      }
    } else {
      // Create new session for new users
      createNewSession();
    }
  }, []);

  // Check if user is coming from successful payment
  useEffect(() => {
    const paid = searchParams.get('paid');
    const plan = searchParams.get('plan') as 'basic' | 'professional' | 'enterprise';
    
    if (paid === 'true' && plan) {
      setSelectedPlan(plan);
      setIsPremium(true);
      setCurrentStep('form');
    }
  }, [searchParams]);

  const [jobFormData, setJobFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    experience: '',
    salary: '',
    description: '',
    requirements: '',
    benefits: '',
    skills: [] as string[]
  });

  const handlePlanSelect = (planType: 'basic' | 'professional' | 'enterprise') => {
    setSelectedPlan(planType);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setCurrentStep('form');
    setShowPaymentModal(false);
  };

  const jobTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Freelance',
    'Internship',
    'Remote'
  ];

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (6-10 years)',
    'Lead/Principal (10+ years)'
  ];

  const techSkills = [
    'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'Java',
    'C#', '.NET', 'Angular', 'Vue.js', 'Django', 'Flask', 'Express.js',
    'MongoDB', 'PostgreSQL', 'MySQL', 'AWS', 'Azure', 'Docker',
    'Kubernetes', 'Git', 'CI/CD', 'Microservices', 'REST APIs',
    'GraphQL', 'Mobile Development', 'iOS', 'Android', 'Flutter',
    'React Native', 'Data Science', 'Machine Learning', 'AI',
    'DevOps', 'Blockchain', 'Cybersecurity'
  ];

  const addSkill = (skill: string) => {
    if (!jobFormData.skills.includes(skill)) {
      setJobFormData({
        ...jobFormData,
        skills: [...jobFormData.skills, skill]
      });
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setJobFormData({
      ...jobFormData,
      skills: jobFormData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  // Redirect non-premium users to plans
  useEffect(() => {
    if (!isPremium && currentStep === 'form') {
      setCurrentStep('plans');
    }
  }, [isPremium, currentStep]);

  // If user is not premium and trying to access form directly, show access denied
  if (!isPremium && currentStep === 'form') {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Premium Access Required
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You need to purchase a premium plan to post jobs and access our talent pool.
                </p>
                <Button onClick={() => setCurrentStep('plans')} className="bg-red-600 hover:bg-red-700">
                  View Plans
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    
    // Basic form validation
    if (!jobFormData.title || !jobFormData.company || !jobFormData.description) {
      alert('Please fill in all required fields (Title, Company, Description)');
      return;
    }

    // Get current session for user identification
    const session = getCurrentSession();
    if (!session) {
      alert('Session expired. Please refresh the page and try again.');
      return;
    }

    try {
      // Simulate job posting submission (replace with actual API call)
      const jobPosting = {
        ...jobFormData,
        id: Date.now().toString(),
        sessionId: session.sessionId,
        status: 'active',
        plan: selectedPlan,
        postedDate: new Date().toISOString().split('T')[0],
        applicants: 0,
        views: 0
      };

      // In a real app, this would be an API call to save the job
      console.log('Job posted successfully:', jobPosting);
      
      // Store job locally for demo purposes (replace with API)
      const existingJobs = JSON.parse(localStorage.getItem('nth_jobs') || '[]');
      existingJobs.push(jobPosting);
      localStorage.setItem('nth_jobs', JSON.stringify(existingJobs));

      // Show success message and redirect
      alert('Job posted successfully! Your job listing is now live and candidates can start applying.');
      
      // Reset form
      setJobFormData({
        title: '',
        company: '',
        location: '',
        type: '',
        experience: '',
        salary: '',
        description: '',
        requirements: '',
        benefits: '',
        skills: []
      });
      
      // Redirect to success page or dashboard
      navigate('/employer-dashboard');
    } catch (error) {
      console.error('Error posting job:', error);
      alert('Failed to post job. Please try again.');
    }
  };

  if (currentStep === 'plans') {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Hire Top Nigerian Tech Talent
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Connect with skilled developers, designers, and tech professionals from Nigeria's thriving tech ecosystem.
                Choose a plan to start posting your job requirements.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <Users className="h-5 w-5 text-red-600" />
                  <span>50,000+ Verified Developers</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <Star className="h-5 w-5 text-red-600" />
                  <span>Average 4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <Clock className="h-5 w-5 text-red-600" />
                  <span>24-48hr Response Time</span>
                </div>
              </div>
            </div>

            <EmployerPlans onSelectPlan={handlePlanSelect} />

            {/* Features Section */}
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Building2 className="h-12 w-12 text-red-600" />
                  </div>
                  <CardTitle>Quality Talent Pool</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access to pre-screened, experienced developers from Nigeria's top tech hubs including Lagos, Abuja, and Port Harcourt.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Briefcase className="h-12 w-12 text-red-600" />
                  </div>
                  <CardTitle>Easy Hiring Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Streamlined job posting, candidate filtering, and direct communication tools to find the perfect fit for your team.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <DollarSign className="h-12 w-12 text-red-600" />
                  </div>
                  <CardTitle>Cost-Effective Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Competitive rates with world-class talent. Save up to 60% on development costs while maintaining high quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <EmployerPaymentModal
          open={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          onPaymentSuccess={handlePaymentSuccess}
          userEmail={userEmail}
          selectedPlan={selectedPlan!}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Post Your Job
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Create a detailed job posting to attract the best Nigerian tech talent
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-6 w-6 mr-2 text-red-600" />
                Job Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Title *</label>
                    <Input
                      value={jobFormData.title}
                      onChange={(e) => setJobFormData({...jobFormData, title: e.target.value})}
                      placeholder="e.g. Senior React Developer"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <Input
                      value={jobFormData.company}
                      onChange={(e) => setJobFormData({...jobFormData, company: e.target.value})}
                      placeholder="Your company name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Input
                      value={jobFormData.location}
                      onChange={(e) => setJobFormData({...jobFormData, location: e.target.value})}
                      placeholder="e.g. Remote, Lagos, New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Type *</label>
                    <Select onValueChange={(value) => setJobFormData({...jobFormData, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience Level</label>
                    <Select onValueChange={(value) => setJobFormData({...jobFormData, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Salary Range</label>
                  <Input
                    value={jobFormData.salary}
                    onChange={(e) => setJobFormData({...jobFormData, salary: e.target.value})}
                    placeholder="e.g. $3,000 - $5,000/month or ₦2M - ₦3M/year"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Job Description *</label>
                  <Textarea
                    value={jobFormData.description}
                    onChange={(e) => setJobFormData({...jobFormData, description: e.target.value})}
                    placeholder="Describe the role, responsibilities, and what you're looking for..."
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Requirements</label>
                  <Textarea
                    value={jobFormData.requirements}
                    onChange={(e) => setJobFormData({...jobFormData, requirements: e.target.value})}
                    placeholder="List the key requirements, qualifications, and experience needed..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Benefits & Perks</label>
                  <Textarea
                    value={jobFormData.benefits}
                    onChange={(e) => setJobFormData({...jobFormData, benefits: e.target.value})}
                    placeholder="Describe benefits, perks, growth opportunities..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Required Skills</label>
                  <div className="mb-4">
                    <Select onValueChange={addSkill}>
                      <SelectTrigger>
                        <SelectValue placeholder="Add skills..." />
                      </SelectTrigger>
                      <SelectContent>
                        {techSkills.filter(skill => !jobFormData.skills.includes(skill)).map((skill) => (
                          <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {jobFormData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="cursor-pointer" onClick={() => removeSkill(skill)}>
                        {skill} ×
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                  <Button variant="outline" type="button">
                    Save as Draft
                  </Button>
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Post Job
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PostJobs;