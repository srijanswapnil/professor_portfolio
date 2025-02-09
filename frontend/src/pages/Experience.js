import React from "react"; // Import CSS file

const experienceData = [
  {
    position: "Professor of Computer Science",
    institution: "XYZ University",
    duration: "2015 - Present",
    description: "Teaching advanced courses in Artificial Intelligence, Machine Learning, and Data Science.",
  },
  {
    position: "Senior Research Scientist",
    institution: "ABC Institute",
    duration: "2010 - 2015",
    description: "Led research on AI-driven automation and published numerous papers in top journals.",
  },
  {
    position: "Assistant Professor",
    institution: "LMN University",
    duration: "2005 - 2010",
    description: "Conducted research in Deep Learning and mentored graduate students.",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-heading">Professional Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-position">{exp.position}</h3>
            <h4 className="experience-institution">{exp.institution}</h4>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
