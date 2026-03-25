import React, { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaExpandAlt,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlinePhoto, HiOutlineSparkles } from "react-icons/hi2";
import travelData, { normalizeTravelLang } from "../data/travelData";

const ITEMS_PER_PAGE = 8;

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [activeMonumentId, setActiveMonumentId] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const monuments = useMemo(() => {
    const langData = travelData[normalizeTravelLang(i18n.language)] || travelData.uz;
    const list = [];
    Object.entries(langData).forEach(([cityKey, city]) => {
      city.monuments.forEach((monument, monumentIndex) => {
        list.push({
          ...monument,
          id: `${cityKey}-${monumentIndex}`,
          cityKey,
          cityName: city.name,
        });
      });
    });
    return list;
  }, [i18n.language]);

  const filteredMonuments = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return monuments;
    return monuments.filter((m) => 
      m.title.toLowerCase().includes(q) || 
      m.cityName.toLowerCase().includes(q)
    );
  }, [monuments, search]);

  const hasResults = filteredMonuments.length > 0;
  const pageCount = hasResults ? Math.ceil(filteredMonuments.length / ITEMS_PER_PAGE) : 0;

  const pagedMonuments = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return filteredMonuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredMonuments, page]);

  const activeMonument = useMemo(() => {
    return filteredMonuments.find((m) => m.id === activeMonumentId) || null;
  }, [activeMonumentId, filteredMonuments]);

  const changeActiveIndex = (e, delta) => {
    e.stopPropagation(); 
    const currentIndex = filteredMonuments.findIndex((m) => m.id === activeMonumentId);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + delta + filteredMonuments.length) % filteredMonuments.length;
    setActiveMonumentId(filteredMonuments[nextIndex].id);
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-slate-900 text-white pt-28 pb-20 px-4 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col gap-6 mb-10">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 border border-slate-700"
          >
            <FaArrowLeft /> {t("home")}
          </Link>
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter">{t("gallery")}</h1>
            <p className="text-slate-400 mt-2">{t("all_monuments")}</p>
          </div>
        </div>

        <div className="relative max-w-md mb-12">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder={t("search")}
            className="w-full py-4 pl-12 pr-4 rounded-2xl bg-slate-800 text-white border border-slate-700 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-500"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${search.trim()}-${page}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {hasResults ? (
              pagedMonuments.map((m) => (
                <div
                  key={m.id}
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-slate-800 hover:border-blue-500 transition-all duration-300"
                  onClick={() => setActiveMonumentId(m.id)}
                >
                  <img src={m.image} alt={m.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl font-bold">{m.title}</h3>
                    <p className="text-blue-400 text-sm font-semibold uppercase">{m.cityName}</p>
                  </div>
                  <div className="absolute top-4 right-4 p-3 bg-slate-900/40 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExpandAlt className="text-white text-xs" />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-slate-800 bg-slate-800/50 px-6 py-20 text-center">
                <HiOutlinePhoto className="size-14 text-slate-600 mb-4" />
                <h2 className="text-2xl font-bold text-white">{t("gallery_empty_title")}</h2>
                <button onClick={() => setSearch("")} className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-bold">{t("gallery_clear_search")}</button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Modal / Lightbox — Rasmda oq bo'lib turgan qism shu yerda */}
        <AnimatePresence>
          {activeMonument && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-0 sm:p-4"
              onClick={() => setActiveMonumentId(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                className="bg-slate-900 w-full h-full sm:h-auto sm:max-w-5xl sm:rounded-[40px] overflow-hidden relative shadow-2xl flex flex-col lg:grid lg:grid-cols-2 border border-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setActiveMonumentId(null)} className="absolute right-6 top-6 z-[1100] p-3 rounded-full bg-slate-800/80 text-white backdrop-blur-md border border-slate-700 hover:scale-110 transition-transform">
                  <FaTimes size={20} />
                </button>

                <div className="relative h-[40vh] lg:h-full bg-slate-950">
                  <img src={activeMonument.image} alt={activeMonument.title} className="absolute inset-0 h-full w-full object-cover" />
                  
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-slate-800/90 backdrop-blur-xl px-6 py-3 rounded-full border border-slate-700 text-white">
                    <button onClick={(e) => changeActiveIndex(e, -1)} className="hover:text-blue-400"><FaChevronLeft size={18} /></button>
                    <span className="font-bold text-sm tabular-nums">
                      {filteredMonuments.findIndex(m => m.id === activeMonument.id) + 1} / {filteredMonuments.length}
                    </span>
                    <button onClick={(e) => changeActiveIndex(e, 1)} className="hover:text-blue-400"><FaChevronRight size={18} /></button>
                  </div>
                </div>

                <div className="flex flex-col p-8 md:p-12 overflow-y-auto">
                  <div className="mb-6">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
                      {activeMonument.cityName}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mt-4 leading-tight">
                      {activeMonument.title}
                    </h2>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                    {activeMonument.info}
                  </p>
                  
                  <div className="mt-auto space-y-6">
                    <a href={activeMonument.location} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20">
                      <FaMapMarkerAlt /> {t("address")}
                    </a>
                    
                    {activeMonument.nearbyRestaurants && (
                      <div className="pt-8 border-t border-slate-800">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-5">{t("nearby_restaurants")}</h4>
                        <div className="grid grid-cols-1 gap-3">
                           {activeMonument.nearbyRestaurants.slice(0, 2).map((r, i) => (
                             <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-slate-800 border border-slate-700">
                                <span className="font-bold text-sm text-white">{r.name}</span>
                                <span className="text-blue-400 text-xs font-black">{r.distance}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;