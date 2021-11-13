import React, { FC } from 'react';
import { Block, Text } from '../elements';

export const Loading: FC = ({ children }) => (
  <Block>{children || <Text>Loading...</Text>}</Block>
);
