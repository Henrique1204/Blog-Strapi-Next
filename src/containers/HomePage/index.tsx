import React from 'react';

import { PostsData } from '../../domain/posts/post';

import Header from '../../components/Header';

import { Container } from './styles';

export type PropsHome = {
  posts: PostsData[];
};

const HomePage = ({ posts }: PropsHome) => {
  return (
    <>
      <Header />
      <Container>
        {posts && posts.map(({ title, slug }) => <h2 key={slug}>{title}</h2>)}
      </Container>
    </>
  );
};

export default HomePage;
