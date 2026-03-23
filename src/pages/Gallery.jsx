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

  // Get data based on current language
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

  // Qidiruv mantiqi
  const filteredMonuments = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return monuments;
    return monuments.filter((m) => 
      m.title.toLowerCase().includes(q) || 
      m.cityName.toLowerCase().includes(q)
    );
  }, [monuments, search]);

  const hasResults = filteredMonuments.length > 0;
  const pageCount = hasResults
    ? Math.ceil(filteredMonuments.length / ITEMS_PER_PAGE)
    : 0;

  useEffect(() => {
    if (pageCount < 1) {
      if (page !== 1) setPage(1);
      return;
    }
    if (page > pageCount) setPage(pageCount);
  }, [pageCount, page]);

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
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white pt-28 pb-20 px-4 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header — bosh sahifa tugmasi chapda */}
        <div className="flex flex-col gap-6 mb-10">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-white/10 text-slate-900 dark:text-white font-bold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all shadow-lg active:scale-95"
          >
            <FaArrowLeft /> {t("home")}
          </Link>
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter">{t("gallery")}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">{t("all_monuments")}</p>
          </div>
        </div>

        {/* Qidiruv paneli */}
        <div className="relative max-w-md mb-12">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder={t("search")}
            className="w-full py-4 pl-12 pr-4 rounded-2xl bg-gray-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-gray-200 dark:border-white/10 focus:border-blue-500 focus:outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
        </div>

        {/* Bir vaqtda faqat bitta grid holati (wait) — ikki qavat kartochka bo‘lmaydi, scroll sakramaydi */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${search.trim()}-${page}-${hasResults ? "1" : "0"}`}
            role="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 [contain:layout]"
          >
            {hasResults ? (
              pagedMonuments.map((m) => (
                <div
                  key={m.id}
                  role="listitem"
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group shadow-xl border border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400 transition-[border-color,box-shadow] duration-300"
                  onClick={() => setActiveMonumentId(m.id)}
                >
                  <img src={m.image} alt={m.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl font-bold">{m.title}</h3>
                    <p className="text-blue-300 text-sm font-semibold uppercase">{m.cityName}</p>
                  </div>
                  <div className="absolute top-4 right-4 p-3 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <FaExpandAlt className="text-white text-xs" />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-white/15 bg-gradient-to-b from-slate-50/90 via-white to-blue-50/40 dark:from-slate-900/80 dark:via-slate-950 dark:to-blue-950/30 px-6 py-16 sm:py-20 text-center">
                <div className="relative mb-10">
                  <div className="absolute -inset-8 rounded-full bg-blue-400/15 dark:bg-sky-500/10 blur-3xl" aria-hidden />
                  <div className="absolute -right-2 -top-2 text-amber-400/90 dark:text-amber-300/80">
                    <motion.span
                      animate={{ rotate: [0, 12, -8, 0], scale: [1, 1.08, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <HiOutlineSparkles className="size-9" />
                    </motion.span>
                  </div>
                  <div className="relative flex size-28 items-center justify-center rounded-3xl border border-slate-200/80 bg-white/80 shadow-inner dark:border-white/10 dark:bg-slate-800/60">
                    <HiOutlinePhoto className="size-14 text-slate-300 dark:text-slate-500" strokeWidth={1} />
                    <div className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg dark:bg-sky-600">
                      <FaSearch className="size-4 opacity-90" />
                    </div>
                  </div>
                </div>
                <h2 className="max-w-md text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  {t("gallery_empty_title")}
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {t("gallery_empty_desc")}
                </p>
                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 active:scale-[0.98]"
                  >
                    <FaTimes className="size-3.5 opacity-90" />
                    {t("gallery_clear_search")}
                  </button>
                  <Link
                    to="/destinations"
                    className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white/80 px-8 py-3.5 text-sm font-bold text-slate-800 transition hover:border-blue-400 hover:text-blue-600 dark:border-white/15 dark:bg-slate-800/50 dark:text-white dark:hover:border-sky-500/50 dark:hover:text-sky-300"
                  >
                    {t("gallery_browse_destinations")}
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Paginatsiya */}
        {hasResults && pageCount > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button 
              disabled={page === 1} 
              onClick={() => setPage(p => p - 1)} 
              className="p-4 rounded-xl bg-gray-100 dark:bg-white/10 text-slate-900 dark:text-white disabled:opacity-20 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
            >
              <FaChevronLeft />
            </button>
            <span className="font-bold text-lg tabular-nums">{page} / {pageCount}</span>
            <button 
              disabled={page === pageCount} 
              onClick={() => setPage(p => p + 1)} 
              className="p-4 rounded-xl bg-gray-100 dark:bg-white/10 text-slate-900 dark:text-white disabled:opacity-20 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* Modal / Lightbox */}
        <AnimatePresence>
          {activeMonument && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-0 sm:p-4 md:p-10"
              onClick={() => setActiveMonumentId(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                className="bg-white dark:bg-slate-900 w-full h-full min-h-0 sm:h-auto sm:max-w-5xl sm:rounded-[40px] overflow-hidden relative shadow-2xl flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:auto-rows-[minmax(0,1fr)] lg:max-h-[min(90vh,920px)] lg:items-stretch"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Yopish tugmasi */}
                <button 
                  onClick={() => setActiveMonumentId(null)} 
                  className="absolute right-6 top-6 z-[1100] p-3 rounded-full bg-black/40 text-white dark:bg-slate-800 dark:text-white backdrop-blur-md border border-white/20 hover:scale-110 transition-transform"
                >
                  <FaTimes size={20} />
                </button>

                {/* Rasm qismi — lg da qator balandligiga cho‘ziladi, pastdagi bo‘sh joy qolmaydi */}
                <div className="relative h-[45vh] min-h-[220px] shrink-0 bg-black lg:h-full lg:min-h-0 lg:shrink">
                  <img src={activeMonument.image} alt={activeMonument.title} className="absolute inset-0 h-full w-full object-cover" />
                  
                  {/* IXCHAM NAVIGATSIYA (YONMA-YON) */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/60 dark:bg-slate-800/80 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 text-white shadow-2xl">
                    <button onClick={(e) => changeActiveIndex(e, -1)} className="hover:text-blue-400 transition-colors">
                      <FaChevronLeft size={18} />
                    </button>
                    
                    <div className="flex items-center gap-1.5 font-bold text-sm tracking-widest tabular-nums">
                       <span>{(filteredMonuments.findIndex(m => m.id === activeMonument.id) + 1)}</span>
                       <span className="text-white/40">/</span>
                       <span className="text-white/40">{filteredMonuments.length}</span>
                    </div>

                    <button onClick={(e) => changeActiveIndex(e, 1)} className="hover:text-blue-400 transition-colors">
                      <FaChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Ma'lumot qismi — lg da ortiqcha matn scroll, modal balandligi cheklangan */}
                <div className="flex min-h-0 max-h-[55vh] flex-col overflow-y-auto bg-white p-8 dark:bg-slate-900 md:p-12 lg:max-h-full">
                  <div className="mb-6">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
                      {activeMonument.cityName}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 leading-[1.1]">
                      {activeMonument.title}
                    </h2>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 italic">
                    {activeMonument.info}
                  </p>
                  
                  <div className="mt-auto space-y-4">
                    <a 
                      href={activeMonument.location} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center gap-3 w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/30 transition-all active:scale-95"
                    >
                      <FaMapMarkerAlt /> {t("address")}
                    </a>
                    
                    {activeMonument.nearbyRestaurants && (
                      <div className="pt-8 border-t border-slate-100 dark:border-white/10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-5">{t("nearby_restaurants")}</h4>
                        <div className="grid grid-cols-1 gap-3">
                           {activeMonument.nearbyRestaurants.slice(0, 2).map((r, i) => (
                             <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-white/10">
                                <span className="font-bold text-sm text-slate-900 dark:text-white">{r.name}</span>
                                <span className="text-blue-500 text-xs font-black">{r.distance}</span>
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