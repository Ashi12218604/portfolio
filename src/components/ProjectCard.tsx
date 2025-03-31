import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Project {
  title: string;
  description: string;
  results: string[];
  technologies: string[];
  date: string;
  image: string;  // Image path
}

const projects: Project[] = [
  {
    title: "MNIST Digital Classifier",
    description: "A machine learning project for handwritten digit classification using CNN and Logistic Regression.",
    results: [
      "Achieved 98% accuracy on test data",
      "Implemented in Python using TensorFlow",
      "Trained on the MNIST dataset"
    ],
    technologies: ["Python", "TensorFlow", "CNN", "Logistic Regression"],
    date: "2024-06-15",
    image: "/mnist.avif"
  },
  {
    title: "Polynomial Evaluator",
    description: "A Java project to evaluate polynomial expressions efficiently using linked lists.",
    results: [
      "Supports addition, subtraction, and multiplication of polynomials",
      "Implemented linked list-based polynomial storage",
      "Optimized for performance"
    ],
    technologies: ["Java", "Linked List", "Data Structures"],
    date: "2024-07-01",
    image: "/polynomial.jpg"
  },
  {
    title: "EDA on Weather Analysis",
    description: "An exploratory data analysis project focused on weather trends and patterns.",
    results: [
      "Visualized correlation between temperature, humidity, and precipitation",
      "Generated heatmaps and scatter plots",
      "Analyzed yearly weather fluctuations"
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    date: "2024-08-10",
    image: "/weather-analysis.png"
  },
  {
    title: "Weather App",
    description: "A GUI-based weather application providing real-time weather updates.",
    results: [
      "Fetches real-time weather data via API",
      "User-friendly graphical interface",
      "Displays temperature, humidity, and weather conditions"
    ],
    technologies: ["Python", "Tkinter", "API Integration"],
    date: "2024-08-25",
    image: "/weather-app.avif"
  },
  {
    title: "Navy Analysis and Route Optimization",
    description: "A data analysis project for optimizing maritime navigation routes.",
    results: [
      "Implemented shortest path algorithms for route optimization",
      "Analyzed naval traffic and congestion",
      "Enhanced efficiency in maritime operations"
    ],
    technologies: ["Python", "Graph Algorithms", "Data Analysis"],
    date: "2024-09-05",
    image: "/navy.png"
  }
];

const ProjectCard = ({ title, description, results, technologies, date, image }: Project) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
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

const Projects = () => {
  console.log("Projects component rendered!");  // Debugging to check re-renders

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-indigo-900 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
