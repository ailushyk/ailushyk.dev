import React, { FC } from 'react';

export const Main: FC = ({ children, ...props }) => {
  return React.createElement('main', props, children);
};
