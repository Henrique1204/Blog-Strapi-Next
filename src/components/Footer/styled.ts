import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
    text-align: center;
    color: ${theme.colors.gray};
  `}
`;
