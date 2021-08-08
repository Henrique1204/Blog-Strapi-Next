import React from 'react';
import { Container } from './styled';

type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>;
};

export default Heading;
