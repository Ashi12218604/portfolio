
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-indigo-200">Data Scientist & Developer with a passion for data-driven solutions</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Professional Profile</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                I am a data scientist and developer specializing in data analysis, visualization, and machine learning with strong programming skills in Python, Java, and SQL.
              </p>
              <p>
                My expertise includes building interactive dashboards, implementing machine learning algorithms, and developing user-friendly applications that deliver significant business value through improved efficiency and data-driven decision-making.
              </p>
              <p>
                I am passionate about finding innovative solutions to complex problems and have a proven track record of reducing costs, improving efficiency, and enhancing user experiences through data analysis and application development.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-indigo-900 mt-12 mb-6">Training</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Briefcase className="mr-4 text-indigo-600" size={24} />
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-indigo-900">Programming Pathshala - Renaissance</h3>
                        <span className="text-gray-600 text-sm">Nov 24 - Jan 25</span>
                      </div>
                      <p className="text-gray-700 mt-2">
                        <strong>About:</strong> Grasped fundamental and advanced data structure and algorithms, enhancing troubleshooting skills and coding efficiency.
                      </p>
                      <p className="text-gray-700 mt-2">
                        <strong>Tech stacks used:</strong> Java, Data Structures and Algorithms
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Briefcase className="mr-4 text-indigo-600" size={24} />
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-indigo-900">Job Ad Learnings - Tableau Masters</h3>
                        <span className="text-gray-600 text-sm">Jun 24 - Jul 24</span>
                      </div>
                      <p className="text-gray-700 mt-2">
                        <strong>About:</strong> Orchestrated advanced data visualization skills using Tableau, creating interactive and insightful dashboards for effective data analysis.
                      </p>
                      <p className="text-gray-700 mt-2">
                        Leveraged Tableau's features for data blending, filtering and custom calculations, enhancing data driven decision making capabilities.
                      </p>
                      <p className="text-gray-700 mt-2">
                        <strong>Tech stacks used:</strong> Tableau and Dashboards
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">Education</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <GraduationCap className="mr-3 text-indigo-600" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900">Lovely Professional University</h3>
                    <p className="text-gray-700">Bachelor of Technology - Computer Science and Engineering</p>
                    <p className="text-gray-600">CGPA: 7.96</p>
                    <p className="text-gray-600 text-sm">Aug 22 - Jul 26</p>
                    <p className="text-gray-600 text-sm">Punjab, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <GraduationCap className="mr-3 text-indigo-600" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900">Summer Valley School</h3>
                    <p className="text-gray-700">Class XII</p>
                    <p className="text-gray-600">Percentage: 93%</p>
                    <p className="text-gray-600 text-sm">Apr 21 - Mar 22</p>
                    <p className="text-gray-600 text-sm">Dehradun, Uttarakhand</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <GraduationCap className="mr-3 text-indigo-600" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900">Summer Valley School</h3>
                    <p className="text-gray-700">Class X</p>
                    <p className="text-gray-600">Percentage: 93%</p>
                    <p className="text-gray-600 text-sm">Apr 19 - Mar 20</p>
                    <p className="text-gray-600 text-sm">Dehradun, Uttarakhand</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  <a href="mailto:guptaashi655@gmail.com" className="text-indigo-600 hover:underline">guptaashi655@gmail.com</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  <a href="tel:+918791379845" className="text-indigo-600 hover:underline">+91-8791379845</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/ashi-gupta-48590a9/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">ashi-gupta-48590a9</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">GitHub:</span>
                  <a href="https://github.com/Ashi12218694" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">Ashi12218694</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
