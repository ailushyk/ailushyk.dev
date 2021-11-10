import { api } from '../../config';

interface Post {
  slug: { _type: string; current: string };
  title: string;
  body: any;
}

const getPosts = () => {
  return api.fetch(
    `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
  );
};

const getPost = (slug: string) => {
  return api.fetch(
    `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
    { slug }
  );
};

export { Post };

export { getPosts, getPost };
