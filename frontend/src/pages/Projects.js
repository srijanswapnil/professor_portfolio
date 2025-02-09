import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const projectsData = [
  {
    title: "AI-Based Research Paper Analyzer",
    description: "A tool that uses AI to analyze research papers and generate insights.",
    technologies: ["React", "Node.js", "MongoDB", "Python"],
  },
  {
    title: "Conference Management System",
    description: "A web app to manage academic conferences, paper submissions, and peer reviews.",
    technologies: ["MERN Stack", "Bootstrap"],
  },
  {
    title: "Machine Learning Model for Academic Performance",
    description: "A predictive model to analyze student performance based on research data.",
    technologies: ["Python", "TensorFlow", "Flask"],
  },
  {
    title: "Machine Learning Model for Academic Performance",
    description: "A predictive model to analyze student performance based on research data.",
    technologies: ["Python", "TensorFlow", "Flask"],
  },
  {
    title: "Machine Learning Model for Academic Performance",
    description: "A predictive model to analyze student performance based on research data.",
    technologies: ["Python", "TensorFlow", "Flask"],
  },{
    title: "Machine Learning Model for Academic Performance",
    description: "A predictive model to analyze student performance based on research data.",
    technologies: ["Python", "TensorFlow", "Flask"],
  }
];

export default function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    gsap.from(projectRefs.current, {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".projects-title", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="app-container container mt-5">
      <h2 className="text-center mb-4 projects-title">🚀 Featured Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div ref={(el) => (projectRefs.current[index] = el)} className="card h-100 shadow-lg project-card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

