import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const Info = styled.p`
  margin: 20px 0 10px;
  font-size: 28px;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.textSecondary};
    cursor: pointer;
    border: none;
    padding: 15px 25px;
    border-radius: 6px;
    font-weight: ${theme.font.weight.semiBold};
    transition: opacity ${theme.transition.default};

    &:hover {
      opacity: 0.75;
    }
  `}
`;
