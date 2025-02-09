import React from "react";

const researchPapers = [
  {
    title: "Deep Learning for Natural Language Processing",
    authors: "Dr. John Doe, Prof. Smith",
    year: 2023,
    journal: "International Journal of AI Research",
    link: "#",
  },
  {
    title: "Blockchain Applications in Data Security",
    authors: "Dr. Alice Brown, Prof. Kumar",
    year: 2022,
    journal: "Journal of Computer Security",
    link: "#",
  },
  {
    title: "The Role of AI in Medical Diagnostics",
    authors: "Dr. Emily Clark, Prof. Zhang",
    year: 2021,
    journal: "Medical AI Journal",
    link: "#",
  },
];

export default function Research() {
  return (
    <div className="app-container container mt-5">
      <h2 className="text-center mb-4">Research Papers</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Year</th>
              <th>Journal</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {researchPapers.map((paper, index) => (
              <tr key={index}>
                <td>{paper.title}</td>
                <td>{paper.authors}</td>
                <td>{paper.year}</td>
                <td>{paper.journal}</td>
                <td>
                  <a href={paper.link} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    View Paper
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


