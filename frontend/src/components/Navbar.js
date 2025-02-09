import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // State for search input and category selection
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}&category=${category}`);
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Portfolio</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`} to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/research" ? "active" : ""}`} to="/research">Research</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/achievements" ? "active" : ""}`} to="/achievements">Achievements</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
            </li>

            {/* More Dropdown */}
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                More
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about">About the Professor</Link></li>
                <hr className="dropdown-divider"/>
                <li><Link className="dropdown-item" to="/experience">Experience</Link></li>
                <hr className="dropdown-divider"/>
                <li><Link className="dropdown-item" to="/award">Award</Link></li>
                <hr className="dropdown-divider"/>
              </ul>
            </li>

            {/* Admin Dashboard Link */}
            <li className="nav-item">
                <Link className="nav-link text-warning" to="/admin-projects">Admin Panel</Link>
            </li>

          </ul>

          {/* Search Bar with Filtering */}
          <form className="d-flex" onSubmit={handleSearch}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search..." 
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select 
              className="form-select me-2" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="projects">Projects</option>
              <option value="research">Research</option>
              <option value="blog">Blog</option>
            </select>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}



//use mongodb for all the backend storage for the search and filter ,tell me step by step