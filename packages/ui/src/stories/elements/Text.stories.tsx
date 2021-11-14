import React, { FC } from 'react';
import { Text } from '../../elements';
import { Meta, Story } from '@storybook/react';

const Template: Story<FC> = (args) => <Text {...args}>Text here</Text>;
const Default = Template.bind({});

export { Default };

export default {
  component: Text,
  title: 'Elements/Text',
} as Meta;
