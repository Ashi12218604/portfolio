
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ashi Gupta</h1>
          <h2 className="text-2xl md:text-3xl text-indigo-200 mb-6">Data Scientist & Developer</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-md">
            Specializing in data analysis, visualization, and machine learning with a passion for creating efficient, data-driven solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-white text-indigo-900 hover:bg-gray-100">
              <Link to="/contact">Contact Me <ChevronRight size={16} className="ml-1" /></Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              <a href="/Ashi_Gupta_Resume.pdf" download className="inline-flex items-center px-4 py-2 border border-white text-white rounded-lg hover:bg-white/10">
  <Download size={16} className="mr-2" /> Download CV
</a>

            </Button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-white shadow-xl w-64 h-64">
            <img 
              src="/lovable-uploads/ff56bd81-b9a4-4c95-aa66-e5541c1438f2.png" 
              alt="Ashi Gupta" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
