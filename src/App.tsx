import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JobSeekers from "./pages/JobSeekers";
import HireNigerianExperts from "./pages/HireNigerianExperts";
import Hire from "./pages/Hire";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import Blog from "./pages/Blog";
import Gaming from "./pages/industries/Gaming";
import Fintech from "./pages/industries/Fintech";
import Software from "./pages/industries/Software";
import PaymentSuccess from "./pages/PaymentSuccess";
import PostJobs from "./pages/PostJobs";
import EmployerPaymentSuccess from "./pages/EmployerPaymentSuccess";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminJobManagement from "./pages/admin/AdminJobManagement";
import AdminUserManagement from "./pages/admin/AdminUserManagement";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";
import { getCurrentSession } from "./libs/userSession";

const AdminProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const session = getCurrentSession();
  const adminEmails = ['zongsevenonline@gmail.com', 'mygamingace@gmail.com'];
  const isAdminUser = session?.email && adminEmails.includes(session.email);
  const adminAccess = localStorage.getItem('admin_access') === 'true' || isAdminUser;

  if (!adminAccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You don't have permission to access the admin panel.
          </p>
          <a
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job-seekers" element={<JobSeekers />} />
          <Route
            path="/hire-nigerian-experts"
            element={<HireNigerianExperts />}
          />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/industries/gaming" element={<Gaming />} />
          <Route path="/industries/fintech" element={<Fintech />} />
          <Route path="/industries/software" element={<Software />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/post-jobs" element={<PostJobs />} />
          <Route path="/employer-payment-success" element={<EmployerPaymentSuccess />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="jobs" element={<AdminJobManagement />} />
            <Route path="users" element={<AdminUserManagement />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
