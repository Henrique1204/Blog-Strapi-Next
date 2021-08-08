import React from 'react';

import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import Footer from '../../components/Footer';

import { PostsData } from '../../domain/posts/post';

export type PostProps = {
  post: PostsData;
};

const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        <h2>{post.title}</h2>

        {/* <div dangerouslySetInnerHTML={{ __html: post.content }}></div> */}
      </MainContainer>

      <Footer />
    </>
  );
};

export default Post;
