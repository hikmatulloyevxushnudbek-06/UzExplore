import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { FaGlobe, FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-out ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-[1300px] flex items-center justify-between">
        <div className="logo w-50">
          <img src={logo} alt="" className="w-full"/>
        </div>

        <nav>
          <ul className="flex items-center gap-2 text-white">
            {[
              ["Home", "/"],
              ["Destinations", "/destinations"],
              ["Gallery", "/gallery"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/15"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20"
            >
              <FaGlobe />
              <span className="font-semibold">{lang}</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl">
                {[
                  ["EN", "English"],
                  ["UZ", "O‘zbekcha"],
                  ["RU", "Русский"],
                ].map(([code, label]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setLangOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-slate-900 transition-colors hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Toggle color mode"
          >
            {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
