import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../../data/posts/usePost';
import BlockContent from '@sanity/block-content-to-react';
import { Loading } from '../../components/Loading';

const PostPage: FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = usePost(slug as string);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>Post: {slug}</div>
      <div>
        <BlockContent blocks={data?.[0].body} />
      </div>
    </div>
  );
};

export default PostPage;
