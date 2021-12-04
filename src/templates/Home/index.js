import { useTheme } from '../../contexts/ThemeContext';

const HomeTemplate = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Welcome!</h1>
      <h2>Your current theme is: {theme.name}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default HomeTemplate;
