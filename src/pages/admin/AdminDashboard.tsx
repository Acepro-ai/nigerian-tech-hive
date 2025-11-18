import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeJobs: 0,
    totalRevenue: 0,
    monthlyGrowth: 0,
    jobSeekers: 0,
    employers: 0,
    pendingApprovals: 0,
    successfulPlacements: 0
  });

  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    // Load real data from localStorage
    const jobs = JSON.parse(localStorage.getItem('nth_jobs') || '[]');
    const sessions = JSON.parse(localStorage.getItem('nth_sessions') || '[]');

    // Calculate statistics
    const activeJobs = jobs.filter((job: any) => job.status === 'active').length;
    const totalUsers = sessions.length;
    const employers = sessions.filter((session: any) => session.hasPaid).length;
    const jobSeekers = totalUsers - employers;

    // Calculate revenue (assuming each paid plan generates revenue)
    const totalRevenue = sessions
      .filter((session: any) => session.hasPaid)
      .reduce((total: number, session: any) => {
        const planPrices = { basic: 25000, professional: 75000, enterprise: 150000 };
        return total + (planPrices[session.paidPlan as keyof typeof planPrices] || 0);
      }, 0);

    // Calculate pending approvals (jobs that might need review - for now, assume all are approved)
    const pendingApprovals = 0; // In current implementation, all jobs are auto-approved

    // Calculate monthly growth based on actual data
    const currentMonthUsers = sessions.filter((session: any) => {
      const sessionDate = new Date(session.createdAt);
      return sessionDate.getMonth() === new Date().getMonth() && 
             sessionDate.getFullYear() === new Date().getFullYear();
    }).length;

    const lastMonthUsers = sessions.filter((session: any) => {
      const lastMonth = new Date().getMonth() === 0 ? 11 : new Date().getMonth() - 1;
      const lastMonthYear = new Date().getMonth() === 0 ? new Date().getFullYear() - 1 : new Date().getFullYear();
      const sessionDate = new Date(session.createdAt);
      return sessionDate.getMonth() === lastMonth && sessionDate.getFullYear() === lastMonthYear;
    }).length;

    const monthlyGrowth = lastMonthUsers > 0 ? ((currentMonthUsers - lastMonthUsers) / lastMonthUsers) * 100 : 0;

    // Calculate successful placements based on jobs with views (proxy for applications)
    const successfulPlacements = jobs.filter((job: any) => job.views > 0).length;

    setStats({
      totalUsers,
      activeJobs,
      totalRevenue,
      monthlyGrowth: Math.round(monthlyGrowth * 10) / 10, // Round to 1 decimal
      jobSeekers,
      employers,
      pendingApprovals,
      successfulPlacements
    });

    // Generate recent activity from jobs and sessions
    const activities = [];

    // Add recent jobs
    jobs.slice(-3).forEach((job: any) => {
      activities.push({
        id: `job_${job.id}`,
        type: 'job_posted',
        user: job.company || 'Unknown Company',
        action: `Posted "${job.title}" position`,
        time: 'Recently',
        status: 'success'
      });
    });

    // Add recent sessions
    sessions.slice(-2).forEach((session: any) => {
      if (session.hasPaid) {
        activities.push({
          id: `payment_${session.sessionId}`,
          type: 'payment_received',
          user: session.email || 'Anonymous User',
          action: `${session.paidPlan} Plan Payment`,
          time: 'Recently',
          status: 'success'
        });
      } else {
        activities.push({
          id: `user_${session.sessionId}`,
          type: 'user_registered',
          user: session.email || 'Anonymous User',
          action: 'Registered on platform',
          time: 'Recently',
          status: 'success'
        });
      }
    });

    setRecentActivity(activities.slice(-5)); // Show last 5 activities
  }, []);

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
        <p className="text-red-100">Here's what's happening with Nigerian Tech Hive today.</p>
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
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {stats.activeJobs > 0 ? Math.round((stats.successfulPlacements / stats.activeJobs) * 100) : 0}%
                </p>
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
            <Button asChild className="h-20 flex flex-col items-center justify-center space-y-2">
              <Link to="/admin/jobs">
                <Briefcase className="h-6 w-6" />
                <span className="text-sm">Manage Jobs</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Link to="/admin/users">
                <Users className="h-6 w-6" />
                <span className="text-sm">Manage Users</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">View Payments</span>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Link to="/admin/analytics">
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm">Analytics</span>
              </Link>
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