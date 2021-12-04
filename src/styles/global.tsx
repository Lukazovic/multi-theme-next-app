import { Global, css } from '@emotion/react';

const GlobalStyles = ({ theme }) => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::before,
        &::after {
          box-sizing: border-box;
        }
      }

      body {
        background-color: ${theme.colors.mainBg};
        color: ${theme.colors.text};
        line-height: 1;
      }
    `}
  />
);

export default GlobalStyles;
