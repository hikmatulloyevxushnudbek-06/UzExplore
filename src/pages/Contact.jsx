import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-slate-900 text-white pt-28 pb-20 px-4 md:px-12 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact_us")}</h1>
          <p className="text-gray-500 text-gray-400 text-lg max-w-2xl mx-auto">
            {t("hero_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 bg-slate-900 p-6 md:p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">{t("send_message")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                  {t("your_name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 bg-slate-800 border border-gray-300 border-white/20 rounded-lg text-slate-900 placeholder-gray-500 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder={t("your_name")}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                  {t("your_email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 bg-slate-800 border border-gray-300 border-white/20 rounded-lg text-slate-900 placeholder-gray-500 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder={t("your_email")}
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                  {t("subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 bg-slate-800 border border-gray-300 border-white/20 rounded-lg text-slate-900 placeholder-gray-500 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder={t("subject")}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-gray-300 mb-2">
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-100 bg-slate-800 border border-gray-300 border-white/20 rounded-lg text-slate-900 placeholder-gray-500 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder={t("message")}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg"
              >
                <FaPaperPlane />
                {t("send_btn")}
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            <div className="bg-gray-50 bg-slate-900 p-6 md:p-8 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">{t("contact_us")}</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">{t("email")}</p>
                    <p className="text-slate-900 font-semibold">info@uzbekistantravel.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <FaPhone className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">{t("phone")}</p>
                    <p className="text-slate-900 font-semibold">+998 71 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">{t("address")}</p>
                    <p className="text-slate-900 font-semibold">Tashkent, Uzbekistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 bg-slate-900 p-6 md:p-8 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">{t("address")}</h2>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://yandex.uz/maps/10335/tashkent/geo/1522492592/?ll=69.285235%2C41.348227&z=13.16"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("map_embed_title")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;



