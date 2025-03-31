
import SkillCard from "@/components/SkillCard";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: "Languages",
      skills: ["Java", "Python", "SQL"]
    },
    {
      id: 2,
      category: "Frameworks",
      skills: ["SpringBoot", "Pandas", "TensorFlow", "Keras"]
    },
    {
      id: 3,
      category: "Tools/Platforms",
      skills: ["Tableau", "IntelliJ", "MySQL", "Google Colab", "Jupyter", "GitHub"]
    },
    {
      id: 4,
      category: "Soft Skills",
      skills: ["Adaptability", "Time Management", "Prioritization", "Communication"]
    },
    {
      id: 5,
      category: "Data Analysis",
      skills: ["Data Visualization", "Statistical Analysis", "Predictive Modeling", "Feature Engineering"]
    },
    {
      id: 6,
      category: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Algorithm Selection"]
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-indigo-200">A comprehensive overview of my technical and soft skills</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <SkillCard key={category.id} category={category.category} skills={category.skills} />
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Skill Highlights</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Data Analysis & Visualization</h3>
                <p className="text-gray-700">
                  Proficient in analyzing complex datasets and creating intuitive visualizations that effectively communicate insights. Experienced with Tableau for creating interactive dashboards and Python libraries for data processing and visualization.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Programming & Development</h3>
                <p className="text-gray-700">
                  Strong programming skills in Java and Python with experience in building efficient applications and implementing algorithms. Familiar with various frameworks and tools to streamline development processes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Machine Learning</h3>
                <p className="text-gray-700">
                  Experience implementing machine learning algorithms for predictive analysis and pattern recognition. Skilled in feature engineering, model training, and evaluation to derive actionable insights from data.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Problem-Solving</h3>
                <p className="text-gray-700">
                  Strong analytical and problem-solving abilities with a proven track record of identifying patterns, optimizing processes, and implementing effective solutions that drive business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
