import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import countAllPosts from '../../data/posts/count-all-posts';
import getAllPosts from '../../data/posts/get-all-posts';
import getPost from '../../data/posts/get-post';

import { PostsData } from '../../domain/posts/post';

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const [post] = await getPost(ctx.params.slug);

  return { props: { post } };
};

export type DynamicPostProps = {
  post: PostsData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <p>{post.title}</p>;
};

export default DynamicPost;
