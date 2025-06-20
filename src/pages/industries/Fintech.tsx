
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
              <Button  className="mb-6 text-white border-white hover:bg-white hover:text-red-600 dark:border-white/20 dark:hover:bg-white/10">
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

        {/* Job Seeker CTA Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Apply?
            </h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Join our network of fintech professionals and get access to exciting opportunities with innovative financial technology companies.
            </p>
            <Link to="/job-seekers">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8">
                Join Our Network
              </Button>
            </Link>
          </div>
        </section>

        {/* Employer CTA Section */}
        <section className="py-20 hero-gradient text-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Next Star Employee?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              You might have been struggling to find and hire the right candidates, but now our experts can tell you how to avoid common mistakes and accelerate interviews.
            </p>
            <p className="text-lg mb-8 text-red-100">
              Book a Free consulting call with one of our recruitment experts to discuss:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div>
                <h4 className="font-semibold mb-2">Your Budget vs. Expectations Match</h4>
                <p className="text-red-100 text-sm">Let us analyze your expectations and provide feedback on whether they align with market standards.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Your Offer Positioning</h4>
                <p className="text-red-100 text-sm">Get feedback on who your vacancy could be the "Dream Job" for and whether the offer is compelling.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Your Target Location</h4>
                <p className="text-red-100 text-sm">Learn what tech hubs, cities, and countries would be a better fit given your budget constraints.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-red-100 text-sm">Discuss what we can do for you and how we can make the hiring process easy and seamless.</p>
              </div>
            </div>
            <a href="https://calendly.com/zongsevenonline/meeting-with-marvelous-2?month=2025-06" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
                Book a Free Consulting Call
              </Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Fintech;
