import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'x3ff10fw',
  dataset: 'production',
  useCdn: true,
});
