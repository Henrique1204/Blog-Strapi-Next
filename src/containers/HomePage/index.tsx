import React from 'react';
import { PostsData } from '../../domain/posts/post';
import { Container } from './styles';

export type PropsHome = {
  posts: PostsData[];
};

const HomePage = ({ posts }: PropsHome) => {
  return (
    <Container>
      {posts && posts.map(({ title, slug }) => <h2 key={slug}>{title}</h2>)}
    </Container>
  );
};

export default HomePage;
