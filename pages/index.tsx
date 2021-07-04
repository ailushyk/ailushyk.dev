import Link from 'next/link'
import { Layout } from '@/components/Layout'
import utilStyles from '@/styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Alex. I'm software engineer</p>
        <ul>
          <li>My <Link href={'/posts'}>posts</Link></li>
          <li><Link href={'/skill-factory'}>Skill Factory</Link></li>
        </ul>
      </section>
    </Layout>
  )
}
