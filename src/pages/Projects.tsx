
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Navy Analysis and Route Optimization",
      description: "Created interactive visual dashboards for route analysis",
      results: [
        "Engineered 25+ detailed visualizations, reducing data interpretation time by 30%",
        "Enabled implementation of graph based algorithm, targeting a 20% reduction in travel distance",
        "Projected 15% cost reduction and 25% route efficiency improving data driven insights"
      ],
      technologies: ["Python", "Seaborn", "Matplotlib", "Selenium", "NumPy", "NetworkX", "Graph Algorithms"],
      date: "Feb 23 - Mar 23"
    },
    {
      id: 2,
      title: "Weather Data Analysis",
      description: "Comprehensive analysis of weather patterns and forecasting",
      results: [
        "Engineered 5+ detailed visualizations, reducing data interpretation time by 35%",
        "Identified 5+ key insights in seasonal trends, enhancing climate analysis efficiency by 25%",
        "Analyzed temperature, humidity and precipitation data, improving prediction accuracy by 15%",
        "Applied EDA techniques to uncover correlations and anomalies for comprehensive weather analysis"
      ],
      technologies: ["Python", "EDA", "Data Visualization"],
      date: "Aug 23 - Oct 24"
    },
    {
      id: 3,
      title: "Weather App",
      description: "Development of an interactive weather application with real-time data",
      results: [
        "Streamlined an intuitive weather app with a user-friendly Tkinter GUI, boosting user engagement by 50%",
        "Integrated Geopy and Timezonefinder features using Geopy and TimezoneFinder, improving response time by 35%",
        "Utilized Requests and PIL libraries to fetch and display real-time weather data with enhanced visual appeal",
        "Ensured smooth application performance with optimized backend process, enhancing user experience"
      ],
      technologies: ["Python", "Tkinter", "Geopy", "TimezoneFinder", "Requests", "PIL", "GitHub"],
      date: "Apr 24 - Jun 24"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-indigo-200">Showcasing my expertise in data analysis, visualization, and application development</p>
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
