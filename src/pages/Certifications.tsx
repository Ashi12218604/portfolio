
import CertificationCard from "@/components/CertificationCard";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Supervised Machine Learning",
      provider: "Coursera",
      date: "Feb 23 - Mar 23"
    },
    {
      id: 2,
      title: "Data Analysis with Tableau",
      provider: "Coursera",
      date: "Feb 23 - Mar 23"
    },
    {
      id: 3,
      title: "IBM SQL",
      provider: "Coursera",
      date: "Jun 23 - Feb 23"
    },
    {
      id: 4,
      title: "Renaissance",
      provider: "Programming Pathshala",
      date: "Sep 24 - Oct 24"
    },
    {
      id: 5,
      title: "MongoDB",
      provider: "MongoDB",
      date: "Jun 24 - Jul 24"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Certifications</h1>
          <p className="text-xl text-indigo-200">Professional certifications and achievements</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              title={certification.title}
              provider={certification.provider}
              date={certification.date}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Continuing Education</h2>
          <p className="text-gray-700 mb-6">
            I am committed to continuous learning and professional development. Beyond these certifications, I regularly participate in workshops, webinars, and online courses to stay current with the latest technologies and methodologies in data science and software development.
          </p>
          
          <h3 className="text-xl font-semibold text-indigo-900 mb-3">Current Learning Focus:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Advanced machine learning techniques and deep learning</li>
            <li>Cloud-based data solutions and big data technologies</li>
            <li>Data engineering best practices</li>
            <li>Advanced visualization techniques</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
