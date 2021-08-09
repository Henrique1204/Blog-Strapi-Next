import React from 'react';

import Head from 'next/head';

import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';

import { Container } from './styled';

import { PostsData } from '../../domain/posts/post';

import { SITE_NAME } from '../../config/app.config';

export type PropsHome = {
  posts: PostsData[];
};

const HomePage = ({ posts }: PropsHome) => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Este é meu blog de tecnologia." />
      </Head>

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

      <Footer />
    </>
  );
};

export default HomePage;
