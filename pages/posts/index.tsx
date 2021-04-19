import React, { useEffect } from 'react'
import Link from 'next/link'
import { Layout } from 'components/Layout'
import { DateView } from '@/components/DateView'
import utilStyles from '@/styles/utils.module.css'
import { RichText } from 'prismic-reactjs'
import { postsService } from '@/lib/api/postsService'
import { Locales } from '@/lib/constants'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async() => {
  // TODO: set up i18next
  const locale = Locales.pl
  const allPostsData = await postsService.getSortedPostsData({ locale })
  return {
    props: {
      allPostsData,
    },
    revalidate: 1
  }
}

const Index = ({ allPostsData }) => {
  useEffect(() => {
    const t = async() => {
      const response = await postsService.getPostsPaths()
      console.log(response)
    }
    t()
  })
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ node: { _meta: meta, title } }) => (
            <li className={utilStyles.listItem} key={meta.id}>
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
