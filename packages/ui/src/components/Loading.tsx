import React, { FC } from 'react';
import { Block } from '../elements/Block';
import { Text } from '../elements/Text';

export const Loading: FC = ({ children }) => (
  <Block>{children || <Text>Loading...</Text>}</Block>
);
