import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../../data/posts/usePosts';
import { Loading } from 'ui/components';
import { Block, Caption } from 'ui/elements';

const PostsPage: FC = () => {
  const { data, isLoading } = usePosts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Block>
      <Caption as={'h1'}>Posts</Caption>

      {data?.map((post) => (
        <article key={post.slug.current}>
          <Link to={post.slug.current}>{post.title}</Link>
          <Block>{post.publishedAt.toDateString()}</Block>
        </article>
      ))}
    </Block>
  );
};

export default PostsPage;
