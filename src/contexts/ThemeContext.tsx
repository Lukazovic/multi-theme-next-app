import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Theme, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import cookie from 'js-cookie';

import GlobalStyles from '../styles/global';
import themes from '../styles/theme';

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContextDefaultValues: ThemeContextProps = {
  theme: themes.light,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(
  ThemeContextDefaultValues
);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark';
};

export const ThemeProvider = memo(
  ({ children, defaultTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(themes[defaultTheme ?? 'light']);

    const toggleTheme = useCallback(() => {
      setTheme(previousTheme => {
        const newTheme =
          previousTheme.name === 'light' ? themes.dark : themes.light;
        cookie.set('theme', newTheme.name);
        return newTheme;
      });
    }, []);

    const contextValue = useMemo(
      () => ({
        theme,
        toggleTheme,
      }),
      [theme]
    );

    return (
      <ThemeContext.Provider value={contextValue}>
        <EmotionThemeProvider theme={contextValue.theme}>
          {children}
        </EmotionThemeProvider>
        <GlobalStyles theme={contextValue.theme} />
      </ThemeContext.Provider>
    );
  }
);

export const useTheme = () => {
  const contextValue = useContext(ThemeContext);
  return contextValue;
};
