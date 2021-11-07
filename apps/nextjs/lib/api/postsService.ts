import { Post } from '@/lib/types';
import { postsPrismicService } from '@/lib/api/prismic/postsPrismicService';

export interface PostService {
  getPostsPaths(): Promise<{ params: { slug: string } }[]>;
  getSortedPostsData({ locale }: { locale: string }): Promise<Post[]>;
  getPostData({
    slug,
    locale,
  }: {
    slug: string;
    locale: string;
  }): Promise<Post>;
}

/**
 * use prismic.io now
 */
const service: PostService = postsPrismicService;

export const postsService: PostService = {
  getPostsPaths: () => {
    return service.getPostsPaths();
  },
  getPostData: ({ slug, locale }) => {
    return service.getPostData({ slug, locale });
  },
  getSortedPostsData: ({ locale }) => {
    return service.getSortedPostsData({ locale });
  },
};
