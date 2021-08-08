import React from 'react';

import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';

import { PostsData } from '../../domain/posts/post';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';

export type PostProps = {
  post: PostsData;
};

const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>

        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />

        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.created_at}
        />

        {/* <div dangerouslySetInnerHTML={{ __html: post.content }}></div> */}
      </MainContainer>

      <Footer />
    </>
  );
};

export default Post;
