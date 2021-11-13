import React, { FC, HTMLProps } from 'react';

interface BlockProps extends HTMLProps<HTMLDivElement> {
  as?: 'div';
}

export const Block: FC<BlockProps> = ({ as = 'div', children, ...props }) => {
  return React.createElement(as, props, children);
};
