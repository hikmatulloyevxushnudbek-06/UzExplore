import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaExpandAlt,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import travelData from "../data/travelData";

const ITEMS_PER_PAGE = 8;

const Gallery = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [activeMonument, setActiveMonument] = useState(null);

  const monuments = useMemo(() => {
    const list = [];
    Object.entries(travelData).forEach(([cityKey, city]) => {
      city.monuments.forEach((monument) => {
        list.push({
          ...monument,
          cityKey,
          cityName: city.name,
        });
      });
    });
    return list;
  }, []);

  const filteredMonuments = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return monuments;
    return monuments.filter((m) => {
      return (
        m.title.toLowerCase().includes(q) ||
        m.info.toLowerCase().includes(q) ||
        m.cityName.toLowerCase().includes(q)
      );
    });
  }, [monuments, search]);

  const pageCount = Math.max(1, Math.ceil(filteredMonuments.length / ITEMS_PER_PAGE));

  useEffect(() => {
    if (page > pageCount) {
      setPage(pageCount);
    }
  }, [pageCount, page]);

  const pagedMonuments = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return filteredMonuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredMonuments, page]);

  const openLightbox = (monument) => setActiveMonument(monument);
  const closeLightbox = () => setActiveMonument(null);

  const changeActiveIndex = (delta) => {
    if (!activeMonument) return;
    const currentIndex = filteredMonuments.findIndex(
      (m) => m.title === activeMonument.title && m.cityKey === activeMonument.cityKey
    );
    const nextIndex = (currentIndex + delta + filteredMonuments.length) % filteredMonuments.length;
    setActiveMonument(filteredMonuments[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Travel Gallery</h1>
            <p className="text-gray-400 mt-2">
              Browse monuments from across Uzbekistan — search, paginate, and explore.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigate("/destinations")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              View All Destinations
            </button>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-white/20"
            >
              <FaArrowLeft /> Back
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search monuments, cities..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="text-sm text-gray-400">
            Showing <span className="text-white">{filteredMonuments.length}</span> results
            {search && (
              <span className="ml-2">for "<span className="text-white">{search}</span>"</span>
            )}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {pagedMonuments.map((monument) => (
              <motion.div
                key={`${monument.cityKey}-${monument.title}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="relative h-80 group overflow-hidden rounded-3xl bg-slate-900 border border-white/5 cursor-pointer"
                onClick={() => openLightbox(monument)}
              >
                <img
                  src={monument.image}
                  alt={monument.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <div className="mb-4 p-3 bg-blue-600 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300">
                    <FaExpandAlt className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{monument.title}</h3>
                  <span className="text-blue-400 text-xs uppercase tracking-widest mt-1">
                    {monument.cityName}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            Page {page} of {pageCount}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaChevronLeft /> Prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={page === pageCount}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next <FaChevronRight />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMonument && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-4xl rounded-3xl bg-[#061023] shadow-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <FaTimes />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-72 lg:h-full">
                    <img
                      src={activeMonument.image}
                      alt={activeMonument.title}
                      className="h-full w-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                    />

                    <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
                      <button
                        onClick={() => changeActiveIndex(-1)}
                        className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/20"
                      >
                        <FaChevronLeft />
                      </button>
                      <span>
                        {filteredMonuments.findIndex(
                          (m) => m.title === activeMonument.title && m.cityKey === activeMonument.cityKey
                        ) + 1}
                        /{filteredMonuments.length}
                      </span>
                      <button
                        onClick={() => changeActiveIndex(1)}
                        className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/20"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className="text-3xl font-bold">{activeMonument.title}</h2>
                    <p className="mt-3 text-gray-300">{activeMonument.info}</p>
                    <div className="mt-6 text-sm text-gray-400">
                      <p>
                        <span className="font-semibold text-white">City:</span> {activeMonument.cityName}
                      </p>
                      <p>
                        <span className="font-semibold text-white">Location:</span> {activeMonument.location}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-semibold">Nearby places to eat</h3>
                      <ul className="mt-3 space-y-2">
                        {activeMonument.nearbyRestaurants?.map((rest) => (
                          <li
                            key={rest.name}
                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                          >
                            <p className="font-semibold text-white">{rest.name}</p>
                            <p className="text-sm text-gray-300">{rest.distance}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <Link
                        to={`/blog/${activeMonument.cityKey}`}
                        className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
                        onClick={closeLightbox}
                      >
                        Explore {activeMonument.cityName}
                      </Link>
                      <button
                        onClick={closeLightbox}
                        className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        Close
                      </button>
                    </div>
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