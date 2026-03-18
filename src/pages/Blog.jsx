import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';
import travelData from '../data/travelData';

const Blog = () => {
  const { location } = useParams();
  const [selectedMonument, setSelectedMonument] = useState(null);

  const city = travelData[location];

  if (!city) {
    return (
      <div className="min-h-screen bg-[#030712] text-white pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The requested blog post could not be found.</p>
          <Link to="/destinations" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Orqaga qaytish */}
        <div className="mb-8">
          <Link to="/destinations" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <FaArrowLeft className="mr-2" />
            Destinations ga qaytish
          </Link>
        </div>

        {/* Sarlavha */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{city.name}</h1>
          <p className="text-gray-400 text-lg leading-relaxed">{city.description}</p>
        </motion.div>

        {/* Tarixiy obidalar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Tarixiy Obidalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.monuments.map((monument, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`bg-slate-900 border rounded-3xl overflow-hidden hover:border-white/10 transition-colors cursor-pointer ${
                  selectedMonument === index ? 'border-blue-500' : 'border-white/5'
                }`}
                onClick={() => setSelectedMonument(selectedMonument === index ? null : index)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={monument.image} 
                    alt={monument.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{monument.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{monument.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tanlangan obida uchun lokatsiya va restoranlar */}
        {selectedMonument !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-slate-900 border border-white/5 rounded-3xl p-6">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Lokatsiya</h3>
              </div>
              <p className="text-gray-400">{city.monuments[selectedMonument].location}</p>
              {/* Bu yerda Google Maps embed qo'shish mumkin */}
            </div>
            
            <div className="bg-slate-900 border border-white/5 rounded-3xl p-6">
              <div className="flex items-center mb-4">
                <FaUtensils className="text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Yaqindagi Ovqatlanish Joylari</h3>
              </div>
              <div className="space-y-3">
                {city.monuments[selectedMonument].nearbyRestaurants.map((restaurant, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name} 
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{restaurant.name}</p>
                      <p className="text-sm text-gray-500">{restaurant.type}</p>
                    </div>
                    <span className="text-blue-400 text-sm">{restaurant.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;