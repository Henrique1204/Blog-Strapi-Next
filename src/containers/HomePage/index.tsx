import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';

import { AllPostsLinks, Category, Container } from './styled';

import { PostsData } from '../../domain/posts/post';

import { SITE_NAME } from '../../config/app.config';
import { PaginationData } from '../../domain/posts/pagination';
import Pagination from '../../components/Pagination';

export type PropsHome = {
  posts: PostsData[];
  category?: string | string[];
  pagination?: PaginationData;
};

const HomePage = ({ posts, category, pagination }: PropsHome) => {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}{' '}
          {pagination && ` - Página ${pagination.nextPage - 1}`}
        </title>
        <meta name="description" content="Este é meu blog de tecnologia." />
      </Head>

      <Header />

      <MainContainer>
        {category && <Category>Categoria: {category}</Category>}

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

        {pagination && <Pagination {...pagination} />}
        {!pagination && (
          <Link as="/post/page/1" href="/post/page/[...param]" passHref>
            <AllPostsLinks>Ver Todos</AllPostsLinks>
          </Link>
        )}
      </MainContainer>

      <Footer />
    </>
  );
};

export default HomePage;
