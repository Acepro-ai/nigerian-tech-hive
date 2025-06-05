
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Remote Work in Nigerian Tech",
      excerpt: "Exploring how Nigerian developers are leveraging remote opportunities to work with global companies and advance their careers.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Career Development"
    },
    {
      id: 2,
      title: "Top Programming Languages for 2024",
      excerpt: "A comprehensive guide to the most in-demand programming languages and frameworks that Nigerian developers should focus on.",
      author: "Michael Chen",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Building a Strong Tech Portfolio",
      excerpt: "Essential tips for creating a portfolio that stands out to international employers and showcases your technical skills effectively.",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Career Tips"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tech Career & Industry Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, career advice, and opportunities 
              in the global tech industry for Nigerian professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="card-hover">
                <CardHeader>
                  <div className="text-sm text-red-600 font-medium mb-2">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl mb-3">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto text-center">
            <CardContent className="p-12">
              <div className="text-5xl mb-6">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                More Content Coming Soon!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're working on bringing you more valuable insights, career guides, 
                and industry analysis. Subscribe to our newsletter to stay updated.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
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
