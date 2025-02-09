import React, { useState } from "react";

export default function AdminForm({ title, fields, onSubmit }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {}));
  };

  return (
    <div className="container mt-4">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field} className="mb-3">
            <label className="form-label">{field}</label>
            <input
              type="text"
              className="form-control"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
