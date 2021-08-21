import React from 'react';
import { GetServerSideProps } from 'next';
import getAllPosts from '../../data/posts/get-all-posts';
import HomePage, { PropsHome } from '../../containers/HomePage';

export const getServerSideProps: GetServerSideProps = async ({
  query,
}): Promise<{
  props: PropsHome;
}> => {
  const url = `_sort=id:desc&_start=0&_limit=30&category.name_contains=${query.category}`;
  const posts = await getAllPosts(url);

  return { props: { posts, category: query.category } };
};

const Category = ({ posts, category }: PropsHome) => {
  return <HomePage posts={posts} category={category}></HomePage>;
};

export default Category;
