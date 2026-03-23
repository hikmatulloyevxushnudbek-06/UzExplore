import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';

function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Skrollni kuzatish
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobil menyu ochiqligida orqa fon skrollini to'xtatish
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const navLinks = [
    [t('home'), '/'],
    [t('destinations'), '/destinations'],
    [t('gallery'), '/gallery'],
    [t('blog'), '/blog'],
    [t('contact'), '/contact'],
  ];

  const navOverlay = !scrolled && !mobileMenuOpen;

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-950 z-[120] lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-900 dark:text-white hover:text-blue-500 transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-6">
              {navLinks.map(([label, href]) => (
                <li key={href}>
                  <NavLink
                    to={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-xl font-medium transition-colors block border-b border-gray-100 dark:border-white/5 pb-2 ${
                        isActive
                          ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
                          : 'text-slate-900 dark:text-white hover:text-blue-500'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Header Component */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md py-2 shadow-lg border-b border-gray-200 dark:border-white/10'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto max-w-[1300px] px-4 md:px-6 flex items-center justify-between">
          {/* LOGOTIP */}
          <div className="flex-shrink-0 relative z-50">
            <Link to="/">
              <img
                src={logo}
                alt={t("site_logo_alt")}
                className={`h-10 md:h-14 w-auto object-contain transition-all duration-300 ${
                  navOverlay ? 'brightness-0 invert' : 'brightness-0 invert'
                }`}
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {navLinks.map(([label, href]) => (
                <li key={href}>
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      `px-4 py-2 text-[15px] font-medium transition-colors ${
                        isActive
                          ? 'text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400'
                          : scrolled
                            ? 'text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
                            : 'text-white hover:text-blue-300'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 md:gap-3 relative z-50">
            <LanguageSelector overlay={navOverlay} />
            {/* <ThemeToggle overlay={navOverlay} /> */}

            {/* Burger Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled || mobileMenuOpen
                  ? 'text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
