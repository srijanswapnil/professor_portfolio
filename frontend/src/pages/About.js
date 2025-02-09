import React from "react";

const About = () => {
  const about = {
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    image: "https://via.placeholder.com/120",
    bio: "Dr. John Doe is a renowned professor specializing in Artificial Intelligence and Machine Learning with over 20 years of research and teaching experience.",
    researchInterests: ["Deep Learning", "Natural Language Processing", "Computer Vision"],
    experience: "Professor at XYZ University since 2005, with prior research at ABC Institute.",
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="text-primary fw-bold">About the Professor</h2>
      <div className="card shadow-lg p-4">
        <img src={about.image} alt={about.name} className="rounded-circle mb-3" width="120" />
        <h3 className="fw-bold">{about.name}</h3>
        <h5 className="text-muted">{about.title}</h5>
        <p className="mt-3">{about.bio}</p>
        <h4 className="mt-4">Research Interests</h4>
        <ul className="list-group">
          {about.researchInterests.map((interest, index) => (
            <li key={index} className="list-group-item">{interest}</li>
          ))}
        </ul>
        <h4 className="mt-4">Experience</h4>
        <p>{about.experience}</p>
      </div>
    </div>
  );
};

export default About;
