
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Star, Calendar, User } from "lucide-react";
import { Candidate } from "./CandidateCard";

interface CandidateProfileProps {
  candidate: Candidate | null;
  isOpen: boolean;
  onClose: () => void;
}

const CandidateProfile = ({ candidate, isOpen, onClose }: CandidateProfileProps) => {
  if (!candidate) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Candidate Profile
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Section */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4">
              <img
                src={candidate.avatar}
                alt={candidate.fullName}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {candidate.fullName}
            </h2>
            <p className="text-red-600 dark:text-red-400 font-medium text-lg">
              {candidate.title}
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 mt-2">
              <MapPin className="h-4 w-4" />
              {candidate.location}
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid justify-center gap-4 text-center">
            {/* <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-bold text-lg">{candidate.rating}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Rating</p>
            </div> */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="font-bold text-lg mb-1">{candidate.experience}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Experience</p>
            </div>
            {/* <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="font-bold text-lg mb-1">{candidate.hourlyRate}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Per Hour</p>
            </div> */}
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              About
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {candidate.bio}
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Availability */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Availability
            </h3>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <span className="text-green-600 font-medium">
                {candidate.availability}
              </span>
            </div>
          </div> */}

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-300">
                  {candidate.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-300">
                  {candidate.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button className="flex-1">
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline" className="flex-1">
              <User className="h-4 w-4 mr-2" />
              Save Profile
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CandidateProfile;
