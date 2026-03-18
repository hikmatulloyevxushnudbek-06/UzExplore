import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { FaGlobe, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langRef = useRef(null);

  // Skrolni kuzatish (pastroq tushganda header qorayadi)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark mode almashtirish
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDark]);

  // Tashqi tomonga bosilganda til menyusini yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    ["Home", "/"],
    ["Destinations", "/destinations"],
    ["Gallery", "/gallery"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-slate-950/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto max-w-[1300px] px-4 md:px-6 flex items-center justify-between">
        
        {/* LOGOTIP - Balandligi kattalashtirildi */}
        <div className="flex-shrink-0 z-50 transition-all duration-300">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-10 md:h-14 w-auto object-contain transition-all" // h-8/10 dan h-10/14 ga oshirildi
            />
          </Link>
        </div>

        {/* KOMPYUTER UCHUN NAVIGATSIYA */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 text-white">
            {navLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  to={href}
                  className="px-4 py-2 text-[15px] font-medium transition-colors hover:text-blue-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* O'NG TOMON: TIL, MAVZU VA MOBILE BURGER */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          
          {/* Til tanlash */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10"
            >
              <FaGlobe className="text-blue-400" />
              <span className="font-bold">{lang}</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 overflow-hidden rounded-xl  border opacity-50 shadow-2xl">
                {["EN", "UZ", "RU"].map((code) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setLangOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-xs text-white hover:bg-white/10 transition-colors"
                  >
                    {code === "EN" ? "English" : code === "UZ" ? "O'zbek" : "Русский"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode tugmasi */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-white hover:text-blue-400 transition-colors"
          >
            {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
          </button>

          {/* MOBILE BURGER TUGMASI */}
          <button
            className="lg:hidden text-white text-xl p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBIL MENYU (PASTGA OCHILADIGAN) */}
        <div
          className={`absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-t border-white/5 transition-all duration-300 lg:hidden overflow-hidden ${
            mobileMenuOpen ? "max-h-[400px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-white">
            {navLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  to={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-blue-400 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;