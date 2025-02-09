import React from "react";

const achievements = [
  {
    title: "Best Researcher Award",
    year: 2023,
    organization: "National Science Foundation",
    description: "Awarded for outstanding contributions in AI research.",
  },
  {
    title: "Excellence in Teaching",
    year: 2022,
    organization: "NIT Jamshedpur",
    description: "Recognized for innovative teaching methodologies.",
  },
  {
    title: "Top 10 Researchers in Data Science",
    year: 2021,
    organization: "International AI Association",
    description: "Ranked among the top 10 researchers in data science worldwide.",
  },
];

export default function Achievements() {
  return (
    <div className="app-container container mt-5">
      <h2 className="text-center mb-4">Achievements & Awards</h2>
      <div className="row">
        {achievements.map((achievement, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">{achievement.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {achievement.organization} - {achievement.year}
                </h6>
                <p className="card-text">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
