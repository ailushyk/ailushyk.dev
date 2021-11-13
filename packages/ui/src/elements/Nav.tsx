import React, { FC, HTMLProps } from 'react';

export const Nav: FC<HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
  return React.createElement('nav', props, children);
};
