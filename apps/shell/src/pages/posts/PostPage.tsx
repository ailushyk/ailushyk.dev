import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const PostPage: FC = () => {
  const { post } = useParams();
  return (
    <div>
      <div>Post: {post}</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        asperiores culpa, cupiditate dolor, error fuga, illo laudantium minima
        nobis omnis perspiciatis qui sequi sit suscipit voluptatibus. Aperiam
        laudantium similique veniam?
      </div>
    </div>
  );
};

export default PostPage;
