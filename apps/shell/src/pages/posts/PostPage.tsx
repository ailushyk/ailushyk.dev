import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../../data/posts/usePost';
import { Loading } from '../../components/Loading';
import ReactMarkdown from 'react-markdown';
import { AuthorImage } from '../../components/Image/AuthorImage';
import { MainPostImage } from '../../components/Image/MainPostImage';

const PostPage: FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = usePost(slug as string);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>Post does not exist</div>;
  }

  return (
    <article>
      <header>
        <h1>{data.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AuthorImage img={data.authorImage} />
          <div>
            <div>
              <b>{data.author}</b>
            </div>
            <div>
              on{' '}
              <time
                dateTime={data.publishedAt.toString()}
                title={data.publishedAt.toDateString()}
              >
                {data.publishedAt.toDateString()}
              </time>
            </div>
          </div>
        </div>
      </header>
      <MainPostImage img={data.mainImage} />
      <ReactMarkdown>{data.body as string}</ReactMarkdown>
    </article>
  );
};

export default PostPage;
