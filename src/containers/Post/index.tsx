import React from 'react';

import Head from 'next/head';

import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import Heading from '../../components/Heading';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
// import PostContainer from '../../components/PostContainer';
import Comments from '../../Comments';
import Footer from '../../components/Footer';

import { SITE_NAME } from '../../config/app.config';
import { PostsData } from '../../domain/posts/post';
// import removeHtml from '../../utils/removeHtml';

export type PostProps = {
  post: PostsData;
};

const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        {/* <meta name="description" content={removeHtml(post.content)} /> */}
      </Head>

      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>

        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />

        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.created_at}
        />

        {/* <PostContainer __html={post.content} /> */}

        <Comments slug={post.slug} title={post.title} />
      </MainContainer>

      <Footer />
    </>
  );
};

export default Post;
