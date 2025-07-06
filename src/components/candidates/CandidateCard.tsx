
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Star, Calendar } from "lucide-react";
import CandidateProfile from "./CandidateProfile";

interface Candidate {
  id: number;
  fullName: string;
  title: string;
  location: string;
  avatar: string;
  rating: number;
  experience: string;
  hourlyRate: string;
  skills: string[];
  bio: string;
  availability: string;
  email: string;
  phone: string;
  portfolio: string;
  cv: string;
  premium: boolean;
}

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleViewProfile = () => {
    setIsProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  };

  const handleContactClick = () => {
    window.location.href = `mailto:${candidate.email}`;
  };

  return (
    <>
      <Card className="card-hover bg-white dark:bg-gray-800">
        <CardHeader className="text-center">
          <div className="w-24 h-24 mx-auto mb-4">
            <img
              src={candidate.avatar}
              alt={candidate.fullName}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <CardTitle className="text-xl text-gray-900 dark:text-white">
            {candidate.fullName}
            {candidate.premium && (
              <Badge className="ml-2 bg-yellow-500 text-white">
                Premium
              </Badge>
            )}
          </CardTitle>
          <p className="text-red-600 dark:text-red-400 font-medium">
            {candidate.title}
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4" />
            {candidate.location}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Rating and Experience */}
          <div className="flex justify-center items-center">
            {/* Contact Buttons */}
            <div className="flex gap-2">
              <Button size="sm" className="flex-1" onClick={handleContactClick}>
                <Mail className="h-4 w-4 mr-1" />
                Contact
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1"
                onClick={handleViewProfile}
              >
                View Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <CandidateProfile 
        candidate={candidate}
        isOpen={isProfileOpen}
        onClose={handleCloseProfile}
      />
    </>
  );
};

export default CandidateCard;
export type { Candidate };
