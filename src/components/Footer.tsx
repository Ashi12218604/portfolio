
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ashi Gupta</h3>
            <p className="text-indigo-200">Data Scientist & Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
            <a href="mailto:agupta8555@gmail.com" className="flex items-center hover:text-indigo-200 transition-colors">
              <Mail size={18} className="mr-2" /> agupta8555@gmail.com
            </a>
            <a href="tel:+919879379845" className="flex items-center hover:text-indigo-200 transition-colors">
              <Phone size={18} className="mr-2" /> +91-9879379845
            </a>
            <a href="https://www.linkedin.com/in/ashi-gupta-48590a9/" className="flex items-center hover:text-indigo-200 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} className="mr-2" /> ashi-gupta-48590a9
            </a>
            <a href="https://github.com/Ashi12218694" className="flex items-center hover:text-indigo-200 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" /> Ashi12218694
            </a>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center">
          <p className="text-indigo-300">© {new Date().getFullYear()} Ashi Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
