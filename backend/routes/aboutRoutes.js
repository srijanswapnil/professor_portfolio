const express = require("express");
const router = express.Router();
const About = require("../models/About");

// Get professor's about info
router.get("/", async (req, res) => {
  try {
    const about = await About.findOne(); // Fetch the first document
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update about section
router.put("/:id", async (req, res) => {
  try {
    const updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAbout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
