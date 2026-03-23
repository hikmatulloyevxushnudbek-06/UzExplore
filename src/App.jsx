import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home/Home'
import Destinations from './pages/Destinations'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white flex flex-col transition-colors duration-500">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog/:cityName" element={<Blog />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App