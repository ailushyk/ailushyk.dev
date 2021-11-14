import React, { FC, HTMLProps } from 'react';

export interface BlockProps extends HTMLProps<HTMLDivElement> {
  as?: 'div';
}

type TClasses = string | undefined;
const mergeClasses = (a: TClasses = '', b: TClasses = '') => {
  const set = new Set(a.split(' ').concat(b.split(' ')));
  return [...set].join(' ').trim();
};

export const Block: FC<BlockProps> = ({ as = 'div', children, ...props }) => {
  const classes = 'm-3 p-3';
  const className = mergeClasses(classes, props.className);
  return React.createElement(as, { ...props, className }, children);
};
