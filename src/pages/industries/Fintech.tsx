
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FintechOverview from "@/components/fintech/FintechOverview";
import FintechRoles from "@/components/fintech/FintechRoles";
import FintechBenefits from "@/components/fintech/FintechBenefits";

const Fintech = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="hero-gradient text-white py-20 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/">
              <Button variant="outline" className="mb-6 text-white border-white hover:bg-white hover:text-red-600 dark:border-white/20 dark:hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Fintech Opportunities
              </h1>
              <p className="text-xl leading-relaxed">
                Join the financial revolution with cutting-edge fintech companies. 
                Build payment systems, blockchain applications, and digital banking solutions 
                that are transforming how the world handles money.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Overview */}
        <FintechOverview />

        {/* Available Roles */}
        <FintechRoles />

        {/* Benefits Section */}
        <FintechBenefits />
      </div>
    </Layout>
  );
};

export default Fintech;
