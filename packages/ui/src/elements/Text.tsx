import React, { FC } from 'react';

export const Text: FC = ({ children, ...props }) => {
  return <span {...props}>{children}</span>;
};
