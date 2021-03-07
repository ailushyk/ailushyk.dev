import React, { FC } from 'react'
import Layout from 'components/Layout'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
import { GetStaticPaths } from 'next'
import Head from 'next/head'
import { DateView } from '../../components/Date'
import utilStyles from 'styles/utils.module.css'

const getStaticPaths: GetStaticPaths = async() => {
  // Return a list of possible value for id
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

const getStaticProps = async({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const post = await getPostData(params.slug)
  return {
    props: {
      post,
    },
  }
}

interface Props {
  post: any
}

const Post: FC<Props> = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <DateView date={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  )
}

export {
  getStaticPaths,
  getStaticProps,
}
export default Post
