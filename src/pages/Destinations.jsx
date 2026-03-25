import React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpandAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import travelData, { normalizeTravelLang } from "../data/travelData";

const Destinations = () => {
  const { t, i18n } = useTranslation();
  
  const langData = travelData[normalizeTravelLang(i18n.language)] || travelData.uz;
  const cities = Object.entries(langData).map(([slug, city]) => ({
    ...city,
    slug,
  }));

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-slate-900 text-white pt-28 pb-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{t("destinations")}</h1>
            <p className="text-slate-400 mt-2">{t("hero_description")}</p>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full min-w-0"
        >
          <AnimatePresence mode="popLayout">
            {cities.map((city) => (
              <motion.div
                key={city.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-800 border border-slate-800 group hover:border-blue-500 transition-all duration-300 shadow-2xl"
              >
                <Link
                  to={`/blog/${city.slug}`}
                  className="block h-full w-full min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-2xl sm:rounded-3xl"
                >
                  <img
                    src={city.mainImage}
                    alt={city.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent group-hover:via-slate-950/40 transition-all duration-300" />

                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-3 sm:p-6 text-center">
                    <div className="mb-2 sm:mb-4 p-2 sm:p-3 bg-blue-600 rounded-full scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
                      <FaExpandAlt className="text-white text-sm sm:text-base" />
                    </div>
                    <h3 className="text-sm sm:text-lg md:text-xl font-bold line-clamp-2 px-1 text-white">{city.name}</h3>
                    <span className="text-blue-400 text-[10px] sm:text-xs uppercase tracking-widest mt-1">
                      {t("destinations")}
                    </span>
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