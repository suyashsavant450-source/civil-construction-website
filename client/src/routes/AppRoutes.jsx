import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Gallery from "../pages/Gallery";
import Achievements from "../pages/Achievements";
import Contracts from "../pages/Contracts";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;