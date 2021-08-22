import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  gap: 3rem;
`;

export const Category = styled.div`
  padding: ${({ theme }) => theme.spacings.medium} 0;
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: bold;
  text-align: center;
`;

export const AllPostsLinks = styled.a`
  display: block;
  text-align: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
`;
