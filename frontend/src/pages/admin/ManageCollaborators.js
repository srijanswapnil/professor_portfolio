import React, { useState } from "react";

export default function ManageProjects() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData, 
      });

      const data = await response.json();
      if (response.ok) {
        console.log("File uploaded:", data.filePath);
        alert("Upload successful!");
      } else {
        console.error("Upload failed:", data.message);
        alert("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Projects</h2>
      <form onSubmit={handleSubmit} className="p-3">
        <div className="mb-3">
          <label className="form-label">Project Title</label>
          <input 
            type="text" 
            className="form-control" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea 
            className="form-control" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image/Video</label>
          <input 
            type="file" 
            className="form-control" 
            accept="image/*, video/*" 
            onChange={handleFileChange} 
            required
          />
          {preview && (
            file.type.startsWith("image/") ? 
            <img src={preview} alt="Preview" className="mt-3" style={{ maxWidth: "100%", maxHeight: "300px" }} /> :
            <video src={preview} controls className="mt-3" style={{ maxWidth: "100%", maxHeight: "300px" }} />
          )}
        </div>

        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
}