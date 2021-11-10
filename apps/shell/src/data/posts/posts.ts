import { api } from '../../config';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Post {
  title: string;
  slug: { _type: string; current: string };
  author: string;
  body: string | undefined;
  publishedAt: Date;
  authorImage: SanityImageSource;
  mainImage: SanityImageSource;
}

const getPosts = () => {
  return api.fetch(
    `*[_type == "post"]{
        title,
        slug,
        publishedAt
    }`
  );
};

const getPost = (slug: string) => {
  return api.fetch(
    `
      *[_type == "post" && slug.current == $slug] {
        title,
        publishedAt,
        "slug": slug.current,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "author": author->name,
        "authorImage": author->image,
      }
    `,
    { slug }
  );
};

export { Post };

export { getPosts, getPost };
