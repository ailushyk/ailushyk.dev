import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Layout } from '@/components/Layout'
import utilStyles from '@/styles/utils.module.css'
import { useTranslation } from 'next-i18next'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['main']),
  }
})

export default function Home() {
  const {t} = useTranslation('main')
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>{t('description')}</p>
        <p>My <Link href={'/posts'}>posts</Link></p>
      </section>
    </Layout>
  )
}
