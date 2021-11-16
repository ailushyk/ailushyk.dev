import React, { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import { darcula as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import md from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('markdown', md);

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
