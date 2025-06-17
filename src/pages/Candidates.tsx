
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Globe, Star, Calendar } from "lucide-react";

const Candidates = () => {
  const candidates = [
    {
      id: 1,
      name: "Adebayo Ogundimu",
      title: "Senior Full Stack Developer",
      location: "Lagos, Nigeria",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      experience: "5+ years",
      hourlyRate: "$25-35",
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
      bio: "Experienced full-stack developer with a passion for building scalable web applications. Proven track record of delivering high-quality solutions for international clients.",
      availability: "Available now",
      email: "adebayo@example.com",
      phone: "+234 901 234 5678"
    },
    {
      id: 2,
      name: "Fatima Abdullahi",
      title: "Mobile App Developer",
      location: "Abuja, Nigeria",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      experience: "4+ years",
      hourlyRate: "$20-30",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      bio: "Mobile app specialist with expertise in cross-platform development. Successfully launched 15+ apps on both iOS and Android platforms.",
      availability: "Available in 2 weeks",
      email: "fatima@example.com",
      phone: "+234 802 345 6789"
    },
    {
      id: 3,
      name: "Chioma Okafor",
      title: "UI/UX Designer & Frontend Developer",
      location: "Port Harcourt, Nigeria",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      experience: "6+ years",
      hourlyRate: "$22-32",
      skills: ["Figma", "React", "Vue.js", "Tailwind CSS", "Adobe Creative Suite"],
      bio: "Creative designer and frontend developer who bridges the gap between design and development. Expert in creating beautiful, user-friendly interfaces.",
      availability: "Available now",
      email: "chioma@example.com",
      phone: "+234 703 456 7890"
    },
    {
      id: 4,
      name: "Emeka Nwosu",
      title: "DevOps Engineer",
      location: "Enugu, Nigeria",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      experience: "7+ years",
      hourlyRate: "$30-40",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      bio: "Infrastructure automation specialist with extensive experience in cloud platforms and CI/CD pipelines. Helps teams scale efficiently.",
      availability: "Available in 1 week",
      email: "emeka@example.com",
      phone: "+234 804 567 8901"
    },
    {
      id: 5,
      name: "Aisha Mohammed",
      title: "Data Scientist",
      location: "Kano, Nigeria",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      experience: "4+ years",
      hourlyRate: "$28-38",
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Tableau"],
      bio: "Data science expert with a strong background in machine learning and statistical analysis. Transforms complex data into actionable business insights.",
      availability: "Available now",
      email: "aisha@example.com",
      phone: "+234 905 678 9012"
    },
    {
      id: 6,
      name: "Olumide Fashola",
      title: "Blockchain Developer",
      location: "Lagos, Nigeria",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      experience: "3+ years",
      hourlyRate: "$35-45",
      skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "DeFi"],
      bio: "Blockchain specialist focused on DeFi and smart contract development. Pioneer in creating secure and innovative decentralized applications.",
      availability: "Available in 3 weeks",
      email: "olumide@example.com",
      phone: "+234 806 789 0123"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="hero-gradient text-white py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Available Nigerian Tech Experts</h1>
              <p className="text-xl text-white/90 dark:text-white/80 max-w-3xl mx-auto">
                Browse profiles of verified Nigerian tech professionals ready to join your team
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
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

        {/* Candidates Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {candidates.map((candidate) => (
                <Card key={candidate.id} className="card-hover bg-white dark:bg-gray-800">
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
                      <Button size="sm" variant="outline" className="flex-1">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
      </div>
    </Layout>
  );
};

export default Candidates;
