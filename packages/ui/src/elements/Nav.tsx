import React, { FC } from 'react';

export const Nav: FC = ({ children, ...props }) => {
  return React.createElement('nav', props, children);
};
