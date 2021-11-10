import React, { FC } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { api } from '../../config';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Props {
  img?: SanityImageSource;
}

const builder = imageUrlBuilder(api);

const urlFor = (source: SanityImageSource) => builder.image(source);

export const AuthorImage: FC<Props> = ({ img }) => {
  if (!img) {
    return null;
  }

  const src = urlFor(img).width(60).height(60).auto('format').url();
  return <img src={src} alt="author image" />;
};
