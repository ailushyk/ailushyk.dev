import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Block } from '../elements';
import { CodeBlock } from '../elements/CodeBlock';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';

export interface IPostMd {
  children: string;
}

const PostCodeBlock: JSX.IntrinsicElements | CodeComponent | undefined = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '');
  if (!inline && match) {
    return (
      <CodeBlock language={match[1]} {...props}>
        {String(children).replace(/\n$/, '')}
      </CodeBlock>
    );
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const BasePost: FC = ({ children }) => {
  return <Block className={'prose'}>{children}</Block>;
};

const PostMd: FC<IPostMd> = ({ children }) => {
  return (
    <ReactMarkdown
      className={'prose'}
      components={{
        code: PostCodeBlock,
      }}
    >
      {children as string}
    </ReactMarkdown>
  );
};

const Post = Object.assign(BasePost, {
  Md: PostMd,
});

export default Post;
