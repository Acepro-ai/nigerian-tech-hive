import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Briefcase, 
  DollarSign, 
  TrendingUp,
  UserCheck,
  UserX,
  CheckCircle,
  XCircle,
  Eye,
  Calendar,
  Globe,
  ArrowUp,
  ArrowDown,
  Clock
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AdminDashboard = () => {
  // Mock data - in a real app this would come from your backend
  const stats = {
    totalUsers: 2847,
    activeJobs: 156,
    totalRevenue: 12450000,
    monthlyGrowth: 12.5,
    jobSeekers: 2234,
    employers: 613,
    pendingApprovals: 23,
    successfulPlacements: 89
  };

  const recentActivity = [
    {
      id: 1,
      type: 'job_posted',
      user: 'TechCorp Nigeria',
      action: 'Posted "Senior React Developer" position',
      time: '2 minutes ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'user_registered',
      user: 'John Okafor',
      action: 'Registered as Job Seeker',
      time: '15 minutes ago',
      status: 'success'
    },
    {
      id: 3,
      type: 'payment_received',
      user: 'StartupXYZ',
      action: 'Professional Plan Payment - ₦75,000',
      time: '1 hour ago',
      status: 'success'
    },
    {
      id: 4,
      type: 'job_pending',
      user: 'LocalTech Ltd',
      action: 'Job posting pending approval',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: 5,
      type: 'user_premium',
      user: 'Sarah Ahmed',
      action: 'Upgraded to Premium Job Seeker',
      time: '3 hours ago',
      status: 'success'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'job_posted': return <Briefcase className="h-4 w-4" />;
      case 'user_registered': return <UserCheck className="h-4 w-4" />;
      case 'payment_received': return <DollarSign className="h-4 w-4" />;
      case 'job_pending': return <Clock className="h-4 w-4" />;
      case 'user_premium': return <TrendingUp className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
      case 'pending': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
      case 'failed': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-red-100">Here's what's happening with Marvel Recruit today.</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalUsers.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600">+12% from last month</span>
                </div>
              </div>
              <Users className="h-12 w-12 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Jobs</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.activeJobs}</p>
                <div className="flex items-center mt-2">
                  <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600">+8% from last week</span>
                </div>
              </div>
              <Briefcase className="h-12 w-12 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Revenue (₦)</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">₦{(stats.totalRevenue / 1000000).toFixed(1)}M</p>
                <div className="flex items-center mt-2">
                  <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600">+{stats.monthlyGrowth}% this month</span>
                </div>
              </div>
              <DollarSign className="h-12 w-12 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Placements</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.successfulPlacements}</p>
                <div className="flex items-center mt-2">
                  <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600">+15% this month</span>
                </div>
              </div>
              <CheckCircle className="h-12 w-12 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Job Seekers</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.jobSeekers.toLocaleString()}</p>
              </div>
              <UserCheck className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Employers</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.employers}</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pending Approvals</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.pendingApprovals}</p>
              </div>
              <Eye className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">94%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex flex-col items-center justify-center space-y-2">
              <Briefcase className="h-6 w-6" />
              <span className="text-sm">Manage Jobs</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Manage Users</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">View Payments</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Activity</CardTitle>
          <Button variant="outline" size="sm">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {activity.user}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {activity.action}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.time}
                </div>
                <Badge variant={activity.status === 'success' ? 'default' : activity.status === 'pending' ? 'secondary' : 'destructive'}>
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;