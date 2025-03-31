import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Project {
  title: string;
  description: string;
  results: string[];
  technologies: string[];
  date: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "MNIST Digital Classifier",
    description: "Implemented a handwritten digit classifier using Logistic Regression and CNN, achieving 98% accuracy.",
    results: [
      "Trained on MNIST dataset",
      "Implemented Logistic Regression and CNN",
      "Achieved 98% accuracy"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Google Colab"],
    date: "2024",
    image: "/images/mnist.png"
  },
  {
    title: "Polynomial Evaluator",
    description: "Developed a Java-based polynomial evaluator using Linked Lists for efficient mathematical operations.",
    results: [
      "Implemented Linked List for polynomial storage",
      "Supports polynomial addition, subtraction, and evaluation"
    ],
    technologies: ["Java", "Linked List", "Data Structures"],
    date: "2024",
    image: "/images/polynomial.png"
  },
  {
    title: "EDA on Weather Analysis",
    description: "Explored weather trends using Exploratory Data Analysis (EDA) techniques and data visualizations.",
    results: [
      "Created correlation matrices and scatter plots",
      "Identified trends in temperature, humidity, and precipitation"
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    date: "2024",
    image: "/images/weather-eda.png"
  },
  {
    title: "Weather App",
    description: "Built a GUI-based weather application using Python to fetch and display real-time weather data.",
    results: [
      "Integrated API for real-time weather updates",
      "Designed an interactive GUI using Tkinter"
    ],
    technologies: ["Python", "Tkinter", "OpenWeather API"],
    date: "2024",
    image: "/images/weather-app.png"
  },
  {
    title: "Navy Analysis and Route Optimization",
    description: "Conducting maritime data analysis and optimizing ship routes using graph algorithms.",
    results: [
      "Scraped maritime data for route optimization",
      "Implemented graph algorithms for optimal path computation"
    ],
    technologies: ["Python", "Web Scraping", "Graph Algorithms"],
    date: "2025",
    image: "/images/navy-route.png"
  }
];

const ProjectCard = ({ title, description, results, technologies, date, image }: Project) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
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

const ProjectList = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
