require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const app = express();
const aboutRoutes = require("./routes/aboutRoutes");

app.use(express.json());
app.use(cors());
app.use("/api/about", aboutRoutes);

app.use("/api/projects", projectRoutes);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));


app.get("/", (req, res) => {
  res.send("Professor Portfolio API is running...");
});

const projectRoutes = require("./routes/projectRoutes");

app.use("/api/projects", projectRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
