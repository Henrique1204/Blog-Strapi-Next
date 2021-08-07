import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 96rem;
    height: calc(100vh - 63px);
    padding: ${theme.spacings.medium};
    margin: 0 auto;
    font-size: ${theme.font.sizes.medium};
  `};
`;
