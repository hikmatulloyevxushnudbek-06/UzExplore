import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaSun, FaMoon, FaGlobe, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // on home page make header transparent, otherwise use solid background
  const headerBg = location.pathname === "/" ? "bg-transparent backdrop-blur-sm" : "bg-white dark:bg-gray-900";

  return (
    <header className={`${headerBg} sticky top-0 z-50 transition-colors duration-300`}>      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Uzbekistan" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`${location.pathname === "/" ? "text-white hover:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"} font-medium transition-colors duration-200 relative group`}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/destinations"
              className={`${location.pathname === "/" ? "text-white hover:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"} font-medium transition-colors duration-200 relative group`}
            >
              Destinations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/gallery"
              className={`${location.pathname === "/" ? "text-white hover:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"} font-medium transition-colors duration-200 relative group`}
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/blog"
              className={`${location.pathname === "/" ? "text-white hover:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"} font-medium transition-colors duration-200 relative group`}
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className={`${location.pathname === "/" ? "text-white hover:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"} font-medium transition-colors duration-200 relative group`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <div className="hidden sm:block relative">
              <select className="appearance-none bg-white bg-opacity-30 text-white px-3 py-2 pr-8 rounded-lg cursor-pointer hover:bg-opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="uz">Uzbek</option>
              </select>
              <FaGlobe className="absolute right-2.5 top-1/2 transform -translate-y-1/2 pointer-events-none text-white text-sm" />
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setDark(prev => !prev)}
              className={`${location.pathname === "/" ? "bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-30 text-white hover:bg-opacity-50" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700"} p-2 rounded-lg transition-colors duration-200`}
            >
              {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 border-t border-white/30 pt-4 bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20 rounded-lg">
            <Link
              to="/"
              className={`block px-4 py-2 ${location.pathname === "/" ? "text-white" : "text-gray-700 dark:text-gray-300"} hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className={`block px-4 py-2 ${location.pathname === "/" ? "text-white" : "text-gray-700 dark:text-gray-300"} hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </Link>
            <Link
              to="/gallery"
              className={`block px-4 py-2 ${location.pathname === "/" ? "text-white" : "text-gray-700 dark:text-gray-300"} hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className={`block px-4 py-2 ${location.pathname === "/" ? "text-white" : "text-gray-700 dark:text-gray-300"} hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-2 ${location.pathname === "/" ? "text-white" : "text-gray-700 dark:text-gray-300"} hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
