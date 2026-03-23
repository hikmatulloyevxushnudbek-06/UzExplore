import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-gray-200 dark:border-white/5 overflow-x-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-10 md:grid md:grid-cols-3 md:items-start md:gap-12 md:text-left">
        <div className="space-y-4 w-full max-w-md md:max-w-none">
          <h2 className="text-2xl font-bold tracking-tighter italic text-slate-900 dark:text-white">{t("hero_title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mx-auto md:mx-0">
            {t("hero_description")}
          </p>
        </div>

        <div className="space-y-4 w-full max-w-md md:max-w-none">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t("popular_destinations")}</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-block py-1">{t("home")}</Link>
            </li>
            <li>
              <Link to="/destinations" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-block py-1">
                {t("destinations")}
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-block py-1">
                {t("gallery")}
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-block py-1">
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-block py-1">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-5 w-full max-w-md md:max-w-none">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t("follow_us")}</h3>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <SocialIcon icon={<FaFacebookF />} label={t("social_link_aria")} />
            <SocialIcon icon={<FaInstagram />} label={t("social_link_aria")} />
            <SocialIcon icon={<FaTwitter />} label={t("social_link_aria")} />
            <SocialIcon icon={<FaYoutube />} label={t("social_link_aria")} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-14 pt-8 border-t border-gray-200 dark:border-white/5">
        <p className="text-gray-600 dark:text-gray-500 text-xs sm:text-[12px] text-center">
          {t("footer_copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, label }) => (
  <a
    href="#"
    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-gray-200 dark:bg-white/10 flex-shrink-0 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 text-gray-700 dark:text-gray-400 hover:text-white"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;