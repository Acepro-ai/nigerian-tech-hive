
import { Button } from "@/components/ui/button";

const CandidatesFilters = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="sm">All Specialties</Button>
          <Button variant="outline" size="sm">Frontend</Button>
          <Button variant="outline" size="sm">Backend</Button>
          <Button variant="outline" size="sm">Mobile</Button>
          <Button variant="outline" size="sm">DevOps</Button>
          <Button variant="outline" size="sm">Data Science</Button>
          <Button variant="outline" size="sm">Blockchain</Button>
        </div>
      </div>
    </div>
  );
};

export default CandidatesFilters;
