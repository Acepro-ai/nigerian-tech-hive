
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="hero-gradient text-white py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Your Global Team?
        </h2>
        <p className="text-xl mb-8">
          Join hundreds of companies that have successfully hired Nigerian tech talent
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/candidates">
            <Button size="lg" variant="secondary" className="transition-colors">
              Get Started Today
            </Button>
          </Link>
          <a href="https://calendly.com/zongsevenonline/meeting-with-marvelous-2?month=2025-06" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="transition-colors">
              Schedule a Call
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
