import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaUtensils,
  FaExternalLinkAlt,
} from "react-icons/fa";
import travelData, { getCityBySlug, normalizeTravelLang } from "../data/travelData";

const isValidMapUrl = (url) =>
  typeof url === "string" && /^https?:\/\//i.test(url.trim());

const easeOut = [0.22, 1, 0.36, 1];

const Blog = () => {
  const { t, i18n } = useTranslation();
  const { cityName } = useParams();
  const [city, setCity] = useState(null);
  const [selectedMonument, setSelectedMonument] = useState(null);

  const blogIndexCities = useMemo(() => {
    const langData = travelData[normalizeTravelLang(i18n.language)] || travelData.uz;
    return Object.entries(langData).map(([slug, c]) => ({ slug, ...c }));
  }, [i18n.language]);

  useEffect(() => {
    setSelectedMonument(null);
    if (!cityName) {
      setCity(null);
      return;
    }
    setCity(getCityBySlug(cityName, i18n.language));
  }, [cityName, i18n.language]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [cityName, i18n.language]);

  useEffect(() => {
    if (selectedMonument === null) return;
    let alive = true;
    const id = `blog-monument-${selectedMonument}`;
    const run = () => {
      if (!alive) return;
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    };
    const timeout = requestAnimationFrame(() => requestAnimationFrame(run));
    return () => {
      alive = false;
      cancelAnimationFrame(timeout);
    };
  }, [selectedMonument]);

  // --- BLOG INDEX VIEW ---
  if (!cityName) {
    return (
      <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-slate-900 text-white pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-10 group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t("home")}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t("blog_cities_heading")}</h1>
          <p className="text-slate-400 mb-10 max-w-2xl">
            {t("hero_description")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogIndexCities.map((c) => (
              <Link
                key={c.slug}
                to={`/blog/${c.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 aspect-[4/3] hover:border-blue-500 transition-all shadow-md"
              >
                <img
                  src={c.mainImage}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="text-xl font-bold">{c.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- ERROR VIEW ---
  if (!city) {
    return (
      <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-slate-900 text-white flex items-center justify-center pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{t("city_not_found_title")}</h1>
          <p className="text-slate-400 mb-6">{t("city_not_found_desc")}</p>
          <p className="text-slate-500 text-sm mb-8 font-mono flex justify-center gap-3">
            <code className="text-blue-400 bg-slate-800 px-2 py-1 rounded">samarkand</code>
            <span>·</span>
            <code className="text-blue-400 bg-slate-800 px-2 py-1 rounded">bukhara</code>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/destinations"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-lg"
            >
              <FaArrowLeft className="mr-2" />
              {t("back_to_destinations")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const toggleMonument = (index) => {
    setSelectedMonument((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-slate-900 text-white pt-28 pb-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <Link
            to="/destinations"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t("back_to_destinations")}
          </Link>
        </div>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-14 md:mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
              <img
                src={city.mainImage}
                alt={city.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent lg:hidden" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">{city.name}</h1>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                  {city.description}
                </p>
              </div>
            </div>
          </div>
        </motion.header>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-white">
            <span className="w-8 h-1 bg-blue-500 rounded-full" />
            {t("all_monuments")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {city.monuments.map((monument, index) => {
              const open = selectedMonument === index;
              const mapUrl = monument.location;
              const restaurants = monument.nearbyRestaurants || [];

              return (
                <motion.article
                  id={`blog-monument-${index}`}
                  key={`${monument.title}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    layout: { duration: 0.45, ease: easeOut },
                    duration: 0.45,
                    ease: easeOut,
                    delay: Math.min(index * 0.04, 0.28),
                  }}
                  className={`rounded-2xl border overflow-hidden bg-slate-800/50 backdrop-blur-sm transition-all duration-300 ease-out shadow-md ${
                    open ? "border-blue-500 ring-1 ring-blue-500/20" : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleMonument(index)}
                    className="w-full text-left focus:outline-none"
                  >
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={monument.image}
                        alt={monument.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-md">
                        {open ? t("monument_hide_details") : t("monument_show_details")}
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                        {monument.title}
                      </h3>
                      <p className={`text-slate-400 text-sm leading-relaxed ${open ? "" : "line-clamp-3"}`}>
                        {monument.info}
                      </p>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: easeOut }}
                        className="overflow-hidden border-t border-slate-700"
                      >
                        <div className="p-5 md:p-6 space-y-5 bg-slate-900/50">
                          {/* Location Box */}
                          <div className="rounded-xl bg-slate-900 border border-slate-700 p-5">
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-blue-500/10 rounded-xl">
                                  <FaMapMarkerAlt className="text-blue-400 text-lg" />
                                </div>
                                <h4 className="text-lg font-semibold text-white">{t("location_section")}</h4>
                              </div>
                              {isValidMapUrl(mapUrl) && (
                                <a
                                  href={mapUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg transition-colors text-white"
                                >
                                  {t("open_on_map")} <FaExternalLinkAlt className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                            <p className="text-slate-500 text-sm">
                              {t("map_direction_hint")}
                            </p>
                          </div>

                          {/* Restaurants Box */}
                          <div className="rounded-xl bg-slate-950/40 border border-slate-800 p-5">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2.5 bg-orange-500/10 rounded-xl">
                                <FaUtensils className="text-orange-400 text-lg" />
                              </div>
                              <h4 className="text-lg font-semibold text-white">{t("nearby_restaurants")}</h4>
                            </div>
                            <ul className="space-y-3">
                              {restaurants.length === 0 ? (
                                <li className="text-sm text-slate-500">{t("no_restaurants_listed")}</li>
                              ) : (
                                restaurants.map((r, idx) => (
                                  <li
                                    key={`${r.name}-${idx}`}
                                    className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-lg bg-slate-900/80 border border-slate-800"
                                  >
                                    <span className="font-medium text-sm text-slate-300">{r.name}</span>
                                    <span className="text-xs text-blue-400 font-semibold tabular-nums">
                                      {r.distance}
                                    </span>
                                  </li>
                                ))
                              )}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;