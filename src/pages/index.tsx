import type { NextPage } from 'next'
import Head from 'next/head'
import { Catalog, Contact, Hero, History, Team } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Máquinas Monteiro | Soluções para fabricação de joias</title>
        <meta name="description" content="Máquinas Monteiro" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="hero">
          <div className="container mx-auto px-9">
            <Hero />
          </div>
        </section>
        <section className="bg-base-200" id="history">
          <div className="container mx-auto px-8">
            <History />
          </div>
        </section>
        <section style={{ backgroundColor: '#171717' }} id="team">
          <div className="container mx-auto px-8">
            <Team />
          </div>
        </section>
        <section id="catalog">
          <div className="container mx-auto px-8">
            <Catalog />
          </div>
        </section>
        <section id="contact">
          <div className="container mx-auto px-8">
            <Contact />
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  )
}

export default Home
