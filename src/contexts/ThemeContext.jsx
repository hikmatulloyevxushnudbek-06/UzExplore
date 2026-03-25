import React from 'react';

// Theme context is no-op, app now uses fixed light theme only.
export const useTheme = () => ({ isDark: false });

export const ThemeProvider = ({ children }) => {
  return <>{children}</>;
};

