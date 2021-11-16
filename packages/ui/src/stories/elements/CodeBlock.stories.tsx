import { CodeBlock, ICodeBlock } from '../../elements/CodeBlock';
import { Story } from '@storybook/react';
import React from 'react';

const code =
  '// test\n' +
  "console.log('test')\n\n" +
  'const tmp = {\n' +
  "  a: 'a'\n" +
  '}\n\n' +
  'export const hello = (name: string) => {\n' +
  '  return `Hello ${name}`;\n' +
  '};';

const Default: Story<ICodeBlock> = (args) => {
  return <CodeBlock {...args} />;
};

export { Default };

export default {
  title: 'Elements/CodeBlock',
  component: CodeBlock,
  args: {
    language: 'typescript',
    children: code,
  },
};
