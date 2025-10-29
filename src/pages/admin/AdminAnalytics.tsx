import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const AdminAnalytics = () => {
  // Mock analytics data - in a real app this would come from your backend
  const analyticsData = {
    userGrowth: {
      thisMonth: 234,
      lastMonth: 189,
      growth: 23.8
    },
    jobPostings: {
      thisMonth: 45,
      lastMonth: 38,
      growth: 18.4
    },
    revenue: {
      thisMonth: 1250000,
      lastMonth: 980000,
      growth: 27.6
    },
    applications: {
      thisMonth: 892,
      lastMonth: 743,
      growth: 20.1
    }
  };

  const monthlyData = [
    { month: 'Jan', users: 120, jobs: 25, revenue: 650000 },
    { month: 'Feb', users: 145, jobs: 32, revenue: 780000 },
    { month: 'Mar', users: 178, jobs: 28, revenue: 720000 },
    { month: 'Apr', users: 210, jobs: 35, revenue: 890000 },
    { month: 'May', users: 189, jobs: 38, revenue: 980000 },
    { month: 'Jun', users: 234, jobs: 45, revenue: 1250000 }
  ];

  const topPerformingJobs = [
    { title: 'Senior React Developer', applications: 45, views: 234 },
    { title: 'DevOps Engineer', applications: 38, views: 198 },
    { title: 'Mobile App Developer', applications: 32, views: 176 },
    { title: 'Full Stack Developer', applications: 29, views: 165 },
    { title: 'Data Scientist', applications: 25, views: 143 }
  ];

  const MetricCard = ({ title, value, previousValue, icon: Icon, format = 'number' }: {
    title: string;
    value: number;
    previousValue: number;
    icon: React.ComponentType<any>;
    format?: 'number' | 'currency' | 'percentage';
  }) => {
    const growth = ((value - previousValue) / previousValue) * 100;
    const isPositive = growth > 0;

    const formatValue = (val: number) => {
      switch (format) {
        case 'currency':
          return `₦${(val / 1000000).toFixed(1)}M`;
        case 'percentage':
          return `${val}%`;
        default:
          return val.toLocaleString();
      }
    };

    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {formatValue(value)}
              </p>
              <div className="flex items-center mt-2">
                {isPositive ? (
                  <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-600 mr-1" />
                )}
                <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {Math.abs(growth).toFixed(1)}% from last month
                </span>
              </div>
            </div>
            <Icon className="h-12 w-12 text-blue-600" />
          </div>
        </CardContent>
      </Card>
    );
  };

  const SimpleBarChart = ({ data, dataKey, title }: {
    data: any[];
    dataKey: string;
    title: string;
  }) => {
    const maxValue = Math.max(...data.map(item => item[dataKey]));
    
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-sm font-medium w-8 text-gray-600 dark:text-gray-400">
                  {item.month}
                </span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(item[dataKey] / maxValue) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white w-16 text-right">
                  {dataKey === 'revenue' ? `₦${(item[dataKey] / 1000000).toFixed(1)}M` : item[dataKey]}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Platform performance metrics and insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="New Users"
          value={analyticsData.userGrowth.thisMonth}
          previousValue={analyticsData.userGrowth.lastMonth}
          icon={Users}
        />
        <MetricCard
          title="Job Postings"
          value={analyticsData.jobPostings.thisMonth}
          previousValue={analyticsData.jobPostings.lastMonth}
          icon={Briefcase}
        />
        <MetricCard
          title="Revenue"
          value={analyticsData.revenue.thisMonth}
          previousValue={analyticsData.revenue.lastMonth}
          icon={DollarSign}
          format="currency"
        />
        <MetricCard
          title="Applications"
          value={analyticsData.applications.thisMonth}
          previousValue={analyticsData.applications.lastMonth}
          icon={TrendingUp}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SimpleBarChart
          data={monthlyData}
          dataKey="users"
          title="Monthly User Growth"
        />
        <SimpleBarChart
          data={monthlyData}
          dataKey="jobs"
          title="Monthly Job Postings"
        />
        <SimpleBarChart
          data={monthlyData}
          dataKey="revenue"
          title="Monthly Revenue"
        />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingJobs.map((job, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{job.title}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{job.applications} applications</span>
                      <span>{job.views} views</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">#{index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Health */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Success Rate</span>
                <span className="font-bold text-green-600">94.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Average Response Time</span>
                <span className="font-bold text-blue-600">24 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">User Retention</span>
                <span className="font-bold text-purple-600">87.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Payment Success Rate</span>
                <span className="font-bold text-green-600">98.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Platform Uptime</span>
                <span className="font-bold text-green-600">99.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regional Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h3 className="font-bold text-lg text-blue-700 dark:text-blue-300">Lagos</h3>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">1,234</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">Active Users</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <h3 className="font-bold text-lg text-green-700 dark:text-green-300">Abuja</h3>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">867</p>
              <p className="text-sm text-green-600 dark:text-green-400">Active Users</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <h3 className="font-bold text-lg text-purple-700 dark:text-purple-300">Others</h3>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">746</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">Active Users</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;