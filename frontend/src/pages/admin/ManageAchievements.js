import React, { useState } from "react";
import AdminForm from "../../components/AdminForm";

export default function ManageResearch() {
  const [research, setResearch] = useState([]);

  const handleAddResearch = (newResearch) => {
    setResearch([...research, newResearch]);
  };

  return (
    <div className="container mt-5">
      <h2>Manage Achievements</h2>
      <AdminForm title="Add Research Paper" fields={["Title", "Author", "Publication Year", "Link"]} onSubmit={handleAddResearch} />

      <h3 className="mt-4">Research Papers</h3>
      <ul className="list-group">
        {research.map((paper, index) => (
          <li key={index} className="list-group-item">
            <strong>{paper.Title}</strong> - {paper.Author} ({paper["Publication Year"]}) <br />
            <a href={paper.Link} target="_blank" rel="noopener noreferrer">View Paper</a>
          </li>
        ))}
      </ul>
    </div>
  );
}