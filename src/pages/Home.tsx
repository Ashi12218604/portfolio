
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Book, BriefcaseBusiness, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900">What I Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 bg-indigo-100 rounded-full mb-4">
                  <Activity size={24} className="text-indigo-600" />
                </div>
                <CardTitle className="text-center">Data Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Advanced data processing and analytical techniques to extract meaningful insights.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 bg-indigo-100 rounded-full mb-4">
                  <Book size={24} className="text-indigo-600" />
                </div>
                <CardTitle className="text-center">Visualization</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Creating interactive and insightful dashboards with advanced visualization techniques.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 bg-indigo-100 rounded-full mb-4">
                  <BriefcaseBusiness size={24} className="text-indigo-600" />
                </div>
                <CardTitle className="text-center">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Implementing ML algorithms for predictive analysis and pattern recognition.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 bg-indigo-100 rounded-full mb-4">
                  <Award size={24} className="text-indigo-600" />
                </div>
                <CardTitle className="text-center">Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Building efficient applications with optimized backend processes and user-friendly interfaces.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-indigo-700 hover:bg-indigo-800">
              <Link to="/skills">View My Skills <ChevronRight size={16} className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-indigo-900">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Some of my most significant data and development projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-indigo-900">Navy Analysis and Route Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Created interactive visual dashboards for route analysis, reducing data interpretation time by 30% and improving route efficiency.
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="outline" className="text-indigo-700 border-indigo-700 hover:bg-indigo-50">
                    <Link to="/projects">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-indigo-900">Weather App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Streamlined an intuitive weather app with a user-friendly Tkinter GUI, boosting user engagement by 50%.
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="outline" className="text-indigo-700 border-indigo-700 hover:bg-indigo-50">
                    <Link to="/projects">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-indigo-700 hover:bg-indigo-800">
              <Link to="/projects">View All Projects <ChevronRight size={16} className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
