import React from 'react';
import { Block, BlockProps } from '../../elements';
import { Meta, Story } from '@storybook/react';

const Template: Story<BlockProps> = (args) => <Block {...args}>test</Block>;
const Default = Template.bind({});

const Custom = Template.bind({});
Custom.args = {
  className: 'box-border border-solid border-4 border-light-blue-500',
};

export { Default, Custom };

export default {
  component: Block,
  title: 'Elements/Block',
} as Meta;
