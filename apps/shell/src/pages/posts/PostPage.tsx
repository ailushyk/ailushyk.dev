import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../../data/posts/usePost';
import { Loading } from 'ui/components';
import ReactMarkdown from 'react-markdown';
import { AuthorImage } from '../../components/Image/AuthorImage';
import { MainPostImage } from '../../components/Image/MainPostImage';
import { Block, Caption } from 'ui/elements';

const PostPage: FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = usePost(slug as string);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <Block>Post does not exist</Block>;
  }

  return (
    <article>
      <header>
        <Caption as={'h1'}>{data.title}</Caption>
        <Block style={{ display: 'flex', alignItems: 'center' }}>
          <AuthorImage img={data.authorImage} />
          <Block>
            <Block>
              <b>{data.author}</b>
            </Block>
            <Block>
              on{' '}
              <time
                dateTime={data.publishedAt.toString()}
                title={data.publishedAt.toDateString()}
              >
                {data.publishedAt.toDateString()}
              </time>
            </Block>
          </Block>
        </Block>
      </header>
      <MainPostImage img={data.mainImage} />
      <ReactMarkdown>{data.body as string}</ReactMarkdown>
    </article>
  );
};

export default PostPage;
