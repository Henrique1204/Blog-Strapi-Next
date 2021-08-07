import React from 'react';

import { PostsData } from '../../domain/posts/post';

import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';

import { Container } from './styled';
import PostCard from '../../components/PostCard';

export type PropsHome = {
  posts: PostsData[];
};

const HomePage = ({ posts }: PropsHome) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Container>
          {posts.map(({ title, slug, cover }) => (
            <PostCard
              key={slug}
              slug={slug}
              title={title}
              cover={cover.formats.small.url}
            />
          ))}
        </Container>
      </MainContainer>
    </>
  );
};

export default HomePage;
