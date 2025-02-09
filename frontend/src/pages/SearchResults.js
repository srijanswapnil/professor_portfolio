import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const category = queryParams.get("category") || "all";

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`/api/search?query=${query}&category=${category}`);
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query, category]);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Search Results for "{query}"</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : results.length === 0 ? (
        <p className="text-center text-muted">No results found.</p>
      ) : (
        <div className="row">
          {results.map((item, index) => (
            <div key={index} className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <span className="badge bg-secondary">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


