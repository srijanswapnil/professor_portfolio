const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  technologies: [String],
  description: String,
  createdDate: Date,
});

module.exports = mongoose.model("Project", projectSchema);

