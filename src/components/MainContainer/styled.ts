import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 96rem;
    padding: ${theme.spacings.medium};
    margin: 0 auto;
    font-size: ${theme.font.sizes.medium};
  `};
`;
