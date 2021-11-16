import React, { FC } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface ICodeBlock {
  language: string;
}

export const CodeBlock: FC<ICodeBlock> = ({ language, children, ...props }) => {
  return (
    <SyntaxHighlighter language={language} style={style} {...props}>
      {children}
    </SyntaxHighlighter>
  );
};
