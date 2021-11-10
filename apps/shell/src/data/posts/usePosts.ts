import { useQuery } from 'react-query';
import { getPosts, Post } from './posts';

export const usePosts = () => {
  return useQuery<Post[]>(['posts'], getPosts, {
    select: (data) => {
      return data.map((post) => {
        return {
          ...post,
          publishedAt: new Date(post.publishedAt),
        };
      });
    },
  });
};
