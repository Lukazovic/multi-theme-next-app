import { ThemeProvider } from '../contexts/ThemeContext';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
