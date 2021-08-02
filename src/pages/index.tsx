import React from 'react';
import { GetStaticProps } from 'next';
import { PostsData } from './domain/posts/post';

const getPosts = async (): Promise<PostsData[]> => {
  const url = 'https://desolate-retreat-97406.herokuapp.com/posts';
  const posts = await fetch(url);
  const postsJson = await posts.json();

  return postsJson;
};

type PropsHome = {
  posts: PostsData[];
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: PropsHome;
}> => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: PropsHome) => {
  return (
    <>{posts && posts.map(({ title, slug }) => <h2 key={slug}>{title}</h2>)}</>
  );
};

export default Home;
