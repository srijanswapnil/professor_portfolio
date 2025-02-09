import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="app-container mt-5 text-center">
      <h2 className="mb-4">Admin Panel</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <Link to="/admin/projects" className="btn btn-primary btn-lg w-100">Manage Projects</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/admin/research" className="btn btn-primary btn-lg w-100">Manage Research</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/admin/achievements" className="btn btn-primary btn-lg w-100">Manage Achievements</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/admin/blogs" className="btn btn-primary btn-lg w-100">Manage Blogs</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/admin/awards" className="btn btn-primary btn-lg w-100">Manage Awards</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/admin/collaborators" className="btn btn-primary btn-lg w-100">Manage Collaborators</Link>
        </div>
      </div>
    </div>
  );
}

