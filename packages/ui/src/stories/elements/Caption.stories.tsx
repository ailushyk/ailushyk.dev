import React from 'react';
import { Caption } from '../../elements';
import { Meta, Story } from '@storybook/react';
import { CaptionProps } from '../../elements/Caption';

// eslint-disable-next-line react/prop-types
const Template: Story<CaptionProps> = (args) => <Caption {...args} />;

const Default = Template.bind({});
Default.args = { children: 'h2 header' };

const H1 = Template.bind({});
H1.args = { as: 'h1', children: 'h1 header' };

export { Default, H1 };

export default {
  component: Caption,
  title: 'Elements/Caption',
} as Meta;
