import React, { FC, HTMLProps } from 'react';

interface CaptionProps extends HTMLProps<HTMLHeadElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Caption: FC<CaptionProps> = ({
  children,
  as = 'h2',
  ...props
}) => {
  return React.createElement(as, props, children);
};
