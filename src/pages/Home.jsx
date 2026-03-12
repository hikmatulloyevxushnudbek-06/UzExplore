import React, { useState, useEffect } from 'react';

import Svilizatsiya from "../assets/Uzbekistan svilizatsiya.avif";
import Registon from "../assets/Registon.webp";
import Bukhara from "../assets/Buxara.avif";

const backgrounds = [
  Svilizatsiya,
  Registon,
  Bukhara,
];

function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(i => (i + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full bg-center bg-cover transition-all duration-1000 -mt-16"
      style={{
        backgroundImage: `url(${backgrounds[bgIndex]})`,
        height: 'calc(100vh + 64px)'
      }}
    >
      {/* semi-transparent overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-black dark:bg-opacity-60"></div>

      {/* hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen pt-16 px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Uzbekistan
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl drop-shadow-md">
          Discover the ancient Silk Road, majestic Registan and timeless
          Bukhara.
        </p>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors">
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default Home;