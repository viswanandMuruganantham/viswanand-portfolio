import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar"; // Import Navbar Component
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col w-screen">
        
        {/* Importing Navbar Component */}
        <Navbar />

        {/* Resume Button - Positioned Responsively */}
        <div className="absolute top-4 right-4 md:top-10 md:right-6">
          <a href="/assets/MYRESUME.pdf" download>
            <Button className="shadow-lg shadow-blue-500/50" asChild>
              <span>Download Resume</span>
            </Button>
          </a>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
