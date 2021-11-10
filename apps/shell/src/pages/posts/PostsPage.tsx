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
      <h2>Posts</h2>

      {data?.map((post) => (
        <div key={post.slug.current}>
          <Link to={post.slug.current}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
