const mongoose = require("mongoose");

const ResearchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Create text index for better search results
ResearchSchema.index({ title: "text", description: "text" });

module.exports = mongoose.model("Research", ResearchSchema);
