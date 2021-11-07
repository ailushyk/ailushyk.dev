import React from 'react'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { DateView } from '@/components/DateView'
import utilStyles from '@/styles/utils.module.css'
import { RichText } from 'prismic-reactjs'
import { postsService } from '@/lib/api/postsService'
import { GetStaticProps } from 'next'
import { useLocale } from '@/lib/useLocale'

export const getStaticProps: GetStaticProps = async() => {
  const { locale } = useLocale()
  const allPostsData = await postsService.getSortedPostsData({ locale })
  return {
    props: {
      allPostsData,
    },
    revalidate: 1,
  }
}

const Index = ({ allPostsData }) => {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Posts</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ node: { _meta: meta, title } }) => (
            <li className={utilStyles.listItem} key={meta.uid}>
              <Link href={`/posts/${meta.uid}`}>{RichText.asText(title)}</Link>
              <br />
              <small>
                <DateView date={meta.firstPublicationDate} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Index
