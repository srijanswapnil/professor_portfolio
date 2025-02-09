import React, { useState, useEffect } from "react";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", technologies: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId ? `http://localhost:5000/api/projects/${editId}` : "http://localhost:5000/api/projects";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, technologies: form.technologies.split(", ") }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(editId ? projects.map(p => (p._id === editId ? data : p)) : [...projects, data]);
        setForm({ title: "", description: "", technologies: "" });
        setEditId(null);
      })
      .catch((err) => console.error("Error saving project:", err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/projects/${id}`, { method: "DELETE" })
      .then(() => setProjects(projects.filter(p => p._id !== id)))
      .catch((err) => console.error("Error deleting project:", err));
  };

  const handleEdit = (project) => {
    setForm({ title: project.title, description: project.description, technologies: project.technologies.join(", ") });
    setEditId(project._id);
  };

  return (
    <div className="app-container mt-5">
      <h2 className="text-center">Admin - Manage Projects</h2>

      {/* Form to Add/Edit Projects */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input className="form-control mb-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea className="form-control mb-2" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <input className="form-control mb-2" placeholder="Technologies (comma separated)" value={form.technologies} onChange={(e) => setForm({ ...form, technologies: e.target.value })} required />
        <button type="submit" className="btn btn-primary">{editId ? "Update Project" : "Add Project"}</button>
      </form>

      {/* List of Projects */}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Technologies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{project.technologies.join(", ")}</td>
              <td>
                <button className="btn btn-warning btn-sm mx-1" onClick={() => handleEdit(project)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(project._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProjects;
