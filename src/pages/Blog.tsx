
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">📝</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Blog Coming Soon
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We're preparing insightful articles about tech careers, industry trends, 
                and success stories from Nigerian developers working globally.
              </p>
              <p className="text-gray-500 mb-8">
                Stay tuned for expert insights, career advice, and the latest 
                opportunities in the tech industry!
              </p>
              <Link to="/">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Go Back to Home Page
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
