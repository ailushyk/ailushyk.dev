import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Block } from '../elements';

export interface IPostMd {
  children: string;
}

const BasePost: FC = ({ children }) => {
  return <Block className={'prose'}>{children}</Block>;
};

const PostMd: FC<IPostMd> = ({ children }) => {
  return (
    <ReactMarkdown className={'prose'}>{children as string}</ReactMarkdown>
  );
};

const Post = Object.assign(BasePost, {
  Md: PostMd,
});

export default Post;
