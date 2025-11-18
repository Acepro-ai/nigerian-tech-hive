import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Briefcase,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Plus,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  Building2
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string;
  benefits: string;
  skills: string[];
  sessionId: string;
  status: 'active' | 'pending' | 'expired' | 'paused';
  plan: 'basic' | 'professional' | 'enterprise';
  postedDate: string;
  applicants: number;
  views: number;
}

const AdminJobManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);

  // Load jobs from localStorage
  useEffect(() => {
    const loadJobs = () => {
      const storedJobs = JSON.parse(localStorage.getItem('nth_jobs') || '[]');
      setJobs(storedJobs);
    };

    loadJobs();
    // Refresh jobs every 5 seconds to show real-time updates
    const interval = setInterval(loadJobs, 5000);
    return () => clearInterval(interval);
  }, []);

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    if (jobs.length > 0) {
      localStorage.setItem('nth_jobs', JSON.stringify(jobs));
    }
  }, [jobs]);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'expired': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'paused': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'basic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'professional': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'enterprise': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const handleApproveJob = (jobId: string) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, status: 'active' as const } : job
    ));
  };

  const handleRejectJob = (jobId: string) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, status: 'expired' as const } : job
    ));
  };

  const handleDeleteJob = (jobId: string) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  const JobForm = ({ job, onSave, onCancel }: { job?: Job; onSave: (jobData: any) => void; onCancel: () => void }) => {
    const [formData, setFormData] = useState({
      title: job?.title || '',
      company: job?.company || '',
      location: job?.location || '',
      type: job?.type || '',
      experience: job?.experience || '',
      salary: job?.salary || '',
      description: job?.description || '',
      requirements: job?.requirements || '',
      benefits: job?.benefits || '',
      skills: job?.skills?.join(', ') || ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave({
        ...formData,
        skills: formData.skills.split(',').map(s => s.trim()).filter(s => s)
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Job Title</label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Company</label>
            <Input
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <Input
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Job Type</label>
            <Select onValueChange={(value) => setFormData({...formData, type: value})}>
              <SelectTrigger>
                <SelectValue placeholder={formData.type || "Select type"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Freelance">Freelance</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Experience Level</label>
            <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
              <SelectTrigger>
                <SelectValue placeholder={formData.experience || "Select experience"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Entry Level (0-2 years)">Entry Level (0-2 years)</SelectItem>
                <SelectItem value="Mid Level (3-5 years)">Mid Level (3-5 years)</SelectItem>
                <SelectItem value="Senior Level (6-10 years)">Senior Level (6-10 years)</SelectItem>
                <SelectItem value="Lead/Principal (10+ years)">Lead/Principal (10+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Salary Range</label>
          <Input
            value={formData.salary}
            onChange={(e) => setFormData({...formData, salary: e.target.value})}
            placeholder="e.g. $3,000 - $5,000/month or ₦2M - ₦3M/year"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Requirements</label>
          <Textarea
            value={formData.requirements}
            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Benefits & Perks</label>
          <Textarea
            value={formData.benefits}
            onChange={(e) => setFormData({...formData, benefits: e.target.value})}
            rows={3}
            placeholder="Describe benefits, perks, growth opportunities..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Skills (comma-separated)</label>
          <Input
            value={formData.skills}
            onChange={(e) => setFormData({...formData, skills: e.target.value})}
            placeholder="React, TypeScript, Node.js"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">
            {job ? 'Update Job' : 'Create Job'}
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Job Management</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Manage all job postings on the platform</p>
        </div>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              Add New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Job</DialogTitle>
            </DialogHeader>
            <JobForm
              onSave={(jobData) => {
                const newJob = {
                  id: Date.now().toString(),
                  ...jobData,
                  sessionId: 'admin',
                  status: 'active',
                  plan: 'basic',
                  postedDate: new Date().toISOString().split('T')[0],
                  applicants: 0,
                  views: 0
                };
                setJobs([...jobs, newJob]);
                setIsAddModalOpen(false);
              }}
              onCancel={() => setIsAddModalOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search jobs, companies, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Jobs List */}
      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <Badge className={getStatusColor(job.status)}>
                      {job.status}
                    </Badge>
                    <Badge className={getPlanColor(job.plan)}>
                      {job.plan}
                    </Badge>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <Building2 className="h-4 w-4 mr-1" />
                    <span className="mr-4">{job.company}</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="mr-4">{job.location}</span>
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span className="mr-4">{job.type}</span>
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span>{job.salary}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.slice(0, 4).map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 4 && (
                      <Badge variant="outline">+{job.skills.length - 4} more</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {job.applicants} applicants
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {job.views} views
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Posted {job.postedDate}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {job.status === 'pending' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => handleApproveJob(job.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleRejectJob(job.id)}
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSelectedJob(job)}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => {
                        setSelectedJob(job);
                        setIsEditModalOpen(true);
                      }}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Job
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Job
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Job Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Job</DialogTitle>
          </DialogHeader>
          {selectedJob && (
            <JobForm
              job={selectedJob}
              onSave={(jobData) => {
                setJobs(jobs.map(job => 
                  job.id === selectedJob.id 
                    ? { ...job, ...jobData, skills: jobData.skills }
                    : job
                ));
                setIsEditModalOpen(false);
                setSelectedJob(null);
              }}
              onCancel={() => {
                setIsEditModalOpen(false);
                setSelectedJob(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminJobManagement;