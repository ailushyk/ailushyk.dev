import { useQuery } from 'react-query';
import { getPost, Post } from './posts';
import toMarkdown from '@sanity/block-content-to-markdown';

export const usePost = (slug: string) => {
  return useQuery<Post>(['posts', slug], () => getPost(slug), {
    select: (data) => {
      if (Array.isArray(data) && data.length) {
        const post = data[0];
        return {
          ...post,
          body: toMarkdown(post.body),
          publishedAt: new Date(post.publishedAt),
        };
      }
      return null;
    },
  });
};
