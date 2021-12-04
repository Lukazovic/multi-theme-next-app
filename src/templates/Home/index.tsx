import { useTheme } from '../../contexts/ThemeContext';

import * as S from './styles';

const HomeTemplate = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.Wrapper>
      <S.Title>Welcome!</S.Title>
      <S.Info>Your current theme is: {theme.name}</S.Info>
      <S.Button onClick={toggleTheme}>Toggle Theme</S.Button>
    </S.Wrapper>
  );
};

export default HomeTemplate;
