import { POSTS_URL } from '../../config/app.config';
import { PostsData } from '../../domain/posts/post';
import fetchJson from '../../utils/fetch-json';
import markDownToHtml from '../../utils/markdown-to-html';

const getPost = async (slug: string | string[]): Promise<PostsData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `${POSTS_URL}?slug=${slugString}`;
  const postsJson = await fetchJson<PostsData[]>(url);

  return postsJson;

  // const content = await markDownToHtml(postsJson[0].content);

  // return [{ ...postsJson[0], content }];
};

export default getPost;
