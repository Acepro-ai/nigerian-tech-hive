
const ProcessSection = () => {
  const processSteps = [
    {
      title: "Tell Us Your Needs",
      description: "Share your project requirements and ideal candidate profile"
    },
    {
      title: "We Match Talent",
      description: "Our team identifies the best candidates from our network"
    },
    {
      title: "Interview & Select",
      description: "Meet candidates and choose the perfect fit for your team"
    },
    {
      title: "Start Building",
      description: "Begin working with your new team member immediately"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Simple Hiring Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We make it easy to find and hire the right talent for your projects
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div className="text-center" key={index}>
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
