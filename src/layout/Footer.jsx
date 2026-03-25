import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-950 text-slate-200 pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-slate-800 overflow-x-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-10 md:grid md:grid-cols-3 md:items-start md:gap-12 md:text-left">
        <div className="space-y-4 w-full max-w-md md:max-w-none">
          <div className="flex-shrink-0 relative z-50">
            <Link to="/">
              <img
                src={logo}
                alt={t("site_logo_alt")}
                className="h-10 md:h-15 w-auto object-contain transition-all duration-300 brightness-110"
              />
            </Link>
          </div>
          <p className="text-slate-400  leading-relaxed mx-auto md:mx-0 w-full max-w-sm">
            {t("hero_description")}
          </p>
        </div>

        <div className="space-y-4 w-full max-w-md md:max-w-none">
          <h3 className="text-lg font-bold text-white">
            {t("popular_destinations")}
          </h3>
          <ul className="space-y-3 text-sm">
            {["/", "/destinations", "/gallery", "/blog", "/contact"].map(
              (path, index) => {
                const labels = [
                  "home",
                  "destinations",
                  "gallery",
                  "blog",
                  "contact",
                ];
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-slate-400 hover:text-blue-400 transition-colors inline-block py-1"
                    >
                      {t(labels[index])}
                    </Link>
                  </li>
                );
              },
            )}
          </ul>
        </div>

        <div className="space-y-5 w-full max-w-md md:max-w-none">
          <h3 className="text-lg font-bold text-white">{t("follow_us")}</h3>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <SocialIcon icon={<FaFacebookF />} label={t("social_link_aria")} />
            <SocialIcon icon={<FaInstagram />} label={t("social_link_aria")} />
            <SocialIcon icon={<FaTwitter />} label={t("social_link_aria")} />
            <SocialIcon icon={<FaYoutube />} label={t("social_link_aria")} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-14 pt-8 border-t border-slate-800">
        <p className="text-slate-500 text-xs sm:text-[12px] text-center">
          {t("footer_copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, label }) => (
  <a
    href="#"
    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-slate-800 flex-shrink-0 hover:bg-blue-600 transition-all duration-300 text-slate-300 hover:text-white"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
