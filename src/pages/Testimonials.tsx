
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
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
              <div className="text-6xl mb-6">🚧</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                This Page is in Development
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We're working hard to bring you amazing client testimonials. 
                This section will showcase the experiences of companies who have 
                successfully hired through MarvelRecruit.
              </p>
              <p className="text-gray-500 mb-8">
                Check back soon for inspiring stories and feedback from our satisfied clients!
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

export default Testimonials;
