import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Search, 
  MoreVertical,
  Edit,
  Trash2,
  Ban,
  CheckCircle,
  XCircle,
  Plus,
  Mail,
  Calendar,
  MapPin,
  Briefcase,
  Building2,
  Crown,
  Star,
  Shield
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
} from "@/components/ui/dialog";

interface User {
  id: string;
  name: string;
  email: string;
  type: 'job_seeker' | 'employer' | 'admin';
  status: 'active' | 'suspended' | 'pending';
  plan: 'free' | 'premium' | 'basic' | 'professional' | 'enterprise';
  joinDate: string;
  lastActive: string;
  location: string;
  avatar?: string;
  // Job seeker specific
  skills?: string[];
  experience?: string;
  // Employer specific
  company?: string;
  jobsPosted?: number;
  totalSpent?: number;
}

const AdminUserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userTypeFilter, setUserTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Mock data - in a real app this would come from your backend
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'John Okafor',
      email: 'john.okafor@email.com',
      type: 'job_seeker',
      status: 'active',
      plan: 'premium',
      joinDate: '2024-08-15',
      lastActive: '2024-10-14',
      location: 'Lagos, Nigeria',
      skills: ['React', 'Node.js', 'TypeScript', 'Python'],
      experience: '5+ years'
    },
    {
      id: '2',
      name: 'Sarah Ahmed',
      email: 'sarah.ahmed@example.com',
      type: 'job_seeker',
      status: 'active',
      plan: 'free',
      joinDate: '2024-09-10',
      lastActive: '2024-10-13',
      location: 'Abuja, Nigeria',
      skills: ['Flutter', 'Dart', 'Firebase'],
      experience: '3+ years'
    },
    {
      id: '3',
      name: 'TechCorp Nigeria',
      email: 'hr@techcorp.ng',
      type: 'employer',
      status: 'active',
      plan: 'professional',
      joinDate: '2024-07-20',
      lastActive: '2024-10-14',
      location: 'Lagos, Nigeria',
      company: 'TechCorp Nigeria',
      jobsPosted: 5,
      totalSpent: 375000
    },
    {
      id: '4',
      name: 'StartupXYZ',
      email: 'jobs@startupxyz.com',
      type: 'employer',
      status: 'pending',
      plan: 'basic',
      joinDate: '2024-10-12',
      lastActive: '2024-10-12',
      location: 'Remote',
      company: 'StartupXYZ',
      jobsPosted: 1,
      totalSpent: 25000
    },
    {
      id: '5',
      name: 'David Nkem',
      email: 'david.nkem@gmail.com',
      type: 'job_seeker',
      status: 'suspended',
      plan: 'free',
      joinDate: '2024-06-05',
      lastActive: '2024-09-20',
      location: 'Port Harcourt, Nigeria',
      skills: ['Java', 'Spring Boot', 'MySQL'],
      experience: '4+ years'
    }
  ]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (user.company && user.company.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = userTypeFilter === 'all' || user.type === userTypeFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const jobSeekers = filteredUsers.filter(user => user.type === 'job_seeker');
  const employers = filteredUsers.filter(user => user.type === 'employer');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'suspended': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'free': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'premium': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'basic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'professional': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'enterprise': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPlanIcon = (plan: string) => {
    switch (plan) {
      case 'premium': return <Crown className="h-4 w-4" />;
      case 'professional': return <Star className="h-4 w-4" />;
      case 'enterprise': return <Shield className="h-4 w-4" />;
      default: return null;
    }
  };

  const handleSuspendUser = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'suspended' as const } : user
    ));
  };

  const handleActivateUser = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'active' as const } : user
    ));
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const UserCard = ({ user }: { user: User }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {user.name}
                </h3>
                <Badge className={getStatusColor(user.status)}>
                  {user.status}
                </Badge>
                <Badge className={getPlanColor(user.plan)}>
                  {getPlanIcon(user.plan)}
                  <span className="ml-1 capitalize">{user.plan}</span>
                </Badge>
              </div>
              
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {user.email}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {user.location}
                </div>
                {user.type === 'job_seeker' && user.skills && (
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {user.experience} • {user.skills.slice(0, 3).join(', ')}
                    {user.skills.length > 3 && ` +${user.skills.length - 3} more`}
                  </div>
                )}
                {user.type === 'employer' && (
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2" />
                    {user.company} • {user.jobsPosted} jobs posted • ₦{user.totalSpent?.toLocaleString()} spent
                  </div>
                )}
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Joined {user.joinDate} • Last active {user.lastActive}
                </div>
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
              <DropdownMenuItem onClick={() => setSelectedUser(user)}>
                <Edit className="h-4 w-4 mr-2" />
                View Details
              </DropdownMenuItem>
              {user.status === 'active' ? (
                <DropdownMenuItem onClick={() => handleSuspendUser(user.id)}>
                  <Ban className="h-4 w-4 mr-2" />
                  Suspend User
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem onClick={() => handleActivateUser(user.id)}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Activate User
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => handleDeleteUser(user.id)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete User
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Manage job seekers, employers, and administrators</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{users.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Job Seekers</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {users.filter(u => u.type === 'job_seeker').length}
                </p>
              </div>
              <Briefcase className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Employers</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {users.filter(u => u.type === 'employer').length}
                </p>
              </div>
              <Building2 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {users.filter(u => u.status === 'active').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search users, emails, or companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <Select value={userTypeFilter} onValueChange={setUserTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="User Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="job_seeker">Job Seekers</SelectItem>
                  <SelectItem value="employer">Employers</SelectItem>
                  <SelectItem value="admin">Admins</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Users ({filteredUsers.length})</TabsTrigger>
          <TabsTrigger value="job_seekers">Job Seekers ({jobSeekers.length})</TabsTrigger>
          <TabsTrigger value="employers">Employers ({employers.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </TabsContent>

        <TabsContent value="job_seekers" className="space-y-4">
          {jobSeekers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </TabsContent>

        <TabsContent value="employers" className="space-y-4">
          {employers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </TabsContent>
      </Tabs>

      {/* User Details Modal */}
      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedUser.avatar} />
                  <AvatarFallback>
                    {selectedUser.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{selectedUser.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedUser.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">User Type</label>
                  <p className="capitalize">{selectedUser.type.replace('_', ' ')}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <p className="capitalize">{selectedUser.status}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Plan</label>
                  <p className="capitalize">{selectedUser.plan}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Location</label>
                  <p>{selectedUser.location}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Join Date</label>
                  <p>{selectedUser.joinDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Last Active</label>
                  <p>{selectedUser.lastActive}</p>
                </div>
              </div>

              {selectedUser.type === 'job_seeker' && selectedUser.skills && (
                <div>
                  <label className="text-sm font-medium text-gray-500">Skills</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedUser.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {selectedUser.type === 'employer' && (
                <div className="space-y-2">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Company</label>
                    <p>{selectedUser.company}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Jobs Posted</label>
                      <p>{selectedUser.jobsPosted}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Total Spent</label>
                      <p>₦{selectedUser.totalSpent?.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminUserManagement;