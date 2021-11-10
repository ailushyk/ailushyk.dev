import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../../data/posts/usePosts';
import { Loading } from '../../components/Loading';

const PostsPage: FC = () => {
  const { data, isLoading } = usePosts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Posts</h1>

      {data?.map((post) => (
        <article key={post.slug.current}>
          <Link to={post.slug.current}>{post.title}</Link>
          <div>{post.publishedAt.toDateString()}</div>
        </article>
      ))}
    </div>
  );
};

export default PostsPage;
