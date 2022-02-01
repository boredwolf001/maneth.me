import Head from 'next/head'
import { About, Hero, Skills, Work, Contact } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Maneth | Developer</title>
      </Head>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}
