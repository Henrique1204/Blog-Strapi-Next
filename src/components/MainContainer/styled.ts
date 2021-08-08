import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 96rem;
    min-height: calc(100vh - 63px);
    padding: ${theme.spacings.medium};
    margin: 0 auto;
    font-size: ${theme.font.sizes.medium};
  `};
`;
