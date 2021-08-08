import React from 'react';

import { Container } from './styled';

type PostContainerProps = {
  __html: string;
};

const PostContainer = ({ __html }: PostContainerProps) => {
  return <Container dangerouslySetInnerHTML={{ __html }}></Container>;
};

export default PostContainer;
