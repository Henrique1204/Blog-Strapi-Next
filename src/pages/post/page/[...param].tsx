import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import HomePage, { PropsHome } from '../../../containers/HomePage';
import getAllPosts from '../../../data/posts/get-all-posts';
import { useRouter } from 'next/dist/client/router';
import { PaginationData } from '../../../domain/posts/pagination';

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async (
  ctx
): Promise<{
  props: PropsHome;
}> => {
  const page = Number(ctx.params.param[0]);
  const category = ctx.params.param[1] || '';

  const postsPerPage = 3;
  const pageStart = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category ? `&category.name_contains=${category}` : '';
  const url = `_sort=id:desc&_start=${pageStart}&_limit=${postsPerPage}${categoryQuery}`;
  const posts = await getAllPosts(url);

  const numberOfPosts = Number(await getAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };

  return { props: { posts, category, pagination } };
};

const Page = ({ posts, category, pagination }: PropsHome) => {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Página não encontrada...</div>;

  return (
    <HomePage
      posts={posts}
      category={category}
      pagination={pagination}
    ></HomePage>
  );
};

export default Page;
