import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import BuxaraImg from "../assets/Buxara.avif";
import RegistonImg from "../assets/Registon.webp";
import UzbekistanImg from "../assets/Uzbekistan svilizatsiya.avif";
import logo from "../assets/logo.png";

const Home = () => {
  const [active, setActive] = useState(0);
  const slides = [RegistonImg, BuxaraImg, UzbekistanImg];

  // Avtomatik slayd-shou
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Kartochkalar uchun ma'lumotlar
  const galleryImages = [
    {
      id: 1,
      name: "Samarkand",
      desc: "The jewel of the Silk Road, home to the iconic Registan Square and Bibi-Khanym Mosque.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/RegistanSquare_Samarkand.jpg", // Haqiqiy Registon rasmi
    },
    {
      id: 2,
      name: "Bukhara",
      desc: "A living museum with over 140 architectural monuments from the medieval era.",
      img: "https://uzbekistan.travel/storage/app/media/Otabek/asosiydagi%20rasmlar/cropped-images/shutterstock_1007253181-0-0-0-0-1728474450.jpg", // Haqiqiy Buxoro rasmi
    },
    {
      id: 3,
      name: "Khiva",
      desc: "A perfectly preserved ancient walled city, frozen in time like an open-air museum.",
      img: "https://uzbekistan.travel/storage/app/media/Otabek/asosiydagi%20rasmlar/cropped-images/2079897013-0-0-0-0-1728537570.jpg", // Haqiqiy Xiva rasmi
    },
    {
      id: 4,
      name: "Tashkent",
      desc: "The vibrant capital blending Soviet-era grandeur with modern Central Asian culture.",
      img: "https://uzbekistan.travel/storage/app/media/Rasmlar/Toshkent/shaxar/cropped-images/AdobeStock_596864804-0-0-0-0-1738671594.jpeg",
    },
    {
      id: 5,
      name: "Shahrisabz",
      desc: "Birthplace of Amir Temur, featuring the ruins of the legendary Ak-Saray Palace.",
      img: "https://uzbekistan.travel/storage/app/uploads/public/671/9e7/fbc/thumb_3985_1140_0_0_0_auto.jpg",
    },
  ];

  const historicalPlaces = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1627838563920-5321f64f3583?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=400",
    },
  ];
  return (
    <div className="w-full bg-[#030712] min-h-screen text-white font-sans">
      {/* 1. HERO SECTION (BANNER) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Slayd-shou orqa foni */}
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
          {/* Rasm ustidagi qora qatlam (Overlay) */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Banner matni */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Discover the Beauty <br /> of Uzbekistan
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            Explore historical cities, ancient culture, and breathtaking
            architecture at the heart of the Silk Road.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
            Explore Destinations →
          </button>
        </div>

        {/* 2-rasmdagi Scroll Icon (Sichqoncha) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-gray-300 mb-2">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR DESTINATIONS SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Kartochkalar Gridi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((city) => (
            <div
              key={city.id}
              className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Rasm */}
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Kartochka ustidagi gradient va matn */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold mb-3">{city.name}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-snug opacity-90">
                  {city.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY VISIT UZBEKISTAN SECTION */}
      <section className="py-24 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Visit Uzbekistan
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Rich History */}
            <div className="bg-[#111827]/50 p-8 rounded-2xl text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <FaHistory className="text-2xl text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Rich History
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Over 2,500 years of civilization along the Great Silk Road.
              </p>
            </div>

            {/* Stunning Architecture */}
            <div className="bg-[#111827]/50 p-8 rounded-2xl text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <FaArchway className="text-2xl text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Stunning Architecture
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Magnificent mosques, madrasahs and minarets with intricate
                tilework.
              </p>
            </div>

            {/* Delicious Cuisine */}
            <div className="bg-[#111827]/50 p-8 rounded-2xl text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <FaUtensils className="text-2xl text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Delicious Cuisine
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Savor authentic plov, samsa, lagman and countless local dishes.
              </p>
            </div>

            {/* Warm Hospitality */}
            <div className="bg-[#111827]/50 p-8 rounded-2xl text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <FaHeart className="text-2xl text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Warm Hospitality
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experience the legendary generosity of Uzbek people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOP HISTORICAL PLACES (Yangi qo'shildi) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Top Historical Places</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>{" "}
          {/* Green line rasmdagidek */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {historicalPlaces.map((place) => (
            <div
              key={place.id}
              className="group relative h-[450px] overflow-hidden rounded-3xl"
            >
              <img
                src={place.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent p-8 flex flex-col justify-end transition-colors group-hover:bg-black/60">
                <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {place.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Travel Gallery</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Galereya setkasi */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="h-64 overflow-hidden rounded-2xl group"
              >
                <img
                  src={item.img}
                  alt="Uzbekistan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* View All tugmasi */}
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors group"
          >
            View All
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Footer (Ixtiyoriy) */}
      <footer className="bg-[#030712] text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 1. Brand & Description */}
          <div className="space-y-6">
            <div className="logo w-50">
              <img src={logo} alt="" className="w-full" />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Your gateway to discovering the beauty, history, and culture of
              Uzbekistan.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Destinations", "Gallery", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* 3. Follow Us (Social Media) */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright area */}
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Uzbekistan Travel Guide. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
