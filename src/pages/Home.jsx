import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import travelData from "../data/travelData";
import {
  FaHistory,
  FaArchway,
  FaUtensils,
  FaHeart,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Home = () => {
  const cities = useMemo(() => Object.values(travelData), []);
  const slides = useMemo(() => cities.slice(0, 3).map((city) => city.mainImage), [cities]);
  const featuredCities = useMemo(() => cities.slice(0, 4), [cities]);

  const historicalPlaces = useMemo(() => {
    const allMonuments = cities.flatMap((city) =>
      city.monuments.map((monument) => ({
        id: `${city.id}-${monument.title}`,
        name: monument.title,
        img: monument.image,
        desc: monument.info,
      }))
    );
    return allMonuments.slice(0, 6);
  }, [cities]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full bg-[#030712] min-h-screen text-white font-sans overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {slides.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                idx === active ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Discover the Beauty <br /> of Uzbekistan
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore historical cities, ancient culture, and breathtaking
            architecture at the heart of the Silk Road.
          </p>
          <Link to="/destinations" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
            Explore Destinations →
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest text-gray-300 mb-2">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR DESTINATIONS */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredCities.map((city) => (
            <Link
              key={city.id}
              to={`/blog/${city.name.toLowerCase()}`}
              className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-3xl cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={city.mainImage}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{city.name}</h3>
                <p className="text-gray-300 text-sm leading-snug opacity-90">{city.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. WHY VISIT SECTION */}
      <section className="py-20 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Visit Uzbekistan</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<FaHistory />} 
              title="Rich History" 
              desc="Over 2,500 years of civilization along the Great Silk Road." 
            />
            <FeatureCard 
              icon={<FaArchway />} 
              title="Stunning Architecture" 
              desc="Magnificent mosques, madrasahs and minarets with intricate tilework." 
            />
            <FeatureCard 
              icon={<FaUtensils />} 
              title="Delicious Cuisine" 
              desc="Savor authentic plov, samsa, lagman and countless local dishes." 
            />
            <FeatureCard 
              icon={<FaHeart />} 
              title="Warm Hospitality" 
              desc="Experience the legendary generosity of Uzbek people." 
            />
          </div>
        </div>
      </section>

      {/* 4. TOP HISTORICAL PLACES */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Historical Places</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {historicalPlaces.map((place) => (
            <div key={place.id} className="group relative h-[400px] overflow-hidden rounded-3xl">
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end transition-all">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{place.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRAVEL GALLERY */}
      <section className="py-20 px-4 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Gallery</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
            {cities.slice(0, 4).map((city) => (
              <div key={city.id} className="h-48 md:h-64 overflow-hidden rounded-xl group">
                <img
                  src={city.mainImage}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors group">
            View All <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#030712] text-white pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter italic">Uzbekistan</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Your gateway to discovering the beauty, history, and culture of Uzbekistan.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Destinations", "Gallery", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-[12px]">
            © {new Date().getFullYear()} Uzbekistan Travel Guide. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-[#111827]/50 p-8 rounded-2xl text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
    <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
      <div className="text-xl text-blue-500 group-hover:text-white">{icon}</div>
    </div>
    <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-white">
    {icon}
  </a>
);

export default Home;