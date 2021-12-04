import type { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/ThemeContext';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme={pageProps.defaultTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
