import React, { useState, useEffect } from 'react';
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
  const [analyticsData, setAnalyticsData] = useState({
    userGrowth: {
      thisMonth: 0,
      lastMonth: 0,
      growth: 0
    },
    jobPostings: {
      thisMonth: 0,
      lastMonth: 0,
      growth: 0
    },
    revenue: {
      thisMonth: 0,
      lastMonth: 0,
      growth: 0
    },
    applications: {
      thisMonth: 0,
      lastMonth: 0,
      growth: 0
    }
  });

  const [monthlyData, setMonthlyData] = useState<any[]>([]);
  const [topPerformingJobs, setTopPerformingJobs] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [sessions, setSessions] = useState<any[]>([]);

  // Load and calculate analytics data
  useEffect(() => {
    const loadAnalytics = () => {
      const sessions = JSON.parse(localStorage.getItem('nth_sessions') || '[]');
      const jobs = JSON.parse(localStorage.getItem('nth_jobs') || '[]');

      const now = new Date();
      const thisMonth = now.getMonth();
      const thisYear = now.getFullYear();
      const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
      const lastMonthYear = thisMonth === 0 ? thisYear - 1 : thisYear;

      // Calculate user growth
      const thisMonthUsers = sessions.filter((session: any) => {
        const sessionDate = new Date(session.createdAt);
        return sessionDate.getMonth() === thisMonth && sessionDate.getFullYear() === thisYear;
      }).length;

      const lastMonthUsers = sessions.filter((session: any) => {
        const sessionDate = new Date(session.createdAt);
        return sessionDate.getMonth() === lastMonth && sessionDate.getFullYear() === lastMonthYear;
      }).length;

      // Calculate job postings
      const thisMonthJobs = jobs.filter((job: any) => {
        const jobDate = new Date(job.createdAt);
        return jobDate.getMonth() === thisMonth && jobDate.getFullYear() === thisYear;
      }).length;

      const lastMonthJobs = jobs.filter((job: any) => {
        const jobDate = new Date(job.createdAt);
        return jobDate.getMonth() === lastMonth && jobDate.getFullYear() === lastMonthYear;
      }).length;

      // Calculate revenue
      const thisMonthRevenue = sessions
        .filter((session: any) => session.hasPaid && session.paidAt)
        .filter((session: any) => {
          const paidDate = new Date(session.paidAt);
          return paidDate.getMonth() === thisMonth && paidDate.getFullYear() === thisYear;
        })
        .reduce((total: number, session: any) => {
          const planPrices: { [key: string]: number } = {
            basic: 25000,
            professional: 75000,
            enterprise: 150000
          };
          return total + (planPrices[session.paidPlan] || 0);
        }, 0);

      const lastMonthRevenue = sessions
        .filter((session: any) => session.hasPaid && session.paidAt)
        .filter((session: any) => {
          const paidDate = new Date(session.paidAt);
          return paidDate.getMonth() === lastMonth && paidDate.getFullYear() === lastMonthYear;
        })
        .reduce((total: number, session: any) => {
          const planPrices: { [key: string]: number } = {
            basic: 25000,
            professional: 75000,
            enterprise: 150000
          };
          return total + (planPrices[session.paidPlan] || 0);
        }, 0);

      // Calculate applications (using job views as proxy)
      const thisMonthApplications = jobs
        .filter((job: any) => {
          const jobDate = new Date(job.createdAt);
          return jobDate.getMonth() === thisMonth && jobDate.getFullYear() === thisYear;
        })
        .reduce((total: number, job: any) => total + (job.views || 0), 0);

      const lastMonthApplications = jobs
        .filter((job: any) => {
          const jobDate = new Date(job.createdAt);
          return jobDate.getMonth() === lastMonth && jobDate.getFullYear() === lastMonthYear;
        })
        .reduce((total: number, job: any) => total + (job.views || 0), 0);

      // Calculate monthly data for the last 6 months
      const monthlyStats = [];
      for (let i = 5; i >= 0; i--) {
        const monthDate = new Date(thisYear, thisMonth - i, 1);
        const month = monthDate.getMonth();
        const year = monthDate.getFullYear();
        const monthName = monthDate.toLocaleString('default', { month: 'short' });

        const monthUsers = sessions.filter((session: any) => {
          const sessionDate = new Date(session.createdAt);
          return sessionDate.getMonth() === month && sessionDate.getFullYear() === year;
        }).length;

        const monthJobs = jobs.filter((job: any) => {
          const jobDate = new Date(job.createdAt);
          return jobDate.getMonth() === month && jobDate.getFullYear() === year;
        }).length;

        const monthRevenue = sessions
          .filter((session: any) => session.hasPaid && session.paidAt)
          .filter((session: any) => {
            const paidDate = new Date(session.paidAt);
            return paidDate.getMonth() === month && paidDate.getFullYear() === year;
          })
          .reduce((total: number, session: any) => {
            const planPrices: { [key: string]: number } = {
              basic: 25000,
              professional: 75000,
              enterprise: 150000
            };
            return total + (planPrices[session.paidPlan] || 0);
          }, 0);

        monthlyStats.push({
          month: monthName,
          users: monthUsers,
          jobs: monthJobs,
          revenue: monthRevenue
        });
      }

      // Calculate top performing jobs
      const jobPerformance = jobs.map((job: any) => ({
        title: job.title,
        applications: job.views || 0,
        views: job.views || 0
      })).sort((a, b) => b.applications - a.applications).slice(0, 5);

      setAnalyticsData({
        userGrowth: {
          thisMonth: thisMonthUsers,
          lastMonth: lastMonthUsers,
          growth: lastMonthUsers > 0 ? ((thisMonthUsers - lastMonthUsers) / lastMonthUsers) * 100 : 0
        },
        jobPostings: {
          thisMonth: thisMonthJobs,
          lastMonth: lastMonthJobs,
          growth: lastMonthJobs > 0 ? ((thisMonthJobs - lastMonthJobs) / lastMonthJobs) * 100 : 0
        },
        revenue: {
          thisMonth: thisMonthRevenue,
          lastMonth: lastMonthRevenue,
          growth: lastMonthRevenue > 0 ? ((thisMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100 : 0
        },
        applications: {
          thisMonth: thisMonthApplications,
          lastMonth: lastMonthApplications,
          growth: lastMonthApplications > 0 ? ((thisMonthApplications - lastMonthApplications) / lastMonthApplications) * 100 : 0
        }
      });

      setMonthlyData(monthlyStats);
      setTopPerformingJobs(jobPerformance);
      setJobs(jobs);
      setSessions(sessions);
    };

    loadAnalytics();
    // Refresh analytics every 30 seconds
    const interval = setInterval(loadAnalytics, 30000);
    return () => clearInterval(interval);
  }, []);

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
                <span className="font-bold text-green-600">
                  {jobs.length > 0 ? ((jobs.filter(job => job.views > 0).length / jobs.length) * 100).toFixed(1) : 0}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Average Response Time</span>
                <span className="font-bold text-blue-600">
                  {sessions.length > 0 ? Math.round(sessions.reduce((acc: number, session: any) => {
                    const responseTime = new Date(session.lastActivity).getTime() - new Date(session.createdAt).getTime();
                    return acc + (responseTime / (1000 * 60 * 60)); // Convert to hours
                  }, 0) / sessions.length) : 0} hours
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">User Retention</span>
                <span className="font-bold text-purple-600">
                  {(() => {
                    const activeSessions = sessions.filter((session: any) => {
                      const lastActivity = new Date(session.lastActivity);
                      const now = new Date();
                      const daysSinceActivity = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24);
                      return daysSinceActivity <= 30; // Active in last 30 days
                    });
                    return sessions.length > 0 ? ((activeSessions.length / sessions.length) * 100).toFixed(1) : 0;
                  })()}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Payment Success Rate</span>
                <span className="font-bold text-green-600">
                  {sessions.filter(s => s.hasPaid).length > 0 ? 
                    ((sessions.filter(s => s.hasPaid && s.paidAt).length / sessions.filter(s => s.hasPaid).length) * 100).toFixed(1) : 0}%
                </span>
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