
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero-gradient text-white py-20 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Hire Nigerian Tech Experts
          </h1>
          <p className="text-xl leading-relaxed mb-8 text-white/90 dark:text-white/80">
            Access Africa's largest pool of skilled software developers, engineers, 
            and tech professionals. Build your global team with Nigeria's finest talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/candidates">
              <Button size="lg" variant="secondary" className="transition-colors">
                Start Hiring Today
              </Button>
            </Link>
            <Link to="/candidates">
              <Button size="lg" variant="secondary" className="transition-colors">
                View Talent Pool
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
