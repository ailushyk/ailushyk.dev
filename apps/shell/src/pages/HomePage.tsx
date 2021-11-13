import React, { FC } from 'react';
import { Block, Caption, Text } from 'ui/elements';

const HomePage: FC = () => {
  return (
    <Block>
      <Caption>Welcome!</Caption>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text>Hello, I'm Alex. I'm software engineer</Text>
    </Block>
  );
};
export default HomePage;
