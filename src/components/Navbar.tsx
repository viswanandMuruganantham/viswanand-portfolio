import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Mobile menu icons

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header >
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links - Left Aligned */}
      <nav
        className={`absolute md:relative top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-50 md:flex transition-all ${
          isNavOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <li key={index}>
              <Button variant="ghost">
                <Link to={`/${item.toLowerCase()}`} onClick={() => setIsNavOpen(false)}>
                  {item}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
