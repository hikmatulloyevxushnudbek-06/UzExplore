import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import travelData, {
  getCardTagline,
  normalizeTravelLang,
} from '../../data/travelData';
import { FaHistory, FaArchway, FaUtensils, FaHeart } from 'react-icons/fa';

const Home = () => {
  const { t, i18n } = useTranslation(); // Get current language

  const cities = useMemo(() => {
    // Get the current language data
    const langData =
      travelData[normalizeTravelLang(i18n.language)] || travelData.uz;
    return Object.entries(langData).map(([slug, city]) => ({
      ...city,
      slug,
    }));
  }, [i18n.language]);

  const slides = useMemo(
    () => cities.slice(0, 3).map((city) => city.mainImage),
    [cities]
  );

  const historicalPlaces = useMemo(() => {
    const allMonuments = cities.flatMap((city) =>
      city.monuments.map((monument) => ({
        id: `${city.slug}-${monument.title}`,
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
    <div className="w-full bg-white text-slate-900 dark:bg-slate-950 dark:text-white font-sans overflow-x-hidden transition-colors duration-500">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {slides.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                idx === active ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            {t('hero_title')} <br /> {t('hero_subtitle')}
          </h1>
          <p className="text-base md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero_description')}
          </p>
          <Link
            to="/destinations"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-lg"
          >
            {t('explore_btn')} →
          </Link>
        </div>
      </section>

      {/* 2. POPULAR DESTINATIONS */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('popular_destinations')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/blog/${city.slug}`}
              className="group relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-2xl cursor-pointer border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={city.mainImage}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1.5">
                  {city.name}
                </h3>
                <p className="text-gray-200 text-sm line-clamp-1">
                  {getCardTagline(city)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. WHY VISIT SECTION */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              {t('why_visit')}
            </h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<FaHistory />}
              title={t('feature_history_title')}
              desc={t('feature_history_desc')}
            />
            <FeatureCard
              icon={<FaArchway />}
              title={t('feature_arch_title')}
              desc={t('feature_arch_desc')}
            />
            <FeatureCard
              icon={<FaUtensils />}
              title={t('feature_food_title')}
              desc={t('feature_food_desc')}
            />
            <FeatureCard
              icon={<FaHeart />}
              title={t('feature_hospitality_title')}
              desc={t('feature_hospitality_desc')}
            />
          </div>
        </div>
      </section>

      {/* 4. TOP HISTORICAL PLACES */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {t('top_historical')}
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {historicalPlaces.map((place) => (
            <div
              key={place.id}
              className="group relative h-[320px] md:h-[360px] overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900"
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-lg md:text-xl font-bold">{place.name}</h3>
                <p className="text-gray-200 text-sm mt-2 line-clamp-2">
                  {place.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRAVEL GALLERY */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('travel_gallery')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {cities.slice(0, 4).map((city) => (
              <div
                key={city.slug}
                className="h-48 md:h-64 overflow-hidden rounded-xl group border border-gray-200 dark:border-white/10"
              >
                <img
                  src={city.mainImage}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 font-semibold hover:underline group"
          >
            {t('view_all')}{' '}
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 group">
    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
      <div className="text-xl text-blue-600 dark:text-blue-400 group-hover:text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

export default Home;
