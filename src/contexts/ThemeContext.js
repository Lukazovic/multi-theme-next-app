import React, {
  createContext,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import GlobalStyles from '../styles/global';
import themes from '../styles/theme';

export const ThemeContextDefaultValues = {
  theme: 'light',
};

export const ThemeContext = createContext(ThemeContextDefaultValues);

export const ThemeProvider = memo(({ children, defaultTheme = 'light' }) => {
  const [theme, setTheme] = useState(themes[defaultTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(previousTheme =>
      previousTheme.name === 'light' ? themes.dark : themes.light
    );
  }, []);

  const contextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  });

  return (
    <ThemeContext.Provider value={{ ...contextValue }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
      <GlobalStyles theme={theme} />
    </ThemeContext.Provider>
  );
});

ThemeProvider.displayName = 'ThemeProvider';
