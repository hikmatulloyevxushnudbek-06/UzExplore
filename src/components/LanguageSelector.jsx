import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import { HiGlobeAlt } from 'react-icons/hi2';

const languages = [
  { code: 'uz', name: "O'zbek", short: 'UZ' },
  { code: 'ru', name: 'Русский', short: 'RU' },
  { code: 'en', name: 'English', short: 'EN' },
];

function triggerSurface(overlay) {
  if (overlay) {
    return 'border-white/25 bg-black/35 text-white shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-white/40 hover:bg-black/45';
  }
  return 'border-slate-200/90 bg-white/80 text-slate-900 shadow-sm hover:border-sky-300/80 hover:bg-white';
}

const LanguageSelector = ({ overlay = false }) => {
  const { changeLanguage, currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  const current = languages.find((l) => l.code === currentLanguage) ?? languages[0];

  useEffect(() => {
    if (!isOpen) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setIsOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const handleSelect = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  const globeClass = overlay ? 'text-sky-300' : 'text-sky-500';

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 backdrop-blur-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 ${triggerSurface(overlay)}`}
        aria-label={t('language')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <HiGlobeAlt className={`size-[1.125rem] shrink-0 ${globeClass}`} aria-hidden />
        <span className="text-sm font-bold tracking-widest tabular-nums">{current.short}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-[calc(100%+10px)] z-[130] min-w-[168px] overflow-hidden rounded-2xl border border-gray-200 bg-white/95 py-1.5 shadow-2xl shadow-black/10 backdrop-blur-2xl"
          role="listbox"
        >
          {languages.map((lang) => {
            const active = lang.code === currentLanguage;
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => handleSelect(lang.code)}
                className={`flex w-full items-center px-4 py-2.5 text-left text-sm font-medium transition-colors duration-200 ${
                  active
                    ? 'bg-sky-500/15 text-sky-400'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {lang.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;


