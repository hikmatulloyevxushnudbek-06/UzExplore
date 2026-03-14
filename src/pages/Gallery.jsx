import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Animatsiyalar uchun (npm install framer-motion)
import { FaArrowLeft, FaExpandAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  // Galereya ma'lumotlari
  const images = [
    { id: 1, category: "Cities", title: "Registan Square", img: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=800" },
    { id: 2, category: "Cities", title: "Bukhara Old City", img: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=800" },
    { id: 3, category: "Cities", title: "Khiva Walls", img: "https://images.unsplash.com/photo-1627838563920-5321f64f3583?q=80&w=800" },
    { id: 4, category: "Food", title: "Uzbek Plov", img: "https://images.unsplash.com/photo-1626015569573-0498a46b38c2?q=80&w=800" },
    { id: 5, category: "Nature", title: "Amirsoy Mountains", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800" },
    { id: 6, category: "Architecture", title: "Shah-i-Zinda", img: "https://images.unsplash.com/photo-1545532503-4f928e086113?q=80&w=800" },
    { id: 7, category: "Food", title: "Traditional Bread", img: "https://images.unsplash.com/photo-1610450949065-1f2842379051?q=80&w=800" },
    { id: 8, category: "Architecture", title: "Minor Mosque", img: "https://images.unsplash.com/photo-1565452326792-748939c05809?q=80&w=800" },
  ];

  const categories = ["All", "Cities", "Architecture", "Food", "Nature"];

  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Yuqori qism: Orqaga qaytish va Sarlavha */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <Link to="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-4 transition-colors">
              <FaArrowLeft /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">Travel Gallery</h1>
            <p className="text-gray-400 mt-2">Explore the beauty of Uzbekistan through our lens.</p>
          </div>

          {/* Filtrlar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Galereya Setkasi */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative h-80 group overflow-hidden rounded-3xl bg-slate-900 border border-white/5"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <div className="mb-4 p-3 bg-blue-600 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300">
                    <FaExpandAlt className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-blue-400 text-xs uppercase tracking-widest mt-1">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Agar rasm topilmasa */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;