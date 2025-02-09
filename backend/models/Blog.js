const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  createdDate: Date,
});

module.exports = mongoose.model("Blog", blogSchema);
