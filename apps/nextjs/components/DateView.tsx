import { format, parseISO } from 'date-fns';
import React, { FC } from 'react';

interface Props {
  date: string;
}

const DateView: FC<Props> = ({ date }) => {
  const parsedDate = parseISO(date);
  return <time dateTime={date}>{format(parsedDate, 'LLLL d, yyyy')}</time>;
};

export { DateView };
