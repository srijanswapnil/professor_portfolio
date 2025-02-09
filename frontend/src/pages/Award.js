import React from "react";

const awardsData = [
  {
    title: "Best Researcher Award",
    year: "2023",
    organization: "National Science Foundation",
    description: "Awarded for outstanding contributions in AI research and publications.",
  },
  {
    title: "Excellence in Teaching",
    year: "2022",
    organization: "NIT Jamshedpur",
    description: "Recognized for innovative teaching methodologies in computer science.",
  },
  {
    title: "Top 10 Researchers in Data Science",
    year: "2021",
    organization: "International AI Association",
    description: "Ranked among the top 10 researchers in data science worldwide.",
  },
];

const Awards = () => {
  return (
    <div className="awards-container">
      <h2 className="awards-heading">Awards & Recognitions</h2>
      <div className="awards-list">
        {awardsData.map((award, index) => (
          <div key={index} className="award-card">
            <h3 className="award-title">{award.title}</h3>
            <h4 className="award-organization">{award.organization} - {award.year}</h4>
            <p className="award-description">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
