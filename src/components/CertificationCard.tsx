import React from 'react';

// Define certificate data
const certificates = [
  {
    name: "SQL Certification",
    url: "https://www.coursera.org/account/accomplishments/certificate/NIOODDFLNY6R"
  },
  {
    name: "Machine Learning Certification",
    url: "https://www.coursera.org/account/accomplishments/certificate/MA1QKY6HSBP4"
  },
  {
    name: "Renaissance Data Structures & Algorithms",
    url: "https://certificates.programmingpathshala.com/v1/doc?id=f23d75d9f375fda86b5cd25218da51d48828fe5d018d18ecf24c6c9712d823a1"
  },
  {
    name: "MongoDB Certification",
    url: "https://learn.mongodb.com/c/hUUsZcLxQdO1uu6yPIa8UQ"
  }
];

const CertificationCard: React.FC = () => {
  return (
    <div className="certification-card-container">
      {certificates.map((cert, index) => (
        <div className="certification-card" key={index}>
          <a href={cert.url} target="_blank" rel="noopener noreferrer">
            <div className="certification-card-content">
              <h3>{cert.name}</h3>
              <p>Click here to view your certificate</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CertificationCard;
