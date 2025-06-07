import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar"; // Import Navbar Component
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./style.css";
import EducationJourney from "./pages/journey/EducationJourney";
import ExperienceJourney from "./pages/journey/ExperienceJourney";

import Certificate from "./pages/certificate";
import Resume from "./pages/resume";
// Import Resume from Public Folder


export default function App() {
  return (
    <Router >
      
      <div className="min-h-screen bg-gray-900 text-white flex flex-col w-screen">
        {/* Importing Navbar Component */}
        <Navbar />
        {/* Resume Button - Positioned Responsively */}
        
        
        {/* Main Content Area */}
        <div style={{ paddingTop: '60px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/educationjourney" element={<EducationJourney/>}/>
          <Route path="/experiencejourney" element={<ExperienceJourney/>}/>
          <Route path ="/certificate" element={<Certificate/>}/>
          <Route path ="/resume" element={<Resume/>}/>
        </Routes>
        </div>
       
      </div>
    </Router>
  );
}
