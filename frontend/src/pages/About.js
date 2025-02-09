import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/about")
      .then(response => setAbout(response.data))
      .catch(error => console.error("Error fetching about info:", error));
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div className="app-container mt-5">
      <h2 className="text-center text-primary">About the Professor</h2>
      <div className="card shadow p-4">
        <div className="text-center">
          <img src={about.image} alt={about.name} className="profile-image" />
          <h3>{about.name}</h3>
          <h5 className="text-muted">{about.title}</h5>
        </div>
        <p className="mt-3">{about.bio}</p>
        <h4>Research Interests</h4>
        <ul>
          {about.researchInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <h4>Experience</h4>
        <p>{about.experience}</p>
      </div>
    </div>
  );
};

export default About;
