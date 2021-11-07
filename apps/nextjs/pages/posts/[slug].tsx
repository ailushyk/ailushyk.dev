import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import utilStyles from '@/styles/utils.module.css';
import { Layout } from '@/components/Layout';
import { RichText } from 'prismic-reactjs';
import { DateView } from '@/components/DateView';
import { postsService } from '@/lib/api/postsService';
import { Locales } from '@/lib/constants';

const getStaticPaths: GetStaticPaths = async () => {
  const paths = await postsService.getPostsPaths();
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  // TODO: set up i18next
  const locale = Locales.pl;
  const post = await postsService.getPostData({
    slug: params.slug as string,
    locale,
  });
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

interface Props {
  post: any;
}

const Post: FC<Props> = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{RichText.asText(post.node.title)}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>
          {RichText.asText(post.node.title)}
        </h1>
        <div className={utilStyles.lightText}>
          <DateView date={post.node._meta.firstPublicationDate} />
        </div>
        <RichText render={post.node.content} />
      </article>
    </Layout>
  );
};

export { getStaticPaths, getStaticProps };

export default Post;
