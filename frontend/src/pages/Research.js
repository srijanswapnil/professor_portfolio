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
  {
    title: "The Role of AI in Medical Diagnostics",
    authors: "Dr. Emily Clark, Prof. Zhang",
    year: 2021,
    journal: "Medical AI Journal",
    link: "#",
  },
  {
    title: "The Role of AI in Medical Diagnostics",
    authors: "Dr. Emily Clark, Prof. Zhang",
    year: 2021,
    journal: "Medical AI Journal",
    link: "#",
  },
  {
    title: "The Role of AI in Medical Diagnostics",
    authors: "Dr. Emily Clark, Prof. Zhang",
    year: 2021,
    journal: "Medical AI Journal",
    link: "#",
  },
  {
    title: "The Role of AI in Medical Diagnostics",
    authors: "Dr. Emily Clark, Prof. Zhang",
    year: 2021,
    journal: "Medical AI Journal",
    link: "#",
  },
  {
    title: "The Role of AI in Medical Diagnostics",
    authors: "Dr. Emily Clark, Prof. Zhang",
    year: 2021,
    journal: "Medical AI Journal",
    link: "#",
  },
  {
    title: "Deep Learning for Natural Language Processing",
    authors: "Dr. John Doe, Prof. Smith",
    year: 2023,
    journal: "International Journal of AI Research",
    link: "#",
  }
];

export default function Research() {
  return (
    <div className="app-container container mt-5">
      <h2 className="text-center mb-4 text-primary fw-bold">📚 Research Papers</h2>
      <div className="table-responsive">
        <table className="table table-hover table-striped shadow-lg rounded">
          <thead className="table-dark text-center">
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
              <tr key={index} className="text-center align-middle">
                <td className="fw-bold">{paper.title}</td>
                <td>{paper.authors}</td>
                <td>{paper.year}</td>
                <td>{paper.journal}</td>
                <td>
                  {paper.link !== "#" ? (
                    <a
                      href={paper.link}
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Paper 📄
                    </a>
                  ) : (
                    <span className="text-muted">Not Available</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



