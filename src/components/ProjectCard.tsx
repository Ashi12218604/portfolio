
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  results: string[];
  technologies: string[];
  date: string;
}

const ProjectCard = ({ title, description, results, technologies, date }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-indigo-900">{title}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-1" />
          <span>{date}</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <ul className="list-disc list-inside mb-4 text-gray-700">
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="bg-indigo-100 text-indigo-800 border-indigo-200">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
