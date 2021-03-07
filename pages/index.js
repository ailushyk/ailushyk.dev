import utilStyles from 'styles/utils.module.css'
import Layout from 'components/Layout'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Alex. I'm software engineer</p>
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Layout>
  )
}
