import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog/:location" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App