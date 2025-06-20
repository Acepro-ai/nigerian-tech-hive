
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  const blogPosts = [
    {
      id: 1,
      title: "Hiring Tech Talent from Nigeria: A Guide to Tapping into a Growing Workforce",
      excerpt: "In the rapidly evolving landscape of technology, companies across the globe are increasingly looking to diversify their talent pool. Nigeria's vibrant tech ecosystem presents an invaluable opportunity for organizations seeking innovative, cost-effective solutions.",
      fullContent: "In the rapidly evolving landscape of technology, companies across the globe are increasingly looking to diversify their talent pool. Nigeria's vibrant tech ecosystem presents an invaluable opportunity for organizations seeking innovative, cost-effective solutions. With a population exceeding 200 million people and a rapidly growing tech sector, Nigeria has emerged as a hub for technological innovation in Africa. The country boasts a young, educated workforce with strong English proficiency and a deep understanding of global business practices. Nigerian tech professionals are known for their creativity, problem-solving abilities, and adaptability to new technologies. Companies hiring from Nigeria can benefit from cost-effective solutions without compromising on quality, access to a diverse talent pool with varied skill sets, and professionals who understand both local and international market dynamics.",
      date: "2025",
      readTime: "12 min read",
      category: "Talent Acquisition"
    },
    {
      id: 2,
      title: "Hiring Blockchain and Web3 Experts: A Comprehensive Guide",
      excerpt: "As blockchain and Web3 technologies continue to redefine industries across the globe, the demand for specialized talent has skyrocketed. This comprehensive guide explores how to find, evaluate, and retain top-tier blockchain professionals.",
      fullContent: "As blockchain and Web3 technologies continue to redefine industries across the globe, the demand for specialized talent has skyrocketed. This comprehensive guide explores how to find, evaluate, and retain top-tier blockchain professionals. The blockchain industry has evolved from a niche technology to a mainstream solution powering everything from financial services to supply chain management. Web3 represents the next evolution of the internet, built on decentralized principles that give users more control over their data and digital assets. When hiring blockchain experts, look for professionals with experience in smart contract development, understanding of various blockchain protocols, knowledge of consensus mechanisms, and familiarity with DeFi and NFT ecosystems. The most successful blockchain professionals combine technical expertise with business acumen and the ability to explain complex concepts to non-technical stakeholders.",
      date: "2025",
      readTime: "15 min read",
      category: "Blockchain & Web3"
    },
    {
      id: 3,
      title: "The Potentials of the C# Programming Language",
      excerpt: "C# has evolved from a simple, object-oriented language into a powerful tool capable of handling a wide range of applications. Discover why C# continues to be one of the most popular choices for developers worldwide.",
      fullContent: "C# has evolved from a simple, object-oriented language into a powerful tool capable of handling a wide range of applications. Discover why C# continues to be one of the most popular choices for developers worldwide. Since its introduction by Microsoft in 2000, C# has undergone significant evolution, transforming from a Windows-centric language to a cross-platform powerhouse. The language's versatility allows developers to build desktop applications, web services, mobile apps, games, and cloud-based solutions. C#'s strong type system, automatic memory management, and extensive library ecosystem make it an excellent choice for enterprise development. The language's integration with the .NET ecosystem provides developers with powerful frameworks like ASP.NET for web development, Xamarin for mobile development, and Unity for game development. Modern C# features like async/await, LINQ, and pattern matching have made the language more expressive and developer-friendly.",
      date: "2025",
      readTime: "10 min read",
      category: "Programming Languages"
    },
    {
      id: 4,
      title: "IT Job Market Trends: Opportunities and Skills in Demand",
      excerpt: "The IT job market is constantly evolving, and as technology continues to advance, the demand for new skills and expertise changes. Understanding these trends can help both job seekers and employers navigate this fast-paced industry.",
      fullContent: "The IT job market is constantly evolving, and as technology continues to advance, the demand for new skills and expertise changes. Understanding these trends can help both job seekers and employers navigate this fast-paced industry. Current market trends show high demand for cloud computing professionals, artificial intelligence and machine learning specialists, cybersecurity experts, and full-stack developers. Remote work has fundamentally changed how IT professionals approach their careers, opening up global opportunities and creating new challenges for talent acquisition. Employers are increasingly looking for professionals who combine technical skills with soft skills like communication, collaboration, and adaptability. The rise of DevOps practices has created demand for professionals who can bridge the gap between development and operations. Additionally, the growing importance of data-driven decision making has increased demand for data engineers, analysts, and scientists across all industries.",
      date: "2025",
      readTime: "8 min read",
      category: "Career Development"
    }
  ];

  const togglePostExpansion = (postId: number) => {
    setExpandedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-6 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Career & Industry Insights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, career advice, and opportunities 
              in the global tech industry for Nigerian professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="card-hover bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="text-sm text-red-600 font-medium mb-2">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl mb-3 text-gray-900 dark:text-white">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {expandedPosts.includes(post.id) ? post.fullContent : post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <Button 
                    onClick={() => togglePostExpansion(post.id)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-700 dark:text-white"
                  >
                    {expandedPosts.includes(post.id) ? 'Read Less' : 'Read More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-800">
            <CardContent className="p-12">
              <div className="text-5xl mb-6">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Content Coming Soon!
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We're working on bringing you more valuable insights, career guides, 
                and industry analysis. Subscribe to our newsletter to stay updated.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-700 dark:text-white">
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
