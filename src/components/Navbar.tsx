import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Mobile menu icons
import { motion, AnimatePresence } from "framer-motion"; // Motion animations

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Motion Variants for Mobile Menu Animation
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left-Aligned Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li key={index}>
                <Button variant="ghost">
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 relative"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Animated Mobile Navigation Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full text-white shadow-lg flex flex-col items-start py-6 md:hidden px-6"
          >
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-white w-full text-left"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
