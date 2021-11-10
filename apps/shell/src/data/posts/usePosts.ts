import { useQuery } from 'react-query';
import { getPosts, Post } from './posts';

export const usePosts = () => {
  return useQuery<Post[]>(['posts'], getPosts);
};
