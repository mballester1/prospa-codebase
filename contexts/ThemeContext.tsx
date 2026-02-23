import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { getTheme, setTheme, type Theme as StoredTheme } from '@/lib/storage';

type ResolvedTheme = 'light' | 'dark';

const colors = {
  light: {
    background: '#f5f0e8',
    surface: '#e8e0d4',
    border: '#d4c8b8',
    text: '#1a1a1a',
    textSecondary: '#4a4a4a',
    accent: '#6b5344',
    chipBg: '#e0d8cc',
    chipBorder: '#d0c4b4',
    chipSelectedBg: '#d4c4a8',
    chipSelectedBorder: '#6b5344',
  },
  dark: {
    background: '#1a1a1a',
    surface: '#242018',
    border: '#3a3428',
    text: '#f5f0e8',
    textSecondary: '#b8b0a0',
    accent: '#8b7355',
    chipBg: '#2a2a2a',
    chipBorder: '#3a3a3a',
    chipSelectedBg: '#3d3428',
    chipSelectedBorder: '#8b7355',
  },
} as const;

type ThemeContextValue = {
  resolved: ResolvedTheme;
  stored: StoredTheme;
  setStoredTheme: (t: StoredTheme) => Promise<void>;
  colors: (typeof colors)['light'];
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [stored, setStored] = useState<StoredTheme>('system');

  useEffect(() => {
    getTheme().then(setStored);
  }, []);

  const resolved: ResolvedTheme =
    stored === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : stored;
  const palette = colors[resolved];

  const setStoredTheme = async (t: StoredTheme) => {
    await setTheme(t);
    setStored(t);
  };

  return (
    <ThemeContext.Provider
      value={{ resolved, stored, setStoredTheme, colors: palette }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
