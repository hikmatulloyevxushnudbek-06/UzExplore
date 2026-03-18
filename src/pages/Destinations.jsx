import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Animatsiyalar uchun (npm install framer-motion)
import { FaExpandAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import travelData from "../data/travelData";

const Destinations = () => {
  const cities = Object.values(travelData);

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Yuqori qism: Sarlavha */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Travel Destinations</h1>
            <p className="text-gray-400 mt-2">Explore the beauty of Uzbekistan through our lens.</p>
          </div>
        </div>

        {/* Shaharlar Setkasi */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {cities.map((city) => (
              <motion.div
                key={city.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative h-80 group overflow-hidden rounded-3xl bg-slate-900 border border-white/5 cursor-pointer"
              >
                <Link to={`/blog/${city.name.toLowerCase()}`} className="block w-full h-full">
                  <img 
                    src={city.mainImage} 
                    alt={city.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                    <div className="mb-4 p-3 bg-blue-600 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300">
                      <FaExpandAlt className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{city.name}</h3>
                    <span className="text-blue-400 text-xs uppercase tracking-widest mt-1">Cities</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Destinations;