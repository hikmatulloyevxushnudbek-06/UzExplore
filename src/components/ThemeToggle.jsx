import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { HiSun, HiMoon } from 'react-icons/hi2';

function shellClasses(overlay, isDark) {
  if (overlay) {
    return 'border-white/25 bg-black/35 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-white/40 hover:bg-black/45';
  }
  if (isDark) {
    return 'border-white/12 bg-slate-900/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-violet-400/30 hover:bg-slate-900/85';
  }
  return 'border-slate-200/90 bg-white/80 shadow-sm hover:border-amber-300/90 hover:bg-white';
}

const ThemeToggle = ({ overlay = false }) => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const iconClass = overlay
    ? isDark
      ? 'text-amber-200'
      : 'text-indigo-200'
    : isDark
      ? 'text-amber-400'
      : 'text-indigo-500';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? t('lightMode') : t('darkMode')}
      className={`group relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border backdrop-blur-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 ${shellClasses(overlay, isDark)}`}
      aria-label={isDark ? t('lightMode') : t('darkMode')}
    >
      <span
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.25),transparent_55%)]'
            : 'bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.2),transparent_55%)]'
        }`}
        aria-hidden
      />
      {isDark ? (
        <HiSun className={`relative size-[1.35rem] transition-transform duration-300 group-hover:rotate-12 ${iconClass}`} />
      ) : (
        <HiMoon className={`relative size-[1.25rem] transition-transform duration-300 group-hover:-rotate-12 ${iconClass}`} />
      )}
    </button>
  );
};

export default ThemeToggle;
