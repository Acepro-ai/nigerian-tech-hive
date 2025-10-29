import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  Mail, 
  Shield, 
  DollarSign,
  Globe,
  Bell,
  Database,
  Key,
  Server,
  Save
} from 'lucide-react';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'Marvel Recruit',
    siteDescription: 'Connecting Nigerian tech talent with global opportunities',
    siteUrl: 'https://marvelrecruit.com',
    
    // Email Settings
    emailNotifications: true,
    adminEmail: 'admin@marvelrecruit.com',
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    
    // Payment Settings
    paystackPublicKey: 'pk_live_60e482d0d8784edb5bb19b5f812d8bc07f8a1817',
    paystackSecretKey: '••••••••••••••••••••••••••••••••',
    enablePayments: true,
    
    // Platform Settings
    jobApprovalRequired: true,
    userVerificationRequired: false,
    maxJobsPerEmployer: 10,
    jobExpiryDays: 30,
    
    // Security Settings
    enableTwoFactor: false,
    sessionTimeout: 24,
    maxLoginAttempts: 5,
    
    // Feature Flags
    enableJobSeekerPlans: true,
    enableEmployerPlans: true,
    enableAnalytics: true,
    enableNotifications: true
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    console.log('Saving settings:', settings);
    // Here you would save the settings to your backend
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Configure platform settings and preferences
          </p>
        </div>
        <Button onClick={handleSaveSettings} className="bg-red-600 hover:bg-red-700">
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="platform">Platform</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Site Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Site Name</label>
                <Input
                  value={settings.siteName}
                  onChange={(e) => handleSettingChange('siteName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Site Description</label>
                <Textarea
                  value={settings.siteDescription}
                  onChange={(e) => handleSettingChange('siteDescription', e.target.value)}
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Site URL</label>
                <Input
                  value={settings.siteUrl}
                  onChange={(e) => handleSettingChange('siteUrl', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium">Email Notifications</label>
                  <p className="text-sm text-gray-500">Enable/disable email notifications</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Admin Email</label>
                <Input
                  type="email"
                  value={settings.adminEmail}
                  onChange={(e) => handleSettingChange('adminEmail', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">SMTP Host</label>
                  <Input
                    value={settings.smtpHost}
                    onChange={(e) => handleSettingChange('smtpHost', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">SMTP Port</label>
                  <Input
                    value={settings.smtpPort}
                    onChange={(e) => handleSettingChange('smtpPort', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Payment Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium">Enable Payments</label>
                  <p className="text-sm text-gray-500">Allow users to make payments</p>
                </div>
                <Switch
                  checked={settings.enablePayments}
                  onCheckedChange={(checked) => handleSettingChange('enablePayments', checked)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Paystack Public Key</label>
                <Input
                  value={settings.paystackPublicKey}
                  onChange={(e) => handleSettingChange('paystackPublicKey', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Paystack Secret Key</label>
                <Input
                  type="password"
                  value={settings.paystackSecretKey}
                  onChange={(e) => handleSettingChange('paystackSecretKey', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Platform Settings */}
        <TabsContent value="platform" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="h-5 w-5 mr-2" />
                Platform Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium">Job Approval Required</label>
                  <p className="text-sm text-gray-500">Require admin approval for new job postings</p>
                </div>
                <Switch
                  checked={settings.jobApprovalRequired}
                  onCheckedChange={(checked) => handleSettingChange('jobApprovalRequired', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium">User Verification Required</label>
                  <p className="text-sm text-gray-500">Require email verification for new users</p>
                </div>
                <Switch
                  checked={settings.userVerificationRequired}
                  onCheckedChange={(checked) => handleSettingChange('userVerificationRequired', checked)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Max Jobs per Employer</label>
                  <Input
                    type="number"
                    value={settings.maxJobsPerEmployer}
                    onChange={(e) => handleSettingChange('maxJobsPerEmployer', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Job Expiry (Days)</label>
                  <Input
                    type="number"
                    value={settings.jobExpiryDays}
                    onChange={(e) => handleSettingChange('jobExpiryDays', parseInt(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Feature Flags
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Job Seeker Plans</label>
                  <Switch
                    checked={settings.enableJobSeekerPlans}
                    onCheckedChange={(checked) => handleSettingChange('enableJobSeekerPlans', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Employer Plans</label>
                  <Switch
                    checked={settings.enableEmployerPlans}
                    onCheckedChange={(checked) => handleSettingChange('enableEmployerPlans', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Analytics</label>
                  <Switch
                    checked={settings.enableAnalytics}
                    onCheckedChange={(checked) => handleSettingChange('enableAnalytics', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Notifications</label>
                  <Switch
                    checked={settings.enableNotifications}
                    onCheckedChange={(checked) => handleSettingChange('enableNotifications', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium">Two-Factor Authentication</label>
                  <p className="text-sm text-gray-500">Enable 2FA for admin accounts</p>
                </div>
                <Switch
                  checked={settings.enableTwoFactor}
                  onCheckedChange={(checked) => handleSettingChange('enableTwoFactor', checked)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Session Timeout (hours)</label>
                  <Input
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Max Login Attempts</label>
                  <Input
                    type="number"
                    value={settings.maxLoginAttempts}
                    onChange={(e) => handleSettingChange('maxLoginAttempts', parseInt(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2" />
                API Keys & Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Security Note:</strong> API keys are sensitive information. 
                  Only share them with authorized personnel and rotate them regularly.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Google Analytics ID</label>
                <Input placeholder="GA-XXXXXXXXX-X" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Facebook Pixel ID</label>
                <Input placeholder="123456789012345" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;