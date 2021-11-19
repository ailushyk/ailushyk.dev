import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import Post, { IPostMd } from '../../components/Post';
import { CodeBlock } from '../../elements/CodeBlock';

const code =
  '// test\n' +
  "console.log('test')\n\n" +
  'const tmp = {\n  a: 123\n}\n\n' +
  'export const hello = (name: string) => {\n' +
  '  return `Hello ${name}`;\n' +
  '};';

const element = (
  <article>
    <h1>Garlic bread with cheese: What the science tells us</h1>
    <p>
      For years parents have espoused the health benefits of eating garlic bread
      with cheese to their children, with the food earning such an iconic status
      in our culture that kids will often dress up as warm, cheesy loaf for
      Halloween.
    </p>
    <p>
      But a recent study shows that the celebrated appetizer may be linked to a
      series of rabies cases springing up around the country.
    </p>
    <CodeBlock language={'typescript'}>{code}</CodeBlock>
    <CodeBlock language={'javascript'}>{code}</CodeBlock>
  </article>
);

const markdown =
  '# Title\n' +
  'A paragraph with *emphasis* and **strong importance**.\n' +
  '\n' +
  '> A block quote with ~strikethrough~ and a URL: https://reactjs.org.\n' +
  '\n' +
  '* Lists\n' +
  '* Lists\n' +
  '* [ ] todo\n' +
  '* [x] done\n' +
  '\n' +
  'A table:\n' +
  '\n' +
  '| a | b |\n' +
  '| - | - |\n' +
  '\n' +
  'Code:\n' +
  '```typescript\n' +
  code +
  '\n' +
  '```';

const Default: Story<FC> = (args) => {
  return <Post {...args}>{element}</Post>;
};

const Markdown: Story<IPostMd> = (args) => {
  return <Post.Md {...args}>{markdown}</Post.Md>;
};

export { Default, Markdown };

export default {
  title: 'Components/Post',
  component: Post,
  subcomponents: { 'Post.Md': Post.Md },
} as Meta;
