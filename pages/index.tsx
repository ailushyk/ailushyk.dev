import utilStyles from 'styles/utils.module.css'
import Layout from 'components/Layout'
import styles from 'styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Alex. I'm software engineer</p>
        <p>My <Link href={'/posts'}>posts</Link></p>
      </section>
    </Layout>
  )
}
