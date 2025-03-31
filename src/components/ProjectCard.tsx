import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Project {
  title: string;
  image: string;
  description: string;
  results: string[];
  technologies: string[];
  date: string;
}

const projects: Project[] = [
  {
    title: "MNIST Digital Classifier",
    image: "/mnist.avif",
    description: "Implemented a digit classifier using Logistic Regression and CNN achieving 98% accuracy.",
    results: [
      "Achieved 98% accuracy on the MNIST dataset.",
      "Compared Logistic Regression with CNN performance.",
      "Visualized predictions with Matplotlib."
    ],
    technologies: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
    date: "2024-06-20"
  },
  {
    title: "Polynomial Evaluator",
    image: "/polynomial.jpg",
    description: "Designed a Java-based polynomial evaluator using LinkedList to perform polynomial operations.",
    results: [
      "Implemented addition, subtraction, and multiplication of polynomials.",
      "Used LinkedList for efficient storage and retrieval.",
      "Optimized for large polynomial calculations."
    ],
    technologies: ["Java", "LinkedList", "OOP"],
    date: "2024-07-15"
  },
  {
    title: "EDA on Weather Analysis",
    image: "/weather analysis.png",
    description: "Performed Exploratory Data Analysis (EDA) on weather data to uncover trends and insights.",
    results: [
      "Created visualizations like histograms, scatter plots, and correlation matrices.",
      "Analyzed temperature, humidity, and precipitation trends.",
      "Used Python libraries for data processing and visualization."
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    date: "2024-08-10"
  },
  {
    title: "Weather App",
    image: "/weather app.avif",
    description: "Developed a GUI-based weather application using Python to display real-time weather updates.",
    results: [
      "Fetched real-time weather data via API.",
      "Displayed weather conditions with a user-friendly UI.",
      "Used Tkinter for GUI development."
    ],
    technologies: ["Python", "Tkinter", "API Integration"],
    date: "2024-09-05"
  },
  {
    title: "Navy Analysis & Route Optimization",
    image: "/navy.png",
    description: "Analyzed maritime data and optimized naval routes using graph-based techniques.",
    results: [
      "Collected real-world maritime data via web scraping.",
      "Used graph algorithms for optimal route calculation.",
      "Minimized travel time and fuel consumption."
    ],
    technologies: ["Python", "Graph Algorithms", "Web Scraping"],
    date: "2025-03-01"
  }
];

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-indigo-900">{project.title}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={16} className="mr-1" />
              <span>{project.date}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {project.results.map((result, i) => (
              <li key={i}>{result}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="bg-indigo-100 text-indigo-800 border-indigo-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
