import { useState } from "react";

function Projects() {
  const [projects] = useState([
    { id: 1, title: "AI-Based Traffic Monitoring", description: "An AI model to optimize traffic flow in smart cities." },
    { id: 2, title: "Blockchain for Secure Voting", description: "A blockchain-based voting system to enhance election security." }
  ]);

  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4">
            <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">{projects.title}</h5>
                    <p class="card-text">{projects.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

