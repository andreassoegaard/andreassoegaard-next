import Head from 'next/head'
import { Poppins } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { HomeHeader } from '@/components/HomeHeader'
import { StackItems } from '@/components/StackItems'
import { OtherTechnologies } from '@/components/OtherTechnologies'
import { Projects } from '@/components/Projects'

const poppins = Poppins({ weight: ['300', '400', '500', '600'], subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Andreas Søgaard Pedersen | Frontend-udvikler | JavaScript, Vue.js, Nuxt.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${poppins.className}`}>
        <header>
          <HomeHeader />
        </header>
        <section>
          <StackItems />
        </section>
        <section>
          <OtherTechnologies />
        </section>
        <section>
          <Projects />
        </section>
      </main>
    </>
  )
}
