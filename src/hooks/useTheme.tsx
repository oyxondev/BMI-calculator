import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'night';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    return saved || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark', 'night');
    
    // Add current theme class
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'night') {
      root.classList.add('night');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}