import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import Post, { IPostMd } from '../../components/Post';

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
  '```javascript\n' +
  '// test\n' +
  "console.log('test')\n" +
  'const tmp = {\n' +
  "  a: 'a'\n" +
  '}\n' +
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
