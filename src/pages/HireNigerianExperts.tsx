
import Layout from "@/components/Layout";
import HeroBanner from "@/components/hire-experts/HeroBanner";
import WhyNigeriaSection from "@/components/hire-experts/WhyNigeriaSection";
import ExpertiseSection from "@/components/hire-experts/ExpertiseSection";
import SuccessStoriesSection from "@/components/hire-experts/SuccessStoriesSection";
import ProcessSection from "@/components/hire-experts/ProcessSection";
import CTASection from "@/components/hire-experts/CTASection";

const HireNigerianExperts = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <HeroBanner />
        <WhyNigeriaSection />
        <ExpertiseSection />
        <SuccessStoriesSection />
        <ProcessSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default HireNigerianExperts;
