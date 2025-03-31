
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-900 text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">Ashi Gupta</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-indigo-200 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-indigo-200 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-indigo-200 transition-colors">Projects</Link>
          <Link to="/skills" className="hover:text-indigo-200 transition-colors">Skills</Link>
          <Link to="/certifications" className="hover:text-indigo-200 transition-colors">Certifications</Link>
          <Link to="/contact" className="hover:text-indigo-200 transition-colors">Contact</Link>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-indigo-900 md:hidden flex flex-col items-center py-4 shadow-lg">
            <Link to="/" className="py-2 hover:text-indigo-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="py-2 hover:text-indigo-200" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/projects" className="py-2 hover:text-indigo-200" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/skills" className="py-2 hover:text-indigo-200" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            <Link to="/certifications" className="py-2 hover:text-indigo-200" onClick={() => setIsMenuOpen(false)}>Certifications</Link>
            <Link to="/contact" className="py-2 hover:text-indigo-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
