const express = require("express");
const router = express.Router();
const Research = require("../models/Research");
const Projects = require("../models/Projects");
const Blogs = require("../models/Blogs");

// Ensure text indexes are created for full-text search
Research.createIndexes({ title: "text", description: "text" });
Projects.createIndexes({ title: "text", description: "text" });
Blogs.createIndexes({ title: "text", description: "text" });

router.get("/search", async (req, res) => {
  const { query, category, sortBy } = req.query;

  if (!query) return res.status(400).json({ error: "Search query is required" });

  try {
    let results = [];

    if (!category || category === "all") {
      const researchResults = await Research.find({ $text: { $search: query } });
      const projectResults = await Projects.find({ $text: { $search: query } });
      const blogResults = await Blogs.find({ $text: { $search: query } });

      results = [
        ...researchResults.map((item) => ({ ...item._doc, category: "research" })),
        ...projectResults.map((item) => ({ ...item._doc, category: "projects" })),
        ...blogResults.map((item) => ({ ...item._doc, category: "blogs" })),
      ];
    } else {
      const Model = category === "research" ? Research : category === "projects" ? Projects : Blogs;
      results = await Model.find({ $text: { $search: query } }).map((item) => ({
        ...item._doc,
        category,
      }));
    }

    // Sorting logic
    if (sortBy === "date") results.sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;



