
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Hiring Tech Talent from Nigeria: A Guide to Tapping into a Growing Workforce",
      excerpt: "In the rapidly evolving landscape of technology, companies across the globe are increasingly looking to diversify their talent pool. Nigeria's vibrant tech ecosystem presents an invaluable opportunity for organizations seeking innovative, cost-effective solutions.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "12 min read",
      category: "Talent Acquisition"
    },
    {
      id: 2,
      title: "Hiring Blockchain and Web3 Experts: A Comprehensive Guide",
      excerpt: "As blockchain and Web3 technologies continue to redefine industries across the globe, the demand for specialized talent has skyrocketed. This comprehensive guide explores how to find, evaluate, and retain top-tier blockchain professionals.",
      author: "Michael Chen",
      date: "December 10, 2024",
      readTime: "15 min read",
      category: "Blockchain & Web3"
    },
    {
      id: 3,
      title: "The Potentials of the C# Programming Language",
      excerpt: "C# has evolved from a simple, object-oriented language into a powerful tool capable of handling a wide range of applications. Discover why C# continues to be one of the most popular choices for developers worldwide.",
      author: "Emily Rodriguez",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Programming Languages"
    },
    {
      id: 4,
      title: "IT Job Market Trends: Opportunities and Skills in Demand",
      excerpt: "The IT job market is constantly evolving, and as technology continues to advance, the demand for new skills and expertise changes. Understanding these trends can help both job seekers and employers navigate this fast-paced industry.",
      author: "David Kim",
      date: "December 5, 2024",
      readTime: "8 min read",
      category: "Career Development"
    }
  ];

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
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-700 dark:text-white">
                    Read More
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
