import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'next-i18next'

const name = 'Alex I.'
export const siteTitle = 'Alex I.dev'

interface Props {
  home?: boolean
}

export const Layout: FC<Props> = ({ home = false, children }) => {
  const { t } = useTranslation('main')
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content={t('description')}
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  className={utilStyles.borderCircle}
                  width={108}
                  height={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}
