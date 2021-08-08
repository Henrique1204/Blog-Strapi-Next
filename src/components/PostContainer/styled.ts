import styled, { css } from 'styled-components';

export const Container = styled.article`
  img {
    max-width: 100%;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }

  pre {
    ${({ theme }) => css`
      width: 100%;
      padding: ${theme.spacings.large};
      margin: ${theme.spacings.large} 0;
      font-size: ${theme.font.sizes.medium};
      line-height: 1.5;
      color: ${theme.colors.darkGray};
      background-color: ${theme.colors.ligthGray};
      overflow-x: auto;
    `}
  }
`;
