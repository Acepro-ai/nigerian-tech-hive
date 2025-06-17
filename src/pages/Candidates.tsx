
import Layout from "@/components/Layout";
import CandidatesHeader from "@/components/candidates/CandidatesHeader";
import CandidatesFilters from "@/components/candidates/CandidatesFilters";
import CandidatesGrid from "@/components/candidates/CandidatesGrid";
import { Candidate } from "@/components/candidates/CandidateCard";

const Candidates = () => {
  const candidates: Candidate[] = [
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
        <CandidatesHeader />
        <CandidatesFilters />
        <CandidatesGrid candidates={candidates} />
      </div>
    </Layout>
  );
};

export default Candidates;
