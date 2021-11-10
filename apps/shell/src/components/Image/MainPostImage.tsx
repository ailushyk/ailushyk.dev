import React, { FC } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { api } from '../../config';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Props {
  img?: SanityImageSource;
}

const builder = imageUrlBuilder(api);

const urlFor = (source: SanityImageSource) => builder.image(source);

export const MainPostImage: FC<Props> = ({ img }) => {
  if (!img) {
    return null;
  }

  const src = urlFor(img).height(200).auto('format').url();
  return <img src={src} alt="Post main image" />;
};
