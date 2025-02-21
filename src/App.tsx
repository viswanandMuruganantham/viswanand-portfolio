import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col w-screen ">
        {/* Navigation Bar */}
        <nav className="flex justify-center space-x-4 py-8 pr-[1100px] shadow-lg z-10">
          <Button variant="ghost"><Link to="/">Home</Link></Button>
          <Button variant="ghost"><Link to="/about">About</Link></Button>
          <Button variant="ghost"><Link to="/projects">Projects</Link></Button>
          <Button variant="ghost"><Link to="/contact">Contact</Link></Button>
        </nav>
        {/* Resume Button - Top Right */}
        <div className="absolute top-10 right-6">
          <a href="/assets/Viswanand_Resume.pdf" download>
            <Button className="shadow-lg shadow-blue-500/50" asChild>
              <span>Download Resume</span>
            </Button>
          </a>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
