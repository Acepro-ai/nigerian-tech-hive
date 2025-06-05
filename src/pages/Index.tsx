
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  Users, 
  Globe, 
  Award, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Top Tech Talent
              <span className="block text-red-200">From Around The Globe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              We connect exceptional Nigerian and global tech professionals with companies seeking world-class talent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
                <Link to="/hire-nigerian-experts" className="flex items-center">
                  Hire Talent <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8">
                <Link to="/job-seekers">Find Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Talented Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-300">Companies Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose MarvelRecruit?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We specialize in connecting top-tier African tech talent, particularly from Nigeria, 
                with global opportunities. Our rigorous vetting process ensures you get access to 
                exceptional professionals who are ready to make an impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Thoroughly vetted candidates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Fast and efficient hiring process</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Ongoing support and consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Competitive rates with top quality</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 dark:text-white">Expert Talent</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Access to skilled professionals across multiple tech domains</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 dark:text-white">Global Reach</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Remote-first approach connecting talent worldwide</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 dark:text-white">Quality Assured</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Rigorous screening process ensures top-tier candidates</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 dark:text-white">Proven Results</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Track record of successful placements and satisfied clients</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our expertise spans across multiple tech industries, providing specialized talent for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/industries/gaming">
              <Card className="card-hover h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Gaming</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    Game developers, designers, artists, and producers who bring gaming experiences to life
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Explore Gaming Roles
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/industries/fintech">
              <Card className="card-hover h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Fintech/Blockchain</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    Blockchain developers, cybersecurity analysts, and fintech specialists
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Explore Fintech Roles
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/industries/software">
              <Card className="card-hover h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Software & Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    Full-stack developers, DevOps engineers, and software architects
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Explore Software Roles
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Card className="card-hover h-full opacity-75">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Healthcare Tech</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  Health informatics specialists, telemedicine developers, and medical software engineers
                </p>
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover h-full opacity-75">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">E-commerce</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  E-commerce platform developers, marketplace specialists, and payment integration experts
                </p>
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover h-full opacity-75">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">EdTech</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  Educational platform developers, learning management system specialists, and instructional designers
                </p>
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview - COMMENTED OUT
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "MarvelRecruit helped us find exceptional Nigerian developers who seamlessly integrated into our team. The quality of talent is outstanding."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-gray-500 text-sm">CTO, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The recruitment process was smooth and efficient. We found the perfect blockchain developer for our project within weeks."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-gray-500 text-sm">Founder, CryptoStart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Outstanding service! The talent they provided exceeded our expectations and delivered exceptional results for our gaming project."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Emily Rodriguez</div>
                    <div className="text-gray-500 text-sm">Lead Producer, GameStudio</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                View All Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Next Star Employee?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            You might have been struggling to find and hire the right candidates, but now our experts can tell you how to avoid common mistakes and accelerate interviews.
          </p>
          <p className="text-lg mb-8 text-red-100">
            Book a Free consulting call with one of our recruitment experts to discuss:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <div>
              <h4 className="font-semibold mb-2">Your Budget vs. Expectations Match</h4>
              <p className="text-red-100 text-sm">Let us analyze your expectations and provide feedback on whether they align with market standards.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Your Offer Positioning</h4>
              <p className="text-red-100 text-sm">Get feedback on who your vacancy could be the "Dream Job" for and whether the offer is compelling.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Your Target Location</h4>
              <p className="text-red-100 text-sm">Learn what tech hubs, cities, and countries would be a better fit given your budget constraints.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Collaboration</h4>
              <p className="text-red-100 text-sm">Discuss what we can do for you and how we can make the hiring process easy and seamless.</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
            Book a Free Consulting Call
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
