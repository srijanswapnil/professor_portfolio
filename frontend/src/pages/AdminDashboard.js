import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const adminSections = [
    { path: "/admin/projects", label: "Manage Projects"},
    { path: "/admin/research", label: "Manage Research" },
    { path: "/admin/achievements", label: "Manage Achievements" },
    { path: "/admin/blogs", label: "Manage Blogs" },
    { path: "/admin/awards", label: "Manage Awards" },
    { path: "/admin/collaborators", label: "Manage Collaborators" },
  ];

  return (
    <div className="app-container mt-5 text-center">
      <h2 className="mb-4 fw-bold text-primary">Admin Panel</h2>
      <div className="row justify-content-center">
        {adminSections.map((section, index) => (
          <div key={index} className="col-md-4 mb-3">
            <Link to={section.path} className="admin-card shadow-lg">
              <div className="icon">{section.icon}</div>
              <h5 className="mt-2">{section.label}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

