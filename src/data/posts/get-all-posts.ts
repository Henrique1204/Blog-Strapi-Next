import { POSTS_URL } from '../../config/app.config';
import { PostsData } from '../../domain/posts/post';
import fetchJson from '../../utils/fetch-json';

const getAllPosts = async (): Promise<PostsData[]> => {
  const postsJson = await fetchJson<PostsData[]>(POSTS_URL);
  return postsJson;
};

export default getAllPosts;
