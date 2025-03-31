import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "MNIST Digital Classifier",
    description: "Implemented a digit classifier using Logistic Regression and CNN achieving 98% accuracy.",
    date: "2024-06-20",
    image: "/mnist.avif",
  },
  {
    title: "Polynomial Evaluator",
    description: "Designed a Java-based polynomial evaluator using LinkedList to perform polynomial computations.",
    date: "2024-07-15",
    image: "/polynomial.jpg",
  },
  {
    title: "EDA on Weather Analysis",
    description: "Performed Exploratory Data Analysis (EDA) on weather data to derive meaningful insights.",
    date: "2024-08-10",
    image: "/weather-analysis.png",
  },
  {
    title: "Weather App",
    description: "Built a GUI-based weather app in Python using various APIs for real-time weather updates.",
    date: "2024-09-05",
    image: "/weather-app.avif",
  },
  {
    title: "Navy Analysis and Route Optimization",
    description: "Analyzed maritime data and optimized naval routes using data analysis techniques.",
    date: "2024-10-12",
    image: "/navy.png",
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{project.date}</p>
              <p className="text-gray-700">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
