import { ThemeProvider } from '../contexts/ThemeContext';

const App = ({ Component, pageProps }) => (
  <ThemeProvider defaultTheme={pageProps.defaultTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
