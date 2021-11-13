import React from 'react';
import { Block } from '../../elements';
import { Meta, Story } from '@storybook/react';
import { BlockProps } from '../../elements/Block';

const Template: Story<BlockProps> = (args) => <Block {...args}>test</Block>;
const Default = Template.bind({});

export { Default };

export default {
  component: Block,
  title: 'Elements/Block',
} as Meta;
