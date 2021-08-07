import React from 'react';
import { Container } from './styled';

export type MainContainerProps = {
  //   children: JSX.Element; OU
  children: React.ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
