import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { DateView } from '@/components/Date'
import { Layout } from '@/components/Layout'
import { getSortedPostsData } from '@/lib/posts'
import utilStyles from '@/styles/utils.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export const getStaticProps: GetStaticProps = async({ locale }) => {
  const allPostsData = getSortedPostsData(locale)
  return {
    props: {
      allPostsData,
      ...await serverSideTranslations(locale, ['posts']),
    },
    revalidate: 1,
  }
}

const Index = ({ allPostsData }) => {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ slug, date, title }) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href={`/posts/${slug}`}>{title}</Link>
              <br />
              <small>
                <DateView date={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Index
