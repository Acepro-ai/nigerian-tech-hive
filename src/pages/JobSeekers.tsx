
import Layout from "@/components/Layout";
import JobSeekersHeader from "@/components/job-seekers/JobSeekersHeader";
import JobSeekersBenefits from "@/components/job-seekers/JobSeekersBenefits";
import JobSeekersPlans from "@/components/job-seekers/JobSeekersPlans";
import JobSeekersForm from "@/components/job-seekers/JobSeekersForm";

const JobSeekers = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <JobSeekersHeader />
          <JobSeekersBenefits />
          <JobSeekersPlans />
          <JobSeekersForm />
        </div>
      </div>
    </Layout>
  );
};

export default JobSeekers;
