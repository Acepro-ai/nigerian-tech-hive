
import { Button } from "@/components/ui/button";
import CandidateCard, { Candidate } from "./CandidateCard";

interface CandidatesGridProps {
  candidates: Candidate[];
}

const CandidatesGrid = ({ candidates }: CandidatesGridProps) => {
  return (
    <>
      {/* Candidates Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className="text-center pb-16">
        <Button variant="outline" size="lg">
          Load More Candidates
        </Button>
      </div>
    </>
  );
};

export default CandidatesGrid;
