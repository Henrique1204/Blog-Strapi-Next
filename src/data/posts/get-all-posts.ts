import { POSTS_URL } from '../../config/app.config';
import { PostsData } from '../../domain/posts/post';
import fetchJson from '../../utils/fetch-json';

const getAllPosts = async (query = ''): Promise<PostsData[]> => {
  const url = `${POSTS_URL}?&${query}`;
  const postsJson = await fetchJson<PostsData[]>(url);
  return postsJson;
};

export default getAllPosts;
