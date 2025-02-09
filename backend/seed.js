const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Research = require("./models/Research");
const Projects = require("./models/Projects");
const Blogs = require("./models/Blogs");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Research.deleteMany({});
    await Projects.deleteMany({});
    await Blogs.deleteMany({});

    // Insert Sample Research Papers
    const researchData = [
      { title: "AI in Healthcare", description: "A study on AI applications in medical diagnostics.", date: new Date() },
      { title: "Quantum Computing", description: "An exploration of quantum algorithms for cryptography.", date: new Date() }
    ];

    // Insert Sample Projects
    const projectData = [
      { title: "Smart Traffic Management", description: "A system to optimize traffic lights using AI.", date: new Date() },
      { title: "IoT-Based Home Automation", description: "Control home appliances with a smartphone.", date: new Date() }
    ];

    // Insert Sample Blogs
    const blogData = [
      { title: "Understanding Machine Learning", description: "A beginner-friendly introduction to ML concepts.", date: new Date() },
      { title: "Cybersecurity Trends in 2025", description: "An analysis of modern cybersecurity threats.", date: new Date() }
    ];

    await Research.insertMany(researchData);
    await Projects.insertMany(projectData);
    await Blogs.insertMany(blogData);

    console.log("Database Seeded Successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error Seeding Database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
