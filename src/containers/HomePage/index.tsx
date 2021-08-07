import React from 'react';

import { PostsData } from '../../domain/posts/post';

import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';

import { Container } from './styled';

export type PropsHome = {
  posts: PostsData[];
};

const HomePage = ({ posts }: PropsHome) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Container>
          {posts && posts.map(({ title, slug }) => <h2 key={slug}>{title}</h2>)}
        </Container>
      </MainContainer>
    </>
  );
};

export default HomePage;
