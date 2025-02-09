import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import ManageProjects from "./pages/admin/ManageProjects";
import ManageResearch from "./pages/admin/ManageResearch";
import ManageAchievements from "./pages/admin/ManageAchievements";
import ManageBlogs from "./pages/admin/ManageBlogs";
import ManageAwards from "./pages/admin/ManageAwards";
import ManageCollaborators from "./pages/admin/ManageCollaborators";
import SearchResults from "./pages/SearchResults";
import About from "./pages/About";
import AdminProjects from "./pages/AdminProjects";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} /> 
        <Route path="/admin/projects" element={<ManageProjects />} />
        <Route path="/admin/research" element={<ManageResearch />} />
        <Route path="/admin/achievements" element={<ManageAchievements />} />
        <Route path="/admin/blogs" element={<ManageBlogs />} />
        <Route path="/admin/awards" element={<ManageAwards />} />
        <Route path="/admin/collaborators" element={<ManageCollaborators />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-projects" element={<AdminProjects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;




