import { useQuery } from 'react-query';
import { getPost, Post } from './posts';

export const usePost = (slug: string) => {
  return useQuery<Post[]>(['posts', slug], () => getPost(slug));
};
