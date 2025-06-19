
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Star, Calendar } from "lucide-react";
import CandidateProfile from "./CandidateProfile";

interface Candidate {
  id: number;
  name: string;
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

  return (
    <>
      <Card className="card-hover bg-white dark:bg-gray-800">
        <CardHeader className="text-center">
          <div className="w-24 h-24 mx-auto mb-4">
            <img
              src={candidate.avatar}
              alt={candidate.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <CardTitle className="text-xl text-gray-900 dark:text-white">
            {candidate.name}
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
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="font-medium text-gray-900 dark:text-white">
                {candidate.rating}
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {candidate.experience}
            </div>
          </div>

          {/* Hourly Rate */}
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {candidate.hourlyRate}
            </span>
            <span className="text-gray-600 dark:text-gray-300">/hour</span>
          </div>

          {/* Skills */}
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Skills:</p>
            <div className="flex flex-wrap gap-1">
              {candidate.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {candidate.bio}
          </p>

          {/* Availability */}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-600 font-medium">
              {candidate.availability}
            </span>
          </div>

          {/* Contact Buttons */}
          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
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
