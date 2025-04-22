import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MNIST Digital Classifier",
      description: "Built a high-accuracy digit recognition system using ML models",
      results: [
        "Achieved 98% accuracy using CNN for digit classification on the MNIST dataset",
        "Compared logistic regression and CNN, showcasing the superiority of deep learning for image tasks",
        "Utilized Google Colab, TensorFlow, and Keras for model training and evaluation",
        "Built two pipelines for training, testing, and visualizing performance"
      ],
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Google Colab"],
      date: "Jul 23 - Aug 23"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Development of an interactive weather application with real-time data",
      results: [
        "Streamlined an intuitive weather app with a user-friendly Tkinter GUI, boosting user engagement by 50%",
        "Integrated Geopy and Timezonefinder for enhanced location handling and performance",
        "Utilized Requests and PIL libraries to fetch and display real-time weather data with visual appeal",
        "Ensured smooth application performance with optimized backend processing"
      ],
      technologies: ["Python", "Tkinter", "Geopy", "TimezoneFinder", "Requests", "PIL", "GitHub"],
      date: "Apr 24 - Jun 24"
    },
    {
      id: 3,
      title: "Polynomial Evaluator",
      description: "Implemented polynomial arithmetic using Linked Lists in Java",
      results: [
        "Developed a modular and scalable polynomial evaluator using LinkedList data structure",
        "Supported polynomial addition, subtraction, and evaluation at given values",
        "Improved understanding of linked data structures and their applications in mathematical computations",
        "Tested edge cases such as zero coefficients, unequal lengths, and nested expressions"
      ],
      technologies: ["Java", "OOP", "Linked List", "Data Structures"],
      date: "May 23 - Jun 23"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-indigo-200">Showcasing my expertise in ML, data structures, and GUI development</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              results={project.results}
              technologies={project.technologies}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
