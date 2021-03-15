import React from 'react'
import {getSortedPostsData} from 'lib/posts'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Layout from 'components/Layout'
import { DateView } from '../../components/Date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Index = ({allPostsData}) => {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({slug, date, title}) => (
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
