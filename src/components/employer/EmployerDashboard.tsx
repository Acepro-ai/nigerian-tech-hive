import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  Users, 
  Eye, 
  Calendar,
  MapPin,
  DollarSign,
  Star,
  MoreVertical,
  Edit,
  Trash2,
  Share2
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  applicants: number;
  views: number;
  postedDate: string;
  status: 'active' | 'paused' | 'expired';
  plan: 'basic' | 'professional' | 'enterprise';
}

const EmployerDashboard = () => {
  // Mock data - in a real app this would come from your backend
  const jobPostings: JobPosting[] = [
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'Remote',
      type: 'Full-time',
      salary: '$4,000 - $6,000/month',
      applicants: 24,
      views: 156,
      postedDate: '2024-10-10',
      status: 'active',
      plan: 'professional'
    },
    {
      id: '2',
      title: 'Mobile App Developer',
      company: 'TechCorp',
      location: 'Lagos, Nigeria',
      type: 'Contract',
      salary: '₦3M - ₦4M/year',
      applicants: 8,
      views: 89,
      postedDate: '2024-10-12',
      status: 'active',
      plan: 'basic'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'expired': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPlanIcon = (plan: string) => {
    switch (plan) {
      case 'basic': return <Star className="h-4 w-4" />;
      case 'professional': return <Star className="h-4 w-4 fill-current" />;
      case 'enterprise': return <Star className="h-4 w-4 fill-current text-yellow-500" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Employer Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your job postings and track applications
          </p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Briefcase className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Active Jobs
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {jobPostings.filter(job => job.status === 'active').length}
                </p>
              </div>
              <Briefcase className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Applications
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {jobPostings.reduce((sum, job) => sum + job.applicants, 0)}
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Views
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {jobPostings.reduce((sum, job) => sum + job.views, 0)}
                </p>
              </div>
              <Eye className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Avg. Response Rate
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  87%
                </p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Job Postings */}
      <Card>
        <CardHeader>
          <CardTitle>Your Job Postings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {jobPostings.map((job) => (
              <div key={job.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <Badge className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                      <div className="flex items-center text-gray-500">
                        {getPlanIcon(job.plan)}
                        <span className="ml-1 text-sm capitalize">{job.plan}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Posted {new Date(job.postedDate).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Users className="h-4 w-4 mr-1" />
                        {job.applicants} applicants
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Eye className="h-4 w-4 mr-1" />
                        {job.views} views
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Job
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Job
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Job
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployerDashboard;